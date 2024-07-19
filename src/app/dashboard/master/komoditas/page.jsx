"use client"
import Navigator from '@/components/navigator'
import React from 'react'
import { HiPlus } from 'react-icons/hi'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { createKomoditas } from '@/lib/service/serviceKomoditas'
import TableKomoditas from '@/components/tables/tableKomoditas'
import InputField from '@/components/input/inputField'

const DataKomoditas = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [refresh, setRefresh] = React.useState(false);

    const onSubmit = async (data) => {
        const dataForm = { komoditas: data.komoditas, createAt: new Date() }
        try {
            await createKomoditas(dataForm);
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
                'Terjadi kesalahan saat membuat data komoditas.',
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
            linkNavigate: "/dashboard/master/komoditas",
            linkName:"Master komoditas"
        }
    ]
  return (
      <>
          <Navigator title='Master Komoditas' linkItem={linkItem} />
          <div className='card rounded-md shadow-lg p-5 '>
              <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex justify-center items-stretch md:flex-row flex-col'>
                        <div className='flex-1'>
                            <InputField label={"Nama komoditas"} type={"text"} placeholder={"Masukkan Nama komoditas"} {...register("komoditas", { required: true })}/>
                        </div>
                        <button type='submit' className='btn btn-lg bg-primary glass h-auto shadow-md'>
                            <HiPlus size={20} color='#ffff'/>
                        </button>
                    </div>
                </form>
          </div>
          <TableKomoditas refresh={refresh} />
      </>
  )
}

export default DataKomoditas