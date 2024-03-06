import React from 'react';

function BackGroundImage(props: { children?: React.ReactNode }) {
  // prop destruction
  const { children } = props;
  // lib, style hooks
  // state, ref hooks
  // query hooks
  // calculated values
  // effects
  // handlers
  const imageUrl = '';
  // 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?q=80&w=4639&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const style = {
    // backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  return <div css={style}>{children}</div>;
}

export { BackGroundImage };
