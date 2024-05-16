"use client"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function SubscriptionPage() {
  return (
    <>
      <header className="flex justify-center py-6">
        <MountainIcon className="h-8 w-8" />
      </header>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-orange-500 md:text-3xl">Planos gerais de preços da SafeTI</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Teste grátis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Acesso a todas as funcionalidades</p>
                <p>Suporte 24/7</p>
                <p>Até 5 usuários</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-500 text-white" >
                  Assinar
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Semanal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Acesso a todas as funcionalidades</p>
                <p>Suporte 24/7</p>
                <p>Até 10 usuários</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-500 text-white" >
                  Assinar
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mensal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Acesso a todas as funcionalidades</p>
                <p>Suporte 24/7</p>
                <p>Até 20 usuários</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-500 text-white">
                  Assinar
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Anual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Acesso a todas as funcionalidades</p>
                <p>Suporte 24/7</p>
                <p>Até 50 usuários</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-500 text-white">
                  Assinar
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

function MountainIcon(props:any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
