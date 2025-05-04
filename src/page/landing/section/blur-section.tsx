export default function BlurSection() {
  return (
    <div className="relative w-full h-36 max-md:h-8">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[40vw] bg-[#A0BCB1]/90 blur-3xl max-md:blur-2xl rounded-full pointer-events-none" />
    </div>
  );
}
