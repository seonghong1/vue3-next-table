import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "dist", // 빌드된 결과물은 dist 폴더에 저장
    cssCodeSplit: false,
    lib: {
      entry: "./src/index.ts", // 엔트리 파일
      formats: ["es", "cjs"], // ES 및 CommonJS 형식으로 빌드
      name: "ViewerPlugin", // 라이브러리 이름
      fileName: (format) => `vue3-next-table.${format}.js`, // 출력 파일명
    },
    rollupOptions: {
      external: ["vue"], // 외부 의존성 vue 제외
      output: {
        exports: "named",
        globals: {
          vue: "Vue", // 글로벌 변수로 vue 설정
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/variables.scss" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src", // @를 src 폴더로 매핑
    },
  },
});
