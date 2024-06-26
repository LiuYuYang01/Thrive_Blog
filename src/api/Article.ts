import Request from "@/utils/Request";

// 获取文章数据
export const getArticleAPI = (id: number): http<Article> => {
  return Request.instance.request({
    url: `/api/article/${id}`,
  });
};

// 获取文章列表
export const getArticleListAPI = (params?: Page): http<Paginate<Article[]>> => {
  // 如果有参数就是分页查询，没有参数就是查询全部
  if (params) {
    return Request.instance.request({
      url: `/api/article?page=${params.page}&size=${params.size}`,
    });
  } else {
    return Request.instance.request({
      url: "/api/article",
    });
  }
};

// 随机五篇文章
export const getRandomArticleAPI = (): http<Article[]> => {
  return Request.instance.request({
    url: `/api/article/random`,
  });
};

// 递增文章浏览量
export const editArticleViewAPI = (id: number): http<any> => {
  return Request.instance.request({
    method: "PATCH",
    url: `/api/article/view/${id}`
  });
};

// 获取指定分类下的所有文章
export const getArticleCateListAPI = (mark: string, params?: Page): http<Paginate<Article[]>> => {
  // 如果有参数就是分页查询，没有参数就是查询全部
  if (params) {
    return Request.instance.request({
      url: `/api/article/${mark}?page=${params.page}&size=${params.size}`,
    });
  } else {
    return Request.instance.request({
      url: `/api/article/${mark}`,
    });
  }
};
