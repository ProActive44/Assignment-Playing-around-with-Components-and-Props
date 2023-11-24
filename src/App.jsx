import "./App.css";
import GallaryFooter from "./components/GallaryFooter";
import Header from "./components/Header";
import imageData from "./components/Data";
import Body from "./components/Body";

function App() {
  return (
    <div>
      <Header />
      <Body imageData={imageData} />
      {/* adding footer component */}
      <GallaryFooter />
    </div>
  );
}

export default App;
