import axios from "../axios"
import { authStore } from "./../../stores/auth/auth"

const store = authStore()

export const categoryService = {
  create: (category) =>
    axios.post("/category", category, {
      headers: {
        Authorization: `Bearer ${store.getToken}`
      }
    }),
  getAllCategory: () =>
    axios.get("/category", {
      headers: {
        Authorization: `Bearer ${store.getToken}`
      }
    })
}
