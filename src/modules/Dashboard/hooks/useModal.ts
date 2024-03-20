import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showModal = useCallback(() => {
    setIsVisible(true);
  }, []);

  const hideModal = useCallback(() => {
    setIsVisible(false);
  }, []);

  return {
    isVisible,
    showModal,
    hideModal,
  };
};
