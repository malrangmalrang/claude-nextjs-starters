import { Metadata } from 'next'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'About',
  description: 'Next.js Starter Kit에 대해 알아보세요',
}

/**
 * About 페이지
 * - 프로젝트 소개
 * - 기술 스택 소개
 */
export default function AboutPage() {
  const techStack = [
    { name: 'Next.js 16', description: 'React 기반 풀스택 프레임워크' },
    { name: 'TypeScript', description: '타입 안정성을 제공하는 JavaScript 슈퍼셋' },
    { name: 'Tailwind CSS v4', description: '유틸리티 우선 CSS 프레임워크' },
    { name: 'shadcn/ui', description: '재사용 가능한 컴포넌트 라이브러리' },
    { name: 'lucide-react', description: '아름다운 오픈소스 아이콘' },
    { name: 'React 19', description: '최신 React 라이브러리' },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* 헤더 */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-normal sm:text-5xl md:text-6xl">
            About
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl leading-relaxed">
            Next.js Starter Kit은 빠른 웹 개발을 위해 설계된 현대적인
            스타터킷입니다.
          </p>
        </div>

        {/* 프로젝트 소개 */}
        <Card>
          <CardHeader>
            <CardTitle>프로젝트 소개</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              이 스타터킷은 Next.js 16, TypeScript, Tailwind CSS v4의 최신 기술
              스택을 결합하여 개발자가 빠르게 프로젝트를 시작할 수 있도록
              설계되었습니다.
            </p>
            <p>
              모든 설정이 완료되어 있으며, 다크모드, 반응형 디자인, SEO 최적화
              등 현대적인 웹 애플리케이션에 필요한 핵심 기능들이 구현되어
              있습니다.
            </p>
            <p>
              shadcn/ui 컴포넌트 라이브러리를 사용하여 아름답고 접근성이 높은 UI
              컴포넌트를 제공하며, 쉽게 커스터마이징할 수 있습니다.
            </p>
          </CardContent>
        </Card>

        {/* 기술 스택 */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-normal">기술 스택</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techStack.map((tech) => (
              <Card key={tech.name}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {tech.name}
                    <Badge variant="secondary">최신</Badge>
                  </CardTitle>
                  <CardDescription>{tech.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* 주요 특징 */}
        <Card>
          <CardHeader>
            <CardTitle>주요 특징</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  <strong>App Router:</strong> Next.js 16의 최신 App Router로
                  구축되어 서버 컴포넌트와 클라이언트 컴포넌트를 최적으로 활용
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  <strong>완벽한 타입 지원:</strong> TypeScript로 작성되어 개발
                  경험과 코드 안정성을 극대화
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  <strong>다크모드:</strong> 시스템 테마 감지와 수동 전환이
                  가능한 완벽한 다크모드 구현
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  <strong>반응형 디자인:</strong> 모바일, 태블릿, 데스크톱 모든
                  기기에서 최적화된 경험 제공
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  <strong>SEO 최적화:</strong> metadata API를 활용한 검색 엔진
                  최적화
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  <strong>접근성:</strong> WCAG 가이드라인을 준수하여 모든
                  사용자가 이용 가능
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
