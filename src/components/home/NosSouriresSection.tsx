import BeforeAfterSlider from "@/components/shared/BeforeAfterSlider";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";

const cases = [
  { before: before1, after: after1, beforeScale: 0.75 },
  { before: before2, after: after2 },
  { before: before3, after: after3 },
];

const NosSouriresSection = () => {
  return (
    <section className="py-20 bg-cta-hover" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-cta-foreground mb-6"
            style={{ fontFamily: "'Tenor Sans', serif" }}
          >
            Nos sourires
          </h2>
          <p className="text-cta-foreground/80 text-base md:text-lg leading-relaxed">
            Voici une sélection de cas avant/après réalisés par notre cabinet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((item, index) => (
            <div key={index}>
              <BeforeAfterSlider
                beforeImage={item.before}
                afterImage={item.after}
                beforeScale={item.beforeScale}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosSouriresSection;
