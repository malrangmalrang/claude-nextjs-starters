'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

/**
 * 데스크톱 네비게이션 메뉴
 * - 가로 레이아웃
 * - 활성 링크 하이라이트
 */
export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-6">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-foreground',
              isActive
                ? 'text-foreground'
                : 'text-muted-foreground'
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
