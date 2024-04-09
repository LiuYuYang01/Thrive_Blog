<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { addCommentDataAPI } from '@/api/Comment'
import { FormInstance } from 'element-plus';

// 控制表情框是否显示
const isEmote = ref<boolean>(false)

// 评论区表单校验
const commentSchema = yup.object({
    content: yup.string().required("内容不能为空").max(150, "内容不能超过150个字符"),
    name: yup.string().required("名称不能为空"),
    email: yup.string().required("邮箱不能为空").email("请输入正确的邮箱"),
    avatar: yup.string().url("请输入正确的头像地址"),
    url: yup.string().url("请输入正确的网站地址"),
})

// 当前文章ID
const id = useRoute().params.id

// 收集评论框的内容
const data = ref<Discuss>({
    content: "",
    name: "",
    email: "",
    url: "",
    avatar: '',
    aid: +id,
    rid: 0,
    audit: 0
})

// 评论提示信息
const placeholder = ref<string>("来发一针见血的评论吧~");

// 添加表情
const addEmote = (url: string) => {
    const img = `<img src="${url}">`
    data.value.content += img
    isEmote.value = false
}

// 表单实例
const content = ref()
const form = ref<FormInstance>()
const isPublish = ref<boolean>(false);

// 回复的文章id
const cid = ref<number>(0);

// 修改回复文章ID
const reply = (data: { id: number, name: string }) => {
    cid.value = data.id;
    placeholder.value = `回复评论给：${data.name}`;
}

// 发布评论
const postComment = () => {
    // 发布评论之前先校验一下
    commentSchema.validate(data.value, { abortEarly: false }).then(async value => {
        // 解决第二次发不出去评论bug
        if (!data.value.url) data.value.url = "";

        // 如果有id就是二级评论，没有就是一级评论
        if (cid.value) {
            data.value.aid = 0;
            data.value.rid = cid.value;
        } else {
            data.value.aid = +id
            data.value.rid = 0;
        }

        // 调用发布评论接口
        await addCommentDataAPI(data.value);

        // 将数据信息保存到本地，方便下一次评论
        saveLocally()

        // 重置数据
        content.value.resetForm()

        // 消息提示
        ElMessage({ message: "🎉发布评论成功, 请等待审核!", type: 'success' })

        isPublish.value = !isPublish.value;

        placeholder.value = "来发一针见血的评论吧~";

        cid.value = 0
    }).catch(error => {
        // 数据校验
        content.value.validate()
        form.value?.validate()

        ElMessage({ message: '请确保每一项输入合法!', type: 'error' })
    })
}

// 将数据信息保存到本地，方便下一次评论
const saveLocally = () => {
    const info = { name: data.value.name, email: data.value.email, avatar: data.value.avatar, url: data.value.url }
    localStorage.setItem("data", JSON.stringify(info))
}

// 页面加载完成后，先判断本地有没有数据，如果有就从本地读取
onMounted(() => {
    const info = localStorage.getItem("data") && JSON.parse(localStorage.getItem("data") as string) || { name: "", email: "", avatar: "", url: "" };

    [data.value.name, data.value.email, data.value.avatar, data.value.url] = [info.name, info.email, info.avatar, info.url]
})
</script>

<template>
    <div class="comment">
        <div class="title"></div>

        <!-- 评论框 -->
        <Form :validation-schema="commentSchema" as="div" ref="content" class="frame">
            <div style="position: relative;">
                <Field type="textarea" as="textarea" name="content" :placeholder="placeholder" class="ipt"
                    style="height: 150px;" v-model="data.content" />

                <!-- 表情按钮 -->
                <img src="@/assets/svg/other/emote.svg" class="btn" @click="isEmote = !isEmote" />
            </div>

            <div class="errInfo" style="margin-top: -10px;">
                <ErrorMessage name="content" />
            </div>
        </Form>

        <!-- 表情框 -->
        <!-- <Emote :isEmote="isEmote" @addEmote="addEmote" /> -->

        <Form :validation-schema="commentSchema" as="div" ref="form" class="form">
            <!-- 表单项 -->
            <div>
                <Field type="text" name="name" class="ipt" style="width: 200px;" placeholder="显示名称 *" v-model="data.name" />
                <div>
                    <ErrorMessage name="name" class="errInfo" />
                </div>
            </div>

            <div>
                <Field type="text" name="email" class="ipt" placeholder="电子邮箱 *" v-model="data.email" />
                <div>
                    <ErrorMessage name="email" class="errInfo" />
                </div>
            </div>

            <div>
                <Field type="text" name="avatar" class="ipt" style="width: 314px;" placeholder="头像（选填） *"
                    v-model="data.avatar" />
                <div>
                    <ErrorMessage name="avatar" class="errInfo" />
                </div>
            </div>

            <div style="width: 100%;">
                <Field type="text" name="url" class="ipt" style="width: 100%;" placeholder="你的站点（选填） *"
                    v-model="data.url" />
                <div>
                    <ErrorMessage name="url" class="errInfo" />
                </div>
            </div>
        </Form>
        
        <!-- 发布评论 -->
        <div class="post" @click="postComment">
            <a href="javascript:;">发表评论</a>
        </div>
    </div>

    <List :isPublish="isPublish" @reply="reply" />
</template>

<style scoped lang="scss">
// 封装表单样式
@mixin form {
    border: 1px solid #eee;
    border-radius: 5px;
    box-sizing: border-box;
    transition: all $move;
    outline: none;

    &:focus {
        border: 1px solid $color;
        box-shadow: 0 10px 20px 1px rgb(83, 157, 253, .1);
    }
}

.comment {
    margin-top: 70px;

    // 评论标题
    .title {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #f7f7f7;
        transition: background-color $move;

        &::after {
            content: "一针见血 🎉";
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            width: 180px;
            background-color: #fff;
            text-align: center;
            font-size: 24px;
            transition: all $move;
        }
    }

    // 评论框
    .frame {

        // 内容框
        textarea {
            width: 100%;
            padding: 20px;
            margin-top: 40px;

            @include form;
        }

        // 表情按钮
        .btn {
            position: absolute;
            bottom: 10px;
            left: 0px;
            width: 35px;
            height: 35px;
            padding: 15px;
            cursor: pointer;
        }
    }

    // 表单
    .form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 15px;
    }

    // 错误信息
    .errInfo {
        color: #e15951;
        font-size: 13px;
        padding-left: 10px;
    }

    // 表情框
    .emote {
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

            &:last-of-type {
                border: none !important;
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

    // 表单项
    .ipt {
        width: 250px;
        height: 32px;
        padding-left: 15px;
        margin-right: 20px;

        @include form;

        &:last-of-type {
            margin-right: 0;
        }
    }

    // 发布评论
    .post {
        height: 35px;
        margin-top: 15px;
        border-radius: $round;
        background-color: $color;
        text-align: center;

        a {
            display: inline-block;
            width: 100%;
            height: 100%;
            color: #fff;
        }

        &:active {
            background-color: #2682fb !important;
        }
    }
}
</style>
