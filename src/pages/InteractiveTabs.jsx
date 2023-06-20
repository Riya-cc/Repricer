import InpatientForm from "../components/InpatientForm";
import OutpatientForm from "../components/OutpatientForm";
import TypeBForm from "../components/TypeBForm";

function InteractiveTabs() {
  const tabItems = [{ title: 'Type A Inpatient', id: 'inpatient', component: InpatientForm}, { title: 'Type A Outpatient', id: 'outpatient', component: OutpatientForm },{title: 'Type B', id: 'type-b', component: TypeBForm}];
  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
          {tabItems.map((item) => (
            <li key={item.id} className="mr-2 grow focus:border-b-2 focus:border-cadetblue" role="presentation">
              <button className="inline-block p-4 border-b-2 border-transparent font-bold tracking-wider focus:text-cadetblue active:text-cadetblue hover:text-gray-400 text-grey-l3" id={`${item.id}-tab`} data-tabs-target={`#${item.id}`} type="button" role="tab" aria-controls={item.id} aria-selected="false">{ item.title }</button>
            </li>
          )
          )}
        </ul>
      </div>
     
      <div id="myTabContent">
        {tabItems.map((item) => (
          <div key={item.id} className="hidden p-4 flex flex-col gap-12" id={item.id} role="tabpanel" aria-labelledby={`${item.id}-tab`}>
            <item.component />
          </div>
        ))}
      </div>

    </>)

}

export default InteractiveTabs;