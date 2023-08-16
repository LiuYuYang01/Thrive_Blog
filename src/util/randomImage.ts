import { getRandom } from "./random";

const cover = [
    "https://t3.picb.cc/2023/08/12/I952Y6.jpeg",
    "https://t3.picb.cc/2023/08/12/I95yj7.jpeg",
    "https://t3.picb.cc/2023/08/12/I9ro4s.jpeg",
    "https://t3.picb.cc/2023/08/12/I9rdVe.jpeg",
    "https://t3.picb.cc/2023/08/12/I9rKFN.jpeg",
    "https://t3.picb.cc/2023/08/12/I9rEAK.jpeg",
    "https://t3.picb.cc/2023/08/12/I9rsLj.jpeg",
    "https://t3.picb.cc/2023/08/12/I9rUvy.jpeg",
    "https://t3.picb.cc/2023/08/05/ITjUV6.jpeg",
    "https://t3.picb.cc/2023/08/05/ITj9F7.jpeg",
    "https://t3.picb.cc/2023/08/05/ITjTAs.jpeg",
    "https://t3.picb.cc/2023/08/05/ITjPLN.jpeg",
    "https://t3.picb.cc/2023/08/05/ITjFhK.jpeg",
    "https://t3.picb.cc/2023/08/05/ITjBlc.jpeg",
    "https://t3.picb.cc/2023/08/05/ITjSKj.jpeg",
    "https://t3.picb.cc/2023/08/05/ITj0jy.jpeg",
    "https://t3.picb.cc/2023/08/05/ITjp4G.jpeg",
    "https://t3.picb.cc/2023/08/04/ITN0iR.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNjDw.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNbQW.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNacL.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNQyi.jpeg",
    "https://t3.picb.cc/2023/08/04/ITN3Sv.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNvrD.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNhtu.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNqxa.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNOi1.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNAz0.jpeg",
    "https://t3.picb.cc/2023/08/04/ITN8QJ.jpeg",
    "https://t3.picb.cc/2023/08/04/ITN5cr.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNHoF.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNGSt.jpeg",
    "https://t3.picb.cc/2023/08/04/ITN4rM.jpeg",
    "https://t3.picb.cc/2023/08/04/ITN1kT.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNcx6.jpeg",
    "https://t3.picb.cc/2023/08/04/ITNCW7.jpeg",
]

// 随机预览图
export function randomImage() {
    return cover[getRandom(0, cover.length - 1)];
}