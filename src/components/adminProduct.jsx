import React, { useState } from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Alert from "react-bootstrap/Alert";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import API from "../utils/API";
import { useNavigate } from "react-router-dom";

export default function EditProduct({ data }) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const [priceType, setPriceType] = useState("SALE");

  const navigate = useNavigate();

  const handleClose = () => {
    API.delete(`/product/${data.id}`).then((res) => {
      if (res) {
        setShow(false);
        navigate("/product");
      }
    });
  };
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);

  const formClick = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", e.target[0].value);
    formData.append("description", e.target[1].value);
    formData.append("discount", e.target[2].value);
    formData.append("priceList", [
      {
        type: priceType,
        price: e.target[4].value,
      },
    ]);
    formData.append("categoryId", 1);
    formData.append("brandId", 1);
    formData.append("measurementId", 1);
    formData.append("codeList", [e.target[5].value]);
    formData.append("photos", [e.target[6].files[0]]);

    API.put(`/product/${data.id}`, formData).then((res) => { 
      if(res){
        setShow1(false);
        navigate("/product");
      }
    }).catch(err => {
      if (err) {
        setShow2(true);
      }
    })
  };
  return (
    <Wrapper to={`/admin/product/${data.id}`} type={data.type}>
      {show2 && (
        <Alert
          variant={"danger"}
          dismissible
          style={{ position: "absolute", zIndex: 100000, right: 30 }}
          onClose={() => setShow2(false)}
        >
          Product not added !
        </Alert>
      )}
      {data.photos.length > 1 ? (
        <Carousel>
          {data.photos.map((item, index) => {
            return (
              <Carousel.Item interval={3000} key={index}>
                <img
                  className="d-block productImg"
                  src={`https://profitmodel-server.herokuapp.com/api/product/${data.id}/photo/${item.id}`}
                  alt="First slide"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      ) : (
        <img
          className="productImg"
          src={`https://profitmodel-server.herokuapp.com/api/product/${data.id}/photo/${data.photos[0].id}`}
          alt={data.name}
        />
      )}
      <div className="text">
        <div className="text__l">
          <b>{data.name}</b>
          <p>{data.brand.name}</p>
        </div>
        <button
          className="btn btn-outline-primary"
          onClick={() => setShow1(true)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          style={{ marginLeft: 10 }}
          onClick={handleShow}
        >
          Delete
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formClick} className="form">
            <Form.Label>Name</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Name" />

            <Form.Label>Description</Form.Label>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Description"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Description" />
            </FloatingLabel>

            <Form.Label>Discount</Form.Label>
            <Form.Control
              size="sm"
              type="number"
              max={100}
              step={0.5}
              placeholder="Discount"
            />

            <Form.Label>Sale Price</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setPriceType(e.target.value)}
            >
              <option value="SALE">SALE</option>
              <option value="WHOSALE">WHOSALE</option>
              <option value="BANK">BANK</option>
            </Form.Select>

            <Form.Label>Price</Form.Label>
            <Form.Control size="sm" type="number" placeholder="Price" />

            <Form.Label>Barcode</Form.Label>
            <Form.Control size="sm" type="number" placeholder="Barcode" />
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" />

            <Button
              variant="primary"
              type="submit"
              style={{ marginTop: 20, marginLeft: "auto" }}
            >
              Yes
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 16px;

  img {
    padding: 8px;
    background: #ffffff;
    border-radius: 22px;
    height: 232px;
  }

  .text {
    margin-left: 10px;
    b {
      font-weight: 500;
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 8px;
      display: block;

      color: #1a1f16;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: -0.02em;

      color: #60695c;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 15px;

    input,
    textarea,
    select {
      width: 596px;
      margin-bottom: 15px;
      resize: none;
      outline: none;
      border: none;
      background: #ffffff;
      box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
      border-radius: 13px;
      padding: 5px 15px;
      font-size: 14px;
      color: #585858;

      &::placeholder {
        color: rgba(177, 177, 177, 0.486);
      }
    }

    textarea {
      height: 60px;
    }

    label {
      font-weight: 400;
      font-size: 14px;
      line-height: 15px;
      letter-spacing: -0.02em;
      color: rgba(26, 31, 22, 0.5);
      margin: 0 0 5px 5px;
    }

    button {
      padding: 8px;
      border: none;
      background: #1a1f16;
      border-radius: 10px;
      color: white;
      letter-spacing: 1px;
      cursor: pointer;
    }

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }
  .custom-file-input::before {
    content: "Select Image";
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
  .custom-file-input:hover::before {
    cursor: pointer;
    border-color: black;
  }
  .custom-file-input:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
`;
