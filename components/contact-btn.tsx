import React from "react";
import { Button } from "./ui/button";
import { MessageCircleCode } from "lucide-react";
import { whatsappLink } from "@/lib/constants";

const ContactBtn = () => {
  return (
    <div className="fixed z-50 bottom-5 right-3">
      <a
        href={whatsappLink}
        target="__blank"
        rel="noopener noreferrer"
        title="Whatsapp"
      >
        <Button size={"icon"} title="Whatsapp">
          <MessageCircleCode className="text-zinc-100" />
        </Button>
      </a>
    </div>
  );
};

export default ContactBtn;
