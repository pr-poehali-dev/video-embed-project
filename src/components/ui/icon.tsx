import React from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Plus,
  SkipBack,
  SkipForward,
  Maximize,
  Settings,
  CircleAlert,
} from "lucide-react";

const iconMap = {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Plus,
  SkipBack,
  SkipForward,
  Maximize,
  Settings,
  CircleAlert,
};

interface IconProps {
  name: keyof typeof iconMap;
  size?: number;
  className?: string;
  fallback?: keyof typeof iconMap;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}) => {
  const IconComponent = iconMap[name] || iconMap[fallback];

  return <IconComponent size={size} className={className} />;
};

export default Icon;
