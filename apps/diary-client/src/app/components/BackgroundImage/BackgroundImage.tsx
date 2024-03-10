import React from 'react';
import { Outlet } from 'react-router-dom';

function BackGroundImage(props: { imageUrl: string }) {
  // prop destruction
  const { imageUrl } = props;
  // lib, style hooks
  // state, ref hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // ...css,
  };

  return (
    <div css={style}>
      <Outlet />
    </div>
  );
}

export { BackGroundImage };
