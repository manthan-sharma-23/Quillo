import { Link } from "@tanstack/react-router";
import { cx } from "class-variance-authority";
import { LucideIcon } from "lucide-react";

type SidebarItemProps = {
  Icon: LucideIcon;
  title: string;
  link: string;
  active: boolean;
};

const SidebarItem = ({ Icon, title, link, active }: SidebarItemProps) => {
  return (
    <Link to={link} className="w-full">
      <button
        className={cx(
          "flex items-center w-full py-2.5 px-5 rounded-2xl transition duration-200 ease-in-out mb-1",
          active
            ? "bg-primary text-white"
            : "hover:bg-primary/10 text-foreground"
        )}
      >
        <Icon
          renderingIntent={2}
          size={14}
          strokeWidth={2}
          className="transition-transform duration-200 ease-in-out"
        />
        <span className="ml-3 font-medium text-sm">{title}</span>
      </button>
    </Link>
  );
};

export default SidebarItem;
