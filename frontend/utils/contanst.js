import {
  BsSun,
  BsFillMoonStarsFill,
  BsFillBellFill,
  BsFillGridFill,
} from "react-icons/bs";

const pages = [
  {
    key: "dashboard",
    name: "Trang chủ",
    icon: <BsFillMoonStarsFill></BsFillMoonStarsFill>,
    href: "/login",
  },
  {
    key: "posts",
    name: "Bài đăng",
    icon: <BsFillBellFill></BsFillBellFill>,
    href: "/dashboard/post",
  },
  {
    key: "requests",
    name: "Báo giá",
    icon: <BsFillBellFill></BsFillBellFill>,
    href: "/dashboard/post",
  },
];
export { pages };
