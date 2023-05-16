import { ref, reactive, computed } from "vue"
import { defineStore } from "pinia"

export const categoryStore = defineStore("category", () => {
  const state = reactive({
    list: [],
    load: true,
    errorMessage: ""
  })

  const setList = (list) => {
    state.list = list
  }

  const getList = computed(() => state.list)

  return { setList, getList }
})
