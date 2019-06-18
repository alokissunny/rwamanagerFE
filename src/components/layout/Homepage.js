import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
//   dense: {
//     marginTop: 19,
//   },
//   menu: {
//     width: 200,
//   },
// }));
export default class Homepage extends Component {
  
  constructor() {
    super();
    // this.classes = useStyles();
  this.sub = this.getSubdomain(window.location.host.split(':')[0]);
    console.log(this.sub);

  }
  subdomainView(){
    return (
      <div>Subdomain VIEW</div>
    )
  }
  homepageView(){
    return (
      <div>
        {/* <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Hello World"
        // className={this.classes.textField}
        margin="normal"
      /> */}
      <input ></input>
      <Button>create subdomain</Button>
      </div>
    )
  }
   getSubdomain(hostname) {
    var regexParse = new RegExp('[a-z\-0-9]{2,63}\.[a-z\.]{2,5}$');
    var urlParts = regexParse.exec(hostname);
    return hostname.replace(urlParts[0],'').slice(0, -1);
}
  render() {
      return (
          <div>
            {this.sub.length > 0 ? this.subdomainView() : this.homepageView() }
          
          </div>
      )
  }
}