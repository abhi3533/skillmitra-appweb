import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle, DollarSign, Users, Clock, Star, ArrowRight, Upload, Phone, Mail, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  // Personal Info
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  gender: z.string().min(1, "Please select gender"),
  dateOfBirth: z.date({ required_error: "Date of birth is required" }),
  mobile: z.string().min(10, "Valid mobile number required"),
  email: z.string().email("Valid email required"),
  officialEmail: z.string().email("Valid official email required"),
  languages: z.string().min(1, "Languages required"),
  location: z.string().min(1, "Location required"),
  
  // Experience
  industry: z.string().min(1, "Industry required"),
  teachingYears: z.string().min(1, "Teaching experience required"),
  linkedinUrl: z.string().url("Valid LinkedIn URL required"),
  githubUrl: z.string().url().optional(),
  
  // Demo & Intro
  demoTopic: z.string().min(1, "Demo topic required"),
  
  // Course Details
  courseTitle: z.string().min(1, "Course title required"),
  courseDescription: z.string().min(10, "Course description required"),
  duration: z.string().min(1, "Duration required"),
  courseLanguage: z.string().min(1, "Course language required"),
  level: z.string().min(1, "Level required"),
  courseFee: z.string().min(1, "Course fee required"),
  timings: z.string().min(1, "Timings required"),
  oneOnOneAgreement: z.boolean().refine(val => val === true, "You must agree to offer only one-on-one sessions"),
  
  // Add-On Services
  resumeHelp: z.boolean(),
  mockInterview: z.boolean(),
  realTimeProjects: z.boolean(),
  
  // Payout Info
  bankName: z.string().min(1, "Bank name required"),
  accountNumber: z.string().min(1, "Account number required"),
  ifscCode: z.string().min(1, "IFSC code required"),
  upiId: z.string().min(1, "UPI ID required"),
  panNumber: z.string().min(1, "PAN number required"),
  payoutMode: z.string().min(1, "Payout mode required"),
  
  // Referral
  referredTrainerName: z.string().optional(),
  referredTrainerMobile: z.string().optional(),
  referredTrainerEmail: z.string().email().optional().or(z.literal("")),
  
  // Agreement
  acceptTerms: z.boolean().refine(val => val === true, "You must accept the terms"),
  digitalSignature: z.string().min(1, "Digital signature required"),
});

