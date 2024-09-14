//Css
import './Action.css';

const Action = ({
    href,
    content = 'No content',
    className = '',
}: {
    href: string;
    content: string;
    className?: string;
}) => {
    return (
        <a href={href} className={className}>
            {content}
        </a>
    );
};

export default Action;
