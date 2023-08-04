const cover = [
    "https://t3.picb.cc/2023/08/04/ITNcx6.jpeg",
    "https://t3.picb.cc/2023/08/04/ITN4rM.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNCW7.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNGSt.jpeg",
    "https://t3.picb.cc/2023/08/04/ITN1kT.jpeg",
    "https://t3.picb.cc/2023/08/04/ITN5cr.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNHoF.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNOi1.jpeg",
    "https://t3.picb.cc/2023/08/04/ITN8QJ.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNAz0.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNQyi.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNhtu.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNWWd.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNqxa.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNvrD.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNbQW.jpeg",
    "https://t3.picb.cc/2023/08/04/ITN3Sv.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNacL.jpeg",
    "https://t3.picb.cc/2023/08/04/ITN0iR.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNjDw.jpeg",
]

// 随机预览图
export function randomImage() {
    const n = Math.floor(Math.random() * ((cover.length - 1) - 0 + 1) + 0);

    return cover[n]
}