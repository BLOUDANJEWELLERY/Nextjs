// pages/index.js
export default function HomePage() {
  return (
    <main style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '0 20px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Welcome to Captain's Store
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>
        Your one-stop shop for premium jewelry.
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '2rem',
      }}>
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', width: '150px' }}>
          <img
            src="https://via.placeholder.com/150"
            alt="Gold Necklace"
            style={{ width: '100%', borderRadius: '4px' }}
          />
          <h2 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>Gold Necklace</h2>
          <p style={{ color: '#888' }}>250 KWD</p>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', width: '150px' }}>
          <img
            src="https://via.placeholder.com/150"
            alt="Silver Ring"
            style={{ width: '100%', borderRadius: '4px' }}
          />
          <h2 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>Silver Ring</h2>
          <p style={{ color: '#888' }}>45 KWD</p>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', width: '150px' }}>
          <img
            src="https://via.placeholder.com/150"
            alt="Diamond Earrings"
            style={{ width: '100%', borderRadius: '4px' }}
          />
          <h2 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>Diamond Earrings</h2>
          <p style={{ color: '#888' }}>500 KWD</p>
        </div>
      </div>
    </main>
  );
}