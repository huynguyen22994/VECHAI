import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import { BsSun, BsFillMoonStarsFill, BsFillBellFill,BsFillGridFill } from "react-icons/bs"
import dynamic from 'next/dynamic'

export default function Dashboard() {
  const Map = dynamic(() => import("@/components/Map"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  });     
    

    const handelLogout = () =>{
        setCookie('vechaitoken', '')
        window.location.reload()

    }

    const setCookie = (cname, cvalue, exdays) => {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }


    return <>
        <Head>
            <title>Trang chủ</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="ico" href="/favicon.ico"></link>
        </Head>
        <main>
            {/* <!-- Dashboard --> */}
            <div className="dashboard">
                {/* <!-- Sidebar --> */}
                <div className="sidebar flex-c flex-sb">
                    <div className="brand">VeChai</div>
                    <div className="side-nav">
                        <div className="menu-item flex active">
                            <div className="icon">
                                <BsFillGridFill/>
                            </div>

                            <p>Dashboard</p>
                        </div>

                      </div>
                    <div className="log-out">
                        <div className="menu-item flex" onClick={handelLogout}>
                            <div className="icon">
                                <ion-icon name="log-out-outline"></ion-icon>
                            </div>

                            <p>Logout</p>
                        </div>
                    </div>
                </div>
                {/* <!-- End Sidebar --> */}

                {/* <!-- Dashboard Content --> */}
                <div className="dashboard-content">
                    {/* <!-- ======Topbar======= --> */}
                    <div className="topbar flex flex-sb">
                        <div className="search flex">
                            <div className="icon">
                                <ion-icon name="search-outline"></ion-icon>
                            </div>
                            <input type="text" placeholder=" Search any collection" />
                        </div>

                        <div className="theme flex">
                            <div className="dark flex">
                                <BsFillMoonStarsFill/>
                            </div>
                            <div className="light active flex">
                               <BsSun/>
                            </div>
                        </div>

                        <div className="notification icon">
                            <BsFillBellFill/>
                        </div>

                        <div className="user flex flex-sb">
                            <img
                                src="https://raw.githubusercontent.com/programmercloud/nft-dashboard/main/img/user.png"
                                alt=""
                            />
                            <p>Hassnain</p>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                    </div>
                    {/* <!-- ======End Topbar======= --> */}

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
                </div>
                {/* <!-- End Dashboard Content --> */}
            </div>
            {/* <!-- End Dashboard --> */}
        </main>
        <Script src="/js/dashboard.js"></Script>
    </>

} 