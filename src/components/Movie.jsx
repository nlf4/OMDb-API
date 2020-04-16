import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles'

const useStyles = theme => ({
  title: {
    marginBottom: "15px",
    justify: 'center'
  },
  para: {
    marginBottom: "15px"
  },
  image: {
    height: '50%',
    width: '50%',
    margin: 'auto',
    objectFit: 'cover',
    marginTop: '15px'
  },
  card: {
    backgroundColor: '#cfd8dc',
    marginTop: '20px',
    marginBottom: '15px'
  }
})

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        data: {},
        loading: false,
        error: false
      }
    };
  }
  componentDidMount() {
    this.setState({
      ...this.state,
      movie: {
        ...this.state.movie,
        loading: true,
        error: false
      }
    });
    axios
      .get(
        "https://www.omdbapi.com/?apikey=2e3b4604&plot=full&i=" +
          this.props.match.params.id
      )
      .then(response => {
        this.setState({
          ...this.state,
          movie: {
            data: { ...response.data },
            loading: false,
            error: false
          }
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    const { classes } = this.props;
    return (
      <>
      <Container maxWidth="sm">
        <Card className={classes.card}>
          <CardActionArea>
          <CardMedia component="img" className={classes.image} image={this.state.movie.data.Poster} />
          <CardContent>

        {this.state.movie.loading && <p>Loading movie...</p>}
        {Object.keys(this.state.movie.data).length > 1 && (
          <>
            <Typography className={classes.title} variant="h3">{this.state.movie.data.Title}</Typography>
            <Typography className={classes.para} variant="body1">{this.state.movie.data.Plot}</Typography>
            <Typography variant="overline">rating: {this.state.movie.data.imdbRating}</Typography>
          </>
        )}
        </CardContent>
        </CardActionArea>
        </Card>
        <Link
        
        color="error"
        to="/">
          <Typography color="secondary" variant="button">Go Back</Typography>
      </Link>
        </Container>
      </>
      
    );
  }
}

export default withStyles(useStyles)(Movie);
