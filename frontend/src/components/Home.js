import React from "react";
import "./Fonts/Font.css";
import WelcomeContent from "./HeaderContent";
import Glass from "./Section2";
import Footer from "../components/Footer";
import BusinessInvestors from "../components/BusinessInvestors";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Entreprenuer from "../pages/Entreprenuer";
// import Venturecapitalist from "../pages/VentureCapitalist";
// import axios from "axios";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>;

const Home = () => {

  // const [role, setRole] = useState('');
  // axios.defaults.withCredentials = true;
  // // Getting response about user logged in
  // useEffect(()=>{
  //   axios.get(`http://localhost:4000/login`).then((response) => {
  //     if (response.data.loggedIn === true) {
  //       // console.log(response)
  //       setRole(response.data.user[0].ai_role);
  //     }
  //   })
  // },[])

  return (
    <>
      {/* <div className="">
       {role ==="Investor" && <Venturecapitalist/>}
       {role ==="Entreprenuer" && <Entreprenuer/>}
      </div> */}
      <div className="">
        <WelcomeContent />
      </div>
      <div>
        <div className="p-5 mb-0 pb-0 text-slate-500"><p className="p-5 m-lg-5 text-xs mb-0 pb-0">Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada.</p></div>
        <Glass />
      </div>
      <div>
        <BusinessInvestors />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
