import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-gradient-to-r from-amber to-teal text-[#0b0e14] font-semibold shadow-[0_0_24px_-6px_rgba(224,169,92,0.5)]",
  outline:
    "border border-border text-text hover:border-teal/60 hover:text-teal",
  ghost: "text-muted hover:text-text",
};

export default function Button({
  as: Tag = "button",
  variant = "primary",
  icon: Icon,
  className = "",
  children,
  ...props
}) {
  const base =
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm transition-colors duration-300";
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="text-base" />}
      {children}
    </motion.a>
  );
}
