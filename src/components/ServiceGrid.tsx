import type { Service } from "@/lib/types";
import { ServiceCard } from "@/components/ServiceCard";

export function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <ServiceCard
          key={service.slug}
          slug={service.slug}
          title={service.title}
          tagline={service.tagline}
          icon={<service.icon className="h-6 w-6" aria-hidden="true" />}
          index={index}
        />
      ))}
    </div>
  );
}
