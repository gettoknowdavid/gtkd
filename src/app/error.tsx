'use client';

import React from 'react';

type Props = { error: Error; reset: () => void };

export default function Error(props: Props) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(props.error);
  }, [props.error]);

  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => props.reset()}>Reset error boundary</button>
    </div>
  );
}
