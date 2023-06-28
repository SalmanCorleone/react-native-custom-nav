import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import DrawerScreenWrapper from "../components/drawer/DrawerScreenWrapper";

const YourOrders = () => {
  return (
    <DrawerScreenWrapper>
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <Header title={"Your Orders"} />
      </SafeAreaView>
    </DrawerScreenWrapper>
  );
};

export default YourOrders;
