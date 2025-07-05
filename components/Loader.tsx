"use client";

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#F3F0E8] z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-12 h-12 rounded-full border-4 border-t-[#A3C1AD] border-[#F3F0E8] animate-spin"
      />
    </motion.div>
  );
};

export default Loader;
