import { Flex } from "rebass/styled-components"

export const Container = ({children}) => {
    return (
        <Flex height="100vh" width="100%">
            {children}
        </Flex>
    );
};