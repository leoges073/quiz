interface ProgressBarProps {
  percent: number
}

export function ProgressBar({ percent }: ProgressBarProps) {
  return (
    <div className="px-6 pt-4">
      <div className="h-[3px] bg-border rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-teal to-teal-light rounded-full transition-[width] duration-600 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