export default function TrainerOnboardPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      resumeHelp: false,
      mockInterview: false,
      realTimeProjects: false,
      oneOnOneAgreement: false,
      acceptTerms: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Application Submitted Successfully!",
      description: "Thanks! We'll reach out in 3–5 working days.",
    });
  };

  const scrollToForm = () => {
    document.getElementById('onboarding-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    "One-on-One Only (No Batches or Recorded-Only)",
    "You Set Your Own Fee (₹25K–₹40K avg.)",
    "90% Earnings (10% platform fee)",
    "Instant Payouts via Escrow",
    "Resume & Mock Interview Add-Ons",
    "Teach in Any Language, Any Time"
  ];

  const earningsData = [
    { engagement: "Side Hustle", students: "1–2", avgFee: "₹25K", earnings: "₹22.5K–₹45K" },
    { engagement: "Part-Time", students: "3–5", avgFee: "₹30K", earnings: "₹81K–₹1.35L" },
    { engagement: "Full-Time", students: "6–10", avgFee: "₹35K–₹40K", earnings: "₹1.8L–₹3.6L" },
  ];

  const futureFeatures = [
    "AI Resume Builder (for students)",
    "AI Mock Interviews",
    "Real-Time Progress Dashboards",
    "Government Partnerships with T-IDEA, TS-iPASS, IT Hubs"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Become a Verified Trainer on{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              SkillMitra
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Teach One-on-One. Earn from Anywhere. Work Flexibly.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="text-lg px-8 py-6"
          >
            Apply Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Why SkillMitra Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why SkillMitra? – Trainer Advantages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Table */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Trainer Earnings Potential
          </h2>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-6 py-4 text-left">Engagement</th>
                      <th className="px-6 py-4 text-left">Students</th>
                      <th className="px-6 py-4 text-left">Avg Fee</th>
                      <th className="px-6 py-4 text-left">You Earn</th>
                    </tr>
                  </thead>
                  <tbody>
                    {earningsData.map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-6 py-4 font-medium">{row.engagement}</td>
                        <td className="px-6 py-4">{row.students}</td>
                        <td className="px-6 py-4">{row.avgFee}</td>
                        <td className="px-6 py-4 font-bold text-primary">{row.earnings}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <div className="text-center mt-6">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              + ₹1,500 Referral Bonus Per Trainer
            </Badge>
          </div>
        </div>
      </section>

      {/* Future Features */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Future of SkillMitra
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {futureFeatures.map((feature, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-0">
                  <Star className="h-8 w-8 text-primary mb-3" />
                  <p className="text-lg">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Banner */}
      <section className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <DollarSign className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Refer trainers, earn ₹1,500 when their first student completes a course.
          </h2>
          <p className="text-lg opacity-90">
            Fill the referral section in the form below to get started!
          </p>
        </div>
      </section>

      {/* Onboarding Form */}
      <section id="onboarding-form" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Trainer Onboarding Form
          </h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Section 1: Personal Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Section 1: Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date of Birth</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter mobile number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email ID</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="officialEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Official Email / LinkedIn</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter official email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="languages"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Languages</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., English, Hindi, Telugu" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your location" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <Label>Photo Upload</Label>
                    <div className="mt-2 flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <Upload className="w-8 h-8 mb-2 text-gray-500" />
                        <p className="text-sm text-gray-500">Click to upload photo</p>
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 2: Experience */}
              <Card>
                <CardHeader>
                  <CardTitle>Section 2: Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Software Development" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="teachingYears"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teaching Years</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 5 years" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label>Resume Upload</Label>
                      <div className="mt-2 flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                          <Upload className="w-8 h-8 mb-2 text-gray-500" />
                          <p className="text-sm text-gray-500">Click to upload resume (PDF)</p>
                        </label>
                      </div>
                    </div>

                    <div>
                      <Label>Experience Letter</Label>
                      <div className="mt-2 flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                          <Upload className="w-8 h-8 mb-2 text-gray-500" />
                          <p className="text-sm text-gray-500">Click to upload experience letter (PDF)</p>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="linkedinUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>LinkedIn Profile</FormLabel>
                          <FormControl>
                            <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="githubUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>GitHub Profile (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://github.com/yourprofile" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Section 3: Demo & Intro */}
              <Card>
                <CardHeader>
                  <CardTitle>Section 3: Demo & Introduction</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label>Self-Introduction Video</Label>
                      <div className="mt-2 flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                          <Upload className="w-8 h-8 mb-2 text-gray-500" />
                          <p className="text-sm text-gray-500">Click to upload intro video</p>
                        </label>
                      </div>
                    </div>

                    <div>
                      <Label>Demo Teaching Video</Label>
                      <div className="mt-2 flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                          <Upload className="w-8 h-8 mb-2 text-gray-500" />
                          <p className="text-sm text-gray-500">Click to upload demo teaching video</p>
                        </label>
                      </div>
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="demoTopic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Demo Topic</FormLabel>
                        <FormControl>
                          <Input placeholder="What topic will you teach in your demo?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Section 4: Course Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Section 4: Course Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="courseTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter course title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="courseDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your course in detail"
                            className="min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="duration"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Duration</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 3 months" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="courseLanguage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Language</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., English" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="level"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Level</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="beginner">Beginner</SelectItem>
                              <SelectItem value="intermediate">Intermediate</SelectItem>
                              <SelectItem value="advanced">Advanced</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <Label>Curriculum Upload</Label>
                    <div className="mt-2 flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <Upload className="w-8 h-8 mb-2 text-gray-500" />
                        <p className="text-sm text-gray-500">Click to upload curriculum (PDF)</p>
                      </label>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="courseFee"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Course Fee</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., ₹30,000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="timings"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Timings</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 6 PM - 8 PM" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="oneOnOneAgreement"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to offer only one-on-one live sessions
                          </FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Section 5: Add-On Services */}
              <Card>
                <CardHeader>
                  <CardTitle>Section 5: Add-On Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="resumeHelp"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel>Resume Help</FormLabel>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="mockInterview"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel>Mock Interview</FormLabel>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="realTimeProjects"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel>Real-Time Projects</FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Section 6: Payout Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Section 6: Payout Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="bankName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bank Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter bank name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="accountNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Account Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter account number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="ifscCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>IFSC Code</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter IFSC code" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="upiId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>UPI ID</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter UPI ID" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="panNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>PAN Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter PAN number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="payoutMode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Payout Mode</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select payout mode" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="bank">Bank Transfer</SelectItem>
                              <SelectItem value="upi">UPI</SelectItem>
                              <SelectItem value="both">Both</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Section 7: Referral */}
              <Card>
                <CardHeader>
                  <CardTitle>Section 7: Referral Bonus (Optional)</CardTitle>
                  <CardDescription>
                    Refer other trainers and earn ₹1,500 when they complete their first student course
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="referredTrainerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Referred Trainer Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter trainer name (optional)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="referredTrainerMobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Referred Trainer Mobile</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter mobile (optional)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="referredTrainerEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Referred Trainer Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter email (optional)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Section 8: Agreement */}
              <Card>
                <CardHeader>
                  <CardTitle>Section 8: Agreement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label>Government ID Upload</Label>
                    <div className="mt-2 flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <Upload className="w-8 h-8 mb-2 text-gray-500" />
                        <p className="text-sm text-gray-500">Click to upload ID (Aadhar/PAN/Passport)</p>
                      </label>
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="acceptTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I accept the Terms and Conditions of SkillMitra
                          </FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="digitalSignature"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Digital Signature (Type your full name)</FormLabel>
                        <FormControl>
                          <Input placeholder="Type your full name as signature" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              <div className="text-center">
                <Button type="submit" size="lg" className="px-12 py-6 text-lg">
                  Submit Application
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <Clock className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl font-bold mb-4">Review Time: 3–5 Days</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our team will review your application and get back to you soon!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <Button variant="outline" asChild>
                <a href="https://wa.me/yourlink" target="_blank" rel="noopener noreferrer">
                  Chat with us
                </a>
              </Button>
            </Card>
            
            <Card className="p-6">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <Button variant="outline" asChild>
                <a href="mailto:trainers@skillmitra.online">
                  trainers@skillmitra.online
                </a>
              </Button>
            </Card>
            
            <Card className="p-6">
              <Phone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <Button variant="outline" asChild>
                <a href="tel:+911234567890">
                  +91 123 456 7890
                </a>
              </Button>
            </Card>
          </div>
          
          <h3 className="text-2xl font-bold text-primary">
            Start your trainer journey today!
          </h3>
        </div>
      </section>
    </div>
  );
}