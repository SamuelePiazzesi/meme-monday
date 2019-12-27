import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/home';
import RegisterScreen from '../screens/auth/register';
import { createAppContainer } from 'react-navigation';

const NavigationRoutes = createStackNavigator({
  Home: { screen: HomeScreen },
  Register: { screen: RegisterScreen }
});

const MainNavigator = createAppContainer(NavigationRoutes);

export default MainNavigator;
