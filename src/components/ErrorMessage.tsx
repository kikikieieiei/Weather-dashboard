import GlassCard from './GlassCard'

interface Props {
    message: string
}

const ErrorMessage = ({ message }: Props) => (
    <GlassCard className="max-w-md mx-auto p-4 border-red-300/50 bg-red-500/20">
        <p className="text-white text-center">{message}</p>
    </GlassCard>
)

export default ErrorMessage