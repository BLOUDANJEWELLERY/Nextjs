export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to Captain's Store</h1>
      <p>Timeless treasures. Delivered with pride.</p>

      <section style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h2>Gold Ring</h2>
          <p>Crafted in 21K brilliance.</p>
          <button>View Details</button>
        </div>

        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h2>Silver Necklace</h2>
          <p>Elegance that speaks.</p>
          <button>View Details</button>
        </div>
      </section>
    </main>
  );
}