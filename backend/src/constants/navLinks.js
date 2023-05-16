export const navLinks = [
  {
    id: 1,
    title: "Dashboard",
    link: "/",
    icon: "bx bxs-dashboard",
    roles: ["SUPER-ADMIN", "ADMIN", "OPERATOR", "DELIVERYMAN"]
  },
  {
    id: 2,
    title: "Xodimlar",
    link: "/employee",
    icon: "bx bxs-user-plus",
    roles: ["SUPER-ADMIN"]
  },
  {
    id: 3,
    title: "Mahsulot turi",
    link: "/category",
    icon: "bx bxs-layer-plus",
    roles: ["SUPER-ADMIN", "ADMIN"]
  },
  {
    id: 4,
    title: "Mahsulotlar",
    link: "/product",
    icon: "bx bxs-basket",
    roles: ["SUPER-ADMIN", "ADMIN", "OPERATOR", "DELIVERYMAN"]
  },
  {
    id: 5,
    title: "Kontaktlar",
    link: "/contact",
    icon: "bx bxs-contact",
    roles: ["SUPER-ADMIN", "OPERATOR"]
  },
  {
    id: 6,
    title: "Buyurtmalar",
    link: "/order",
    icon: "bx bxs-store-alt",
    roles: ["SUPER-ADMIN", "ADMIN", "OPERATOR"]
  },
  {
    id: 7,
    title: "Yangi buyurtma",
    link: "/order",
    icon: "bx bxs-cart-add",
    roles: ["SUPER-ADMIN", "ADMIN", "OPERATOR"]
  },
  {
    id: 8,
    title: "Viloyatlar",
    link: "/region",
    icon: "bx bxs-map",
    roles: ["SUPER-ADMIN", "ADMIN"]
  },
  {
    id: 9,
    title: "Sozlanmalar",
    link: "/settings",
    icon: "bx bx-cog",
    roles: ["SUPER-ADMIN", "ADMIN", "OPERATOR", "DELIVERYMAN"]
  }
]
