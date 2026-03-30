interface HeaderProps {
  stepText: string
}

export function Header({ stepText }: HeaderProps) {
  return (
    <header className="px-6 pt-5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-teal rounded-full animate-blink" />
        <span className="font-[family-name:var(--font-syne)] font-bold text-sm tracking-[0.06em] uppercase text-teal">
          SchienaLibera
        </span>
      </div>
      <div className="text-xs font-medium text-slate">
        {stepText}
      </div>
    </header>
  )
}
