import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, useDrawerProgress } from "@react-navigation/drawer";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const drawerProgress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(drawerProgress.value, [0, 1], [0, 50]);
    return {
      transform: [{ translateY }],
    };
  });

  return (
    <Animated.View style={[animatedStyle, styles.container]}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </Animated.View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    flex: 1,
  },
});
