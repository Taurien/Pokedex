import { Routes, Route, Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { InfoContextProvider } from './context/InfoContext'

import Home from './views/Home/Home';
import PkmnDisplay from "./views/PkmnDisplay/PkmnDisplay";

import './App.css';

function App() {
  const methods = useForm()
  // console.log(methods)
  return (
    <div className="App">
      <FormProvider {...methods} >
      <InfoContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pokeinfo" element={<PkmnDisplay />} />
        </Routes>
      </InfoContextProvider>
      </FormProvider>
    </div>
  );
}

export default App;
