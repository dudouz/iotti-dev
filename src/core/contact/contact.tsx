// import { SkillsHighlight } from "./skills-highlight";
import { ContactHeader } from "./contact-header";
import { ContactForm } from "./contact-form";

export const Contact = () => {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <ContactHeader />

          <ContactForm />
        </div>

        {/* <SkillsHighlight /> */}
      </div>
    </div>
  );
};
