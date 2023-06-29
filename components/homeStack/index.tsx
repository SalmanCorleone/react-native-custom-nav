import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "screens/Details";
import Start from "screens/Start";
import { HomeStackParamsT } from "models/navigation";

const HomeStackNav = createNativeStackNavigator<HomeStackParamsT>();

const HomeStack = () => {
  return (
    <HomeStackNav.Navigator screenOptions={{ headerShown: false }}>
      <HomeStackNav.Screen name="Start" component={Start} />
      <HomeStackNav.Screen name="Details" component={Details} />
    </HomeStackNav.Navigator>
  );
};

export default HomeStack;
