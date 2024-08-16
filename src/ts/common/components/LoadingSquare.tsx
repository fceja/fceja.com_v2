import "@scss/common/components/LoadingSquare.scss";

interface LoadingI {
  className?: string
}

const LoadingSquare = (props: LoadingI) => {
  const { className } = props

  return (
    <div className={`loading-div ${className ? `loading-${className}` : ""}`}>
      <div className="cube cube-1" ></div>
      <div className="cube cube-2"></div>
      <div className="cube cube-3"></div>
      <div className="cube cube-4"></div>
      <div className="cube cube-5"></div>
      <div className="cube cube-6"></div>
      <div className="cube cube-7"></div>
      <div className="cube cube-8"></div>
      <div className="cube cube-9"></div>
    </div >
  );
};

export default LoadingSquare;
