import BeforeAfterSlider from "@/components/shared/BeforeAfterSlider";
import beforeLingual from "@/assets/before-lingual.jpg";
import afterLingual from "@/assets/after-lingual.jpg";

const cases = [
  {
    title: "Sourires Aligneurs",
    before: beforeLingual,
    after: afterLingual,
  },
  {
    title: "Sourires Lingual",
    before: beforeLingual,
    after: afterLingual,
  },
  {
    title: "Sourires Céramique",
    before: beforeLingual,
    after: afterLingual,
  },
];

const NosSouriresSection = () => {
  return (
    <section className="py-20 bg-cta-hover" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="container mx-auto px-4">
        {/* Title */}
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

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-cta-foreground mb-5">
                {item.title}
              </h3>
              <BeforeAfterSlider
                beforeImage={item.before}
                afterImage={item.after}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosSouriresSection;
