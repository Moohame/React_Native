// Importerer nødvendige komponenter fra React Native
import { Pressable, StyleSheet, Text, View } from "react-native";
// Importerer useState for å kunne lagre tilstand (state)
import { useState } from "react";
// Importerer liste fra artister.json
import artister from "../data/artister.json";


 
// Dette er skjermen som vises i første tab
export default function TabOneScreen() {

  const [ranking, setRanking] = useState([]);
  const handlePress = (name) => {
    if (!ranking.includes(name)) {
      setRanking(prev => [...prev, name]);
    }
  };
  
  return (
  <View style={styles.container}>

      <Text style={styles.title}>Kjente artister</Text>
      <Text style={styles.valgtArtist}>
        {ranking.length < 5 ? `Velg nr. ${ranking.length + 1}` : "Alt er rangert!"}
      </Text>

        {/* Felt 1 */}
    <Pressable 
      onPress={() => handlePress(artister[0].name)}
      disabled={ranking.includes(artister[0].name)}
      style={{ opacity: ranking.includes(artister[0].name) ? 0.6 : 1 }}
    >
      <View style={[styles.felt, { backgroundColor: ranking.includes(artister[0].name) ? '#5bb0ff' : "#ddd" }]}> 
        <Text style={styles.feltTekst}>{artister[0].name}</Text>
        <Text style={styles.artistNr}>{ranking.indexOf(artister[0].name) + 1 > 0 ? `(Nr. ${ranking.indexOf(artister[0].name) + 1}) ` : ''}</Text>  
      </View>
    </Pressable>

        {/* Felt 2 */}
    <Pressable 
      onPress={() => handlePress(artister[1].name)}
      disabled={ranking.includes(artister[1].name)}
      style={{ opacity: ranking.includes(artister[1].name) ? 0.6 : 1 }}
    >
      <View style={[styles.felt, { backgroundColor: ranking.includes(artister[1].name) ? '#5bb0ff' : "#ddd" }]}> 
        <Text style={styles.feltTekst}>{artister[1].name}</Text>
        <Text style={styles.artistNr}>{ranking.indexOf(artister[1].name) + 1 > 0 ? `(Nr. ${ranking.indexOf(artister[1].name) + 1}) ` : ''}</Text>  
      </View>
    </Pressable>

         {/* Felt 3 */}
    <Pressable 
      onPress={() => handlePress(artister[2].name)}
      disabled={ranking.includes(artister[2].name)}
      style={{ opacity: ranking.includes(artister[2].name) ? 0.6 : 1 }}
    >
      <View style={[styles.felt, { backgroundColor: ranking.includes(artister[2].name) ? '#5bb0ff' : "#ddd" }]}> 
        <Text style={styles.feltTekst}>{artister[2].name}</Text>
        <Text style={styles.artistNr}>{ranking.indexOf(artister[2].name) + 1 > 0 ? `(Nr. ${ranking.indexOf(artister[2].name) + 1}) ` : ''}</Text>  
      </View>
    </Pressable>

        {/* Felt 4 */}
    <Pressable 
      onPress={() => handlePress(artister[3].name)}
      disabled={ranking.includes(artister[3].name)}
      style={{ opacity: ranking.includes(artister[3].name) ? 0.6 : 1 }}
    >
      <View style={[styles.felt, { backgroundColor: ranking.includes(artister[3].name) ? '#5bb0ff' : "#ddd" }]}> 
        <Text style={styles.feltTekst}>{artister[3].name}</Text>
        <Text style={styles.artistNr}>{ranking.indexOf(artister[3].name) + 1 > 0 ? `(Nr. ${ranking.indexOf(artister[3].name) + 1}) ` : ''}</Text>  
      </View>
    </Pressable>

        {/* Felt 5 */}
    <Pressable 
      onPress={() => handlePress(artister[4].name)}
      disabled={ranking.includes(artister[4].name)}
      style={{ opacity: ranking.includes(artister[4].name) ? 0.6 : 1 }}
    >
      <View style={[styles.felt, { backgroundColor: ranking.includes(artister[4].name) ? '#5bb0ff' : "#ddd" }]}> 
        <Text style={styles.feltTekst}>{artister[4].name}</Text>
        <Text style={styles.artistNr}>{ranking.indexOf(artister[4].name) + 1 > 0 ? `(Nr. ${ranking.indexOf(artister[4].name) + 1}) ` : ''}</Text>  
      </View>
    </Pressable>
   

      {/* Start på nytt */}
      <Pressable
        onPress={() => setRanking([])}
        disabled={ranking.length === 0}
        style={{ opacity: ranking.length === 0 ? 0.4 : 1 }}
      >
        <View style={[styles.felt, { marginTop: 20, alignItems: "center" }]}>
          <Text style={styles.feltTekst}>Start på nytt</Text>
        </View>
      </Pressable>
    </View>
  );
}
/* ================= STYLING ================= */
const styles = StyleSheet.create({
// Container for hele skjermen
  container: {
    flex: 1, // Tar hele høyden på skjermen
    justifyContent: "center",
    padding: 20,
  },
// Overskrift øverst
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: "center",
},
valgtArtist: {
    fontSize: 17,
    marginBottom: 20,
    fontStyle: 'italic',
    textAlign: "center",
},
// Standard stil for feltene
  felt: {
    padding:  20,
    marginBottom: 10,
    backgroundColor: "#ddd",
    fontSize: 18,
    borderRadius: 8,
},
  artistNr: {
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: "right",
},
});