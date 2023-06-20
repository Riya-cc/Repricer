
function Dropdown({ label, placeholder }) {
  return (
    <div className="flex flex-col items-start gap-1">
      <label htmlFor={label} className="px-1 font-normal text-base leading-4 text-darkslategray">{label}</label>
      <button id={label} data-dropdown-toggle="dropdown"
        className="border-2 border-lightsteelblue text-non-highlight hover:bg-whitesmoke focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button">{ placeholder } <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor"
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg></button>
      <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={label}>
          <li>
            <a href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Option 1</a>
          </li>
          <li>
            <a href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Option 2</a>
          </li>
          <li>
            <a href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Option 3</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Option 4</a>
          </li>
        </ul>
      </div>

    </div>
  )
}
export default Dropdown;