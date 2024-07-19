"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { HiOutlineTrendingUp, HiTag } from "react-icons/hi";
const SliderX = dynamic(() => import('@/components/sliderX'), { ssr: false });
const BarChart = dynamic(() => import('@/components/barChart'), { ssr: false });
const SliderY = dynamic(() => import('@/components/sliderY'), { ssr: false });
import CardPenjualan from '@/components/cardPenjualan';
import { getKomoditasData } from "@/lib/service/serviceKomoditas";
import { getPenjualanData } from "@/lib/service/servicePenjualan";
import { useQuery } from "@tanstack/react-query"; 
import { queryClient } from "@/lib/service/reactQuery";
import { useEffect } from "react";
import CardEvents from "@/components/cardEvents";
import { getEventData } from "@/lib/service/serviceEvent";

const Home = () => {
  const { data: dataKomoditas = [] } = useQuery({
    queryKey: ["dataKomoditas"],
    queryFn: getKomoditasData,
  });

  const { data: dataPenjualan = [] } = useQuery({
    queryKey: ["dataPenjualan"],
    queryFn: getPenjualanData,
  });

  const { data: dataEvents = [] } = useQuery({
    queryKey: ["dataEvents"],
    queryFn: getEventData,
  });

  useEffect(() => {
    const interval = setInterval(() => {
        queryClient.invalidateQueries(["dataKomoditas","dataPenjualan","dataEvents"]); // Cek data setiap beberapa detik
    }, 86.400000); // Setiap 5 detik

    return () => clearInterval(interval); // Cleanup interval
}, []);

  const dataK = dataKomoditas.map((komoditas) => {
    const penjualanData = dataPenjualan
      .filter(penjualan => penjualan.komoditas === komoditas.komoditas)
      .map(penjualan => ({
        label: penjualan.kecamatan,
        value: parseInt(penjualan.kuota, 10),
      }));

    if (penjualanData.length === 0) return null; // Tidak muncul jika data penjualan kosong

    return {
      namaKomoditas: komoditas.komoditas,
      icons: null,
      data: penjualanData,
    };
  }).filter(Boolean); // Filter untuk menghilangkan nilai null

  return (
    <section className='flex md:flex-row flex-col justify-start items-start gap-4'>
      <div className='card flex-1 w-full md:max-w-[70%] shadow-lg'>
        <div className='card-body'>
          <div className='mb-3 flex justify-start items-center gap-3'>
            <HiOutlineTrendingUp size={30} className='text-primary' />
            <h1 className='font-bold text-2xl'>Komoditas Per Kecamatan</h1>
          </div>
          <hr />
          <SliderX>
            {dataK.map((item, index) => (
              <div key={index}>
                <div className='flex justify-start items-center gap-2'>
                  {item.icons && (
                    <Image src={item.icons} alt={item.namaKomoditas} width={40} height={40} className='object-contain' />
                  )}
                  <h1 className='font-bold'>{item.namaKomoditas}</h1>
                </div>
                <BarChart data={item.data} />
              </div>
            ))}
          </SliderX>
        </div>
      </div>
      <div className="md:max-w-[28%] w-full">
      <div className='card w-full shadow-lg'>
        <div className='card-body'>
          <div className='mb-3 flex justify-start items-center gap-3'>
            <HiTag size={30} className='text-primary drop-shadow-md' />
            <h1 className='font-bold text-2xl'>Penjualan</h1>
          </div>
          <hr />
          <SliderY>
            {dataPenjualan.map((item, index) => (
              <div key={index}>
                <CardPenjualan 
                  icons={item.icons} 
                  kecamatan={item.kecamatan} 
                  komoditas={item.komoditas} 
                  terjual={item.kuota}
                />
              </div>
            ))}
          </SliderY>
        </div>
      </div>
      <div className='card w-full  shadow-lg'>
        <div className='card-body'>
          <div className='mb-3 flex justify-start items-center gap-3'>
            <HiTag size={30} className='text-primary drop-shadow-md' />
            <h1 className='font-bold text-2xl'>Events</h1>
          </div>
          <hr />
          <SliderX>
            {dataEvents.map((items, index) => (
              <CardEvents key={index}
                kecamatan={items.kecamatan}
                komoditas={items.komoditas}
                harga={items.harga}
                stok={items.stok}
                tanggal={items.tanggal}
                alamat={items.alamat}
              />
            ))}
          </SliderX>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Home;