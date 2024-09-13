import { Box, Skeleton, Typography } from '@mui/material'
import React from 'react'

function BoutiqueMain() {
  return (
    <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            position: "relative",
            // maxWidth: "1500px",
            margin: "auto",
            marginTop: "64px",
          }}
        >
          <Typography
            component="div"
            sx={{
              display: "flex",
              marginTop: "120px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 300,
            }}
          >
            <Skeleton variant="rectangular" width={1500} height={600} />
            {<br />}
            <Skeleton variant="rounded" width={1500} height={300} />
            Put Image here
          </Typography>
        </Box>
      </Box>

  )
}

export default BoutiqueMain
