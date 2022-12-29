
import './App.css';
import Profile from './profil/Profile';
import img from './profil/Pic.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App(){
const fullName='Mokhtar Nebli';
const bio="Étudiant au niveau [PRÉCISER] dans [PRÉCISER ÉTUDES], je cherche un emploi afin de compléter ma formation académique par une expérience professionnelle qui a du sens. Je suis ouvert à de nombreuses propositions en rapport avec mes études et suis prêt à discuter de mon parcours plus amplement lors d'un entretien";
const profession='web developer';

const handleName=()=>{
  alert(fullName)
}
  return (
    <div >
       <Profile fullName={fullName} 
                bio={bio}
                profession={profession} 
                handleName={handleName}>
        {img}
       </Profile>

       
      

    </div>
  );
}

export default App;
