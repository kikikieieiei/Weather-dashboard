interface Props {
    children: React.ReactNode
    className?: string
}

const GlassCard = ({ children, className = '' }: Props) => {
    return (
        <div className={`
      bg-white/20 backdrop-blur-md rounded-2xl 
      border border-white/30 shadow-2xl
      ${className}
    `}>
            {children}
        </div>
    )
}

export default GlassCard