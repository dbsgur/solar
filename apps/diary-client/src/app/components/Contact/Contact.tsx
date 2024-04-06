import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import { TransitionProps } from '@mui/material/transitions';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { BackGroundImage } from '~components';

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) => {
    return <Slide direction="up" ref={ref} {...props} />;
  },
);

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
}));

function Contact() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button
        // variant="outlined"
        onClick={() => setOpen(true)}
        css={{
          width: '50px',
          position: 'absolute',
          right: '0',
          bottom: '0',
          marginBottom: '10px',
          marginRight: '10px',
        }}
      >
        <BackGroundImage imageUrl="https://tvstore-phinf.pstatic.net/20210622_99/1624331122672o6h8J_JPEG/00022.jpg" />
      </Button>
      <BootstrapDialog
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Contact Me
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>email: dbsgur98@gmail.com</Typography>
          <Typography gutterBottom>phone: 010-5797-6647</Typography>
          <Typography gutterBottom>made by Hyeok</Typography>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}

export { Contact };
