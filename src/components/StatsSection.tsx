import { stats } from "@/lib/data/homepage";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

export function StatsSection() {
  return (
    <section className="border-y border-border bg-surface py-14 sm:py-16">
      <Container>
        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.06}
              className="text-center"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-3xl font-bold text-gradient sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
              <p className="mt-2 text-sm text-ink/60">{stat.label}</p>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
