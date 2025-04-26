import { cn } from '@/lib/utils'

export default function BaseContainer({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('p-6 max-w-5xl mx-auto xl:px-0 ', className)}>
      {children}
    </div>
  )
}
