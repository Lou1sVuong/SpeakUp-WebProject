import { useEffect } from 'react';

function useScrollToTop() {
  useEffect(() => { 
    window.scrollTo(80, 0);
  }, []);
}

export default useScrollToTop;
