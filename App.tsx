import "react-native-gesture-handler";
import { DrawerNavigationOptions, createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "components/bottomTab";
import CustomDrawer from "components/drawer/CustomDrawer";
import { StyleSheet, View } from "react-native";
import Favourites from "screens/Favourites";
import YourCart from "screens/YourCart";
import YourOrders from "screens/YourOrders";
import { colors } from "utils/colors";
import { DrawerNavParamsT } from "./models/navigation";

const Drawer = createDrawerNavigator<DrawerNavParamsT>();

export default function App() {
  return (
    <View style={styles.appBG}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Start" screenOptions={drawerNavScreenOptions} drawerContent={(props) => <CustomDrawer {...props} />}>
          <Drawer.Screen name="Start" component={BottomTab} />
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

const styles = StyleSheet.create({
  appBG: { flex: 1, backgroundColor: colors.primary },
});

const drawerNavScreenOptions: DrawerNavigationOptions = {
  drawerStyle: drawerStyles.container,
  drawerType: "back",
  drawerActiveTintColor: colors.tint,
  drawerInactiveTintColor: "white",
  overlayColor: "transparent",
  sceneContainerStyle: drawerStyles.scene,
  headerShown: false,
  swipeEdgeWidth: 70,
};
