import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/settings/display')({
  component: () => <div>Hello /_app/_settings/display!</div>
})