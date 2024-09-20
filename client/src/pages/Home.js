import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import Carousel from '../components/Layout/Carousel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cart';
import toast from 'react-hot-toast';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product/`);
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((p) => p._id === product._id);
    if (existingProduct) {
      // If the product is already in the cart, increase quantity
      const updatedCart = cart.map((p) =>
        p._id === product._id
          ? { ...p, quantity: p.quantity ? p.quantity + 1 : 2 }
          : p
      );
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      // If the product is not in the cart, add it
      const newProduct = { ...product, quantity: 1 };
      const updatedCart = [...cart, newProduct];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    toast.success('Item Added to Cart');
  };

  return (
    <Layout>
      <Carousel />
      <h3 className="text-center">
        🎆 New Arrivals{' '}
        <img
          src="/images/cart.png"
          alt="Cart"
          style={{ width: '24px', height: '24px', marginRight: '5px' }}
        />
      </h3>
      <div className="my-4">
        <Slider {...settings} className="mx-auto">
          {products.map((p) => (
            <div className="col" key={p._id}>
              <div className="card custom-card mb-3" style={{ width: '300px', height: '450px' }}>
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                  style={{ width: '100%', height: '60%' }}
                />
                <div
                  className="card-body"
                  style={{ height: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div>
                    <h5 className="card-title" style={{ color: 'black' }}>{p.name}</h5>
                    <p className="card-text" style={{ color: 'black' }}>{p.description.substring(0, 30)}...</p>
                    <p className="card-text" style={{ color: 'black' }}> ₹ {p.price}</p>
                  </div>
                  <button
                    className="btn btn-sm btn-secondary"
                    style={{ width: '100%', transition: 'transform 0.3s', transform: 'scale(1)' }}
                    onClick={() => addToCart(p)}
                  >
                    <span role="img" aria-label="cart">🛒</span> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Layout>
  );
};

export default Home;
