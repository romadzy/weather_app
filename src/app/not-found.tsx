import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="60vh"
      gap={2}
    >
      <Typography variant="h3" color="primary">
        Page Not Found
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Go to Home
        </Button>
      </Link>
    </Box>
  );
}
