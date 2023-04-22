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
                <h3>如何查看 Python 项目中所依赖的包</h3>

                <p>如何查看 Python 项目中所依赖的包查看已安装的包可以使用 pip 命令来查看已安装的包，命令如下：pip list这个命令会列出所有已安装的包及其版本信息。查看包的详细信息如果想查看某个包...</p>
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
            clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
        }

        // 文章信息
        .info {
            width: 65%;
            padding: 20px;
        }
    }
}
</style>