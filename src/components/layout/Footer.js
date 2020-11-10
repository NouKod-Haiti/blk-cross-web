import React from 'react';
import Theme from '../../util/theme';

//React Spetrum Stuff
import { Text, View } from '@adobe/react-spectrum';

//MUI Suff
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = makeStyles(() => ({
  mediaWrapper: {
    width: '52px',
    height: '52px',
    backgroundColor: Theme.palette.primary.contrastWhite,
    margin: 10,
    borderRadius: '50px',
    textAlign: 'right',
  },
  mediaGroup: {
    display: 'flex',
    float: 'right',
    height: '10%',
    marginBottom: '10px',
    marginRight: '20%',
  },
  oo: {
    width: '50%',
  },
  footer: {
    backgroundColor: Theme.palette.primary.main,
    padding: '20px',
    left: '0',
    bottom: '0',
    height: '100%',
    width: '100%',
    color: Theme.palette.primary.contrastWhite,
  },
  textGroup: {
    paddingLeft: "2%"
  }
}));

const FooterBar = () => {
  const classes = styles();
  return (
    <Grid container className={classes.footer}>
      <Grid item sm={6} xs={12} className={classes.textGroup}>
        <View>
          <Text>Check footer requirements with 508</Text>
        </View>
        <View>
          <Text>Contact Info</Text>
        </View>
        <View>
          <Text>Contact Info</Text>
        </View>
      </Grid>
      <Grid item sm={6} xs={12}>
        <div className={classes.mediaGroup}>
          <div className={classes.mediaWrapper}></div>
          <div className={classes.mediaWrapper}></div>
          <div className={classes.mediaWrapper}></div>
        </div>
      </Grid>
    </Grid>
  );
};

export default FooterBar;
