import "./App.css";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import Switch from "./components/Switch";
import MoviesList from "./components/MoviesList";
import ComplexUseState from "./components/ComplexUseState";
import SimpleUseState from "./components/SimpleUseState";
import GoalFormComplet from "./components/GoalForm";
import GiftCard from "./components/GiftCard";
import FetchComp from "./components/FetchComp/FetchComp";
import HookPersonal from "./components/HookPersonal";
import CompDynam from "./components/CompDynam/CompDynam";
import HocCompFinished from "./components/HocComp/HocCompFinished";

const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would
        make me stop trying all of the others.
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Title>Little Lemon 🍕</Title>
      <Switch />
    </header>
  );
};

const Page = () => {
  return (
    <div className="Page">
      <Title>When it comes to dough</Title>
      <div className="App">
      <MoviesList />
      <h2>List of low calorie desserts:</h2>
      <div>
      <h2>Desserts List</h2>
      <ul>
        {desserts.map((dessert, index) => (
          <li key={index}>
            <h3>Name:</h3> {dessert.name} <br />
            <strong>Calories:</strong> {dessert.calories} <br />
            <strong>Created At:</strong> {dessert.createdAt}
            <hr />
          </li>
        ))}
      </ul>
    </div>
      </div>
      <Content />
    </div>
  );
};

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
      <SimpleUseState />
      <ComplexUseState />
      <GoalFormComplet />
      <GiftCard />
      <FetchComp />
      <HookPersonal />
      <CompDynam />
      <HocCompFinished />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
