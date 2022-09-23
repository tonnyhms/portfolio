import AntonioIMG from '../assets/eu.jpg'
import { EnvelopeSimple, MapPin, BriefcaseMetal, GitBranch, LinkedinLogo, TwitterLogo, Globe } from 'phosphor-react'
import { ReactNode } from 'react'

export function AsideUser () {

    const itens = [
        {
            'index': 1,
            'imagem': <MapPin size={24}/>,
            'legenda': 'Brasil',
            'alt': 'imagem mapa',
        },
        {
            'index': 2,
            'imagem': <BriefcaseMetal size={24}/>,
            'legenda': 'Eletroflash',
            'alt': 'imagem mala',
        },
        {
            'index': 3,
            'imagem': <GitBranch size={24}/>,
            'legenda': 'tonnyhms',
            'alt': 'imagem github',
        },
        {
            'index': 4,
            'imagem': <LinkedinLogo size={24}/>,
            'legenda': 'antoniohenriquemelo',
            'alt': 'imagem linkedin',
        },
        {
            'index': 5,
            'imagem': <TwitterLogo size={24}/>,
            'legenda': 'antoniohms',
            'alt': 'imagem twitter',
        },
        {
            'index': 6,
            'imagem': <Globe size={24}/>,
            'legenda': 'www.antoniodev.com.br',
            'alt': 'imagem globo',
        },
        {
            'index': 7,
            'imagem': <EnvelopeSimple size={24}/>,
            'legenda': 'anthermelo@hotmail.com',
            'alt': 'imagem carta',
        },
    ]

    const tech = [
        {
            'nome': 'JAVASCRIPT',
        },
        {
            'nome': 'HTML',
        },
        {
            'nome': 'CSS',
        },
        {
            'nome': 'JAVA',
        },
        {
            'nome': 'NODE-RED',
        },
        {
            'nome': 'GITHUB',
        },
        {
            'nome': 'LADDER',
        },
    ]

    return(
        <div className='flex-row'>
            <aside className="h-auto w-80 flex-row ml-10 mt-10 rounded-[20px] justify-center p-2 bg-bg-cards shadow-md shadow-black ">
                <div className="h-32 w-32 flex align-center justify-center m-auto mt-8 rounded-full">
                    <img className="flex h-32 rounded-full border-2 border-[#00ff00]" src={AntonioIMG} alt="Antonio Silva" />
                </div>
                <div className='flex flex-col justify-center text-text-color'>
                    <h1 className='flex text-center justify-center font-bold text-lg my-2'>Antonio Silva</h1>
                    <div className='px-2 mb-5'>
                        <h2 className='flex text-center text-text-color justify-center text-xs'>Consultor de Automação Industrial na Eletroflash</h2>
                        <h2 className='flex justify-center text-center text-text-color text-xs'>Estudante em Desenvolvimento full-stack</h2>
                    </div>
                </div>
            </aside>
            <aside className="h-auto w-80 flex-row ml-[40px] mt-[40px] rounded-[20px] justify-center p-8 bg-bg-cards shadow-md shadow-black">
                <ul className='flex-col'>
                    {
                        itens.map((item) => (
                            item.index!==7 ? 
                                <li className='flex text-text-color text-[16px] text-center mb-3'>
                                    {item.imagem}
                                    <p className='flex ml-5'>{item.legenda}</p>
                                </li>
                            :
                                <li className='flex text-text-color text-[16px] text-center mb-1'>
                                    {item.imagem}
                                    <p className='flex ml-5'>{item.legenda}</p>
                                </li>
                        ))
                    }
                    
                </ul>
            </aside>
            <aside className="h-auto w-80 flex-row ml-[40px] mt-[40px] rounded-[20px] p-7 bg-bg-cards shadow-md shadow-black">
                <h2 className='text-lg text-text-color font-bold mb-2'>Tecnologias</h2>
                <div className='grid grid-cols-3 items-center justify-center gap-2'>
                    {
                        tech.map((tech) => (
                            <div className='bg-[#CB92B1] p-1 mt-2 h-6 w-20 align-middle rounded-3xl text-xs justify-center items-center'>
                                <strong className='flex items-center justify-center'>{tech.nome}</strong>
                            </div>
                        ))    
                        
                    
                    }
                </div>
            </aside>
            <aside className="h-auto w-80 flex-row ml-[40px] mt-[40px] rounded-[20px] p-8 bg-bg-cards shadow-md shadow-black">
                <h2 className='text-lg text-text-color font-bold mb-4'>Experiências</h2>
                <ul className='flex-row justify-start gap-2 list-disc'>
                    <li className='text-text-color mb-2 ml-8'>
                        <p className='text-lg'> DTI - POLI (UPE) </p>
                        <p className='text-sm'> 2013 - 2013 </p>
                        <p className='text-sm'> Estagiário </p>
                    </li>
                    <li className='text-text-color mb-2 ml-8'>
                        <p className='text-lg'> GPRT - UFPE </p>
                        <p className='text-sm'> 2013 - 2014 </p>
                        <p className='text-sm'> Estagiário </p>
                    </li>
                    <li className='text-text-color mb-2 ml-8'>
                        <p className='text-lg'> Eletroflash </p>
                        <p className='text-sm'> 2019 - 2020 </p>
                        <p className='text-sm'> Estagiário </p>
                    </li>
                    <li className='text-text-color ml-8'>
                        <p className='text-lg'> Eletroflash </p>
                        <p className='text-sm'> 2020 - 2022 </p>
                        <p className='text-sm'> Consultor Técnico em Automação Industrial </p>
                    </li>
                </ul>
            </aside>
            <aside className="h-auto w-80 flex-row ml-[40px] mt-[40px] rounded-[20px] p-8 bg-bg-cards shadow-md shadow-black mb-5">
                <h2 className='text-lg text-text-color font-bold mb-4'>Educação</h2>
                <ul className='flex-row justify-start gap-2 list-disc'>
                    <li className='text-text-color mb-2 ml-8'>
                        <p className='text-lg'> UPE </p>
                        <p className='text-sm'> 2013 - 2017 (Incompleto) </p>
                        <p className='text-sm'> Bacharelado em Engenharia da computação </p>
                    </li>
                    <li className='text-text-color mb-2 ml-8'>
                        <p className='text-lg'> SENAI </p>
                        <p className='text-sm'> 2018 - 2019 </p>
                        <p className='text-sm'> Técnico em Automação Industrial </p>
                    </li>
                    <li className='text-text-color ml-8'>
                        <p className='text-lg'> UniFBV </p>
                        <p className='text-sm'> 2022 - Atualmente </p>
                        <p className='text-sm'> Bacharelado em Ciência da Computação </p>
                    </li>
                </ul>
            </aside>
        </div>
    )
}