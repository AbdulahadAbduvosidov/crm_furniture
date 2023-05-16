import axios from "../axios"

export const authService = (user) => axios.post("/staff/auth/signin", user)
