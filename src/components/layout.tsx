import { NavbarDemo } from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarDemo />
      {children}
    </>
  );
}
