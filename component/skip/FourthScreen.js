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
import { TextInput } from 'react-native';




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
      <Text style={{fontFamily:'Poppins_600SemiBold',fontSize:20,bottom:150}}>LOGO</Text>
      <Image source={ require('../../assets/assets/Capture.png')} style={{width:150,height:84,resizeMode:'contain',bottom:125}} />
      <Text style={{fontFamily:'Poppins_400Regular',bottom:110}}>Choose your institution</Text>
      <Text style={{fontFamily:'Poppins_500Medium',fontSize:24 ,bottom:15}}>Log in to your account</Text>
  
      <View style={{width:302,height:40,backgroundColor:'#FFFFFF',borderWidth:2,borderRadius:50,borderColor:'#0000000D'}}>
      <View 
      style={{flexDirection:'row',alignItems:'center',left:15,top:3}}>
        <Image source={ require('../../assets/assets/profile.png')} 
        style={{width:14.75,height:15.02}} />
        <TextInput
        style={{fontSize:12,left:20,width:230,color:'#747474'}} placeholder='User ID or E-mail Address'/>
      </View>
      </View>

      <View 
      style={{width:302,height:40,backgroundColor:'#FFFFFF',borderWidth:2,borderRadius:50,borderColor:'#0000000D',top:17}}>
      <View 
      style={{flexDirection:'row',alignItems:'center',left:15,top:4}}>
        <Image source={ require('../../assets/assets/lock.png')} 
        style={{width:14.58,height:19.88}} />
        <TextInput
        style={{fontSize:12,left:20,width:230,color:'#747474'}} placeholder='Password'/>
          
      </View>
      </View>
      <TouchableOpacity>
      <Text style={{top:45,left:97}}>Remember me!</Text>
      </TouchableOpacity>

      <View style={{}}>
      <TouchableOpacity 
      style={{backgroundColor:'#00295A',width:104,height:40,alignItems:'center',justifyContent:'center',borderRadius:15,top:70}} 
      onPress={()=>{navigation.navigate('profile')}} >
            <Text style={{color:'white'}}>SIGN IN </Text>
      </TouchableOpacity>
      </View>

      <View style={{}}>
      <TouchableOpacity 
      style={{alignItems:'center',justifyContent:'center',borderRadius:15,top:85}} 
      onPress={()=>{navigation.navigate('forget')}}>
            <Text>Forget your password?</Text>
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