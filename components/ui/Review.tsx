import { cn } from "@/lib/utils";
import { Marquee } from "./marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Sara",
    username: "@sara",
    body: "Simply brilliant! The animations feel alive.",
    img: "https://avatar.vercel.sh/sara",
  },
  {
    name: "David",
    username: "@david",
    body: "This is pure magic — elegant and smooth.",
    img: "https://avatar.vercel.sh/david",
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit cursor-pointer overflow-hidden rounded-2xl border p-8 sm:w-72 backdrop-blur-2xl",
        "border-blue-400/40 bg-linear-to-br from-blue-900/50 via-slate-900/40 to-blue-950/30 hover:from-blue-800/60 hover:via-slate-800/50 transition-all duration-500",
        "shadow-2xl hover:shadow-blue-500/30 hover:shadow-3xl float animate-float mt-2 mb-2"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img
          className="rounded-full ring-2 ring-blue-400/60"
          width="40"
          height="40"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-blue-300/80">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-gray-100">
        {body}
      </blockquote>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[700px] w-full flex-row items-center justify-center overflow-hidden rounded-[42px] border border-white/5 bg-[#081b58]/60">
      <Marquee
        pauseOnHover
        vertical
        className="[--duration:18s] [--gap:2rem] p-2 mt-3"
      >
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        vertical
        className="[--duration:18s] [--gap:4rem]"
      >
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Soft fade masks to hide the marquee edges */}
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-40 bg-gradient-to-b from-[#081b58] via-[#081b58]/80 to-transparent blur-xl"></div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-16 h-40 bg-gradient-to-t from-[#081b58] via-[#081b58]/80 to-transparent blur-xl"></div>
      <div className="pointer-events-none absolute inset-y-0 -left-16 w-40 bg-gradient-to-r from-[#081b58] via-[#081b58]/60 to-transparent blur-xl"></div>
      <div className="pointer-events-none absolute inset-y-0 -right-16 w-40 bg-gradient-to-l from-[#081b58] via-[#081b58]/60 to-transparent blur-xl"></div>

      {/* Corner glows for a vignette effect */}
      <div className="pointer-events-none absolute -top-12 -left-12 h-48 w-48 bg-gradient-radial from-[#0b1f66]/60 via-transparent to-transparent blur-3xl"></div>
      <div className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 bg-gradient-radial from-[#0b1f66]/60 via-transparent to-transparent blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 bg-gradient-radial from-[#0b1f66]/60 via-transparent to-transparent blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 bg-gradient-radial from-[#0b1f66]/60 via-transparent to-transparent blur-3xl"></div>
    </div>
  );
}
