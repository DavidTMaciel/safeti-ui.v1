import './style.css';
import imagebody from '../../../img/image-body.png'
import Image from 'next/image'
import banner from '../../../img/banner.png'

export function Body() {
    return (
        <div>

            <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
                <Image
                    alt="Background image"
                    className="w-full h-full object-cover"
                    height="700"
                    src={banner}
                    style={{
                        aspectRatio: "1920/700",
                        objectFit: "cover",
                    }}
                    width="1920"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container px-4 md:px-6 lg:px-8">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-2xl">
                            Maximize a Segurança no Trabalho com Nosso Novo Software de Gestão de Ficha de EPI
                        </h1>
                    </div>
                </div>

            </section>
            <div className='download'>
                <p>Baixe agora para obter acesso imediato às vantagens e recursos exclusivos.</p>
                <button>Download</button>
            </div>
            <section className="w-full py-12 md:py-5 lg:py-10 flex justify-center items-center">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
                    <div className="flex items-center justify-center">
                        <Image
                            alt="Image"
                            className="w-full h-600 object-cover"
                            src={imagebody}
                            style={{
                                aspectRatio: "600/600",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-center md:text-left">EM QUE ACREDITAMOS?</h1>
                        <div>
                            <h2 className="text-2xl font-bold ">Nós acreditamos na inovação:</h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                Na nossa empresa, temos uma crença fundamental que nos guia em tudo o que fazemos: acreditamos no poder da inovação para melhorar a segurança e eficiência nas organizações. Acreditamos que cada desafio é uma oportunidade de criar soluções inteligentes que impulsionam o progresso e tornam o ambiente de trabalho mais seguro e produtivo. Uma dessas soluções é o nosso software de gestão de EPI’S.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Nós acreditamos na inovação:</h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                Acreditamos na simplicidade e na acessibilidade. Nossa missão é fornecer uma solução de gestão que seja fácil de usar e acessível para empresas de todos os tamanhos. Acreditamos que a tecnologia deve ser uma aliada, não uma barreira, para a segurança no local de trabalho. Com nosso software intuitivo, estamos democratizando o acesso a ferramentas avançadas de gestão de riscos, permitindo que todas as organizações protejam seus colaboradores e ativos de maneira eficaz.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Nós acreditamos na inovação:</h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                Acreditamos na simplicidade e na acessibilidade. Nossa missão é fornecer uma solução de gestão que seja fácil de usar e acessível para empresas de todos os tamanhos. Acreditamos que a tecnologia deve ser uma aliada, não uma barreira, para a segurança no local de trabalho. Com nosso software intuitivo, estamos democratizando o acesso a ferramentas avançadas de gestão de riscos, permitindo que todas as organizações protejam seus colaboradores e ativos de maneira eficaz.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Nós acreditamos na inovação:</h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                Acreditamos na simplicidade e na acessibilidade. Nossa missão é fornecer uma solução de gestão que seja fácil de usar e acessível para empresas de todos os tamanhos. Acreditamos que a tecnologia deve ser uma aliada, não uma barreira, para a segurança no local de trabalho. Com nosso software intuitivo, estamos democratizando o acesso a ferramentas avançadas de gestão de riscos, permitindo que todas as organizações protejam seus colaboradores e ativos de maneira eficaz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
