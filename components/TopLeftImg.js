"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const TopLeftImg = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const pathImage =
    currentTheme === "light"
      ? "/topLeft-img-light.png"
      : "/topLeft-img-dark.png";

  return (
    <div className="absolute left-0 top-0 z-10 w-[200px] xl:w-[400px] animate-pulse">
      <Image src={pathImage} width={400} height={400} alt="" unoptimized />
    </div>
  );
};

export default TopLeftImg;
