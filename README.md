# Gamba

Vorab: Es wird eine MongoDB benötigt um das Projekt zu verwenden.
Link zur Community Version: https://www.mongodb.com/try/download/community
Nach dem downloaden mit einer Eingabeaufforderung in den bin Ordner wechseln (Standard: C:/Programme/MongoDB/Server/5.0/bin)
Dort das Command "mongo" eingeben. Der Server wird gestartet.
Nun in folgender Reihenfolge Commands eingeben in der CLI um die benötigten Tabellen zu erstellen:
1. use gamba
2. db.createCollection('users')
3. db.createCollection('draws')
4. db.createCollection('tips')

Es wird außerdem Node.Js benötigt (am besten mit Anbindung an die CLI)

# Benötigte Schritte zum Starten der Applikation:
1. git clone https://github.com/Asiimate/Gamba.git
2. cd Gamba
3. npm i
4. npm i -g @angular/cli
5. ng serve //Startet das Frontend (erreichbar unter http://localhost:4200/) (Sollte das Skript in der PowerShell nicht ausführbar sein, so bitte aus folgendem Artikel die Lösung beziehen: https://windowsloop.com/enable-powershell-scripts-execution-windows-10/)
6. weitere Konsole öffnen
7. in den Ordner server wechseln (cd server)
8. node app (bzw. nodemon app wenn vorhanden) //Startet das Backend (erreichbar unter http://localhost:3000/)
9. Auf http://localhost:4200/ im Browser gehen -> Login -> Registrieren
10. Um einen Mitarbeiter-Account zu erstellen einfach als Username "admin" eingeben :)