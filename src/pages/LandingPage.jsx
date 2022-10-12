import { Box } from "@chakra-ui/react"
import BelowNavbarBanner from "../components/landing-page/BelowNavbarBanner";
import Bigbanner2 from "../components/landing-page/Bigbanner2";
import Bigbanners from "../components/landing-page/Bigbanners";
import PopularCategory from "../components/landing-page/PopularCategory";
import PopularItems from "../components/landing-page/PopularItems";


const LandingPage = ()=>{


    return(
        <Box>
            <BelowNavbarBanner/> 
            <PopularCategory/>
            <Bigbanners/>
            <PopularItems/>
            <Bigbanner2/>
        </Box>
    )
}

export default LandingPage;