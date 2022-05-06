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

import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({

    link: {
      textDecoration: 'none'
    },

    Submitbutton: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '20px',
      
    },

    button: {
      background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
      margin: 8,
      height: '30px'
    }, 

    modal: {
      filter:'unset',
      display: 'none',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: 'fit-content',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },

    form: {
      padding: '10px',
      margin: '20px',
      borderStyle: 'solid',
      borderWidth: '5px',
      display: 'none',
      backgroundColor: 'white', 
      width: 'fit-content',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto'

    
    },

    formItem: {
      padding: '10px',
      width: '200px'

    },

    Tree: {
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
      display: 'grid',
      marginLeft: 'auto',
      marginRight: 'auto',
      gridTemplateColumns: 'repeat(1, 1fr)',
      rowGap: '5px',
      overflow: 'hidden'

    },

    Row: {
      display: 'grid',
      gridTemplateColumns: 'repeat(9, 1fr)',
      columnGap: '5px',
      rowGap: '5px',
      margin: '15px',
    },

    RowItem: {
      textAlign: 'center',
      border: '5px',
      margin: '5px'


    }

  });


const App = () => {
    return(
      <Router>
      <div>
        <nav>
          <ol>
            <li>
              <Link className = {useStyles().link} to="/">Table</Link>
            </li>
            <li>
              <Link className = {useStyles().link} to="/tree">Tree grid</Link>
            </li>
          </ol>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/tree" element={<TreeGridContainer useStyles = {useStyles} />}> </Route>
          <Route path="/" element={<TableContainer useStyles = {useStyles}/>}> </Route>
        </Routes>
      </div>
    </Router>
    );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);