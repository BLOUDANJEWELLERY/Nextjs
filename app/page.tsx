export default function Home() {
  return (
    <main
      style={{
        fontFamily: 'Segoe UI, sans-serif',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8f4f1, #fff)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '4rem 2rem',
        boxSizing: 'border-box',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          color: '#333',
        }}
      >
        Welcome to <span style={{ color: '#bfa14d' }}>Captain's Store</span>
      </h1>

      <p
        style={{
          fontSize: '1.25rem',
          color: '#555',
          maxWidth: '600px',
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        Discover timeless pieces forged in elegance. Gold, silver, and luxury — delivered to your door.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          width: '100%',
          maxWidth: '900px',
        }}
      >
        {/* Product 1 */}
        <div
          style={{
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 8px 16px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s ease',
          }}
        >
          <h2 style={{ color: '#bfa14d' }}>Gold Ring</h2>
          <p style={{ color: '#555' }}>21K brilliance, handcrafted perfection.</p>
          <button
            style={{
              marginTop: '1rem',
              background: '#bfa14d',
              color: '#fff',
              border: 'none',
              padding: '0.6rem 1.2rem',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            View Details
          </button>
        </div>

        {/* Product 2 */}
        <div
          style={{
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 8px 16px rgba(0,0,0,0.05)',
          }}
        >
          <h2 style={{ color: '#bfa14d' }}>Silver Chain</h2>
          <p style={{ color: '#555' }}>Modern grace. Traditional roots.</p>
          <button
            style={{
              marginTop: '1rem',
              background: '#bfa14d',
              color: '#fff',
              border: 'none',
              padding: '0.6rem 1.2rem',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            View Details
          </button>
        </div>

        {/* Product 3 */}
        <div
          style={{
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 8px 16px rgba(0,0,0,0.05)',
          }}
        >
          <h2 style={{ color: '#bfa14d' }}>Luxury Pendant</h2>
          <p style={{ color: '#555' }}>Statement of power and grace.</p>
          <button
            style={{
              marginTop: '1rem',
              background: '#bfa14d',
              color: '#fff',
              border: 'none',
              padding: '0.6rem 1.2rem',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </main>
  );
}