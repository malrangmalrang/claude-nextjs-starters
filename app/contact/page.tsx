'use client'

import { Metadata } from 'next'
import { useState } from 'react'
import { Mail, MessageSquare, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

/**
 * Contact 페이지
 * - 문의 폼
 * - Input, Textarea 컴포넌트 사용
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 실제 API 호출 대신 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setIsSubmitting(false)

    // 폼 초기화
    setFormData({ name: '', email: '', message: '' })

    // 3초 후 성공 메시지 제거
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* 헤더 */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-normal sm:text-5xl md:text-6xl">
            Contact
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl leading-relaxed">
            궁금한 점이 있으신가요? 언제든지 문의해주세요.
          </p>
        </div>

        {/* 문의 폼 */}
        <Card>
          <CardHeader>
            <CardTitle>문의하기</CardTitle>
            <CardDescription>
              아래 양식을 작성해주시면 빠른 시일 내에 답변드리겠습니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="py-8 text-center space-y-2">
                <div className="text-4xl">✓</div>
                <h3 className="text-xl font-semibold">전송 완료!</h3>
                <p className="text-muted-foreground">
                  문의가 성공적으로 전송되었습니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 이름 */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <User className="h-4 w-4" />
                    이름
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* 이메일 */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    이메일
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* 메시지 */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <MessageSquare className="h-4 w-4" />
                    메시지
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="문의 내용을 입력해주세요..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* 제출 버튼 */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '전송 중...' : '메시지 전송'}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* 추가 정보 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">이메일</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:contact@example.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                contact@example.com
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">GitHub</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                github.com/your-repo
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
