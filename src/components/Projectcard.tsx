import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

type ProjectCardProps = {
  link: string;
  image: string;
  title: string;
  description: string;
  tags?: string[];
};

const Projectcard = ({
  link,
  image,
  title,
  description,
  tags = [],
}: ProjectCardProps) => {
  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#e0b15a]/50 hover:bg-white/[0.07]">
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
          <Image
            src={image}
            alt={`${title} project preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title}`}
            className="rounded bg-white/10 p-2 text-[#e0b15a] transition hover:bg-[#e0b15a] hover:text-[#111414]"
          >
            <FiArrowUpRight size={18} />
          </Link>
        </div>
        <p className="text-sm leading-6 text-slate-300">{description}</p>
        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
};

export default Projectcard;
