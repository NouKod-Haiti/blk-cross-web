import React from 'react';
import Theme from '../util/theme';
// React Spectrum Stuff
import { Flex, Text, Image, View, Header } from '@adobe/react-spectrum';

// MUI Stuff
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = makeStyles(() => ({
  signupWrapper: {
    boxShadow: '0 0 10px 0 rgba(0,0,0,.4)',
    border: '1px solid #BFBFBF',
    padding: '25px 10px 20px 10px',
    textAlign: 'center',
    borderRadius: '2%',
  },

  registrationSucess: {
    paddingTop: '5%',
    fontSize: 40,
    textAlign: 'center',
    textTransform: 'uppercase',
    display: 'column',
  },
  thankYou: {
    // backgroundColor: 'red',
    marginTop: '15%',
    textAlign: 'center',
  },
  returnBtn: {
    backgroundColor: Theme.palette.primary.main,
    borderRadius: '50px',
    border: 1,
    color: '#F5F5F5',
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 10,
    marginBottom: 40,
    width: '96%',
    marginRight: 5,
  },
}));

const Succes = () => {
  const classes = styles();
  return (
    <Grid container>
      <Grid item sm={4} xs={12} className={classes.registrationSucess}>
        <Text>registration</Text> <br />
        <Text>success</Text>
      </Grid>
      <Grid item sm={4} xs={12}>
        <div className={classes.thankYou}>
          <Flex
            direction="column"
            width="100%"
            height="100%"
            alignItems="center"
          >
            <View>
              <Header>
                <h3>Thanks for registering!</h3>
              </Header>
              <Text width="size-115">
                Your registration will be approved within 24 hours
              </Text>
              <Image src="celebration.png" />

              <Button
                className={classes.returnBtn}
                type="submit"
                onClick={() => (window.location.href = '/')}
              >
                BACK TO FULTON COU TY OUTBREACH
              </Button>
            </View>
          </Flex>
        </div>
      </Grid>
      <Grid item sm />
    </Grid>
  );
};

export default Succes;
