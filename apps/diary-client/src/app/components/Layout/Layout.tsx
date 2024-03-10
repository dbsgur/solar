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
    <Stack>
      <Contact />
      {children}
    </Stack>
  );
}

export { Layout };
