import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "utils/colors";

const Details = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <Text style={styles.text}>Details Screen</Text>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  bg: { backgroundColor: "#fff", flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 32, color: colors.darkGray },
});
