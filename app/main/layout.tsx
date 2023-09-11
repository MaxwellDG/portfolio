import BackgroundAnimation from '../../components/backgroundAnimation';
import FloatingTop from '../../components/buttonsContainer/floatingCV';

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="relative flex flex-1 lg:flex-auto lg:h-full lg:w-full overflow-y-auto">
            {/* <BackgroundAnimation /> */}
            {children}
            <FloatingTop />
        </section>
    );
}
