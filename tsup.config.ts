import { defineConfig } from 'tsup'

export default defineConfig(
    [
        {
            entry: ['./src/index.ts'],
            format: ['cjs', 'esm'],
            outDir: './dist',
            clean: true,
            bundle: true,
            external: ['./package.json'],
            outExtension: ({ format }) =>
                ({ js: format === 'esm' ? '.mjs' : '.cjs' }),
        },
        {
            entry: { index: './src/index.ts' },
            format: 'esm',
            outDir: './dist',
            dts: { only: true },
        },
    ],
)
