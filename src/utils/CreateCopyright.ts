// 引入用户信息
import useUserStore from '@/stores/Author'
import { storeToRefs } from 'pinia';

const store = useUserStore()
const { authorInfo } = storeToRefs(store)

store.getAuthor()

// 复制文本自动生成版权信息
document.addEventListener('copy', function (event) {
    const clipboardData = event.clipboardData || (<any>window).clipboardData;
    if (!clipboardData) return

    // 获取复制的内容
    const text = window.getSelection()!.toString();

    // 如果有内容
    if (text) {
        // 阻止默认行为
        event.preventDefault();
        // 生成版权信息
        clipboardData.setData('text/plain', `${text}\n\n作者：${authorInfo.value.name}\n原文链接：${this.location.href}\n著作权归作者所有，商业转载请联系作者获得授权，非商业转载请注明出处`);
    }
});