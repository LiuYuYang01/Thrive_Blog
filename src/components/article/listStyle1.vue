<script setup lang='ts'>
import { ref } from 'vue'
import { Article } from '@/types/Article'
import { getArticleListAPI } from '@/api/Article'

const articleList = ref<Article[]>([])

// 获取文章列表
const getArticleList = async () => {
    try {
        const { data } = await getArticleListAPI()
        articleList.value = data
    } catch (error) {
        console.log("在获取文章列表中捕获到错误：", error);
    }
}
getArticleList()
</script>

<template>
    <div class="listStyle1">
        <!-- 文章列表 -->
        <div class="item" v-for="item,index in articleList">
            <!-- 文章封面 -->
            <div class="cover" v-if="index % 2 === 0"></div>

            <!-- 文章信息 -->
            <div class="info">
                <a href="javascript:;">
                    <h3>如何查看 Python 项目中所依赖的包</h3>

                    <p>如何查看 Python 项目中所依赖的包查看已安装的包可以使用 pip 命令来查看已安装的包，命令如下：pip list这个命令会列出所有已安装的包及其版本信息。查看包的详细信息如果想查看某个包</p>

                    <div class="fun" v-if="index % 2 === 0">
                        <span>⏰ 2023/04/22</span>
                        <span>🔥 浏览量：345</span>
                        <span>🏷️ 开发记录</span>
                    </div>

                    <div class="fun" style="text-align: start;" v-else>
                        <span style="padding-left: 0;">⏰ 2023/04/22</span>
                        <span>🔥 浏览量：345</span>
                        <span>🏷️ 开发记录</span>
                    </div>
                </a>
            </div>

            <div class="cover" style="clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);"  v-if="index % 2 !== 0"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// 文章风格一
.listStyle1 {

    // 文章列表
    .item {
        position: relative;
        overflow: hidden;
        display: flex;
        height: 230px;
        margin-bottom: 15px;
        border-radius: $round;
        background-color: #fff;

        // 文章封面
        .cover {
            width: 35%;
            background: url(https://liuyuyang.net/usr/uploads/2023/04/1258239203.jpeg) no-repeat center;
            background-size: cover;
            transition: all $move;
            transform: scale(1);
            clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);

            &:hover {
                transform: scale(1.2);
                transition: all $move;
            }
        }

        // 文章信息
        .info {
            width: 65%;
            padding: 20px 40px;
            font-family: cursive, 宋体, 黑体, Microsoft Yahei Font;

            a {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;

                // 文章标题
                h3 {
                    position: relative;
                    width: 100%;
                    // height: 30px;
                    color: #333;
                    padding-top: 10px;
                    padding-bottom: 20px;
                    transition: color $move;

                    // 防止超长文本 溢出
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    // 下划线
                    &::after {
                        content: "";
                        position: absolute;
                        left: 0;
                        bottom: 5px;
                        width: 0%;
                        height: 3px;
                        background-color: $color;
                        transition: width $move;
                    }
                }

                // 文章简述
                p {
                    line-height: 30px;

                    // 多行文本溢出
                    display: -webkit-box !important;
                    overflow: hidden;
                    word-break: break-all;
                    text-overflow: ellipsis;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                }

                .fun {
                    padding-top: 20px;
                    text-align: end;

                    span {
                        padding-left: 30px;
                    }
                }
            }
        }

        // 鼠标经过文章样式
        &:hover .info h3 {
            color: $color;

            &::after {
                width: 100%;
            }
        }
    }
}
</style>