import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, DollarSign, Zap, Users, Lock, Headphones } from 'lucide-react'

const faqs = [
  {
    category: "Services",
    icon: <Mail className="h-6 w-6" />,
    questions: [
      {
        question: "What email marketing services does InboxAgency.io offer?",
        answer: "InboxAgency.io offers a comprehensive suite of email marketing services, including campaign strategy development, email design and coding, list management and segmentation, automation setup, A/B testing, performance analytics, and ongoing optimization."
      },
      {
        question: "Do you handle the entire email marketing process?",
        answer: "Yes, we provide end-to-end email marketing management. From strategy development to campaign execution and performance analysis, our team handles every aspect of your email marketing efforts."
      },
      {
        question: "Can you integrate with our existing CRM or e-commerce platform?",
        answer: "Absolutely! We have experience integrating with a wide range of CRM and e-commerce platforms. Our team will work to ensure seamless integration with your existing systems for efficient data flow and campaign management."
      }
    ]
  },
  {
    category: "Pricing",
    icon: <DollarSign className="h-6 w-6" />,
    questions: [
      {
        question: "How much do your services cost?",
        answer: "Our pricing is based on the scope of services and the size of your email list. We offer three main tiers: Starter ($299/month), Pro ($799/month), and Enterprise (custom pricing). For detailed information, please visit our Pricing page."
      },
      {
        question: "Is there a contract or minimum commitment?",
        answer: "We offer month-to-month services with no long-term contracts required. However, we recommend a minimum 3-month engagement to see optimal results from our strategies."
      },
      {
        question: "Do you offer any discounts for non-profits or startups?",
        answer: "Yes, we offer special pricing for non-profit organizations and early-stage startups. Please contact our sales team for more information on these discounts."
      }
    ]
  },
  {
    category: "Process",
    icon: <Zap className="h-6 w-6" />,
    questions: [
      {
        question: "What does the onboarding process look like?",
        answer: "Our onboarding process typically involves: 1) An initial consultation to understand your goals and current email marketing efforts. 2) Account setup and integration with your existing systems. 3) Development of a customized email marketing strategy. 4) Implementation of initial campaigns and automation workflows. 5) Training your team on our reporting dashboard."
      },
      {
        question: "How long does it take to see results?",
        answer: "While some improvements can be seen immediately, significant results typically start to show within 2-3 months. This allows time for strategy implementation, testing, and optimization based on performance data."
      },
      {
        question: "How often will we receive performance reports?",
        answer: "We provide detailed monthly performance reports, as well as real-time access to our analytics dashboard. Our team also conducts quarterly strategy reviews to discuss performance and plan future optimizations."
      }
    ]
  },
  {
    category: "Technology",
    icon: <Users className="h-6 w-6" />,
    questions: [
      {
        question: "What email marketing platforms do you work with?",
        answer: "We have expertise in all major email marketing platforms, including Mailchimp, Klaviyo, HubSpot, Salesforce Marketing Cloud, and more. If you have a preferred platform, we can work with it, or we can recommend the best option for your needs."
      },
      {
        question: "How do you ensure email deliverability?",
        answer: "We employ best practices for email deliverability, including proper list management, engagement-based segmentation, regular list cleaning, and adherence to anti-spam laws. We also monitor deliverability metrics closely and make adjustments as needed."
      },
      {
        question: "Do you offer any proprietary email marketing tools?",
        answer: "Yes, we have developed proprietary AI-driven tools for subject line optimization, send time optimization, and content personalization. These tools are available to all our clients as part of our service packages."
      }
    ]
  },
  {
    category: "Data & Security",
    icon: <Lock className="h-6 w-6" />,
    questions: [
      {
        question: "How do you handle data privacy and security?",
        answer: "We take data privacy and security very seriously. We are GDPR compliant and follow strict data protection protocols. All data is encrypted both in transit and at rest, and we regularly undergo security audits to ensure the highest level of protection for our clients' data."
      },
      {
        question: "Can you help with GDPR and CCPA compliance?",
        answer: "Yes, we are well-versed in GDPR, CCPA, and other data privacy regulations. We can help ensure your email marketing practices are compliant with these laws, including managing consent, providing unsubscribe options, and maintaining proper documentation."
      },
      {
        question: "Who owns the email list and campaign data?",
        answer: "You retain full ownership of your email list and all campaign data. We act as a processor of this data on your behalf, and upon termination of our services, we ensure all your data is transferred back to you securely."
      }
    ]
  },
  {
    category: "Support",
    icon: <Headphones className="h-6 w-6" />,
    questions: [
      {
        question: "What kind of support do you offer?",
        answer: "We offer comprehensive support to all our clients. This includes a dedicated account manager, 24/7 email support, and emergency phone support for critical issues. Our Pro and Enterprise plans also include regular strategy calls and priority support."
      },
      {
        question: "Is there a limit to how many support requests we can make?",
        answer: "There is no limit to the number of support requests you can make. We encourage open communication and are always here to help, whether it's a quick question or a complex issue that needs resolving."
      },
      {
        question: "Do you provide training for our team?",
        answer: "Yes, we provide initial training on our processes and reporting dashboard. For Enterprise clients, we also offer custom training sessions tailored to your team's needs, covering topics like email marketing best practices, data analysis, and more."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
      <p className="text-xl text-center text-muted-foreground mb-12">
        Find answers to common questions about InboxAgency.io's services, pricing, and processes
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((category, index) => (
          <Card key={index} className="w-full">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                {category.icon}
                <span className="ml-2">{category.category}</span>
              </CardTitle>
              <CardDescription>Common questions about {category.category.toLowerCase()}</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}