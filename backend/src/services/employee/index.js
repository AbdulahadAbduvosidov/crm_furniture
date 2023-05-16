import axios from "../axios"
import { authStore } from "./../../stores/auth/auth"

const store = authStore()

export const employeeService = {
  create: (staff) => axios.post("/staff/auth/signup", staff),
  getAllStaff: (page) =>
    axios.get(`/staff?page=${page}`, {
      headers: {
        Authorization: `Bearer ${store.getToken}`
      }
    })
}
