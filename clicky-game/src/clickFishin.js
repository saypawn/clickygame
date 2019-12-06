//local host

const Localhost = Boolean(
    window.location.hostname === "localhost" ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === "[::1]" ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );
  
  export default function register() {
    if (process.env.NODE_ENV === "production" && "clickfishin" in navigator) {
      // The URL constructor is available in all browsers that
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
      if (publicUrl.origin !== window.location.origin) {
        return;
      }
  
      window.addEventListener("load", () => {
        const cfUrl = `${process.env.PUBLIC_URL}/click-fishin.js`;
  
        if (Localhost) {
          // This is running on localhost. Lets check if a service worker still exists or not.
          checkValidClickFishin(cfUrl);
        } else {
          // Is not local host. Just register service worker
          registerValidCF(cfUrl);
        }
      });
    }
  }