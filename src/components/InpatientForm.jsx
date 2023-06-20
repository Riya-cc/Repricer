import CustomDropdown from "./form-inputs/CustomDropdown";
import CustomInput from "./form-inputs/CustomInput";
import CustomRadio from "./form-inputs/CustomRadio";
import FileUpload from "./form-inputs/FileUpload";
import CustomDate from "./form-inputs/CustomDate";

function InpatientForm() {
  const genderItems = [{id: "male", label: "Male"}, {id: "female", label: "Female"}, {id: "other", label: "Other"}]
  return (
    <form className="bg-white flex flex-col pt-[20px] px-[30px] pb-[50px] justify-start gap-[30px]">
      <FileUpload />
      <div className="flex flex-row py-1 px-0 box-border items-start justify-start gap-[20px]">
        <CustomInput label="Bill Type" />
        <CustomDropdown label="State" placeholder="Select State" />
        <CustomDropdown label="Hospital" placeholder="Select Hospital" />
        <CustomDate label="From DOS" />
        <CustomDate label="To DOS" />
      </div>
      <div className="flex flex-row py-1 px-0 box-border items-start justify-start gap-[20px]">
        <CustomDate label="Date of Birth" />
        <CustomRadio radioItems={genderItems} />
        <CustomDropdown label="Admission Source Code" placeholder="Select" />
        <CustomDropdown label="Patient Status Code" placeholder="Select" />
      </div>
    </form>
  )
}

export default InpatientForm;