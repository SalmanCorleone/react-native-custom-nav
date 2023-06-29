import DrawerScreenWrapper from "components/drawer/DrawerScreenWrapper";
import Header from "components/header";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

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
