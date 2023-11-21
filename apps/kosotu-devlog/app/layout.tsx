// const
import { SITE_NAME, CHATCH_PHRASE } from 'const/global'
import { SUB_MENU_LIST } from 'const/menu'
import { METADATA } from 'const/metadata'
// components
import { Header } from 'ui/components/blogs/Header'
import { Footer } from 'ui/components/blogs/Footer'
// styles
import 'public/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Header
          siteName={SITE_NAME}
          catchPhrase={CHATCH_PHRASE}
          // TODO: fetchに変更
          globalMenu={[
            {
              label: 'フロントエンド',
              url: '/categories/frontend',
              children: [
                {
                  label: 'React',
                  url: '/categories/react',
                },
                {
                  label: 'Vue.js',
                  url: '/categories/vue',
                },
              ],
            },
          ]}
        />
        {children}
        <Footer siteName={SITE_NAME} menuList={SUB_MENU_LIST} />
      </body>
    </html>
  )
}

export const metadata = METADATA
