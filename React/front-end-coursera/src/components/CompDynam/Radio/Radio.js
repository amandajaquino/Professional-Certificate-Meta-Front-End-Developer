import * as React from "react";

export const RadioGroup = ({ onChange, selected, children }) => { 
 const RadioOptions = React.Children.map(children, (child) => { 
   return React.cloneElement(child, { 
     onChange, 
     checked: child.props.value === selected, 
   }); 
 }); 
 return <div className="RadioGroup">{RadioOptions}</div>; 
}; 
 
export const RadioOption = ({ value, checked, onChange, children }) => { 
 return ( 
   <div className="RadioOption"> 
     <input 
       id={value} 
       type="radio" 
       name={value} 
       value={value} 
       checked={checked} 
       onChange={(e) => { 
         onChange(e.target.value); 
       }} 
     /> 
     <label htmlFor={value}>{children}</label> 
   </div> 
 ); 
}; 

/*
Chat gpt
import React from "react"; // Import React, not * as React
import "./Radio.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      onChange: onChange,
      checked: child.props.value === selected, // Compare child's value with selected
    });
  });

  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  const handleChange = () => {
    onChange(value); // Pass the selected value to the onChange function
  };

  return (
    <div className="RadioOption">
      <input
        id={value}
        type="radio"
        name="radioGroup" // Set a common name for all radio buttons in the group
        checked={checked} // Use the checked prop directly
        onChange={handleChange} // Call handleChange on change
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
}; */