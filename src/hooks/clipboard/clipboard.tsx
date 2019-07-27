import { useRef, useState, MutableRefObject } from "react";

export type UseClipboard = [
    {ref: MutableRefObject<HTMLElement | undefined>, onClick: () => Promise<void>},
    boolean
];

export const useClipboard = (ref: MutableRefObject<HTMLElement | undefined> = useRef<HTMLElement>()): UseClipboard => {
  const [isCoppied, setIsCoppied] = useState(false);

  const onClick = async () => {
    if (!ref.current) {
        console.warn("ref.current is undefined. Did you forget to assign the ref?");

        return;
    }

    await navigator.clipboard.writeText(ref.current.innerText);
    setIsCoppied(true);
  };

  return [{ ref, onClick }, isCoppied];
};

export default useClipboard;