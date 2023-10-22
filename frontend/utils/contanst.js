import {
  BsSun,
  BsFileRichtextFill,
  BsFillBellFill,
  BsShop,
  BsFillHouseFill,
  BsPersonLinesFill,
  BsFillPeopleFill
} from "react-icons/bs";

const pages = [
  {
    key: "dashboard",
    name: "Trang chủ",
    icon: <BsFillHouseFill></BsFillHouseFill>,
    href: "/dashboard",
  },
  {
    key: "posts",
    name: "Bài đăng",
    icon: <BsFileRichtextFill></BsFileRichtextFill>,
    href: "/dashboard/post",
  },
  {
    key: "findbuyer",
    name: "Tìm người mua",
    icon: <BsPersonLinesFill></BsPersonLinesFill>,
    href: "/dashboard/findbuyer",
  },
  {
    key: "findscrapyard",
    name: "Tìm vựa ve chai",
    icon: <BsShop></BsShop>,
    href: "/dashboard/findscrapyard",
  },
  {
    key: "salebuyconnect",
    name: "Lượt Kết Nối",
    icon: <BsFillPeopleFill></BsFillPeopleFill>,
    href: "/dashboard/salerbuyerconnect",
  },
  {
    key: "requests",
    name: "Báo giá",
    icon: <BsFillBellFill></BsFillBellFill>,
    href: "/dashboard/post",
  },
  {
    key: "scrapyardmgmt",
    name: "Quản lý vựa",
    icon: <BsFillBellFill></BsFillBellFill>,
    href: "/dashboard/scrapyardmgmt",
  },
];
export { pages };
