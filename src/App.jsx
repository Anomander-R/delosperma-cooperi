import './App.css';
import LoaderCase from './components/loader/LoaderCase';
import LoaderShell from './components/loader/LoaderShell';
import LoaderSpecific from './components/loader/LoaderSpecific';
import LoaderUniversal from './components/loader/LoaderUniversal';
// import SpinnerOne from './components/spinnerone/SpinnerOne';
// import SpinnerSolo from './components/spinnerone/spinnersolo/SpinnerSolo';
import { rotationB, rotationA, rotationC, rotationD, rotationE } from './components/loader/animations';

function App() {
 

  return (
    <>
     <LoaderCase animation={rotationA}/>
     <LoaderCase animation={rotationB}/>
     <LoaderCase animation={rotationC}/>
     <LoaderCase animation={rotationD}/>
     <LoaderCase animation={rotationE}/>
    </>
  )
}

export default App
