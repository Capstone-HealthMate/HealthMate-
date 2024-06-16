import { useEffect, useState } from "react";

export default function useToast(errorMessage) {
  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showToast]);

  useEffect(() => {
    if (errorMessage) {
      setShowToast(true);
    }
  }, [errorMessage]);

  return [showToast, setShowToast];
}
