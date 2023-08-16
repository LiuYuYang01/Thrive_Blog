// 封装随机数
export function getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}