import { Text, View } from "react-native";
import { Link } from 'expo-router'
import WelcomePage from './../app/login/index'
import AppContextProvider from "@/context/AppContext";

export default function Index() {
   return (
      <AppContextProvider>
         <View
            style={{
               flex: 1,
            }}>
            <WelcomePage />
         </View>
      </AppContextProvider>
   );
}
