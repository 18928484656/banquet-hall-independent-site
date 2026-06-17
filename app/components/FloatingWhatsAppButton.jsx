import { MessageCircle } from "lucide-react";
import { company } from "../data/company";

export default function FloatingWhatsAppButton() {
  return (
    <a
      className="floating-whatsapp"
      href={company.whatsappLeadHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with DINGSHENG on WhatsApp"
    >
      <MessageCircle size={30} strokeWidth={2.4} />
      <span>WhatsApp</span>
    </a>
  );
}
