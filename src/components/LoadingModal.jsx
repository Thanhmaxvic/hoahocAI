function LoadingModal({ visible }) {
  return (
    <div id="loading-modal" className={`loading-modal ${visible ? '' : 'hidden'}`}>
      <div className="loading-content">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <i className="fas fa-flask loading-icon"></i>
        </div>
        <p className="loading-text">AI đang xử lý yêu cầu...</p>
        <div className="loading-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  )
}

export default LoadingModal
