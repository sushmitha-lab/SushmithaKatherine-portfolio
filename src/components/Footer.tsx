import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative py-12 border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold gradient-text mb-2">Sushmitha Katherine Jayaraj</h3>
            {/* ✏️ update specialties */}
            <p className="text-sm text-muted-foreground">Data Analytics Engineer • Specialty One • Specialty Two</p>
          </div>

          <div className="flex items-center gap-4">
            {/* ✏️ update hrefs */}
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:you@example.com', label: 'Email' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="group w-10 h-10 rounded-xl bg-secondary/50 border border-border hover:border-primary/40 hover:bg-primary/10 flex items-center justify-center transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {[
              { label: 'About', href: '#home' },
              { label: 'Experience', href: '#experience' },
              { label: 'Projects', href: '#projects' },
              { label: 'Skills', href: '#skills' },
              { label: 'Certifications', href: '#certifications' },
              { label: 'Education', href: '#education' },
              { label: 'Contact', href: '#contact' },
            ].map((link, index) => (
              <a key={index} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.label}</a>
            ))}
          </div>

          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>© {currentYear} Sushmitha Katherine Jayaraj.</span>
              <span className="hidden md:inline text-border">•</span>
              <span className="flex items-center gap-1">
                Built with <Heart className="w-3.5 h-3.5 text-primary fill-primary animate-pulse" />
              </span>
            </div>

            <button onClick={scrollToTop} className="group flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border hover:border-primary/40 hover:bg-primary/10 transition-all text-sm text-muted-foreground hover:text-primary">
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
