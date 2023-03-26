import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Flashcard(props) {
  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Card sx={{ margin: 5, flexGrow: 1, bgcolor: "#95818d", maxWidth: "sm", maxHeight: "100%" }}>
          <CardContent>
              <Typography align="center" variant="h5" component="div">
              {props.name}
              </Typography>
          </CardContent>
          <CardActions>
              <Button variant="contained" size="small">Answer</Button>
          </CardActions>
        </Card>
      </Box>
  )
}

export default Flashcard
