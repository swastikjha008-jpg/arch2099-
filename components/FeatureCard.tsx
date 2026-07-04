'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import GlowBorder from './ui/GlowBorder';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <GlowBorder className="p-6 h-full hover:-translate-y-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/10 text-cyan mb-4">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-display font-semibold text-lg text-ink mb-2">{title}</h3>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </GlowBorder>
    </motion.div>
  );
}
