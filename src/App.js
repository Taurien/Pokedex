import { Routes, Route, Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { InfoContextProvider } from './context/InfoContext'

import Home from './views/Home/Home';
import ResultDisplay from "./views/ResultDisplay/ResultDisplay";
import Test from "./views/Test/Test"

import './App.css';

function App() {
  const methods = useForm()
  // console.log(methods)
  return (
      <FormProvider {...methods} >
      <InfoContextProvider>

        {/* //! route appears. doesnt work  */}
        {/* <Routes >
          <Route path="/Pokedex" element={<Home />} >
            <Route path="test" element={<Test />} />
            <Route path="pokeinfo/:result" element={<ResultDisplay />} />
          </Route>
        </Routes> */}

        {/* //! You cannot render a <Router> inside another <Router>. You should never have more than one in your app. */}
        {/* <Router basename={'/Pokedex'}>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="test" element={<Test />} />
            <Route path="pokeinfo/:result" element={<ResultDisplay />} />
          </Routes>
        </Router> */}

        {/* //! same err */}
        {/* <BrowserRouter basename={'/Pokedex'}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="test" element={<Test />} />
            <Route path="pokeinfo/:result" element={<ResultDisplay />} />
          </Routes>
        </BrowserRouter> */}
        {/* //! same err w. n' w/o basename defined*/}
        {/* <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="test" element={<Test />} />
            <Route path="pokeinfo/:result" element={<ResultDisplay />} />
          </Routes>
        </HashRouter> */}

        {/* //* works */}
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
