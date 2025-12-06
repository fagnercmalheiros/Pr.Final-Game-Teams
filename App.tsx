import { Platform, StatusBar, View } from "react-native";
import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components/native";
import Constants from 'expo-constants'

import { Groups } from "@screens/Groups";
import { Loading } from "@components/Loading";
import { NewGroup } from "@screens/NewGroup";
import { Players } from "@screens/Players";

import theme from "src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold})
  
const containerStyle ={
  flex:1,
  backgroundColor: theme.COLORS.GRAY_600,
  paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 12,
}

  return (
      <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <View style={containerStyle}>
      {/* { fontsLoaded ? <Groups /> : <Loading />} */}
      {/* { fontsLoaded ? <NewGroup /> : <Loading />} */}
      { fontsLoaded ? <Players /> : <Loading />}
      </View>
    </ThemeProvider>
  );
}
