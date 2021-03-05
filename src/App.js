import React from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import MyA from "./MyA";
import MyB from "./MyB";

function App() {
  return (
      <Router>
          <div>app</div>
          <Route path='/a'>
              <MyA />
          </Route>
          <Route path='/b'>
              <MyB />
          </Route>
      </Router>
  );
}

export default App;
