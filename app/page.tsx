'use client';

import { useState, useEffect, CSSProperties } from 'react';

const sliderImages = [
  '/slide1.jpg',
  '/slide2.jpg',
  '/slide3.jpg',
];

const products = [
  { id: 1, title: 'Gold Necklace', img: '/gold-ring.jpg' },
  { id: 2, title: 'Diamond Ring', img: '/silver-necklace.jpg' },
  { id: 3, title: 'Elegant Bracelet', img: '/diamond.jpg' },
];

const arrowStyle = (direction: 'left' | 'right'): CSSProperties => ({
  position: 'absolute' as const,
  top: '50%',
  transform: 'translateY(-50%)',
  [direction]: '10px',
  fontSize: '24px',
  background: '#fff',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  padding: '6px 10px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  zIndex: 1,
});

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % sliderImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      {/* Navbar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 20px',
        backgroundColor: '#222',
        color: '#fff',
      }}>
        <h1 style={{ fontSize: '20px', margin: 0 }}>BLOUDAN</h1>
        <div style={{
          width: '24px',
          height: '18px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}>
          <span style={{ background: '#fff', height: '3px' }} />
          <span style={{ background: '#fff', height: '3px' }} />
          <span style={{ background: '#fff', height: '3px' }} />
        </div>
      </nav>

      {/* Hero Slider */}
      <section style={{ position: 'relative', height: '70vh', overflow: 'hidden' }}>
        <img
          src={sliderImages[slideIndex]}
          alt="hero"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.5s ease-in-out',
          }}
        />
        <button style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'gold',
          color: '#000',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}>
          Shop Now
        </button>
      </section>

      {/* Top Rated Products */}
      <section style={{ padding: '20px 0', textAlign: 'center', position: 'relative' }}>
        <h2 style={{ marginBottom: '16px' }}>Top Rated Products</h2>
        <div style={{ position: 'relative', width: '100%', overflow: 'hidden', maxWidth: '400px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            transition: 'transform 0.4s ease',
            transform: `translateX(-${productIndex * 100}%)`,
          }}>
            {products.map((p) => (
              <div key={p.id} style={{ flex: '0 0 100%', padding: '10px' }}>
                <img src={p.img} alt={p.title} style={{ width: '100%', borderRadius: '8px' }} />
                <p style={{ marginTop: '8px', fontWeight: 'bold' }}>{p.title}</p>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button onClick={() =>
            setProductIndex((prev) => (prev - 1 + products.length) % products.length)
          } style={arrowStyle('left')}>‹</button>
          <button onClick={() =>
            setProductIndex((prev) => (prev + 1) % products.length)
          } style={arrowStyle('right')}>›</button>
        </div>
      </section>
    </div>
  );
}