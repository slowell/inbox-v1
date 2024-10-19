import ROICalculator from '@/components/ROICalculator';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Target, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function ROICalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Calculate Your Potential ROI</h1>
      <p className="text-xl text-center text-muted-foreground mb-12">See how InboxAgency.io can boost your revenue</p>
      <ROICalculator />
      
      <div className="mt-24 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">How We Boost Your ROI</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="h-12 w-12 text-primary mb-4" />,
              title: "Advanced Segmentation",
              description: "Target the right audience with precision, increasing engagement and conversions.",
              benefits: [
                "Demographic and behavioral segmentation",
                "Dynamic content personalization",
                "Improved relevance and engagement",
                "Higher open and click-through rates"
              ]
            },
            {
              icon: <Zap className="h-12 w-12 text-primary mb-4" />,
              title: "AI-Powered Optimization",
              description: "Leverage machine learning to optimize send times and content for maximum impact.",
              benefits: [
                "Smart send time prediction",
                "Subject line optimization",
                "Content recommendations",
                "Continuous performance improvement"
              ]
            },
            {
              icon: <TrendingUp className="h-12 w-12 text-primary mb-4" />,
              title: "Conversion-Focused Strategies",
              description: "Implement proven tactics to guide subscribers towards making a purchase.",
              benefits: [
                "Persuasive email copywriting",
                "Strategic call-to-action placement",
                "Abandoned cart recovery campaigns",
                "Upsell and cross-sell automation"
              ]
            }
          ].map((item, index) => (
            <Card key={index} className="flex flex-col overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg">
              <CardHeader className="bg-gradient-to-br from-primary/5 to-primary/10 flex flex-col items-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="rounded-full bg-primary/20 p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <CardTitle className="text-center text-xl font-bold mb-2 relative z-10">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between p-6 bg-gradient-to-br from-background to-background/80">
                <p className="text-muted-foreground mb-4 text-center">{item.description}</p>
                <ul className="space-y-2">
                  {item.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start group/item">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5 group-hover/item:text-green-500 transition-colors duration-300" />
                      <span className="text-sm group-hover/item:text-primary transition-colors duration-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}