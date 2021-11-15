import './App.css';
import {Helmet} from "react-helmet";
import Depth1 from './render-order/depth1';
// import Depth2 from './render-order/depth2';
// import Depth3 from './render-order/depth3';


function App() {
  return (
    <div className="App">
      <Helmet htmlAttributes={{ lang: 'ko'}}>
        <title>study</title>
      </Helmet>
      <Depth1 />
    </div>
  );
}

export default App;
