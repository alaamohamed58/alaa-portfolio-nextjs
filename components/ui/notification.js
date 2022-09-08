import { useContext } from "react";
import ReactDOM from "react-dom";
import NotificationContext from "../../context/notification-context";
import CloseMark from "../icons/close-mark";
import classes from "./notification.module.css";

function Notification(props) {
  const { message, status } = props;
  const notificationCtx = useContext(NotificationContext);
  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }
  const hideNotificationHandeler = () => {
    if (status === "success" || status === "error") {
      notificationCtx.hideNotification();
    }
  };

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <span className={classes["close-btn"]} onClick={hideNotificationHandeler}>
        <CloseMark />
      </span>
      <p>{message}</p>
    </div>,
    document.getElementById("notification")
  );
}

export default Notification;
