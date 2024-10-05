import Cookies from "universal-cookie";

const useCookies = () => {
  const cookiesPrimitive = new Cookies();

  const cookies = {
    set(name: string, value: string) {
      return cookiesPrimitive.set(name, value, { path: "/" });
    },
    get(name: string) {
      return cookiesPrimitive.get(name);
    },
    remove(name: string) {
      return cookiesPrimitive.remove(name);
    },
  };

  return cookies;
};

export default useCookies;
