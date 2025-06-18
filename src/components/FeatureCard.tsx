
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 border-gray-200 hover:border-blue-300">
      <CardContent className="p-4 text-center">
        <Icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
        <h3 className="font-semibold text-base text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
