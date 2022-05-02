import React from 'react';
import ReactDOM from 'react-dom/client';
import TableContainer from './container/TableContainer';
import TreeGridContainer from './container/TreeGridContainer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




const App = () => {
    return(
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Table</Link>
            </li>
            <li>
              <Link to="/tree">Tree grid</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/tree" element={<TreeGridContainer />}> </Route>
          <Route path="/" element={<TableContainer />}> </Route>
        </Routes>
      </div>
    </Router>
    );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);