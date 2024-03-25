type ArticleLayout = "classics" | "card" | "waterfall"
type RightSidebar = "author" | "hotArticle" | "randomArticle" | "newComments"

// 布局配置
interface Layout {
    isArticleLayout: ArticleLayout,
    rightSidebar: RightSidebar[],
    swiperImage: string,
    swiperText: string[]
}