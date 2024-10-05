import { Loader2Icon } from "lucide-react";

const Spinner = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Loader2Icon className="animate-spin text-primary" />
    </div>
  );
};

export default Spinner;
