// 分页查询函数
export default function paginateComments(
  comments: any[],
  pageNum: number,
  pageSize: number
) {
  const startIndex = (pageNum - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedComments = comments.slice(startIndex, endIndex);
  return paginatedComments;
}
