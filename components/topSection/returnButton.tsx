import Link from 'next/link';
import '../buttonsContainer/styles.scss';

export default function ReturnButton() {
    return (
        <Link href="/" className="flex">
            <div
                className={`flex flex-row justify-center items-center self-start text-center short-button before:h-2 before:w-3`}
            >
                <p className="text-white font-extralight whitespace-nowrap">
                    Return
                </p>
            </div>
        </Link>
    );
}
