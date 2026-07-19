import { signIn } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign up — ScrumAI',
  description: 'Create your ScrumAI account for free',
}

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="ScrumAI logo" width={32} height={32} />
            <span className="font-semibold text-lg">ScrumAI</span>
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle>Create your account</CardTitle>
            <CardDescription>Start planning smarter with your team - free forever</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {/* Google */}
            <form
              action={async () => {
                'use server'
                await signIn('google', { redirectTo: '/dashboard' })
              }}
            >
              <Button type="submit" variant="outline" className="w-full gap-2">
                <Image src="/google.svg" alt="Google" width={16} height={16} />
                Continue with Google
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-card px-2 text-muted-foreground">or continue with email</span>
              </div>
            </div>

            {/* Magic link */}
            <form
              action={async (formData: FormData) => {
                'use server'
                const email = formData.get('email') as string
                await signIn('resend', {
                  email,
                  redirectTo: '/dashboard',
                })
              }}
              className="flex flex-col gap-3"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <Input type="email" id="email" name="email" placeholder="you@example.com" required />
              <Button type="submit" className="w-full">
                Get started free
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-primary hover:underline">
            Log in
          </Link>
        </p>

        {/* Back to home */}
        <div className="flex justify-center mt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
