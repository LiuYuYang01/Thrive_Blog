import Request from "@/util/Request";

// 获取文章数据
export const getArticleAPI = (id: number): http<Article> => {
  return Request.instance.request({
    url: `/api/article/${id}`,
  });
};

// 获取文章列表
// export const getArticleListAPI = (): http<Article[]> => {
//   return Request.instance.request({
//     url: "/api/article",
//   });
// };

// 获取文章列表
export const getArticleListAPI = (params: Page): http<Paginate<Article[]>> => {
  return Request.instance.request({
    url: `/api/article?page=${params.page}&size=${params.size}`,
  });
};
