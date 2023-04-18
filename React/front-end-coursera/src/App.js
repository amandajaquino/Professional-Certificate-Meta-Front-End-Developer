import './App.css';
import Intro1 from './components/Intro1';
import Nav from './components/NavArrowFunction';
import Promo from './components/Promo';
import Footer from './components/Footer';
import Pears from './components/Pears';
import Apples from './components/Apple';
import Bag from './components/BagStyleJSX';
/* import Heading from './components/Heading';  */

function Heading() {
  return (
    <h1>This is an h3 heading</h1> 
  );
}

//using ternary operator
function TernaryExample() {
  return (
      <div className="heading">
          <h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>
      </div>
  );
};

//using arrow function JSX
function FunctionExample() {

  const getRandomNum = () => Math.floor(Math.random() * 10) + 1

  return (
      <div className="heading">
          <h1>Here's a random number from 0 to 10: { getRandomNum() }</h1>
      </div>
  );
};


/* //In summary, just like you can use expressions inside function components, you can also use them as prop values inside JSX elements, when rendering those function components. */
/* const bool = false; 
 */
//using props
/* function ExpExample(props) {
    return (
        <h2>The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}</h2>
    );
};
 */

const bool = false;
const str1 = "just";

function ExpExample2(props) {
    return (
        <div>
            <h2>
                The value of the toggleBoolean prop is:{props.toggleBoolean.toString()}
            </h2>
            <p>The value of the math prop is: <em>{props.math}</em></p>
            <p>The value of the str prop is: <em>{props.str}</em></p>
        </div>
    );
};


function App() {

  return ( 
    <div className="App"> 
     
        {/* <ExpExample toggleBoolean={!bool} /> */} 
        <ExpExample2 toggleBoolean={!bool} math={2 + 2} str={str1 + " testing"} />
    <TernaryExample />
    <FunctionExample />
    {/*using for each*/}
    {["Home", "Article", "About", "Contact"].map((item, index) => {
      return <Nav first = {item} key = {index} />
    })}
    <Heading />
     <Promo />
    {/*using children props*/}
      <Bag>
          <Apples color="yellow" number="5" />
          <Pears friend="Peter" />
      </Bag>
      <Intro1 
      text1 = "I've become a React developer!" 
      text2 = "I've completed the React Basics course and I'm happy to announce that I'm now a Junior React Developer!"
      text3 = "Read more..." />
      <Intro1
      text1 = "Why I love front-end web development" 
      text2 = "In this blog post, I'll list 10 reasons why I love to work as a front-end developer." 
      text3 = "Read more..." />
      <Intro1
      text1 = "What's the best way to style your React apps?" 
      text2 = "There are so many options to choose from. Here's a high-level overview of the popular ones."
      text3 = "Read more..." />
      <Footer />
    
    </div> 
  ); 
} 
 
export default App;
