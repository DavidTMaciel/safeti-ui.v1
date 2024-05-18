import React from "react"

export function RegisterCompany() {
    return (
        <>
            <form className="flex flex-col w-[60%] bg-gray-100 rounded-lg border-b-2 border-orange-500 p-8 mb-4 justify-center items-center h-[50%] ">
                <input className="rounded-lg border-b-2 mb-4 w-[60%] h-[15%] px-4" placeholder="Nome da empresa *" required/>
                <input className="rounded-lg border-b-2 mb-4 w-[60%] h-[15%] px-4" placeholder="CNPJ*" required/>
            </form>
            <button type="submit" className="w-[10%] bg-orange-500 text-white rounded-lg py-2">Cadastrar</button>
        </>
    )
}