import { API, MAX_ARTICEL_COUNT } from 'const/microCms'
import { useArticles } from 'hook/blogs/articles/useArticles'
import { useCategories } from 'hook/blogs/categories/useCategories'
import { CategoryDetailHeader } from 'ui/components/blogs/features/categories/CategoryDetailHeader/CategoryDetailHeader'
import { ArticleCardList } from 'ui/components/blogs/features/articles/ArticleCardList'
import { Pagination, PAGE_PATTERN } from 'ui/components/blogs/common/Pagination'
import { generateStaticParams } from './generateStaticParams'

interface CategoryPagesPageParams {
  params: {
    id: string
    pageId: string
  }
}

export default async function CategoryPagesPage({
  params: { id, pageId },
}: CategoryPagesPageParams) {
  const { getArticlesByCategoryId } = useArticles({
    apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
    baseEndpint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    blogEndpoint: API.BLOG.END_POINT,
    maxPageArticleCount: MAX_ARTICEL_COUNT,
  })
  const { getCategoryById } = useCategories({
    apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
    baseEndpint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    categoryEndpoint: API.CATEGORY.END_POINT,
  })
  const { category } = await getCategoryById(id)
  const { articles, totalPageCount } = await getArticlesByCategoryId(id, pageId)

  return (
    <>
      <CategoryDetailHeader category={category} />
      <div className="mt-5">
        <ArticleCardList articles={articles} />
      </div>
      <Pagination
        totalPage={totalPageCount}
        currentPageNumber={Number(pageId)}
        currentPagePattern={PAGE_PATTERN.CATEGORY_PAGES}
        cagegoryId={id}
      />
    </>
  )
}

export { generateStaticParams }
