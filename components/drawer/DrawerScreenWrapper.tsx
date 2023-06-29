import { useDrawerProgress } from "@react-navigation/drawer";
import React from "react";
import { StyleSheet } from "react-native";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";

const DrawerScreenWrapper = ({ children }) => {
  const drawerProgress: any = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 40]);
    const translateX = interpolate(drawerProgress.value, [0, 1], [0, 80]);
    const translateY = interpolate(drawerProgress.value, [0, 1], [0, 80]);
    const rotateZ = interpolate(drawerProgress.value, [0, 1], [0, -5]);
    return {
      transform: [{ translateX }, { translateY }, { rotateZ: `${rotateZ}deg` }],
      borderRadius,
    };
  });

  return <Animated.View style={[animatedStyle, styles.container]}>{children}</Animated.View>;
};

export default DrawerScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
});
