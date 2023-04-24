import {View, StyleSheet, Text} from "react-native"

export default function Dash(){
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <View style={styles.photo}></View>
          <Text style={styles.pic}>Welcome, User!</Text>
          <Text style={styles.points}>100 pts</Text>
        </View>
        <View style={styles.sections}>
          <Text style={styles.hrf}>Units</Text>
          <Text style={styles.hrf}>My Experience</Text>
          <Text style={styles.hrf}>Settings</Text>
        </View>
        <View style={styles.unitOut}>
          <Text style={styles.unit}>Unit 1</Text>
          <Text style={styles.phr}>Use basic phrases, greet people</Text>
        </View>
      </View>
      <View style={styles.lvlOut}>
        <View style={styles.lvl}/>
        <View style={styles.lvl}/>
        <View style={styles.lvl}/>
        <View style={styles.lvl}/>
        <View style={styles.lvl}/>
        <View style={styles.lvl}/>
        <View style={styles.lvl}/>
        <View style={styles.lvl}/>
        <View style={styles.lvl}/>
        <View style={styles.lvl}/>
      </View>
      <View style={styles.footer}>
        <View style={styles.btBot}/>
        <View style={styles.btBot}/>
        <View style={styles.btBot}/>
        <View style={styles.btBot}/>
        <View style={styles.btBot}/>
        <View style={styles.btBot}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   width: "100%",
   height: "100%",
  },
  header: {
    padding: 10,
    backgroundColor: "#57cc01",
    // position: "absolute",
    // width: "100%"
  },
  profile: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    borderBottom: "1px solid #00000010"
  },
  photo: {
    width: "30px", 
    height: "30px",
    borderRadius: 40,
    backgroundColor: "#eeeeee80",
    border: "2px solid #eeeeee90"

  },
  pic: {
    color: "#ffffffc0",
    fontSize: 14,
    fontWeight: "bolder",
    letterSpacing: 0.8
  },
  points: {
    color: "white",
    marginLeft: "auto",
    color: "#ffffff90"
  },
  sections: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    margin: "10px 0 5px 0",
    paddingBottom: 10,
    borderBottom: "1px solid #00000010"

  },
  hrf: {
    color: "#ffffffc0",
    fontWeight: "bolder"
  },
  unitOut: {
    padding: "10px 20px",
  },
  unit: {
    color: "white",
    fontWeight: "bolder",
    fontSize: 18
  },
  phr: {
    color: "white",

  },
  lvlOut: {
    padding: 10,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignIntems: "center"
  },
  lvl: {
    width: "calc(100% / 2 - 30px)",
    height: 80,
    backgroundColor: "#eee",
    margin: 10,
    borderRadius: 10,
  },
  footer: {
    position: "fixed",
    zIndex: 100,
    bottom: "0",
    width: "100%",
    padding: "10px",
    borderTop: "2px solid #eee",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignIntems: "center",
    backgroundColor: "white",
  },
  btBot: {
    padding: "12px 15px",
    border: "2px solid #c8e1ff50",
    borderRadius: "5px",
    backgroundColor: "#c8e1ff40"
  }
})