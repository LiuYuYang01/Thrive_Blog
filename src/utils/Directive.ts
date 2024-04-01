import { App } from "vue";

import { getDefaultAvatar } from '@/utils'

// 自定义 Vue 指令
export default (app: App<Element>) => {
    // 处理图片不显示问题
    app.directive('avatar', (el, binding) => {
        // 监听图片加载失败
        el.addEventListener('error', () => {
            el.src = getDefaultAvatar()
        });

        // 监听图片加载成功
        // el.addEventListener('load', function () {
        //     console.log('图片加载完成');
        //     // 在这里执行你想要的操作，例如显示图片等
        // });
    })
}