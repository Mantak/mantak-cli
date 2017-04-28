import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
function Loading() {
  const style = {
  };
  return (
    <div style={style}>
      <CircularProgress size={60} thickness={7} />
    </div>
  );
}
export default Loading;
