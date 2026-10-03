import { useId, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-right font-black text-slate-950 transition hover:bg-slate-50 sm:px-6"
          aria-expanded={open}
          aria-controls={contentId}
        >
          <span>{question}</span>
          <ChevronDownIcon className={`h-5 w-5 shrink-0 text-orange-600 transition duration-300 ${open ? "rotate-180" : ""}`} />
        </button>
      </h3>
      <div id={contentId} hidden={!open} className="border-t border-slate-200 px-5 py-5 text-sm leading-8 text-slate-600 sm:px-6">
        {answer}
      </div>
    </article>
  );
}

export default FAQItem;
