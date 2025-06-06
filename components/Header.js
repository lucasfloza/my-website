import Link from "next/link";
import Socials from "../components/Socials";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <div className="text-3xl">
              <span className="font-bold ">lucas</span> <span>souza</span>{" "}
              <span className="text-red-600">.</span>
            </div>
          </Link>
          <Socials />
          {theme === "dark" ? (
            <BsSun
              size={25}
              cursor="pointer"
              onClick={() => setTheme("light")}
            />
          ) : (
            <FiMoon
              size={25}
              cursor="pointer"
              onClick={() => setTheme("dark")}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
