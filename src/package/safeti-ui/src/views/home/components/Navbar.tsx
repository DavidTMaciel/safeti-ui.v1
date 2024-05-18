import Image from 'next/image'
import logo from '../../../img/safetyPNG.png'
import './Navbar.css'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Navbar() {
    return (
        <div>
            <header className="flex items-center justify-between h-16 px-4 md:px-6">
                <Link className="flex items-center" href="#">
                    <Image src={logo} alt='Logo da empresa cujo o nome é SafeTy' className='logo w-20 h-5' />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-8">
                    <Link className="text-lg  font-medium hover:underline underline-offset-4" href="#">
                        Home
                    </Link>
                    <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
                        Assine
                    </Link>
                    <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
                        Preços
                    </Link>
                    <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
                        Software
                    </Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white" variant="outline"><Link href={'/web/pages/login'}>Login</Link></Button>
                </div>
            </header>
        </div>
    )
}
