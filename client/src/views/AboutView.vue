<script>
export default {
  data: () => ({
    valid: false,
    visible: false,
    username: '',
    password: '',
    nameRules: [
      value => {
        if (value) return true

        return 'Name is required.'
      },
      value => {
        if (value?.length <= 16) return true

        return 'Name must be less than 16 characters.'
      },
      value => {
        if (value?.length >= 7) return true
        return 'Name must be more than 7 characters.'
      }
    ],
    passwordRules: [
      value => {
        if (value) return true

        return 'Password is required.'
      },
      value => {
        if (value?.length <= 16) return true

        return 'Password must be less than 16 characters.'
      },
      value => {
        if (value?.length >= 8) return true
        return 'Password must be more than 8 characters.'
      },
      value => {
        if (value?.match(/[A-Z]/) && value?.match(/[a-z]/) && value?.match(/[0-9]/)) return true
        return 'Password must contain at least 1 capital letter, 1 lowercase letter and 1 number.'
      }
    ],
  }),
}
</script>
<template>
  <div></div>
</template>

<style></style>
