import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, Layout } from '@ui-kitten/components';

const RegisterScreen = ({ navigation }) => {
  return (
    <Layout style={styles.layout}>
      <Text category="h1">Register</Text>
      <Button
        status="success"
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        Go to Home
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

export default RegisterScreen;
