

const SideBar = () => {
    const horas = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00",]
    return (
        <div className="w-[25%] h-[95%] border-red border-2 border-solid">
            <section className="h-1/4 border-b-2 border-solid border[--grey]"></section>
            <section className="h-3/4 overflow-y-scroll">
                {
                    horas.map((hora) =>{
                        return(
                            <div key={hora}>
                                <div className="h-[75px] border-b border-dashed border-[--grey] align-center">{hora}</div>
                                <div className="h-[75px] border-b border-solid border-[--grey]"></div>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default SideBar