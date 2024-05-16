import { HeaderDashboard } from "../home/components/headerDashboard"
import { DasboardNavBar } from "../home/components/navbar"
import background from '../../../img/fundo.jpg'
import './style.css'

export function ReleaseFormView() {
    return (
        <div className="flex h-screen bg-white overflow-hidden">
            <DasboardNavBar />
            <div className="flex-1 justify-center items-center">
                <HeaderDashboard />
                <div className="flex flex-col justify-center w-[80%] h-[80%] ml-[10%] mt-[2%] rounded-lg border border-gray-300 border-release-form">
                    <div className="bg-gray-100 p-6 flex justify-between items-center rounded-t-lg border-b-4 border-orange-500">
                        <div className="space-y-1">
                            <h3 className="font-bold text-lg">Caio Araujo</h3>
                            <p className="text-gray-600 text-sm">Acme Inc - Software Engineer</p>
                        </div>
                        <p className="text-gray-600 text-sm">Admissão: 01/01/2022</p>
                    </div>
                    <div className="flex-1 p-6 bg-white border-t border-gray-300 rounded-b-lg overflow-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="text-left py-2 px-4 border-b border-gray-300">EPI</th>
                                    <th className="text-left py-2 px-4 border-b border-gray-300">Quantidade</th>
                                    <th className="text-left py-2 px-4 border-b border-gray-300">C.A</th>
                                    <th className="text-left py-2 px-4 border-b border-gray-300">Data de Liberação</th>
                                    <th className="text-left py-2 px-4 border-b border-gray-300">Assinatura</th>
                                    <th className="text-left py-2 px-4 border-b border-gray-300">Data de Devolução</th>
                                    <th className="text-left py-2 px-4 border-b border-gray-300">Assinatura</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-b border-gray-300">Capacete</td>
                                    <td className="py-2 px-4 border-b border-gray-300">1</td>
                                    <td className="py-2 px-4 border-b border-gray-300">12345</td>
                                    <td className="py-2 px-4 border-b border-gray-300">01/01/2022</td>
                                    <td className="py-2 px-4 border-b border-gray-300">John Doe</td>
                                    <td className="py-2 px-4 border-b border-gray-300">01/01/2023</td>
                                    <td className="py-2 px-4 border-b border-gray-300">John Doe</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-gray-300">Luvas</td>
                                    <td className="py-2 px-4 border-b border-gray-300">2</td>
                                    <td className="py-2 px-4 border-b border-gray-300">54321</td>
                                    <td className="py-2 px-4 border-b border-gray-300">02/01/2022</td>
                                    <td className="py-2 px-4 border-b border-gray-300">John Doe</td>
                                    <td className="py-2 px-4 border-b border-gray-300">02/01/2023</td>
                                    <td className="py-2 px-4 border-b border-gray-300">John Doe</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-gray-300">Óculos</td>
                                    <td className="py-2 px-4 border-b border-gray-300">1</td>
                                    <td className="py-2 px-4 border-b border-gray-300">67890</td>
                                    <td className="py-2 px-4 border-b border-gray-300">03/01/2022</td>
                                    <td className="py-2 px-4 border-b border-gray-300">John Doe</td>
                                    <td className="py-2 px-4 border-b border-gray-300">03/01/2023</td>
                                    <td className="py-2 px-4 border-b border-gray-300">John Doe</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    )
}