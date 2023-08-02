import { Stack } from "expo-router";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack initialRouteName="home">
      <Stack.Screen name="home" />
    </Stack>
  )
};

export default Layout;

// import React, { useState, useEffect } from "react";
// import { View, Text } from "react-native";
// import { useFonts } from "expo-font";
// import { AppLoading } from "expo";
// import { Stack } from "expo-router";

// const fetchFonts = async () => {
//   await Font.loadAsync({
//     DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
//     DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
//     DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
//   });
// };

// const Layout = () => {
//   const [dataLoaded, setDataLoaded] = useState(false);

//   const [fontsLoaded] = useFonts({
//     DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
//     DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
//     DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
//   });

//   useEffect(() => {
//     const loadData = async () => {
//       await fetchFonts();
//       setDataLoaded(true);
//     };

//     loadData();
//   }, []);

//   if (!dataLoaded || !fontsLoaded) {
//     return <AppLoading />;
//   }

//   return (
//     <Stack initialRouteName="home">
//       <Stack.Screen name="home" />
//     </Stack>
//   );
// };










