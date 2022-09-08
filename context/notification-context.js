import { createContext, useState, useEffect } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: () => {},
  hideNotification: () => {},
});

export const NotificationProvider = ({ children }) => {
  const [activeNotification, setActiveNotification] = useState();

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [activeNotification]);

  const showNotificationHandeler = (notificationData) => {
    setActiveNotification(notificationData);
  };

  const hideNotificationHandeler = () => {
    setActiveNotification(null);
  };

  const contextValue = {
    notification: activeNotification,
    showNotification: showNotificationHandeler,
    hideNotification: hideNotificationHandeler,
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
