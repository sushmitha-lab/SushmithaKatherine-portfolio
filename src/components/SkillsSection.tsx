import { Sparkles, Code2, Cloud, Database, BarChart3, ShieldCheck, GitBranch, Workflow } from 'lucide-react';

const skillGroups = [
  { title: 'Languages & Query', icon: Code2, skills: ['Python', 'SQL (Advanced)', 'NumPy', 'Pandas', 'R'] },
  { title: 'Data Modeling & Warehousing', icon: Database, skills: ['Snowflake', 'Dimensional Modeling', 'Star Schema Design', 'BigQuery (familiar)'] },
  { title: 'Data Governance & Quality', icon: ShieldCheck, skills: ['dbt Tests', 'Schema Validation', 'Data Lineage', 'Metadata Docs', 'Observability'] },
  { title: 'BI & Visualization', icon: BarChart3, skills: ['Tableau (Advanced)', 'Power BI', 'DAX', 'Streamlit'] },
  { title: 'Version Control & Deployment', icon: GitBranch, skills: ['Git', 'GitHub', 'GitHub Actions (CI/CD)'] },
  { title: 'Cloud', icon: Cloud, skills: ['AWS (S3, Glue, Athena)', 'Azure', 'GCP'] },
  { title: 'ETL/ELT & Orchestration', icon: Workflow, skills: ['Airflow', 'dbt (Cloud + Core)', 'AWS Glue (PySpark)'] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building governed, end-to-end data solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: '#0B1F2E', border: '1px solid rgba(34, 211, 238, 0.15)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.35)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(34, 211, 238, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.15)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors" style={{ backgroundColor: '#0F2A3A' }}>
                <group.icon className="w-5 h-5" style={{ color: '#22D3EE' }} />
              </div>

              <h3 className="text-lg font-bold mb-4" style={{ color: '#22D3EE' }}>{group.title}</h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1.5 text-sm rounded-lg transition-all cursor-default"
                    style={{ backgroundColor: 'rgba(15, 42, 58, 0.8)', border: '1px solid rgba(34, 211, 238, 0.1)', color: '#B6C6D3' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
