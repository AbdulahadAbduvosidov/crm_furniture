import { ref, reactive, computed } from "vue"
import { defineStore } from "pinia"

export const authStore = defineStore("auth", () => {
  const state = reactive({
    token: "",
    role: "",
    staff_id: "",
    errorMessage: ""
  })

  const setToken = (token) => {
    state.token = token
  }

  const setRole = (role) => {
    state.role = role
  }

  const setStaffId = (staff_id) => {
    state.staff_id = staff_id
  }

  const setErrorMessage = (errorMessage) => {
    state.errorMessage = errorMessage
  }

  const getToken = computed(() => state.token)

  const getRole = computed(() => state.role)

  const getStaffId = computed(() => state.staff_id)

  const getErrorMessage = computed(() => state.errorMessage)

  const clear = () => {
    state.token = ""
    state.role = ""
    state.staff_id = ""
    state.errorMessage = ""
  }

  return {
    setToken,
    setRole,
    setStaffId,
    setErrorMessage,
    getToken,
    getRole,
    getStaffId,
    getErrorMessage,
    clear
  }
})
