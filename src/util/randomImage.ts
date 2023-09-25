import { getRandom } from "./random";

const cover: string[] = [
  "https://liuyuyang.net/img/20ac414805e3491098df678d3d9f100f_KJCPUs.jpg",
  "https://liuyuyang.net/img/247838fba5a54c2994ad0866359d86f5_K5buF6.jpg",
  "https://liuyuyang.net/img/402fe9096d4e4bed9eeabbfdef386732_zsAD9s.jpg",
  "https://liuyuyang.net/img/49b109a6d4a546ea85e11ab7fe70376d_5kpGDX.jpg",
  "https://liuyuyang.net/img/6b0eb72221ac4240bdaea822f177ec8c_Ggu7os.jpg",
  "https://liuyuyang.net/img/70998e882b114a0699e9451fde485fab_Qap3Ik.jpg",
  "https://liuyuyang.net/img/74c798f2ffbc421292b4b61eedea0aff_fxogsI.jpg",
  "https://liuyuyang.net/img/8b9c118a724f4fca9ae8d5c455b15ceb_VY7UBT.jpg",
  "https://liuyuyang.net/img/bd257db2f5bf4b21abcb3953da70ac7b_33Gow8.jpg",
  "https://liuyuyang.net/img/c53f6bb032234729a220ded07674dd22_SK0tff.jpg",
  "https://liuyuyang.net/img/da179b76522a47d994bd5e49f5cf9740_SgElVc.jpg",
  "https://liuyuyang.net/img/f432adf5bbb646aca12df71269452954_DfangG.jpg",
];

// 随机预览图
export function randomImage() {
  return cover[getRandom(0, cover.length - 1)];
}
