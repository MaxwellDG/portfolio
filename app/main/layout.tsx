import FloatingCV from '../../src/components/buttonsContainer/floatingCV';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="relative flex flex-1">
            {children}
            <FloatingCV />
        </section>
    );
}
