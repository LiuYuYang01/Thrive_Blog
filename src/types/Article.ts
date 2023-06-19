export interface Article {
    id?: number,
    title: string, //标题
    sketch: string, //简述
    content: string, //文章内容
    view: number, //浏览量
    cate: string, //分类
    comment: number, //评论数量
    tag: string, //标签
    date: string, //创建时间
    cover: string, //封面
}