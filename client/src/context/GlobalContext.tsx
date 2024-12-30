'use client'

import React, { createContext, SetStateAction, ReactNode, useContext, useState } from "react"

interface GlobalState {
    tab: number;
    setTab: React.Dispatch<SetStateAction<number>>;
    formModal: boolean;
    setFormModal: React.Dispatch<SetStateAction<boolean>>;
    handleSidebar(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void; 
  
}

const defaultValue: GlobalState = {
    tab: 1,
    setTab: () => null,
    formModal: false,
    setFormModal: () => null,
    handleSidebar: (e: React.MouseEvent<HTMLButtonElement>) => {
        const selected = e.target as HTMLButtonElement
        const buttons = document.getElementsByClassName("sidebar-btn")
        
        for(let i = 0; i < buttons.length; i++){
           buttons[i].className = buttons[i].className.replace(" sidebar-selected-btn", "")
        }

        selected.className += " sidebar-selected-btn"

        return
    }
}

const GlobalContext = createContext<GlobalState>(defaultValue)

export const GlobalProvider = ({children}: {children: ReactNode}) => {
    const [tab, setTab] = useState<number>(defaultValue.tab)
    const [formModal, setFormModal] = useState<boolean>(defaultValue.formModal)
    const handleSidebar = defaultValue.handleSidebar

    const providerValues = {
        formModal, setFormModal,
        tab, setTab,
        handleSidebar
    }

    return (
        <GlobalContext.Provider value={providerValues}>
            { children }
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => {
    const context = useContext(GlobalContext)

    if(!context){
        throw new Error('useGlobal debe ser usado dentro de DataProvider')
    }

    return context
}