import { Routes, Route, Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { InfoContextProvider } from './context/InfoContext'

import MainLayout from "./layout/MainLayout";

import Home from './views/Home/Home';
import ResultDisplay from "./views/ResultDisplay/ResultDisplay";
import Test from "./views/Test/Test"

import NavBar from "./components/Custom/NavBar/NavBar";
import './styles/main.scss';

function App() {
  const methods = useForm()
  // console.log(methods)
  return (
    <FormProvider {...methods} >
    <InfoContextProvider>

      <MainLayout>
        
        <Routes>
          <Route path="/pokedex">
            <Route index element={<Home />} />
            <Route path="test" element={<Test />} />
            <Route path="pokeinfo/:result" element={<ResultDisplay />} />
          </Route>
        </Routes>

      </MainLayout>

    </InfoContextProvider>
    </FormProvider>
  );
}

export default App;
