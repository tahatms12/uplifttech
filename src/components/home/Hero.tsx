import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeUpVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Optimized gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 aspect-[1/1] w-full bg-[radial-gradient(ellipse_at_center,#9B1DFF_0%,#280059_60%,transparent_70%)] blur-[80px]" />
      </div>
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-rich-black pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center px-[15px]">
          <div className="lg:w-3/5 mb-10 lg:mb-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.2,
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <motion.div 
                variants={fadeUpVariants}
                className="min-h-[150px] w-full"
              >
                <h1 className="font-display font-semibold">
                  Expert Growth Solutions for <span className="gradient-text">North America and the United Kingdom</span>
                </h1>
              </motion.div>
              
              <motion.div 
                variants={fadeUpVariants}
                className="min-h-[60px] w-full mt-6"
              >
                <p className="text-xl text-white/80">
                  Transform your business with UPLIFT Technologies' comprehensive outsourcing solutions. Expert teams available 24/7 for sales, marketing, collections, and operations.
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4"
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <Button to="/book" size="lg" className="group">
                <Calendar size={18} className="mr-2" />
                Schedule Free Consultation
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button to="/case-studies" variant="outline" size="lg">
                View Success Stories
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:w-2/5 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 aspect-[1/1] w-full bg-[radial-gradient(ellipse_at_center,#9B1DFF_0%,#280059_60%,transparent_70%)] blur-[80px]" />
              <div className="absolute -bottom-6 -right-6 bg-rich-black p-4 rounded-xl border border-neutral-800 z-20 mr-[60px]">
                <p className="text-3xl font-display font-semibold text-electric-violet">24/7</p>
                <p className="text-sm text-white/70">Global Operations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;