import { createRouter, createWebHistory } from "vue-router"
import Dashboard from "../views/Dashboard.vue"
import { authStore } from "../stores/auth/auth"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
      children: [
        {
          path: "/employee",
          name: "employee",
          component: () => import("../views/Employee/Employee.vue"),
          beforeEnter: (to, from, next) => {
            const store = authStore()
            if (["SUPER-ADMIN"].includes(store.getRole)) {
              next()
            } else {
              next({ name: "error" })
            }
          }
        },
        {
          path: "/category",
          name: "category",
          component: () => import("../views/Category/Category.vue"),
          beforeEnter: (to, from, next) => {
            const store = authStore()
            if (["SUPER-ADMIN", "ADMIN"].includes(store.getRole)) {
              next()
            } else {
              next({ name: "error" })
            }
          }
        },
        {
          path: "/product",
          name: "product",
          component: () => import("../views/Product/Product.vue"),
          beforeEnter: (to, from, next) => {
            const store = authStore()
            if (["SUPER-ADMIN", "ADMIN", "OPERATOR", "DELIVERYMAN"].includes(store.getRole)) {
              next()
            } else {
              next({ name: "error" })
            }
          }
        },
        {
          path: "/contact",
          name: "contact",
          component: () => import("../views/Contact/Contact.vue"),
          beforeEnter: (to, from, next) => {
            const store = authStore()
            if (["SUPER-ADMIN", "OPERATOR"].includes(store.getRole)) {
              next()
            } else {
              next({ name: "error" })
            }
          }
        },
        {
          path: "/order",
          name: "order",
          component: () => import("../views/Order/Order.vue"),
          beforeEnter: (to, from, next) => {
            const store = authStore()
            if (["SUPER-ADMIN", "ADMIN", "OPERATOR"].includes(store.getRole)) {
              next()
            } else {
              next({ name: "error" })
            }
          }
        },
        {
          path: "/region",
          name: "region",
          component: () => import("../views/Region/Region.vue"),
          beforeEnter: (to, from, next) => {
            const store = authStore()
            if (["SUPER-ADMIN", "ADMIN"].includes(store.getRole)) {
              next()
            } else {
              next({ name: "error" })
            }
          }
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login/Login.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("../views/Error/Error.vue")
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = authStore()
  let token = store.getToken
  let role = store.getRole
  let staff_id = store.getStaffId
  let errorMessage = store.getErrorMessage
  if (!token) {
    token = localStorage.getItem("token")
    store.setToken(token)
  }
  if (!role) {
    role = localStorage.getItem("role")
    store.setRole(role)
  }
  if (!staff_id) {
    staff_id = localStorage.getItem("staff_id")
    store.setStaffId(staff_id)
  }
  if (errorMessage === "Invalid token") {
    localStorage.clear()
    store.clear()
  }
  if (to.name !== "login" && !token) {
    next({ name: "login" })
  } else {
    next()
  }
})

export default router
