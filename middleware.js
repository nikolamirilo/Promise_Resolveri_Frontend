import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    "/",
    "/categories",
    "/categories/:id",
    "/auth/sign-in",
    "/auth/sign-up",
    "/api/webhooks(.*)",
    "/create-offer",
    "/test",
    "/offers",
    "/offers/:id",
    "/api/chat",
  ],
  ignoredRoutes: ["/"],
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
