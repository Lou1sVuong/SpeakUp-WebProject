import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './Routes';
import GlobalStyles from './Components/GlobalStyles/GlobalStyles'
import MainLayout from './Layout/MainLayout';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <>
      <Router>
        <GlobalStyles>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              const Layout = route.layout || MainLayout;
              return (
                <Route key={index} path={route.path} element={<Layout> <Page /> </Layout>}/>
              );
            })}
            <Route path="*" element={<MainLayout> <NotFound /> </MainLayout>} />
          </Routes>
        </GlobalStyles>
      </Router>
    </>
  );
}

export default App;
