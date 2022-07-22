import { useEffect } from 'react';
import { handleLog } from '../utils/logger';

export const useLogPage = (pageName: string): void => {
  useEffect(() => {
    handleLog(`Rendering ${pageName}.`);
  }, [pageName]);
};
