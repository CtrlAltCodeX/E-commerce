import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Section from "./Components/Section";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="max-w-7xl mx-auto p-6 lg:px-8 grid gap-10">
        <Header />
        <Section />
      </div>
      <Footer />
    </div>
  );
}

export default App;
