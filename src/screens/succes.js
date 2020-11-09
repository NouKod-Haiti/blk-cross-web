import React from 'react';
import { Flex, Text, Image, Button, View, Header } from '@adobe/react-spectrum';

const Succes = () => {
  return (
    <Flex direction="column" width="100%" height="100%" alignItems="center">
      <View>
        <Header>
          <h1>REGISTRATION SUCCES</h1>
        </Header>
        <Header>
          <h3>Thanks for registering!</h3>
        </Header>
        <Text>Your registration will be approved within 24 hours</Text>
        <Image src="celebration.png" />

        <Button
          variant="cta"
          id="signInButton"
          type="submit"
          // eslint-disable-next-line no-return-assign
          onPress={() => (window.location.href = '/')}
        >
          BACK TO FULTON COU TY OUTBREACH
        </Button>

        {/* <Footer marginStart="size-1700" > Copyright &copy; All rights reserved {new Date().getFullYear()}.</Footer> */}
      </View>
    </Flex>
  );
};

export default Succes;
