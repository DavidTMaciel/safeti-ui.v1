import './style.css'

export function ReleaseFormModal() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <form className="flex flex-col w-[60%] collaborator-modal rounded-lg border-b-2 border-orange-500 p-8 mb-4 justify-center items-center h-[50%]">
                <h2 className='text-2x1 font-bold color-text-release '>Ficha do Colaborador</h2>
                <input className="input-select px-4" placeholder="Selecione *" required />
                <button type="submit" className="w-[20%] bg-orange-500 text-white rounded-lg py-2 submitButton ">Buscar</button>
            </form>
            
        </div>
    )
}