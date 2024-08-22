// import { useAuthStore } from "@/store/auth";

// export default defineNuxtRouteMiddleware((to, from) => {
//   const isauth = useAuthStore().isAuthUser;
//   console.log("Middleware : ",isauth)
//   if (to.path !== '/auth/signin' && !isauth) {
//     return navigateTo('/auth/signin');
//   }else if(to.path === '/auth/signin' && !isauth){
//     return navigateTo('/promptpage');
//   }
// });
