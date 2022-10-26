import { Box, Flex, Text, Button, Spacer } from '@chakra-ui/react'
import Head from 'next/head'

export default function Navbar () {
  return (
    <Flex borderBottom='solid grey 1px ' paddingBottom='5'>
      <Head>
        <link
          href='http://fonts.cdnfonts.com/css/gt-walsheim-pro'
          rel='stylesheet'
        ></link>
      </Head>
      <Flex display='flex' alignItems='center' fontFamily='GT Walsheim Pro '>
        <Text fontSize='16px' textColor='white' fontWeight='200'>
          Marketplace
        </Text>
        <Text marginX='5' fontSize='16px' textColor='white' fontWeight='200'>
          Creators
        </Text>
        <Text fontSize='16px' textColor='white' fontWeight='200'>
          Community
        </Text>
      </Flex>
      <Spacer />
      <Text
        fontSize='28px'
        marginRight='10'
        fontWeight='700'
        textColor='white'
        fontFamily='GT Walsheim Pro '
      >
        SILVERSEA
      </Text>
      <Spacer />

      <Button
        bg='white'
        textColor='black'
        borderRadius='30'
        _hover={{ textColor: 'white', background: 'linear-gradient(90deg, rgba(255,165,64,1) 40%, rgba(255,225,104,1) 100%)', border: 'none' }}
      >
        Conect Wallet
      </Button>
    </Flex>
  )
}
