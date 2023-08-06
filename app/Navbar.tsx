import DesktopNavigation from "./DesktopNavigation";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Individuals Tax",
    href: "/individuals-tax",
  },
  {
    name: "Real Estate",
    href: "/realestate",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  // {
  //   name: "About",
  //   href: "/about",
  // }
]

const Navbar = () => {
  return <nav className="w-full bg-slate-800">
    <div className="container">
      {/* Desktop Navigation */}
      <DesktopNavigation links={links} />
    </div>
  </nav>;
};
export default Navbar;
