import { CardInfoPersonal } from "../cardInfoPersonal";
import { CardMyReservation } from "../cardMyReservation";
import { Footer } from "../footer";
import { Header } from "../header";


export default function Page() {
    return (
        <div className="">
            <Header />

            <main className="max-w-7xl mx-auto my-10 px-4">
                <h1 className="text-white text-4xl font-bold mb-5">Meu Perfil</h1>

                <CardInfoPersonal name="Nome Completo" email="Email" phone="Telefone" />

                <h1 className="text-white text-3xl font-bold my-7">Minhas Reservas</h1>

                <CardMyReservation title="Sitio Tijupa" startDate="01/01/2023" endDate="01/01/2023" status="Pendente" price={500} />
                <CardMyReservation title="Sitio Tijupa" startDate="01/01/2023" endDate="01/01/2023" status="Pendente" price={500} />
            </main>

            <Footer />
        </div>
    );
}
