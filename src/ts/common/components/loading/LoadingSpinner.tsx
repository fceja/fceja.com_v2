import "@scss/common/components/loading/LoadingSpinner.scss";

interface ILoading {
    className?: string
}
const LoadingSpinner: React.FC<ILoading> = ({ className }) => {

    return (
        <div className={className ? `loading-${className}` : 'loading'}>
            <div className="loading-spinner"></div>
        </div>
    )
}

export default LoadingSpinner
