// Importerer nødvendige komponenter fra React Native
import { Pressable, StyleSheet, FlatList, Text, View } from "react-native";
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

// Dette er for å sortere artister fra høyest til lavest i rangering
  const sorterteArtister = [...artister].sort((a, b) => { 
  const rankA = ranking.indexOf(a.name);
  const rankB = ranking.indexOf(b.name);
  if (rankA === -1) return 1;  // For at de som ikke er rangert skal gå til bunn
  if (rankB === -1) return -1;
  return rankA - rankB;        // sorterer rangeringens rekkefølge
});

  return (
  <View style={styles.container}>

      <Text style={styles.title}>Kjente artister</Text>
      <Text style={styles.valgtArtist}>
        {ranking.length < 6 ? `Velg nr. ${ranking.length + 1}` : "Alt er rangert :)"}
      </Text>
  

<FlatList
  data={sorterteArtister}
  keyExtractor={(item) => item.name}
  renderItem={({ item }) => (
    <Pressable
      onPress={() => handlePress(item.name)}
      disabled={ranking.includes(item.name)}
      style={{ opacity: ranking.includes(item.name) ? 0.6 : 1}}
    >
      <View style={[styles.felt, {backgroundColor: ranking.includes(item.name) ? '#5bb0ff' : '#ddd' }]}>
        <Text style={styles.feltTekst}>
          {item.name}
        </Text>
        <Text style={styles.artistNr}>{ranking.indexOf(item.name) + 1 > 0 ? `Nr. ${ranking.indexOf(item.name) + 1}` : ''}</Text>
      </View>
    </Pressable>
  )}
/>
   

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