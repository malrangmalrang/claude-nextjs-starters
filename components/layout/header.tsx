import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { MobileNav } from '@/components/layout/mobile-nav'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { SITE_CONFIG } from '@/lib/constants'

/**
 * 사이트 헤더
 * - 고정 상단 네비게이션
 * - 로고, 메뉴, 테마 토글
 * - 반응형 (데스크톱/모바일)
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center gap-4">
            <MobileNav />
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-lg">{SITE_CONFIG.name}</span>
            </Link>
          </div>

          {/* 데스크톱 네비게이션 */}
          <Navigation />

          {/* 테마 토글 */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
