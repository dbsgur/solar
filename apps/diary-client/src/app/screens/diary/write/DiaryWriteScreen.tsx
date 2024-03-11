import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import { Stack } from '@mui/material';

function DiaryWriteScreen() {
  // prop destruction
  // lib, style hooks
  // state, ref hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <Stack direction="column">
      <Textarea placeholder="Type anything…" minRows={4} />
      <div>
        <Button>Diary to Poem</Button>
        <Button>Diary to Video</Button>
      </div>
    </Stack>
  );
}

export { DiaryWriteScreen };
