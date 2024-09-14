//Components
import Button from '../Button/button';
import Logo from '../Logo/logo';
import Action from '../Action/Action';

//Css
import './header.css';

const Header = () => {
    return (
        <header>
            <Logo />
            <Action href="#nft" content="Nft" />
            <Action href="#token" content="Token" />
            <Action href="#team" content="Team" />
            <Action href="#whitepaper" content="Whitepaper" />
            <Button />
        </header>
    );
};

export default Header;
