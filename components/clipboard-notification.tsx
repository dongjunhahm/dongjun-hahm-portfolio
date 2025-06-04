import React from "react";

type ClipboardNotificationProps = {
  message: string;
  show: boolean;
};

const ClipboardNotification: React.FC<ClipboardNotificationProps> = ({
  message,
  show,
}) => {
  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-4 py-2 rounded shadow-md transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      role="alert"
      aria-live="assertive"
    >
      {message}
    </div>
  );
};

export default ClipboardNotification;
