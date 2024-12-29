import { useCalendar } from "@/context/CalendarContext"
import EventItem from "./EventItem";


const TodosEventos = () => {
    const { dataCalendario } = useCalendar();

    return (
        <div className="h-full overflow-scroll">
            {
                dataCalendario.data ? dataCalendario.data.map((item) => {
                    return (
                        <EventItem key={item._id} item={item} /> 
                    )
                }) :
                <div>
                    <p>No Hay Eventos</p>
                </div>
            }
        </div>
    )
}

export default TodosEventos