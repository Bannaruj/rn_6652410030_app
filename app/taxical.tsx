import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Taxical() {
  const [distance, setDistance] = useState("");
  const [traffic, setTraffic] = useState("");
  const [total, setTotal] = useState(0);
  const [distanceFare, setDistanceFare] = useState(0);
  const [trafficFare, setTrafficFare] = useState(0);

  const calculateTaxiFare = () => {
    let d = parseFloat(distance) || 0;
    let t = parseFloat(traffic) || 0;

    let fare = 0;

    // ค่าเริ่มต้น
    if (d > 0) fare += 35;

    let remain = d - 1; // หลัง 1 กม.แรก

    const calc = (km: number, rate: number) => {
      let use = Math.min(remain, km);
      if (use > 0) {
        fare += use * rate;
        remain -= use;
      }
    };

    if (remain > 0) calc(9, 6.5);
    if (remain > 0) calc(10, 7);
    if (remain > 0) calc(20, 8);
    if (remain > 0) calc(20, 8.5);
    if (remain > 0) calc(20, 9);
    if (remain > 0) fare += remain * 10.5;

    const distFare = fare;

    const trafficCost = t * 3;
    fare += trafficCost;

    setDistanceFare(distFare);
    setTrafficFare(trafficCost);
    setTotal(fare);
  };

  const clearAll = () => {
    setDistance("");
    setTraffic("");
    setTotal(0);
    setDistanceFare(0);
    setTrafficFare(0);
  };

  return (
    <View style={[styles.container, { gap: 20 }]}>
      <Image
        source={require("../assets/images/taxicartoon.png")}
        style={styles.image}
        resizeMode="contain"
      ></Image>
      <Text style={styles.titletxt}>คำนวณค่าแท็กซี่</Text>
      <View style={[styles.inputcontainer, { gap: 12 }]}>
        <Text style={[styles.txt, { color: "#5f5f5f" }]}>
          ระยะทาง (กิโลเมตร)
        </Text>
        <TextInput
          style={styles.textinput}
          placeholder="0.0"
          keyboardType="numeric"
          value={distance}
          onChangeText={setDistance}
        ></TextInput>
        <Text style={[styles.txt, { color: "#5f5f5f" }]}>เวลารถติด (นาที)</Text>
        <TextInput
          style={styles.textinput}
          placeholder="0"
          keyboardType="numeric"
          value={traffic}
          onChangeText={setTraffic}
        ></TextInput>
        <View
          style={{ flexDirection: "row", gap: 5, justifyContent: "center" }}
        >
          <TouchableOpacity
            style={styles.calbutton}
            onPress={calculateTaxiFare}
          >
            <Text style={[styles.txt, { color: "white" }]}>คำนวนราคา</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clearbutton} onPress={clearAll}>
            <Text style={[styles.txt, { color: "red" }]}>ล้างค่า</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.displaycontainer}>
        <Text style={[styles.txt, { color: "#a19f9f" }]}>
          ค่าโดยสารโดยประมาณ
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={[
              styles.txt,
              { fontSize: 40, color: "#ffee00", marginBottom: 16 },
            ]}
          >
            {total.toFixed(2)}
          </Text>
          <Text style={[styles.txt, { color: "#ffee00" }]}>บาท</Text>
        </View>
        <View style={styles.divider} />
        <View>
          <View style={styles.priceRow}>
            <Text style={[styles.txt, { color: "#a19f9f" }]}>
              ค่าโดยสารตามระยะทาง
            </Text>
            <Text style={[styles.txt, { color: "#fff" }]}>
              {distanceFare.toFixed(2)}฿
            </Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={[styles.txt, { color: "#a19f9f" }]}>
              ค่ารถติด(นาที)
            </Text>
            <Text style={[styles.txt, { color: "#fff" }]}>
              {trafficFare.toFixed(2)}฿
            </Text>
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.footertxt}>ID : 6652410030 </Text>
        <Text style={styles.footertxt}>NAME : Bannaruj Limsomwong </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e2e1dd9f",
  },

  textinput: {
    backgroundColor: "#f8f5f5",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    padding: 13,
    borderRadius: 8,
  },

  image: {
    marginTop: 20,
    width: 150,
    height: 150,
  },

  titletxt: {
    fontSize: 30,
    fontFamily: "Kanit_700Bold",
    color: "#fdc805",
  },

  inputcontainer: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 12,
    padding: 14,
  },

  txt: {
    fontFamily: "Kanit_700Bold",
  },

  calbutton: {
    backgroundColor: "#27a37a",
    flex: 1,
    alignItems: "center",
    borderRadius: 6,
    padding: 13,
  },

  clearbutton: {
    backgroundColor: "#ffffff",
    width: "30%",
    alignItems: "center",
    borderRadius: 6,
    padding: 13,
    borderColor: "red",
    borderWidth: 1,
  },

  displaycontainer: {
    backgroundColor: "#232125",
    width: "90%",
    borderRadius: 12,
    padding: 14,
    alignItems: "center",
  },

  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#a19f9f",
    marginVertical: 10,
    opacity: 0.4,
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },

  footertxt: {
    color: "#5f5f5f",
    fontWeight: "bold",
    fontSize: 15,
  },
});
