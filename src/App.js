import './App.css';
import topBg from './assets/top-bg.png';
import Header from './pages/Header';
import InteractiveTabs from './pages/InteractiveTabs';

function App() {
  return (
    <>
      <div className="font-roboto bg-aliceblue">
        <img className='absolute right-[-2px] top-0 w-96' src={topBg} alt="top background" />
        <Header />
        <div className="flex flex-col md:px-[320px] mt-[70px]">
          <InteractiveTabs />
        </div>
      </div>
    </>
  );
}

export default App;