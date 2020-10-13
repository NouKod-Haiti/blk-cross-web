import React from "react";
import { Flex, Grid, Text, Image, Button, View } from "@adobe/react-spectrum";

const Succes = () => {
  return (
    <Grid height="100%" maxHeight="100%" columns="1fr 2fr 1fr">
      <View gridColumnStart="2" gridColumnEnd="3">
        <Flex
          direction="column"
          gap="size-100"
          marginStart="single-line-height"
        >
          <Text marginStart="single-line-height">
            <h1>REGISTRATION SUCCES</h1>
          </Text>
          <Text marginStart="single-line-height">
            <h3>Thanks for registering!</h3>
          </Text>
          <Text marginStart="single-line-height">
            Your registration will be approved within 24 hours
          </Text>
          <Image
            marginStart="single-line-height"
            width="50%"
            src="celebration.png"
            borderWidth="thin"
            borderColor="dark"
            backgroundColor="gray-100"
          />
          <Button
            marginStart="single-line-height"
            variant="primary"
            id="signInButton"
            type="submit"
            width="50%"
            // eslint-disable-next-line no-return-assign
            onPress={() => (window.location.href = "/")}
          >
            BACK TO FULTON COU TY OUTBREACH
          </Button>
        </Flex>
      </View>
    </Grid>
  );
};

export default Succes;
