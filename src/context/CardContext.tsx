import { createContext, useState, useContext, ReactNode } from "react";
import brisbaneImage from "../images/brisbane_vgpzva.jpg";

export type CardData = {
  image: string;
  heading: string;
  text: string | string[];
  buttonText: string;
};

type CardContextType = {
  selectedCard: number;
  setSelectedCard: (index: number) => void;
  cardData: CardData[];
};

const CardContext = createContext<CardContextType | undefined>(undefined);

type CardProviderProps = {
  children: ReactNode;
};

export const CardProvider = ({ children }: CardProviderProps) => {
  const [selectedCard, setSelectedCard] = useState(1);
  const [cardData] = useState<CardData[]>([
    {
      image: brisbaneImage,
      heading: "Heading 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing eliti sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      buttonText: "Button 1",
    },
    {
      image: brisbaneImage,
      heading: "Heading 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing eliti sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
      buttonText: "Button 2",
    },
    {
      image: brisbaneImage,
      heading: "Heading 3",
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
        "incididunt ut labore et dolore magna aliqua IJt enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      ],
      buttonText: "Button 3",
    },
  ]);

  return (
    <CardContext.Provider value={{ selectedCard, setSelectedCard, cardData }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
};
