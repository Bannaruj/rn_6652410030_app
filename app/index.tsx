import React from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

export default function Index() {
  const { width, height } = useWindowDimensions();

  const isTablet = width >= 768;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.displaycontainer,
          {
            height: height * 0.5,
            paddingVertical: height * 0.03,
          },
        ]}
      >
        <Image
          source={require("../assets/images/taxicartoon.png")}
          style={{
            width: width * 0.5,
            height: height * 0.2,
          }}
          resizeMode="contain"
        />

        <Text
          style={[
            styles.txt,
            {
              fontSize: width * 0.07,
              color: "#444242",
            },
          ]}
        >
          TAXI METER
        </Text>

        <Text
          style={[
            styles.txt,
            {
              fontSize: width * 0.035,
              color: "#8cd836",
            },
          ]}
        >
          THAI FARE CALCULATOR
        </Text>

        <ActivityIndicator size="large" style={{ marginTop: height * 0.05 }} />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={[
            styles.footertxt,
            { fontSize: isTablet ? width * 0.025 : width * 0.035 },
          ]}
        >
          ID : 6652410030
        </Text>

        <Text
          style={[
            styles.footertxt,
            { fontSize: isTablet ? width * 0.025 : width * 0.035 },
          ]}
        >
          NAME : Bannaruj Limsomwong
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#facd28",
    paddingHorizontal: 16,
  },

  displaycontainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3e45b",
    borderRadius: 12,
  },

  txt: {
    fontWeight: "bold",
    marginTop: 15,
    fontFamily: "Kanit_700Bold",
    textAlign: "center",
  },

  footertxt: {
    color: "#5f5f5f",
    fontWeight: "bold",
  },
});
