import { useState, useRef, useCallback } from 'react'

function AiTutorTab({ showToast, setLoading }) {
  const [messages, setMessages] = useState([])
  const [sending, setSending] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const inputRef = useRef(null)
  const chatRef = useRef(null)

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight
      }
    }, 50)
  }, [])

  const appendMessage = useCallback((role, text) => {
    setMessages(prev => [...prev, { role, text, id: Date.now() }])
    setShowWelcome(false)
    scrollToBottom()
  }, [scrollToBottom])

  const appendImage = useCallback((url, prompt) => {
    setMessages(prev => [...prev, { 
      role: 'ai', 
      type: 'image', 
      imageUrl: url, 
      caption: prompt, 
      id: Date.now() 
    }])
    setShowWelcome(false)
    scrollToBottom()
  }, [scrollToBottom])

  const parseMarkdown = (text) => {
    let parsed = text
    parsed = parsed.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    parsed = parsed.replace(/`(.*?)`/g, '<code>$1</code>')
    parsed = parsed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    parsed = parsed.replace(/(?<!\*)\*(?!\*)(.*?)(?<!\*)\*(?!\*)/g, '<em>$1</em>')
    parsed = parsed.replace(/^### (.*$)/gm, '<h4>$1</h4>')
    parsed = parsed.replace(/^## (.*$)/gm, '<h3>$1</h3>')
    parsed = parsed.replace(/^- (.*$)/gm, '• $1')
    parsed = parsed.replace(/\n\n/g, '<br><br>')
    parsed = parsed.replace(/\n/g, '<br>')
    return parsed
  }

  const sendChatMessage = useCallback(async (directText) => {
    const query = directText || inputRef.current?.value?.trim()
    if (!query || sending) return

    appendMessage('user', query)
    if (inputRef.current) inputRef.current.value = ''
    setSending(true)

    const lowerQuery = query.toLowerCase()
    const isImageRequest = lowerQuery.includes('vẽ') || lowerQuery.includes('hình ảnh') || lowerQuery.includes('sơ đồ')

    try {
      if (isImageRequest) {
        setLoading(true)
        const response = await fetch('/api/image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: query })
        })
        setLoading(false)

        if (!response.ok) {
          let errorMsg = `HTTP ${response.status}`
          try { const errData = await response.json(); errorMsg = errData.error || errData.details || errorMsg } catch {}
          console.error('Image API error:', errorMsg)
          appendMessage('ai', `Lỗi tạo hình ảnh: ${errorMsg}. Vui lòng thử lại.`)
          return
        }

        const result = await response.json()
        if (result.imageUrl) {
          appendImage(result.imageUrl, query)
        } else if (result.imageBase64) {
          const mimeType = result.mimeType || 'image/png'
          const imageUrl = `data:${mimeType};base64,${result.imageBase64}`
          appendImage(imageUrl, query)
        } else {
          appendMessage('ai', result.message || 'Tạo hình ảnh không khả dụng lúc này.')
        }
      } else {
        setLoading(true)
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query })
        })
        setLoading(false)

        if (!response.ok) {
          let errorDetail = `HTTP ${response.status}`
          try {
            const errData = await response.json()
            errorDetail = errData.error || errData.details || errorDetail
            if (errData.details && errData.error) {
              errorDetail = `${errData.error}: ${typeof errData.details === 'string' ? errData.details : JSON.stringify(errData.details)}`
            }
          } catch {}
          console.error('Chat API error:', errorDetail)
          appendMessage('ai', `⚠️ Lỗi từ server: ${errorDetail}. Vui lòng thử lại sau.`)
          return
        }

        const result = await response.json()
        const parsed = parseMarkdown(result.text)
        appendMessage('ai', parsed)
      }
    } catch (error) {
      setLoading(false)
      console.error('Network error:', error)
      appendMessage('ai', `⚠️ Lỗi kết nối mạng: ${error.message || 'Không thể kết nối tới server'}. Vui lòng kiểm tra kết nối và thử lại.`)
    } finally {
      setSending(false)
    }
  }, [sending, appendMessage, appendImage, setLoading])

  const quickAsk = useCallback((text) => {
    if (inputRef.current) {
      inputRef.current.value = ''
    }
    sendChatMessage(text)
  }, [sendChatMessage])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendChatMessage()
  }

  return (
    <div id="ai-tutor" className="tab-content active">
      <div className="chat-wrapper">
        <div className="chat-container" id="chat-container">
          {/* Chat History */}
          <div id="chat-messages" className="chat-messages" ref={chatRef}>
            {showWelcome && (
              <div className="chat-welcome">
                <div className="welcome-avatar">
                  <i className="fas fa-robot"></i>
                </div>
                <h3>Xin chào! Tôi là Gia sư AI Hóa học 🧪</h3>
                <p>Tôi sẵn sàng giúp bạn ôn tập Chương 6: Đại cương Kim loại. Hãy hỏi tôi bất cứ điều gì!</p>
                <div className="welcome-features">
                  <div className="feature-item">
                    <i className="fas fa-comments"></i>
                    <span>Giải thích lý thuyết</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-calculator"></i>
                    <span>Giải bài tập</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-image"></i>
                    <span>Vẽ sơ đồ minh họa</span>
                  </div>
                </div>
              </div>
            )}
            {messages.map(msg => (
              <div key={msg.id} className={`message-row ${msg.role}`}>
                <div className="message-bubble">
                  {msg.type === 'image' ? (
                    <div className="message-content">
                      <p style={{ fontSize: '0.8em', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                        Hình ảnh minh họa cho: &quot;{msg.caption}&quot;
                      </p>
                      <ChatImage src={msg.imageUrl} alt="Chemistry Diagram" />
                    </div>
                  ) : (
                    <div
                      className="message-content"
                      dangerouslySetInnerHTML={{ __html: msg.text }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          <div className="quick-questions" id="quick-questions">
            <button onClick={() => quickAsk('Giải thích dãy hoạt động hóa học của kim loại')} className="quick-btn">
              <i className="fas fa-lightbulb"></i> Dãy hoạt động hóa học
            </button>
            <button onClick={() => quickAsk('So sánh ăn mòn hóa học và ăn mòn điện hóa')} className="quick-btn">
              <i className="fas fa-code-compare"></i> So sánh ăn mòn
            </button>
            <button onClick={() => quickAsk('Tại sao Al bền trong không khí?')} className="quick-btn">
              <i className="fas fa-question-circle"></i> Tại sao Al bền?
            </button>
            <button onClick={() => quickAsk('Vẽ sơ đồ ăn mòn điện hóa giữa Fe và Cu')} className="quick-btn">
              <i className="fas fa-diagram-project"></i> Sơ đồ ăn mòn
            </button>
          </div>

          {/* Input */}
          <div className="chat-input-area">
            <div className="chat-input-wrapper">
              <input
                type="text"
                id="ai-input"
                placeholder="Hỏi về lý thuyết, bài tập, hoặc nhờ vẽ sơ đồ..."
                className="chat-input"
                ref={inputRef}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={() => sendChatMessage()}
                className="btn-send"
                id="btn-send"
                disabled={sending}
              >
                <i className={`fas ${sending ? 'fa-circle-notch fa-spin' : 'fa-paper-plane'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Image component with loading skeleton and error fallback */
function ChatImage({ src, alt }) {
  const [imgState, setImgState] = useState('loading') // 'loading' | 'loaded' | 'error'

  return (
    <div className="chat-image-container">
      {imgState === 'loading' && (
        <div className="image-skeleton">
          <div className="skeleton-shimmer"></div>
          <i className="fas fa-image skeleton-icon"></i>
          <span className="skeleton-text">Đang tạo hình ảnh...</span>
        </div>
      )}
      {imgState === 'error' && (
        <div className="image-error-fallback">
          <i className="fas fa-exclamation-triangle"></i>
          <span>Không thể tải hình ảnh. Hãy thử lại.</span>
        </div>
      )}
      <img
        src={src}
        className={`message-image ${imgState === 'loaded' ? 'visible' : 'hidden-img'}`}
        alt={alt}
        onLoad={() => setImgState('loaded')}
        onError={() => setImgState('error')}
        onClick={() => window.open(src)}
      />
    </div>
  )
}

export default AiTutorTab
