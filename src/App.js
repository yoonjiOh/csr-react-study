import './App.css';
import {Helmet} from "react-helmet";
import Depth1 from './render-order/depth1';
import RedRectangle from './canvas/RedRectangle';

function App() {
  return (
    <div className="App">
      <Helmet htmlAttributes={{ lang: 'ko'}}>
        <title>study</title>
      </Helmet>
      <RedRectangle />
    </div>
  );
}

export default App;
