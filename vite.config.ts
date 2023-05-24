import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// 配置@路径别名
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
      template: {
        // 不解析iconpark-开头的自定义组件
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('iconpark-')
        }
      }
    }),
    // 配置自动按需导入naive-ui
    AutoImport({
      imports: [
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    // 配置组件自动导入
    Components({
      resolvers: [NaiveUiResolver()],
      // 使这两个目录下的文件不需要引入组件就能直接使用
      dirs: ["src/components", "src/views"],
      // 是否包括所有子目录都可以直接使用
      deep: true,
      // 组件的有效文件扩展名
      extensions: ["vue"],
      // 配置自动导入组件的文件生成的位置
      dts: "components.d.ts",
    }),
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