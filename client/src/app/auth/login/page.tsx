import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const LoginPage = () => {
  const [] = useState();

  return (
    <div className="h-screen w-screen flex bg-background p-10 ">
      <Button variant={"default"} size={"lg"} className="mx-6">
        Click here
      </Button>
      <br />
      <Input placeholder="Enter you text here" />
      <div className="w-1/2 h-full mx-5 ">
        <h1 className="text-primary">Quillo</h1>
        <h4>Hey tehre how are you</h4>
      </div>
      <div className="w-1/2 h-full "></div>
    </div>
  );
};
