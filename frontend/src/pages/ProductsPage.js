import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import Categories from '../components/Categories';




const ProductPage = (id) => {
    const location = useLocation() ;
    const category = location.pathname.split("/")[2] ; 
    console.log('HAHAWA  ',category)

    return (
        <div>
            <Announcement />
            <Navbar id={id.id} />
            <Categories />
            <Products cat={category} />
            <Newsletter />
            <Footer />
        </div>
    )
}



export default ProductPage ;