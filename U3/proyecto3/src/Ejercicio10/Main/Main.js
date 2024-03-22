import About from './About/About.js';
import WhyUs from './WhyUs/WhyUs.js';
import Stats from '../Stats/Stats.js';
import Menu from '../Menu/Menu.js';
import Testimonial from '../Testimonial/Testimonial.js';
import Events from '../Events/Events.js';
import Chefs from '../Chefs/Chefs.js';
import BookATable from '../BookATable/BookATable.js';
import Gallery from '../Gallery/Gallery.js';
import Contact from '../Contact/Contact.js';

export default function Main(){
    return(
        <main id="main">{<>
        <About/>
        <WhyUs/>
        <Stats/>
        <Menu/>
        <Testimonial/>
        <Events/>
        <Chefs/>
        <BookATable/>
        <Gallery/>
        <Contact/>
        </>}</main>
    );
}