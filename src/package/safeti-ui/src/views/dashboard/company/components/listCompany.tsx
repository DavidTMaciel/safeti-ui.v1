

export function ListCompany() {
    return (
        <div className="flex flex-col justify-center w-[70%] h-[70%]  rounded-lg border border-gray-300 border-release-form">
            <div className="bg-gray-100 p-6 flex justify-between items-center rounded-t-lg border-b-4 border-orange-500">
                <div className="space-y-1">
                    <h3 className="font-bold text-lg">Microsoft</h3>
                    <p className="text-gray-600 text-sm">CNPJ:20.457.245/0001-01</p>
                </div>
                <p className="text-gray-600 text-sm">Data de Registro: 01/01/2022</p>
            </div>
            <div className="flex-1 p-6 bg-white border-t border-gray-300 rounded-b-lg overflow-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">Total de colaboradores</h3>
                                <p className="text-4xl font-bold text-gray-900 dark:text-gray-50">1,234</p>
                            </div>
                            <UsersIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                        </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">Total de filiais</h3>
                                <p className="text-4xl font-bold text-gray-900 dark:text-gray-50">56</p>
                            </div>
                            <BuildingIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                        </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">Total Usuarios</h3>
                                <p className="text-4xl font-bold text-gray-900 dark:text-gray-50">12,345</p>
                            </div>
                            <UserIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function BuildingIcon(props:any) {
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
  
  
  function UserIcon(props:any) {
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
  
  
  function UsersIcon(props:any) {
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