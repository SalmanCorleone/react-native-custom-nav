import Header from "components/header";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Contact = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Header title={"Contact"} />
    </SafeAreaView>
  );
};

export default Contact;
