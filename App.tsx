import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import RootNavigator from './navigators/RootNavigator';
import TabsNavigator from './navigators/TabsNavigator';

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;
