import React from "react"

export function EpiDashboardRegister() {
    return (
        <>
            <form className="flex flex-col w-[60%] bg-gray-200 rounded-lg border-b-2 border-orange-500 p-8 mb-4 justify-center items-center h-[50%] ">
                <input className="rounded-lg border-b-2 mb-4 w-[60%] h-[15%]" placeholder="Colaborador *" />
                <input className="rounded-lg border-b-2 mb-4 w-[60%] h-[15%]" placeholder="EPI" />
                <input className="rounded-lg border-b-2 mb-4 w-[60%] h-[15%]" placeholder="C.A" />               
                <input className="rounded-lg border-b-2 mb-4 w-[60%] h-[15%]" placeholder="Quantidade" />
                <input className="rounded-lg border-b-2 mb-4 w-[60%] h-[15%]" placeholder="Data da liberação" />
            </form>
            <button type="submit" className="w-[10%] bg-orange-500 text-white rounded-lg py-2">Cadastrar</button>
        </>
    )
}