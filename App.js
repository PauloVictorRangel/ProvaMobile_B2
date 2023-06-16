import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';


import AuthorizationRoute from './src/routes/auth';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AuthorizationRoute />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});