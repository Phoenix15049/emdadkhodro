interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
}

function ProcessCard({
  number,
  title,
  description,
}: ProcessCardProps) {
  return (
    <div className="relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* شماره */}
      <div className="absolute -top-5 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white shadow-lg">
        {number}
      </div>

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-500">
        {description}
      </p>

    </div>
  );
}

export default ProcessCard;