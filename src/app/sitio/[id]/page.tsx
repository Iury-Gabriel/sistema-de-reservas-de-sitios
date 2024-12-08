import { getSitio } from "@/actions/getSitio";
import { Footer } from "../../footer";

interface SitioPageProps {
    params: {
        id: string;
    };
}

export default async function Page({ params }: SitioPageProps) {
    const { id } = params;

    const site = await getSitio(id);

    return (
        <div className="">
            <main className="max-w-7xl mx-auto my-10 px-4">
                <h1 className="text-white text-4xl font-bold mb-5">{site.name}</h1>
            </main>

            <div className="fixed bottom-0 left-0 w-full bg-gray-100 shadow-md">
                <Footer />
            </div>
        </div>
    );
}
