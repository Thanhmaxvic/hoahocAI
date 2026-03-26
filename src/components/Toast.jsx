function Toast({ toasts }) {
  const getIcon = (type) => {
    if (type === 'success') return 'fa-check-circle text-emerald-500'
    if (type === 'error') return 'fa-exclamation-circle text-red-500'
    return 'fa-info-circle text-blue-500'
  }

  return (
    <div id="toast-container" className="toast-container">
      {toasts.map(toast => (
        <div key={toast.id} className={`toast toast-${toast.type}`}>
          <i className={`fas ${getIcon(toast.type)}`}></i>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  )
}

export default Toast
