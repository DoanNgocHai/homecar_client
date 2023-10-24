<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Email:" label-for="email" class="mb-4">
        <b-form-input id="email" v-model="form.email" placeholder="Nhập Email" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label="Mật khẩu:" label-for="password" class="mb-4">
        <b-form-input id="password" v-model="form.password" placeholder="Nhập mật khẩu" required></b-form-input>
      </b-form-group>
      <div>
        <b-button type="submit" block variant="primary">Đăng ký</b-button>
      </div>
    </b-form>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      form: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      console.log(this.form)
    }
  }
}
</script>
