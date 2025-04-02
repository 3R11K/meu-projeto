import { BrowserProvider, Contract } from "ethers";
import contractABI from "../utils/ABI.json"; // Importando a ABI JSON

const CONTRACT_ADDRESS = "0x9b8ffD9aF0Ea366cC0Ee756c6a63BCE265B172e8";

export const getContract = async () => {
  if (!window.ethereum) {
    alert("Metamask não encontrada!");
    return null;
  }

  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  return new Contract(CONTRACT_ADDRESS, contractABI, signer);
};
