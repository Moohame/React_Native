// Importerer nødvendige komponenter fra React Native
import { Pressable, StyleSheet, Text, View } from "react-native";
// Importerer useState for å kunne lagre tilstand (state)
import { useState } from "react";
// Dette er skjermen som vises i første tab
export default function TabOneScreen() {

  // STATE:
  // valgtFelt lagrer hvilket felt som er valgt
  // setValgtFelt brukes for å endre valgtFelt
  // null betyr at ingenting er valgt ennå
  const [valgtFelt, setValgtFelt] = useState<"A" | "B" | "C" | "D" | "E" | "F" | null>(null);
  
  return (
    // Ytterste container (som en <div> på web)
    <View style={styles.container}>
      
      {/* Overskrift */}
    <Text style={styles.title}>Velg en karakter</Text>
    
    {/* ================= FELT A ================= */}
    <Pressable
      // style kan være en liste (array)
      // React Native slår stilene sammen
      style={[
      styles.felt, // alltid med
      valgtFelt === "A" && styles.aktivtFelt, // bare hvis A er valgt
    ]}
    // Når brukeren trykker:
    // oppdaterer vi state
    onPress={() => setValgtFelt("A")}
  >
    <Text style={styles.feltTekst}>1</Text>
  </Pressable>
  {/* ================= FELT B ================= */}
  <Pressable
    style={[
      styles.felt,
      valgtFelt === "B" && styles.aktivtFelt,
    ]}
    onPress={() => setValgtFelt("B")}
  >
    <Text style={styles.feltTekst}>2</Text>
  </Pressable>

  {/* ================= FELT C ================= */}
  <Pressable
    style={[
      styles.felt,
      valgtFelt === "C" && styles.aktivtFelt,
    ]}
    onPress={() => setValgtFelt("C")}
  >
    <Text style={styles.feltTekst}>3</Text>
  </Pressable>

  {/* ================= FELT D ================= */}
  <Pressable
    style={[
      styles.felt,
      valgtFelt === "D" && styles.aktivtFelt,
    ]}
    onPress={() => setValgtFelt("D")}
  >
    <Text style={styles.feltTekst}>4</Text>
  </Pressable>

  {/* ================= FELT E ================= */}
  <Pressable
    style={[
      styles.felt,
      valgtFelt === "E" && styles.aktivtFelt,
    ]}
    onPress={() => setValgtFelt("E")}
  >
    <Text style={styles.feltTekst}>5</Text>
  </Pressable>

  {/* ================= FELT F ================= */}
  <Pressable
    style={[
      styles.felt,
      valgtFelt === "F" && styles.aktivtFelt,
    ]}
    onPress={() => setValgtFelt("F")}
  >
    <Text style={styles.feltTekst}>6</Text>
  </Pressable>

  {/* ================= RESULTAT ================= */}
  {/* Dette vises bare hvis valgtFelt ikke er null */}
  {valgtFelt && (
    <View style={styles.resultat}>
      <Text>Du har valgt: {valgtFelt}</Text>
    </View>
  )}
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
    padding: 20,
    backgroundColor: "#ddd", // Grå bakgrunn
    marginBottom: 10,
    borderRadius: 8,
},
// Ekstra stil som legges til når feltet er valgt
  aktivtFelt: {
    backgroundColor: "#098cff", // Grønn bakgrunn
},
// Tekst inni feltene
  feltTekst: {
    fontSize: 18,
    textAlign: "center",
    color: "#000",
},
// Boksen som vises etter at noe er valgt
  resultat: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#eee",
    borderRadius: 8,
    alignItems: "center",
},
});