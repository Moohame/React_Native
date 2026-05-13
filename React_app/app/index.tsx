// Importerer nødvendige komponenter fra React Native
import { Pressable, StyleSheet, Text, View } from "react-native";
// Importerer useState for å kunne lagre tilstand (state)
import { useState } from "react";
// Importerer liste fra artister.json
import artister from "../data/artister.json";


 
// Dette er skjermen som vises i første tab
export default function TabOneScreen() {

  const [valgtArtist,  setvalgtArtist] = useState(null);

  return (
    
    // Ytterste container (som en <div> på web)
  <View style={styles.container}>

        
        {/* Overskrift */}
      <Text style={styles.title}>Kjente artister</Text>
      <Text style={styles.valgtArtist}>Valgt artist: {valgtArtist ? valgtArtist : ""}</Text>

        {/* Felt 1 */}
    <Pressable 
      onPress={() => setvalgtArtist(artister[0].name)}
      disabled={valgtArtist !== null && valgtArtist !== artister[0].name}
      style={{ opacity: valgtArtist !== null && valgtArtist !== artister.name ? 0.6 : 1 }}
    >
      <View style={[styles.felt, { backgroundColor: valgtArtist === artister[0].name ? '#5bb0ff' : "#ddd" }]}> 
        <Text style={styles.feltTekst}>{artister[0].name}</Text>
      </View>
    </Pressable>
    
        {/* Felt 2 */}
    <Pressable 
      onPress={() => setvalgtArtist(artister[1].name)}
      disabled={valgtArtist !== null && valgtArtist !== artister[1].name}
      style={{ opacity: valgtArtist !== null && valgtArtist !== artister.name ? 0.6 : 1 }}
    >
      <View style={[styles.felt, { backgroundColor: valgtArtist === artister[1].name ? '#5bb0ff' : "#ddd" }]}> 
        <Text style={styles.feltTekst}>{artister[1].name}</Text>
      </View>
    </Pressable>

        {/* Felt 3 */}
    <Pressable 
      onPress={() => setvalgtArtist(artister[2].name)}
      disabled={valgtArtist !== null && valgtArtist !== artister[2].name}
      style={{ opacity: valgtArtist !== null && valgtArtist !== artister.name ? 0.6 : 1 }}
    >
      <View style={[styles.felt, { backgroundColor: valgtArtist === artister[2].name ? '#5bb0ff' : "#ddd" }]}> 
        <Text style={styles.feltTekst}>{artister[2].name}</Text>
      </View>
    </Pressable>

        {/* Felt 4 */}
    <Pressable 
      onPress={() => setvalgtArtist(artister[3].name)}
      disabled={valgtArtist !== null && valgtArtist !== artister[3].name}
      style={{ opacity: valgtArtist !== null && valgtArtist !== artister.name ? 0.6 : 1 }}
    >
      <View style={[styles.felt, { backgroundColor: valgtArtist === artister[3].name ? '#5bb0ff' : "#ddd" }]}> 
        <Text style={styles.feltTekst}>{artister[3].name}</Text>
      </View>
    </Pressable>

        {/* Felt 5 */}
    <Pressable 
      onPress={() => setvalgtArtist(artister[4].name)}
      disabled={valgtArtist !== null && valgtArtist !== artister[4].name}
      style={{ opacity: valgtArtist !== null && valgtArtist !== artister.name ? 0.6 : 1 }}
    >
      <View style={[styles.felt, { backgroundColor: valgtArtist === artister[4].name ? '#5bb0ff' : "#ddd" }]}> 
        <Text style={styles.feltTekst}>{artister[4].name}</Text>
      </View>
    </Pressable>

    {/* Endre valg */}
    <Pressable
      onPress={()=> setvalgtArtist(null)}
      disabled={valgtArtist == null}
      style={{ opacity: valgtArtist === null ? 0.4 : 1 }}
    >
      <View style={[styles.felt, { marginTop: 20, alignItems: "center", }]}> 
        <Text style={styles.feltTekst}>Endre valg</Text>
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
}
});