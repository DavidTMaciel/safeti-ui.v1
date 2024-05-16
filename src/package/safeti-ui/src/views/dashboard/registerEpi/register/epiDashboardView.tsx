"use client"
import { HeaderDashboard } from "../../home/components/headerDashboard"
import { DasboardNavBar } from "../../home/components/navbar"
import { EpiDashboardRegister } from "../components/epiDashboardRegister"
import React from "react"
import { useState } from "react"
import { EpiDashboardToView } from "../components/epiDashboardToView"

export function EpiDashboardView() {

    const [viewSelect, setViewSelect] = useState(false)
    const [resgisterEpi, setRegisterEpi] = useState(true)

    function handleChangeModalEpi() {
        setRegisterEpi(false)
        setViewSelect(true)
    }

    function handleChangeModalRegister() {
        setRegisterEpi(true)
        setViewSelect(false)
    }

    return (
        <div className="flex h-screen bg-white overflow-hidden">
            <DasboardNavBar />
            <div className="flex-1 justify-center items-center">
                <HeaderDashboard />
                <div className="flex flex-col justify-center items-center h-screen">
                    <div>
                        <button className={`text-2xl font-bold ${!viewSelect ? 'bg-orange-500' : 'bg-gray-400 text-gray-700'} text-white py-1 px-4 rounded-t-lg`} onClick={handleChangeModalRegister}>Registrar EPI</button>
                        <button className={`text-2xl font-bold ${viewSelect ? 'bg-orange-500' : 'bg-gray-400  text-gray-700'} text-white py-1 px-4 rounded-t-lg`} onClick={handleChangeModalEpi}>Visualizar</button>
                    </div>
                    {viewSelect && <EpiDashboardToView />}
                    {resgisterEpi && <EpiDashboardRegister />}

                </div>
            </div>
        </div>
    )
}