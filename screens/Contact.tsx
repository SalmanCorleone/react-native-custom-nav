import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const Contact = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Header title={"Contact"} />
    </SafeAreaView>
  );
};

export default Contact;
