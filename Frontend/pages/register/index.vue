<template>
  <div
    class="flex flex-col justify-center items-center bg-gradient-to-r from-[#43C6AC] to-[#191654] min-h-screen w-full"
  >
    <div class="flex justify-between lg:w-[40%] w-[80%]">
      <div></div>
      <NuxtLink
        to="/"
        class="text-[#2e2e2e] bg-[#f8f8f8] p-3 rounded-sm mb-4 font-semibold cursor-pointer"
      >
        Back Home
      </NuxtLink>
    </div>
    <form
      @submit.prevent="registerForCompetition"
      class="lg:w-[40%] w-[80%] bg-[#FFFFFF] py-10 px-10 rounded-md flex flex-col gap-10"
    >
      <div class="text-3xl text-center font-bold">Registration Form</div>
      <div class="w-full border-b border-[#2e2e2e]">
        <input
          class="w-full border-none focus:outline-none text-lg"
          type="text"
          v-model="nama"
          placeholder="Nama"
          required
        />
      </div>
      <div class="w-full border-b border-[#2e2e2e]">
        <input
          class="w-full border-none focus:outline-none text-lg"
          type="email"
          v-model="email"
          placeholder="Email"
          required
        />
      </div>
      <div class="w-full border-b border-[#2e2e2e]">
        <input
          class="w-full border-none focus:outline-none text-lg"
          type="text"
          v-model="asalSekolah"
          placeholder="Asal Sekolah"
          required
        />
      </div>
      <div class="w-full border-b border-[#2e2e2e]">
        <label for="tanggalPendaftaran">Tanggal Pendaftaran:</label>
        <input
          type="date"
          id="tanggalPendaftaran"
          v-model="tanggalPendaftaran"
          required
        />
      </div>
      <button
        type="submit"
        class="w-full text-lg py-2 px-4 rounded-md bg-[#2e2e2e] text-[#f8f8f8]"
      >
        Register
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const nama = ref("");
const email = ref("");
const asalSekolah = ref("");
const tanggalPendaftaran = ref("");

const registerForCompetition = async () => {
  const res = await fetch("http://localhost:5000/api/registration", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nama: nama.value,
      email: email.value,
      asalSekolah: asalSekolah.value,
      tanggalPendaftaran: tanggalPendaftaran.value,
    }),
  });

  const json = await res.json();
  console.log(json);
  if (!res.ok) {
    alert(
      "Email " +
        email.value +
        " sudah terdaftar dan gagal melakukan pendaftaran lomba"
    );
  } else {
    alert(
      "Email " +
        email.value +
        " berhasil melakukan pendaftaran lomba pada tanggal " +
        tanggalPendaftaran.value
    );
    router.push("/"); // atau halaman tujuan setelah pendaftaran
  }
};
</script>
