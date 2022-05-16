import { Navbar } from "react-bootstrap";
import { Image } from "react-bootstrap";

import MenuIcon from "../../img/MenuIcon.svg"
import YoutubePremiumLogo from "../../img/YoutubePremiumLogo.svg";

export const NavBar = () => {
    return (
        <Navbar bg="white">
            <Image src={MenuIcon} width="30" />
            <Image src={YoutubePremiumLogo} width="100" />
        </Navbar>
    );
};
