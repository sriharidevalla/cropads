import { Upload, Brain, FileCheck, MessageCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Image",
    description: "Take a clear photo of your crop's leaf and upload it to our platform.",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Analysis",
    description: "Our advanced AI vision system analyzes the image in seconds.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Get Results",
    description: "Receive detailed diagnosis with confidence scores and treatment plans.",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Ask Questions",
    description: "Use our AI chatbot to get personalized advice in your language.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple Steps to{" "}
            <span className="text-gradient">Protect Your Crops</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-border" />
              )}
              
              <div className="relative inline-block mb-6">
                <div className="step-icon">
                  <step.icon className="w-7 h-7" />
                </div>
                <div className="step-number">{step.number}</div>
              </div>
              
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
