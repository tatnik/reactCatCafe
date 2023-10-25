import PageWrapper from './../layout/page-wrapper/page-wrapper';
import starsList from "../../mocks/stars-list"
import { GlobalStyle } from '../../styles';
import gallery from '../../mocks/gallery';
import buyOptions from './../../mocks/buy-options';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper stars={starsList} slides={gallery} buyOptions={buyOptions} />
    </>
  );
}

export default App;
