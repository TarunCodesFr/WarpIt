import Link from 'next/link';
import Image from 'next/image';
import { Rocket, Code, Shield, Zap, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8 mb-24">
          <div className="p-3 bg-primary/10 rounded-2xl">
            <Image
              src="/warpit-logo-new.png"
              alt="WarpIt logo"
              width={40}
              height={40}
              className="h-40 w-40 object-contain"
              priority
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] max-w-4xl">
             Documentation for the <br />
             <span className="text-primary">Next Generation.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
            Everything you need to integrate WarpIt into your workflow. 
            High-performance link management at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
             <Link 
               href="/docs/introduction/overview"
               className="h-16 px-10 bg-primary text-primary-foreground rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-primary/20"
             >
               Get Started <ArrowRight className="h-5 w-5" />
             </Link>
             <Link 
               href="/docs/api-reference/overview"
               className="h-16 px-10 bg-muted hover:bg-muted/80 rounded-2xl font-bold flex items-center gap-3 transition-all"
             >
               Explore API
             </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {[
            { 
              title: "Quick Start", 
              description: "Get up and running in under 60 seconds with our guides.",
              icon: <Rocket className="h-6 w-6" />,
              href: "/docs/introduction/overview"
            },
            { 
              title: "API Reference", 
              description: "Deep dive into our endpoints and authentication system.",
              icon: <Code className="h-6 w-6" />,
              href: "/docs/api-reference/overview"
            },
            { 
              title: "Security", 
              description: "Learn about how we protect your data and links.",
              icon: <Shield className="h-6 w-6" />,
              href: "/docs/introduction/overview"
            },
            { 
              title: "Integrations", 
              description: "Connect WarpIt with your favorite tools and platforms.",
              icon: <Zap className="h-6 w-6" />,
              href: "/docs/introduction/overview"
            }
          ].map((card, i) => (
             <Link 
               key={i}
               href={card.href}
               className="group p-8 bg-card border border-border/50 rounded-3xl hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5"
             >
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-xl mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
             </Link>
          ))}
        </div>
      </div>

      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-4 text-center">
           <p className="text-sm font-bold text-muted-foreground/40 uppercase tracking-[0.4em]">
             WarpIt Documentation • Built for performance
           </p>
        </div>
      </footer>
    </main>
  );
}
