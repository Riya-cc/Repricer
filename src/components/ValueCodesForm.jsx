import CustomInput from './form-inputs/CustomInput';

function ValueCodesForm() {
  return(<>
  <div className="bg-white flex flex-col pt-[20px] px-[30px] pb-[50px] justify-start gap-[30px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        <div className="flex flex-row py-1 px-0 box-border items-start justify-start gap-[20px]">
          <CustomInput label="Codes" id="valueCode"/>
          <CustomInput label="Amount" id="amount"/>
          <button
            type="button"
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div></>)
}

export default ValueCodesForm;