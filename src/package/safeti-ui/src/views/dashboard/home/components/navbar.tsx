import Link from "next/link"

export function DasboardNavBar() {
    return (
        <div className="bg-white w-[20%] border-r">
            <div className="p-6">
                <h2 className="text-orange-500 font-bold text-lg">Menu Principal</h2>
                <nav className="mt-6 space-y-2">
                    <Link  className="flex items-center gap-2 hover:bg-gray-100 px-4 py-[10%] rounded-md" href={'/web/pages/dashboard'}>
                        <HomeIcon className="w-5 h-5" />
                        <span>Home</span>
                    </Link>
                    <div className="group relative">
                        <Link className="flex items-center gap-2 hover:bg-gray-100 px-4 py-[10%] rounded-md" href="#">
                            <FileIcon className="w-5 h-5" />
                            <span>Cadastro</span>
                            <ChevronRightIcon className="w-5 h-5 ml-auto group-hover:rotate-90 transition-transform" />
                        </Link>
                        <div className="absolute left-full top-0 bg-white shadow-lg rounded-md w-48 mt-2 hidden group-hover:block">
                            <Link className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2"  href={'/web/pages/registerCollaborator'}>
                                <UserIcon className="w-5 h-5" />
                                <span>Cadastrar Colaborador</span>
                            </Link>
                            <Link className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2" href={'/web/pages/dashboard/company'}>
                                <BuildingIcon className="w-5 h-5" />
                                <span>Cadastrar Empresa</span>
                            </Link>
                        </div>
                    </div>
                    <Link className="flex items-center gap-2 hover:bg-gray-100 px-4 py-[10%] rounded-md" href={'/web/pages/dashboard/epiDashboard'}>
                        <BriefcaseIcon className="w-5 h-5" />
                        <span>EPI</span>
                    </Link>
                    <Link className="flex items-center gap-2 hover:bg-gray-100 px-4 py-[10%] rounded-md" href={'/web/pages/dashboard/releaseForm'}>
                        <FileTextIcon className="w-5 h-5" />
                        <span>Ficha do Colaborador</span>
                    </Link>
                    <Link className="flex items-center gap-2 hover:bg-gray-100 px-4 py-[10%] rounded-md" href="#">
                        <UsersIcon className="w-5 h-5" />
                        <span>Colaboradores</span>
                    </Link>
                    <Link className="flex items-center gap-2 hover:bg-gray-100 px-4 py-[10%] rounded-md" href="#">
                        <FileBarChartIcon className="w-5 h-5" />
                        <span>Relatórios</span>
                    </Link>
                </nav>
            </div>
        </div>
    )
}


function BriefcaseIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
    )
}


function BuildingIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
            <path d="M9 22v-4h6v4" />
            <path d="M8 6h.01" />
            <path d="M16 6h.01" />
            <path d="M12 6h.01" />
            <path d="M12 10h.01" />
            <path d="M12 14h.01" />
            <path d="M16 10h.01" />
            <path d="M16 14h.01" />
            <path d="M8 10h.01" />
            <path d="M8 14h.01" />
        </svg>
    )
}


function ChevronRightIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}


function FileBarChartIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M8 18v-2" />
            <path d="M12 18v-4" />
            <path d="M16 18v-6" />
        </svg>
    )
}


function FileIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        </svg>
    )
}


function FileTextIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10 9H8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
        </svg>
    )
}


function HomeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}


function UserIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}


function UsersIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}

