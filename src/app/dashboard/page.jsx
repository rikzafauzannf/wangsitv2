"use client"
import Navigator from '@/components/navigator'
import React from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import InputField from '@/components/input/inputField'
import InputSelect from '@/components/input/inputSelect'
import { useQuery } from '@tanstack/react-query'
import { getKomoditasData } from '@/lib/service/serviceKomoditas'
import { createPenjualan } from '@/lib/service/servicePenjualan'
import TablePenjualan from '@/components/tables/tablePenjualan'
import { getKecamatanData } from '@/lib/service/serviceKecamatan'

const DataPenjualan = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [refresh, setRefresh] = React.useState(false);
    
    const { data: DataKecamatan= [] } = useQuery({
        queryKey: ["kecamatandata"],
        queryFn: () => getKecamatanData(),
    });

    const { data: DataKomoditas= [] } = useQuery({
        queryKey: ["komoditasdata"],
        queryFn: () => getKomoditasData(),
    });

    const onSubmit = async (data) => {
        const dataForm = {
            kecamatan: data.Nkecamatan,
            tanggal: data.tglStart,
            komoditas: data.NKomoditas,
            kuota: data.Kuota,
            createAt: new Date()
        }
        try {
            await createPenjualan(dataForm);
            setRefresh(prev => !prev);
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        } catch (error) {
            console.error("Error creating document:", error);
            Swal.fire(
                'Error!',
                'Terjadi kesalahan saat membuat data kecamatan.',
                'error'
            )
        }
    }
    const linkItem = [
        {
            linkNavigate: "/dashboard",
            linkName:"Dashboard"
        },
        {
            linkNavigate: "/dashboard",
            linkName:"penjualan"
        }
    ]

    const dataKec = DataKecamatan.map((item) => item.kecamatan)
    const dataKom = DataKomoditas.map((item)=>item.komoditas)
  return (
      <>
          <Navigator title='Data Penjualan' linkItem={linkItem} />
          <div className='card rounded-md shadow-lg p-5 '>
              <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex justify-center items-stretch flex-col gap-4'>
                        <div className='flex-1 space-y-1'>
                            <InputSelect label={"Nama Kecamatan"} inputDefault={"Pilih Kecamatan"} valueSelect={dataKec} {...register("Nkecamatan", { required: true })} />
                            <InputField label={"Tanggal Mulai"} type={"date"} placeholder={"Setting tanggal"} {...register("tglStart", { required: true })} />
                            <InputSelect label={"Komoditas"} inputDefault={"Pilih Komoditas"} valueSelect={dataKom} {...register("NKomoditas", { required: true })} />
                            <InputField label={"Kuota"} type={"number"} placeholder={"Setting Kuota"} {...register("Kuota", { required: true })} />
                        </div>
                        <button type='submit' className='btn btn-lg bg-primary glass h-auto shadow-md text-white'>
                            SIMPAN
                        </button>
                    </div>
                </form>
          </div>
          <TablePenjualan refresh={refresh} />
      </>
  )
}

export default DataPenjualan