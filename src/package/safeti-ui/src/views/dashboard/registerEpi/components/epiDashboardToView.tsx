import React from "react"

export function EpiDashboardToView() {
    return (
        <>
                <div className="w-[60%] bg-gray-100 rounded-lg border-b-2 border-orange-500 h-[50%]">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="w-1/3 py-3 text-center text-gray-500 border-b border-gray-400">EPi</th>
                                <th className="w-1/3 py-3 text-center text-gray-500 border-b border-gray-400">Data</th>
                                <th className="w-1/3 py-3 text-center text-gray-500 border-b border-gray-400">C.A</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-3 text-center text-gray-900">123456</td>
                                <td className="py-3 text-center text-gray-900">2023-05-14</td>
                                <td className="py-3 text-center text-black">12.34</td>
                            </tr>
                            <tr>
                                <td className="py-3 text-center text-black">789012</td>
                                <td className="py-3 text-center text-black">2023-05-15</td>
                                <td className="py-3 text-center text-black">56.78</td>
                            </tr>
                            <tr>
                                <td className="py-3 text-center text-black">345678</td>
                                <td className="py-3 text-center text-black">2023-05-16</td>
                                <td className="py-3 text-center text-black">90.12</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </>
    )
}