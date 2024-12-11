import ReactDOM from "react-dom";
import "../style/main.scss";

const Notification = ({ message, type, onClose }) => {
  if (!message) return null;

  return ReactDOM.createPortal(
    <article className={`notification notification--${type}`} role="alert">
      <p className="notification__message">{message}</p>
      {onClose && (
        <button
          className="notification__close-button"
          onClick={onClose}
          aria-label="Close notification"
        >
          &times;
        </button>
      )}
    </article>,
    document.body
  );
};

export default Notification;
