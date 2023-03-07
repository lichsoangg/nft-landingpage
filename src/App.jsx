import CardList from "./components/Card/CardList";
import Acution from "./css/layouts/Acution";
import Banner from "./css/layouts/Banner";
import Choose from "./css/layouts/Choose";
import Collections from "./css/layouts/Collections";
import Creater from "./css/layouts/Creater";
import Footer from "./css/layouts/Footer";
import Header from "./css/layouts/Header";
import Story from "./css/layouts/Story";
function App() {
  return (
    <div className="wrapper">
      <>
        <Header></Header>
        <Banner></Banner>
        <Story></Story>
        <Collections></Collections>
        <Acution></Acution>
        <Creater></Creater>
        <Choose></Choose>
        <Footer></Footer>
      </>
    </div>
  );
}

export default App;
