import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HomeStackParamsT } from "models/navigation";
import Header from "components/header";

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
