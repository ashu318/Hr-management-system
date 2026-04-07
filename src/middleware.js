// import { NextResponse } from "next/server";
// import { jwtVerify } from "jose";


// export async function middleware(req) {
//   const token = req.cookies.get("auth_token")?.value;
//   const pathname = req.nextUrl.pathname;
//   const secret = new TextEncoder().encode(process.env.JWT_SECRET);
//   const isLoginPage = pathname === "/authentication/login/minimal";

//   if (!token && !isLoginPage) {
//     return NextResponse.redirect(new URL("/authentication/login/minimal", req.url));
//   }

//   if (token && isLoginPage) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }


//   if (token) {
//     try {
//       const { payload } = await jwtVerify(token, secret);

//       // ✅ DEBUG (check this once)
//       console.log("Decoded:", payload);

//       if (isLoginPage) {
//         return NextResponse.redirect(new URL("/", req.url));
//       }

//       if (pathname.startsWith("/dashboard")) {
//         if (payload.role !== "ADMIN") {
//           return NextResponse.redirect(
//             new URL("/dashboard/user", req.url)
//           );
//         }
//       }

//     } catch (err) {
//       console.log("JWT ERROR:", err);
//       return NextResponse.redirect(
//         new URL("/authentication/login/minimal", req.url)
//       );
//     }
//   }




//   return NextResponse.next();
// }

// export const config = {
//   // matcher: ["/", "/admin/:path*", "/employee/:path*"],
//   matcher: [
//     "/((?!api|_next/static|_next/image|images|favicon.ico|authentication/login/minimal|authentication/reset/forgot-password|authentication/reset/reset-password).*)",
//   ],
// };






import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(req) {
  const token = req.cookies.get("auth_token")?.value;
  const pathname = req.nextUrl.pathname;

  const loginPath = "/authentication/login/minimal";

  // =========================
  // 1️⃣ No token → login
  // =========================
  if (!token) {
    // allow login page
    if (pathname === loginPath) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL(loginPath, req.url));
  }

  try {
    const { payload } = await jwtVerify(token, secret);
    const role = payload.role;


    // console.log("Decoded:", payload);


    // =========================
    // 🏠 ROOT ROUTE (/)
    // =========================
    if (pathname === "/") {
      if (role === "ADMIN") {
        return NextResponse.redirect(
          new URL("/dashboard/admin", req.url)
        );
      } else {
        return NextResponse.redirect(
          new URL("/dashboard/user", req.url)
        );
      }
    }


    // =========================
    // 2️⃣ Prevent login page access
    // =========================
    if (pathname === loginPath) {
      if (role === "ADMIN") {
        return NextResponse.redirect(new URL("/dashboard/admin", req.url));
      } else {
        return NextResponse.redirect(new URL("/dashboard/user", req.url));
      }
    }

    // =========================
    // 3️⃣ ADMIN RULES
    // =========================
    if (role === "ADMIN") {
      // block user dashboard
      if (pathname.startsWith("/dashboard/user")) {
        return NextResponse.redirect(
          new URL("/dashboard/admin", req.url)
        );
      }
    }

    // =========================
    // 4️⃣ USER RULES
    // =========================
    if (role === "EMPLOYEE") {
      // block admin dashboard
      if (pathname.startsWith("/dashboard/admin")) {
        return NextResponse.redirect(
          new URL("/dashboard/user", req.url)
        );
      }
    }

  } catch (err) {
    // invalid token
    return NextResponse.redirect(
      new URL(loginPath, req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|authentication/login/minimal|authentication/reset/forgot-password|authentication/reset/reset-password).*)",
  ],
};