import React from "react";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {Grid} from "@material-ui/core"
import { withStyles} from "@material-ui/core/styles"

const usestyles = theme => ({
  root: {
    marginTop: "30px",
    fontSize: "28px"
  }
})

class Form extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchStr: {
        value: "",
        error: false
      }
    };
  }
  handleField = e => {
    this.setState({
      searchStr: {
        ...this.state.searchStr,
        value: e.target.value
      }
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchStr.value === "") {
      this.setState({
        searchStr: {
          ...this.state.searchStr,
          error: true
        }
      });
    } else {
      this.setState({
        searchStr: {
          ...this.state.searchStr,
          error: false
        }
      });
      this.props.getMovies(this.state.searchStr.value);
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <>
      
      <Grid className={classes.root} container justify="center">
        <Grid item justify="center">
        <form container onSubmit={this.handleSubmit}>
        <TextField id="standard-search" label="" type="search" placeholder="Title" className={this.state.searchStr.error ? "error" : ""}
      value={this.state.searchStr.value}
      onChange={this.handleField}/>
      <IconButton type="submit" aria-label="search">
        <SearchIcon color="secondary"/>
      </IconButton>

        {/* <input
          type="text"
          className={this.state.searchStr.error ? "error" : ""}
          value={this.state.searchStr.value}
          onChange={this.handleField}
        /> */}
      </form>
        </Grid>

      </Grid>
         
    
      </>
    );
  }
}

export default withStyles(usestyles)(Form);
