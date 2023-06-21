function DynamicInput({label, id}) {
return (
<>
  <div className="flex flex-col items-start gap-1 grow">
      <label  className="px-1 font-normal text-base leading-4 text-darkslategray">{label}</label>
      <input type="text" id={id} className="border-2 border-lightsteelblue text-darkslategray text-sm rounded-lg focus:ring-slate-blue-l2 focus:border-slate-blue-l2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-blue-l2 dark:focus:border-slate-blue-l2"
      placeholder="" required />
  </div>
</>
);
}

export default DynamicInput;