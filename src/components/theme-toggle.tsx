import { useMounted } from "@/hooks/use-mounted";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const MoonIcon = () => (
  <>
    <motion.svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ scale: 0.5, opacity: 0, rotate: 90 }}
      animate={{
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.2, type: "spring", stiffness: 100 },
      }}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </motion.svg>
  </>
);

export function ThemeToggle() {
  const mounted = useMounted();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
  }, []);

  return mounted ? (
    <div className="min-h-[40px] block">
      <AnimatePresence initial={false}>
        <MoonIcon />
      </AnimatePresence>
    </div>
  ) : (
    <div />
  );
}
