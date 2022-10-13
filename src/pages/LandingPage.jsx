import { Box } from "@chakra-ui/react"
import BelowNavbarBanner from "../components/landing-page/BelowNavbarBanner";
import BelowTrending from "../components/landing-page/BelowTrending";
import Bigbanner2 from "../components/landing-page/Bigbanner2";
import Bigbanners from "../components/landing-page/Bigbanners";
import PopularCategory from "../components/landing-page/PopularCategory";
import PopularItems from "../components/landing-page/PopularItems";
import TrandingBrands from "../components/landing-page/TrendingBrands";
import Zapposforgood from "../components/landing-page/Zapposforgood";


const LandingPage = ()=>{


    return(
        <Box>
            <BelowNavbarBanner/> 
            <PopularCategory/>
            <Bigbanners/>
            <PopularItems/>
            <Bigbanner2/>
            <TrandingBrands/>
            <BelowTrending/>
            <Zapposforgood/>
        </Box>
    )
}

export default LandingPage;