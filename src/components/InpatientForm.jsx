import CustomDropdown from "./form-inputs/CustomDropdown";
import CustomInput from "./form-inputs/CustomInput";
import CustomRadio from "./form-inputs/CustomRadio";
import FileUpload from "./form-inputs/FileUpload";
import CustomDate from "./form-inputs/CustomDate";

function InpatientForm() {
  return (
    <form className="bg-white flex flex-col pt-[20px] px-[30px] pb-[50px] justify-start gap-[30px]">
       <FileUpload />
      <div className="flex flex-row py-1 px-0 box-border items-start justify-start gap-[20px]"> 
        <CustomInput label="Bill Type" />
        <CustomDropdown label="State" placeholder="Select State"/>
        <CustomDropdown label="Hospital" placeholder="Select Hospital" />
        <CustomDate label="Admission Date" />

      </div>
      <div className="flex flex-row py-1 px-0 box-border items-start justify-start gap-[20px]"> 
        <CustomInput />
        <CustomDropdown placeholder="Select State"/>
        <CustomRadio />
      </div>
    </form>
  )
}

export default InpatientForm;