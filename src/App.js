import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import GlobalStyles from './GlobalStyles/GlobalStyles';

function App() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />;
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.css" />
      <GlobalStyles>
        <Header light />
        <Footer dark />
      </GlobalStyles>
    </>
  );
}

export default App;
