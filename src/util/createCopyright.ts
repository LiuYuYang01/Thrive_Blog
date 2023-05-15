// 复制文本自动生成版权信息
document.addEventListener('copy', function (event) {
    const clipboardData = event.clipboardData || window.clipboardData;
    if (!clipboardData) return

    // 获取复制的内容
    const text = window.getSelection()!.toString();

    // 如果有内容
    if (text) {
        // 阻止默认行为
        event.preventDefault();
        // 生成版权信息
        clipboardData.setData('text/plain', text + '\n\n作者：金刀大菜牙\n原文链接：https://juejin.cn/post/7229193250903507004\n来源：宇阳\n版权：著作权归作者所有，商业转载请联系作者获得授权，非商业转载请注明出处');
    }
});