<script setup lang="ts">
import { computed, ref } from 'vue';
import { getEmoteListAPI } from '@/api/Emote'

const emit = defineEmits<{ (e: "addEmote", url: string): () => void }>()

// 表情包存放的地址
const url = "http://image.liuyuyang.net/emote"

// 表情框是否显示
const props = defineProps<{ isEmote: boolean }>()
const show = computed<boolean>(() => props.isEmote)

// 表情包列表
const EmoteList = ref<Emote[]>([])

// 表情包切换
const EmoteTab = ref<number>()

// 获取表情包列表
const getEmoteList = async () => {
    const { data } = await getEmoteListAPI()
    console.log(data,888);
    

    EmoteList.value = data
    EmoteTab.value = data[0].id
}
getEmoteList()



// 获取表情然后传递给父组件
const getEmote = (url: string) => emit("addEmote", url)
</script>

<template>
    <div class="Emote" v-show="show">
        <!-- 表情列表 -->
        <div class="list">
            <template v-for="item in EmoteList" :key="item.id">
                <!-- 根据条件进行渲染对应的表情包 -->
                <template v-if="item.id === EmoteTab">
                    <div class="item" v-for="emote in item.list" :key="emote"
                        @click="getEmote(`${url}/${item.name}/${emote}`)">
                        <img :src="`${url}/${item.name}/${emote}`" :title="emote">
                    </div>
                </template>
            </template>
        </div>

        <!-- 分组选项 -->
        <div class="tab">
            <div v-for="item in EmoteList" :key="item.id" :class="{ item, active: EmoteTab === item.id }"
                @click="EmoteTab = item.id">
                <img :src="item.cove" :title="item.name">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// 表情框
.Emote {
    position: absolute;
    width: 500px;
    height: 220px;
    border-radius: 5px;
    border: 1px solid #f0f0f0;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: saturate(180%) blur(10px);

    // 表情列表
    .list {
        overflow: auto;
        display: flex;
        flex-wrap: wrap;
        height: 80%;

        .item {
            border-radius: $round;
            transition: background-color $move;

            img {
                width: 40px;
                height: 40px;
                padding: 10px;
                cursor: pointer;
            }

            &:hover {
                background-color: #f0f6fd;
            }
        }
    }

    // 表情包分组
    .tab {
        display: flex;
        height: 20%;
        background-color: #f7f9fe;

        .item {
            transition: background-color $move;

            img {
                width: 30px;
                height: 30px;
                padding: 5px 15px;
                cursor: pointer;
            }
        }

        // 选中项
        .active {
            background-color: #f1f3f8;
        }
    }
}
</style>
