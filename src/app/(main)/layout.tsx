import { MainLayout } from "@/components/MainLayout/MainLayout";

export default function Layout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return <MainLayout>
        {children}
    </MainLayout>
}