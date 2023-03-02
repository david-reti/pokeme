import './Message.css'

const MESSAGE_CLASS = {
    'info': 'message--info',
    'error': 'message--error'
}

const Message = ({type, children, style = {}}) =>
    <div className={`message ${MESSAGE_CLASS[type] || ''}`} style={style}>{children}</div>

export default Message;