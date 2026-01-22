import '../styles/Contact.css';
import parse from "html-react-parser";

function Contact({ contactSection = [] }) {
  // 1. Menggunakan Destructuring Props agar kode lebih bersih
  // 2. Default value [] mencegah error jika props tidak dikirim
  
  if (!contactSection || contactSection.length === 0) return null;

  return (
    <section id="contact">
      <div className="wrapper"> 
        <footer className="footer"> 
          {contactSection.map((item, index) => (
            // 3. Gunakan ID unik jika tersedia, jika tidak baru gunakan index
            <div className="footer-section" key={item.id || index}>
              {/* 4. Menghapus div pembungkus yang tidak perlu agar DOM lebih ringan */}
              {parse(item.content || "")}
            </div>
          ))}
        </footer>
      </div>
    </section>
  );
}

export default Contact;