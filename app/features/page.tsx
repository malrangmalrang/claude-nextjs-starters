import { Metadata } from 'next'
import { FEATURES } from '@/lib/constants'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Features',
  description: 'Next.js Starter Kit의 상세 기능을 확인하세요',
}

/**
 * Features 페이지
 * - 상세 기능 소개
 * - Card 그리드 레이아웃
 */
export default function FeaturesPage() {
  const additionalFeatures = [
    {
      category: '개발 경험',
      items: [
        'TypeScript 완벽 지원',
        'ESLint 및 Prettier 설정',
        '핫 리로드 및 빠른 리프레시',
        '개발자 친화적인 에러 메시지',
      ],
    },
    {
      category: '성능',
      items: [
        '서버 컴포넌트 기본 지원',
        '자동 코드 스플리팅',
        '이미지 최적화',
        'Font 최적화 (Geist)',
      ],
    },
    {
      category: 'UI/UX',
      items: [
        'shadcn/ui 컴포넌트',
        'Tailwind CSS v4',
        'lucide-react 아이콘',
        '부드러운 애니메이션',
      ],
    },
    {
      category: '배포',
      items: [
        'Vercel 최적화',
        '프로덕션 빌드 최적화',
        '환경 변수 지원',
        'Edge Runtime 지원',
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* 헤더 */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-normal sm:text-5xl md:text-6xl">
            Features
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto leading-relaxed">
            현대적인 웹 개발에 필요한 모든 기능을 제공합니다.
          </p>
        </div>

        {/* 주요 기능 */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-normal">주요 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">
                          {feature.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* 추가 기능 */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-normal">상세 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalFeatures.map((section) => (
              <Card key={section.category}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {section.category}
                    <Badge>{section.items.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <span className="text-primary">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 기술 세부사항 */}
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle>기술 세부사항</CardTitle>
            <CardDescription>
              이 스타터킷에 포함된 핵심 기술 스펙
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold">프론트엔드</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Next.js 16.1.6</li>
                  <li>• React 19.2.3</li>
                  <li>• TypeScript 5</li>
                  <li>• Tailwind CSS v4</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">UI 라이브러리</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• shadcn/ui</li>
                  <li>• Radix UI</li>
                  <li>• lucide-react 0.563.0</li>
                  <li>• class-variance-authority</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">개발 도구</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• ESLint</li>
                  <li>• Prettier (권장)</li>
                  <li>• Git Hooks (권장)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">배포</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Vercel (최적화)</li>
                  <li>• Docker 지원</li>
                  <li>• Static Export 지원</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
