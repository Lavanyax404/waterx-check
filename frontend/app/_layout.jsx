import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import AppContextProvider from './../context/AppContext'
export default function RootLayout() {
   useFonts({
      'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
      'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
      'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf')
   })


   return (
      <AppContextProvider>
         <Stack>
            <Stack.Screen name="index" options={{
               headerShown: false
            }} />
            <Stack.Screen name="login/login" options={{
               headerShown: false
            }} />
            <Stack.Screen name="(tabs)" options={{
               headerShown: false
            }} />
         </Stack>
      </AppContextProvider>
   );
}
