interface IconProps {
  className?: string;
}

export function IconClock({ className = "" }: IconProps) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

export function IconDollar({ className = "" }: IconProps) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" y1="1" x2="10" y2="23"/>
      <line x1="14" y1="1" x2="14" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  )
}

export function IconChefHat({ className = "" }: IconProps) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
      <line x1="6" y1="17" x2="18" y2="17"/>
    </svg>
  )
}

export function IconStar({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

export function IconLeaf({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8.7c1.4.8 2.4.8 3.8 0a5.56 5.56 0 0 1 3.8-.7c1.63.225 2.65 1.213 3.9 2.2"/>
      <path d="M2 17c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8.7c1.4.8 2.4.8 3.8 0a5.56 5.56 0 0 1 3.8-.7c1.63.225 2.65 1.213 3.9 2.2"/>
      <path d="M2 12c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8.7c1.4.8 2.4.8 3.8 0a5.56 5.56 0 0 1 3.8-.7c1.63.225 2.65 1.213 3.9 2.2"/>
    </svg>
  )
} 