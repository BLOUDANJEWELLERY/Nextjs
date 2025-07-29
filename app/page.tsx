'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const slides = [
    '/slide1.jpg',
    '/slide2.jpg',
    '/slide3.jpg',
  ];

  const products = [
    { name: 'Gold Ring', desc: '21K Pure Brilliance', img: '/gold-ring.jpg' },
    { name: 'Silver Necklace', desc: 'Elegant Shine', img: '/silver-necklace.jpg' },
    { name: 'Diamond Bracelet', desc: 'Timeless Sparkle', img: '/diamond.jpg' },
  ];

  const [heroIndex, setHeroIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0);

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(heroTimer);
  }, []);

  return (
    <main style={{ margin: 0, fontFamily: 'sans-serif' }}>
      {/* Navbar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
        background: '#000',
        color: '#fff',
        alignItems: 'center'
      }}>
        <h1 style={{ margin: 0 }}>Captain Store</h1>
        <div style={{ fontSize: '1.5rem', cursor: 'pointer' }}>☰</div>
      </nav>

      {/* Hero Slider */}
      <section style={{
        position: 'relative',
        height: '70vh',
        overflow: 'hidden'
      }}>
        <img
          src={slides[heroIndex]}
          alt="Hero Slide"
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.5s' }}
        />
        <button style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#fff',
          border: 'none',
          padding: '1rem 2rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          borderRadius: '5px'
        }}>
          Shop Now
        </button>
      </section>

      {/* Top Rated Products Slider */}
      <section style={{
        marginTop: '2rem',
        padding: '1rem',
        textAlign: 'center'
      }}>
        <h2>Top Rated Products</h2>
        <div style={{
          position: 'relative',
          height: '300px',
          marginTop: '1rem',
        }}>
          <div style={{
            display: 'flex',
            transform: `translateX(-${productIndex * 100}%)`,
            transition: '0.5s ease',
            width: `${products.length * 100}%`
          }}>
            {products.map((product, idx) => (
              <div key={idx} style={{
                flex: '0 0 100%',
                padding: '1rem'
              }}>
                <img src={product.img} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button onClick={() => setProductIndex((prev) => (prev - 1 + products.length) % products.length)} style={arrowStyle('left')}>‹</button>
          <button onClick={() => setProductIndex((prev) => (prev + 1) % products.length)} style={arrowStyle('right')}>›</button>
        </div>
      </section>
    </main>
  );
}

const arrowStyle = (side: 'left' | 'right') => ({
  position: 'absolute',
  top: '50%',
  [side]: '10px',
  transform: 'translateY(-50%)',
  fontSize: '2rem',
  background: '#fff',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  padding: '0.3rem 0.7rem',
  boxShadow: '0 0 10px rgba(0,0,0,0.2)'
});