import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, Layout } from '@ui-kitten/components';

const HomeScreen = ({ navigation }) => {
  return (
    <Layout style={styles.layout}>
      <Text category="h1">Home</Text>
      <Button
        status="info"
        style={styles.button}
        onPress={() => navigation.navigate('Register')}
      >
        Go to Register
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: 8
  }
});

export default HomeScreen;
