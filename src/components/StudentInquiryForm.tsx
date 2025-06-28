
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const StudentInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    skill: '',
    trainerType: '',
    email: '',
    mobile: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      trainerType: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.skill || !formData.trainerType || !formData.email || !formData.mobile) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    console.log('Student Inquiry:', formData);
    toast({
      title: "Inquiry Submitted!",
      description: "We'll match you with the right trainer and contact you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      skill: '',
      trainerType: '',
      email: '',
      mobile: ''
    });
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold text-gray-900">🎓 Interested in Learning?</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="student-name">Name</Label>
            <Input
              id="student-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="student-skill">Skill You Want to Learn</Label>
            <Input
              id="student-skill"
              name="skill"
              type="text"
              value={formData.skill}
              onChange={handleInputChange}
              placeholder="e.g., React.js, Python, Java"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="student-trainer-type">Preferred Trainer Type</Label>
            <Select onValueChange={handleSelectChange} value={formData.trainerType}>
              <SelectTrigger>
                <SelectValue placeholder="Select trainer type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner-friendly">Beginner Friendly</SelectItem>
                <SelectItem value="interview-expert">Interview Expert</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="student-email">Email</Label>
            <Input
              id="student-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="student-mobile">Mobile / WhatsApp Number</Label>
            <Input
              id="student-mobile"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="Your mobile/WhatsApp number"
              required
            />
          </div>
          
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
            Submit Application
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default StudentInquiryForm;
