import React from 'react';
import { Flex, Link, Text } from '@chakra-ui/react';

const Footer: React.FC = () => {
    return (
        <Flex
            as="footer"
            align="center"
            justify="center"
            width="100%"
            marginTop={100}
            py={4}
        >
            <Text fontSize="sm">
                Tummy Tracker Privacy Policy v.01 (16 March 2024)
            </Text>
        </Flex>
    );
};

export default Footer;
