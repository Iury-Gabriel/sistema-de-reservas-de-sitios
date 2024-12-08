import { getSitio } from "@/actions/getSitio";
import { Footer } from "../../footer";

type Props = {
    params: { id: string };
};

export default function Page({ site }: { site: any }) {
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

export async function getServerSideProps(context: { params: { id: string } }) {
    const id = context.params.id;
    const site = await getSitio(id);

    return {
        props: { site },
    };
}
