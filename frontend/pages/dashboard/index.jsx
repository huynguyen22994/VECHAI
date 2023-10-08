import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  BsSun,
  BsFillMoonStarsFill,
  BsFillBellFill,
  BsFillGridFill,
} from "react-icons/bs";
import dynamic from "next/dynamic";
import Layout from "@/components/layout";
import Axios from "@/helper/axios.helper";
import _ from "lodash";
import { pages } from "@/utils/contanst";
import { NextResponse } from "next/server";

export async function getServerSideProps({ req, res }) {
  const token = req.cookies["vechaitoken"];
  const { data } = await Axios({
    url: "/api/customer/getbytoken",
    method: "GET",
    headers: { authorization: token },
  });
  if (!data) NextResponse.redirect(new URL("/login", req.url));

  return {
    props: {
      userData: data[0],
    },
  };
}

export default function Dashboard({ userData }) {
  const { fullname, name, email, accessApp } = userData; // accessApp = "dashboard, post"

  const [layoutPages, setLayoutPages] = useState([]);

  useEffect(() => {
    const accessAppsList = accessApp.split(", ");
    if (accessAppsList && Array.isArray(accessAppsList)) {
      const userPages = _.filter(pages, (page) => {
        return accessAppsList.includes(page.key);
      });
      setLayoutPages(userPages);
    }
  }, []);

  const renderContent = (roleName) => {
    if (roleName === "saler") {
      return <SalerComponent></SalerComponent>;
    } else if (roleName === "buyer") {
      return <BuyerComponent></BuyerComponent>;
    } else {
      return <h1>test</h1>;
    }
  };

  return (
    <>
      <Head>
        <title>Trang chủ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="ico" href="/favicon.ico"></link>
      </Head>
      <main>
        <Layout pages={layoutPages} user={{ fullname, name, email }}>
          {renderContent(name)}
        </Layout>
      </main>
    </>
  );
}

