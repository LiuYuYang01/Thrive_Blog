<script setup lang="ts">
import { getLinkListAPI } from '@/api/Link'

// 网站列表数据
const linkData = reactive<Link.Type>({})

// 加载效果
const loading = ref(false)
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `

// 获取网站列表数据
const getLinkList = async () => {
    loading.value = true

    const { data } = await getLinkListAPI()

    // 将所有type类型做一个分类
    data.forEach(item => {
        if (linkData[item.type]) {
            // 如果有这个类型就添加数据
            linkData[item.type].list.push(item)
            linkData[item.type].type = item.type
        } else {
            // linkData.value = {}
            // 没有就设置为空数组
            linkData[item.type] = { type: "", list: [] } as Link.Cate
        }
    })


    loading.value = false
}

// 初次加载做一些事情
onMounted(async () => {
    await getLinkList()

    // 获取朋友圈的高度
    const bgHeight: CSSStyleDeclaration = (document.querySelector(".bg") as HTMLElement).style;
    const FriendHeight: number = (document.querySelector(".bg .Friend") as HTMLElement).offsetHeight;

    bgHeight.height = (FriendHeight - 50) + "px";
})

// 控制弹框显示与隐藏
const dialogVisible = ref<boolean>(false)

const linkForm = ref({
    title: "",
    description: "",
    email: "",
    image: "",
    url: "",
})
</script>

<template>
    <div class="swiper">
        <Swiper src="https://bu.dusays.com/2023/11/05/65473848ed863.jpg" :Ripple="true">
            <div class="title">一个人的寂寞, 一群人的狂欢!</div>
            <!-- <div class="application">申请友联</div> -->
        </Swiper>
    </div>

    <!-- 朋友圈 -->
    <div class="bg">
        <div class="Friend" v-loading="loading" :element-loading-svg="svg" element-loading-svg-view-box="-10, -10, 50, 50">
            <div class="cate" v-for="{ type, list }, index in linkData" :key="index">
                <div class="title">{{ type }}</div>

                <div class="list">
                    <div class="item" v-for="item in list">
                        <a :href="item.url" target="_blank" class="box">
                            <img :src="item.image" alt="">

                            <div class="info">
                                <div class="name">{{ item.title }}</div>
                                <div class="description">{{ item.description }}</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <!-- 空状态 -->
            <!-- <Null style="margin-top: 30px;" v-if="!loading && !linkData?.length" /> -->
            <!-- <Null style="margin-top: -40px;" v-if="!linkData?.length" /> -->
        </div>
    </div>

    <!-- 申请友联表单 -->
    <el-dialog v-model="dialogVisible" title="申请友情链接" width="30%" class="linkForm">
        <el-form label-position="top" label-width="100px" :model="linkForm" size="large" style="max-width: 460px">
            <el-form-item label="标题">
                <el-input v-model="linkForm.title" />
            </el-form-item>

            <el-form-item label="描述">
                <el-input v-model="linkForm.description" />
            </el-form-item>

            <el-form-item label="邮箱">
                <el-input v-model="linkForm.email" />
            </el-form-item>

            <el-form-item label="图标">
                <el-input v-model="linkForm.image" />
            </el-form-item>

            <el-form-item label="链接">
                <el-input v-model="linkForm.url" />
            </el-form-item>
        </el-form>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogVisible = false">提交</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<style scoped lang="scss">
@import "@/styles/public.scss";

.swiper {
    position: relative;

    :deep .Swiper {
        background-position: center top;

        &::after {
            display: none;
        }
    }

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.2);
        width: 100%;
        height: 100%;
        padding-bottom: 150px;
        color: #fff;
        font-size: 40px;
        text-shadow: 0 0.1875rem 0.5rem #1c1f21;
    }

    .application {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
        width: 140px;
        height: 50px;
        line-height: 50px;
        border-radius: 30px;
        background-color: #49b984;
        text-align: center;
        color: #fff;
        cursor: pointer;
        z-index: 999;

        &:active {
            background-color: #3c9a6d;
        }
    }
}

.bg {
    position: relative;
    padding: 50px 0;
    background: $FriendBg;
    transition: background $move;
}

.Friend {
    position: absolute;
    top: -190px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
    width: $w;
    padding: 30px;
    margin: 50px auto;
    background-color: $bgColor;
    @include container;

    .cate {
        position: relative;
        margin-bottom: 30px;

        .title {
            font-size: 30px;
            padding-bottom: 20px;
            color: $textColor;
            border-bottom: 1px dotted $borderColor;
            text-align: center;
            transition: border $move;
        }

        .list {
            display: flex;
            flex-wrap: wrap;
            margin-top: 25px;

            .item {
                width: 270px;
                height: 100px;
                margin-bottom: 20px;
                margin-right: 19.5px;
                border: 1px solid $borderColor;
                border-radius: 5px;
                transition: all $move;

                &:nth-child(4n) {
                    margin-right: 0;
                }

                &:hover {
                    border: 1px solid $color;
                    transform: scale(1.07);

                    .box .info .name {
                        color: $color;
                    }
                }

                .box {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    height: 100%;

                    img {
                        width: 60px;
                        height: 60px;
                        margin-left: 10px;
                        margin-right: 15px;
                        border-radius: 50%;
                    }

                    .info {
                        .name {
                            color: $textColor;
                            transition: color $move;
                        }

                        .description {
                            color: $contentColor;
                            margin-top: 5px;
                            transition: color $move;

                            // 内容防止溢出
                            display: -webkit-box !important;
                            overflow: hidden;
                            word-break: break-all;
                            text-overflow: ellipsis;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                        }
                    }
                }
            }
        }
    }
}

.linkForm {
    .el-dialog__body {
        padding: 10px 20px;
    }

    .el-form-item {
        margin-bottom: 20px;
    }
}

.dialog-footer .el-button {
    padding: 0 10px;
}
</style>
