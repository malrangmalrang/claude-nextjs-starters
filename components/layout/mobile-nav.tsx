'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

/**
 * 모바일 네비게이션 메뉴
 * - Sheet 컴포넌트 사용
 * - 햄버거 버튼으로 열기
 */
export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="메뉴 열기"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>메뉴</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-6">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-foreground px-2 py-1 rounded-md',
                  isActive
                    ? 'text-foreground bg-accent'
                    : 'text-muted-foreground'
                )}
              >
                {item.label}
              </Link>
            )
          })}

          {/* 구분선 */}
          <Separator className="my-2" />

          {/* 로그인 버튼 */}
          <Button asChild className="w-full">
            <Link href="/login" onClick={() => setOpen(false)}>
              로그인
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
