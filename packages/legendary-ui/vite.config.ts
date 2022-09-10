import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import typescript from '@rollup/plugin-typescript'
import path from 'path'
import 'tslib'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       // 请确保外部化那些你的库中不需要的依赖
//       external: [],
//       output: {
//         // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
//         globals: {
//           react: 'React',
//         },
//       },
//     },
//     lib: {
//       entry: './components/index.ts',
//       name: 'legendary-design',
//     },
//   },
// })

const resolvePath = (str: string) => path.resolve(__dirname, str);

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolvePath("components/index.ts"),
      name: "componentsName",
      fileName: format => `componentsName.${format}.js`,
    },
    rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "react",
            "react-dom": "react-dom",
          },
        },
        plugins: [
          typescript({
            target: "es2015",
            rootDir: resolvePath("components/"),
            declaration: true,
            declarationDir: resolvePath("dist"),
            exclude: resolvePath("node_modules/**"),
            allowSyntheticDefaultImports: true,
          }),
        ],
    },
  },
})
