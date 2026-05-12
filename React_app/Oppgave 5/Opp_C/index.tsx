// Importerer nødvendige komponenter fra React Native
import { Pressable, StyleSheet, Text, View, FlatList } from "react-native";
// Importerer useState for å kunne lagre tilstand (state)
import { useState } from "react";
// Importerer liste fra artister.json
import artister from "../data/artister.json";
 
// Dette er skjermen som vises i første tab
export default function TabOneScreen() {


  return (
    // Ytterste container (som en <div> på web)
<View style={styles.container}>
      
      {/* Overskrift */}
  <Text style={styles.title}>Kjente artister</Text>

      {/* Felt 1 */}
  <View style={styles.felt}>
    <Text style={styles.feltTekst}>{artister[0].name}</Text>
  </View>
  
      {/* Felt 2 */}
  <View style={styles.felt}>
    <Text style={styles.feltTekst}>{artister[1].name}</Text>
  </View>

      {/* Felt 3 */}
  <View style={styles.felt}>
    <Text style={styles.feltTekst}>{artister[2].name}</Text>
  </View>

      {/* Felt 4 */}
  <View style={styles.felt}>
    <Text style={styles.feltTekst}>{artister[3].name}</Text>
  </View>

      {/* Felt 5 */}
  <View style={styles.felt}>
    <Text style={styles.feltTekst}>{artister[5].name}</Text>
  </View>
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
// Standard stil for feltene
  felt: {
    padding:  20,
    backgroundColor: "#ddd", // Grå bakgrunn
    marginBottom: 10,
    fontSize: 18,
    borderRadius: 8,
},
  feltTekst: {

  },
// Ekstra stil som legges til når feltet er valgt
  aktivtFelt: {
    backgroundColor: "#098cff", // Grønn bakgrunn
},
});