import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Trophy, Users, Zap } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | UPLIFT Technologies';
  }, []);

  const values = [
    {
      icon: <Shield size={32} />,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all interactions, ensuring transparency and trustworthiness across our operations.'
    },
    {
      icon: <Trophy size={32} />,
      title: 'Excellence',
      description: 'We continuously strive to exceed expectations, delivering exceptional quality and results through meticulous attention to detail.'
    },
    {
      icon: <Users size={32} />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork, working closely with clients as true partners to achieve shared goals and success.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex challenges and drive continuous improvement.'
    }
  ];

  const team = [
    {
      name: 'Taha Syed',
      position: 'Founder & CEO',
      description: 'Visionary leader with years of experience in software development, supply chain management, data management, compliance implementation and software implementation.',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg'
    },
    {
      name: 'Mujtaba Sarwar',
      position: 'COO',
      description: 'Years of experience in operations management and sales, striving for operational excellence and driving business growth.',
      image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg'
    },
    {
      name: 'Zoe Turner',
      position: 'Operations Manager',
      description: 'Brings meticulous teaching capabilities and ensures everything is working according to plan, maintaining high operational standards.',
      image: 'https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg'
    },
    {
      name: 'Shahnawaz Arif',
      position: 'CMO',
      description: 'Years of experience in creating brand strategies, working with household brand names to enhance their market presence and recognition.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://24vzlu2kzs.ufs.sh/f/4JlBnp1v6U48LYcCDZiUMZzX7lfxvW3hEk5JKuRtbm1dNVHP')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4
          }}
        />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-poppins font-semibold mb-6">
              About <span className="gradient-text">UPLIFT</span> Technologies
            </h1>
            <p className="text-xl text-white/80">
              We are a people-powered outsourcing partner built for 24/7 operations, combining expert talent with cutting-edge technology to deliver exceptional results.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Mission Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="gradient-text mb-6">Our Mission</h2>
            <p className="text-lg text-white/80 mb-6">
              UPLIFT Technologies is on a mission to transform how businesses operate by providing expert talent and management consulting services that ensure adherence to the best industry standards through innovative software and automation.
            </p>
            <p className="text-lg text-white/80">
              We believe that by combining human expertise with technological efficiency, we can help businesses scale operations, reduce costs, and achieve sustainable growth without sacrificing quality or compliance.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img 
                src="https://24vzlu2kzs.ufs.sh/f/4JlBnp1v6U48IhdPj7Nlaef7gyzid6OhrCHJxbUWpK93SsGw"
                alt="UPLIFT team collaboration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black/70 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </Section>
      
      {/* Values Section */}
      <Section
        title="Our Core Values"
        subtitle="These principles guide everything we do and shape how we deliver value to our clients."
        centered
        className="bg-deep-purple/5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <Card key={value.title} delay={index}>
              <div className="text-electric-violet mb-4">{value.icon}</div>
              <h3 className="text-xl font-medium mb-3">{value.title}</h3>
              <p className="text-white/70">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      
      {/* Team Section */}
      <Section
        title="Our Leadership Team"
        subtitle="Meet the experts who drive our vision forward and ensure exceptional service delivery."
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 relative">
                <img 
                  src={member.image}
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">{member.name}</h3>
              <p className="text-electric-violet mb-3">{member.position}</p>
              <p className="text-white/70 max-w-xs mx-auto">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default AboutPage;