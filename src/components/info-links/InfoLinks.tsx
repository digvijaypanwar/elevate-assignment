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
                <div className="info-links-group">
                    {links.slice(0, 3).map((link) => (
                        <p key={link.text} className="link">
                            {link.text}
                        </p>
                    ))}
                </div>
                <div className="info-links-group">
                    {links.slice(3).map((link) => (
                        <p key={link.text} className="link">
                            {link.text}
                        </p>
                    ))}
                </div>
            </div>
            <div id="triangle-top-left"></div>
        </div>
    );
}
