import { NavigationProp, useNavigation } from "@react-navigation/native";
import Header from "components/header";
import { HomeStackParamsT } from "models/navigation";
import React from "react";
import { Button, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Start = () => {
  const navigation: NavigationProp<HomeStackParamsT> = useNavigation();

  const goToDetails = () => navigation.navigate("Details");

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Header title={"Start"} />
      <View style={{ marginHorizontal: 60, marginTop: 48 }}>
        <Button title="Go to Details Screen" onPress={goToDetails} />
      </View>
    </SafeAreaView>
  );
};

export default Start;
