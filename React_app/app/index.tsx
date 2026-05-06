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
  const [feltTallA, setFeltTallA] = useState(0);
  const [feltTallB, setFeltTallB] = useState(0);
  const [feltTallC, setFeltTallC] = useState(0);
  const [feltTallD, setFeltTallD] = useState(0);
  const [feltTallE, setFeltTallE] = useState(0);
  const [feltTallF, setFeltTallF] = useState(0);

  const FeltTallA = 0;
  const FeltTallB = 0;
  const FeltTallC = 0;
  const FeltTallD = 0;
  const FeltTallE = 0;
  const FeltTallF = 0;

  
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
    
    onPress={() => {
      setValgtFelt("A");
      setFeltTallA(feltTallA + 1);
      console.log("Knapp 1 trykka");
    }}
  >
    <Text style={styles.feltTekst}>1</Text>
    <Text style={styles.feltTall}>Er valgt {feltTallA} ganger</Text>
  </Pressable>
  {/* ================= FELT B ================= */}
  <Pressable
    style={[
      styles.felt,
      valgtFelt === "B" && styles.aktivtFelt,
    ]}
    onPress={() => {
      setValgtFelt("B");
      setFeltTallB(feltTallB + 1);
      console.log("Knapp 2 trykka");
    }}
  >
    <Text style={styles.feltTekst}>2</Text>
    <Text style={styles.feltTall}>Er valgt {feltTallB} ganger</Text>
  </Pressable>

  {/* ================= FELT C ================= */}
  <Pressable
    style={[
      styles.felt,
      valgtFelt === "C" && styles.aktivtFelt,
    ]}
    onPress={() => {
      setValgtFelt("C");
      setFeltTallC(feltTallC + 1);
      console.log("Knapp 3 trykka");
    }}
  >
    <Text style={styles.feltTekst}>3</Text>
    <Text style={styles.feltTall}>Er valgt {feltTallC} ganger</Text>
  </Pressable>

  {/* ================= FELT D ================= */}
  <Pressable
    style={[
      styles.felt,
      valgtFelt === "D" && styles.aktivtFelt,
    ]}
    onPress={() => {
      setValgtFelt("D");
      setFeltTallD(feltTallD + 1);
      console.log("Knapp 4 trykka");
    }}
  >
    <Text style={styles.feltTekst}>4</Text>
    <Text style={styles.feltTall}>Er valgt {feltTallD} ganger</Text>
  </Pressable>

  {/* ================= FELT E ================= */}
  <Pressable
    style={[
      styles.felt,
      valgtFelt === "E" && styles.aktivtFelt,
    ]}
    onPress={() => {
      setValgtFelt("E");
      setFeltTallE(feltTallE + 1);
      console.log("Knapp 5 trykka");
    }}
  >
    <Text style={styles.feltTekst}>5</Text>
    <Text style={styles.feltTall}>Er valgt {feltTallE} ganger</Text>
  </Pressable>

  {/* ================= FELT F ================= */}
  <Pressable
    style={[
      styles.felt,
      valgtFelt === "F" && styles.aktivtFelt,
    ]}
    onPress={() => {
      setValgtFelt("F");
      setFeltTallF(feltTallF + 1);
      console.log("Knapp 6 trykka");
    }}
  >
    <Text style={styles.feltTekst}>6</Text>
    <Text style={styles.feltTall}>Er valgt {feltTallF} ganger</Text>
  </Pressable>

  {/* ================= Nullstill ================= */}
  <Pressable
  onPress={() => {
    setFeltTallA(0);
    setFeltTallB(0);
    setFeltTallC(0);
    setFeltTallD(0);
    setFeltTallE(0);
    setFeltTallF(0);
  }}  
  >
    <View style={styles.nullstill}>
      <Text style={styles.nullstillTekst}>Nullstill</Text>
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
  nullstill: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#ed7a7a",
    borderRadius: 8,
    alignItems: "center",
},

nullstillTekst: {
    fontSize: 20,
    textAlign: "center",
    color: "#771919",
  }
});