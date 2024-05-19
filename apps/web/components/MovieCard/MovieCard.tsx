import Image from "next/image";

export const MovieCard = () => {
  return (
    <div className="h-[400px] w-[250px] bg-slate-700 rounded-2xl overflow-hidden">
      <Image
        width="300"
        height="450"
        src="https://gbzjzlnzcwwsiqtrxaxt.supabase.co/storage/v1/object/sign/movieCovers/moonlight.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3ZpZUNvdmVycy9tb29ubGlnaHQuanBlZyIsImlhdCI6MTcxNjEzNjQ1MCwiZXhwIjoyMDMxNDk2NDUwfQ.mlCT114TyREzgVvUDFmSgIzjAm4adgrPOV8hwNlXVCg&t=2024-05-19T16%3A34%3A10.144Z"
        alt="Moonlight"
      />
    </div>
  );
};
