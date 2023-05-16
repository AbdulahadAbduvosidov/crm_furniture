import axios from "../axios"
import { authStore } from "./../../stores/auth/auth"

const store = authStore()

export const productService = {
  create: (product) =>
    axios.post("/product", product, {
      headers: {
        Authorization: `Bearer ${store.getToken}`
      }
    }),
  getAllProduct: () =>
    axios.get("/product", {
      headers: {
        Authorization: `Bearer ${store.getToken}`
      }
    })
}
