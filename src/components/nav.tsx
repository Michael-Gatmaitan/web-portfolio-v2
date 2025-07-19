import MGLogo from "../assets/images/mg_logo.png";
import { useMyContext } from "../hooks/useMyContext";

const Nav = () => {
  const { setIsSidebarOpen } = useMyContext();

  return (
    <nav className="sticky top-4 lg:top-8 w-full flex justify-between">
      <div className="h-12 w-12">
        <img src={MGLogo} alt="MG Logo" className="h-12 lg:h-14" />
      </div>

      <div
        className="grid h-12 w-12 justify-center items-center group/burger"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
        <div>
          <div className="h-[2px] w-[30px] rounded-md bg-white translate-y-[-4px] group-hover/burger:rotate-45 group-hover/burger:translate-y-[1px] transition" />
          <div className="h-[2px] w-[30px] rounded-md bg-white translate-y-[4px] group-hover/burger:-rotate-45 group-hover/burger:translate-y-[-1px] transition" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
