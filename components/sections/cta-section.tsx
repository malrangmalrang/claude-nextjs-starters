import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * Call-to-Action 섹션
 * - 사용자 행동을 유도하는 섹션
 */
export function CtaSection() {
  return (
    <section className="border-t bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-normal sm:text-4xl md:text-5xl">
              지금 바로 시작하세요
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              모든 설정이 완료되어 있습니다. 이 스타터킷을 복제하고 바로 개발을
              시작하세요.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                문의하기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">더 알아보기</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
