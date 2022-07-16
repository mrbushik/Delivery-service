import React from 'react';
import MainPage from "./pages/MainPage";
import ThemeContext from './components/Context/Context';
function App() {
  const [modal, setModal] = React.useState(false)

  return (
   <>
   <ThemeContext.Provider  value={{modal, setModal}}>
   <MainPage/>
   </ThemeContext.Provider>
   </>
  );
}

export default App;
