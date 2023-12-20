import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      //The reference exists (it is open) and the
      //click event matches a target
      //(The target is return and set as a prop in other element.)
      if (ref.current && !ref.current.contains(e.target)) {
        //console.log("click outside");
        handler();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
    };
  }, [handler, listenCapturing]);
  return { ref };
}
