import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { HiPrinter } from 'react-icons/hi'
import { format } from 'date-fns';
import Swal from 'sweetalert2'
import { deleteEvent, getEventData } from '@/lib/service/serviceEvent';


const TableEvents = ({ refresh }) => {
    const queryClient = useQueryClient();
    const { data: dataEvents = [], error, isLoading } = useQuery({
        queryKey: ["dataEvents"],
        queryFn: getEventData,
    });

    const [selectedRows, setSelectedRows] = useState([]); // Tambahkan state untuk menyimpan baris yang dipilih

    useEffect(() => {
        queryClient.invalidateQueries(["dataEvents"]); // Fetch data secara otomatis saat komponen di-mount
    }, [refresh]); // Tambahkan refresh sebagai dependency

    const dataset = dataEvents.map((data) => ({
        id: data.id,
        kecamatan: data.kecamatan,
        tanggal: data.tanggal,
        komoditas: data.komoditas,
        harga: data.harga,
        stok: data.stok,
        alamat: data.alamat,
        create: data.createAt ? format(new Date(data.createAt.seconds * 1000), 'yyyy-MM-dd') : 'N/A', // Format timestamp
    }));

    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: 'Apakah Anda yakin?',
                text: "Anda tidak akan dapat mengembalikan ini!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya, hapus!',
                cancelButtonText: 'Batal'
            });
            if (result.isConfirmed) {
                await deleteEvent(id);
                queryClient.invalidateQueries(["dataEvents"]); // Refresh data setelah delete
                Swal.fire(
                    'Terhapus!',
                    'Data event telah dihapus.',
                    'success'
                )
            }
        } catch (error) {
            console.error("Error deleting document:", error);
            Swal.fire(
                'Error!',
                'Terjadi kesalahan saat menghapus data event.',
                'error'
            )
        }
    };

    const handlePrint = () => {
        if (selectedRows.length === 0) {
            Swal.fire('Peringatan!', 'Silakan pilih setidaknya satu baris untuk dicetak.', 'warning');
            return;
        }

        // Fungsi untuk mengonversi data ke format CSV
        const convertToCSV = (data) => {
            const header = 'Event,Tanggal\n'; // Header CSV
            const rows = data.map(row => `${row.kecamatan},${row.create}`).join('\n'); // Baris data
            return header + rows; // Gabungkan header dan baris
        };

        const csvData = convertToCSV(selectedRows); // Konversi data yang dipilih ke CSV

        // Buat elemen anchor untuk mengunduh file CSV
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', 'data_event.csv'); // Nama file CSV
        link.style.visibility = 'hidden';
        document.body.appendChild(link);

        try {
            link.click(); // Simulasikan klik untuk mengunduh
            document.body.removeChild(link); // Hapus elemen setelah mengunduh
            Swal.fire(
                'Berhasil!',
                'Data event telah diunduh dalam format CSV.',
                'success'
            );
        } catch (error) {
            console.error("Error downloading CSV:", error);
            Swal.fire(
                'Error!',
                'Terjadi kesalahan saat mengunduh data event dalam format CSV.',
                'error'
            );
        }
    };

    const columns = [
        {
          name: "Kecamatan",
          selector: (row) => row.kecamatan,
          sortable: true,
        },
        {
          name: "Tanggal",
          selector: (row) => row.tanggal,
          sortable: true,
        },
        {
            name: "Komoditas",
            selector: (row) => row.komoditas,
            sortable: true,
        },
        {
            name: "Harga",
            selector: (row) => row.harga,
            sortable: true,
        },
        {
          name: "Stok",
          selector: (row) => row.stok,
          sortable: true,
        },
        {
            name: "Alamat",
            selector: (row) => row.alamat,
            sortable: true,
          },
        {
          name: "CreateAt",
          selector: (row) => row.create,
          sortable: true,
        },
        {
            name: "Aksi",
            cell: (row) => (
                <button
                    className='btn btn-danger btn-sm'
                    onClick={() => handleDelete(row.id)}
                >
                    Hapus
                </button>
            ),
        },
      ];

  return (
      <>
          <div className='card w-full rounded-md shadow-lg'>
              <div className='card-body'>
                  <div className='flex justify-between items-center'>
                      <h1 className='text-base font-semibold'> Data Event</h1>
                      <button 
                          className='btn btn-primary md:btn-sm btn-xs text-white rounded-full shadow-md flex gap-2'
                          onClick={handlePrint} // Tambahkan event handler untuk tombol print
                      >
                          <HiPrinter size={14} /> Cetak
                      </button>
                  </div>
                  {isLoading ? (
                      <div className='flex justify-center items-center'><span className="loading loading-dots loading-md text-primary"></span></div>
                  ) : (
                      <DataTable
                          columns={columns}
                          data={dataset}
                          selectableRows
                          onSelectedRowsChange={({ selectedRows }) => setSelectedRows(selectedRows)} // Simpan baris yang dipilih
                          pagination
                          responsive
                      />
                  )}
              </div>
        </div>
      </>
  )
}

export default TableEvents