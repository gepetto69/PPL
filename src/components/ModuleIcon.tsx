import React from 'react';
import {
  Scale,
  Wrench,
  Weight,
  UserCheck,
  CloudRain,
  Compass,
  ShieldCheck,
  Wind,
  Radio,
  BookOpen,
  HelpCircle,
} from 'lucide-react';

interface ModuleIconProps {
  name: string;
  className?: string;
}

export const ModuleIcon: React.FC<ModuleIconProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'Scale':
      return <Scale className={className} />;
    case 'Wrench':
      return <Wrench className={className} />;
    case 'Weight':
      return <Weight className={className} />;
    case 'UserCheck':
      return <UserCheck className={className} />;
    case 'CloudRain':
      return <CloudRain className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'Wind':
      return <Wind className={className} />;
    case 'Radio':
      return <Radio className={className} />;
    case 'BookOpen':
      return <BookOpen className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
};
