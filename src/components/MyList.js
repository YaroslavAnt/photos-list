import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import axios from "axios";
import { changeImage } from "../redux/redux";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper
  },
  item: {
    textDecoration: "none"
  }
});

class MyList extends Component {
  state = {
    photos: []
  };

  componentWillMount() {
    console.log("+++++");

    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0 "
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          photos: response.data
        });
      });
  }

  onClickHandler = src => {
    console.log(this.props);
    console.log(src);
    this.props.setNewImage(src);
  };

  render() {
    const { classes } = this.props;
    const photos = (
      <List>
        {this.state.photos.map(el => {
          return (
            <Link to="/photo" key={el.id} className={classes.item}>
              <ListItem
                button
                onClick={() => this.onClickHandler(el.urls.regular)}
              >
                <Avatar src={el.urls.small} alt="img" />
                <ListItemText primary={el.user.name} secondary={el.user.bio} />
              </ListItem>
            </Link>
          );
        })}
      </List>
    );
    return <div className={classes.root}>{photos}</div>;
  }
}

MyList.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setNewImage: newSrc => {
      dispatch(changeImage(newSrc));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(MyList));
