# Job Chaser v.2

## Frågor:

1. **Vad är State i React?**
   State representerar data som är specifik för en komponent och kan förändras över tiden, vanligtvis som ett resultat av användarens interaktioner eller andra händelser.

2. **Vad är skillnaden mellan props och State?**
   State är intern och kan ändras, medan props är externt tillhandahållen data som är oföränderlig. State hanterar interna tillstånd, medan props överför data neråt i komponent-hierarkin.

3. **Vad menas med en kontrollerad komponent i React?**
   En kontrollerad komponent i React är som att ha full koll på vad som händer i ett textfält. Istället för att textfältet självt bestämmer sitt innehåll, håller React på det åt dig. Om någon skriver något i textfältet, berättar React för dig vad som skrivs och sparar det i sitt minne. Så varje gång du tittar på textfältet, är det React som berättar för det vad det ska visa, vilket gör allting väldigt ordnat och kontrollerat.

4. **Vad är en callback handler?**
   En callback handler är en funktion som du ger till en annan funktion som argument. Den funktionen som får den här callback handler-funktionen kan sedan använda den för att återkalla eller "callbacka" till dig när den är klar med sitt arbete eller när en viss händelse inträffar.

5. **Vad menas med ”liftning State up”?**
   Att "lyfta state up" i React innebär att flytta state från en komponent till dess förälderkomponent så att flera underordnade komponenter kan dela samma state via props. Detta gör det möjligt att hantera state på ett mer enhetligt sätt och undvika att duplicera state-logik i flera komponenter.

6. **Vad är syftet med useEffect-hook i React?**
   Syftet med useEffect-hooken i React är att låta komponenter utföra särskilda åtgärder i React-komponentens livscykel. Det kan inkludera att hantera sidans rendering, prestandaoptimeringar, datahämtning, prenumerationer på externa händelser och mycket mer. Det ger en flexibel metod för att skriva kod som reagerar på förändringar i komponentens tillstånd eller andra händelser under dess livstid.

7. **Vad är syftet kring den s.k dependency-arrayen i useEffect?**
   Dependency arrayen i useEffect i React används för att specificera vilka värden eller variabler som effektfunktionen ska vara beroende av. Det styr när effektfunktionen ska köras genom att reagera på förändringar i dessa värden. Det är ett verktyg för att kontrollera exakt när effektfunktionen ska köras och för att undvika onödiga körningar.
