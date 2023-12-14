import { Blog } from 'type/microCMS'

export interface MicroCmsBlogUsecaseGetBlogsParams {
  limit: boolean
  offset: number
  maxArticleCount: number
  categoryId?: string
  tagId?: string
}

export interface MicroCmsBlogUsecaseGetBlogsResponse {
  blogs: Blog[]
  totalCount: number
}

export interface MicroCmsBlogUsecaseGetBlogByIdParams {
  id: string
}

export interface MicroCmsBlogUsecaseGetBlogByIdResponse {
  blog: Blog
}
