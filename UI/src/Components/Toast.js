import { toast } from "react-hot-toast";

// Success toast
export const successnotify = (message = "Success!") =>
  toast.success(message, {
    position: "top-right",
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

// Error toast
export const errornotify = (message = "Something went wrong!") =>
  toast.error(message, {
    position: "top-right",
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
