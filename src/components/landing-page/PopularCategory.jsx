import { Box, Grid, GridItem, Text } from "@chakra-ui/react"


const PopularCategory = () => {


    return (
        <Box>
            <Text>Shop Popular Categories</Text>


            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
            </Grid>
        </Box>
    )
}

export default PopularCategory;