'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavElProps {
    pageName: string;
    path: string;
    external: boolean;
}

export default function NavEl({ pageName, path, external }: NavElProps) {
    const pathName = usePathname();
    const isInExternalDirAndThisIsTESTING = pathName.split('/')[1].match('external') && pageName.match('TESTING')
    const isActive = pathName.startsWith(path);
    return (
        <div className={`rounded-md py-4 px-5 
            ${isInExternalDirAndThisIsTESTING ? "bg-orange-600" :
                isActive ? (external ? "bg-orange-600" : "bg-mycyansel") : ""}`}
        >
            <li>
                <Link className={`hover:text-gray-200 ${isInExternalDirAndThisIsTESTING ? "" : isActive ? "font-bold" : ""}`} href={path}>
                    {pageName}
                </Link>
            </li>
        </div>
    );
}