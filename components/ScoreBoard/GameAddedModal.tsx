import React from 'react';
import {
  Dialog,
  Button,
  Typography,
  DialogTitle,
  DialogActions,
  DialogContent,
} from '@mui/material';

interface GameAddedModalProps {
  open: boolean;
  onClose: () => void;
}

const GameAddedModal: React.FC<GameAddedModalProps> = ({ open, onClose }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>
      All games have been added
    </DialogTitle>
    <DialogContent>
      <Typography sx={{ textAlign: 'center', color: 'red' }}>
        You have added all available games. No more games are available to add.
      </Typography>
    </DialogContent>
    <DialogActions sx={{ justifyContent: 'center' }}>
      <Button
        sx={{ backgroundColor: 'red', mb: 1 }}
        variant="contained"
        onClick={onClose}
      >
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

export default GameAddedModal;
