import React from 'react'
import { Typography } from "@mui/material";

const PageTitle = ({title}) => {
  return (
    <Typography sx={{paddingBottom: '50px', paddingTop: '20px'}} variant="h1">{title}</Typography>
  )
}

export default PageTitle