import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/settings/profile')({
  component: () => <div>Hello /_app/settings/profile!</div>
})