import { getRandom } from "./index";

import { useConfigStore } from '@/stores'
const store = useConfigStore()

// 所有文章预览图
const cover = ref<string[]>([]);

// 随机预览图
export function randomImage() {
  cover.value = store.web.covers

  return cover.value[getRandom(0, cover.value.length - 1)];
}
