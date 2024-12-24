"use client";

import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useEffect, useState } from "react";

const VERSION = "0.7.7-beta";
const VERSION_KEY = "app_version";
const CHANGELOG = {
  "0.7.7-beta": {
    name: "Quase lá!",
    changes: [
      "Sistema completo de reservas",
      "Autenticação de usuários",
      "Sistema de planos para proprietários",
    ],
  },
};

export function VersionBadge() {
  const [showChangelog, setShowChangelog] = useState(false);

  useEffect(() => {
    const lastVersion = localStorage.getItem(VERSION_KEY);
    if (lastVersion !== VERSION) {
      setShowChangelog(true);
      localStorage.setItem(VERSION_KEY, VERSION);
    }
  }, []);

  return (
    <>
      <Badge
        className="fixed bottom-4 right-4 cursor-pointer hover:bg-accent"
        onClick={() => setShowChangelog(true)}
      >
        v{VERSION}
      </Badge>

      <Dialog open={showChangelog} onOpenChange={setShowChangelog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold flex items-center gap-2">
              Novidades da versão {VERSION}
              <Badge variant="secondary">{CHANGELOG[VERSION].name}</Badge>
            </DialogTitle>
          </DialogHeader>
          <div className="text-base pt-4 space-y-4">
            <p>Estamos quase prontos para o lançamento oficial! Confira as funcionalidades disponíveis nesta versão beta:</p>
            <ul className="list-disc pl-4 space-y-2">
              {CHANGELOG[VERSION].changes.map((change, index) => (
                <li key={index}>{change}</li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
