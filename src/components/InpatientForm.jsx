import CustomDropdown from "./form-inputs/CustomDropdown";
import CustomInput from "./form-inputs/CustomInput";
import CustomRadio from "./form-inputs/CustomRadio";
import FileUpload from "./form-inputs/FileUpload";
import CustomDate from "./form-inputs/CustomDate";
import OtherDxCodesForm from "./OtherDxCodesForm";
import ValueCodesForm from "./ValueCodesForm";
import ProceduresForm from "./ProceduresForm";

function InpatientForm() {
  const genderItems = [
    { id: "male", label: "Male" },
    { id: "female", label: "Female" },
    { id: "other", label: "Other" },
  ];
  const poaItems = [
    { id: "y", label: "Y" },
    { id: "n", label: "N" },
    { id: "u", label: "U" },
    { id: "w", label: "W" },
    { id: "1", label: "1" },
  ];
  return (
    <>
      <div className="bg-white flex flex-col pt-[20px] px-[30px] pb-[50px] justify-start gap-[30px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        <FileUpload />
      </div>
      <div className="bg-white flex flex-col pt-[20px] px-[30px] pb-[50px] justify-start gap-[30px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        <div className="flex flex-row py-1 px-0 box-border items-start justify-start gap-[20px]">
          <CustomInput label="Bill Type" id="billType"/>
          <CustomDropdown label="State" placeholder="Select State" />
          <CustomDropdown label="Hospital" placeholder="Select Hospital" />
          <CustomDate label="From DOS" id="fromDos"/>
          {/* <CustomDate label="To DOS" id="ToDos"/> */}
        </div>
        <div className="flex flex-row py-1 px-0 box-border items-start justify-start gap-[20px]">
          {/* <CustomDate label="Date of Birth" id="dob" /> */}
          {/* <CustomRadio radioItems={genderItems} label="Patient Sex" /> */}
          <CustomDropdown label="Admission Source Code" placeholder="Select" />
          <CustomDropdown label="Patient Status Code" placeholder="Select" />
        </div>
        <div className="flex flex-row py-1 px-0 box-border items-start justify-start gap-[20px]">
          <CustomDropdown label="Condition Code" placeholder="Select" />
          <CustomInput label="Principle PCS Code" id="ppcCode" />
          {/* <CustomDate label="Principle PCS Date" id="ppcDate"/> */}
          <CustomInput label="NPI" id="npi"/>
        </div>
        <div className="flex flex-row py-1 px-0 box-border items-start justify-start gap-[20px]">
          <CustomInput label="Principle DX" id="principleDx"/>
          {/* <CustomRadio radioItems={poaItems} label="POA_P/DX" /> */}
          <CustomInput label="Admit DX" id="admitDx"/>
        </div>
        <div className="flex flex-row py-1 px-0 box-border items-start justify-start gap-[20px]">
          <CustomInput label="Patient Reason DXs" id="patientReasonDx" />
          <CustomInput label="ECIs" id="eci"/>
          <CustomInput label="Other PCS Codes" id="otherPcs"/>
        </div>
      </div>
      <OtherDxCodesForm />
      <ValueCodesForm />
      <ProceduresForm />
    </>
  );
}

export default InpatientForm;
