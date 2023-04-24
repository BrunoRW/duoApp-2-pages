import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Linking } from 'react-native';

export default function Home() {

  return (
    <View id="content" style={styles.container}>
      <View style={styles.topApp}>
          <View style={styles.imgOut}>
            <Image style={styles.img} source={require("../assets/duolingo.png")}/>
          </View>
          <View style={styles.txtOut}>
            <Text style={styles.txt}>Learn a language for free.</Text>
            <Text style={styles.txt}>Forever.</Text>
          </View>
        </View>

        <View style={styles.btnOut}>
          <TouchableOpacity style={styles.btn} onPress={()=>{
            Linking.openURL("./pages/start")
          }}>
            <Text style={styles.btnText}>GET STARTED</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bt2}>
            <Text style={styles.btnText2}>I ALREADY HAVE AN ACCOUNT</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-between",
  },
  topApp: {
    marginTop: "150px"
  },
  imgOut: {
    width: "100%",
    textAlign: "center",
  },
  img: {
    width: "150px",
    height: "150px",
    margin: "auto",
  },
  btnOut: {
    margin: "0 auto 20px",
    width: "100%",
    maxWidth: "calc(100% - 40px)",
    textAlign: "center",
  }, 
  btn: {
    padding: "12px 25px",
    backgroundColor: "#639800",
    width: "100%",
    borderRadius: "15px",
    border: "none",
    borderBottom: "4px solid #447a00",
    margin: "5px 0",
  },
  bt2: {
    padding: "12px 25px",
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: "15px",
    border: "2px solid #acacac",
    borderBottom: "4px solid #acacac!important",
    margin: "5px 0",
  },
  btnText: {
    color: "white",
    fontSize: "13px",
    fontWeight: "bolder",
  },
  btnText2: {
    color: "#8bca00",
    fontSize: "13px",
    fontWeight: "bolder",
  },
  txtOut: {
    margin: "10px 0 100px",
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  txt: {
    color: "#bbb",
    fontSize: "17px",
    fontWeight: "bolder"
  }
})
