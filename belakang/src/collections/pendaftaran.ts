// collections/pendaftaran.ts

import { CollectionConfig } from "payload/types";

const Pendaftaran: CollectionConfig = {
  slug: "pendaftaran",
  admin: {
    useAsTitle: "Nama",
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "Nama",
      type: "text",
      required: true,
    },
    {
      name: "Email",
      type: "text",
      unique: true,
      required: true,
    },
    {
      name: "AsalSekolah", 
      type: "text",
      required: true,
    },
    {
      name: "Status",
      type: "select",
      options: ["Waiting", "Rejected", "Accepted"],
      defaultValue: "Waiting",
    },
    {
      name: "TanggalPendaftaran", 
      type: "date",
      required: true,
    },
  ],
};

export default Pendaftaran;
