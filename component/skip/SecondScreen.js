import { View, Text,StyleSheet ,Button ,Image} from 'react-native'
import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { 
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic 
} from '@expo-google-fonts/poppins';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';




const SecondScreen= ({navigation}) => {

  let [FontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic 
  });

  if(!FontsLoaded){
    return<AppLoading/>
  }

  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={{fontFamily:'Poppins_600SemiBold',fontSize:20,top:15}}>LOGO</Text>
      <Image source={ require('../../assets/assets/Second.png')} style={{width:350,height:425,resizeMode:'contain',bottom:15}} />
      <Text style={{fontFamily:'Poppins_700Bold',fontSize:24 ,bottom:45}}>LOREM IPSUM</Text>
      <View style={{bottom:18}}>
      <Text style={{fontFamily:'Poppins_400Regular',fontSize:14,left:10,bottom:20}}>Lorem ipsum dolor sit amet, consetetur</Text>
      <Text style={{fontFamily:'Poppins_400Regular',fontSize:14,bottom:20}}>sadipscing elitr, sed diam nonumy eirmod </Text>
      <Text style={{fontFamily:'Poppins_400Regular',fontSize:14,left:21,bottom:20}}>tempor invidunt ut labore et dolore…</Text>
      </View>
      <View style={{bottom:24,paddingLeft: 200}}>
      <TouchableOpacity 
      style={{backgroundColor:'#00295A',width:82,height:35,alignItems:'center',justifyContent:'center',borderRadius:15}} 
      onPress={()=>{navigation.navigate('Third')}}>
            <Text style={{color:'white'}}>SKIP </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
    
  )
}

export default SecondScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FEFEFF',
  },
})