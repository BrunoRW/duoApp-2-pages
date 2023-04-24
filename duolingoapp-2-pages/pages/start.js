import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Linking } from 'react-native';

export default function Home() {

  return (
    <View id="content" style={styles.container}>
      <View style={styles.topApp}>
        <View style={styles.imgOut}>
          <Image style={styles.img} source={require("../assets/duolingo.png")}/>
        </View>
      </View>
      
      <View style={styles.inpOut}>
        <View style={styles.inpIn}>
          <Text style={styles.txt}>Email</Text>
          <TextInput style={styles.inp} placeholder="Email"/>
        </View>

        <View style={styles.inpIn}>
          <Text style={styles.txt}>Password</Text>
          <TextInput style={styles.inp} secureTextEntry={true} placeholder="Password"/>
        </View>
      </View>
    
      <View style={styles.btnOut}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>LOGIN NOW</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bt2}>
          <Text style={styles.btnText2}>BACK</Text>
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
    marginTop: "50px"
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
    margin: "5px 0"
  },
  btnText: {
    color: "white",
    fontSize: "13px",
    fontWeight: "bolder",
  },
  btnText2: {
    color: "gray",
    fontSize: "13px",
    fontWeight: "bolder",
  },
  inpOut: {
    margin: "auto",
    padding: "5px",
    maxWidth: "300px",
    width: "calc(100% - 10px)",
  },
  txt: {
    color: "gray",
    fontWeight: "bolder",
    marginTop: "10px",
    marginLeft: "5px"
  },
  inp: {
    padding: "13px 10px",
    margin: "10px 0",
    width: "100%",
    border: "2px solid #eee",
    borderRadius: "15px",
    color: "#ccc"
  }
})
