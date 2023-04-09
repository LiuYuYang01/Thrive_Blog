import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

// 配置@路径别名
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    // 配置组件自动导入
    Components({
      // 使这两个目录下的文件不需要引入组件就能直接使用
      dirs: ["src/components", "src/views"],
      // 是否包括所有子目录都可以直接使用
      deep: true,
      // 组件的有效文件扩展名
      extensions: ["vue"],
      // 配置自动导入组件的文件生成的位置
      dts: "components.d.ts"
    })
  ],
  // ↓解析配置
  resolve: {
    // ↓路径别名
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        /**如果引入多个文件，可以使用
       * '@import "@/assets/sass/globalVariable1.sass"; @import"@/assets/sass/globalVariable2.sass";'
      **/
        additionalData: '@import "@/styles/global.scss";',
      }
    }
  },
})