import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({
  question,
  answer,
}: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white">

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-right"
      >
        <span className="text-lg font-bold">
          {question}
        </span>

        <ChevronDownIcon
          className={`h-6 w-6 transition duration-300 ${
            open ? "rotate-180 text-orange-500" : ""
          }`}
        />
      </button>

      {open && (
        <div className="border-t border-gray-200 px-6 pb-6">
          <p className="pt-4 leading-8 text-gray-500">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default FAQItem;