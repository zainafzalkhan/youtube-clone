
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App m-1">
        <Header/>
        <Body/>
        <Footer/>
    {/* 
    Head
    Body
      SiderBar
          MenuItems
      MainContainer
        TagBtnList
        VideoContainer
          VideoCard
    Footer
      email
      services
      contact
    
    */}
    </div>
  );
}

export default App;
