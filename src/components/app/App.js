import PageWrapper from './../layout/page-wrapper/page-wrapper';
import starsList from "../../mocks/stars-list"
import { GlobalStyle } from './styles';
import gallery from '../../mocks/gallery';
import buyOptions from './../../mocks/buy-options';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from '../../const';
import MainPage from './../pages/main-page/main-page';
import BuyPage from './../pages/buy-page/buy-page';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route
            path={AppRoute.MAIN}
            element={<PageWrapper />}>
            <Route
              index
              element={<MainPage stars={starsList} />} />
            <Route
              path={AppRoute.BUY}
              element={<BuyPage slides={gallery} buyOptions={buyOptions} />} />
          </Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
