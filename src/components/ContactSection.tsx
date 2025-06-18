
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section className="py-8 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
        <Card className="border-blue-200 bg-white">
          <CardContent className="p-6">
            <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-3">For Any Enquiries</h3>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="mailto:contact@skillmitra.online" className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                contact@skillmitra.online
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
