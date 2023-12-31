import firebaseInstance from "@/lib/firebase";
import cookie from "js-cookie";
import Router from "next/navigation";
import { toast } from "react-toastify";

// export const handleLogin = (medq_token) => {
//   cookie.set("medq_token", medq_token);
//   Router.push("/");
//   toast.success("Logged in successfully", {
//     position: "bottom-left",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//   });
// };

// export const redirectUser = (ctx, location) => {
//   if (ctx.req) {
//     ctx.res.writeHead(302, { Location: location });
//     ctx.res.end();
//   } else {
//     Router.push(location);
//   }
// };

export const handleLogout = async () => {
  const res = await firebaseInstance.signOut();
  return res;
};
