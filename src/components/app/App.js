import PageWrapper from './../layout/page-wrapper/page-wrapper';
import starsList from "../../mocks/stars-list"

function App() {
  return (
    <div className="App">
      <PageWrapper stars={starsList} />
    </div>
  );
}

export default App;
