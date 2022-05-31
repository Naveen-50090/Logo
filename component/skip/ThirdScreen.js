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




const ThirdScreen= ({navigation}) => {

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
      <Text style={{fontFamily:'Poppins_600SemiBold',fontSize:20,bottom:10}}>LOGO</Text>
      <Image source={ require('../../assets/assets/num.png')} style={{width:300,height:350,resizeMode:'contain'}} />
      <Text style={{fontFamily:'Poppins_700Bold',fontSize:24 ,bottom:10}}>LOREM IPSUM</Text>
      <View style={{top:15}}>
      <Text style={{fontFamily:'Poppins_400Regular',fontSize:14,bottom:20}}>Lorem ipsum dolor sit amet, consectetur</Text>
      <Text style={{fontFamily:'Poppins_400Regular',fontSize:14,left:5,bottom:20}}>adipiscing elit, sed do eiusmod tempor </Text>
      <Text style={{fontFamily:'Poppins_400Regular',fontSize:14,left:100,bottom:20}}>incididunt .</Text>
      </View>
      <View style={{paddingLeft: 170,top:14}}>
      <TouchableOpacity 
      style={{backgroundColor:'#00295A',width:154,height:35,alignItems:'center',justifyContent:'center',borderRadius:15}} 
      onPress={()=>{navigation.navigate('Fourth')}}>
            <Text style={{color:'white',fontFamily:'Poppins_600SemiBold'}}>Let's get started </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
    
  )
}

export default ThirdScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FEFEFF',
  },
})