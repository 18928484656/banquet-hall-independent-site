import { Database, MailCheck, ShieldCheck, Sparkles } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import InquiryForm from "./InquiryForm";

export const metadata = {
  title: "Project Inquiry | DINGSHENG Banquet Hall Design Solution",
  description:
    "Submit your banquet hall, wedding venue, hotel ballroom renovation or event center project inquiry to Guangdong Dingsheng Design Co., Ltd."
};

export default function InquiryPage() {
  return (
    <main>
      <SiteHeader />
      <section className="b2b-inquiry-page">
        <div className="inquiry-visual-panel">
          <p className="eyebrow">B2B Project Inquiry</p>
          <h1>Start your banquet hall project consultation.</h1>
          <p>
            Send your basic project details. DINGSHENG will review your venue type, country, style
            direction, construction scope and operation goals before replying with the next-step proposal path.
          </p>
          <div className="inquiry-proof-grid">
            <span>
              <Sparkles size={18} />
              Luxury banquet hall design
            </span>
            <span>
              <ShieldCheck size={18} />
              EPC turnkey project support
            </span>
            <span>
              <MailCheck size={18} />
              Routed to project consultant
            </span>
            <span>
              <Database size={18} />
              Stored for CRM follow-up
            </span>
          </div>
        </div>
        <div className="inquiry-card-wrap">
          <div className="inquiry-card-heading">
            <span>Free Design Proposal</span>
            <h2>Tell us what you want to build.</h2>
            <p>Fields marked with * are required. International phone formats are supported.</p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
