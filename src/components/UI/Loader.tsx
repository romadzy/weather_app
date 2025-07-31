import { memo } from "react";

import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
 return (
  <Box
    p={4}
    sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: "100vh"
  }}
  >
    <CircularProgress />
  </Box>
 )
}

export default memo(Loader);