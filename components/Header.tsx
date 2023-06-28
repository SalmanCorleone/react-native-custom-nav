import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { DrawerActions, NavigationProp, useNavigation } from "@react-navigation/native";
import FeatherIcon from "@expo/vector-icons/Feather";
import { DrawerContentComponentProps, DrawerNavigationProp, DrawerScreenProps } from "@react-navigation/drawer";

type Props = {
  title?: String;
};

const Header = ({ title }: Props) => {
  const navigation = useNavigation();
  let openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer}>
        <FeatherIcon name="menu" size={32} color={"darkgrey"} />
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 32,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 32,
  },
  title: {
    fontSize: 32,
    color: "darkgrey",
  },
});
