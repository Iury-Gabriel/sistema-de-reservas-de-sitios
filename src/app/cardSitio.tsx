"use client"

import Image from 'next/image';
import Link from 'next/link';

type Props = {
    id: string;
    img: string;
    title: string;
    avaliation: number;
    price: number;
    description: string;
};

export function CardSitio({ id, img, title, avaliation, price, description }: Props) {
    return (
        <div className="bg-black rounded-xl w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
            <div className="h-[160px] w-full bg-white rounded-t-xl overflow-hidden">
                <Image
                    src={img}
                    width={640}
                    height={480}
                    alt="Foto do sítio"
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="p-5">
                <h1 className="text-2xl font-bold text-white">{title}</h1>
                <p className="text-stone-500 text-sm my-1">
                    Avaliação: {avaliation}/5 • R$ {price}/dia
                </p>
                <p className="text-white my-6">{description}</p>

                <button className="bg-stone-900 py-2 px-4 rounded-lg font-bold text-white">
                    <Link href={`/sitio/${id}`}>Saiba mais</Link>
                </button>
            </div>
        </div>
    );
}
