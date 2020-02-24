import { useCallback } from 'react';
import { useStore } from '../store/store';

const useAction = type => {
  const [, dispatch] = useStore();
  return useCallback((payload = {}) => dispatch({type, payload}), [
    dispatch,
    type
  ]);
};

export default useAction;

