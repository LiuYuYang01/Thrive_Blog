<script setup lang="ts">
import { Link, Cate } from '@/types/Link'

const linkData = ref<Cate[]>([
    {
        title: "💻 技术类",
        list: [
            {
                id: 1,
                title: "Thrive",
                description: "记录一个架构师的崛起",
                email: "3311118881@qq.com",
                image: "https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640",
                url: "/",
            },
            {
                title: "Keep Running",
                description: "迟博勋",
                email: "",
                image: "https://www.chiboxun.com/img/touxiang.jpg",
                url: "https://www.chiboxun.com"
            },
            {
                title: "夏夜小鹿",
                description: "夏夜小鹿，是夏，也是露",
                email: "",
                image: "https://blog-static-1312414756.cos.ap-beijing.myqcloud.com/config/20c79361df4f83d0e0fbb1c5696cf7c9.JPG",
                url: "https://xiayexiaolu.top/"
            },
            {
                title: "xiaoger",
                description: "个人学习和分享壁纸的博客",
                email: "",
                image: "https://image.xiaoger.top/xiaoger/config/xiaoger.jpg",
                url: "https://xiaoger.top"
            },
            {
                title: "在码圈",
                description: "代码改变未来，努力coding",
                email: "",
                image: "https://www.bedebug.com/avatar",
                url: "https://www.bedebug.com"
            },
            {
                title: "MrWu",
                description: "网络安全博客,分享黑客攻防技术和WordPress笔记.",
                email: "",
                image: "https://www.mrwu.red/favicon.ico",
                url: "https://www.mrwu.red"
            },
            {
                title: "Leonus",
                description: "进一寸有进一寸的欢喜",
                email: "",
                image: "https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5",
                url: "https://blog.leonus.cn/"
            },
            {
                title: "M酷的前端Blog",
                description: "一个专注分享前端技术和趋势的博客",
                email: "",
                image: "https://bbchin.com/logo",
                url: "https://bbchin.com"
            },
            {
                title: "ChenZhen的客栈",
                description: "个人博客，分享技术文章、自建ChatGPT提示库、在线聊天网页",
                email: "",
                image: "https://www.chenzhen.space/images/me.jpg",
                url: "https://www.chenzhen.space"
            },
            {
                title: "观后无感博客",
                description: "经历反反复复，终是观后无感",
                email: "",
                image: "http://q1.qlogo.cn/g?b=qq&nk=2383262410&s=100",
                url: "https://www.blog18.cn"
            },
            {
                id: 16,
                title: "耶瞳空间",
                description: "静坐于万花筒，在绚烂中寻找那唯一的本源",
                email: "3311118881@qq.com",
                image: "https://s1.ax1x.com/2023/06/02/p9zTn0O.png",
                url: "http://space.eyescode.top"
            },
            {
                title: "小杨生活志",
                description: "我们都有属于自己的单车，一切都那么简单，生活大部分是平淡，不需要过多的眼泪和笑来说明多糟糕或多美好",
                email: "",
                image: "https://blog.zwying.com/usr/uploads/sina/63adb58f409aa.jpg",
                url: "https://www.yanghuaxing.com/"
            },
            {
                title: "Leo's Blog",
                description: "THIS IS MY STORY.",
                email: "",
                image: "https://s1.ax1x.com/2020/04/18/JnAGbF.jpg",
                url: "https://www.isolitude.cn/"
            },
            {
                title: "Jack’s Space",
                description: "VeryJack 的个人空间",
                email: "",
                image: "https://pix.veryjack.com/i/2023/04/04/fsxnkv.webp",
                url: "https://veryjack.com"
            },
            {
                title: "沫言博客",
                description: "这个世界从来都不公平，你只有努力，才能换来那些平等的待遇。",
                email: "",
                image: "https://6hi.cn/photo/logo.png",
                url: "https://6hi.cn"
            },
            {
                title: "itsNeko",
                description: "有源源就有我！",
                email: "",
                image: "https://dyfa.top/usr/themes/Nabo-theme-typecho-main/image/logo.jpg",
                url: "https://dyfa.top"
            },
            {
                title: "零叁壹",
                description: "心怀阳光，必有诗和远方！",
                email: "",
                image: "https://bu.dusays.com/2023/08/04/64cbd7e695896.jpg",
                url: "https://blog.oiii.top"
            }
        ]
    },
    {
        title: "🏄‍♂️ 生活类",
        list: [
            {
                id: 1,
                title: "Thrive",
                description: "记录一个架构师的崛起",
                email: "3311118881@qq.com",
                image: "https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640",
                url: "/",
            },
            {
                id: 2,
                title: "张洪Heo",
                description: "分享设计与科技生活",
                email: "3311118881@qq.com",
                image: "https://bu.dusays.com/2022/12/28/63ac2812183aa.png",
                url: "https://blog.zhheo.com/"
            },
            {
                id: 3,
                title: "友人C",
                description: "友人C的个人空间",
                email: "3311118881@qq.com",
                image: "https://s1.ax1x.com/2023/06/02/p9zTn0O.png",
                url: "http://space.eyescode.top"
            },
            {
                id: 4,
                title: "秦枫鸢梦",
                description: "花有重开日，人无再少年",
                email: "3311118881@qq.com",
                image: "https://blog.zwying.com/avatar.jpg",
                url: "https://blog.zwying.com"
            },
            {
                id: 5,
                title: "生活倒影",
                description: "这是一个 Vue2 Vue3 与 SpringBoot 结合的产物～",
                email: "3311118881@qq.com",
                image: "https://s1.ax1x.com/2022/11/10/z9E7X4.jpg",
                url: "https://poetize.cn/"
            },
            {
                id: 6,
                title: "心月云",
                description: "须知少时凌云志，曾许人间第一流！",
                email: "3311118881@qq.com",
                image: "https://wch666.com/head.png",
                url: "https://wch666.com"
            },
            {
                id: 7,
                title: "一克猫",
                description: "一只微不足道的猫",
                email: "3311118881@qq.com",
                image: "https://cravatar.cn/avatar/7adbfaef92d9d082be5dec39f3fe3d02?s=200",
                url: "https://www.1gcat.com"
            },
            {
                id: 8,
                title: "频率",
                description: "风卷过的起点",
                email: "3311118881@qq.com",
                image: "https://cravatar.cn/avatar/cc763511474fe24ffcc80257fb7cb970?s=256",
                url: "https://pinlyu.com/"
            },
            {
                id: 9,
                title: "青灯暮雨",
                description: "再渺小的星光，也有属于它的光芒",
                email: "3311118881@qq.com",
                image: "https://www.blatr.cn/images/adminAvatar.jpg",
                url: "https://www.blatr.cn"
            },
            {
                id: 10,
                title: "相左",
                description: "心有山海，静而不争",
                email: "3311118881@qq.com",
                image: "https://qiniu.ztyang.com/img/wechatavatar.jpg",
                url: "https://www.ztyang.com"
            },
            {
                id: 11,
                title: "Echo’s blog",
                description: "韶华不为少年留 恨悠悠 几时休",
                email: "3311118881@qq.com",
                image: "https://yy.liveout.cn/photo/photo2.jpg",
                url: "https://www.liveout.cn/index/"
            },
            {
                id: 12,
                title: "奇异纬度",
                description: "不曾与你分享的时间，我在进步。",
                email: "3311118881@qq.com",
                image: "https://blog.isww.cn/logo.head.jpg",
                url: "https://blog.isww.cn/"
            },
            {
                id: 13,
                title: "正物博客",
                description: "一场凡梦，一份追求。",
                email: "3311118881@qq.com",
                image: "https://www.zwbo.com/tx.png",
                url: "https://www.zwbo.com/"
            },
            {
                id: 14,
                title: "HONG的小站",
                description: "或许是个二次元？",
                email: "3311118881@qq.com",
                image: "https://blog.zwying.com/usr/uploads/sina/63adb58e798d4.jpg",
                url: "https://hongweblog.com/"
            },
            {
                id: 15,
                title: "七鳄の学习格",
                description: "如果世界多了精彩，每一位都是创造者，大家都是你的观众",
                email: "3311118881@qq.com",
                image: "https://blog.gmcj0816.top/img/SeriousWission_TouXiangPic.png",
                url: "https://blog.gmcj0816.top/"
            },
            {
                id: 16,
                title: "耶瞳空间",
                description: "静坐于万花筒，在绚烂中寻找那唯一的本源",
                email: "3311118881@qq.com",
                image: "https://s1.ax1x.com/2023/06/02/p9zTn0O.png",
                url: "http://space.eyescode.top"
            },
            {
                title: "小杨生活志",
                description: "我们都有属于自己的单车，一切都那么简单，生活大部分是平淡，不需要过多的眼泪和笑来说明多糟糕或多美好",
                email: "",
                image: "https://blog.zwying.com/usr/uploads/sina/63adb58f409aa.jpg",
                url: "https://www.yanghuaxing.com/"
            },
            {
                title: "Leo's Blog",
                description: "THIS IS MY STORY.",
                email: "",
                image: "https://s1.ax1x.com/2020/04/18/JnAGbF.jpg",
                url: "https://www.isolitude.cn/"
            },
            {
                title: "Sehnsucht",
                description: "transient",
                email: "",
                image: "https://s2.loli.net/2022/11/21/I9QUtsXcZK6wgH4.png",
                url: "https://blog.sehnsucht.top/"
            },
            {
                title: "Jack’s Space",
                description: "VeryJack 的个人空间",
                email: "",
                image: "https://pix.veryjack.com/i/2023/04/04/fsxnkv.webp",
                url: "https://veryjack.com"
            },
            {
                title: "沫言博客",
                description: "这个世界从来都不公平，你只有努力，才能换来那些平等的待遇。",
                email: "",
                image: "https://6hi.cn/photo/logo.png",
                url: "https://6hi.cn"
            },
            {
                title: "itsNeko",
                description: "有源源就有我！",
                email: "",
                image: "https://dyfa.top/usr/themes/Nabo-theme-typecho-main/image/logo.jpg",
                url: "https://dyfa.top"
            },
            {
                title: "零叁壹",
                description: "心怀阳光，必有诗和远方！",
                email: "",
                image: "https://bu.dusays.com/2023/08/04/64cbd7e695896.jpg",
                url: "https://blog.oiii.top"
            },
            {
                title: "永恒末匕",
                description: "留下瞬间，记录永恒。",
                email: "",
                image: "https://q.qlogo.cn/headimg_dl?dst_uin=1527335101&spec=640&img_type=jpg",
                url: "https://www.avbk.cn/"
            },
            {
                title: "ZYYO笔记",
                description: "热烈而自由。",
                email: "",
                image: "https://zyyo.net/a.jpg",
                url: "https://zyyo.net/"
            },
            {
                title: "优世界",
                description: "记录生活点点滴滴。",
                email: "",
                image: "https://usj.cc/favicon.ico",
                url: "https://usj.cc"
            },
            {
                title: "Derek Dekker Blog",
                description: "记录生活想法和技术文档",
                email: "",
                image: "https://assets.derekdekker.com/wp-content/uploads/2021/11/cropped-IMG_6927-1-2.jpeg",
                url: "https://derekdekker.com"
            },
            {
                title: "博客录（boke.lu）",
                description: "boke.lu · 博客收录展示平台~",
                email: "",
                image: "https://boke.lu/logo.png",
                url: "https://boke.lu"
            },
            {
                title: "轻风记",
                description: "风会记得一朵花的香",
                email: "",
                image: "https://hilzl.cn/ico/favicon.ico",
                url: "https://hilzl.cn/"
            },
            {
                title: "努力向前",
                description: "别人云亦云，要有自己的思考",
                email: "",
                image: "https://static.greatiga.cn/greatiga.jpg",
                url: "https://greatiga.cn/"
            },
            {
                title: "关关和六六",
                description: "向世界分享我们的故事",
                email: "",
                image: "https://www.gmcllp.cn/logo-y.png",
                url: "https://www.gmcllp.cn"
            },
            {
                title: "云烟成雨",
                description: "迷失的人迷失了，相逢的人会再相逢。",
                email: "",
                image: "https://q1.qlogo.cn/g?b=qq&nk=396823203&s=640",
                url: "https://shiyu.dev"
            },
            {
                title: "SunJianJian",
                description: "远处会有云，也会有未来",
                email: "",
                image: "https://www.sunjianjian.com/tx.png",
                url: "https://www.sunjianjian.com"
            },
            {
                title: "蝉時雨",
                description: "蝉鸣如雨，花宵道中",
                email: "",
                image: "https://www.chanshiyu.com/avatar.jpg",
                url: "https://chanshiyu.com"
            },
            {
                title: "阿锋的小宇宙",
                description: "沧海一粟，微亮渺小一只虫。",
                email: "",
                image: "https://cravatar.cn/avatar/868740183b995d2707e307ce0a89633a?s=200",
                url: "https://feng.pub"
            },
            {
                title: "FANnn",
                description: "帆",
                email: "",
                image: "https://fan.ilnafz.cn/头像/mmexportc9cd15d51a5be38b7c11885b18f8e73c_1662039304408.jpeg",
                url: "https://ilnafz.cn"
            },
            {
                title: "火喵酱",
                description: "世人皆萌，唯我独帅！",
                email: "",
                image: "https://www.mmbkz.cn/logo",
                url: "https://www.mmbkz.cn"
            },
            {
                title: "网友小宋",
                description: "一介草民，只为生活！",
                email: "",
                image: "https://img.xyzbz.cn/i/2022/05/20/62870d1504cc7.png",
                url: "https://xyzbz.cn/"
            },
            {
                title: "茫跟的小屋",
                description: "茫跟的一些个人日记、随笔",
                email: "",
                image: "https://www.mongon.cn/logo.png",
                url: "https://www.mongon.cn/"
            },
            {
                title: "设计笔记",
                description: "无描述",
                email: "",
                image: "https://cravatar.cn/avatar/22278c1d83002246dca48b52e306b1c9?s=96&d=mm&r=g",
                url: "https://biji.io"
            }
        ]
    }
])

