import HeaderHome from "@/components/HeaderHome";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <HeaderHome />
            {children}
        </>
    )
}