
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
        <Card className="border-blue-200 bg-white">
          <CardContent className="p-8">
            <Mail className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">For Any Enquiries</h3>
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
