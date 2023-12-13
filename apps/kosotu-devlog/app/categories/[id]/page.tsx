import { useArticles } from 'hooks/useArticles'
import { useCategories } from 'hooks/useCategories'
import { generateStaticParams } from './generateStaticParams'
import { CategoryDetailHeader } from 'ui/components/blogs/features/categories/CategoryDetailHeader/CategoryDetailHeader'
import { ArticleCardList } from 'ui/components/blogs/features/articles/ArticleCardList'
import { Pagination } from 'ui/components/blogs/common/Pagination'

interface CategoryPageParams {
  params: {
    id: string
  }
}

export default async function CategoryPage({
  params: { id },
}: CategoryPageParams) {
  const { getArticlesByCategoryId } = useArticles()
  const { getCategoryById } = useCategories()
  const { category } = await getCategoryById(id)
  const { articles, totalPageCount } = await getArticlesByCategoryId(id)

  return (
    <>
      <CategoryDetailHeader category={category} />
      <div className="mt-5">
        <ArticleCardList articles={articles} />
      </div>
      <Pagination currentPage={1} totalPage={totalPageCount} />
    </>
  )
}

export { generateStaticParams }
