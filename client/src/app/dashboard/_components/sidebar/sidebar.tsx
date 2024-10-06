import {
  Activity,
  Group,
  Inbox,
  Library,
  Settings,
  Share,
  User,
  Zap,
} from "lucide-react";
import Logo from "/logo/light_logo.svg";
import SidebarItem from "./sidebar-item";
import { useRouterState } from "@tanstack/react-router";
import SidebarSection from "./sidebar-section";

const links = [
  {
    link: "/library",
    Icon: Library,
    title: "My Library",
  },
  {
    link: "/explore",
    Icon: Zap,
    title: "Explore New",
  },
  {
    link: "/acitvity",
    Icon: Activity,
    title: "Activity",
  },
  {
    link: "/inbox",
    Icon: Inbox,
    title: "Inbox",
  },
];

const Sidebar = () => {
  const router = useRouterState();

  return (
    <div className="w-1/6 h-full p-4 px-8 bg-white shadow-md">
      <div className="h-[10%] w-full flex items-center justify-start">
        <img className="h-[75%]" src={Logo} alt="logo" />
      </div>
      <div className="h-[90%] w-full flex flex-col">
        <SidebarSection>
          {links.map((link) => (
            <SidebarItem
              key={link.link}
              title={link.title}
              Icon={link.Icon}
              link={link.link}
              active={router.location?.pathname === link.link}
            />
          ))}
        </SidebarSection>

        <SidebarSection title="Clubs">
          <SidebarItem
            title="Reading Clubs"
            Icon={Group}
            link="/clubs"
            active={router.location?.pathname === "/clubs"}
          />
        </SidebarSection>

        <SidebarSection title="Setup">
          <SidebarItem
            title="Profile"
            Icon={User}
            link="/profile"
            active={router.location?.pathname === "/profile"}
          />
          <SidebarItem
            title="Settings"
            Icon={Settings}
            link="/settings"
            active={router.location?.pathname === "/settings"}
          />
          <SidebarItem
            title="Share Books"
            Icon={Share}
            link="/share"
            active={router.location?.pathname === "/share"}
          />
        </SidebarSection>
      </div>
    </div>
  );
};

export default Sidebar;
