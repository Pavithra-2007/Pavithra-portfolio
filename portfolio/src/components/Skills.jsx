import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Tools I build with."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {skills.map((skill, i) => {
            const Icon = skill.icon;

            return (
              <Reveal key={skill.name} delay={i * 35}>
                <div
                  className="
                    group
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    p-6
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-4
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-blue-600
                    hover:shadow-xl
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-xl
                      bg-gray-100
                      transition-all
                      duration-300
                      group-hover:bg-blue-50
                      group-hover:scale-110
                    "
                  >
                    <Icon
  size={30}
  style={{ color: skill.color }}
/>
                  </div>

                  <h3 className="text-sm font-semibold text-gray-800">
                    {skill.name}
                  </h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}