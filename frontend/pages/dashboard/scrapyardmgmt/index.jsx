import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  BsFillPinMapFill
} from "react-icons/bs";
import dynamic from "next/dynamic";
import Layout from "@/components/layout";
import Axios from "@/helper/axios.helper";
import _ from "lodash";
import { pages } from "@/utils/contanst";
import { NextResponse } from "next/server";
import PostDashboard from "@/components/postDashboard";
import CreatePost from "@/components/createPost"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table, Row, Col,
  Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export async function getServerSideProps({ req, res }) {
  const nonce = req.headers['x-nonce']
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
      nonce
    },
  };
}

export default function Dashboard({ userData, nonce }) {
  const { id, fullname, name, email, accessApp } = userData; // accessApp = "dashboard, post"

  const [layoutPages, setLayoutPages] = useState([]);
  const Map = dynamic(() => import("@/components/Map"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  });

  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    detectAccessPage()
  }, []);

  const detectAccessPage = () => {
    const accessAppsList = accessApp.split(", ");
    if (accessAppsList && Array.isArray(accessAppsList)) {
      const userPages = _.filter(pages, (page) => {
        return accessAppsList.includes(page.key);
      });
      setLayoutPages(userPages);
    }
  }

  const toggle = () => setModal(!modal);

  const externalCloseBtn = (
    <button
      type="button"
      className="close"
      style={{ position: 'absolute', top: '15px', right: '15px' }}
      onClick={toggle}
    >
      &times;
    </button>
  );

  const handleCreatedCB = () => {
    setModal(false)
    refreshPosts()
  }

  const handleClickMapCb = () => {
    
  }

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
          <hr></hr>
          <Row>
            <Col sm={10}>
              <h3>Quản lý vựa ve chai</h3>
            </Col>
            <Col sm={2}>
              <a onClick={toggle}>Tạo vựa ve chai</a>
            </Col>
          </Row>
          <Map markerList={[ { position: [10.861481, 106.6194982], popupContent: 'Huy test' } ]}></Map>
          <Table borderless hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Hình ảnh</th>
                <th>Tên vựa</th>
                <th>Địa chỉ vựa</th>
                <th>Thời gian mở cửa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table>
        </Layout>
      </main>

      <Modal
        isOpen={modal}
        toggle={toggle}
        external={externalCloseBtn}
        fullscreen
      >
        <ModalHeader>
          <span style={{ color: "#ccc" }}>Tạo vựa ve chai</span>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>
                Tên vựa
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleEmail"
                  name="name"
                  placeholder="Tên vựa ve chai"
                  type="text"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}>
                Địa chỉ vựa
              </Label>
              <Col sm={10}>
                <Input
                  id="examplePassword"
                  name="address"
                  placeholder="Địa chỉ vựa"
                  type="text"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleText" sm={2}>
                Thời gian mở cửa
              </Label>
              <Col sm={10}>
                <Input id="exampleText" name="opentime" type="textarea" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleFile" sm={2}>
                Ảnh vựa
              </Label>
              <Col sm={10}>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>
                  Chọn ảnh đại diện của vựa
                </FormText>
              </Col>
            </FormGroup>
            <FormGroup row>
            <Map handleClickMapCb={handleClickMapCb}></Map>
            </FormGroup>
            <FormGroup>
              <Button >Hủy</Button>
              <Button >Tạo</Button>
            </FormGroup>
          </Form>      
        </ModalBody>
      </Modal>
    </>
  );
}