import {
  Zap,
  Palette,
  Smartphone,
  Lock,
  Code2,
  Rocket,
} from 'lucide-react'
import { NavItem, Feature, SiteConfig } from '@/types'

/**
 * 네비게이션 메뉴 항목
 */
export const NAV_ITEMS: NavItem[] = [
  {
    href: '/',
    label: '홈',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/features',
    label: 'Features',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
]

/**
 * 사이트 기본 정보
 */
export const SITE_CONFIG: SiteConfig = {
  name: 'Next.js Starter Kit',
  description:
    '빠른 웹 개발을 위한 Next.js 16 + TypeScript + Tailwind CSS v4 스타터킷',
  url: 'https://your-domain.com',
  copyright: '© 2024 Next.js Starter Kit. All rights reserved.',
}

/**
 * 주요 기능 목록
 */
export const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: '초고속 성능',
    description:
      'Next.js 16의 최신 App Router와 서버 컴포넌트로 빠른 로딩 속도를 제공합니다.',
  },
  {
    icon: Palette,
    title: '다크모드 지원',
    description:
      '시스템 테마 감지와 수동 전환이 가능한 완벽한 다크모드를 제공합니다.',
  },
  {
    icon: Smartphone,
    title: '완벽한 반응형',
    description:
      '모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 UI를 제공합니다.',
  },
  {
    icon: Code2,
    title: 'TypeScript',
    description:
      '타입 안정성과 개발자 경험을 위한 완전한 TypeScript 지원을 제공합니다.',
  },
  {
    icon: Lock,
    title: '접근성 준수',
    description:
      'WCAG 접근성 가이드라인을 준수하여 모든 사용자가 이용 가능합니다.',
  },
  {
    icon: Rocket,
    title: '즉시 시작',
    description:
      '모든 설정이 완료된 상태로 제공되어 바로 개발을 시작할 수 있습니다.',
  },
]
