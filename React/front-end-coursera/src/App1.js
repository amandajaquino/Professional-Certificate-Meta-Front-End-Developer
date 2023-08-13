import './App2.css';
import Intro1 from './components/Intro1';
import Nav from './components/NavArrowFunction';
import Promo from './components/Promo';
import Footer from './components/Footer';
import Pears from './components/Pears';
import Apples from './components/Apple';
import Bag from './components/BagStyleJSX';
import logo from './../src/assets/logo.jpg';
import Btn from './components/ButtonEvent';
import DynamicEvents from './components/DynamicEvents';
import Puppy from './components/Puppy';
import Bowl from './components/Bowl';
import DateTime from './components/Date';
import UseStateComp from './components/UseStateInput';
import UseReducerComp from './components/UseReducerComp';
import MealsProvider from './components/MealsProvider';
import MealsList from './components/MealsList';
import Counter from './components/Counter';
import Fruits from './components/Fruits';
import FruitsCounter from './components/FruitsCounter';
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

function Logo() {
  const userPic = <img src={logo} height={50} width={50} />
  return userPic;
}

function Card(props) {
  return (
      <div  className="card" >
          <h2>
              {props.h2}
          </h2>
          <h3>
              {props.h3}
          </h3>
      </div>
  )
}


function AppCard() {
  return (
    <div>
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h2" h3="First card's h3"/>
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />

    </div>
  );
}

const date = new Date();

const fruits = [
  { fruitName: 'apple', id: 1 },
  { fruitName: 'banana', id: 2 },
  { fruitName: 'plum', id: 3 },
];

function App() {

  return ( 
    <div className="App"> 
    <Puppy name="Max" bowlShape="square" bowlStatus="full" />
    <Bowl />
    <UseStateComp />
    <UseReducerComp />
    <div >
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter  fruits={fruits}  />
    </div>
    <div>
      <MealsProvider>
          <MealsList />
          <Counter />
      </MealsProvider>
    </div>
    <DateTime message={date.toLocaleTimeString()} />
    <DynamicEvents />
    <Btn />
    <Logo />
    <AppCard />
     
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
