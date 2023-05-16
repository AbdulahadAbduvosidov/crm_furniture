import axios from "../axios"
import { authStore } from "./../../stores/auth/auth"

const store = authStore()

export const contactService = {
  create: (contact) =>
    axios.post("/contact", contact, {
      headers: {
        Authorization: `Bearer ${store.getToken}`
      }
    }),
  getAllContact: (page) =>
    axios.get(`/contact?page=${page}`, {
      headers: {
        Authorization: `Bearer ${store.getToken}`
      }
    }),
  cancelContact: (id) =>
    axios.patch(
      `/contact/${id}`,
      { status: "cancel", is_old: true },
      {
        headers: {
          Authorization: `Bearer ${store.getToken}`
        }
      }
    )
}
