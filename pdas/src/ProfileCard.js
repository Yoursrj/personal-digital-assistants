//component for profilecard

//This line defines a functional component named "ProfileCard" that takes in an object as its parameter.
//The object contains properties such as "title", "handle", "image", and "description".
// This is an example of object destructuring, where the component extracts specific properties from the object and assigns them to variables with the same names.
function ProfileCard({ title, handle, image, description }) { //props nikal ke andar ka daal diya
    // const title = props.title;
    // const handle = props.handle;
    //const {title,handle} = props; // destructuring in javascript 


    //This block of code defines the JSX structure of the "ProfileCard" component.
    //It represents a card layout commonly used for displaying information.
    // The JSX code is surrounded by parentheses and returns a single parent element, in this case, a <div>.
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pdas logo" />
                </figure>
            </div>
    {/*Inside the parent <div>, there are nested <div> elements representing the card image and card content sections. 
    The card image section contains an <img> element with a source attribute set to the "image" prop value. 
    The alt attribute specifies the alternative text for the image. */}        
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4"> Title is {title}</p>
                    <p className="subtitle is-6"> Handle is {handle}</p>
                    <p className="content">{description}</p>
                </div>
            </div>
    {/*The card content section includes a <div> with the class "media-content" to wrap the content.
    Within this div, there are three <p> elements representing the title, handle, and description of the digital assistant. 
    The values for the title, handle, and description are obtained from the respective props passed to the component. */}        
        </div>
    )
}

export default ProfileCard;
//This line exports the "ProfileCard" component as the default export, allowing other files to import and use it.

//In summary, the "ProfileCard" component takes in props containing information about a digital assistant and renders a card layout displaying the assistant's image, title, handle, and description.
//The props are extracted using object destructuring, and the component's JSX structure defines the visual representation of the card.