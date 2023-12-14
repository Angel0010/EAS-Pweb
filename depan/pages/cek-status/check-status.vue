<!-- pages/check-status.vue -->

<template>
    <div>
      <h1>Cek Status Pendaftaran</h1>
      <form @submit.prevent="checkStatus">
        <label for="email">Masukkan Email:</label>
        <input type="email" id="email" v-model="email" required />
        <button type="submit">Cek Status</button>
      </form>
      <div v-if="status !== null">
        <p>Status Pendaftaran: {{ status }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        status: null,
      };
    },
    methods: {
      checkStatus() {
        // Lakukan permintaan ke server untuk memeriksa status berdasarkan email
        // Misalnya, Anda dapat menggunakan Axios atau metode lainnya.
        // Di sini, saya hanya menetapkan status secara statis untuk tujuan contoh.
        this.status = 'Accepted'; // Gantilah dengan logika sebenarnya.
      },
    },
  };
  </script>
  
  <style scoped>
  /* Tambahkan gaya sesuai kebutuhan */
  </style>
  