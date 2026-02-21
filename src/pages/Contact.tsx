import { Calendar } from "lucide-react";
import EmplacementContact from "@/components/shared/EmplacementContact";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import CtaBanner from "@/components/shared/CtaBanner";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const Contact = () => {
  return (
    <Layout>
      {/* CTA RDV - Hero style chocolat foncé */}
      <section className="py-20 bg-cta-hover">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-heading">
              Comment prendre rendez-vous en orthodontie ?
            </h1>
            <p className="text-primary-foreground/80 mb-8 text-lg max-w-xl mx-auto">
              Inscription en ligne sur la plateforme, des créneaux de rendez-vous vous seront ensuite proposés.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a
                href={RDV_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Prendre rendez-vous
              </a>
            </Button>
          </div>
        </div>
      </section>

      <EmplacementContact />

      <CtaBanner />
    </Layout>
  );
};

export default Contact;
