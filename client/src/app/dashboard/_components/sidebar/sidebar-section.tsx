type Props = {
  children: React.ReactNode;
  title: string;
};

const SidebarSection = ({ children, title }: Props) => {
  return (
    <div className="mt-2">
      <p className="text-sm text-zinc-500 mb-2 ml-4">{title}</p>
      <div className="text-zinc-700">{children}</div>
    </div>
  );
};

export default SidebarSection;
