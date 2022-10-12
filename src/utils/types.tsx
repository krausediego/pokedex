import { IconType } from "react-icons";
import { BiCircle } from "react-icons/bi";
import { FaHandRock, FaLeaf, FaDragon } from "react-icons/fa";
import { MdNotInterested, MdLandscape, MdWaterDrop } from "react-icons/md";
import {
  GiFluffyWing,
  GiPoisonBottle,
  GiStoneBlock,
  GiMetalBar,
  GiFairyWand,
} from "react-icons/gi";
import { IoIosBug, IoMdSnow } from "react-icons/io";
import { RiGhostFill } from "react-icons/ri";
import { ImFire } from "react-icons/im";
import { AiFillThunderbolt } from "react-icons/ai";
import { SiLoop, SiShadow } from "react-icons/si";
import { CgDarkMode } from "react-icons/cg";
import { FaQuestion } from "react-icons/fa";

export type Name =
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | "unknown"
  | "shadow";

export const IconAndColorTypes = (
  name: Name
): { icon: IconType; color: string } => {
  switch (name) {
    case "normal":
      return {
        icon: BiCircle,
        color: "gray.600",
      };
    case "fighting":
      return {
        icon: FaHandRock,
        color: "#C44D61",
      };
    case "flying":
      return {
        icon: GiFluffyWing,
        color: "#758CBD",
      };
    case "poison":
      return {
        icon: GiPoisonBottle,
        color: "#AC6ACA",
      };
    case "ground":
      return {
        icon: MdLandscape,
        color: "#CE8056",
      };
    case "rock":
      return {
        icon: GiStoneBlock,
        color: "#84BEB3",
      };
    case "bug":
      return {
        icon: IoIosBug,
        color: "#9BBA48",
      };
    case "ghost":
      return {
        icon: RiGhostFill,
        color: "#616EB7",
      };
    case "steel":
      return {
        icon: GiMetalBar,
        color: "#6594A1",
      };
    case "fire":
      return {
        icon: ImFire,
        color: "#E96303",
      };
    case "water":
      return {
        icon: MdWaterDrop,
        color: "#4F77BE",
      };
    case "grass":
      return {
        icon: FaLeaf,
        color: "#73B861",
      };
    case "electric":
      return {
        icon: AiFillThunderbolt,
        color: "#D4BC34",
      };
    case "psychic":
      return {
        icon: SiLoop,
        color: "#EB8B85",
      };
    case "ice":
      return {
        icon: IoMdSnow,
        color: "#71BAAC",
      };
    case "dragon":
      return {
        icon: FaDragon,
        color: "#2C6AC1",
      };
    case "dark":
      return {
        icon: CgDarkMode,
        color: "#595761",
      };
    case "fairy":
      return {
        icon: GiFairyWand,
        color: "#E296E1",
      };
    case "unknown":
      return {
        icon: FaQuestion,
        color: "#E2B296",
      };
    case "shadow":
      return {
        icon: SiShadow,
        color: "#B396E2",
      };
    default:
      return {
        icon: MdNotInterested,
        color: "gray.500",
      };
  }
};
