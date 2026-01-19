import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "123 Avenue du Panorama\n75008 Paris",
    link: "https://maps.google.com/?q=123+Avenue+du+Panorama+75008+Paris",
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "01 23 45 67 89",
    link: "tel:+33123456789",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@panorama-dentaire.fr",
    link: "mailto:contact@panorama-dentaire.fr",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lun - Ven: 9h - 19h\nSamedi: 9h - 13h",
    link: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-white/80">
              Nous sommes là pour répondre à toutes vos questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Nos Coordonnées
              </span>
              <h2 className="text-3xl font-bold text-foreground mt-3 mb-8">
                Comment nous joindre
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-5 shadow-soft"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line text-sm"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground whitespace-pre-line text-sm">
                        {info.content}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-primary rounded-xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-3">
                  Prenez rendez-vous en ligne
                </h3>
                <p className="text-white/80 mb-6 text-sm">
                  Réservez votre consultation directement sur notre plateforme Doctolib.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a
                    href="https://www.doctolib.fr"
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

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Envoyez-nous un message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Nom complet *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Téléphone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="01 23 45 67 89"
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Sujet
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Demande de RDV, Question..."
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Comment pouvons-nous vous aider ?"
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nous trouver
            </h2>
            <p className="text-muted-foreground">
              Notre cabinet est situé au cœur de Paris, facilement accessible en transport.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-card max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2157707855694!2d2.304955776975677!3d48.870502000274665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4e8f8ee69%3A0x109c73d6e0ce0e47!2sAv.%20des%20Champs-%C3%89lys%C3%A9es%2C%20Paris%2C%20France!5e0!3m2!1sen!2sfr!4v1705600000000!5m2!1sen!2sfr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation du cabinet"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
