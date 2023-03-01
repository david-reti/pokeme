import './Message.css'

const MESSAGE_CLASS = {
    'info': 'message--info',
    'error': 'message--error'
}

const Message = ({type, children}) =>
    <div className={`message ${MESSAGE_CLASS[type] || ''}`}>{children}</div>

export default Message;