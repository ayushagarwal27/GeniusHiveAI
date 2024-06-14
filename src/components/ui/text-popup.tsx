"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const visible = { opacity: 1, y: 0, transition: { duration: 0.8 } };

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible,
};
interface TextPopUpProps {
  children: ReactNode;
}

export function TextPopUp({ children }: TextPopUpProps) {
  return (
    <motion.article
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <motion.div variants={itemVariants}>{children}</motion.div>
    </motion.article>
  );
}
