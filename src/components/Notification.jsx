import ReactDOM from "react-dom";
import "./Notification.css";

const Notification = ({ message, type, onClose }) => {
  if (!message) return null;

  return ReactDOM.createPortal(
    <div className={`notification-card ${type}`}>
      <p>{message}</p>
      {onClose && (
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      )}
    </div>,
    document.body // Renderiza directamente en el cuerpo del documento
  );
};

export default Notification;
