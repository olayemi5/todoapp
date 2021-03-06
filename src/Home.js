import Footer from "./Footer";
import WelcomeLabel from "./WelcomeLabel";
import DetailsForm from "./LoginDetailsForm";

const Home = () => { 
   return ( 
      <div className="home-page ">
         <WelcomeLabel />
         <DetailsForm />
         <Footer />
      </div>
   );
}
 
export default Home;