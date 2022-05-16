import { Flex, Image } from "rebass/styled-components";

import MenuIcon from "../../img/MenuIcon.svg"
import YoutubePremiumLogo from "../../img/YoutubePremiumLogo.svg";

export const NavBar = () => {
    return (
        <Flex bg="white" px="2" width="1">
            <Image src={MenuIcon} sx={{
                width: [ "20px", "30px" ]
            }} />
            <Image paddingLeft="20px" src={YoutubePremiumLogo} sx={{
                width: "100px",
                height: "30px"
            }} />
        </Flex>
    );
};
