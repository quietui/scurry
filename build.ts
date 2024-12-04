import { readdir, readFile, writeFile } from 'fs/promises';
import path from 'path';

/**
 * Configuration for file generation including path and optional prefix/suffix content
 */
interface FileConfig {
  path: string;
  prefix?: string;
  suffix?: string;
}

interface FileOutput {
  prefix: string;
  content: string;
  suffix: string;
}

interface AnimationEntry {
  path: string;
  description?: string;
}

/**
 * Extracts JSDoc description from file content
 */
async function getDescription(filePath: string): Promise<string | undefined> {
  try {
    const content = await readFile(filePath, 'utf-8');
    const match = content.match(/\/\*\*([\s\S]*?)\*\//);
    return match
      ? match[1]
          .trim()
          .replace(/\s*\*\s*/g, ' ')
          .trim()
      : undefined;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return undefined;
  }
}

/**
 * Converts kebab-case to camelCase
 */
const toCamelCase = (str: string): string =>
  str
    .split('-')
    .map((part, i) => (i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)))
    .join('');

/**
 * Generates manifest and index files from animation files
 */
async function generateContent(tsFiles: string[], fileConfigs: FileConfig[]): Promise<void> {
  const animationsDir = './src/animations';

  // Generate animations object with metadata
  const animations = Object.fromEntries(
    await Promise.all(
      tsFiles.map(async (file): Promise<[string, AnimationEntry]> => {
        const filePath = path.join(animationsDir, file);
        const description = await getDescription(filePath);
        const baseName = file.replace('.ts', '');

        return [
          toCamelCase(baseName),
          {
            path: `dist/animations/${baseName}.js`,
            ...(description && { description })
          }
        ];
      })
    )
  );

  const files: Record<string, FileOutput> = {
    'src/manifest.ts': {
      prefix: fileConfigs.find(c => c.path === 'src/manifest.ts')?.prefix ?? '',
      suffix: fileConfigs.find(c => c.path === 'src/manifest.ts')?.suffix ?? '',
      content: `const animations = ${JSON.stringify(animations, null, 2)};\n\nexport default animations;`
    },
    'src/index.ts': {
      prefix: fileConfigs.find(c => c.path === 'src/index.ts')?.prefix ?? '',
      suffix: fileConfigs.find(c => c.path === 'src/index.ts')?.suffix ?? '',
      content: generateIndexContent(animations)
    }
  };

  // Write all files concurrently
  await Promise.all(
    Object.entries(files).map(([filePath, { prefix, content, suffix }]) =>
      writeFile(filePath, `${prefix}${content}${suffix}`).catch(error =>
        console.error(`Error writing ${filePath}:`, error)
      )
    )
  );
}

/**
 * Generates the content for index.ts file
 */
function generateIndexContent(animations: Record<string, AnimationEntry>): string {
  const exports = Object.keys(animations)
    .map(name => {
      const kebabName = name.replace(/([A-Z])/g, c => `-${c.toLowerCase()}`);
      return `export { ${name} } from './animations/${kebabName}.js';`;
    })
    .join('\n');

  return `// Types
export * from './types.js';

// Animations
${exports}`;
}

/**
 * Main function to generate manifest and index files
 */
async function generateFiles(): Promise<void> {
  try {
    const files = await readdir('./src/animations');
    const tsFiles = files.filter(file => file.endsWith('.ts'));

    await generateContent(tsFiles, [
      { path: 'src/manifest.ts', prefix: '// Animation names - auto-generated\n\n' },
      { path: 'src/index.ts', prefix: '// Index exports - auto-generated\n\n' }
    ]);
  } catch (error) {
    console.error('Error generating files:', error);
    throw error;
  }
}

generateFiles().catch(console.error);
