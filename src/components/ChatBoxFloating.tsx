export default function ChatBoxFloating() {
  return (
    <div>
      <div id="chat-circle" className="btn btn-raised">
        <i className="fas fa-comment-alt" />
      </div>
      <div className="chat-box">
        <div className="chat-box-header">
          ChatBot
          <span className="chat-box-toggle">
            <i className="fas fa-times" />
          </span>
        </div>
        <div className="chat-box-body">
          <div className="chat-box-overlay"></div>
          <div className="chat-logs"></div>
          {/*chat-log */}
        </div>
        <div className="chat-input">
          <form>
            <input
              type="text"
              id="chat-input"
              placeholder="Send a message..."
            />
            <button type="submit" className="chat-submit" id="chat-submit">
              <i className="fas fa-paper-plane" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
