<script setup lang="ts">
import { addLinkDataAPI, getLinkListAPI, getLinkTypeListAPI } from '@/api/Link'
import { Type, Cate, Link, LinkType } from '@/types/Link'
import { svg } from '@/utils'
import { FormInstance } from 'element-plus';

// 加载效果
const loading = ref(false)

// 网站列表
const list = ref<Type>({})
// 网站类型列表
const linkTypeList = ref<LinkType[]>([])

// 获取网站列表
const getLinkList = async () => {
    loading.value = true

    list.value = {}
    const { data } = await getLinkListAPI({ page: 1, size: 99999 })

    // 将所有type类型做一个分类
    data.result.forEach(item => {
        const k = list.value[item.type]

        if (k) {
            // 如果有这个类型就添加数据
            k.list.push(item)
            k.type = item.type
        } else {
            // 没有就设置为空数组
            list.value[item.type] = { type: item.type, list: [item] } as Cate
        }
    })

    loading.value = false
}

// 获取网站类型列表
const getLinkTypeList = async () => {
    const { data } = await getLinkTypeListAPI()
    linkTypeList.value = data
}
getLinkTypeList()

// 初次加载做一些事情
onMounted(async () => {
    await getLinkList()

    // 获取朋友圈的高度
    const bgHeight: CSSStyleDeclaration = (document.querySelector(".friend_bg") as HTMLElement).style;
    const FriendHeight: number = (document.querySelector(".friend_bg .container") as HTMLElement).offsetHeight;

    bgHeight.height = (FriendHeight - 50) + "px";
})

// 控制弹框显示与隐藏
const model = ref<boolean>(false)

const form = ref<FormInstance>()

// 网站表单数据
const link = ref<Link>({
    title: "",
    description: "",
    email: "",
    image: "",
    url: "",
    type: "",
})

const rules = {
    title: [
        { required: true, message: "网站标题不能为空", trigger: "blur" },
        { min: 2, max: 30, message: "网站标题限制在2 ~ 30个字符", trigger: "blur" }
    ],
    description: [
        { required: true, message: "网站描述不能为空", trigger: "blur" },
        { min: 2, max: 100, message: "网站描述限制在2 ~ 100个字符", trigger: "blur" }
    ],
    email: [
        { required: true, message: "网站邮箱不能为空", trigger: "blur" }
    ],
    image: [
        { required: true, message: "网站图标不能为空", trigger: "blur" }
    ],
    url: [
        { required: true, message: "网站链接不能为空", trigger: "blur" }
    ],
    type: [
        { required: true, message: "网站类型不能为空", trigger: "blur" }
    ]
}

// 提交表单
const submit = () => {
    // 新增之前先校验一下数据是否合法
    form.value?.validate(async valid => {
        if (valid) {
            // 新增网站
            await addLinkDataAPI(link.value)

            list.value = {}

            ElNotification({
                title: '成功',
                message: "🎉提交成功，请等待审核",
                type: 'success',
            })

            // 重置校验并初始化数据
            form.value?.resetFields()

            // 获取最新数据
            getLinkList()

            // 关闭表单弹框
            model.value = false
        }
    })
}
</script>

<template>
    <div class="swiper">
        <Swiper src="https://bu.dusays.com/2023/11/05/65473848ed863.jpg" :Ripple="true">
            <div class="title">一个人的寂寞, 一群人的狂欢!</div>
            <div class="application" @click="model = true">申请友联</div>
        </Swiper>
    </div>

    <!-- 朋友圈 -->
    <div class="friend_bg">
        <div class="container" v-loading="loading" :element-loading-svg="svg" element-loading-svg-view-box="-10, -10, 50, 50">
            <div class="cate" v-for="item, index in list" :key="index">
                <div class="title">{{ item.type }}</div>

                <div class="list">
                    <div class="item" v-for="web in item.list">
                        <a :href="web.url" target="_blank" class="box">
                            <img :src="web.image" alt="">

                            <div class="info">
                                <div class="name">{{ web.title }}</div>
                                <div class="description">{{ web.description }}</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <!-- 空状态 -->
            <Null v-if="!loading && list?.length" />
        </div>
    </div>

    <!-- 申请友联表单 -->
    <div class="link">
        <el-dialog v-model="model" title="申请友情链接" width="30%">
            {{ link }}
            <el-form ref="form" label-position="top" label-width="100px" :rules="rules" :model="link" size="large"
                style="max-width: 460px">
                <el-form-item label="标题" prop="title">
                    <el-input v-model="link.title" placeholder="Thrive" />
                </el-form-item>

                <el-form-item label="描述" prop="description">
                    <el-input v-model="link.description" placeholder="记录前端、Python、Java点点滴滴" />
                </el-form-item>

                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="link.email" placeholder="3311118881@qq.com" />
                </el-form-item>

                <el-form-item label="头像" prop="image">
                    <el-input v-model="link.image" placeholder="https://liuyuyang.net/logo.png" />
                </el-form-item>

                <el-form-item label="链接" prop="url">
                    <el-input v-model="link.url" placeholder="https://liuyuyang.net/" />
                </el-form-item>

                <el-form-item label="类型" prop="type">
                    <el-select v-model="link.type" placeholder="请选择你的网站类型" style="width: 100%;">
                        <el-option v-for="item in linkTypeList" :key="item.id" :label="item.name" :value="item.id" />
                    </el-select>
                </el-form-item>
            </el-form>

            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" size="large" @click="submit">提交申请</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/public.scss";

.swiper {
    position: relative;

    :deep(.Swiper) {
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
        z-index: 2;

        &:active {
            background-color: #3c9a6d;
        }
    }
}

.friend_bg {
    position: relative;
    padding: 50px 0;
    background: linear-gradient(45deg, #fff1eb, #ace0f9);
    transition: background $move;
}

.container {
    position: absolute;
    top: -190px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
    width: $w;
    padding: 30px;
    margin: 50px auto;
    background-color: #fff;
    @include container;

    .cate {
        position: relative;
        margin-bottom: 30px;

        .title {
            font-size: 30px;
            padding-bottom: 20px;
            color: $textColor;
            border-bottom: 1px dotted #eee;
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
                border: 1px solid #eee;
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
                            color: #666;
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

.link {
    :deep(.el-dialog) {
        .el-dialog__header {
            text-align: center;
        }

        .el-dialog__body {
            padding: 10px 30px;
        }

        .dialog-footer .el-button {
            width: 100%;
        }
    }

    .el-form-item {
        margin-bottom: 20px;
    }

    .el-form {
        .el-form-item:last-child {
            margin-bottom: 5px;
        }
    }
}
</style>
