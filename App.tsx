import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import CustomDrawer from "./components/drawer/CustomDrawer";
import Contact from "./screens/Contact";
import Details from "./screens/Details";
import Favourites from "./screens/Favourites";
import Start from "./screens/Start";
import YourCart from "./screens/YourCart";
import YourOrders from "./screens/YourOrders";
import { colors } from "./utils/colors";
import FeatherIcon from "@expo/vector-icons/Feather";
import DrawerScreenWrapper from "./components/drawer/DrawerScreenWrapper";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator<HomeStackParamsT>();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Start" component={Start} />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
};

function TabScreens() {
  return (
    <DrawerScreenWrapper>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "HomeStack") {
              iconName = "home";
            } else if (route.name === "Contact") {
              iconName = "user";
            }
            return <FeatherIcon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="HomeStack" component={HomeStackScreen} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </DrawerScreenWrapper>
  );
}

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#1c172b" }}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Start"
          screenOptions={{
            drawerStyle: drawerStyles.container,
            drawerType: "back",
            drawerActiveTintColor: colors.tint,
            drawerInactiveTintColor: "white",
            overlayColor: "transparent",
            sceneContainerStyle: drawerStyles.scene,
            headerShown: false,
            swipeEdgeWidth: 70,
          }}
          drawerContent={(props) => <CustomDrawer {...props} />}
        >
          <Drawer.Screen name="Start" component={TabScreens} />
          <Drawer.Screen name="Your Cart" component={YourCart} />
          <Drawer.Screen name="Favourites" component={Favourites} />
          <Drawer.Screen name="Your Orders" component={YourOrders} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}

const drawerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    width: 150,
    zIndex: -1,
  },
  scene: {
    backgroundColor: "transparent",
  },
});

export type HomeStackParamsT = {
  Start: undefined;
  Details: undefined;
};
