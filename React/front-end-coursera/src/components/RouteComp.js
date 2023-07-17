/* Task
You are using the code similar to the lesson item titled The Navbar. Your goal is to add another link to the existing code. This link should show a brand new component, named Contact. 

Steps
Step 1
Install the react-router package.  Run  npm install react-router-dom@6.

Step 2
Add a new file, Contact.js, to the root of the src folder. 

Step 3

Inside the Contact.js file, add an ES5 function, named Contact. Add the export default Contact after the Contact function's closing curly brace. 

Step 4
Inside the body of the Contact function, add a return statement with the following code: <h1>Contact Little Lemon on this page.</h1>. 

Step 5
Inside the App.js file, import the newly-built Contact component. 

Step 6
Inside the App.js file's App function's return statement, locate the nav element, and inside of it, add another <Link> element, with the to attribute pointing to "/contact", the className set to "nav-item", and the the text inside the Link element's opening and closing tags set to Contact.

Step 7
Inside the Routes element, add a third route, with the path attribute pointing to "/contact", and the element attribute set to {<Contact />}. 

Step 8
Save all your changes and view your updates in the served app. You should have three links in the top navbar, and the third link should be Contact. Once you click the link, the sentence "Contact Little Lemon on this page" should replace whatever other content was under the navbar previously.

Tip
If you’re having trouble with this lab, please review the "The Navbar" video lesson item.  That video explains how to work with routes in React.   */