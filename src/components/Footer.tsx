import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎴</span>
            <span className="font-display font-bold text-xl text-primary">
              Pokemon TCG Vending
            </span>
          </div>

          {/* Info */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Premium Pokemon Trading Card Game packs from around the world
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2">
              Pokemon © Nintendo/Creatures Inc./GAME FREAK inc.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
