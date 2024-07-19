"use client"
import Navigator from '@/components/navigator'
import React from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import InputField from '@/components/input/inputField'
import InputSelect from '@/components/input/inputSelect'
import { useQuery } from '@tanstack/react-query'
import TablePenjualan from '@/components/tables/tablePenjualan'
import { getKecamatanData } from '@/lib/service/serviceKecamatan'
import { createEvent } from '@/lib/service/serviceEvent'
import TableEvents from '@/components/tables/tableEvents'

const DataEvent = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [refresh, setRefresh] = React.useState(false);
    
    const { data: DataKecamatan= [] } = useQuery({
        queryKey: ["kecamatandata"],
        queryFn: () => getKecamatanData(),
    });

    const onSubmit = async (data) => {
        const dataForm = {
            kecamatan: data.Nkecamatan,
            tanggal: data.tglStart,
            alamat: data.alamat,
            createAt: new Date()
        }
        try {
            await createEvent(dataForm);
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
            linkNavigate: "/dashboard/events",
            linkName:"events"
        }
    ]

    const dataKec = DataKecamatan.map((item) => item.kecamatan)
  return (
      <>
          <Navigator title='Data Events' linkItem={linkItem} />
          <div className='card rounded-md shadow-lg p-5 '>
              <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex justify-center items-stretch flex-col gap-4'>
                        <div className='flex-1 space-y-1'>
                            <InputSelect label={"Nama Kecamatan"} inputDefault={"Pilih Kecamatan"} valueSelect={dataKec} {...register("Nkecamatan", { required: true })} />
                            <InputField label={"Tanggal Mulai"} type={"date"} placeholder={"Setting tanggal"} {...register("tglStart", { required: true })} />
                            <InputField label={"Alamat"} type={"text"} placeholder={"Jl....."} {...register("alamat", { required: true })} />
                        </div>
                        <button type='submit' className='btn btn-lg bg-primary glass h-auto shadow-md text-white'>
                            SIMPAN
                        </button>
                    </div>
                </form>
          </div>
          <TableEvents refresh={refresh} />
      </>
  )
}

export default DataEvent