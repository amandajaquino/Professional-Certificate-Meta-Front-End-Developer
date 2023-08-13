import { useState } from "react"; 

/* 
The code bellow function however it is not the best way to use useState with objects.
export default function App() { 
    const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
    console.log(greeting, setGreeting); 
   
    function updateGreeting() { 
      setGreeting({ greet: "Hello, World-Wide Web" }); 
    } 
   
    return ( 
      <div> 
        <h1>{greeting.greet}</h1> 
        <button onClick={updateGreeting}>Update greeting</button> 
      </div> 
    ); 
  }  */


export default function ComplexUseState() { 
  const [greeting, setGreeting] = useState( 
    { 
        greet: "Hello", 
        place: "World" 
    } 
  ); 
  console.log(greeting, setGreeting); 
 
  /* The correct way to update the state object is to use the spread operator:
  The reason this works is because it uses the previous state, which is named prevState, 
  and this is the previous value of the greeting variable. In other words, 
  it makes a copy of the prevState object, and updates only the place property on the copied object. 
  It then returns a brand-new object.
  You have learned what happens when changing the string data type to an object, 
  with examples of holding state in an object and updating it based on user-generated events. You also learned about correct 
  and incorrect ways to update the state object in React when using useState, and about updating the state object using arrow functions */
  function updateGreeting() { 
    setGreeting(prevState => { 
        return {...prevState, place: "World-Wide Web"} 
    }); 
  } 
  return ( 
    <div> 
      <h1>{greeting.greet}, {greeting.place}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
}  