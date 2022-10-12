import { Box, Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import { AiOutlineHeart } from 'react-icons/ai'
const BelowTrending = () => {

    return (
        <Box>
            <Grid templateColumns='repeat(3, 1fr)' gap={3} w='95%' m='auto' mt='80px'
            
            >

                <GridItem>
                    <Text fontSize='25px' fontWeight='bold.800'
                    >Stay Cozy with Koolaburra by UGG®</Text>
                    <Button mt='20px' border='1px solid black' bg='white' mb='20px'
                            _hover={{ bg: 'black', color: 'white' }}
                        >SHOP FALL KOOLABURRA BYUGG</Button>
                        <Image src="https://m.media-amazon.com/images/G/01/2022/homepage10.10.2/Koola_photo_500x740_1.jpg"/>
                </GridItem>

                <GridItem colSpan='2'>
                    <Grid templateColumns='repeat(4, 1fr)' gap={1}>
                    
                    <GridItem mr='20px' bg='white'  border='1px solid white'
                            h={{base:'405px', sm:'420px', md:'420px', lg:'200px', xl:'200px'}}
                            >

                                    <Image display='flex' m='auto'
                                    h={{base:'290px', sm:'290px', md:'300px', lg:'100px', xl:'100px'}}
                                    src="https://m.media-amazon.com/images/I/71152gDXddL._AC_SX255_.jpg" alt='img'/>

                                    <Flex m='10px' mb='-5px' alignItems='center'><AiOutlineHeart/> 31</Flex>
                                    <Text m='10px' mb='-5px'>Koolaburra by UGG Advay Slip-On</Text>
                                    <Text m='10px' mb='-5px'>$ 49.95</Text>

                            </GridItem>
                            
                        
                    </Grid>
                </GridItem>
            
            </Grid>
        </Box>
    )
}

export default BelowTrending;