import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React, { useState } from "react";

import { COLORS, NFTData } from "../constants";
import { NFTCards, HomeHeader, FocusedStatusBar } from "../components";
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}></View>
        <FlatList
          data={NFTData}
          renderItem={({ item }) => <NFTCards data={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HomeHeader />}
        />
      </View>
      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <View
          style={{
            height: 300,
            backgroundColor: COLORS.primary,
          }}
        />
        <View
          style={{
            flex : 1,
            backgroundColor: COLORS.white,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
