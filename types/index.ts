import { LucideIcon } from 'lucide-react'

/**
 * 네비게이션 메뉴 항목 타입
 */
export type NavItem = {
  href: string
  label: string
}

/**
 * 기능 소개 항목 타입
 */
export type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

/**
 * 사이트 설정 타입
 */
export type SiteConfig = {
  name: string
  description: string
  url: string
  copyright: string
}
