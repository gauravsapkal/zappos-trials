import { Box } from "@chakra-ui/react"
import BelowNavbarBanner from "../components/landing-page/BelowNavbarBanner";
import PopularCategory from "../components/landing-page/PopularCategory";


const LandingPage = ()=>{


    return(
        <Box>
            <BelowNavbarBanner/> 
            <PopularCategory/>
        </Box>
    )
}

export default LandingPage;