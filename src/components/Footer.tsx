import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer id="about" className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">
              Plant Health <span className="text-primary-foreground/70">Advisory</span>
            </span>
          </div>
          
          <p className="text-sm text-background/60 text-center md:text-right max-w-md">
            AI-powered plant health advisory system designed to assist farmers in identifying crop diseases and receiving treatment recommendations.
          </p>
        </div>
        
        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Plant Health Advisory. Built with advanced AI technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
