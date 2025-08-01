import { IconButton } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';

const RefetchButton = ({ refetch }: { refetch: () => void }) => {
  return (
    <IconButton
      color="primary"
      onClick={refetch}
      aria-label="Refetch data"
      title="Refetch data"
    >
      <RefreshIcon />
    </IconButton>
  );
}

export default RefetchButton;