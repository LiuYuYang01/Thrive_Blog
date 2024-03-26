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
