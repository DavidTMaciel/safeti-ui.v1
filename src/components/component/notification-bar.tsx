 interface notificationBarProps {
  message: string
  type: string
  error: boolean
}

export function notificationBar(data : notificationBarProps) {
  return (
    <div className="fixed top-4 right-4 z-50 w-full max-w-sm rounded-md border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-start gap-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-500 text-white dark:bg-green-600">
         {data.error ? <TriangleAlertIcon className="h-5 w-5" /> : <CheckIcon className="h-5 w-5" />} 
        </div>
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium">{data.type}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{data.message}</p>
        </div>
      </div>
    </div>
  )
}

function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}



function TriangleAlertIcon(props:any) {
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
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}

