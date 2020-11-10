import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Theme from '../../util/theme';

// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  ...theme.palette.primary,
  ...theme.palette.secondary,
  navWrapper: {
    backgroundColor: theme.palette.secondary.lighter,
  },
}));

const Navbar = () => {
  const classes = styles();
  return (
    <AppBar className={classes.navWrapper}>
      <Toolbar className="nav-container">
        <Fragment>
          <Button
            color={Theme.palette.primary.main}
            component={Link}
            to="/login"
          >
            Login
          </Button>
          <Button color={Theme.palette.primary.main} component={Link} to="/">
            Home
          </Button>
          <Button
            color={Theme.palette.primary.main}
            component={Link}
            to="/signup"
          >
            Signup
          </Button>
        </Fragment>
      </Toolbar>
    </AppBar>
  );
};
Navbar.propTypes = {
  // classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  //
});

export default Navbar;
