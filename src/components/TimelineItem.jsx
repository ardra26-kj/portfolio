import { motion } from "framer-motion";

export default function TimelineItem({ index, children, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-10"
    >
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-teal shadow-[0_0_0_4px_rgba(92,201,176,0.15)]" />
      {!isLast && (
        <span className="absolute left-[5px] top-5 h-full w-px bg-border" />
      )}
      {children}
    </motion.div>
  );
}
