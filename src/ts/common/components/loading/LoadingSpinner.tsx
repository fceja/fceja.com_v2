import "@scss/common/components/loading/LoadingSpinner.scss";

interface LoadingI {
    className?: string
}
const LoadingSpinner = (props: LoadingI) => {
    const { className } = props
    return (
        <div className={className ? `loading-${className}` : 'loading'}>
            <div className="loading-spinner"></div>
        </div>
    )
}

export default LoadingSpinner
