import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-wrap content-center h-[90vh] container m-auto">
        <Card />
      </div>
      <Footer />
    </>
  );
}

export default App;
