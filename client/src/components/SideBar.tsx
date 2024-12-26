import { plus } from "@/app/utils/icons"
import { useCalendar } from "@/context/CalendarContext"
import { useGlobal } from "@/context/GlobalContext"


const SideBar = () => {
    const { formModal, setFormModal } = useGlobal()
    const{dia, mes, año} = useCalendar()
    const horas = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00",]

    const handlesidebar = (e: React.MouseEvent<HTMLButtonElement>) => {
        const selected = e.target as HTMLButtonElement
        const buttons = document.getElementsByClassName("sidebar-btn")
        
        for(let i = 0; i < buttons.length; i++){
            console.log("forloop")
           buttons[i].className = buttons[i].className.replace(" sidebar-selected-btn", "")
        }

        selected.className += " sidebar-selected-btn"

        return
    }

    return (
        <div className="w-[25%] h-[95%] border-red border-2 border-solid">
            <section className="h-[5%] flex justify-between items-center p-5 border-b-2 border-solid border[--grey]">
                <button onClick={handlesidebar} className="sidebar-btn w-full h-full flex flex-col justify-center items-center text-[--grey]">{`Horario para ${dia}/${mes}/${año}`}</button>
                <button onClick={handlesidebar} className="sidebar-btn w-full h-full flex flex-col justify-center items-center text-[--grey] border-r border-l border-dashed border-[--grey]">Hoy</button>
                <button className="sidebar-btn w-full flex justify-center items-center text-[--grey]" onClick={() => formModal ? setFormModal(false) : setFormModal(true)}>
                    {plus}
                </button>
            </section>
            <section className="h-[95%] overflow-y-scroll">
                {
                    horas.map((hora) =>{
                        return(
                            <div key={hora}>
                                <div className="h-[50px] border-b border-dashed border-[--grey] align-center">{hora}</div>
                                <div className="h-[50px] border-b border-solid border-[--grey]"></div>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default SideBar