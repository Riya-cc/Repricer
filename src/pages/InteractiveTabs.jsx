import InpatientForm from "../components/InpatientForm";

function InteractiveTabs() {
  const tabItems = [{ title: 'Type A Inpatient', id: 'inpatient' }, { title: 'Type A Outpatient', id: 'outpatient' },{title: 'Type B', id: 'type-b'}];
  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
          {tabItems.map((item, index) => (
            <li key={index} className="mr-2 grow focus:border-b-2 focus:border-cadetblue" role="presentation">
              <button className="inline-block p-4 border-b-2 border-transparent font-bold tracking-wider focus:text-cadetblue active:text-cadetblue hover:text-gray-400 text-grey-l3" id={`${item.id}-tab`} data-tabs-target={`#${item.id}`} type="button" role="tab" aria-controls={item.id} aria-selected="false">{ item.title }</button>
            </li>
          ))
          }
        </ul>
      </div>
      <div id="myTabContent">
        <div className="hidden p-4" id="inpatient" role="tabpanel" aria-labelledby="inpatient-tab">
          <InpatientForm />
        </div>
        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
          <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling.</p>
        </div>
        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="outpatient" role="tabpanel" aria-labelledby="outpatient-tab">
          <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling.</p>
        </div>
        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="type-b" role="tabpanel" aria-labelledby="type-b-tab">
          <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling.</p>
        </div>
      </div>

    </>)

}

export default InteractiveTabs;