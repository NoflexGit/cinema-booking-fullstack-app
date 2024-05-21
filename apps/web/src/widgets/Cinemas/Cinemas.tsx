'use client';

import Link from 'next/link';

type Props = {
  cinemas: Array<{
    id: string;
    name: string;
    address: string;
    city: string;
    phone: string;
  }>;
};

export const Cinemas = ({ cinemas }: Props) => {
  return (
    <section className="container mx-auto px-4">
      <h3 className="text-xl font-semibold text-white">Cinemas</h3>
      <div className="flex gap-4">
        {cinemas.map((cinema: any) => (
          <div className="group relative h-[350px] flex-1 overflow-hidden rounded-2xl shadow-xl odd:mt-12">
            <Link href={`/cinemas/${cinema.id}`} key={cinema.id}>
              <div
                className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform group-hover:scale-110"
                style={{
                  backgroundImage: `url(${cinema.media})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 opacity-60" />
              <div className="absolute bottom-0 left-0 z-10 p-4">
                <h4 className="text-lg text-white">{cinema.name}</h4>
                <p className="mt-2 text-sm text-slate-300">{cinema.address}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
