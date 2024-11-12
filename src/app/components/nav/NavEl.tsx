'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavElProps {
    pageName: string;
    path: string;
}

export default function NavEl({ pageName, path }: NavElProps) {
    const pathName = usePathname();
    const isActive = pathName.match(path);
    return (
        <div className={`rounded-md py-4  px-5 ${isActive ? "bg-mycyansel" : ""}`}>
            <li>
                <Link className={`hover:text-gray-200 ${isActive ? "font-bold" : ""}`} href={path}>
                    {pageName}
                </Link>
            </li>
        </div>
    );
}