import AntonioIMG from '../assets/eu.jpg'
import { FolderSimple, Star, GitBranch } from 'phosphor-react'

export function AsideContent () {
    return(
        <aside className='max-w-[1400px] h-auto mr-4'>
            <div className="h-auto w-full flex justify-between align-center mr-10 mt-10 rounded-[20px] p-8 bg-bg-cards shadow-md shadow-black self-stretch">
                <h2 className="flex text-text-color text-2xl rounded-full " >My Projects</h2>

                <button className='flex flex-col justify-center ml-[50%] text-text-color text-xl'>See All</button>
            </div>

            <div className='flex-col columns-2 gap-10 align-center justify-between mt-10'>
                <div className="h-auto w-auto flex-row justify-center rounded-[20px] p-8 bg-bg-cards shadow-md shadow-black">
                    <div className='flex grid-flow-col gap-2 align-start items-center'>
                        <FolderSimple size={20} weight={'bold'} color={"#837e9f"}/>
                        <h3 className='text-text-color font-bold flex'>Projeto ETA - Roca Metais - Vitória, PE</h3>
                    </div>
                    <div>
                        <p className='mt-6 text-text-color'>Projeto de retrofit da Estação de Tratamento de Efluentes da Roca Metais situada em Vitória de Santo Antão, Pernambuco.</p>
                    </div>
                    <div className='flex grid-flow-col gap-2 align-start justify-between mt-8'>
                        <div className='flex grid-flow-col gap-2 align-middle items-center justify-center'>
                            <Star size={20} weight={'bold'} color={"#837e9f"}/>
                            <strong className='flex text-text-color mr-2'>100</strong>
                            <GitBranch size={20} weight={'bold'} color={"#837e9f"}/>
                            <strong className='flex text-text-color'>100</strong>
                        </div>
                        <div className='flex grid-flow-col gap-2 items-center'>
                            <div className='w-4 h-4 border-2 border-text-color rounded-full bg-green-600'>

                            </div>
                            <p className='text-text-color'>LADDER</p>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-auto flex-row justify-between align-center rounded-[20px] p-8 bg-bg-cards shadow-md shadow-black">
                    <div className='flex grid-flow-col gap-2 align-start items-center'>
                        <FolderSimple size={20} weight={'bold'} color={"#837e9f"}/>
                        <h3 className='text-text-color font-bold'>Projeto Forno - Roca Metais - Vitória, PE</h3>
                    </div>
                    <div>
                        <p className='mt-6 text-text-color'>Projeto de retrofit dos fornos da Roca Metais situada em Vitória de Santo Antão, Pernambuco.</p>
                    </div>
                    <div className='flex grid-flow-col gap-2 align-start justify-between mt-8'>
                        <div className='flex grid-flow-col gap-2 align-middle items-center justify-center'>
                            <Star size={20} weight={'bold'} color={"#837e9f"}/>
                            <strong className='flex text-text-color mr-2'>100</strong>
                            <GitBranch size={20} weight={'bold'} color={"#837e9f"}/>
                            <strong className='flex text-text-color'>100</strong>
                        </div>
                        <div className='flex grid-flow-col gap-2 items-center'>
                            <div className='w-4 h-4 border-2 border-text-color rounded-full bg-green-600'>

                            </div>
                            <p className='text-text-color'>LADDER</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-auto w-full flex justify-between align-center mr-10 mt-10 rounded-[20px] p-8 bg-bg-cards shadow-md shadow-black self-stretch">
                <h2 className="flex text-text-color text-2xl rounded-full " >Recent Posts</h2>

            </div>
            <div className="h-auto w-full flex align-center mr-10 mt-10 rounded-[20px] p-8 bg-bg-cards shadow-md shadow-black self-stretch">
                <img className="flex h-32 rounded-full" src={AntonioIMG} alt="Antonio Silva" />

                <div className='grid-flow-row ml-5 text-text-color'>
                    <div className='grid-flow-row'>
                        <h3 className='text-lg font-bold flex'>Header do Post</h3>
                        <p className='flex'>1 minuto atrás</p>
                    </div>
                    <div className=''>
                        <p className='mt-4 flex relative'>Post...</p>
                        <div>
                            <ul className='mt-2 items-center inline-flex relative'>
                                <li className='flex'>#hastag1</li>
                                <li className='flex'>#hastag2</li>
                                <li className='flex'>#hastag3</li>
                                <li className='flex'>#hastag4</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}