import Accueil from "./composants/Accueil";

function App() {
  return <>
    <Accueil />
  </>
}
export default App;

/*Notes importantes :
  *Dans react, toutes les balises javascript utilisées doivent obligatoirement être fermées (vraiment TOUTES).
  * Le camelCase est de mise dans react.
  * L'interpolation des variables, c'est cool aussi ! (déclaration, utilisation, appels, etc.)
  * Ici l'attribut style est considéré comme un objet. De ce fait, il peut être déclaré en amont et utilisé.
  * L'attribut key permet de mieux manipuler le DOM lorsqu'il s'agit de faire des transformation (Dans un tableau, il sert à démontrer que tous les éléments sont uniques)
  * Les fonctions peuvent également être imbriquées dans d'autres fonctions / Ici, ils peuvent recevoir des propriétés sous forme d'objets (ça nous permet également de créer des balises personnalisées)
*/