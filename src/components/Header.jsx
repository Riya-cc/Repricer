import logo from '../assets/logo.png';

function Header() {
  return(
    <header className="mt-1.5 w-full flex flex-col items-center justify-center text-sm text-darkslategray">
      <div className="self-stretch bg-whitesmoke flex py-2 px-52 items-center justify-between">
        <img
          className="w-32"
          alt="logo"
          src={logo}
        />
        <p className="m-0 tracking-[2px] font-medium text-[12px]">
          Hi, There!
        </p>
      </div>
      <div className="self-stretch flex flex-col p-8 items-center justify-center font-big-description">
        <h1 className="m-0 tracking-[8px] font-medium">
          REPRICER
        </h1>
      </div>
    </header>
  );
};

export default Header;
