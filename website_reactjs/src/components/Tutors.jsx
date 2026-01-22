import '../styles/Tutors.css';

function Tutors({ tutorsList = [] }) {
  // 1. Validasi: Jika data kosong, tampilkan pesan atau null agar tidak kosong melompong
  if (tutorsList.length === 0) {
    return <p style={{ textAlign: 'center' }}>No tutors available.</p>;
  }

  return (
    <div className="tutorsList">
      {tutorsList.map((item) => (
        // 2. Prioritaskan item.id sebagai key. Jangan gunakan index jika ada ID unik.
        <div className="kartu-tutor" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className="tutor-info">
            <p className="tutor-name">{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tutors;