import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function modalAccount() {
  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button   
          className="text-black border-none"
          variant="outline"
        >
          Conta
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Editar Perfil</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-6">
          <div className="flex items-center justify-center">
            <Avatar className="h-24 w-24 bg-gray-300">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <Button
              className="ml-4 bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-900 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus:ring-gray-300"
              variant="outline"
            >
              Trocar Foto
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input defaultValue="Jared Palmer" id="name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input defaultValue="jared@example.com" id="email" type="email" />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input defaultValue="********" id="password" type="password" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            className="bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-500"
            type="submit"
          >
            Confirmar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
