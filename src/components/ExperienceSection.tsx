import { Briefcase, Zap, BarChart3, Sparkles, Trophy, CheckCircle, GitBranch, Database, Workflow, Shield } from 'lucide-react';
import { useState } from 'react';

// ✏️ Replace with your real roles
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    location: 'City, Country',
    period: 'Month Year – Present',
    signatureImpact: 'One-line summary of your signature impact in this role.',
    subtitle: 'A short supporting line — scope, scale, or key metric.',
    techStack: 'Tool 1 · Tool 2 · Tool 3 · Tool 4',
    recognition: {
      title: 'Award or Recognition Name',
      description: 'Short description of why you received it.',
    },
    highlights: [
      { icon: Zap, title: 'Achievement headline · Metric' },
      { icon: Workflow, title: 'Achievement headline · Metric' },
      { icon: Shield, title: 'Achievement headline · Metric' },
    ],
    bgColor: '#0E2A3A',
  },
  {
    title: 'Previous Job Title',
    company: 'Company Name',
    location: 'City, Country',
    period: 'Month Year – Month Year',
    signatureImpact: 'One-line summary of your signature impact in this role.',
    subtitle: 'A short supporting line — scope, scale, or key metric.',
    techStack: 'Tool 1 · Tool 2 · Tool 3',
    recognition: null as null | { title: string; description: string },
    highlights: [
      { icon: Zap, title: 'Achievement headline · Metric' },
      { icon: BarChart3, title: 'Achievement headline · Metric' },
      { icon: CheckCircle, title: 'Achievement headline · Metric' },
    ],
    bgColor: '#0B1F2E',
  },
];

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-16 relative overflow-hidden" style={{ backgroundColor: '#0B1220' }}>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-4s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Career Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {/* ✏️ your one-line career summary */}
            Describe the throughline of your career journey in one sentence here.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-10 relative">
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 hidden md:block"
            style={{ backgroundColor: 'rgba(31, 182, 201, 0.3)' }}
          />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="flex gap-5 md:gap-6">
                <div className="relative shrink-0">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    activeIndex === index ? 'bg-primary shadow-md shadow-primary/20 scale-110' : 'bg-primary/10 border border-primary/30'
                  }`}>
                    <Briefcase className={`w-6 h-6 md:w-7 md:h-7 transition-colors ${activeIndex === index ? 'text-background' : 'text-primary'}`} />
                  </div>
                </div>

                <div
                  className={`flex-1 rounded-2xl p-5 md:p-6 border transition-all duration-500 ${
                    activeIndex === index ? 'border-primary/30 shadow-lg shadow-primary/5 scale-[1.01]' : 'border-border/50 hover:border-primary/20'
                  }`}
                  style={{ backgroundColor: exp.bgColor }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#EAFBFF' }}>
                          {exp.title}
                        </h3>
                        {index === 0 && (
                          <span className="px-2 py-0.5 text-xs font-semibold bg-primary/20 text-primary rounded-full">Latest</span>
                        )}
                      </div>
                      <p className="text-primary font-semibold text-lg">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="px-4 py-1.5 rounded-full text-sm font-normal" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#B6C6D3' }}>
                        {exp.period}
                      </span>
                      <span className="text-xs" style={{ color: '#B6C6D3' }}>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-base font-semibold mb-1 leading-relaxed" style={{ color: '#EAFBFF' }}>{exp.signatureImpact}</p>
                  <p className="text-sm mb-4" style={{ color: '#9CA3AF' }}>{exp.subtitle}</p>
                  <p className="text-sm mb-5" style={{ color: '#9CA3AF' }}>
                    <span className="font-medium">Tech Stack:</span> {exp.techStack}
                  </p>

                  <div className={`grid gap-3 mb-5 ${exp.highlights.length > 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-3'}`}>
                    {exp.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="group relative p-3 rounded-xl border border-border/30 hover:border-primary/20 transition-all duration-300" style={{ backgroundColor: 'rgba(11, 18, 32, 0.5)' }}>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                            <highlight.icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-xs font-bold text-primary">{highlight.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {exp.recognition && (
                    <div className="flex items-start gap-3 p-3 rounded-xl border mt-2" style={{ backgroundColor: '#0F2430', borderColor: 'rgba(245, 194, 107, 0.2)', boxShadow: '0 0 10px rgba(245, 194, 107, 0.08)' }}>
                      <Trophy className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#F5C26B' }} />
                      <div>
                        <p className="text-sm font-semibold" style={{ color: '#B6C6D3' }}>{exp.recognition.title}</p>
                        <p className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{exp.recognition.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              {/* ✏️ update years */}
              <span className="text-primary font-semibold">4+ years</span> of turning ideas into results
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
