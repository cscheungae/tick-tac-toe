import React, { useEffect, useState, useRef } from 'react';

// taken from https://usehooks.com/usePrevious/
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePrevious;
