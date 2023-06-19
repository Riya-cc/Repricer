import './App.css';
import topBg from './assets/top-bg.png';
import Header from './pages/Header';
import InteractiveTabs from './components/form-inputs/InteractiveTabs';

function App() {
return (
<>
    <div className="font-roboto bg-aliceblue">
      <img className='absolute right-[-2px] top-0 w-96' src={topBg} alt="top background"/>
    <Header />
      <div className="flex flex-row px-40 gap-12">
      <InteractiveTabs />
    </div>
  </div>
</>
);
}

export default App;