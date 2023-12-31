import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import {BsArrowReturnLeft} from "react-icons/bs"

import axiosClient from '@/utils/fetch.utils';

import styles from '@/styles/Login.module.css';
import styles2 from '@/styles/Home.module.css';


export default function Login() {
  const [username, setUsername] = useState({});
  const [pass, setPass] = useState({});

  const getLogin = (email, password) => {
    return axios.post('/api/customer/login', {
      email: email,
      password: password
    })
  }

  const handelLogin = () => {
    getLogin(username, pass).then(function (response) {
      //  console.log(response);
      let data = response.data;
      if (data && !data.error) {
        if (data && data.data) {
          const token = data.data.token
          console.log(token)
          //window.localStorage.setItem('tokenshop', token)
          //axiosClient.defaults.headers.common['authorization-shop'] = token;
          setCookie('vechaitoken', token, 2)
          window.location.replace('/dashboard')
        } else {

        }
      } else {

      }
    });
  }

  const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  return <>
    <Head>
      <title>Đăng Nhập</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="ico" href="/favicon.ico"></link>
    </Head>
    <nav className={styles2.nav}>
      <div className={styles2.logo}>
        <div className={styles2.text}>VeChai</div>
      </div>
      <div>
        <ul className={styles2.list1}>
          <li><Link className={styles2.linknav} href="/">
            <BsArrowReturnLeft style={{marginRight: '5px'}}/>Quay Về Trang Chủ</Link></li>
        </ul>
      </div>
    </nav>
    <div className={styles.Login}>
      <h1 className={styles.textLogin}>Đăng Nhập</h1>
      <form className={styles.fromLogin}>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="form2Example1"
            className="form-control"
            placeholder={"Tên đăng nhập (Email)"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            placeholder={"Mật khẩu"}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </div>

        <div className="row mb-2">
          <div className="col">
            <Link className={styles.dktk} href="/signup" style={{ fontSize: "1rem" }}>
              Đăng ký tài khoản mới!
            </Link>
          </div>
        </div>

        <button
          type="button"
          className="btn-đn btn-block mb-4"
          onClick={handelLogin}
        >
          Đăng nhập
        </button>
      </form>
    </div>
  </>

} 