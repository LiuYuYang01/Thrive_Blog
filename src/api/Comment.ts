import Request from "@/utils/Request";

// 新增评论
export function addCommentDataAPI(data: Discuss): http<Discuss> {
  return Request.instance.request({
    url: `/api/comment`,
    method: "post",
    data,
  });
}

// 获取评论信息
export function getCommentDataAPI(id: string): http<Discuss[]> {
  return Request.instance.request({
    url: `/api/comment/${id}`,
    params: id,
  });
}

// 获取评论列表
export const getCommentListAPI = (params?: Page): http<Paginate<Discuss[]>> => {
  if (params) {
    return Request.instance.request({
      url: `/api/comment?page=${params.page}&size=${params.size}`,
    });
  } else {
    return Request.instance.request({
      url: "/api/comment",
    });
  }
};

// 获取指定文章中的所有评论
export const getArticleCommentListAPI = (aid: number): http<Discuss[]> => {
  return Request.instance.request({
    url: `/api/comment/article/${aid}`,
  });
};