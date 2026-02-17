import { useEffect, useState } from "react";


const useNavbarScroll = () => {

    const [isScroll, setIsScroll] = useState(false) ;

    useEffect(() => {
      const handleScroll = ()=>{
        if (window.scrollY >70){
          setIsScroll(true) ;
        }else{
          setIsScroll(false) ;
        }
      }
      window.addEventListener("scroll" ,handleScroll ) ;
      return ()=>{
         window.removeEventListener("scroll" , handleScroll) ;
      }
    }, [])


  return isScroll ;

}

export default useNavbarScroll ;
