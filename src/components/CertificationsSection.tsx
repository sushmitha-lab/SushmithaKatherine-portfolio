import { Award, ArrowRight, BadgeCheck } from 'lucide-react';

const certifications = [
  { name: 'Alteryx Designer Core', credentialLink: 'https://www.credly.com/badges/e9ac12de-1592-4f93-806c-ea0f1b8a129d' },
  { name: 'Python Programming — HackerRank', credentialLink: 'https://www.hackerrank.com/certificates/17b1ee641110' },
  { name: 'SQL (Advanced) — HackerRank', credentialLink: 'https://www.hackerrank.com/certificates/iframe/59169eb44b89' },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0B0F14' }}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Professional Credentials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-sm max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
            Industry-recognized certifications validating core analytics and engineering skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-0.5 flex flex-col items-center text-center"
              style={{ backgroundColor: '#111827', borderColor: 'rgba(255, 255, 255, 0.06)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.25)';
                e.currentTarget.style.boxShadow = '0 0 14px rgba(34, 211, 238, 0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-white p-2 flex items-center justify-center mb-4">
                <BadgeCheck className="w-full h-full text-slate-700" />
              </div>

              <h3 className="text-base font-semibold mb-4" style={{ color: '#E5E7EB' }}>{cert.name}</h3>

              <a
                href={cert.credentialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: '#22D3EE' }}
              >
                Show Credential
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
