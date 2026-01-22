import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Tutors from '../components/Tutors'
import Partners from '../components/Partners'
import Contact from '../components/Contact'

//Pastikan semua path menggunakan ../ jika file data ada di luar folder pages
import { HomeSection } from '../data/HomeSection'
import { CoursesSection } from '../data/CoursesSection'
import { TutorsSection, tutorsList } from '../data/TutorsSection'; 
import { PartnersSection, PartnersList } from '../data/PartnersSection'
import { ContactSection } from '../data/ContactSection'

import parse from "html-react-parser"
import '../styles/Home.css'

function Home() {
  // Fungsi pembantu untuk render HTML aman
  const renderHTML = (rawHTML) => {
    if (typeof rawHTML !== 'string') return "";
    return parse(rawHTML);
  }

  return (
    <>
      <Navbar />
      
      <main className='wrapper'>
        
        {/* Section Home */}
        <section id="home" className="section-container">
          <div className="section-image">
             {/* Optional chaining ?. membantu agar tidak crash jika data belum load */}
             <img src={HomeSection?.image} alt="Ilustrasi Home" />
          </div>
          <div className="kolom">
            {renderHTML(HomeSection?.content)}
          </div>
        </section>

        {/* Section Courses */}
        <section id="courses" className="section-container reverse">
          <div className="kolom">
            {renderHTML(CoursesSection?.content)}
          </div>
          <div className="section-image">
            <img src={CoursesSection?.image} alt="Ilustrasi Kursus" />
          </div>
        </section>

        {/* Section Tutors */}
        <section id="tutors" className="section-centered">
          <div className="tengah">
            <div className="kolom">
              {renderHTML(TutorsSection?.content)}
            </div>
            {/* Memastikan TutorsList ada sebelum dikirim ke props */}
            <Tutors tutorsList={tutorsList} />
          </div>
        </section>

        {/* Section Partners */}
        <section id="partners" className="section-centered grey-bg">
          <div className="tengah">
            <div className="kolom">
              {renderHTML(PartnersSection?.content)}
            </div>
            <Partners PartnersList={PartnersList}/>
          </div>
        </section>

        {/* Section Contact */}
        {/* Pastikan komponen Contact menerima props dengan nama yang benar */}
        <Contact contactSection={ContactSection}/>
        
      </main>

      <Footer />
    </>
  )
}

export default Home;