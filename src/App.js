import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
return (
<>
  <div className="font-roboto bg-white">
    <Header />
    <div className="flex flex-row px-40 gap-12">
      <Sidebar />
      <Main />
    </div>
  </div>
</>
);
}

export default App;