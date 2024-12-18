"use client";

import * as React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import Cookies from "js-cookie";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createReservation } from "@/actions/createReservation";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

type Props = {
  siteId: string;
  pricePerDay: string;
};

export type Response = {
  success: boolean;
  message: string;
  status: number;
};

export function DoReservation({ siteId, pricePerDay }: Props) {
  const [date, setDate] = React.useState<Date>();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleReservation = async () => {
    if (date) {
      setIsLoading(true);
      console.log("Data selecionada:", format(date, "yyyy-MM-dd"));
      const token = Cookies.get("authToken");
      const userCookie = Cookies.get("user");

      if (!token && !userCookie) {
        redirect("/login");
      }

      if (userCookie) {
        try {
          const parsedUser = JSON.parse(userCookie);

          const res: Response = await createReservation({
            userId: parsedUser.userId,
            siteId,
            dataReservation: date,
            dataCheckout: date,
            total: pricePerDay,
          });

          if (res.message === "Já existe uma reserva para este período.") {
            setIsLoading(false);
            toast(
              "Já existe uma reserva para este período. Escolha outra data",
              { type: "error" }
            );
          }

          if (res.status === 201) {
            console.log("Reserva criada com sucesso!");
            Cookies.set("reservation", "success", {
              expires: 5 / 86400,
              secure: true,
            });
            setIsLoading(false);
            window.location.href = "/perfil";
          }
        } catch (error) {
          setIsLoading(false);
          console.error("Failed to parse user cookie:", error);
        }
      }
    } else {
      console.log("Nenhuma data foi selecionada.");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Reservar</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] max-w-[90%]">
          <DialogHeader>
            <DialogTitle>Fazer reserva</DialogTitle>
            <DialogDescription>
              Preencha os campos abaixo para fazer uma reserva
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <form action="" method="post">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                      format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                    ) : (
                      <span>Clique para escolher uma data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    locale={ptBR}
                  />
                </PopoverContent>
              </Popover>
            </form>
          </div>
          <DialogFooter>
            <Button
              type="button"
              onClick={handleReservation}
              className="relative flex items-center justify-center px-4 py-2 text-white rounded-md focus:outline-none"
            >
              {isLoading ? (
                <div className="absolute w-4 h-4 border-2 border-t-white border-black rounded-full animate-spin"></div>
              ) : (
                "Reservar"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
