import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SildeShow from '../../components/SlideShow';
import { useRouter } from 'expo-router';


const WelcomePage = () => {
   const router = useRouter();

   return (
      <View style={styles.container}>
         <ImageBackground
            source={require('./../../assets/images/welcome.jpeg')}
            style={styles.backgroundImage}
            resizeMode="cover"
         >
            <LinearGradient
               colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.6)']}
               style={styles.gradient}
            />

            <View style={styles.welcome}>

               <View style={{ marginTop: 10 }}>
                  <Text style={[styles.text, styles.heading]}>Welcome to WATERX</Text>
                  <Text style={[styles.text, styles.slogan]} >Every Drop Counts, Every Idea Creates Change</Text>
               </View>
               <View>
               <Text style={styles.secondHeading}>What You Can Do Here</Text>
               <SildeShow></SildeShow>
               </View>
               <Pressable 
                onPress={()=>router.replace('/login/login')}
               style={{
                  padding: 14,
                  width: '90%',
                  backgroundColor: "#94D8DB",
                  borderRadius: 14,
                  marginTop:60
               }}><Text style={styles.btn}>Explore More</Text></Pressable>
            </View>
         </ImageBackground>
      </View>
   );
};

export default WelcomePage;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      fontFamily: "outfit",
   },
   backgroundImage: {
      flex: 1,
   },
   gradient: {
      ...StyleSheet.absoluteFillObject,
   },
   heading: {
      fontSize: 26,
      fontFamily: 'outfit-bold',
      textAlign: 'center',
      color: '#94D8DB'
   },
   welcome: {
      marginTop:100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 50

   },
   slogan: {
      textAlign: 'center',
      fontSize: 15,
      fontFamily: 'outfit',
      color: '#DDC7A0'
   },
   welcomePara: {
      lineHeight: 22,
      fontSize: 17,
      color: '#94D8DB',
      fontFamily: 'outfit',
      textAlign: 'center'
   },
   btn: {
      textAlign: 'center',
      fontFamily: 'outfit-medium',
      fontSize: 20
   },
   secondHeading:{
      color:'white',
      fontFamily:'outfit-bold',
      fontSize:20,
      textAlign:'center',
      marginBottom:10
   },

});
