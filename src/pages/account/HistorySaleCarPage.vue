<template>
  <div class="card card-compact w-full bg-base-100 shadow-xl card-bordered">
    <div class="card-body">
      <h2 class="card-title">Lịch sử bán xe</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate';
import { useRouter } from 'vue-router';
import { object, string } from 'yup';

export default {
  name: 'HistorySaleCarPage',
  components: {
    Form: Form,
    Field: Field,
    ErrorMessage: ErrorMessage,
  },
  setup() {
    const router = useRouter()

    const schema = object().shape({
      name: string().required('Họ tên chưa được nhập'),
    })

    return {
      router,
      schema,
    }
  },
  data() {
    return {
      form: {
        name: ''
      }
    }
  },
  methods: {
    async updateProfile() {
      const { name } = this.form;
      console.log({ name })
    }
  }
}
</script>

<style scoped>
</style>
