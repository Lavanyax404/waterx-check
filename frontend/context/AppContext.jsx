import { createContext, useState } from "react";

export const AppContext = createContext(null);

const AppContextProvider = (props) => {
   const categoryFilter = ['Agriculture', 'Domestic Use', 'Industrial use', 'Case Studies', 'More']

   // for login page data collection 
   const [formData, SetFormData] = useState({
      name: '',
      email: '',
      region: '',
      password: '',
      confrimPass: '',
   })

   // error for the login page 
   const [error, setError] = useState({
      name: false,
      email: false,
      region: false,
      password: false,
      confrimPass: false,
   })

   // password validator
   const comparePassword = (password, confoPass) => {
      return password === confoPass;
   }

   const validatePassword = (password) => {
      return password.length >= 8;
   }

   //email validator
   const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const mobileRegex = /^\d{10}$/;
      return emailRegex.test(email) || mobileRegex.test(email);
   };


   // for the video container 
   const videoData = [
      { id: '1', uri: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: '2', uri: 'https://www.w3schools.com/html/movie.mp4' },
      { id: '3', uri: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: '4', uri: 'https://www.w3schools.com/html/movie.mp4' },
   ];


   // community forum data 
  Questions = {
      id: 1,
      title: "How to implement push notifications in React Native?",
      content: "I'm trying to add push notifications to my React Native app. What's the best approach?",
      author: "ReactNewbie",
      votes: 5,
      answers: [
        {
          id: 1,
          content: "I recommend using React Native Firebase for push notifications. It's well-documented and widely used.",
          author: "DevExpert",
          votes: 3
        }
      ]
    }


    // community ofrm data 
    const waterQuestionsData = [
      {
        id: 1,
        question: "What are the primary sources of freshwater?",
        initialAnswer: "Rivers, lakes, and groundwater.",
      },
      {
        id: 2,
        question: "How much water is necessary for daily consumption?",
        initialAnswer: "About 2 to 3 liters per person.",
      },
      {
        id: 3,
        question: "What is water scarcity?",
        initialAnswer: "A situation where the demand for water exceeds the available amount.",
      },
      {
        id: 4,
        question: "What methods can be used to conserve water?",
        initialAnswer: "Rainwater harvesting, fixing leaks, and using water-efficient appliances.",
      },
      {
        id: 5,
        question: "What is the impact of pollution on water sources?",
        initialAnswer: "It deteriorates water quality, making it unsafe for consumption.",
      },
    ];

   const contextValue = {
      categoryFilter,
      formData,
      SetFormData,
      error,
      setError,
      comparePassword,
      validatePassword,
      validateEmail,
      videoData,
      waterQuestionsData,

   }


   return (
      <AppContext.Provider value={contextValue}>
         {props.children}
      </AppContext.Provider>
   );

}


export default AppContextProvider;