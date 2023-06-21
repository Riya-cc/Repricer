function CustomRadio({ radioItems, label }) {
  return (
    <div className="flex flex-col items-start gap-1 grow">
      <label htmlFor={label} className="px-1 font-normal text-base leading-4 text-darkslategray">{label}</label>
      <div className="flex">
        {radioItems.map((item) => (
          <>
            <div className="flex items-center mr-4" key={item.id}>
              <input
                key={item.id}
                id={item.id}
                type="radio"
                value=""
                name="inline-radio-group"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-black focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor={item.id}
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {item.label}
              </label>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default CustomRadio;
