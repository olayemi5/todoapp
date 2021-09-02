import Footer from "./Footer";
import WelcomeLabel from "./WelcomeLabel";
import DetailsForm from "./SignUpDetailsForm";

const SignUp = () => { 
   return ( 
      <div className="home-page">
         <WelcomeLabel />
         <DetailsForm />
         <Footer />
      </div>
   );
}
 
export default SignUp;