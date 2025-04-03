import { BrowserProvider, Contract } from "ethers";
import contractABI from "../utils/ABI.json"; // Importando a ABI JSON

const CONTRACT_ADDRESS = "0x36319229FCdb6c89bAe27746Ef322Fa2BE04fA45";

export const getContract = async () => {
  if (!window.ethereum) {
    alert("Metamask não encontrada!");
    return null;
  }

  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  return new Contract(CONTRACT_ADDRESS, contractABI, signer);
};
