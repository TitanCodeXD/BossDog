//Components
import Action from '../Action/Action';
import Button from '../Button/button';
import MenuIcon from '../MenuIcon/menuIcon';

//Css
import './menu.css';

const menu = () => {
    return (
        <nav className="menu">
            <div className="wrapper-actions">
                <Action href="#nft" content="Nft" />
                <Action href="#token" content="Token" />
                <Action href="#team" content="Team" />
                <Action href="#whitepaper" content="Whitepaper" className="highlight" />
            </div>
            <Button />
            <MenuIcon />
        </nav>
    );
};

export default menu;
