import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import React, { useContext } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import Colors from './../../constants/Colors';
import { AppContext } from './../../context/AppContext'
import { useRouter } from 'expo-router';

const Login = () => {

   const { formData, SetFormData, validateEmail, validatePassword, comparePassword } = useContext(AppContext)
   const { error, setError } = useContext(AppContext);

   const router = useRouter();

   const handleInputChange = (feild, value) => {
      SetFormData({ ...formData, [feild]: value })
   }

   const handleSubmit = () => {
      let hasError = false;
      let newError = {
         name: false,
         email: false,
         region: false,
         password: false,
         confrimPass: false,
      };


      Object.keys(formData).forEach((feild) => {
         if (formData[feild] === '') {
            newError[feild] = true;
            hasError = true;
         } else {
            newError[feild] = false;
         }
      })

      if (formData.email === '') {
         newError.email = " Email Or Mobile Number is Required";
         hasError = true;
      }
      else if (!validateEmail(formData.email)) {
         hasError = true;
         newError.email = "Invalied Email Or Mobile Number";
      } else {
         newError.email = false;
      }


      if (formData.password === '') {
         newError.password = "Password is required";
         hasError = true;
      } else if (!validatePassword(formData.password)) {
         newError.password = "Pasword length must be 8";
         hasError = true;
      } else {
         newError.password = false;
      }

      if (formData.confrimPass === '') {
         newError.confrimPass = "Confirmation is required";
         hasError = true;
      } else if (!comparePassword(formData.password, formData.confrimPass)) {
         newError.confrimPass = "Passwords do not match";
         hasError = true;
      } else {
         newError.confrimPass = false;
      }

      if (!hasError) {
         router.replace('/home')
      }
      setError(newError)
   }

   const [isChecked, setIsChecked] = useState(false);
   const handleCheckBox = () => {
      setIsChecked(!isChecked)
   }

   const [showLogin, SetShowLogin] = useState('Sign up')

   // Reset error states whenever the login mode changes 
   useEffect(() => {
      setError({
         name: false,
         email: false,
         region: false,
         password: false,
         confrimPass: false,
      });

      // Reset form data if necessary (optional)
      SetFormData({
         name: '',
         email: '',
         region: '',
         password: '',
         confrimPass: '',
      });

   }, [showLogin]);


   return (
      <KeyboardAvoidingView
         style={{ flex: 1, justifyContent: 'center' }}
         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
         keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>

         <LinearGradient
            colors={['#8BA9D1', '#3A7BB0', '#2D5E8A']}
            style={styles.background}>
            <View style={styles.container}>
               <Text style={[styles.text, styles.heading]}>Welcome</Text>

               {showLogin === 'Sign up' ? (
                  <>
                     {error.name && <Text style={styles.errorText}>Name is required</Text>}
                     <TextInput
                        onChangeText={(text) => handleInputChange('name', text)}
                        onFocus={() => setError(prev => ({ ...prev, name: false }))}
                        value={formData.name}
                        style={styles.input}
                        placeholder="Enter Your Full Name"
                     />
                  </>
               ) : null}


               {error.email && showLogin === "Sign up" && <Text style={styles.errorText}>{error.email}</Text>}
               <TextInput
                  onChangeText={(text) => handleInputChange('email', text)}
                  onFocus={() => setError(prev => ({ ...prev, email: false }))}
                  value={formData.email}
                  style={styles.input}
                  placeholder='Enter Phone Or Email' />


               {showLogin === 'Sign up' ? (<>
                  {error.region && <Text style={styles.errorText}>Region is required</Text>}
                  <TextInput onChangeText={(text) => handleInputChange('region', text)}
                     onFocus={() => setError(prev => ({ ...prev, region: false }))}
                     value={formData.region}
                     style={styles.input}
                     placeholder='State or Region' /></>) : <></>}


               {error.password && showLogin === 'Sign up' && <Text style={styles.errorText}>{error.password}</Text>}
               <TextInput
                  onChangeText={(text) => handleInputChange('password', text)}
                  onFocus={() => setError(prev => ({ ...prev, password: false }))}
                  value={formData.password}
                  style={styles.input}
                  placeholder='Password'
                  secureTextEntry={true}
               />

               {showLogin === 'Sign up' ? (<>
                  {error.confrimPass && <Text style={styles.errorText}>{error.confrimPass}</Text>}
                  <TextInput onChangeText={(text) => handleInputChange('confrimPass', text)}
                     onFocus={() => setError(prev => ({ ...prev, confrimPass: false }))}
                     value={formData.confrimPass}
                     style={styles.input}
                     placeholder='Confrim Password'
                     secureTextEntry={true}
                  /></>) : null}

               <View style={styles.termsCondition}>
                  <View style={styles.checkboxContainer}>
                     <TouchableOpacity onPress={handleCheckBox}>
                        <View style={[styles.checkBox, isChecked && styles.active]}></View>
                     </TouchableOpacity>
                     <Text style={styles.termsText}>Accept Terms And Conditions</Text>
                  </View>

                  <TouchableOpacity style={styles.btn} onPress={showLogin === 'Sign up' ? handleSubmit : () => router.replace('/home')}>
                     <Text style={styles.text}>{showLogin}</Text>
                  </TouchableOpacity>

                  <View>
                     {showLogin === "Sign up" ? <Text style={styles.text}>Already have an account ? <Text style={styles.termsText} onPress={() => SetShowLogin("Login")}>Login here</Text></Text> :
                        <Text style={styles.text}>Create new an account ? <Text style={styles.termsText} onPress={() => SetShowLogin("Sign up")}>Click here</Text></Text>}
                  </View>
               </View>
            </View>
         </LinearGradient>
      </KeyboardAvoidingView>
   );
};

export default Login;

const styles = StyleSheet.create({
   background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   container: {
      padding: 20,
      backgroundColor: "#CFA96E",
      borderRadius: 16,
      borderWidth: 1,
      borderColor: 'black',
      width: '90%',
      position: 'absolute',
      top: 120,

   },
   heading: {
      fontSize: 20,
      color: '#333',
      fontWeight: '600', // Change to a valid weight
      textAlign: 'center',
      marginBottom: 30,
   },
   text: {
      fontFamily: 'outfit',
      textAlign: 'center',
   },
   input: {
      fontFamily: 'outfit',
      backgroundColor: Colors.LIGHTORANGE,
      fontSize: 14,
      padding: 8,
      borderRadius: 10,
      borderWidth: 0.3,
      marginBottom: 16,
   },
   termsCondition: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   checkboxContainer: {
      marginTop: 25,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 10
   },

   btn: {
      backgroundColor: '#3A7BB0', // Example button color
      padding: 10,
      borderRadius: 10,
      width: 180,
      marginBottom: 10,
   },
   checkBox: {
      height: 20,
      width: 20,
      backgroundColor: 'white',
      marginRight: 10,
      borderRadius: 3,
   },
   active: {
      backgroundColor: "#0A8287",
   },
   termsText: {
      fontFamily: 'outfit',
      color: "#56A5A8",
   },
   errorText: {
      color: 'red',
      fontFamily: 'outfit',
   },
});
