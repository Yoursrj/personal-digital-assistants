import 'bulma/css/bulma.css';
//This line imports the CSS file of the Bulma framework, which is a popular CSS framework for building responsive and modern web designs.
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
//These lines import various components and images used in the code. 
//ProfileCard is a custom component defined in a separate file named "ProfileCard.js".
// AlexaImage, CortanaImage, and SiriImage are imported images representing the respective digital assistants.
function App(){
//This line defines a functional component named "App". Functional components are reusable building blocks in React that return JSX 
//(a syntax extension for JavaScript) to define the structure and appearance of the user interface.    
    return(
        <div>
{/*This marks the beginning of the JSX code that will be rendered. The code within the parentheses represents the structure of the UI. */}            
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                    Personal Digital Assistants
                    </p>
                </div>
            </section>
{/*This section represents a hero section with a primary color background. It contains a title saying "Personal Digital Assistants". */}
            <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-4">
                    <ProfileCard title ="Alexa" handle="@Alexa99" image={AlexaImage}
                    description ="Alexa was created by Amazon and helps you buy things"/>
                    </div>
                    <div className='column is-4'>
                    <ProfileCard title ="Cortana" handle="@Cortana99" image={CortanaImage}
                    description ="Cortana was created by Microsoft and was a flop"/>
                    </div>
                    <div className="column is-4">
                    <ProfileCard title ="Siri" handle="@Siri99" image={SiriImage}
                    description = "Siri was made by Apple and is being phased out "/>
                    </div>
                </div>
            </section>
            </div>
        </div>
    )
  {/* This div wraps the main content of the app. It contains a section with the class "section" and a container div. 
Inside the section, there are three columns representing each digital assistant.
The columns are created using the Bulma grid system. Each column has a width of 4 (is-4) out of a total of 12 columns. 
Inside each column, the ProfileCard component is used with different props such as title, handle, image, and description. 
These props are passed to the ProfileCard component to display the information for each digital assistant. */}  
}

export default App;
//This line exports the "App" component as the default export, which allows other files to import and use it.

