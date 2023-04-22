<script setup lang='ts'>

</script>

<template>
    <div class="listStyle1">
        <!-- 文章列表 -->
        <div class="item">
            <!-- 文章封面 -->
            <div class="cover">
                <!-- <img src="https://liuyuyang.net/usr/uploads/2023/04/1258239203.jpeg" alt=""> -->
            </div>

            <!-- 文章信息 -->
            <div class="info">
                <a href="javascript:;">
                    <h3>如何查看 Python 项目中所依赖的包</h3>

                    <p>如何查看 Python 项目中所依赖的包查看已安装的包可以使用 pip 命令来查看已安装的包，命令如下：pip list这个命令会列出所有已安装的包及其版本信息。查看包的详细信息如果想查看某个包</p>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.listStyle1 {
    .item {
        position: relative;
        overflow: hidden;
        display: flex;
        height: 230px;
        border-radius: 5px;
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
            font-family: cursive, 黑体, Microsoft Yahei Font;

            a {
                display: block;

                h3 {
                    color: #333;
                    padding-top: 10px;
                    transition: color $move;

                    &:hover {
                        color: $color;
                    }
                }

                p {
                    padding-top: 30px;
                    line-height: 30px;

                    // 多行文本溢出
                    display: -webkit-box !important;
                    overflow: hidden;
                    word-break: break-all;
                    text-overflow: ellipsis;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                }
            }
        }
    }
}
</style>