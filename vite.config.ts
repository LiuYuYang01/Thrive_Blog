import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 配置@路径别名
import { resolve } from "path"; 
 
export default defineConfig({
  plugins: [vue()],
      // ↓解析配置
  resolve: {
  	// ↓路径别名
  	alias: {
    	"@": resolve(__dirname, "./src")
    }
  }
})