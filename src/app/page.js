"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { HiOutlineTrendingUp, HiTag } from "react-icons/hi";
const SliderX = dynamic(() => import('@/components/sliderX'), { ssr: false });
const BarChart = dynamic(() => import('@/components/barChart'), { ssr: false });
const SliderY = dynamic(() => import('@/components/sliderY'), { ssr: false });
import CardPenjualan from '@/components/cardPenjualan';
import { dataKomoditas, dataTerlaris } from "./dummyData";

const Home = () => {

  return (
    <section className='flex md:flex-row flex-col justify-start items-start gap-4'>
      <div className='card flex-1 w-full md:max-w-[80%] shadow-lg'>
        <div className='card-body'>
          <div className='mb-3 flex justify-start items-center gap-3'>
            <HiOutlineTrendingUp size={30} className='text-primary' />
            <h1 className='font-bold text-2xl'>Komoditas Per Kecamatan</h1>
          </div>
          <hr />
          <SliderX>
            {dataKomoditas.map((item, index) => (
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
      <div className='card w-full md:max-w-[20%] shadow-lg'>
        <div className='card-body'>
          <div className='mb-3 flex justify-start items-center gap-3'>
            <HiTag size={30} className='text-primary drop-shadow-md' />
            <h1 className='font-bold text-2xl'>Terlaris</h1>
          </div>
          <hr />
          <SliderY>
            {dataTerlaris.map((item, index) => (
              <div key={index}>
                <CardPenjualan icons={item.icons} kecamatan={item.kecamatan} komoditas={item.komoditas} terjual={item.terjual} />
              </div>
            ))}
          </SliderY>
        </div>
      </div>
    </section>
  );
};

export default Home;
