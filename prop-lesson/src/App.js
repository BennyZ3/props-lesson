import "./App.css";
import RecomendedProducts from "./recommendedProducts";
function App() {
  return (
    <div className="App">
      <h1>Test Page</h1>
      <h2>Something</h2>
      <RecomendedProducts title={"My Recommended Shoes"} />
      <RecomendedProducts title={"Jose's Recommended Shoes"} />
    </div>
  );
}

export default App;