function SalerComponent() {
  const Map = dynamic(() => import("@/components/Map"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  });

  return (
    <>
      {/* <!-- ======Section======= --> */}
      <div className="section flex flex-sb">
        {/* <!-- Section Left --> */}
        <div className="section-left">
          {/* <!-- ======Banner======= --> */}
          <div className="banner flex flex-sb">
            <div className="text">
              <h2>
                Dicover and sell <br />
                your own NFTs
              </h2>

              <Link href="/" className="btn">
                Discover Now
              </Link>
            </div>

            <img
              src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/banner.svg"
              alt=""
            />
          </div>

          <div className="nfts">
            <Map></Map>
            <div className="trending heading flex flex-sb">
              <h2>Trending NFTs</h2>
              <p>See all</p>
            </div>

            {/* <!-- ======Categories======= --> */}

            <div className="categories flex flex-sb">
              <div className="category flex">
                <div className="icon">🔥</div>
                <p>Trending</p>
              </div>

              <div className="category flex">
                <div className="icon">🎨</div>
                <p>Art</p>
              </div>

              <div className="category flex">
                <div className="icon">🕹️</div>
                <p>Game</p>
              </div>

              <div className="category flex">
                <div className="icon">👗</div>
                <p>Fashion</p>
              </div>

              <div className="category flex">
                <div className="icon">🎵</div>
                <p>Music</p>
              </div>
            </div>

            {/* <!-- =====Browse NFT===== --> */}
            <div className="browse">
              <div className="nft">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/nft-1.jpg"
                  alt=""
                />
                <div className="title">Weary Artwork</div>
                <div className="details flex flex-sb">
                  <div className="author flex">
                    <img
                      src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                      alt=""
                    />
                    <p>Hassnain Haider</p>
                  </div>
                  <div className="price">4.5 ETH</div>
                </div>
              </div>

              <div className="nft">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/nft-2.jpg"
                  alt=""
                />
                <div className="title">Spectrum of Color</div>
                <div className="details flex flex-sb">
                  <div className="author flex">
                    <img
                      src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                      alt=""
                    />
                    <p>Hassnain Haider</p>
                  </div>
                  <div className="price">4 ETH</div>
                </div>
              </div>

              <div className="nft">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/nft-3.jpg"
                  alt=""
                />
                <div className="title">Vivid Artwork</div>
                <div className="details flex flex-sb">
                  <div className="author flex">
                    <img
                      src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                      alt=""
                    />
                    <p>Hassnain Haider</p>
                  </div>
                  <div className="price">3.5 ETH</div>
                </div>
              </div>

              <div className="nft">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/nft-4.jpg"
                  alt=""
                />
                <div className="title">Natures Love</div>
                <div className="details flex flex-sb">
                  <div className="author flex">
                    <img
                      src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                      alt=""
                    />
                    <p>Hassnain Haider</p>
                  </div>
                  <div className="price">5 ETH</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Section Right --> */}
        <div className="section-right">
          <div className="graph flex-c">
            <p>Balance</p>
            <h2>93,565.00</h2>

            <img
              src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/graph.svg"
              alt=""
            />
          </div>

          <div className="top-creators">
            <div className="heading flex flex-sb">
              <h2>Top Creators</h2>
              <p>See all</p>
            </div>

            <div className="creator flex flex-sb">
              <div className="follow-creator flex">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                  alt=""
                />
                <div className="creator-details">
                  <h3>Hassnain Haider</h3>
                  <p>@hassnain</p>
                </div>
              </div>

              <Link href="/" className="btn following">
                Following
              </Link>
            </div>

            <div className="creator flex flex-sb">
              <div className="follow-creator flex">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                  alt=""
                />
                <div className="creator-details">
                  <h3>Hassnain Haider</h3>
                  <p>@hassnain</p>
                </div>
              </div>

              <Link href="/" className="btn follow following">
                Follow
              </Link>
            </div>

            <div className="creator flex flex-sb">
              <div className="follow-creator flex">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                  alt=""
                />
                <div className="creator-details">
                  <h3>Hassnain Haider</h3>
                  <p>@hassnain</p>
                </div>
              </div>

              <Link href="/" className="btn follow following">
                Follow
              </Link>
            </div>

            <div className="creator flex flex-sb">
              <div className="follow-creator flex">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                  alt=""
                />
                <div className="creator-details">
                  <h3>Hassnain Haider</h3>
                  <p>@hassnain</p>
                </div>
              </div>

              <Link href="/" className="btn follow following">
                Follow
              </Link>
            </div>

            <div className="creator flex flex-sb">
              <div className="follow-creator flex">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                  alt=""
                />
                <div className="creator-details">
                  <h3>Hassnain Haider</h3>
                  <p>@hassnain</p>
                </div>
              </div>

              <Link href="/" className="btn follow following">
                Follow
              </Link>
            </div>

            <div className="creator flex flex-sb">
              <div className="follow-creator flex">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                  alt=""
                />
                <div className="creator-details">
                  <h3>Hassnain Haider</h3>
                  <p>@hassnain</p>
                </div>
              </div>

              <Link href="/" className="btn follow following">
                Follow
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ======End Section======= --> */}
    </>
  );
}

