import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
// import Footer from './components/Footer'; 

function App() {
  return (
    <>
     <div className="font-roboto bg-white">
      <Header />
      <div className="flex flex-row mx-16 w-full">
        <Sidebar />
        <Main />
      </div>
      {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
