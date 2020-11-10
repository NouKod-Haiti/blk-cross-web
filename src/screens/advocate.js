import React from 'react';
import Theme from '../util/theme';

import {
  Flex,
  View,
  Header,
  Text,
  Button,
  Well,
  TextField,
  TextArea,
  Form,
} from '@adobe/react-spectrum';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import GetAppIcon from '@material-ui/icons/GetApp';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ButtonShare from '@material-ui/core/Button';
import ButtonDownload from '@material-ui/core/Button';
import ButtonAdvocate from '@material-ui/core/Button';
import ButtonSend from '@material-ui/core/Button';

const styles = makeStyles((theme) => ({
  para: {
    margin: 'auto',
    textAlign: 'center',
    padding: 10,
  },
  subHeader: {
    marginLeft: 10,
    paddingRight: 20,
  },
  kitsWrapper: {
    marginLeft: '11%',
    marginRight: '4%',
  },
  kit: {
    height: '100%',
  },
  shareIcon: {
    width: '40%',
    height: 30,
    borderRadius: '5px',
    marginRight: '170%',
    marginTop: 20,
  },
  shareIcon2: {
    width: '40%',
    height: 30,
    borderRadius: '5px',
    marginRight: '140%',
    marginTop: 20,
  },
  mediaGroup: {
    paddingLeft: 30,
  },

  inviteFriendBar: {
    backgroundColor: Theme.palette.secondary.lightest,
    marginTop: '10%',
    padding: '20px',
    left: '0',
    marginBottom: '10%',
    height: '120px',
    width: '100%',
    color: Theme.palette.primary.main,
  },
  inviteFriendBtn: {
    backgroundColor: Theme.palette.primary.main,
    color: Theme.palette.primary.contrastWhite,
    borderRadius: '50px',
    width: '100%',
    padding: 20,
  },
  inviteFriendText: {
    width: '90%',
    marginTop: 10,
    fontSize: 16,
    color: Theme.palette.primary.main,
    marginLeft: 20,
  },
  careText: {
    paddingLeft: 10,
  },
  cityInfo: {
    marginTop: '5%',
    padding: '20px',
    left: '0',
    marginBottom: '10%',
    height: '120px',
    width: '100%',
    color: Theme.palette.primary.main,
  },
  cityInfoText: {
    textAlign: 'center',
    width: '100%',
  },
  mainImage: {
    backgroundColor: 'red',
    width: '100%',
    height: '380px',
    marginBottom: 20,
    marginTop: -14,
    backgroundColor: Theme.palette.secondary.lighter,
  },
  sendBtn: {
    backgroundColor: Theme.palette.primary.main,
    color: Theme.palette.primary.contrastWhite,
    borderRadius: '50px',
    width: '100%',
    padding: 10,
  },
  questionsForm: {
    width: '90%',
    marginTop: 10,
    fontSize: 16,
    color: Theme.palette.primary.main,
    marginLeft: 10,
    marginBottom: 40,
  },
}));
const advocate = () => {
  const classes = styles();
  return (
    <>
      <Flex direction="column" marginTop="size-600">
        <Grid item sm={8} xs={12} className={classes.subHeader}>
          <View width="100%">
            <Header>
              <b>Category name kits</b>
            </Header>
            <Text>description ipsum ipsum ipsum iprum ipsum ipsum.</Text>
          </View>
        </Grid>

        <Grid className={classes.kitsWrapper}>
          <Flex
            direction="row"
            gap="size-1000"
            wrap="wrap"
            marginTop="size-300"
            marginBottom="size-500"
          >
            <Grid item sm={3} xs={12} className={classes.kit}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Name of kit description
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Copy description ipsum ipsum ipsum ipsum ipsum ipsum.Copy
                      ipsum.Copy description ipsum ipsum ipsum ipsum.
                    </Typography>
                    <div style={{ display: 'flex', float: 'right' }}>
                      <div
                        style={{
                          width: 10,
                        }}
                      >
                        <ButtonShare onClick={() => alert('share')}>
                          <ShareIcon className={classes.shareIcon} />
                        </ButtonShare>
                      </div>
                      <div
                        style={{
                          width: 3,
                          marginLeft: 30,
                        }}
                      >
                        <ButtonDownload onClick={() => alert('download')}>
                          <GetAppIcon className={classes.shareIcon2} />
                        </ButtonDownload>
                      </div>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item sm={3} xs={12} className={classes.kit}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Name of kit description
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Copy description ipsum ipsum ipsum ipsum ipsum ipsum.Copy
                      ipsum.Copy description ipsum ipsum ipsum ipsum.
                    </Typography>
                    <div style={{ display: 'flex', float: 'right' }}>
                      <div
                        style={{
                          width: 10,
                        }}
                      >
                        <ButtonShare onClick={() => alert('share')}>
                          <ShareIcon className={classes.shareIcon} />
                        </ButtonShare>
                      </div>
                      <div
                        style={{
                          width: 3,
                          marginLeft: 30,
                        }}
                      >
                        <ButtonDownload onClick={() => alert('download')}>
                          <GetAppIcon className={classes.shareIcon2} />
                        </ButtonDownload>
                      </div>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item sm={3} xs={12} className={classes.kit}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Name of kit description
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Copy description ipsum ipsum ipsum ipsum ipsum ipsum.Copy
                      ipsum.Copy description ipsum ipsum ipsum ipsum.
                    </Typography>
                    <div style={{ display: 'flex', float: 'right' }}>
                      <div
                        style={{
                          width: 10,
                        }}
                      >
                        <ButtonShare onClick={() => alert('share')}>
                          <ShareIcon className={classes.shareIcon} />
                        </ButtonShare>
                      </div>
                      <div
                        style={{
                          width: 3,
                          marginLeft: 30,
                        }}
                      >
                        <ButtonDownload onClick={() => alert('download')}>
                          <GetAppIcon className={classes.shareIcon2} />
                        </ButtonDownload>
                      </div>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Flex>
        </Grid>
      </Flex>

      <Flex direction="column" marginTop="size-600">
        <Grid item sm={8} xs={12} className={classes.subHeader}>
          <View width="100%">
            <Header>
              <b>Category name kits</b>
            </Header>
            <Text>description ipsum ipsum ipsum iprum ipsum ipsum.</Text>
          </View>
        </Grid>

        <Grid className={classes.kitsWrapper}>
          <Flex
            direction="row"
            gap="size-1000"
            wrap="wrap"
            marginTop="size-300"
            marginBottom="size-500"
          >
            <Grid item sm={3} xs={12} className={classes.kit}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Name of kit description
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Copy description ipsum ipsum ipsum ipsum ipsum ipsum.Copy
                      ipsum.Copy description ipsum ipsum ipsum ipsum.
                    </Typography>
                    <div style={{ display: 'flex', float: 'right' }}>
                      <div
                        style={{
                          width: 10,
                        }}
                      >
                        <ButtonShare onClick={() => alert('share')}>
                          <ShareIcon className={classes.shareIcon} />
                        </ButtonShare>
                      </div>
                      <div
                        style={{
                          width: 3,
                          marginLeft: 30,
                        }}
                      >
                        <ButtonDownload onClick={() => alert('download')}>
                          <GetAppIcon className={classes.shareIcon2} />
                        </ButtonDownload>
                      </div>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item sm={3} xs={12} className={classes.kit}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Name of kit description
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Copy description ipsum ipsum ipsum ipsum ipsum ipsum.Copy
                      ipsum.Copy description ipsum ipsum ipsum ipsum.
                    </Typography>
                    <div style={{ display: 'flex', float: 'right' }}>
                      <div
                        style={{
                          width: 10,
                        }}
                      >
                        <ButtonShare onClick={() => alert('share')}>
                          <ShareIcon className={classes.shareIcon} />
                        </ButtonShare>
                      </div>
                      <div
                        style={{
                          width: 3,
                          marginLeft: 30,
                        }}
                      >
                        <ButtonDownload onClick={() => alert('download')}>
                          <GetAppIcon className={classes.shareIcon2} />
                        </ButtonDownload>
                      </div>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item sm={3} xs={12} className={classes.kit}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Name of kit description
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Copy description ipsum ipsum ipsum ipsum ipsum ipsum.Copy
                      ipsum.Copy description ipsum ipsum ipsum ipsum.
                    </Typography>
                    <div style={{ display: 'flex', float: 'right' }}>
                      <div
                        style={{
                          width: 10,
                        }}
                      >
                        <ButtonShare onClick={() => alert('share')}>
                          <ShareIcon className={classes.shareIcon} />
                        </ButtonShare>
                      </div>
                      <div
                        style={{
                          width: 3,
                          marginLeft: 30,
                        }}
                      >
                        <ButtonDownload onClick={() => alert('download')}>
                          <GetAppIcon className={classes.shareIcon2} />
                        </ButtonDownload>
                      </div>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Flex>
        </Grid>
      </Flex>

      <Flex direction="column" marginTop="size-600">
        <Grid item sm={8} xs={12} className={classes.subHeader}>
          <View width="100%">
            <Header>
              <b>Category name kits</b>
            </Header>
            <Text>description ipsum ipsum ipsum iprum ipsum ipsum.</Text>
          </View>
        </Grid>

        <Grid className={classes.kitsWrapper}>
          <Flex
            direction="row"
            gap="size-1000"
            wrap="wrap"
            marginTop="size-300"
            marginBottom="size-500"
          >
            <Grid item sm={3} xs={12} className={classes.kit}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Name of kit description
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Copy description ipsum ipsum ipsum ipsum ipsum ipsum.Copy
                      ipsum.Copy description ipsum ipsum ipsum ipsum.
                    </Typography>
                    <div style={{ display: 'flex', float: 'right' }}>
                      <div
                        style={{
                          width: 10,
                        }}
                      >
                        <ButtonShare onClick={() => alert('share')}>
                          <ShareIcon className={classes.shareIcon} />
                        </ButtonShare>
                      </div>
                      <div
                        style={{
                          width: 3,
                          marginLeft: 30,
                        }}
                      >
                        <ButtonDownload onClick={() => alert('download')}>
                          <GetAppIcon className={classes.shareIcon2} />
                        </ButtonDownload>
                      </div>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item sm={3} xs={12} className={classes.kit}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Name of kit description
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Copy description ipsum ipsum ipsum ipsum ipsum ipsum.Copy
                      ipsum.Copy description ipsum ipsum ipsum ipsum.
                    </Typography>
                    <div style={{ display: 'flex', float: 'right' }}>
                      <div
                        style={{
                          width: 10,
                        }}
                      >
                        <ButtonShare onClick={() => alert('share')}>
                          <ShareIcon className={classes.shareIcon} />
                        </ButtonShare>
                      </div>
                      <div
                        style={{
                          width: 3,
                          marginLeft: 30,
                        }}
                      >
                        <ButtonDownload onClick={() => alert('download')}>
                          <GetAppIcon className={classes.shareIcon2} />
                        </ButtonDownload>
                      </div>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item sm={3} xs={12} className={classes.kit}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Name of kit description
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Copy description ipsum ipsum ipsum ipsum ipsum ipsum.Copy
                      ipsum.Copy description ipsum ipsum ipsum ipsum.
                    </Typography>
                    <div style={{ display: 'flex', float: 'right' }}>
                      <div
                        style={{
                          width: 10,
                        }}
                      >
                        <ButtonShare onClick={() => alert('share')}>
                          <ShareIcon className={classes.shareIcon} />
                        </ButtonShare>
                      </div>
                      <div
                        style={{
                          width: 3,
                          marginLeft: 30,
                        }}
                      >
                        <ButtonDownload onClick={() => alert('download')}>
                          <GetAppIcon className={classes.shareIcon2} />
                        </ButtonDownload>
                      </div>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Flex>
        </Grid>
      </Flex>

      <View width="100%" alignSelf="center">
        <Grid container className={classes.inviteFriendBar}>
          <Grid item sm={6} container>
            <Grid item sm />
            <Grid item sm />

            <Grid item sm={6} xs={12}>
              <div className={classes.inviteFriendText}>
                <Text>Know someone who might be interested in our kits?</Text>
              </div>
            </Grid>
          </Grid>

          <Grid item sm={6} container>
            <Grid item sm={6} xs={12}>
              <ButtonAdvocate
                className={classes.inviteFriendBtn}
                onCLick={() => (window.location.href = '/login')}
              >
                Invite your friend
              </ButtonAdvocate>
            </Grid>
            <Grid item sm />
            <Grid item sm />
          </Grid>
        </Grid>

        <Grid container className={classes.questionsForm}>
          <Grid item sm={6} container>
            <Grid item sm />
            <Grid item sm />
            <Grid item sm={6} xs={12}>
              {/* <View width="size-2000" marginEnd="size-300"> */}
              {/* <Flex direction="column"> */}
              <div className={classes.inviteFriendText}>
                <Header>
                  <h3>Questions?</h3>
                </Header>
                <Text>
                  Feel free to reach out to ask any questions or send us any
                  feedback! Please allow 24-48 hours to respond.
                </Text>
              </div>

              {/* </Flex> */}
              {/* </View> */}
            </Grid>
          </Grid>

          <Grid item sm={6} container>
            <Grid item sm />
            <Grid item sm />
            <Grid item sm />
            
            <View width="size-6000" marginStart="size-300">
              <Flex
                direction="column"
                rowGap="size-100"
                justifyContent="center"
              >
                <Form maxWidth="size-6000">
                  <TextField
                    id="textField"
                    placeholder="Subject*"
                    width="100%"
                    marginTop="size-200"
                  />
                  <TextField id="textField" placeholder="Email*" width="100%" />
                  <TextArea
                    id="textArea"
                    placeholder="Description"
                    width="100%"
                  />
                  <ButtonSend className={classes.sendBtn}>SEND</ButtonSend>
                </Form>
              </Flex>
            </View>
          </Grid>
        </Grid>
      </View>
    </>
  );
};

export default advocate;