function BuyerComponent() {
  const Map = dynamic(() => import("@/components/Map"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  });

  return (
    <>
      {/* <!-- ======Section======= --> */}
      <div className="heading" style={{ marginTop: 20, position: "relative" }}>
        <h2>Bản đồ vựa ve chai</h2>
        <Map></Map>

        <div className=" pane-map">
          <div className="top-creators" style={{ borderRadius: "20px 0px" }}>
            <div className="heading flex flex-sb">
              <h2>Vựa ve chai</h2>
              <p>Xem thêm</p>
            </div>

            <div className="creator flex flex-sb">
              <div className="follow-creator flex">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                  alt=""
                />
                <div className="creator-details">
                  <h3>Vựa thanh đa</h3>
                  <p>33 Thanh đa, Bình Thạnh</p>
                </div>
              </div>

              <Link href="/" className="btn following">
                Xem
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="section flex flex-sb">
        {/* <!-- Section Left --> */}
        <div className="section-left">
          {/* <!-- ======Banner======= --> */}

          <div className="nfts">
            <div className="trending heading flex flex-sb">
              <h2>Bài đăng ve chai cần bán</h2>
              <p>Tạo bài viết</p>
            </div>

            {/* <!-- ======Categories======= --> */}

            <div className="categories flex flex-sb">
              <div className="category flex">
                <div className="icon">🔥</div>
                <p>Nổi bật</p>
              </div>

              <div className="category flex">
                <div className="icon">🎨</div>
                <p>Yêu thích</p>
              </div>

              <div className="category flex">
                <div className="icon">🕹️</div>
                <p>Sắc</p>
              </div>

              <div className="category flex">
                <div className="icon">👗</div>
                <p>Quần áo</p>
              </div>

            </div>

            {/* <!-- =====Browse NFT===== --> */}
            <div className="browse">
              <div className="nft">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/nft-1.jpg"
                  alt=""
                />
                <div className="title">Weary Artwork</div>
                <div className="details flex flex-sb">
                  <div className="author flex">
                    <img
                      src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                      alt=""
                    />
                    <p>Hassnain Haider</p>
                  </div>
                  <div className="price">4.5 ETH</div>
                </div>
              </div>

              <div className="nft">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/nft-2.jpg"
                  alt=""
                />
                <div className="title">Spectrum of Color</div>
                <div className="details flex flex-sb">
                  <div className="author flex">
                    <img
                      src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                      alt=""
                    />
                    <p>Hassnain Haider</p>
                  </div>
                  <div className="price">4 ETH</div>
                </div>
              </div>

              <div className="nft">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/nft-3.jpg"
                  alt=""
                />
                <div className="title">Vivid Artwork</div>
                <div className="details flex flex-sb">
                  <div className="author flex">
                    <img
                      src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                      alt=""
                    />
                    <p>Hassnain Haider</p>
                  </div>
                  <div className="price">3.5 ETH</div>
                </div>
              </div>

              <div className="nft">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/nft-4.jpg"
                  alt=""
                />
                <div className="title">Natures Love</div>
                <div className="details flex flex-sb">
                  <div className="author flex">
                    <img
                      src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                      alt=""
                    />
                    <p>Hassnain Haider</p>
                  </div>
                  <div className="price">5 ETH</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Section Right --> */}
        <div className="section-right">
          <div className="top-creators">
            <div className="heading flex flex-sb">
              <h2>Top thu mua</h2>
              <p>Xem thêm</p>
            </div>

            <div className="creator flex flex-sb">
              <div className="follow-creator flex">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                  alt=""
                />
                <div className="creator-details">
                  <h3>Hassnain Haider</h3>
                  <p>@hassnain</p>
                </div>
              </div>

              <Link href="/" className="btn following">
                Following
              </Link>
            </div>

            <div className="creator flex flex-sb">
              <div className="follow-creator flex">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                  alt=""
                />
                <div className="creator-details">
                  <h3>Hassnain Haider</h3>
                  <p>@hassnain</p>
                </div>
              </div>

              <Link href="/" className="btn follow following">
                Follow
              </Link>
            </div>

            <div className="creator flex flex-sb">
              <div className="follow-creator flex">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                  alt=""
                />
                <div className="creator-details">
                  <h3>Hassnain Haider</h3>
                  <p>@hassnain</p>
                </div>
              </div>

              <Link href="/" className="btn follow following">
                Follow
              </Link>
            </div>

            <div className="creator flex flex-sb">
              <div className="follow-creator flex">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                  alt=""
                />
                <div className="creator-details">
                  <h3>Hassnain Haider</h3>
                  <p>@hassnain</p>
                </div>
              </div>

              <Link href="/" className="btn follow following">
                Follow
              </Link>
            </div>

            <div className="creator flex flex-sb">
              <div className="follow-creator flex">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                  alt=""
                />
                <div className="creator-details">
                  <h3>Hassnain Haider</h3>
                  <p>@hassnain</p>
                </div>
              </div>

              <Link href="/" className="btn follow following">
                Follow
              </Link>
            </div>

            <div className="creator flex flex-sb">
              <div className="follow-creator flex">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                  alt=""
                />
                <div className="creator-details">
                  <h3>Hassnain Haider</h3>
                  <p>@hassnain</p>
                </div>
              </div>

              <Link href="/" className="btn follow following">
                Follow
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ======End Section======= --> */}
    </>
  );
}