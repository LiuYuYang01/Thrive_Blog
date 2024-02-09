<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { addCommentDataAPI } from '@/api/Comment'
// @ts-ignore
import type { Comment } from '@/types/Comment'

// 表情框是否显示
const isEmote = ref<boolean>(false)

// 评论区表单校验
const CommentSchema = yup.object({
    content: yup.string().required("评论内容不能为空").max(150, "评论内容不能超过150个字符"),
    name: yup.string().required("名称不能为空"),
    email: yup.string().required("邮箱不能为空").email("请输入正确的邮箱"),
    url: yup.string().url("请输入正确的网站地址"),
})

const id = useRoute().params.id

// 收集评论框的内容
const commentInfo = ref<Comment>({
    content: "",
    name: "",
    email: "",
    url: "",
    avatar: '',
    aid: +id,
    rid: 0
})

// 评论提示信息
const commentData = ref<string>("来发一针见血的评论吧~");

// 添加表情
const addEmote = (url: string) => {
    const img = `<img src="${url}">`
    commentInfo.value.content += img
    isEmote.value = false
}

// 表单实例
const content = ref()
const form = ref()
const isPublish = ref<boolean>(false);

// 回复的文章id
const Commentid = ref<number>(0);

// 修改回复文章ID
const reply = (data: { id: number, name: string }) => {
    Commentid.value = data.id;
    commentData.value = `回复评论给：${data.name}`;
}

// 发布评论
const postComment = () => {
    // 发布评论之前先校验一下
    CommentSchema.validate(commentInfo.value, { abortEarly: false }).then(async value => {
        // 通过QQ邮箱生成头像
        commentInfo.value.avatar = `https://q1.qlogo.cn/g?b=qq&nk=${commentInfo.value.email.split("@")[0]}&s=640`;

        // 解决第二次发不出去评论bug
        if (!commentInfo.value.url) commentInfo.value.url = "";

        // 如果有id就是二级评论，没有就是一级评论
        if (Commentid.value) {
            commentInfo.value.aid = 0;
            commentInfo.value.rid = Commentid.value;
        }else{
            commentInfo.value.aid = +id
            commentInfo.value.rid = 0;
        }

        // 调用发布评论接口
        const { code, message } = await addCommentDataAPI(commentInfo.value);
        if (code != 200) return ElMessage({ message: message, type: 'error' })

        // 将数据信息保存到本地，方便下一次评论
        saveLocally()

        // 重置数据
        content.value.resetForm()
        // form.value.resetForm()

        // 消息提示
        ElMessage({ message: "恭喜你发布评论成功!", type: 'success' })

        isPublish.value = !isPublish.value;

        commentData.value = "来发一针见血的评论吧~";

        Commentid.value = 0
    }).catch(error => {
        console.log(error,333);
        
        // 数据校验
        content.value.validate()
        form.value.validate()

        ElMessage({ message: '请确保每一项不能为空!', type: 'error' })
    })
}

// 将数据信息保存到本地，方便下一次评论
const saveLocally = () => {
    const data = { name: commentInfo.value.name, email: commentInfo.value.email, url: commentInfo.value.url }
    localStorage.setItem("commentInfo", JSON.stringify(data))
}

// 页面加载完成后，先判断本地有没有数据，如果有就从本地读取
onMounted(() => {
    const data = localStorage.getItem("commentInfo") && JSON.parse(localStorage.getItem("commentInfo") as string) || { name: "", email: "", url: "" };

    [commentInfo.value.name, commentInfo.value.email, commentInfo.value.url] = [data.name, data.email, data.url]
})
</script>

<template>
    <div class="Comment">
        <div class="title"></div>

        <!-- 评论框 -->
        <Form :validation-schema="CommentSchema" as="div" ref="content" class="frame">
            <div style="position: relative;">
                <Field type="textarea" as="textarea" name="content" :placeholder="commentData" class="ipt"
                    style="height: 150px;" v-model="commentInfo.content" />

                <!-- 表情按钮 -->
                <img src="@/assets/svg/other/emote.svg" class="btn" @click="isEmote = !isEmote" />
            </div>

            <div class="errInfo" style="margin-top: -10px;">
                <ErrorMessage name="content" />
            </div>
        </Form>

        <!-- 表情框 -->
        <Emote :isEmote="isEmote" @addEmote="addEmote" />

        <Form :validation-schema="CommentSchema" as="div" ref="form" class="form">
            <!-- 表单项 -->
            <div>
                <Field type="text" name="name" class="ipt" style="width: 200px;" placeholder="显示名称 *"
                    v-model="commentInfo.name" />
                <div>
                    <ErrorMessage name="name" class="errInfo" />
                </div>
            </div>

            <div>
                <Field type="text" name="email" class="ipt" placeholder="电子邮箱 *" v-model="commentInfo.email" />
                <div>
                    <ErrorMessage name="email" class="errInfo" />
                </div>
            </div>

            <div>
                <Field type="text" name="url" class="ipt" style="width: 314px;" placeholder="你的站点（选填） *"
                    v-model="commentInfo.url" />
                <div>
                    <ErrorMessage name="url" class="errInfo" />
                </div>
            </div>
        </Form>

        <!-- 发布评论 -->
        <div class="post" @click="postComment">
            <a href="javascript:;">发表评论</a>
        </div>

        {{ commentInfo }} |  {{ Commentid }}
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

.Comment {
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
            background-color: #2682fb;
        }
    }
}
</style>
