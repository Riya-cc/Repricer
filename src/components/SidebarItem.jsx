
function SidebarItem({index, title}) {
return(
    <div
        className="flex relative rounded-tl-3xl rounded-bl-3xl w-56 px-1 py-4 hover:bg-white hover:font-medium hover:transition-all duration-500">
        <div
            className="flex justify-center items-center w-2 h-2 rounded-full border-solid border-1 border-darkslategray p-2 my-0 mx-2">
            <span>{index}</span>
        </div>
        <div className="tracking-[1px] text-left flex items-center">
            {title}
        </div>
    </div>
)}

export default SidebarItem;