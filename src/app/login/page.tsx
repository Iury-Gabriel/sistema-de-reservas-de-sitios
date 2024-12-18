"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Header } from "../header"
import { Footer } from "../footer"
import { loginAction } from "@/actions/loginAction"
import { redirect } from "next/navigation"
import { useState } from "react"
import { useRouter } from "next/router"
import { registerAction } from "@/actions/registerAction"


export default function Page() {
    const [error, setError] = useState("");

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        (async () => {
            try {
                const email = e.currentTarget.email.value;
                const password = e.currentTarget.password.value;

                const res = await loginAction({ email, password });

                if (res.status === 200) {
                    redirect('/');
                }
            } catch (error: any) {
                if (error.response) {
                    setError(error.response.data.error === "Invalid credentials" ? "Email ou senha incorretos" : error.response.data.error);
                } else if (error.request) {
                    setError("Nenhuma resposta recebida");
                } else if (error.message === 'NEXT_REDIRECT') {
                    redirect('/');
                } else {
                    setError("Erro ao configurar requisição");
                }
            }
        })();
    };

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        (async () => {
            try {
                const form = e.currentTarget;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                const password = (form.elements.namedItem("password") as HTMLInputElement).value;
                const role = (form.elements.namedItem("role") as HTMLSelectElement).value;

                let roleId = 'cm4u5dj850001tq03d20353nq';
                if(role === 'proprietario') {
                    roleId = 'cm4u5dd8s0000tq03ibqnvo69';
                }

                const res = await registerAction({ email, password, name, roleId });


                if (res.status === 201) {
                    window.location.reload();
                }
            } catch (error: any) {
                if (error.response) {
                    setError(error.response.data.error === "Invalid credentials" ? "Email ou senha incorretos" : error.response.data.error);
                } else if (error.request) {
                    setError("Nenhuma resposta recebida");
                } else if (error.message === 'NEXT_REDIRECT') {
                    redirect('/');
                } else {
                    setError("Erro ao configurar requisição");
                }
            }
        })();
    }


    return (
        <div>
            <main className="max-w-7xl mx-auto my-10 px-4 flex items-center justify-center">
                <Tabs defaultValue="login" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login">Entrar</TabsTrigger>
                        <TabsTrigger value="register">Cadastrar</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <Card>
                            <form onSubmit={handleLogin}>
                                <CardHeader>
                                    <CardTitle>Faça login</CardTitle>
                                    <CardDescription>
                                        Sua porta de entrada para experiências em sitios inesquecíveis
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="seu@email.com" required />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="password">Senha</Label>
                                        <Input id="password" type="password" placeholder="********" required />
                                    </div>
                                    {error && <p className="text-red-500">{error}</p>}
                                </CardContent>
                                <CardFooter>
                                    <Button type="submit">Entrar</Button>
                                </CardFooter>
                            </form>
                        </Card>
                    </TabsContent>
                    <TabsContent value="register">
                        <Card>
                            <form onSubmit={handleRegister}>
                                <CardHeader>
                                    <CardTitle>Cadastro</CardTitle>
                                    <CardDescription>
                                        Sua porta de entrada para experiências em sítios inesquecíveis
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="name">Nome</Label>
                                        <Input id="name" placeholder="Seu nome" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="seu@email.com" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="password">Senha</Label>
                                        <Input id="password" type="password" placeholder="********" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="role">Tipo de Usuário</Label>
                                        <select
                                            id="role"
                                            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-orange-300"
                                        >
                                            <option value="cliente">Cliente</option>
                                            <option value="proprietario">Proprietário de Sítio</option>
                                        </select>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button type="submit">Cadastrar</Button>
                                </CardFooter>
                            </form>
                        </Card>
                    </TabsContent>

                </Tabs>
            </main>

            <div className="fixed bottom-0 left-0 w-full bg-gray-100 shadow-md">
                <Footer />
            </div>
        </div>
    )
}
