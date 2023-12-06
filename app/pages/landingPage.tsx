import Navbar from "../components/nav"
import Footer from "../partials/footer"
import Hero from "../partials/hero"
import Information from "../partials/information"
import Reports from "../partials/report"



const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Information/>
            <Reports/>
            <Footer/>
        </>
    )
}

export default LandingPage