import { getRandom } from "./index";

import { useConfigStore } from '@/stores'
const store = useConfigStore()

// 所有文章预览图
const cover: string[] = store.web.covers;

// 随机预览图
export function randomImage() {
  return cover[getRandom(0, cover.length - 1)];
}
