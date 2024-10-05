import { SignInPage } from '@/app/auth/signin/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/signin')({
  component: () => <SignInPage />,
})
