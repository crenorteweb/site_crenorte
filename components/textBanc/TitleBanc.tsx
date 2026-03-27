interface TitleBancProps {
    children: React.ReactNode;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "span";
}

export function TitleBanc({ children, className = "", as: Element = "h1" }: TitleBancProps) {
    return (
        <Element className={`font-banco-amazonia ${className}`}>
            {children}
        </Element>
    )   
}
