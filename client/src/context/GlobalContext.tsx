'use client'

import React, { createContext, SetStateAction, ReactNode, useContext, useState } from "react"

interface GlobalState {
    formModal: boolean
    setFormModal: React.Dispatch<SetStateAction<boolean>>
}

const defaultValue: GlobalState = {
    formModal: false,
    setFormModal: () => new Error('No Context Provided')
}

const GlobalContext = createContext<GlobalState>(defaultValue)

export const GlobalProvider = ({children}: {children: ReactNode}) => {
    const [formModal, setFormModal] = useState<boolean>(defaultValue.formModal)

    const providerValues = {
        formModal, setFormModal
    }

    return (
        <GlobalContext.Provider value={providerValues}>
            { children }
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => useContext(GlobalContext)