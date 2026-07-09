import { Layers, ArrowRight, Github, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

// ✏️ Replace with your real projects (add/remove entries freely)
const projects = [
  {
    title: 'Project Name',
    subtitle: 'One-line subtitle describing the project',
    description: 'A two to three sentence description of the problem, your approach, and the outcome.',
    technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
    link: '#',
    githubLink: '#',
  },
  {
    title: 'Project Name',
    subtitle: 'One-line subtitle describing the project',
    description: 'A two to three sentence description of the problem, your approach, and the outcome.',
    technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
    link: '#',
  },
  {
    title: 'Project Name',
    subtitle: 'One-line subtitle describing the project',
    description: 'A two to three sentence description of the problem, your approach, and the outcome.',
    technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
    link: '#',
  },
];

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world work demonstrating your end-to-end capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`relative rounded-2xl border overflow-hidden transition-all duration-500 flex flex-col h-full ${
                hoveredIndex === index
                  ? 'bg-gradient-to-br from-card via-card to-primary/5 border-primary/40 shadow-xl shadow-primary/10 scale-[1.02]'
                  : 'bg-card/50 border-border hover:border-primary/30'
              }`}>
                {/* ✏️ replace with <img src="/projects/your-image.png" ... /> */}
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                  <ImageIcon className="w-10 h-10 text-border" />
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-400/70 mb-2">{project.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2 py-1 text-xs font-medium rounded border"
                        style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(34, 211, 238, 0.2)', color: '#9CA3AF' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      asChild
                      className={`group/btn text-primary-foreground border-0 ${(project as any).githubLink ? 'flex-1' : 'w-full'}`}
                      style={{ backgroundColor: 'rgba(31, 182, 201, 0.25)', color: '#B6C6D3' }}
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:bg-primary/35 transition-colors">
                        View Project Details
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </Button>
                    {(project as any).githubLink && (
                      <Button size="sm" asChild className="group/gh border-0" style={{ backgroundColor: 'rgba(31, 182, 201, 0.25)', color: '#B6C6D3' }}>
                        <a href={(project as any).githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:bg-primary/35 transition-colors">
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          {/* ✏️ point at your GitHub profile */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 hover:border-primary/40 transition-all"
          >
            <Github className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              View more on <span className="text-primary font-semibold">GitHub</span>
            </span>
            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
