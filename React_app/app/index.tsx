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
  
  <Pressable>
    <View>
      <FlatList
        data={artister}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.felt}>{item.name}</Text>
          </View>
        )}
      />
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
// Standard stil for feltene
  felt: {
    padding:  20,
    backgroundColor: "#ddd", // Grå bakgrunn
    marginBottom: 10,
    fontSize: 18,
    borderRadius: 8,
},
// Ekstra stil som legges til når feltet er valgt
  aktivtFelt: {
    backgroundColor: "#098cff", // Grønn bakgrunn
},
});