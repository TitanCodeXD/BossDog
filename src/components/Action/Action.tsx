//Css
import './Action.css';

const Action = ({ href, content }: { href: string; content: string }) => {
    return <a href={href}>{content}</a>;
};

export default Action;
