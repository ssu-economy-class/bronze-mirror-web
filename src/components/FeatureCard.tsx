import { Card, CardTitle, CardDescription } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <Card className="max-md:min-w-36 min-w-72 max-md:rounded-2xl max-md:p-4 max-md:gap-1 rounded-3xl text-center p-6 bg-[#0A4031] gap-2 shadow-xl shadow-black/20">
      <CardTitle className="text-white max-md:text-sm text-xl font-bold">
        {title}
      </CardTitle>
      <CardDescription className="text-white max-md:text-[0.5rem] whitespace-pre-line mt-2">
        {description}
      </CardDescription>
    </Card>
  );
}
