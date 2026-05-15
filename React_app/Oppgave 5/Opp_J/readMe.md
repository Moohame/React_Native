Siden jeg bruker FlatList skal jeg isteden si hva forsjellen mellom FlatList og map() er

FlatList er en "built-in component" i React Native som er optimisert for å håndtere lange lister av data
En ting FlatList gjør for å effektivisere er "lazy loading", som er når den bare laster in items som er synlige

map() funksjonen er en JavaScript array metode som ofte er brukt for å laste lister i react og react native. 
map() er enkel å bruke, god for småe lister, men har ingen bygd in optimalisering som FlatList har.

Konklusjon:
    FlatList er bra å bruke hvis du må optimalisere appen din og har en lang liste å laste, men map() er en enkel verktøy for mindre lister.