import logo from '../assets/logo.png';

function Header() {
  return (
    <>
      <header className="w-full flex items-center justify-start pt-[90px] px-[212px] pb-[40px] gap-[200px] ">
          <img
            className="w-[200px] object-cover"
            alt="logo"
            src={logo}
            />
          <p className="relative tracking-[8px]  leading-[34px] font-medium text-[52px] text-darkkhaki  font-body-short uppercase">
          Repricer
        </p>
      </header> 
      <hr className="w-[800px] mx-auto flex h-[3px] bg-cadetblue border-0 md:my-8 dark:bg-gray-700 justify-center" />
    </>
  );
};

export default Header;
