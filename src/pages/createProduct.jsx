import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import API from "../utils/API";
import { useState } from "react";

export default function CreateProduct() {
  const navigate = useNavigate();
  const [priceType, setPriceType] = useState("SALE");

  const formClick = (e) => {
    e.preventDefault();
    let formData = new FormData()

    formData.append("name", e.target[0].value);
    formData.append("description", e.target[1].value);
    formData.append("discount", e.target[2].value);

    formData.append("priceList", [
      {
        type: priceType,
        price: e.target[4].value,
      }
    ]);

    formData.append("categoryId", 1);
    formData.append("brandId", 1);
    formData.append("measurementId", 1);
    formData.append("codeList", [e.target[5].value]);
    formData.append("photos", [e.target[6].files[0]]);

    API.post(`/product`, formData).then((res) => {
      if (res) {
        navigate("/admin");
      }
    });
  };

  return (
    <Wrapper>
      <Form onSubmit={formClick}>
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Name" />
        <label htmlFor="">Description</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Description"
        ></textarea>

        <label htmlFor="">Discount</label>
        <input type="number" step={0.5} max={100} placeholder="Discount" />

        <label htmlFor="">Sale Price</label>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setPriceType(e.target.value)}
        >
          <option value="SALE">SALE</option>
          <option value="WHOSALE">WHOSALE</option>
          <option value="BANK">BANK</option>
        </Form.Select>

        <label htmlFor="">Price</label>
        <input type="number" placeholder="Price" />

        <label htmlFor="">Barcode</label>
        <input type="number" placeholder="Barcode" />
        <label htmlFor="">Image</label>
        <input
          className="custom-file-input"
          type="file"
          accept=".jpg , .jpeg , .jfif , .pjpeg , .pjp, .png, .svg"
          style={{ cursor: "pointer" }}
        />

        <button>CREATE</button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  * {
    display: block;
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
