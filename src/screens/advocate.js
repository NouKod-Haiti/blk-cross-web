import React from 'react';
import {
  Flex,
  View,
  Header,
  Text,
  Button,
  Well,
  TextField,
  TextArea,
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

const styles = makeStyles({
 
});
const advocate = () => {
    const classes = styles();
    return (
      <Flex direction="column" width="100%" height="100%">
        {/* <View
          marginTop="size-100"
          borderWidth="thin"
          borderColor="static-black"
          marginBottom="size-300"
        >
          <ExitToAppIcon />
        </View> */}
        <View paddingBottom="size-200">
          <Flex direction="column" marginTop="size-200">
            <View>
                 <Header>
                   <b>Category name of kits</b>
                 </Header>
                 <Text>Copy description ipsum ipsum ipsum ipsum ipsum ipsum.</Text>
                 <Flex
                direction="row"
                wrap="wrap"
                marginTop="size-100"
                marginBottom="size-200"
              >
                 <View marginBottom="size-200">
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
                <View marginBottom="size-200">
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
                <View marginBottom="size-200"
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
            </View>
          </Flex>
          <Flex direction="column" marginTop="size-200">
            <View>
              <Header>
                <b>Category name of kits</b>
              </Header>
              <Text>Copy description ipsum ipsum ipsum ipsum ipsum ipsum.</Text>
              <Flex
                direction="row"
                wrap="wrap"
                marginTop="size-100"
                marginBottom="size-200"
              >
                <View marginBottom="size-200">
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
                <View marginBottom="size-200"
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
                <View marginBottom="size-200"
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
            </View>
          </Flex>
          <Flex direction="column" marginTop="size-200">
            <View>
              <Header>
                <b>Category name of kits</b>
              </Header>
              <Text>Copy description ipsum ipsum ipsum ipsum ipsum ipsum.</Text>
              <Flex
                direction="row"
                wrap="wrap"
                marginTop="size-100"
                marginBottom="size-200"
              >
                <View marginBottom="size-200">
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
                <View marginBottom="size-200"
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
                <View marginBottom="size-200"
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
            </View>
          </Flex>
        </View>
        <View marginTop="size-200" marginBottom="size-300">
          <Well>
            <Flex direction="row" marginTop="size-100">
              <Text>Know someone who might be interested in our kits?</Text>
              <Button
                variant="cta"
                // eslint-disable-next-line no-return-assign
                onPress={() => (window.location.href = '#')}
              >
                Invite your friends
              </Button>
            </Flex>
          </Well>
        </View>
        <View  alignSelf="center">
          <Flex direction="row" marginTop="size-200" alignContent="center">
            <Flex direction="column">
              <Header>
                <h3>Questions?</h3>
              </Header>
              <Text>
                Feel free to reach out to ask any questions or send us any
                feedback! Please allow 24-48 hours to respond.
              </Text>
            </Flex>
            <Flex direction="column">
              <TextField id="textfield" label="Subject*" />
              <TextField id="textfield" label="Email*"/>
              <TextArea label="Description" />
            </Flex>
          </Flex>
        </View>
       </Flex>
    );
}

export default advocate;
