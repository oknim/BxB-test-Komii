// import Bouton from "./Bouton"

import Bouton from "./Bouton"

function Accueil () {
    return <>
        <div className="welcomu">
            <div>
                <img src="/Komii.png" alt=""/>
            </div>
            <div className="h_welcomu">
                <h2>Herzlich Willkommen bei COMII!</h2>
                <p>Hier kannst Du Dich registrieren oder anmelden:</p>
                <p><span style={{fontWeight : 'bold', color : 'orange'}}>Helfer App:</span> Alle die Helfen wollen! Bitte beachte: Du registrierst Dich zuerst als freiwilliger Helfer. Danach kannst Du in Deinem Profil angeben, ob und wie Du Geld verdienen möchten.</p>
                <p><span style={{fontWeight : 'bold', color : '#B6CB17'}}>Senioren App:</span> Für alle Hilfesuchenden, Senioren, pflegende Angehörige und gesetzliche Betreuer.</p>
                <p><span style={{fontWeight : 'bold', color : 'rgb(68, 27, 179)'}}>Organisation:</span> Für alle Koordinatoren bei ambulanten Diensten, Nachbarschaftsnetzwerken, Unternehmensinhaber und Organisationen.</p>
            </div>
        </div>
        <div className="log">
            <div>
                <img src="/Flèche.png" alt=""/>
                <h4>Welcome back Senior</h4>
            </div>
            <div>
                <label>E-mail Addresse</label>
                <input type="texte" placeholder="Bitte geben Sie Ihre E-Mail Adresse hier ein!"></input>
                <label>Password</label>
                <input type="password" placeholder="********"></input>
                <p style={{fontWeight : 'bold'}}>Wenn Sie auf Anmelden klicken, stimmen Sie unseren <span style={{color : '#B6CB17'}}>Nutzungsbedingungen</span> sowie unserer <span style={{color : '#B6CB17'}}>Datenschutzrichtlinie</span> zu.</p>
            </div>
            <div>
                <Bouton/>
                <p>Sie haben kein Konto ? <a href="/">SignIn</a></p>
            </div>
        </div>
    </>
}

export default Accueil