import { HeaderDashboard } from "../home/components/headerDashboard"
import { DasboardNavBar } from "../home/components/navbar"
import './style.css'


export function RegisterCollaboratorView() {
    return (
        <div className="flex h-screen bg-white">
            <DasboardNavBar />
            <div className="flex-1 justify-center items-center">
                <HeaderDashboard />
                <div className="flex flex-col justify-center items-center h-screen">
                <h2 className="text-2xl font-bold bg-orange-500 text-white py-2 px-4 rounded-lg ">Cadastro de Colaborador</h2>
                    <form className="flex flex-col w-[60%] bg-gray-200 rounded-lg border-b-2 border-orange-500 p-8 mb-4 justify-center items-center h-[50%]">
                        <input className="inputField" placeholder="Nome *" required />
                        <input className="inputField" placeholder="Cargo *" required />
                        <input className="inputField" placeholder="Filial *" required />
                        <select className="inputField" name="Empresa *" required>
                            <option value="valor1">Empresa</option>
                            <option value="valor2" selected>Empresa 2</option>
                            <option value="valor3">Empresa 3</option>
                        </select>
                    </form>
                    <button type="submit" className="w-[10%] bg-orange-500 text-white rounded-lg py-2 submitButton">Cadastrar</button>
                </div>
            </div>
        </div>
    )
}

