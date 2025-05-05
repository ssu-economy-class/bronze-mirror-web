import { Card, CardTitle, CardDescription } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <Card className="max-md:min-w-64 min-w-88 max-md:rounded-2xl max-md:p-4 max-md:gap-1 rounded-3xl text-center p-6 bg-[#0A4031] gap-2 shadow-xl shadow-black/20">
      <CardTitle className="text-white max-md:pt-2 max-md:text-[1.2rem] text-2xl font-bold">
        {title}
      </CardTitle>
      <CardDescription className="max-md:pb-2 text-white text-[1rem] max-md:text-[0.8rem] max-md:mt-0.5 whitespace-pre-line mt-2">
        {description}
      </CardDescription>
    </Card>
  );
}
