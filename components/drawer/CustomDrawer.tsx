import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, useDrawerProgress } from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const drawerProgress: any = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(drawerProgress.value, [0, 1], [0, 50]);
    return {
      transform: [{ translateY }],
    };
  });

  return (
    <Animated.View style={[animatedStyle, styles.container]}>
      <DrawerContentScrollView {...props}>
        {/* 1. Draewr items */}
        <DrawerItemList {...props} />

        {/* 2. Divider */}
        <View style={styles.border} />

        {/* 3. Sign out */}
        <TouchableOpacity>
          <Text style={styles.text}>Sign Out</Text>
        </TouchableOpacity>
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
  border: {
    borderTopWidth: 1,
    borderColor: "lightgray",
    marginVertical: 24,
    marginHorizontal: 16,
    opacity: 0.3,
  },
  text: {
    color: "white",
    fontSize: 14,
    marginHorizontal: 18,
    fontWeight: "600",
  },
});
