import { AlertCircle, Zap, ArrowRight} from 'lucide-react'
type AlertProps = {
    type: 'info' | 'success' | 'warning' | 'error'
    children: React.ReactNode
}


    export function Alert({ type, children }: AlertProps) {
        const alertClasses = {
            info: 'bg-blue-100 border-l-4 border-blue-500 text-blue-700',
            success: 'bg-green-100 border-l-4 border-green-500 text-green-700',
            warning: 'bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700',
            error: 'bg-red-100 border-l-4 border-red-500 text-red-700',
        }
    
        return(
            <div className={`p-4 mb-4 rounded-lg ${alertClasses[type]}`}>
                {children}
            </div>
        )
    }