<!--Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)-->

# Milledoni
Bij milledoni komen mensen om een passend en persoonlijk cadeautje te vinden voor hun naasten. Dit kunnen ze doen door te chatten met een AI chatbot.
[Hier kan je mijn ontwerp van de Milledoni website zien!](https://anoukderooij24.github.io/the-startup-responsive-interactive-website/index.html)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

![1](https://github.com/user-attachments/assets/c39000db-c70d-4905-8523-60e138394f9b)
![2](https://github.com/user-attachments/assets/10b4bcf0-6045-4a99-844b-8bfbbcafd9c8)

Op de Milledoni website kunnen bezoekers door middel van een chat functie cadeautjes filteren. Doordat ze kunnen chatten met de AI chatbot kunnen ze heel specifiek de hobby's en andere persoonlijke voorkeuren doorgeven. Aan de hand daarvan krijgen ze een lijstje met cadeautjes die goed bij ze zouden kunnen passen.

### Interactie
https://github.com/user-attachments/assets/24d1b1ad-86c1-4b5e-be41-d2bbed11f08e

Ik heb de interactie zo duidelijk mogenlijk gemaakt doormiddel van feedforward en feedback te gebruiken. <br>
<br>
**Feedback** (zorgt ervoor dat een gebruiker weet dat een interactie is gelukt)<br>
* het scherm schuift omhoog als je op de eerste button klikt
* het scherm gaat weg als je op het kruisje klikt
* 
**Feedforward** (zorgt ervoor dat een gebruiker weet wat die kan verwachten)<br> 
* de button met puntjes geeft aan dat er meer komt als je op de button klikt
* de form geeft aan waar en dat je kan typen
* het kruisje geeft aan dat je het scherm kan wegklikken


## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
### Breakpoints
![3](https://github.com/user-attachments/assets/914390c8-d767-44c6-99ed-bba3e0242af2)
Hierboven staat het breakpoint aan gegeven waarop de hele website veranderd. Vanaf het punt dat het scherm breder wordt dan 590 pixels, is het mooier om het chat scherm naast de lijst te hebben in plaats van erover heen vanaf de onderkant. Dit is het enige breakpoint op de website want vanaf daar schaalt de website mee als het scherm meer pixels breed wordt.



### Code conventies
#### HTML
In mijn HTML behoud ik consistentie door duidelijk mijn code in te laten springen. Tussen verschillende articles in een section (en bij andere verschillende elementen die in een andere groep staan) laat ik een witregel om duidelijk te maken dat de elementen niet in elkaar overlopen. <br>
![image](https://github.com/user-attachments/assets/60afbca1-51e7-4c87-8801-8e1667157b9a) <br>
De block elementen (zoals een button) begin ik allemaal op een nieuwe regel en de inline elementen (zoals een a) schrijf ik allemaal op een regel.  <br>
![image](https://github.com/user-attachments/assets/70f9da29-ade9-4ae1-86c8-17e5875d8a46)

#### CSS
In mijn CSS behoud ik consistentie door de zelfde volgorde aan te houden met de CSS als in de HTML. Ik werk veel met classnames omdat ik het duidelijker vind om de CSS en HTML te vinden die bij elkaar horen. Ik heb de CSS een beetje genest. Dat heb ik gedaan bij img's die in een button staan. <br>
![image](https://github.com/user-attachments/assets/61b98f8e-503a-4593-a7b2-e51df0a4c3f1)

#### Media queries
Ik heb in mijn CSS ervoor gezorgt dat het mobile first is ontworpen en alles wat veranderd als de website breder wordt heb ik gedaan met media queries. Om het overzicht te behouden welke media query bij welke selector hoort heb ik ze genest. <br>
![image](https://github.com/user-attachments/assets/b68df2d2-cf9f-4021-8029-f87533c2b59e) <br>
Deze zorgt ervoor dat de header (deze staat ook op de body en de footer) om hem op te schuiven zodra het chat scherm aan de linker zijkant moet komen.


#### Naamgeving
Ik gebruik overal kebab-casing, dit omdat het een standaard CSS instelling is en omdat het voor mij duidelijker te lezen is dan wanneer je met camelCase werkt.
Mijn naamgeving is in het engels, omdat de standaard CSS termen toch ook al in het engels zijn vind ik het handiger om in het engels door te gaan met classnames. <br>
![image](https://github.com/user-attachments/assets/99252c7f-3c72-47d8-823e-ff11bbf43ea8) <br>
In mijn custom properties heb ik de text sizing niet aangegeven aan de hand van de px/em maar aan de hand van standaard H1, H2 etc. grootes. <br>
![image](https://github.com/user-attachments/assets/ea504732-a9c3-4054-b649-60327731268d)


## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


