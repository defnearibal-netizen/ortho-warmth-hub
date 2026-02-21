import { Calendar } from "lucide-react";
import EmplacementContact from "@/components/shared/EmplacementContact";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import CtaBanner from "@/components/shared/CtaBanner";

const RDV_LINK = "https://aribal-portail.orthoadvance.com/#/cabinets/aribal";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Contactez-nous
            </h1>
            <p className="text-lg text-muted-foreground">
              Nous sommes là pour répondre à toutes vos questions.
            </p>
          </div>
        </div>
      </section>

      <EmplacementContact />

      {/* CTA RDV */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold text-primary-foreground mb-3 font-heading">
                Comment prendre rendez-vous en orthodontie ?
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
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
        </div>
      </section>

      <CtaBanner />
    </Layout>
  );
};

export default Contact;
