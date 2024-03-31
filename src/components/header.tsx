import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Link, Text } from '@chakra-ui/react';
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
    title: string
}

const Header = (props: SEOProps) => {
    const defaultTitle = props.title
    const formattedDefaultTitle = "/tummy-tracker/" + defaultTitle

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
                    <BreadcrumbLink href='/tummy-tracker'>tummy-tracker</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href={formattedDefaultTitle}>{defaultTitle}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Flex >
    );
};

export default Header;
