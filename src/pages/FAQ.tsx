import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";

const faqCategories = [
  {
    category: "Général",
    questions: [
      {
        question: "À partir de quel âge peut-on consulter un orthodontiste ?",
        answer: "Nous recommandons une première consultation dès l'âge de 7 ans. À cet âge, l'orthodontiste peut détecter d'éventuels problèmes de croissance des mâchoires et commencer un traitement précoce si nécessaire.",
      },
      {
        question: "L'orthodontie est-elle possible à l'âge adulte ?",
        answer: "Absolument ! Il n'y a pas de limite d'âge pour un traitement orthodontique. Nous proposons des solutions adaptées aux adultes, notamment les aligneurs invisibles très discrets au quotidien.",
      },
      {
        question: "Combien de temps dure un traitement orthodontique ?",
        answer: "La durée varie selon la complexité du cas. En moyenne, comptez entre 12 et 24 mois. Lors de la première consultation, nous vous donnerons une estimation précise pour votre situation.",
      },
    ],
  },
  {
    category: "Traitements",
    questions: [
      {
        question: "Quelle est la différence entre les bagues et les aligneurs ?",
        answer: "Les bagues (brackets) sont fixées sur les dents et reliées par un fil métallique. Elles sont très efficaces pour tous les cas. Les aligneurs sont des gouttières transparentes amovibles, plus discrètes mais adaptées à certains cas spécifiques.",
      },
      {
        question: "Les aligneurs invisibles sont-ils aussi efficaces ?",
        answer: "Oui, pour les cas adaptés, les aligneurs offrent d'excellents résultats. Ils sont particulièrement efficaces pour les malpositions légères à modérées. Nous évaluons chaque cas pour vous proposer la solution la plus adaptée.",
      },
      {
        question: "Est-ce que le traitement fait mal ?",
        answer: "Vous pouvez ressentir une légère gêne ou tension après la pose de l'appareil ou après les ajustements. Cette sensation disparaît généralement en quelques jours. Des antalgiques classiques suffisent à soulager.",
      },
      {
        question: "Puis-je continuer mes activités sportives ?",
        answer: "Oui, mais nous recommandons de porter un protège-dents pour les sports de contact. Pour les aligneurs, vous pouvez les retirer pendant l'activité sportive.",
      },
    ],
  },
  {
    category: "Aspects pratiques",
    questions: [
      {
        question: "Comment prendre rendez-vous ?",
        answer: "Vous pouvez prendre rendez-vous en ligne via Doctolib, par téléphone au 01 23 45 67 89, ou directement au cabinet. Nous vous répondrons dans les meilleurs délais.",
      },
      {
        question: "Que dois-je apporter lors de ma première visite ?",
        answer: "Apportez votre carte vitale, votre mutuelle, et si possible les radiographies dentaires récentes. N'oubliez pas le carnet de santé pour les enfants.",
      },
      {
        question: "Proposez-vous des facilités de paiement ?",
        answer: "Oui, nous proposons des plans de paiement échelonnés adaptés à votre situation. N'hésitez pas à en discuter avec notre secrétariat lors de votre première visite.",
      },
      {
        question: "Les traitements sont-ils remboursés ?",
        answer: "La Sécurité sociale prend en charge une partie du traitement pour les patients de moins de 16 ans. Les mutuelles complètent généralement ce remboursement. Pour les adultes, seules certaines mutuelles remboursent partiellement.",
      },
    ],
  },
  {
    category: "Pendant le traitement",
    questions: [
      {
        question: "Quels aliments dois-je éviter ?",
        answer: "Évitez les aliments durs (pommes entières, carottes crues, noix), collants (caramel, chewing-gum) et les boissons sucrées. Coupez les aliments en petits morceaux avant de les manger.",
      },
      {
        question: "Comment nettoyer mes dents avec un appareil ?",
        answer: "Brossez-vous les dents après chaque repas avec une brosse adaptée. Utilisez des brossettes interdentaires pour nettoyer autour des brackets. Nous vous montrerons les techniques lors de la pose.",
      },
      {
        question: "Que faire si un bracket se décolle ?",
        answer: "Conservez le bracket et appelez-nous pour un rendez-vous. En attendant, appliquez de la cire orthodontique si le fil vous gêne. Ce n'est pas une urgence absolue sauf si vous ressentez une douleur.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Questions Fréquentes
            </h1>
            <p className="text-xl text-white/80">
              Retrouvez les réponses aux questions les plus courantes sur l'orthodontie.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${catIndex}-${index}`}
                      className="bg-white rounded-xl shadow-soft border-none px-6"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Vous avez d'autres questions ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            N'hésitez pas à nous contacter ou à prendre rendez-vous pour une consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="cta" size="lg" asChild>
              <a
                href="https://aribal-portail.orthoadvance.com/#/cabinets/aribal"
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
    </Layout>
  );
};

export default FAQ;
