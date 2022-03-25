import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
const [currency, setCurrency] = useState("INR");
const [symbol, setSymbol] = useState("₹");
   
  useEffect(() => {
    if(currency === "INR") setSymbol("₹");
    else if(currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>{children}</Crypto.Provider>
  );
};

export default CryptoContext

export const CryptoState = () => {
  return useContext(Crypto);
};