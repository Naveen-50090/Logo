import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FrontScreen from '../component/skip/FrontScreen';
import SecondScreen from '../component/skip/SecondScreen';
import ThirdScreen from '../component/skip/ThirdScreen';
import FourthScreen from '../component/skip/FourthScreen'
import Home from '../component/bottom/Home';
import Forget from '../component/bottom/Forget';
import Change from '../component/bottom/Change';
import Profile from '../component/bottomNavigation/Profile';




export const Stack = createNativeStackNavigator();





 

function App() {
    return (
      <NavigationContainer>
     
        <Stack.Navigator screenOptions={{
          headerShadowVisible:false,
          headerShown:false,
        }}>
          <Stack.Screen name="Home" component={FrontScreen}  />
          <Stack.Screen name="Next" component={SecondScreen} /> 
          <Stack.Screen name="Third" component={ThirdScreen} />
          <Stack.Screen name="Fourth" component={FourthScreen} /> 
          <Stack.Screen name='Five' component={Home}/>
          <Stack.Screen name='forget' component={Forget}/>
          <Stack.Screen name='change' component={Change}/>
          <Stack.Screen name='profile' component={Profile}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  
export default App