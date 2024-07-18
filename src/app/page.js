"use client"
import Image from "next/image";
import dynamic from 'next/dynamic';
import CardPenjualan from '@/components/cardPenjualan';
import { HiOutlineTrendingUp, HiTag } from "react-icons/hi";
// import SliderX from "@/components/sliderX";
// import BarChart from "@/components/barChart";
// import SliderY from "@/components/sliderY";

const BarChart = dynamic(() => import('@/components/barChart'), { ssr: false });
const SliderX = dynamic(() => import('@/components/sliderX'), { ssr: false });
const SliderY = dynamic(() => import('@/components/sliderY'), { ssr: false });

// const { dataKomoditas, dataTerlaris } = dynamic(() => import('./dummyData'), { ssr: false });

export default function Home() {
  const dataKomoditas =[
    {
        namaKomoditas: "Beras SPHP",
        icons:null,
        data: [
            {label: "Bungursari", value: 100 },
            {label: "Cibeurum", value: 300},
            {label: "Cihideung", value: 200},
            {label: "Cipedes", value: 80},
            {label: "Indihiang", value: 40},
            {label: "Kawalu", value: 30},
            {label: "Mangkubumi", value: 70},
            {label: "Purbaratu", value: 300},
            {label: "Tamansari", value: 100},
            {label: "Tawang", value: 50},
        ]
    },
    {
        namaKomoditas: "Telur Ayam Ras",
        icons:null,
        data: [
            {label: "Bungursari", value: 100 },
            {label: "Cibeurum", value: 300},
            {label: "Cihideung", value: 200},
            {label: "Cipedes", value: 80},
            {label: "Indihiang", value: 40},
            {label: "Kawalu", value: 30},
            {label: "Mangkubumi", value: 70},
            {label: "Purbaratu", value: 300},
            {label: "Tamansari", value: 100},
            {label: "Tawang", value: 50},
        ]
    },
    {
        namaKomoditas: "Minyak Goreng Kemasan",
        icons:null,
        data: [
            {label: "Bungursari", value: 100 },
            {label: "Cibeurum", value: 300},
            {label: "Cihideung", value: 200},
            {label: "Cipedes", value: 80},
            {label: "Indihiang", value: 40},
            {label: "Kawalu", value: 30},
            {label: "Mangkubumi", value: 70},
            {label: "Purbaratu", value: 300},
            {label: "Tamansari", value: 100},
            {label: "Tawang", value: 50},
        ]
    },
    {
        namaKomoditas: "Terigu",
        icons:null,
        data: [
            {label: "Bungursari", value: 100 },
            {label: "Cibeurum", value: 300},
            {label: "Cihideung", value: 200},
            {label: "Cipedes", value: 80},
            {label: "Indihiang", value: 40},
            {label: "Kawalu", value: 30},
            {label: "Mangkubumi", value: 70},
            {label: "Purbaratu", value: 300},
            {label: "Tamansari", value: 100},
            {label: "Tawang", value: 50},
        ]
    },
    {
        namaKomoditas: "Gula Pasir",
        icons:null,
        data: [
            {label: "Bungursari", value: 100 },
            {label: "Cibeurum", value: 300},
            {label: "Cihideung", value: 200},
            {label: "Cipedes", value: 80},
            {label: "Indihiang", value: 40},
            {label: "Kawalu", value: 30},
            {label: "Mangkubumi", value: 70},
            {label: "Purbaratu", value: 300},
            {label: "Tamansari", value: 100},
            {label: "Tawang", value: 50},
        ]
    },
    {
        namaKomoditas: "Daging Ayam",
        icons:null,
        data: [
            {label: "Bungursari", value: 100 },
            {label: "Cibeurum", value: 300},
            {label: "Cihideung", value: 200},
            {label: "Cipedes", value: 80},
            {label: "Indihiang", value: 40},
            {label: "Kawalu", value: 30},
            {label: "Mangkubumi", value: 70},
            {label: "Purbaratu", value: 300},
            {label: "Tamansari", value: 100},
            {label: "Tawang", value: 50},
        ]
    },
    {
        namaKomoditas: "Bawang Merah",
        icons:"/icons/bawang-merah.png",
        data: [
            {label: "Bungursari", value: 100 },
            {label: "Cibeurum", value: 300},
            {label: "Cihideung", value: 200},
            {label: "Cipedes", value: 80},
            {label: "Indihiang", value: 40},
            {label: "Kawalu", value: 30},
            {label: "Mangkubumi", value: 70},
            {label: "Purbaratu", value: 300},
            {label: "Tamansari", value: 100},
            {label: "Tawang", value: 50},
        ]
    },
    {
        namaKomoditas: "Cabai Merah",
        icons:"/icons/cabe-rawit.png",
        data: [
            {label: "Bungursari", value: 100 },
            {label: "Cibeurum", value: 300},
            {label: "Cihideung", value: 200},
            {label: "Cipedes", value: 80},
            {label: "Indihiang", value: 40},
            {label: "Kawalu", value: 30},
            {label: "Mangkubumi", value: 70},
            {label: "Purbaratu", value: 300},
            {label: "Tamansari", value: 100},
            {label: "Tawang", value: 50},
        ]
    },
    {
        namaKomoditas: "Tomat",
        icons:"/icons/tomat.png",
        data: [
            {label: "Bungursari", value: 100 },
            {label: "Cibeurum", value: 300},
            {label: "Cihideung", value: 200},
            {label: "Cipedes", value: 80},
            {label: "Indihiang", value: 40},
            {label: "Kawalu", value: 30},
            {label: "Mangkubumi", value: 70},
            {label: "Purbaratu", value: 300},
            {label: "Tamansari", value: 100},
            {label: "Tawang", value: 50},
        ]
    },
    {
        namaKomoditas: "Bawang Daun",
        icons:"/icons/bawang-daun.png",
        data: [
            {label: "Bungursari", value: 100 },
            {label: "Cibeurum", value: 300},
            {label: "Cihideung", value: 200},
            {label: "Cipedes", value: 80},
            {label: "Indihiang", value: 40},
            {label: "Kawalu", value: 30},
            {label: "Mangkubumi", value: 70},
            {label: "Purbaratu", value: 300},
            {label: "Tamansari", value: 100},
            {label: "Tawang", value: 50},
        ]
    },
    {
        namaKomoditas: "Kangkung",
        icons:"/icons/kangkung.png",
        data: [
            {label: "Bungursari", value: 100 },
            {label: "Cibeurum", value: 300},
            {label: "Cihideung", value: 200},
            {label: "Cipedes", value: 80},
            {label: "Indihiang", value: 40},
            {label: "Kawalu", value: 30},
            {label: "Mangkubumi", value: 70},
            {label: "Purbaratu", value: 300},
            {label: "Tamansari", value: 100},
            {label: "Tawang", value: 50},
        ]
    },
    {
        namaKomoditas: "Selada",
        icons:"/icons/selada-bokor.png",
        data: [
            {label: "Bungursari", value: 100 },
            {label: "Cibeurum", value: 300},
            {label: "Cihideung", value: 200},
            {label: "Cipedes", value: 80},
            {label: "Indihiang", value: 40},
            {label: "Kawalu", value: 30},
            {label: "Mangkubumi", value: 70},
            {label: "Purbaratu", value: 300},
            {label: "Tamansari", value: 100},
            {label: "Tawang", value: 50},
        ]
    },
    {
        namaKomoditas: "Masakan Olahan",
        icons:null,
        data: [
            {label: "Bungursari", value: 100 },
            {label: "Cibeurum", value: 300},
            {label: "Cihideung", value: 200},
            {label: "Cipedes", value: 80},
            {label: "Indihiang", value: 40},
            {label: "Kawalu", value: 30},
            {label: "Mangkubumi", value: 70},
            {label: "Purbaratu", value: 300},
            {label: "Tamansari", value: 100},
            {label: "Tawang", value: 50},
        ]
    },
    {
        namaKomoditas: "Gas LPG 3Kg",
        icons:null,
        data: [
            {label: "Bungursari", value: 100 },
            {label: "Cibeurum", value: 300},
            {label: "Cihideung", value: 200},
            {label: "Cipedes", value: 80},
            {label: "Indihiang", value: 40},
            {label: "Kawalu", value: 30},
            {label: "Mangkubumi", value: 70},
            {label: "Purbaratu", value: 300},
            {label: "Tamansari", value: 100},
            {label: "Tawang", value: 50},
        ]
    },
]

const dataTerlaris =[
    {
        kecamatan: "Mangkubumi",
        icons:"/icons/selada-bokor.png",
        komoditas: "Selada",
        terjual: 200,
    },
    {
        kecamatan: "Mangkubumi",
        icons:"/icons/bayam.png",
        komoditas: "Bayam",
        terjual: 200,
    },
    {
        kecamatan: "Mangkubumi",
        icons:"/icons/kol.png",
        komoditas: "Kol",
        terjual: 200,
    },
    {
        kecamatan: "Mangkubumi",
        icons:"/icons/seledri.png",
        komoditas: "Seledri",
        terjual: 200,
    },
]
  return (
    <section className='flex md:flex-row flex-col justify-start items-start gap-4 '>
    <div className='card flex-1 w-full md:max-w-[80%] shadow-lg'>
      <div className='card-body'>
        <div className='mb-3 flex justify-start items-center gap-3'>
          <HiOutlineTrendingUp size={30} className='text-primary'/>
          <h1 className='font-bold text-2xl'>Komoditas Per Kecamatan</h1>
        </div>
        <hr />
        <SliderX>
          {Array.isArray(dataKomoditas) && dataKomoditas.map((item, index) => {
            return (
              <div key={index}>
                <div className='flex justify-start items-center gap-2'>
                  {item.icons && (
                    <Image src={item.icons} alt={item.namaKomoditas} width={40} height={40} className='object-contain' />
                  )}
                  
                  <h1 className='font-bold'>{item.namaKomoditas}</h1>
                </div>
                <BarChart data={item.data}/>
              </div>
            )
          })}
        </SliderX>
      </div>
    </div>
    <div className='card w-full md:max-w-[20%] shadow-lg'>
      <div className='card-body'>
        <div className='mb-3 flex justify-start items-center gap-3'>
          <HiTag size={30} className='text-primary drop-shadow-md'/>
          <h1 className='font-bold text-2xl'>Terlaris</h1>
        </div>
        <hr />
        <SliderY>
          {Array.isArray(dataTerlaris) && dataTerlaris.map((item,index)=>{
            return (
              <div key={index}>
              <CardPenjualan icons={item.icons} kecamatan={item.kecamatan} komoditas={item.komoditas} terjual={item.terjual}/>
              </div>
            )
          })}
        </SliderY>
      </div>
    </div>
  </section>
  );
}