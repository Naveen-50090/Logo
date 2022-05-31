import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../component/bottomNavigation/Profile';
import Setting from '../component/bottomNavigation/Setting';


export const Tabs = createBottomTabNavigator();


function HeadScreen() {
    return (
      <NavigationContainer>
        <Tabs.Navigator screenOptions={{
          headerShadowVisible:false,
          headerShown:false,
        }}>
          <Tabs.Screen name="profile" component={Profile}/>
          <Tabs.Screen name="setting" component={Setting}/>
        </Tabs.Navigator>
      </NavigationContainer>
    );
  }

  
export default HeadScreen