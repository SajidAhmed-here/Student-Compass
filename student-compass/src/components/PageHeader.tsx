import { Photo } from "./Photo";

type Props = {
  title: string;
  lede?: string;
  image?: { src: string; alt: string };
  children?: React.ReactNode;
};

export function PageHeader({ title, lede, image, children }: Props) {
  return (
    <section className="border-b border-line bg-paper pt-20">
      <div
        className={`mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:py-20 ${
          image ? "lg:grid-cols-[7fr_5fr] lg:items-center" : ""
        }`}
      >
        <div className="max-w-3xl">
          <h1 className="text-5xl font-extrabold leading-[1.02] text-green sm:text-6xl">{title}</h1>
          {lede && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{lede}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] rounded-tr-[6rem]">
            <Photo src={image.src} alt={image.alt} sizes="(min-width: 1024px) 40vw, 100vw" priority />
          </div>
        )}
      </div>
    </section>
  );
}
