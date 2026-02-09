import { FEATURES } from '@/lib/constants'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

/**
 * Features 그리드 섹션
 * - 주요 기능을 카드 형태로 표시
 * - 반응형 그리드 레이아웃
 */
export function FeaturesGrid() {
  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <div className="space-y-4 text-center mb-12">
        <h2 className="text-3xl font-bold tracking-normal sm:text-4xl md:text-5xl">
          주요 기능
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          현대적인 웹 개발에 필요한 모든 것이 준비되어 있습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {FEATURES.map((feature) => {
          const Icon = feature.icon
          return (
            <Card key={feature.title} className="border-2">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
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
    </section>
  )
}