onMounted(() => {
    // 获取朋友圈的高度
    const bgHeight = document.querySelector(".bg") as HTMLElement;
    const FriendHeight = document.querySelector(".bg .Friend") as HTMLElement;
    const height = FriendHeight.offsetHeight;

    bgHeight.style.height = (height - 50) + "px";
})
</script>

<template>
    <div class="swiper">
        <Swiper src="https://liuyuyang.net/img/8b9c118a724f4fca9ae8d5c455b15ceb_VY7UBT.jpg" :Ripple="true">
            <div class="title">一个人的寂寞, 一群人的狂欢!</div>
            <div class="application">申请友联</div>
        </Swiper>
    </div>

    <!-- 朋友圈 -->
    <div class="bg">
        <div class="Friend">
            <div class="cate" v-for="{ title, list } in linkData" :key="title">
                <div class="title">{{ title }}</div>

                <div class="list">
                    <div class="item" v-for="item in list" :key="item.id">
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
        </div>
    </div>
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
    background: linear-gradient(45deg, #fff1eb, #ace0f9);
}

.Friend {
    position: absolute;
    top: -190px;
    left: 50%;
    transform: translateX(-50%);
    width: $w;
    padding: 30px;
    margin: 50px auto;
    background-color: #fff;
    @include container;

    .cate {
        position: relative;
        margin-bottom: 30px;

        // &::after {
        //     position: absolute;
        //     top: 0px;
        //     left: 4px;
        //     content: "#";
        //     padding-right: 5px;
        //     font-size: 30px;
        //     vertical-align: middle;
        //     color: $color;
        // }

        .title {
            font-size: 30px;
            // padding-left: 30px;
            padding-bottom: 20px;
            border-bottom: 1px dotted #eee;
            text-align: center;
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

                &:nth-child(4n) {
                    margin-right: 0;
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
                        // .name {}

                        .description {
                            color: #666;
                            margin-top: 5px;

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
</style>
