'use client'
import { useState } from "react"
import { HeaderDashboard } from "../home/components/headerDashboard"
import { DasboardNavBar } from "../home/components/navbar"
import { ListCompany } from "./components/listCompany"
import { RegisterCompany } from "./components/registerCompany"

export function CompanyView() {

    const [viewSelect, setViewSelect] = useState(false)
    const [company, setCompany] = useState(true)

    function handleChangeModalListCompany() {
        setCompany(false)
        setViewSelect(true)
    }

    function handleChangeModalRegisterCompany() {
        setCompany(true)
        setViewSelect(false)
    }


    return (
        <div className="flex h-screen bg-white overflow-hidden">
            <DasboardNavBar />
            <div className="flex-1 justify-center items-center">
                <HeaderDashboard />
                <div className="flex flex-col justify-center items-center h-screen">
                    <div>
                        <button className={`text-1xl font-bold ${!viewSelect ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-500'}  py-1 px-4 rounded-t-lg`} onClick={handleChangeModalRegisterCompany}>Registrar EPI</button>
                        <button className={`text-1xl font-bold ${viewSelect ? 'bg-orange-500 text-white' : 'bg-gray-100  text-gray-500'}  py-1 px-4 rounded-t-lg`} onClick={handleChangeModalListCompany}>Visualizar</button>
                    </div>
                    {viewSelect && <ListCompany />}
                    {company && <RegisterCompany />}
                </div>
            </div>
        </div>
    )
}