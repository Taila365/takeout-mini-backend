import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('merchant_token') || '')
  const merchant = ref(JSON.parse(localStorage.getItem('merchant_info') || 'null'))

  const isLoggedIn = computed(() => !!token.value)
  const merchantId = computed(() => merchant.value?.merchantId)

  function setAuth(newToken, newMerchant) {
    token.value = newToken
    merchant.value = newMerchant
    localStorage.setItem('merchant_token', newToken)
    localStorage.setItem('merchant_info', JSON.stringify(newMerchant))
  }

  function logout() {
    token.value = ''
    merchant.value = null
    localStorage.removeItem('merchant_token')
    localStorage.removeItem('merchant_info')
  }

  function refreshMerchant(info) {
    merchant.value = info
    localStorage.setItem('merchant_info', JSON.stringify(info))
  }

  return { token, merchant, isLoggedIn, merchantId, setAuth, logout, refreshMerchant }
})
