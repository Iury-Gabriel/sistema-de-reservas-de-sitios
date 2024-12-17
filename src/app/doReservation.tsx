"use client";

import * as React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

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

export function DoReservation() {
  const [date, setDate] = React.useState<Date>();

  const handleReservation = () => {
    if (date) {
      console.log("Data selecionada:", format(date, "yyyy-MM-dd"));
    } else {
      console.log("Nenhuma data foi selecionada.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Reservar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
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
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </form>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleReservation}>
            Fazer reserva
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
