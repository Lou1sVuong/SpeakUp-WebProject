import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import GlobalStyles from './GlobalStyles/GlobalStyles';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

function App() {
  return (
    <GlobalStyles>
      <Header light />
      <Footer />
    </GlobalStyles>
  );
}

export default App;
