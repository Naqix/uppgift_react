# Product Manager - CRUD app

## Namn
[Joel Broberg]

## Beskrivning
En React app som hämtar produkter från Fake Store API och låter användaren utföra CRUD (Create, Read, Update, Delete). Appen använder React Router DOM för navigering mellan olika sidor och Axios för API anrop.

## API
[Fake Store API](https://fakestoreapi.com)

## Starta projektet
1. Klona repot
2. Kör "npm install"
3. Kör "npm run dev"
4. Öppna "http://localhost:5173" i webbläsaren

## Implementerade features
- Hämtar produkter från Fake Store API med Axios
- Visar alla produkter i ett responsivt grid
- Detaljsida för varje produkt med dynamisk route
- Formulär för att skapa nya produkter
- Redigera befintliga produkter
- Ta bort produkter med bekräftelse
- Loading och error states
- Navigering med React Router DOM
- Återanvändbart formulärkomponent (DRY)
- Grundläggande validering av formulärfält

## Kända begränsningar
- Fake Store API sparar inte ändringar permanent. CRUD operationer uppdateras lokalt i state men försvinner vid omladdning av sidan.
