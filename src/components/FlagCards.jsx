import React from 'react'
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom';
import { bgcolor } from '@mui/system';


function FlagCards() {
  return (
    <Grid sx={{paddingLeft: 100, paddingTop: 0}}
      flex container columnSpacing={2} rowSpacing={2}>
        
        <Grid item xs={12} md={6} lg={4}>
          <Link to="/french">
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                
                component="img"
                height="250"
                image="https://media.istockphoto.com/id/1385983466/photo/glass-heart-flag-france.jpg?s=612x612&w=0&k=20&c=hVeHUr5Hr7Fn4Bu2aEM6PqjVNrLbYXZysHd29Ge3Ru0="
                alt="french flag"
                title="Français"
                />
              </CardActionArea>
             </Card>
          </Link>
        </Grid>
       
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 300 }}>
            <Link to="/spanish">
              <CardActionArea>
                <CardMedia
                component="img"
                height="250"
                image="https://media.istockphoto.com/id/1386520262/photo/glass-heart-flag-spain.jpg?s=612x612&w=0&k=20&c=eTWkEIRZn8ysCQhTV-f3b0HDN23A6RQB4u6n0kFVJpw="
                alt="spanish flag"
                title="Español"
                />
              </CardActionArea>
            </Link>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 300 }}>
            <Link to="/italian">
              <CardActionArea>
                <CardMedia
                component="img"
                height="250"
                image="https://media.istockphoto.com/id/1385983467/photo/glass-heart-flag-italy.jpg?s=612x612&w=0&k=20&c=inWMCX9DbQmdic1FONCVawce86JRpGb8KCBgSSM6awo="
                alt="italian flag"
                title="Italiano"
                />
              </CardActionArea>
            </Link> 
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 300 }}>
            <Link to="">
              <CardActionArea>
                <CardMedia
                component="img"
                height="250"
                image="https://media.istockphoto.com/id/1385827568/photo/germany-glass-heart.jpg?s=612x612&w=0&k=20&c=FXa85ZJ7weghy5GSKfdqJHyknrE4uvmB7phVyUS5DUk="
                alt="german flag"
                title="Deutsch"
                />
              </CardActionArea>
            </Link>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 300 }}>
            <Link to="">
              <CardActionArea>
                <CardMedia
                component="img"
                height="250"
                image="https://media.istockphoto.com/id/1386520235/photo/glass-heart-flag-turkey.jpg?s=612x612&w=0&k=20&c=sRE14Tu_CzSDH06ajX-6NN34WbAWfYbJTYZFiaCO44k="
                alt="turkish flag"
                title="Türkçe"
                />
              </CardActionArea>
            </Link>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 300 }}>
            <Link to="">
              <CardActionArea>
                <CardMedia
                component="img"
                height="250"
                image="https://media.istockphoto.com/id/1386162346/photo/glass-heart-flag-china.jpg?s=612x612&w=0&k=20&c=eqHETjMRMMiOBq0b5wokj5U-ISdaFz33fPrYc8A1Yxw="
                alt="chinese flag"
                title="中國人"
                />
              </CardActionArea>
            </Link>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 300 }}>
            <Link to="">
              <CardActionArea>
                <CardMedia
                component="img"
                height="250"
                image="https://media.istockphoto.com/id/1386520244/photo/glass-heart-flag-uae.jpg?s=612x612&w=0&k=20&c=pb1Qqa6wNlcl9WxOqAhG_nJ2f2DJaDggM57_pbJ8a-M="
                alt="uae flag"
                title="عربي"
                />
              </CardActionArea> 
            </Link>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 300 }}>
            <Link to="">
              <CardActionArea>
                <CardMedia
                component="img"
                height="250"
                image="https://media.istockphoto.com/id/1386162345/photo/glass-heart-flag-india.jpg?s=612x612&w=0&k=20&c=PqFi6xUldP84NjAxpuud-qxLro1T5AZAoYSEKc_27nU="
                alt="indian flag"
                title="हिंदी"
                />
              </CardActionArea> 
            </Link>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 300 }}>
            <Link to="">
              <CardActionArea>
                <CardMedia
                component="img"
                height="250"
                image="https://media.istockphoto.com/id/1385827577/photo/russia-glass-heart.jpg?s=612x612&w=0&k=20&c=hYNPiWxHYkEqnoInWSsFFx3gJB5L_Cgr9Dn7oqYNzsI="
                alt="russian flag"
                title="русский"
                />
              </CardActionArea> 
            </Link>
          </Card>
        </Grid>

    </Grid>
  );
}

export default FlagCards