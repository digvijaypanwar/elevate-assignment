import './InfoLinks.scss';

const links = [
    { text: 'best sellers' },
    { text: 'gift ideas' },
    { text: 'new releases' },
    { text: "today's deals" },
    { text: 'customer service' },
];

export function InfoLinks() {
    return (
        <div className="info-links-container">
            <div id="triangle-top-right"></div>
            <div className="info-links">
                {links.map((link) => (
                    <p key={link.text} className="link">
                        {link.text}
                    </p>
                ))}
            </div>
            <div id="triangle-top-left"></div>
        </div>
    );
}
