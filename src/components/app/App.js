import PageWrapper from './../layout/page-wrapper/page-wrapper';
import starsList from "../../mocks/stars-list"
import { GlobalStyle } from '../../styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper stars={starsList} />
    </>
  );
}

export default App;
