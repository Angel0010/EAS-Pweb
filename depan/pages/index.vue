<template>
  <div>
    <h1>Form Registrasi Lomba</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="nama">Nama:</label>
        <input type="text" id="nama" v-model="formData.nama" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div>
        <label for="asalSekolah">Asal Sekolah:</label>
        <input type="text" id="asalSekolah" v-model="formData.asalSekolah" required />
      </div>
      <div>
        <label for="tanggalPendaftaran">Tanggal Pendaftaran:</label>
        <input type="date" id="tanggalPendaftaran" v-model="formData.tanggalPendaftaran" required />
      </div>
      <button type="submit">Daftar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nama: '',
        email: '',
        asalSekolah: '',
        tanggalPendaftaran: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Lakukan sesuatu dengan data formulir, misalnya kirim ke server
      console.log('Data Formulir:', this.formData);
    },
  },
};
</script>

<style scoped>
  h1 {
    text-align: center;
    color: #333;
  }

  form {
    max-width: 400px;
    margin: 0 auto;
  }

  label {
    display: block;
    margin-bottom: 8px;
    color: #555;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #45a049;
  }
</style>
