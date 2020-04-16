import React from "react";
import {Grid, Typography, CardMedia, Container} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';



import { Link } from "react-router-dom";

import { slugify } from "../helpers";

const useStyles = makeStyles({
  helloThereStyle: {
    
  },
  root: {
    borderBottomColor: '#455a64',
    borderLeftColor: '#455a64',
    backgroundColor: '#cfd8dc'
  },
  container: {
    marginTop: '60px'
  }
 
})

export default ({ movies }) => {
  const classes = useStyles()
  return (
  <>
  <Container className={classes.container}>
  
    <Grid container spacing={3}>
    {movies.map(movie => (
      <Grid item xs={4} md={3} xl={2} spacing={3} key={movie.imdbID}>
        <Card raised className={classes.root} variant="outlined">
          <CardActionArea>
            <CardMedia component="img" height="250" image={movie.Poster} title={movie.Title} />
            <CardContent>
              <Typography className={classes.helloThereStyle} gutterBottom variant="h5" component="h2">{movie.Title}</Typography>
              <Typography></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
              <Link to={`movie/${movie.imdbID}/${slugify(movie.Title)}`}>
                <Button size="medium" color="secondary">
                  Learn More
                </Button>
              </Link>
            </CardActions>
        </Card>
      </Grid>
      ))}
    </Grid>
    </Container>
  </>
  )
}
 
