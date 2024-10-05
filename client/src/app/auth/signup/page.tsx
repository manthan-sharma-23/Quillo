import { Input } from "@/components/ui/input";
import Logo from "../../../../public/logo/logo.png";
import { Label } from "@/components/ui/label";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="h-screen w-screen flex bg-background ">
      <div className="w-2/5 h-full bg-muted font-poppins flex flex-col items-center justify-center gap-3">
        <img src={Logo} alt="logo" className="h-36 w-36" />
        <h1 className="font-poppins">Quillo</h1>
        <h6>A new chapter in e-reading</h6>
      </div>
      <div className="w-3/5 h-full flex justify-center items-center">
        <form
          action="submit"
          onSubmit={() => {}}
          className="w-1/2 h-auto flex flex-col items-start justify-center gap-3"
        >
          <h2 className="font-poppins">Sign up</h2>
          <p className="font-poppins text-muted-foreground text-sm">
            Unlock your ultimate reading experience. Connect, collaborate, and
            dive deeper into every book with Quillo.
          </p>
          <div className="grid gap-4 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  placeholder="John"
                  required
                  autoFocus
                  value={firstName}
                  onChange={setFirstName}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  placeholder="Doe"
                  required
                  value={lastName}
                  onChange={setLastName}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@quillo.io"
                required
                autoFocus
                value={email}
                onChange={setEmail}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••"
                required
                value={password}
                onChange={setPassword}
              />
            </div>
            <Button type="submit" className="w-full">
              Sign up
            </Button>
            <p className="text-sm text-muted-foreground">
              Already have an account?
              <Link to="/signin" className="underline mx-1 hover:text-foreground">
                Use that!
              </Link> 
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
