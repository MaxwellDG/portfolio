import FloatingTop from '../../components/buttonsContainer/floatingCV';

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="relative flex flex-1">
            {children}
            <FloatingTop />
        </section>
    );
}
