import '../styles/Partners.css';

function Partners({ PartnersList = [] }) {
  // Cek jika data kosong untuk menghindari error
  if (!PartnersList || PartnersList.length === 0) {
    return <p>Tidak ada partner untuk ditampilkan.</p>;
  }

  return (
    <div className="partner-list">
      {PartnersList.map((item, index) => (
        <div className='kartu-partner' key={item.id || index}>
          {/* Pastikan src menerima URL atau path gambar yang benar */}
          <img 
            src={item.image} 
            alt={item.image || 'Partner Logo'} 
            style={{ width: '100%', height: 'auto' }} // Opsional: memastikan ukuran terkontrol
          />
          {/* Baris di bawah ini dihapus jika Anda hanya ingin gambar, bukan teks path-nya */}
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Partners;