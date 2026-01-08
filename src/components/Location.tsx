import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const Location = () => {
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
            <span className="text-glow-primary text-primary">Find</span>{" "}
            <span className="text-foreground">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Visit our Pokemon TCG vending machine location
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-lg overflow-hidden gradient-border h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977904692956!2d-122.41941542392031!3d37.77492971198424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vending Machine Location"
            />
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="gradient-border p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/20 box-glow-primary">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    Location
                  </h3>
                  <p className="text-muted-foreground">
                    123 Pokemon Street<br />
                    San Francisco, CA 94102<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="gradient-border p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/20 box-glow-accent">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    Hours
                  </h3>
                  <p className="text-muted-foreground">
                    Open 24/7<br />
                    <span className="text-green-400">● Machine Active Now</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="gradient-border p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/20 box-glow-secondary">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    Support
                  </h3>
                  <p className="text-muted-foreground">
                    support@pokemontcgvending.com<br />
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
