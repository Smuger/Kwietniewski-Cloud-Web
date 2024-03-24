import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const PrivacyTextComponent = () => {
    return (

        <Box maxW="600px" textAlign={"justify"} mx={2}>
            <Heading as="h1" mb="6">Privacy Policy</Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>
                Privacy Policy of Tummy Tracker
                This Privacy Policy outlines how the developers and owners of the Tummy Tracker mobile application
                (the “App”) collect, use, disclose, and safeguard your information when you use the App.
                The terms “us”, “we” or “our” refers to the developers and owners of the App. The term “you” or “your”
                refers to the user of our App and/or viewer of our website.
                We respect your privacy and are committed to protecting any data you may provide while using the
                App.
                By downloading and continuing to use the App, you agree to be bound by this Privacy Policy, as updated
                from time to time in accordance with the procedure set out below.
            </Text>
            <Heading size='md' mt={4}>
                Information We Don't Collect
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>
                We do not require you to provide and we do not collect or store any of your personal data as a user of
                our App, such as your name, email address, phone number, or any other personally identifiable
                information. All of the data you upload to the App is stored locally on your device and we do not have
                access to and do not collect or store any of it.
            </Text>
            <Heading size='md' mt={4}>
                Information We Automatically Collect
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>
                We may collect certain information automatically when you use our App. This information is limited to
                non-personal data such as device type, operating system version, app usage statistics, and other
                technical information that helps us improve our App and provide a better user experience. This
                information is collected anonymously and cannot be used to identify you personally.
            </Text>
            <Heading size='md' mt={4}>
                Third-Party Services
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>
                Our App may use third-party services such as analytics tools. These services may collect anonymous
                information about your interactions with the App in order to provide their services. However, these third
                parties do not have access to any personal information about you.
            </Text>
            <Heading size='md' mt={4}>
                Data Security
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>
                We take data security seriously and have implemented appropriate measures to protect the App.
                However, please be aware that no method of transmission over the internet or electronic storage is
                100% secure, and we cannot guarantee the absolute security of your data.
            </Text>
            <Heading size='md' mt={4}>
                Changes to this Privacy Policy
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>
                We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective
                immediately upon posting the updated Privacy Policy on this page.
            </Text>
            <Heading size='md' mt={4}>
                Contact Us
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>
                If you have any questions or concerns about this Privacy Policy or our practices regarding your
                information, please contact us at tummy.tracker@yahoo.com.
            </Text>
        </Box>

    );
};

export default PrivacyTextComponent;

