import Image from 'next/image';

type Props = {
    title: string;
    startDate: string;
    endDate: string;
    status: string;
    price: number;
};

export function CardMyReservation({ title, startDate, endDate, status, price }: Props) {
    return (
        <div className="bg-[#09090B] max-w-7xl lg:max-w-7xl rounded-xl w-full p-7 border border-[#1C1C1E] hover:bg-[#27272A] mb-2">
            <h1 className='text-2xl font-bold text-white mb-1'>{title}</h1>
            <p className='text-stone-500 text-sm mb-5'>{startDate} a {endDate}</p>

            <p className='text-white font-bold'>Status: <span className='font-normal'>{status}</span></p>

            <button className="bg-stone-900 py-2 px-6 rounded-lg font-bold text-white mt-3">
                Ver Detalhes
            </button>
        </div>
    );
}
