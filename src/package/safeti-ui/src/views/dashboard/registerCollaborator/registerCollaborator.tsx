'use client'
import { useState } from "react"
import { HeaderDashboard } from "../home/components/headerDashboard"
import { DasboardNavBar } from "../home/components/navbar"
import './style.css'
import { collaboratorController } from "./registerCollaboratorController"
import { notificationBar } from "@/components/component/notification-bar"

export function RegisterCollaboratorView() {
    const [name, setName] = useState('');
    const [office, setOffice] = useState('');
    const [constructions, setConstructions] = useState('');
    const [company, setCompany] = useState('');
    const [notification, setNotification] = useState<{ message: string, type: string, error: boolean } | null>(null);

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const response = await collaboratorController.createCollaborator(name, office, constructions, company);

        if(response.error){
            setNotification({
                message: response.error,
                type: 'Erro',
                error: true
            });
        }else{
            setNotification({
                message: 'Colaborador cadastrado com sucesso!',
                type: 'Sucesso',
                error: false
            });
        }  
    };

    return (
        <div className="flex h-screen bg-white">
            {notification && notificationBar(notification)}
            <DasboardNavBar />
            <div className="flex-1 justify-center items-center">
                <HeaderDashboard />
                <div className="flex flex-col justify-center items-center h-screen">
                    <h2 className="text-1xl font-bold bg-orange-500 text-white py-2 px-4 rounded-lg ">Cadastro de Colaborador</h2>
                    <form id="registerForm" onSubmit={handleSubmit} className="flex flex-col w-[60%] collaborator-modal rounded-lg border-b-2 border-orange-500 p-8 mb-4 justify-center items-center h-[50%]">
                        <input className="inputField" placeholder="Nome *" value={name} onChange={(e) => setName(e.target.value)} required />
                        <input className="inputField" placeholder="Cargo *" value={office} onChange={(e) => setOffice(e.target.value)} required />
                        <input className="inputField" placeholder="Filial *" value={constructions} onChange={(e) => setConstructions(e.target.value)} required />
                        <select className="inputField text-gray-500s" name="Empresa *" value={company} onChange={(e) => setCompany(e.target.value)} required>
                            <option value="1" className="text-gray-500">1</option>
                            <option value="1" className="text-gray-500">1</option>
                            <option value="3" className="text-gray-500">1</option>
                        </select>
                    </form>
                    <button type="submit" form="registerForm" className="w-[10%] bg-orange-500 text-white rounded-lg py-2 submitButton">Cadastrar</button>
                </div>
            </div>
        </div>
    );
}
