/* eslint-disable react/jsx-one-expression-per-line */
import React, { PureComponent } from 'react';
import {
  Button,
  View,
  Flex,
  Header,
  Well,
  Footer,
  Text,
} from '@adobe/react-spectrum';
import ReactPlayer from 'react-player';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ShareIcon from '@material-ui/icons/Share';
import GetAppIcon from '@material-ui/icons/GetApp';

class Home extends PureComponent {
  render() {
    return (
      <Flex direction="column" width="100%" height="100%">
        <View
          minWidth="size-6000"
          borderWidth="thin"
          borderColor="dark"
          borderRadius="medium"
          paddingBottom="size-200"
        >
          <Flex direction="column" alignItems="center">
            <Header>
              <h2>Fulton County Covid-19 Outreach</h2>
            </Header>
            <View width="60%">
              <Text>
                about/overview tattooed fanny pack iPhone biodiesel subway tile.
                description ipsum ipsum ipsum ipsum ipsum ipsum.description
                ipsum ipsum ipsum ipsum ipsum ipsum.
              </Text>
            </View>
          </Flex>

          <Flex direction="column" marginTop="size-600">
            <Header marginStart="size-1200">
              <b>Help spread the word</b>
            </Header>
            <Text marginStart="size-1200">
              Copy description ipsum ipsum ipsum ipsum ipsum ipsum.
            </Text>

            <Flex
              direction="row"
              gap="size-600"
              marginX="size-2000"
              wrap="wrap"
              marginTop="size-300"
              marginBottom="size-500"
            >
              <View
                width="size-3000"
                height="size-2000"
                marginBottom="size-1000"
              >
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
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" id="signInButton" variant="cta">
                      <ShareIcon />
                    </Button>
                    <Button size="small" id="signInButton" variant="cta">
                      <GetAppIcon />
                    </Button>
                  </CardActions>
                </Card>
              </View>
              <View
                width="size-3000"
                height="size-2000"
                marginBottom="size-1000"
              >
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
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" id="signInButton" variant="cta">
                      <ShareIcon />
                    </Button>
                    <Button size="small" id="signInButton" variant="cta">
                      <GetAppIcon />
                    </Button>
                  </CardActions>
                </Card>
              </View>
              <View
                width="size-3000"
                height="size-2000"
                marginBottom="size-1000"
              >
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
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" id="signInButton" variant="cta">
                      <ShareIcon />
                    </Button>
                    <Button size="small" id="signInButton" variant="cta">
                      <GetAppIcon />
                    </Button>
                  </CardActions>
                </Card>
              </View>
            </Flex>
          </Flex>

          <Flex direction="column" marginTop="size-600">
            <Header marginStart="size-1200">
              <b>Video section title</b>
            </Header>
            <Text marginStart="size-1200">
              Copy description ipsum ipsum ipsum ipsum ipsum ipsum. Copy
              description ipsum ipsum ipsum ipsum ipsum ipsum.
            </Text>

            <Flex
              direction="row"
              gap="size-600"
              marginX="size-2000"
              wrap="wrap"
              marginTop="size-300"
              marginBottom="size-1000"
            >
              <View
                width="size-3000"
                height="size-2000"
                marginBottom="size-1000"
              >
                <ReactPlayer
                  url="#"
                  controls
                  width="size-3000"
                  height="size-2000"
                />
                <Text marginTop="size-100">
                  Copy description ipsum ipsum ipsum ipsum ipsum ipsum. Copy
                  description ipsum ipsum ipsum ipsum ipsum ipsum.
                </Text>
              </View>

              <View
                width="size-3000"
                height="size-2000"
                marginBottom="size-1000"
              >
                <ReactPlayer
                  url="#"
                  controls
                  width="size-3000"
                  height="size-2000"
                />
                <Text marginTop="size-100">
                  Copy description ipsum ipsum ipsum ipsum ipsum ipsum. Copy
                  description ipsum ipsum ipsum ipsum ipsum ipsum.
                </Text>
              </View>
              <View width="size-3000" height="size-2000">
                <ReactPlayer
                  url="#"
                  controls
                  width="size-3000"
                  height="size-2000"
                />
                <Text marginTop="size-100">
                  Copy description ipsum ipsum ipsum ipsum ipsum ipsum. Copy
                  description ipsum ipsum ipsum ipsum ipsum ipsum.
                </Text>
              </View>
            </Flex>
          </Flex>

          <Flex direction="column" marginTop="size-600">
            <Header marginStart="size-1200">
              <b>Care &amp; Resources</b>
            </Header>
            <View width="85%" alignSelf="center">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Physical health</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Dept/organizations name</Typography>
                  <Typography>Dept/organizations name</Typography>
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
          </Flex>

          <Well marginTop="size-200">
            <Button
              variant="cta"
              marginStart="size-900"
              // eslint-disable-next-line no-return-assign
              onPress={() => (window.location.href = '/login')}
              id="signInButton"
            >
              Become an advocate
            </Button>
          </Well>

          {/* <Footer marginTop="size-100">
            {' '}
            Copyright &copy; All rights reserved {new Date().getFullYear()}.
          </Footer> */}
        </View>
      </Flex>
    );
  }
}

export default Home;
