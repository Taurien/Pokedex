import { Routes, Route, Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { InfoContextProvider } from './context/InfoContext'

import Home from './views/Home/Home';
import ResultDisplay from "./views/ResultDisplay/ResultDisplay";
import Test from "./views/Test/Test"

import './App.scss';
import NavBar from "./components/Custom/NavBar/NavBar";

function App() {
  const methods = useForm()
  // console.log(methods)
  return (
      <FormProvider {...methods} >
      <InfoContextProvider>

        <NavBar />

          <Routes>
            <Route path="/pokedex">
              <Route index element={<Home />} />
              <Route path="test" element={<Test />} />
              <Route path="pokeinfo/:result" element={<ResultDisplay />} />
            </Route>
          </Routes>

      </InfoContextProvider>
      </FormProvider>
  );
}

export default App;
