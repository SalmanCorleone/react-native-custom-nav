import FeatherIcon from "@expo/vector-icons/Feather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerScreenWrapper from "components/drawer/DrawerScreenWrapper";
import HomeStack from "components/homeStack";
// import { TabNavParamsT } from "../../models/navigation";
import { TabNavParamsT } from "models/navigation";
import Contact from "screens/Contact";

const Tab = createBottomTabNavigator<TabNavParamsT>();

const BottomTab = () => {
  return (
    <DrawerScreenWrapper>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <FeatherIcon name={iconMap[route.name]} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </DrawerScreenWrapper>
  );
};

export default BottomTab;

const iconMap: { [key: string]: "home" | "user" } = {
  HomeStack: "home",
  Contact: "user",
};
