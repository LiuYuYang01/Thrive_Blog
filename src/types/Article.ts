export interface Info {
    id?: number,
    cover: string, //封面
    title: string, //标题
    view: number, //浏览量
    cate: string, //分类
    comment: number, //评论数量
    date?: string, //创建时间
}

export interface Article extends Info {
    sketch: string, //简述
    content: string, //文章内容
    tag: string, //标签
}