// import type { ReactNode } from "react";


interface ServiceCardProps {
  img: string;
  title: string;
  description: string;
}

function ServiceCard({
  img,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex justify-center text-orange-500">
        <img src={img} alt=""className=" w-50 h-50"/>
      </div>

      <h3 className="mb-3 text-2xl font-bold">{title}</h3>

      <p className="leading-8 text-gray-500">{description}</p>
    </div>
  );
}

export default ServiceCard;