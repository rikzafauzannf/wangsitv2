"use client"
import Navigator from '@/components/navigator'
import React from 'react'
import { HiPlus } from 'react-icons/hi'
import { useForm } from 'react-hook-form'
import { createKecamatan } from '@/lib/service/serviceKecamatan'
import TableKecamatan from '@/components/tables/tableKecamatan'
import Swal from 'sweetalert2'
import InputField from '@/components/input/inputField'

const DataKecamatan = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [refresh, setRefresh] = React.useState(false);

    const onSubmit = async (data) => {
        const dataForm = { kecamatan: data.kecamatan, createAt: new Date() }
        try {
            await createKecamatan(dataForm);
            setRefresh(prev => !prev); // Toggle refresh
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Data telah disimpan",
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
            linkNavigate: "/dashboard/master/kecamatan",
            linkName:"Master Kecamatan"
        }
    ]
  return (
      <>
          <Navigator title='Master Kecamatan' linkItem={linkItem} />
          <div className='card rounded-md shadow-lg p-5 '>
              <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex justify-center items-stretch md:flex-row flex-col'>
                        <div className='flex-1'>
                            <InputField label={"Nama Kecamatan"} type={"text"} placeholder={"Masukkan Nama Kecamatan"} {...register("kecamatan", { required: true })}/>
                        </div>
                        <button type='submit' className='btn btn-lg bg-primary glass h-auto shadow-md'>
                            <HiPlus size={20} color='#ffff'/>
                        </button>
                    </div>
                </form>
          </div>
          <TableKecamatan refresh={refresh} />
      </>
  )
}

export default DataKecamatan