import { useCalendar } from "@/context/CalendarContext"
import { useGlobal } from "@/context/GlobalContext"
import { useState } from "react"

const FormModal = () => {
    const { formModal, setFormModal }  = useGlobal()
    const { dia, mes, año } = useCalendar()

    const [formData, setFormDate] = useState<object>({
        day: dia,
        month: mes,
        year: año,
        title: "",
        location: "",
        start: "",
        end: "",
        notes: ""
    })
    
    return (
        <div className="w-full h-full flex flex-col justify-center items-center absolute bg-[--modal]">
            <form method="post" className="h-3/4 w-1/2 bg-[--white] flex flex-col justify-around items-center rounded-2xl">
            <p className="text-[--grey]">{`${dia} / ${mes} / ${año}`}</p>
                <section className="w-full h-[25%] flex justify-around items-center">
                    <div className="w-[45%] h-full flex flex-col justify-evenly items-center bg-[--forms] rounded-lg">
                        <label htmlFor="title">Título</label>
                        <input type="text" name="title" placeholder="título" id="title" className="w-[95%] h-[17%] pl-3 rounded" />
                        <label htmlFor="location">Ubicación</label>
                        <input type="text" name="location" placeholder="ubicación" id="" className="w-[95%] h-[17%] pl-3 rounded" />
                    </div>
                    <div className="w-[45%] h-full flex flex-col justify-evenly items-center bg-[--forms] rounded-lg">
                        <label htmlFor="start">Empieza</label>
                        <input type="text" name="start" placeholder="empieza" id="start" className="w-[95%] h-[17%] pl-3 rounded" />
                        <label htmlFor="end">Termina</label>
                        <input type="text" name="end" id="end" placeholder="termina" className="w-[95%] h-[17%] pl-3 rounded" />
                    </div>
                </section>
                <section className="w-[95%] h-[35%] flex flex-col justify-around items-center bg-[--forms] rounded-lg">
                    <label htmlFor="notas">Notas</label>
                    <textarea className="w-[95%] h-[70%] p-4 rounded-lg" name="notes" placeholder="notas" id="notas"></textarea>
                </section>
                <section className="w-full h-[5%] flex justify-end items-center">
                    <button type="submit" className="w-[15%] h-full bg-[--forms] mr-10  rounded">Agregar</button>
                    <button className="w-[15%] h-full bg-[--forms] mr-10  rounded" onClick={() => formModal ? setFormModal(false) : setFormModal(true) }>Cancelar</button>
                </section>
            </form>
        </div>
    )
}

export default FormModal