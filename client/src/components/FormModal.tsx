import { useCalendar } from "@/context/CalendarContext"
import { useGlobal } from "@/context/GlobalContext"


const FormModal = () => {
    const { formModal, setFormModal }  = useGlobal()
    const { dia, mes, año, collectionRequest } = useCalendar()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const form = e.target as HTMLFormElement
        const data = new FormData(form);
        const date = new Date(dia, mes, año)
        data.append("date", `${dia}/${mes}/${año}`)

        try {
           await fetch('http://localhost:8000/api/resource', {
                method: 'POST',
                body: data
            });

            collectionRequest()

            setFormModal(formModal ? false : true)

        } catch (error) {
            console.log(error)
        }
    }    
    
    return (
        <div className="w-full h-full flex flex-col justify-center items-center absolute bg-[--modal]">
            <form onSubmit={handleSubmit} className="h-3/4 w-1/2 bg-[--white] flex flex-col justify-around items-center rounded-2xl">
            <p className="text-[--grey]">{`${dia} / ${mes} / ${año}`}</p>
                <section className="w-full h-[25%] flex justify-around items-center">
                    <div className="w-[45%] h-full flex flex-col justify-evenly items-center bg-[--forms] rounded-lg">
                        <input type="text" name="title" placeholder="título" id="title" className="w-[95%] h-[17%] pl-3 rounded" />
                        <input type="text" name="location" placeholder="ubicación" id="" className="w-[95%] h-[17%] pl-3 rounded" />
                    </div>
                    <div className="w-[45%] h-full flex flex-col justify-evenly items-center bg-[--forms] rounded-lg">
                        <input type="number" name="start" placeholder="empieza" id="start" className="w-[95%] h-[17%] pl-3 rounded" />
                        <input type="number" name="end" id="end" placeholder="termina" className="w-[95%] h-[17%] pl-3 rounded" />
                    </div>
                </section>
                <section className="w-[95%] h-[35%] flex flex-col justify-around items-center bg-[--forms] rounded-lg">
                    <textarea className="w-[95%] h-[70%] p-4 rounded-lg" name="notes" placeholder="notas" id="notas"></textarea>
                </section>
                <section className="w-full h-[7%] flex justify-end items-center">
                    <button type="submit" className="w-[15%] h-full bg-[--forms] mr-10 rounded">Agregar</button>
                    <button className="w-[15%] h-full bg-[--forms] mr-10 rounded" onClick={() => setFormModal(formModal ? false : true) }>Cancelar</button>
                </section>
            </form>
        </div>
    )
}

export default FormModal 