import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import DrawerScreenWrapper from "components/drawer/DrawerScreenWrapper";
import Header from "components/header";

const YourCart = () => {
  return (
    <DrawerScreenWrapper>
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <Header title={"Your Cart"} />
      </SafeAreaView>
    </DrawerScreenWrapper>
  );
};

export default YourCart;
