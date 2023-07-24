import appStyles from "./App.module.css";
import Header from "../Header/Header";
import Shop from "../Shop/Shop";
function App() {
  return (
    <div className={appStyles.App}>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
