import Link from 'next/link'
import { ArrowRight, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * Hero 섹션
 * - 중앙 정렬 레이아웃
 * - 대형 제목과 부제목
 * - CTA 버튼들
 */
export function HeroSection() {
  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <div className="flex flex-col items-center text-center space-y-8">
        {/* 제목 */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-normal leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Next.js로 시작하는
            <br />
            <span className="text-primary">모던 웹 개발</span>
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Next.js 16, TypeScript, Tailwind CSS v4가 결합된 완벽한
            스타터킷으로 빠르게 프로젝트를 시작하세요.
          </p>
        </div>

        {/* CTA 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="gap-2">
            <Link href="/features">
              시작하기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>

        {/* 기술 스택 뱃지 */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            Next.js 16
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            TypeScript
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-500" />
            Tailwind CSS v4
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-purple-500" />
            shadcn/ui
          </div>
        </div>
      </div>
    </section>
  )
}
