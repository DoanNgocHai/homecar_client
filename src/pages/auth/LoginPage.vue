<template>
  <div class="register-page">
    <b-container>
      <b-row class="mt-4">
        <b-col cols="6"></b-col>
        <b-col cols="6">
          <div class="form-register">
            <div class="box-container box-register">
              <h4>Đăng nhập</h4>
              <login-form />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
.box-register {
  padding: 20px;
  background-color: white;
}

.box-register h4 {
  text-align: center;
}
</style>

<script>
import LoginForm from '@/components/forms/LoginForm.vue';
export default {
  name: 'LoginPage',
  components: {
    'login-form': LoginForm
  }
}
</script>
