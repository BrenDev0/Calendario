import { list, plus } from "@/utils/icons"
import { useCalendar } from "@/context/CalendarContext"
import { useGlobal } from "@/context/GlobalContext"
import EventosHoy from "./EventosHoy"
import TodosEventos from "./TodosEventos"
import Eventos from "./Eventos"


const SideBar = () => {
    const { formModal, setFormModal, handleSidebar, tab, setTab } = useGlobal()
    const{dia, mes, año, hoy, resetCalendar, isLoading} = useCalendar()

    return (
      isLoading ? <div className="lg:w-[25%] lg:h-[95%] w-full h-[45%]  lg:order-first order-last flex justify-center items-center text-[--white] text-3xl border-[--grey] border-2 border-solid bg-[--forms] rounded-2xl">Loading....</div> :
        <div className="lg:w-[25%] w-full lg:h-[95%] h-[45%] lg:order-first order-last">
            <section className="h-[10%] flex justify-between items-center border-b-2 border-solid border[--grey]">
                {
                    hoy === `${dia}/${mes}/${año}` ? <div className="sidebar-btn w-full h-full flex flex-col justify-center items-center text-[--grey]"></div> : <button onClick={() =>{handleSidebar; setTab(3)}} className="sidebar-btn w-full h-full flex flex-col justify-center items-center text-[--grey] sidebar-selected-btn">{`${dia}/${mes}/${año}`}</button>
                }
                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {handleSidebar(e); setTab(2)}} className="sidebar-btn w-full h-full flex flex-col justify-center items-center text-[--grey] border-r border-l border-dashed border-[--grey]">{list}</button>
                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    handleSidebar(e); 
                    setTab(1);
                    resetCalendar()
                    
                }} className="sidebar-btn w-full h-full flex flex-col justify-center items-center text-[--grey] border-r border-l border-dashed border-[--grey] sidebar-selected-btn">Hoy</button>
                <button className="sidebar-btn w-full h-full flex justify-center items-center text-[--grey]" onClick={() => setFormModal(formModal ? false : true)}>
                    {plus}
                </button>
            </section>
            <section className="h-[90%] overflow-y-scroll">
                {
                     tab === 1 ? <EventosHoy /> 
                     : tab == 2 ? <TodosEventos /> 
                     : <Eventos />
                }
            </section>
        </div>
    )
}

export default SideBar