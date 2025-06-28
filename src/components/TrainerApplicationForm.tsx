
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const TrainerApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    skill: '',
    experience: '',
    fee: '',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.skill || !formData.experience || !formData.fee || !formData.email || !formData.mobile) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    console.log('Trainer Application:', formData);
    toast({
      title: "Application Submitted!",
      description: "We'll review your trainer application and get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      skill: '',
      experience: '',
      fee: '',
      email: '',
      mobile: ''
    });
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold text-gray-900">📋 Become a Trainer</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="trainer-name">Name</Label>
            <Input
              id="trainer-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="trainer-skill">Skill/Subject</Label>
            <Input
              id="trainer-skill"
              name="skill"
              type="text"
              value={formData.skill}
              onChange={handleInputChange}
              placeholder="e.g., React.js, Python, Java"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="trainer-experience">Experience (Years)</Label>
            <Input
              id="trainer-experience"
              name="experience"
              type="number"
              value={formData.experience}
              onChange={handleInputChange}
              placeholder="Years of experience"
              min="0"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="trainer-fee">Per Course Fee (₹)</Label>
            <Input
              id="trainer-fee"
              name="fee"
              type="number"
              value={formData.fee}
              onChange={handleInputChange}
              placeholder="Your course fee in rupees"
              min="0"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="trainer-email">Email</Label>
            <Input
              id="trainer-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="trainer-mobile">Mobile Number</Label>
            <Input
              id="trainer-mobile"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="Your mobile number"
              required
            />
          </div>
          
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Submit Application
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TrainerApplicationForm;
