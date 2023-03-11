import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';




const ProductPage = () => {
    const location = useLocation() ;
    const category = location.pathname.split("/")[2] ; 

    return (
        <div>
            <Announcement />
            <Navbar/>
            <Products cat={category} />
            <div>produccczzz of {category}</div>

            <Newsletter />
            <Footer />
        </div>
    )
}



export default ProductPage ;