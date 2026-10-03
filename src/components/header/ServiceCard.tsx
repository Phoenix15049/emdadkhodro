import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface ServiceCardProps {
  img: string;
  title: string;
  description: string;
  href: string;
}

function ServiceCard({ img, title, description, href }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-slate-950/10">
      <div className="aspect-[16/11] overflow-hidden bg-slate-50 p-5">
        <img
          src={img}
          alt={title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-black text-slate-950">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{description}</p>
        <a href={href} className="mt-5 inline-flex items-center gap-2 font-black text-orange-600 transition group-hover:gap-3" aria-label={`درخواست ${title}`}>
          درخواست این خدمت
          <ArrowLeftIcon className="h-5 w-5" />
        </a>
      </div>
    </article>
  );
}

export default ServiceCard;
