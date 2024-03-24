import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Link, Text } from '@chakra-ui/react';

const Header: React.FC = () => {
    return (
        <Flex
            as="header"
            align="center"
            justify="center"
            width="100%"
            marginBottom={100}
            py={4}
        >
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink>tummy-tracker</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink>privacy</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Flex>
    );
};

export default Header;
