import { useCalendar } from "@/context/CalendarContext"
import { useEffect, useState } from "react";
import EventItem from "./EventItem";


const EventosHoy = () => {
    const { dataCalendario, hoy } = useCalendar();
    const [eventos, setEventos] = useState<Array<any>>([])

    useEffect(() => {
        const data = dataCalendario.data.filter((item) => item.date === hoy);

        setEventos(data)
    },[dataCalendario])


    return (
        <div className="h-full">
            {
                eventos.length > 0 ? eventos.map((item) => {
                    return (
                        <EventItem key={item._id} item={item} />
                    )
                }) :
                <div className="w-full h-[25%] flex justify-center items-center">
                    <p>No Hay Eventos Hoy</p>
                </div>
            }
        </div>
    )
}


export default EventosHoy