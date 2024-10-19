"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

const caseStudies = [
  {
    id: 'ecommerce-giant',
    title: 'E-commerce Giant Boosts Sales by 150%',
    company: 'MegaShop Online',
    industry: 'E-commerce',
    challenge: 'Low email engagement and conversion rates',
    solution: [
      'Implemented AI-driven personalization and abandoned cart recovery',
      'Developed a comprehensive email marketing strategy tailored to MegaShop Online\'s unique product range and customer base',
      'Integrated advanced segmentation techniques to deliver highly targeted content',
      'Implemented a series of automated workflows to nurture leads and re-engage dormant customers',
      'Utilized machine learning algorithms to optimize send times and subject lines for maximum open rates',
      'Created dynamic content blocks that automatically update based on user behavior and preferences'
    ],
    results: {
      salesIncrease: 150,
      conversionRate: 25,
      roi: 300
    },
    strategies: [
      'Dynamic product recommendations',
      'Behavioral trigger emails',
      'Personalized subject lines',
      'Optimized send times'
    ],
    obstacles: 'Integrating with existing CRM and inventory systems',
    quote: "InboxAgency.io's AI-powered solutions have transformed our email marketing. We've seen unprecedented growth in engagement and sales.",
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'saas-startup',
    title: 'SaaS Startup Increases User Activation by 80%',
    company: 'CloudFlow Solutions',
    industry: 'Software as a Service',
    challenge: 'Low user activation and retention rates',
    solution: [
      'Developed targeted onboarding and re-engagement campaigns',
      'Created a multi-touch onboarding email sequence to guide new users through key features',
      'Implemented behavior-based triggers to send personalized tips and tutorials',
      'Designed a re-engagement campaign to win back inactive users with targeted incentives',
      'Utilized A/B testing to continuously refine email content and design for maximum impact',
      'Integrated in-app messaging with email campaigns for a cohesive user experience'
    ],
    results: {
      userActivation: 80,
      retentionRate: 40,
      customerLTV: 200
    },
    strategies: [
      'Segmented welcome series',
      'Feature adoption emails',
      'Personalized usage tips',
      'Win-back campaigns'
    ],
    obstacles: 'Crafting messaging for a diverse user base with varying technical expertise',
    quote: "The level of customization and automation InboxAgency.io provides has been crucial in improving our user activation and retention metrics.",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'nonprofit-org',
    title: 'Nonprofit Increases Donations by 200%',
    company: 'Global Green Initiative',
    industry: 'Nonprofit',
    challenge: 'Limited budget and resources for marketing campaigns',
    solution: [
      'Implemented cost-effective, targeted email campaigns',
      'Developed a content strategy focused on storytelling and emotional engagement',
      'Created segmented donor lists based on giving history and interests',
      'Implemented automated donation follow-ups and impact reports',
      'Designed visually appealing email templates optimized for mobile devices',
      'Integrated social media sharing to amplify reach and encourage peer-to-peer fundraising'
    ],
    results: {
      donationIncrease: 200,
      donorRetention: 60,
      volunteerSignups: 150
    },
    strategies: [
      'Storytelling-focused content',
      'Donation impact visualization',
      'Automated thank-you sequences',
      'Volunteer recruitment campaigns'
    ],
    obstacles: 'Maintaining engagement with limited content creation resources',
    quote: "InboxAgency.io has enabled us to reach more donors and volunteers than ever before, significantly increasing our impact with minimal additional cost.",
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
  }
];

const CaseStudies = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCase, setSelectedCase] = useState(caseStudies[0]);

  const handleCaseSelect = (caseStudy) => {
    setSelectedCase(caseStudy);
    setOpenDialog(true);
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Case Studies</h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          See how InboxAgency.io has transformed email marketing for businesses across industries
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <Card key={caseStudy.id} className="flex flex-col overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg">
              <CardHeader className="p-0">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.company}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between p-6">
                <div>
                  <CardTitle className="text-xl mb-2">{caseStudy.title}</CardTitle>
                  <CardDescription className="mb-4">{caseStudy.company} - {caseStudy.industry}</CardDescription>
                  <p className="text-sm mb-4">{caseStudy.challenge}</p>
                </div>
                <Button onClick={() => handleCaseSelect(caseStudy)}>Read Full Case Study</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedCase.title}</DialogTitle>
            <DialogDescription>{selectedCase.company} - {selectedCase.industry}</DialogDescription>
          </DialogHeader>
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="strategy">Strategy</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
              <TabsTrigger value="learnings">Learnings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Challenge</h3>
                <p>{selectedCase.challenge}</p>
                <h3 className="text-lg font-semibold">Solution</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {selectedCase.solution.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  "{selectedCase.quote}"
                </blockquote>
              </div>
            </TabsContent>
            <TabsContent value="strategy">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Key Strategies</h3>
                <ul className="space-y-2">
                  {selectedCase.strategies.map((strategy, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{strategy}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold">Obstacles Overcome</h3>
                <p>{selectedCase.obstacles}</p>
              </div>
            </TabsContent>
            <TabsContent value="results">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(selectedCase.results).map(([key, value]) => (
                  <Card key={key}>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-primary">
                        {value}%
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="learnings">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Key Takeaways</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <TrendingUp className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Personalization significantly impacts engagement and conversion rates</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Segmentation is crucial for delivering relevant content to diverse audiences</span>
                  </li>
                  <li className="flex items-start">
                    <BarChart className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Continuous testing and optimization lead to sustained improvement</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CaseStudies;