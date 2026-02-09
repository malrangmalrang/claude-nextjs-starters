import { HeroSection } from '@/components/sections/hero-section'
import { FeaturesGrid } from '@/components/sections/features-grid'
import { CtaSection } from '@/components/sections/cta-section'

/**
 * 홈페이지
 * - Hero 섹션: 메인 소개
 * - Features 그리드: 주요 기능
 * - CTA 섹션: 행동 유도
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesGrid />
      <CtaSection />
    </>
  )
}
