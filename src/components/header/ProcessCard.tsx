interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
}

function ProcessCard({ number, title, description }: ProcessCardProps) {
  return (
    <article className="relative h-full rounded-3xl border border-slate-200 bg-white p-6 pt-10 shadow-sm sm:p-8 sm:pt-11">
      <span className="absolute -top-5 right-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-lg font-black text-white shadow-lg shadow-orange-500/25">
        {number}
      </span>
      <h3 className="text-xl font-black text-slate-950">{title}</h3>
      <p className="mt-3 leading-8 text-slate-600">{description}</p>
    </article>
  );
}

export default ProcessCard;
