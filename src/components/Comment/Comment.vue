<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

// 引入提示框
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

// 表情框是否显示
const isEmote = ref<boolean>(false)

// 评论区表单校验
const CommentSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    url: yup.string().required().url(),
})

// tippy实例
let tooltip: any;

const name = ref()
const email = ref()
const url = ref()

onMounted(() => {
    tooltip = tippy('#mouse', {
        content: "I'm a Tippy tooltip!",
        placement: "left"
    })

    // 调用show方法，默认显示提示框
    // tooltip[0].show()

    console.log(name.value,email,url);
})
</script>

<template>
    <!-- <button @click="tooltip.show()">按钮</button> -->
    <div id="mouse">鼠标经过</div>

    <div class="Comment">
        <div class="title"></div>

        <!-- 评论框 -->
        <div class="frame">
            <textarea name="" id="" cols="30" rows="7" placeholder="不断进取，创造无限可能🎉"></textarea>

            <!-- 表情按钮 -->
            <img src="@/assets/svg/other/emote.svg" class="btn" @click="isEmote = !isEmote" />
        </div>

        <!-- 表情框 -->
        <Emote :isEmote="isEmote" />

        <Form :validation-schema="CommentSchema">
            <!-- 表单项 -->
            <Field type="text" name="name" class="ipt" style="width: 200px;" placeholder="显示名称 *" />
            <ErrorMessage name="name" ref="name" />

            <Field type="text" name="email" class="ipt" placeholder="电子邮箱 *" />
            <ErrorMessage name="email" ref="email" />

            <Field type="text" name="url" class="ipt" style="width: 314px;" placeholder="你的站点（选填） *" />
            <ErrorMessage name="url" ref="url" />
        </Form>

        <!-- 发布评论 -->
        <div class="post">
            <a href="javascript:;">发布</a>
        </div>
    </div>
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
    margin-top: 100px;

    // 评论标题
    .title {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #f7f7f7;

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
        }
    }

    // 评论框
    .frame {
        position: relative;

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
        margin-bottom: 200px;
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
