/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ReactPlayer from 'react-player';
import Theme from '../util/theme';

// React Scpectrum Stuff
import { View, Flex, Header, Text } from '@adobe/react-spectrum';

// MUI Stuff
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import ShareIcon from '@material-ui/icons/Share';
import GetAppIcon from '@material-ui/icons/GetApp';
import ButtonShare from '@material-ui/core/Button';
import ButtonDownload from '@material-ui/core/Button';
import ButtonAdvocate from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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

  advocateBar: {
    backgroundColor: Theme.palette.secondary.lightest,
    marginTop: '10%',
    padding: '20px',
    left: '0',
    marginBottom: '10%',
    height: '120px',
    width: '100%',
    color: Theme.palette.primary.main,
  },
  advocateBtn: {
    backgroundColor: Theme.palette.primary.main,
    color: Theme.palette.primary.contrastWhite,
    borderRadius: '50px',
    width: '100%',
    padding: 20,
  },
  advocateText: {
    width: '100%',
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
}));

const publicPage = () => {
  const classes = styles();
  return (
    <>
      <Flex direction="column" width="100%" height="100%">
        <View paddingBottom="size-200">
          <View>
            <div className={classes.mainImage}>Image place holder</div>
          </View>

          <Flex direction="column" alignItems="center">
            <Header>
              <h2>Fulton County Covid-19 Outreach</h2>
            </Header>
            <View>
              <Grid item sm />
              <Grid item sm={8} xs={12} className={classes.para}>
                <Text>
                  about/overview tattooed fanny pack iPhone biodiesel subway
                  tile. description ipsum ipsum ipsum ipsum ipsum
                  ipsum.description ipsum ipsum ipsum ipsum ipsum ipsum.
                </Text>
              </Grid>
              <Grid item sm />
            </View>
          </Flex>

          <Flex direction="column" marginTop="size-600">
            <Grid item sm={8} xs={12} className={classes.subHeader}>
              <View width="100%">
                <Header>
                  <b>Help spread the word</b>
                </Header>
                <Text>
                  Copy description ipsum ipsum ipsum iprum ipsum ipsum.
                </Text>
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
                          Name of kit
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Copy description ipsum ipsum ipsum ipsum ipsum
                          ipsum.Copy ipsum.Copy description ipsum ipsum ipsum
                          ipsum.
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
                          Name of kit
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Copy description ipsum ipsum ipsum ipsum ipsum
                          ipsum.Copy ipsum.Copy description ipsum ipsum ipsum
                          ipsum.
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
                          Name of kit
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Copy description ipsum ipsum ipsum ipsum ipsum
                          ipsum.Copy ipsum.Copy description ipsum ipsum ipsum
                          ipsum.
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

          <Flex
            direction="row"
            gap="size-300"
            wrap="wrap"
            marginBottom="size-1000"
          >
            <Grid item sm={8} xs={12} className={classes.subHeader}>
              <View width="100%">
                <Header>
                  <b>Video section title</b>
                </Header>
                <Text>
                  Copy description ipsum ipsum ipsum ipsum ipsum ipsum. Copy
                  description ipsum ipsum ipsum ipsum ipsum ipsum.
                </Text>
              </View>
            </Grid>
            <Grid
              container
              item
              xs={12}
              spacing={4}
              className={classes.mediaGroup}
            >
              <Grid item sm={4} xs={12}>
                <View height="size-2000" marginBottom="size-1000">
                  <ReactPlayer
                    url="#"
                    controls
                    width="size-1000"
                    height="size-2000"
                  />
                  <Text marginTop="size-100">
                    Copy description ipsum ipsum ipsum ipsum ipsum ipsum. Copy
                    description ipsum ipsum ipsum ipsum ipsum ipsum.
                  </Text>
                </View>
              </Grid>
              <Grid item sm={4} xs={12}>
                <View height="size-2000" marginBottom="size-1000">
                  <ReactPlayer
                    url="#"
                    controls
                    width="size-100"
                    height="size-2000"
                  />
                  <Text marginTop="size-100">
                    Copy description ipsum ipsum ipsum ipsum ipsum ipsum. Copy
                    description ipsum ipsum ipsum ipsum ipsum ipsum.
                  </Text>
                </View>
              </Grid>
              <Grid item sm={4} xs={12}>
                <View height="size-2000" marginBottom="size-1000">
                  <ReactPlayer
                    url="#"
                    controls
                    width="size-100"
                    height="size-2000"
                  />
                  <Text marginTop="size-100">
                    Copy description ipsum ipsum ipsum ipsum ipsum ipsum. Copy
                    description ipsum ipsum ipsum ipsum ipsum ipsum.
                  </Text>
                </View>
              </Grid>
            </Grid>
          </Flex>

          <Flex direction="column" marginTop="size-600">
            <Grid item sm={12} xs={12} className={classes.careAndResources}>
              <View width="60%" alignSelf="center">
                <Header>
                  <h2 className={classes.careText}>Care &amp; Resources</h2>
                </Header>
              </View>

              <View width="100%" alignSelf="center">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Physical health</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container>
                      <Grid item sm={4} xs={12} className={classes.loginText}>
                        <Typography>Dept/organizations name</Typography>
                      </Grid>
                      <Grid item sm={4} xs={12} className={classes.loginText}>
                        <Typography>Dept/organizations name</Typography>
                      </Grid>
                      <Grid item sm={4} xs={12} className={classes.loginText}>
                        <Typography>Dept/organizations name</Typography>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Mental and behavioral health</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Economic health and assistant</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Social and community health</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </View>
            </Grid>

            <View width="100%" alignSelf="center">
              <Grid container className={classes.advocateBar}>
                <Grid item sm={6} container>
                  <Grid item sm />
                  <Grid item sm />
                  <Grid item sm={6} xs={12}>
                    <ButtonAdvocate
                      className={classes.advocateBtn}
                      //TODO: link will be changed
                      onClick={() => (window.location.href = '/advocate')}
                    >
                      Become an advocate
                    </ButtonAdvocate>
                  </Grid>
                </Grid>

                <Grid item sm={6} container>
                  <Grid item sm={6} xs={12}>
                    <div className={classes.advocateText}>
                      <Text>
                        Toolkit download content ipsum ipsum ipsum ipsum ipsum!
                      </Text>
                    </div>
                  </Grid>
                  <Grid item sm />
                  <Grid item sm />
                </Grid>
              </Grid>
            </View>

            <View width="100%" alignSelf="center">
              <Grid container className={classes.cityInfo}>
                <div className={classes.cityInfoText}>
                  <View>
                    <Text>Black cross info</Text>
                  </View>
                  <View>
                    <Text>Contact us for your county/city/state</Text>
                  </View>
                </div>
              </Grid>
            </View>
          </Flex>
        </View>
      </Flex>
    </>
  );
};

export default publicPage;
