import Stack from '@mui/material/Stack';
import { Contact } from '~components';

function Layout(props: { children: React.ReactNode }) {
  // prop destruction
  const { children } = props;
  // lib, style hooks
  // state, ref hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <Stack css={{ width: '100%', height: '100%' }}>
      {/* TODO: Header ? */}
      <Contact />
      {children}
    </Stack>
  );
}

export { Layout };
