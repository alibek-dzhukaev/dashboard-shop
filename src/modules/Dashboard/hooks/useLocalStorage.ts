import { useEffect } from 'react';
import { BaseStorage, BaseStorageType } from '../helpers/storage';

export const useLocalStorage = () => {
  useEffect(() => {
    return () => {
      BaseStorage.destroyed();
    };
  }, []);

  return BaseStorage.created(BaseStorageType.LOCAL);
};