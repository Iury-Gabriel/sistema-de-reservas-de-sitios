import Image from 'next/image';

type Props = {
    name: string;
    email: string;
    phone: string;
};

export function CardInfoPersonal({ name, email, phone }: Props) {
    return (
        <div className="bg-[#09090B] max-w-7xl md:max-w-7xl lg:max-w-7xl rounded-xl w-full p-7 border border-[#1C1C1E]">
            <h1 className='text-3xl font-bold text-white mb-5'>Informações Pessoais</h1>

            <p className='text-white font-bold'>Nome: <span className='font-normal'>{name}</span></p>
            <p className='text-white font-bold'>Email: <span className='font-normal'>{email}</span></p>
            <p className='text-white font-bold'>Telefone: <span className='font-normal'>{phone}</span></p>
        </div>
    );
}
