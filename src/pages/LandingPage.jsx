import { Box } from "@chakra-ui/react"
import BelowNavbarBanner from "../components/landing-page/BelowNavbarBanner";
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
        </Box>
    )
}

export default LandingPage;