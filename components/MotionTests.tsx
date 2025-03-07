import { motion } from "framer-motion";

const MotionTests = () => {
  const ballVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: i * 0.3, // 0.3s stagger delay for each ball
      },
    }),
  };

  return (
    <section className="flex justify-center items-center h-screen">
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 300, damping: 10 },
      }}
      className="group w-full max-w-sm p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800"
    >
      <h6 className="text-center font-bold mb-4">Card Title</h6>

      {/* Balls container */}
      <motion.div
        initial="hidden"
        whileHover="visible"
        className="flex justify-center gap-4"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={ballVariants}
            className="w-8 h-8 rounded-full bg-blue-500"
          />
        ))}
      </motion.div>
    </motion.div>
  </section>
  );
};

export default MotionTests;
