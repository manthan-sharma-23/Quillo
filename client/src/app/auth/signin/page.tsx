import { Input } from "@/components/ui/input";
import Logo from "/logo/logo.png";
import { Label } from "@/components/ui/label";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import trpc from "@/trpc";
import { toast } from "sonner";
import useCookies from "@/hooks/use-cookies";
import { ACCESS_TOKEN_COOKIE } from "@/global/cookies";

export const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cookies = useCookies();

  const signin = trpc.auth.signin.useMutation({
    onSuccess: (data) => {
      toast.success("User signed up successfully !", { richColors: true });

      cookies.set(ACCESS_TOKEN_COOKIE, data);

      setTimeout(() => {
        window.location.assign("/");
      }, 1000);
    },
    onError: (err) => {
      toast.error(err.message, { richColors: true });
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signin.mutate({ email, password });
  };

  return (
    <div className="h-screen w-screen flex bg-background ">
      <div className="w-2/5 h-full bg-muted font-poppins flex flex-col items-center justify-center gap-3">
        <img src={Logo} alt="logo" className="h-36 w-36" />
        <h1 className="font-poppins">Quillo</h1>
        <h6>A new chapter in e-reading</h6>
      </div>
      <div className="w-3/5 h-full flex justify-center items-center">
        <div className="w-1/2 h-auto flex flex-col items-start justify-center gap-3">
          <h2 className="font-poppins">Sign in</h2>
          <p className="font-poppins text-muted-foreground text-sm">
            Unlock your ultimate reading experience. Connect, collaborate, and
            dive deeper into every book with Quillo.
          </p>
          <form onSubmit={handleSubmit} className="grid gap-4 w-full">
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
              Sign in
            </Button>
            <p className="text-sm text-muted-foreground">
              Don’t have an account?
              <Link
                to="/signup"
                className="underline mx-1 hover:text-foreground"
              >
                Create one!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
