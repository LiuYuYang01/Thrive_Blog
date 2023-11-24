import Request from "@/util/Request";

// 新增评论
export function addCommentDataAPI(data: Comment): http<Comment> {
  return Request.instance.request({
    url: `/api/comment`,
    method: "post",
    data,
  });
}

// 获取评论信息
export function getCommentDataAPI(id: string): http<Comment[]> {
  return Request.instance.request({
    url: `/api/comment/${id}`,
    params: id,
  });
}

// 获取评论列表
export const getCommentListAPI = (params?: Page): http<Comment[]> => {
  // 如果有参数就是分页查询，没有参数就是查询全部
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
