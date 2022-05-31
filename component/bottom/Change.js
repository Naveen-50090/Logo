import { View, Text,StyleSheet ,Button ,Image,TextInput} from 'react-native'
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




const Forget= ({navigation}) => {

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
      <Text style={{fontFamily:'Poppins_600SemiBold',fontSize:20,top:50}}>LOGO</Text>
      <Text style={{fontFamily:'Poppins_600SemiBold',fontSize:24,top:90,right:45}}>Change Password</Text>
      <Text style={{fontFamily:'Poppins_500Medium',fontSize:10,top:125,right:115,color:'#1B1B1B'}}>NEW PASSWORD</Text>
      <View>
      <TextInput style={{fontSize:12,width:270,top:130,right:20,borderBottomWidth:1,borderColor:'#1C2D417F'}} 
      placeholder='NEW PASSWORD'/>
      </View>

      <Text style={{fontFamily:'Poppins_500Medium',fontSize:10,top:160,right:105,color:'#1B1B1B'}}>RE-ENTER PASSWORD</Text>
      <View>
      <TextInput style={{fontSize:12,width:270,top:165,right:20,borderBottomWidth:1,borderColor:'#1C2D417F'}}
       placeholder='Repeat your password'/>
      </View>
      
      <View style={{top:190,alignItems:'center'}}>
      <TouchableOpacity 
      style={{backgroundColor:'#00295A',width:104,height:40,alignItems:'center',justifyContent:'center',borderRadius:15}} 
      onPress={()=>{navigation.navigate('Five')}}>
            <Text style={{color:'white',fontFamily:'Poppins_600SemiBold'}}>FINISH</Text>
      </TouchableOpacity>
      </View>
      
    </SafeAreaView>
    
  )
}

export default Forget


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    
  },
})