import { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components"
import BagIcon from "../assets/icons/bagw.svg"
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Product({ data, addBag }) {
  const bagElements = JSON.parse(localStorage.getItem("bags"))?.map(
    ({ id }) => id
  );

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <Wrapper type={data.type}>
      <div className="info" data-aos="fade-up">
        <div className="productImgContainer">
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
        </div>

        {/* <Carousel>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://picsum.photos/200/300"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://picsum.photos/200/300"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://picsum.photos/200/300"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel> */}
        <div className="content">
          <b>{data.name}</b>
          <p className="description">{data.description}</p>
          <div className="models">
            <p className="model">{data.brand?.name}</p>
            <p className="model">{data.category?.name}</p>
          </div>

          <div className="prices">
            {data.priceList.map((price) => {
              return (
                <div className="priceBox" key={Math.random()}>
                  <div className="priceContainer">
                    <p>{price.price}$</p>
                    <p>{price.type}</p>
                  </div>
                  <img
                    src={BagIcon}
                    onClick={() => addBag(data)}
                    alt=""
                    style={{
                      display: bagElements?.includes(data.id)
                        ? "none"
                        : "inline-block",
                    }}
                  />
                </div>
              );
            })}
            {/* <div className="price">
              <p>${data.priceList[0]?.price}</p>
              <img
                src={BagIcon}
                onClick={() => addBag(data)}
                alt=""
                style={{
                  display: bagElements?.includes(data.id)
                    ? "none"
                    : "inline-block",
                }}
              />
            </div> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  grid-column: ${({ type }) => (type === "laptop" ? "span 2" : "span 1")};
  .info {
    display: flex;
    flex-direction: column;

    .productImgContainer {
      width: 100%;
      padding: 8px;
      background: #ffffff;
      border-radius: 22px;
      height: 232px;

      img {
        display: block;
        margin: auto;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .content {
      margin-top: 16px;
      margin-left: 5px;

      b {
        display: block;
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 8px;
        color: #1a1f16;
      }
      .description {
        font-size: 10px !important;
        color: #60695c !important;
        margin-bottom: 4px;
      }
      .models {
        display: flex;
        justify-content: space-between;

        .model {
          font-weight: 400;
          font-size: 12px;
          line-height: 19px;
          letter-spacing: -0.02em;
          color: #60695c;
          margin-bottom: 8px;
        }
      }

      .priceBox {
        display: flex;
        align-items: center;
        justify-content: space-between;
        priceContainer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        p {
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;

          color: #1a1f16;
        }

        img {
          padding: 9px;
          background: #1a1f16;
          border-radius: 9px;
          cursor: pointer;
        }
      }
    }
  }
`;
