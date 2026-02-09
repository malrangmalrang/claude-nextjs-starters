import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { SITE_CONFIG, NAV_ITEMS } from '@/lib/constants'

/**
 * 사이트 푸터
 * - 사이트 정보, 링크, 저작권
 */
export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 사이트 정보 */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg">{SITE_CONFIG.name}</h3>
            <p className="text-sm text-muted-foreground">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* 링크 */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">빠른 링크</h3>
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* 추가 정보 */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">정보</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Next.js 문서
              </a>
              <a
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                shadcn/ui
              </a>
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Tailwind CSS
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="text-center text-sm text-muted-foreground">
          {SITE_CONFIG.copyright}
        </div>
      </div>
    </footer>
  )
}
