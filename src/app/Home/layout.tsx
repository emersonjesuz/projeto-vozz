import HeaderHome from "@/app/Home/components/HeaderHome";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderHome />
      {children}
    </>
  );
}
