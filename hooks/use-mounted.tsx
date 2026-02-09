'use client'

import { useEffect, useState } from 'react'

/**
 * SSR 하이드레이션 체크 훅
 * 클라이언트에서만 true를 반환하여 서버-클라이언트 불일치 방지
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
