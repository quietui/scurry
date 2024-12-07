import { readdir, readFile, writeFile } from 'fs/promises';
import path from 'path';

interface FileConfig {
  path: string;
  prefix?: string;
  suffix?: string;
}

interface AnimationEntry {
  name: string;
  path: string;
  description?: string;
  type: 'emphasis' | 'transition';
}

async function getDescription(filePath: string): Promise<string | undefined> {
  try {
    const content = await readFile(filePath, 'utf-8');
    const match = content.match(/@description\s+([\s\S]*?)(?=\s*@|\s*\*\/)/);
    return match
      ? match[1]
          .split('\n')
          .map(line => line.replace(/^\s*\*\s?/, ''))
          .join(' ')
          .trim()
      : undefined;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return undefined;
  }
}

const toCamelCase = (str: string): string =>
  str
    .split('-')
    .map((part, i) => (i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)))
    .join('');

async function processDirectory(dirPath: string, type: AnimationEntry['type']): Promise<AnimationEntry[]> {
  const files = await readdir(dirPath);
  const tsFiles = files.filter(file => file.endsWith('.ts'));

  return Promise.all(
    tsFiles.map(async (file): Promise<AnimationEntry> => {
      const filePath = path.join(dirPath, file);
      const description = await getDescription(filePath);
      const baseName = file.replace('.ts', '');
      const name = toCamelCase(baseName);

      return {
        name,
        path: `dist/${type}/${baseName}.js`,
        type,
        ...(description && { description })
      };
    })
  );
}

async function generateContent(fileConfigs: FileConfig[]): Promise<void> {
  const directories = {
    emphasis: './src/emphasis',
    transition: './src/transition'
  };

  const animations = (
    await Promise.all([
      processDirectory(directories.emphasis, 'emphasis'),
      processDirectory(directories.transition, 'transition')
    ])
  ).flat();

  const manifestContent = `export const animations = ${JSON.stringify(animations, null, 2)};`;

  const files: Record<string, string> = {
    'src/manifest.ts': `${fileConfigs.find(c => c.path === 'src/manifest.ts')?.prefix ?? ''}${manifestContent}`,
    'src/index.ts': `${fileConfigs.find(c => c.path === 'src/index.ts')?.prefix ?? ''}${generateIndexContent(animations)}`
  };

  await Promise.all(
    Object.entries(files).map(([filePath, content]) =>
      writeFile(filePath, content).catch(error => console.error(`Error writing ${filePath}:`, error))
    )
  );
}

function generateIndexContent(animations: AnimationEntry[]): string {
  const exports = animations
    .map(({ name, type }) => {
      const kebabName = name.replace(/([A-Z])/g, c => `-${c.toLowerCase()}`);
      return `export { ${name} } from './${type}/${kebabName}.js';`;
    })
    .join('\n');

  return `// Types
export * from './types.js';

// Animations
${exports}`;
}

async function generateFiles(): Promise<void> {
  try {
    await generateContent([
      { path: 'src/manifest.ts', prefix: '// Animation manifest - auto-generated\n\n' },
      { path: 'src/index.ts', prefix: '// Index exports - auto-generated\n\n' }
    ]);
  } catch (error) {
    console.error('Error generating files:', error);
    throw error;
  }
}

generateFiles().catch(console.error);
