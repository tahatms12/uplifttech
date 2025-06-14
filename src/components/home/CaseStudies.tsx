import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface CaseStudyCardProps {
  title: string;
  category: string;
  description: string;
  stats: { label: string; value: string }[];
  imageUrl: string;
  delay: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  category,
  description,
  stats,
  imageUrl,
  delay,
}) => {
  return (
    <Card className="overflow-hidden p-0" delay={delay}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-electric-violet/90 text-white text-xs font-medium px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium mb-3">{title}</h3>
        <p className="text-white/70 mb-6">{description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-xl font-medium text-electric-violet">{stat.value}</p>
              <p className="text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <Button to="/case-studies" variant="outline" className="w-full">
          View Case Study
        </Button>
      </div>
    </Card>
  );
};

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "Brand Evolution & Strategy",
      category: "Creative Direction",
      description: "Complete brand transformation and creative strategy development for a technology startup.",
      stats: [
        { label: "Brand Recognition", value: "+65%" },
        { label: "Lead Generation", value: "+48%" }
      ],
      imageUrl: "https://24vzlu2kzs.ufs.sh/f/4JlBnp1v6U48gUJycDW4KQobNdljuvhf3x8ZICL0FDiO2aUY"
    },
    {
      title: "Accounts Receivable Recovery",
      category: "Collections",
      description: "Structured collection strategies recovering $2M in outstanding accounts receivable.",
      stats: [
        { label: "First Month", value: "$25K" },
        { label: "Total Recovered", value: "$2M" }
      ],
      imageUrl: "https://24vzlu2kzs.ufs.sh/f/4JlBnp1v6U48pnKddQV3h9WuPQoysU7iE8YT6B1mjLJSbfOG"
    },
    {
      title: "Integrated Marketing Campaign",
      category: "Marketing",
      description: "Multi-channel marketing campaign combining traditional and digital strategies for maximum impact.",
      stats: [
        { label: "Qualified Leads", value: "+156%" },
        { label: "Social Engagement", value: "+89%" }
      ],
      imageUrl: "https://24vzlu2kzs.ufs.sh/f/4JlBnp1v6U48vMtbgQXFyTCUVp70uEJfGZNA8PWRbSzgIDsX"
    }
  ];

  return (
    <Section
      title="Case Studies"
      subtitle="Real results for real businesses. See how our services have transformed operations and driven growth across industries."
      centered
      className="bg-deep-purple/5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <CaseStudyCard
            key={study.title}
            title={study.title}
            category={study.category}
            description={study.description}
            stats={study.stats}
            imageUrl={study.imageUrl}
            delay={index}
          />
        ))}
      </div>
      
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Button to="/case-studies" size="lg" className="group">
          View All Case Studies
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </Section>
  );
};

export default CaseStudies;