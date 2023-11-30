import React from 'react';
import Review from './componets/review';


function Information() {
  const title2 = "Proses Booking"
  return (
    <div className="flex flex-col w-full bg-[#ffffff] p-24">
      <div>
        <p className="text-6xl text-[#203239] font-semibold w-full">
          Tahapan Pembelian Properti yang Mudah dan Cepat
        </p>
      </div>
      <div className="flex flex-row  mt-16 w-full">
        <Review title="Pilih Properti" 
        text={"Cari properti yang diinginkan sesuai dengan kriteria anda dan keluarga. Cara memilih properti yang bijak dapat anda baca lebih lanjut di sini"} 
        number={"01"} />
        <Review className="mx-32" title={title2} text={"Pembayaran dalam bentuk sejumlah uang sebagai komitmen memesan unit properti tertentu."} number={"02"} />
        <Review title={"KPR dan Sertifikasi"} text={"Pembiayaan KPR untuk pembeli rumah dengan skema pembiayaan jika diperlukan dan dilanjutkan proses sertifkasi HGB."} number={"03"} />
      </div>
    </div>
  )
}


export default Information;