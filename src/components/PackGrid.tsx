import { motion } from "framer-motion";
import PackCard from "./PackCard";

interface Pack {
  name: string;
  region?: "JP" | "KR";
}

const packs: Pack[] = [
  { name: "Inferno X" },
  { name: "Inferno X", region: "JP" },
  { name: "Mega Symphonia" },
  { name: "Mega Symphonia", region: "JP" },
  { name: "Mega Brave" },
  { name: "Mega Brave", region: "JP" },
  { name: "Mega Dream EX" },
  { name: "Mega Dream EX", region: "JP" },
  { name: "White Flare" },
  { name: "Black Bolt" },
  { name: "Team Rocket" },
  { name: "Ascended Heroes" },
  { name: "Cyber Judge" },
  { name: "Phantasmal Flames" },
  { name: "Wild Force" },
  { name: "Phantasmal Flames", region: "KR" },
  { name: "Mega Evolution" },
  { name: "Prismatic Evolution" },
  { name: "Surging Sparks" },
  { name: "151 Pokemon" },
];

const PackGrid = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-glow-primary text-primary">Available</span>{" "}
            <span className="text-foreground">Packs</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Browse our collection of premium Pokemon TCG booster packs from around the world
          </p>
        </motion.div>

        {/* Filter badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <span className="px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground">
            All Packs
          </span>
          <span className="px-4 py-2 rounded-full bg-card/50 border border-border/50 text-sm text-muted-foreground hover:bg-card hover:border-border transition-colors cursor-pointer">
            🌍 International
          </span>
          <span className="px-4 py-2 rounded-full bg-card/50 border border-border/50 text-sm text-muted-foreground hover:bg-card hover:border-border transition-colors cursor-pointer">
            🇯🇵 Japanese
          </span>
          <span className="px-4 py-2 rounded-full bg-card/50 border border-border/50 text-sm text-muted-foreground hover:bg-card hover:border-border transition-colors cursor-pointer">
            🇰🇷 Korean
          </span>
        </motion.div>

        {/* Pack grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {packs.map((pack, index) => (
            <PackCard
              key={`${pack.name}-${pack.region || "INT"}-${index}`}
              name={pack.name}
              region={pack.region}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackGrid;
