interface Info {
  id?: number;
  cover: string; // 封面
  title: string; // 标题
  view: number; // 浏览量
  cate: Cate[]; // 分类
  comment: number; // 评论数量
  createTime?: string; // 创建时间
}

interface Article extends Info {
  description: string; // 简述
  content: string; // 文章内容
  tag: string; // 标签
  prev: Article | null, // 上一个
  next: Article | null // 下一个
}
