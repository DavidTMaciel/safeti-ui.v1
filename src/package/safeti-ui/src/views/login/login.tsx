import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import logo from '../../img/safetyPNG.png'
import './style.css'

export default function ComponentLogin() {
    return (
        <div className="flex h-screen w-full styleFont">
            <div className="flex w-4/5 items-center justify-center bg-white">
                <div className="w-[600px] space-y-6">
                    <div className="flex items-center">
                        <Image 
                            src={logo} alt="" className="w-20 h-5"/>
                    </div>
                    <p className="text-gray-500 dark:text-gray-600">
                        Bem vindo(a) á Plataforma Safeti! informe seu e-mail
                    </p>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-gray-500  dark:text-gray-400">Email</label>
                            <div>
                                <input id="email" placeholder="m@example.com" required type="email" className="w-full h-13 border border-gray-30 rounded-md"/>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-gray-500  dark:text-gray-400">Password</label>
                                <Link className="text-sm text-orange-500 underline" href="#" >
                                    esqueceu a senha?
                                </Link>
                            </div>
                            <input id="password" required type="password" className="w-full h-15 border border-gray-30 rounded-md" />
                        </div>
                    </div>
                    <Button className="w-40 bg-orange-500 text-white" type="submit">
                        Login
                    </Button>
                </div>
            </div>
            <div className="flex w-1/5 items-center justify-center bg-gray-100 dark:bg-gray-800" />
        </div>
    )
}
