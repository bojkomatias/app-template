import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/settings/')({
  component: () => <div>Hello /_app/_settings/settings!</div>
})