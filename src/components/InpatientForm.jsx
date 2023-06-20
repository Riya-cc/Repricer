import CustomDropdown from "./form-inputs/CustomDropdown";
import CustomInput from "./form-inputs/CustomInput";
import CustomRadio from "./form-inputs/CustomRadio";
import FileUpload from "./form-inputs/FileUpload";
import CustomDate from "./form-inputs/CustomDate";

function InpatientForm() {
  const genderItems = [{ id: "male", label: "Male" }, { id: "female", label: "Female" }, { id: "other", label: "Other" }]
  const poaItems = [{ id: "y", label: "Y" }, { id: "n", label: "N" }, { id: "u", label: "U" }, { id: "w", label: "W" }, { id: "1", label: "1" }]
  return (
    <>
      <div className="bg-white flex flex-col pt-[20px] px-[30px] pb-[50px] justify-start gap-[30px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        <FileUpload />
      </div>
      <div className="bg-white flex flex-col pt-[20px] px-[30px] pb-[50px] justify-start gap-[30px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        <div className="flex flex-row py-1 px-0 box-border items-start justify-start gap-[20px]">
          <CustomInput label="Bill Type" />
          <CustomDropdown label="State" placeholder="Select State" />
          <CustomDropdown label="Hospital" placeholder="Select Hospital" />
          <CustomDate label="From DOS" />
          <CustomDate label="To DOS" />
        </div>
        <div className="flex flex-row py-1 px-0 box-border items-start justify-start gap-[20px]">
          <CustomDate label="Date of Birth" />
          <CustomRadio radioItems={genderItems} label="Patient Sex" />
          <CustomDropdown label="Admission Source Code" placeholder="Select" />
          <CustomDropdown label="Patient Status Code" placeholder="Select" />
        </div>
        <div className="flex flex-row py-1 px-0 box-border items-start justify-start gap-[20px]">
          <CustomDropdown label="Condition Code" placeholder="Select" />
          <CustomInput label="Principle PCS Code" />
          <CustomDate label="Principle PCS Date" />
          <CustomInput label="NPI" />
        </div>
        <div className="flex flex-row py-1 px-0 box-border items-start justify-start gap-[20px]">
          <CustomInput label="Principle DX" />
          <CustomRadio radioItems={poaItems} label="POA_P/DX" />
          <CustomInput label="Admit DX" />
        </div>
        <div className="flex flex-row py-1 px-0 box-border items-start justify-start gap-[20px]">
          <CustomInput label="Patient Reason DXs" />
          <CustomInput label="ECIs" />
          <CustomInput label="Other PCS Codes" />
        </div>
      </div>
      <div className="bg-white flex flex-col pt-[20px] px-[30px] pb-[50px] justify-start gap-[30px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        <div className="flex flex-row py-1 px-0 box-border items-start justify-start gap-[20px]">
          <CustomInput label="Codes" />
          <CustomInput label="POA" />
          <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>
      </div>
      <div className="bg-white flex flex-col pt-[20px] px-[30px] pb-[50px] justify-start gap-[30px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        <div className="flex flex-row py-1 px-0 box-border items-start justify-start gap-[20px]">
          <CustomInput label="Codes" />
          <CustomInput label="Amount" />
          <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>
      </div>
      <div className="bg-white flex flex-col pt-[20px] px-[30px] pb-[50px] justify-start gap-[30px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        <div className="flex flex-row py-1 px-0 box-border items-start justify-start gap-[20px]">
          <CustomInput label="Number of Procedures" />
          <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <div className="bg-white flex flex-col pt-[20px] px-[30px] pb-[50px] justify-start gap-[30px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          <div className="flex flex-row py-1 px-0 box-border items-start justify-start gap-[20px]">
            <CustomInput label="CPT Code" />
            <CustomInput label="Revenue Code" />
            <CustomDropdown label="Modifier" placeholder="Select" />
          </div>
          <div className="flex flex-row py-1 px-0 box-border items-start justify-start gap-[20px]">
            <CustomDropdown label="Units" placeholder="Select" />
            <CustomDate label="Service Date" />
            <CustomInput label="Charges" />
          </div>
        </div>
      </div>
    </>
  )
}

export default InpatientForm;