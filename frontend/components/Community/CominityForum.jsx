
import { StyleSheet, View, FlatList, TouchableOpacity, Text, TextInput } from 'react-native';
import React, { useContext } from 'react';
import QuestionCard from './QuestionCard';
import { AppContext } from '../../context/AppContext';
import Colors from '../../constants/Colors';

const CommunityForum = () => {
   const { waterQuestionsData } = useContext(AppContext);



   return (
      <View style={styles.container}>
         <FlatList
            data={waterQuestionsData}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
               <View style={styles.questionContainer}>
                  <Text style={styles.question}>{item.question} </Text>
                  <Text style={styles.answer}>{item.initialAnswer}</Text>

                  <TextInput style={styles.answerInput}
                     placeholder='Enter your answer'
                  />
                  <TouchableOpacity style={styles.postAnswer}>
                     <Text>Post Answer</Text>
                  </TouchableOpacity>
               </View>
            )}
         ></FlatList>
      </View>
   );
};

export default CommunityForum;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#f0f0f0', // Light gray background
   },
   questionContainer: {
      backgroundColor: "#CECECE",
      padding: 10,
      borderRadius: 10,
      elevation: 2,
      display: 'flex',
      marginBottom:20,
   },
   question: {
      fontSize: 22,
      fontFamily: 'outfit',
      marginBottom: 30,
   },
   answerInput: {
      backgroundColor: "white",
      height: 40,
      borderRadius: 10,
      marginBottom: 10,
      marginLeft: 10,
      paddingLeft:12,

   },
   answer: {
      fontSize: 18,
      fontFamily: 'outfit',
      marginBottom: 30,
      marginLeft: 10,
   },
   postAnswer: {
      backgroundColor: Colors.PRIMARY,
      height: 40,
      width: 200,
      borderRadius: 10,
      marginBottom: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10,
   }
});
