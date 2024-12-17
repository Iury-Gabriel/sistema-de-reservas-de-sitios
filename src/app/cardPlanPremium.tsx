import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export function CardPlanPremium() {
  return (
    <Card className="w-[370px] bg-[#09090B] border-[#1C1C1E]">
      <CardHeader className="flex justify-center items-center flex-col">
        <CardTitle className="text-white text-2xl text-center">Premium (Recomendado)</CardTitle>
        <CardDescription className="text-[#A1A1AA] text-3xl text-center">R$ 59.90/mês</CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="flex items-center gap-2 text-white"><Check className="mr-1 h-4 w-4 text-secondary" />Anúncio de 1 sítio com destaque</li>
          <li className="flex items-center gap-2 text-white"><Check className="mr-1 h-4 w-4 text-secondary" />Fotos ilimitadas do sítio</li>
          <li className="flex items-center gap-2 text-white"><Check className="mr-1 h-4 w-4 text-secondary" />Posição privilegiada nos resultados de busca</li>
          <li className="flex items-center gap-2 text-white"><Check className="mr-1 h-4 w-4 text-secondary" />Calendário de disponibilidade interativo</li>
          <li className="flex items-center gap-2 text-white"><Check className="mr-1 h-4 w-4 text-secondary" />Reservas instantâneas</li>
          <li className="flex items-center gap-2 text-white"><Check className="mr-1 h-4 w-4 text-secondary" />Relatórios de desempenho do anúncio</li>
          <li className="flex items-center gap-2 text-white"><Check className="mr-1 h-4 w-4 text-secondary" />Suporte prioritário 24/7</li>
        </ul>
      </CardContent>
      <CardFooter className="flex justify-center items-center">
      <Link 
                href={`https://wa.me/5599981036660?text=Olá! Gostaria de contratar o plano premium para anunciar meu sítio.`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
        >
          <Button className="w-full" variant="outline">Contratar Plano</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
