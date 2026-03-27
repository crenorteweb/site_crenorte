interface TextBancProps {
    children: React.ReactNode;
    className?: string;
    as?: "p" | "label" | "span";
}

export function TextBanc({ children, className = "", as: Element = "p" }: TextBancProps) {
    return (
        <Element className={`font-banco-amazonia-texto ${className}`}>
            {children}
        </Element>
    )   
}