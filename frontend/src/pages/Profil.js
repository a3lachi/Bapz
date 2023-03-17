import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Slider from '../components/Slider';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';




const Profil = (id) => {
    return (
        <div className='col'>
            <Announcement />
            <Navbar id={id.id} />

            <Announcement />
            <Newsletter/>
            <Footer />
        </div>
    )
}


export default Profil ;