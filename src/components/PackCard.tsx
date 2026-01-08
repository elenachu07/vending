import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

// Import all pack images
import infernoX from "@/assets/packs/inferno-x.png";
import megaSymphonia from "@/assets/packs/mega-symphonia.png";
import megaBrave from "@/assets/packs/mega-brave.png";
import megaDreamEx from "@/assets/packs/mega-dream-ex.png";
import whiteFlare from "@/assets/packs/white-flare.png";
import blackBolt from "@/assets/packs/black-bolt.png";
import teamRocket from "@/assets/packs/team-rocket.png";
import ascendedHeroes from "@/assets/packs/ascended-heroes.png";
import cyberJudge from "@/assets/packs/cyber-judge.png";
import phantasmalFlames from "@/assets/packs/phantasmal-flames.png";
import wildForce from "@/assets/packs/wild-force.png";
import megaEvolution from "@/assets/packs/mega-evolution.png";
import prismaticEvolution from "@/assets/packs/prismatic-evolution.png";
import surgingSparks from "@/assets/packs/surging-sparks.png";
import pokemon151 from "@/assets/packs/151-pokemon.png";

interface PackCardProps {
  name: string;
  region?: "JP" | "KR";
  index: number;
}

const packImages: Record<string, string> = {
  "Inferno X": infernoX,
  "Mega Symphonia": megaSymphonia,
  "Mega Brave": megaBrave,
  "Mega Dream EX": megaDreamEx,
  "White Flare": whiteFlare,
  "Black Bolt": blackBolt,
  "Team Rocket": teamRocket,
  "Ascended Heroes": ascendedHeroes,
  "Cyber Judge": cyberJudge,
  "Phantasmal Flames": phantasmalFlames,
  "Wild Force": wildForce,
  "Mega Evolution": megaEvolution,
  "Prismatic Evolution": prismaticEvolution,
  "Surging Sparks": surgingSparks,
  "151 Pokemon": pokemon151,
};

const PackCard = ({ name, region, index }: PackCardProps) => {
  const getPackGradient = (name: string) => {
    const gradients: Record<string, string> = {
      "Inferno X": "from-orange-500 via-red-600 to-yellow-500",
      "Mega Symphonia": "from-pink-500 via-purple-600 to-blue-500",
      "Mega Brave": "from-blue-500 via-cyan-500 to-teal-500",
      "Mega Dream EX": "from-purple-500 via-pink-500 to-rose-500",
      "White Flare": "from-white via-gray-200 to-blue-200",
      "Black Bolt": "from-gray-900 via-purple-900 to-black",
      "Team Rocket": "from-purple-900 via-red-800 to-black",
      "Ascended Heroes": "from-yellow-400 via-orange-500 to-red-500",
      "Cyber Judge": "from-cyan-400 via-blue-500 to-purple-600",
      "Phantasmal Flames": "from-purple-600 via-pink-500 to-orange-500",
      "Wild Force": "from-green-500 via-emerald-600 to-teal-600",
      "Mega Evolution": "from-blue-600 via-purple-600 to-pink-600",
      "Prismatic Evolution": "from-pink-400 via-purple-500 to-indigo-600",
      "Surging Sparks": "from-yellow-400 via-orange-500 to-red-600",
      "151 Pokemon": "from-red-500 via-red-600 to-red-700",
    };
    return gradients[name] || "from-blue-500 via-purple-500 to-pink-500";
  };

  const packImage = packImages[name];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative"
    >
      <div className="gradient-border overflow-hidden">
        {/* Holographic overlay */}
        <div className="absolute inset-0 holographic pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Card content */}
        <div className={`relative bg-gradient-to-br ${getPackGradient(name)} p-1 rounded-lg`}>
          <div className="bg-card/90 backdrop-blur-sm rounded-md p-3 h-full">
            {/* Region badge */}
            {region && (
              <Badge 
                variant="outline" 
                className={`absolute top-2 right-2 z-20 text-xs font-bold border-2 ${
                  region === "JP" 
                    ? "border-red-500 text-red-400 bg-red-500/20" 
                    : "border-blue-400 text-blue-300 bg-blue-500/20"
                }`}
              >
                {region === "JP" ? "🇯🇵 JP" : "🇰🇷 KR"}
              </Badge>
            )}
            
            {/* Pack image */}
            <div className="relative w-full aspect-[3/4] mb-3 rounded-md overflow-hidden">
              <img 
                src={packImage} 
                alt={name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-full group-hover:translate-x-full" style={{ transition: 'transform 0.6s ease-in-out, opacity 0.3s ease-in-out' }} />
            </div>
            
            {/* Pack name */}
            <h3 className="font-display font-bold text-sm text-foreground leading-tight text-center">
              {name}
            </h3>
            
            {/* Decorative line */}
            <div className={`mt-2 h-1 rounded-full bg-gradient-to-r ${getPackGradient(name)} opacity-60`} />
            
            {/* Availability indicator */}
            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-muted-foreground">In Stock</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
    </motion.div>
  );
};

export default PackCard;
