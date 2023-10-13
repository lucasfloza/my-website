// next image
import Image from "next/image";

// Providers themes
import { useTheme, ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";


const TopLeftImg = () => {
  const { theme, setTheme } = useTheme();
  const [pathImage, setPathImage] = useState('');

  const currentTheme = theme === 'system' ? systemTheme : theme;


  useEffect(()=>{
    console.log("Theme: ", currentTheme);
    setPathImage(currentTheme === 'light' ? '/top-left-img-light.png':'/top-left-img-dark.png')
    
  },[currentTheme])


  return (
      <div className="absolute left-0 top-0 z-10 w-[200px] xl:w-[400px]">

        <Image src={pathImage} width={400} height={400} alt="" />

        
      </div>
  );
};

export default TopLeftImg;
