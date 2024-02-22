<script setup>
const data = [
  'https://previews.dropbox.com/p/thumb/ACKDSMowmB0bdvZXS2RJVekhME4v3HO2h6vmTJZayJq8X175Pd9hIUxQJNhZPB1whPjrC9ztnAEOWyV4MUknhKpj7XxhTp1wB1efQ2hrOYCIhcgrqSXucfyPA5NulqHgoDZ_dEZ7WWf0CTXjyFuviP4eXF_WwbzDXIZ4q3vy43qYFylp-QdNs4ZLwvLtkT2LNgnJVLSjNVElfPOFeSIyU68CA58MqWeqBGKlgUrasdSjhI81D6EqDrikMdMaxtb1MxwWuNrMiBZrCA71QxMquFZevOsC4AIZPt_YfAh-EmqzuB5FMIKXClI-sFDVTj3LdOPJzXjwNveSAaaYqsGPDBxN/p.jpeg',
  'https://previews.dropbox.com/p/thumb/ACL_QUetAFOWUumemtx-sJ1pc6_r8o-cIDaRJC5B159LTXZPwPh4-0evXGe_uBLy9IHJ9OJl9ZveiKzPfbrUKUvAVkHUwdc3xmFIUcoinllu42XBU4tGv2fFpcDPJYAF8LQ4LEh9K0R4UDuTu2PLHr9TpkwVZxIxzPJxGx1F5DxnjphQLpEmI7eDJPn7qsoGhLZxhb9_7xAxb9MkiSG9v0Q81sqjx2q6UPkin6zXOviPFPIycFje3uWMRDTB9H_1gfblw4AcO9BVtTDyvUIjSX69h5VBtcLESoVH030QTNoLcqGfz8exANA-ofx7iPsKK0i9xOEvYpQDB5SAZJ04MeUl/p.jpeg',
  'https://previews.dropbox.com/p/thumb/ACLMWPXenEKol7zrnmNH1A1a_lwY77CubBENBZOFpfKLtjWbuO8b-Pe3agJnr4mbpH7b5ksHTory7QMXmpvkRHHt8HY04o33Shz9NlrWVqHwIc_0EoM5-hL9ae1gXQmsTeKefdUdBvuj0exhEGpgkTWc-iaMN3vSPdl1r3VtOifMepoUByglFDEvRn5rnCVQjoJ-T29OIkBi6StRh9mn7EXB98KASJBvTxNHOvwuTquzDYAuMhGrN2sbrBwqvqMJ0xJOLHPehkDkkfXn0EzEA1HQqzqV23REy40lnGZ9IqGGfBlmIQvEUqQECsZwJE2d1UyZ8kA0ejOuedvb7p4ThdmI/p.jpeg',
  'https://previews.dropbox.com/p/thumb/ACL_HLs46R21YD_X_gD_qDI0g0Q-fZtbPfkGB8llmDJbKgGEkZhuy6-R_sOfTbfqdQmO6qs_SXCWJcWm8louRC2OfCqDnlacBL9PPCjTro7DuVsQev78kuKw_KoBMqMPRfYX2eLzJ7MXc30nkGa-JAcRGU3CwmWqSJJk_UzY7rVBAiIO_Hp8S-__NqcZFA708XrJvpJv7fgyU6enyl0YS-sLve4uxQ0ddTEq85pe6sq6gdjILcFCHCF5Us_bXamLnZ0ceWrrme2AkcruIwQC_ySf-OmHFOT1OlSKGJ3092HMfaf0mFfwlvi3AIvlrGXQpWfUyNLLaN_s_spfUwBrkxZx/p.jpeg',
  'https://previews.dropbox.com/p/thumb/ACLwo8yhXqf-HUyW_z1ulFoO4FLtAs_K675cpsJfqxVGtBwaj_uvBEhxUkeYDDLxE1WS7Nbe4ZWtPcwoK3mckkEhyNIghfyvIFENjT_cYWge6GG5JVbHG77OkKreTFWNyZluGCy9SzhGf4OT_QxltHbz3dzBWP7tXDCF7zqIQJKZl9E51L0L69CvkW6MV2-l7zecG7EWHlXBI8vtSARmepEA3GnLdhF3pw0aWaKuPexFpYLHcRTp0r-Tpz4DEdpcKZGAzBliypowjfLITAc7beyKLK0jqeE6eCmfV4X-qYkt3JFQqA_nXdF-m_FBQNjdAYPTTkOARwOlHIl4Ux0ZB3nW/p.jpeg',
  'https://previews.dropbox.com/p/thumb/ACJ7mqSiMblTi0tQRhM-KH9vZUtr1A3ag43a67nMVJbr-ISzVmtM9Ya52LgpcF69Cmv62M7_RjtFLtDPJ1gxhRTTENM7a2k2gZBnWyEX2SpiIRlgu2rm-x10ZXLWksJKyTFoiHEYWNCh7faZMHSNXeYZ4r_agLCw6wFxTWf7LxhBHnaDd-uXR1wzTWSOtHfTkbN3H4CPXgV5hkWdCF36LQzLBOp5WLLOf9h7eNtnvvO3tw9eK2eFdpeXtv0_aU-mRjpfxsAd7h_zJYH6u5YtVDBOZxxvwNoigmTYBq7oOMSi-pP9SvciaJjb_UObDjcCHZzOSIpWkXOpAPHgOhsLWH8E/p.jpeg',
]

import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const options = {
  rewind: true,
  autoplay: 3000,
  perPage: 3,
  perMove: 1,
  gap: '2rem',
  type: 'loop',
  rewindSpeed: 3000,
  autoplayDelay: 30000,
  arrows: false,
  pagination: false,
  extensions: { AutoScroll },
  autoScroll: {
    speed: 100,
    pauseOnHover: true,
    pauseOnFocus: false,
  },
  interval: 1000,
    breakpoints: {
    725: { perPage: 1 },
    1056: { perPage: 2 },
    1350: { perPage: 3 },
    1700: { perPage: 4 },
    1800: { perPage: 4 },
    2000: { perPage: 5 },
    2500: { perPage: 5 },
    3500: { perPage: 6 },
    4500: { perPage: 7 },
    5500: { perPage: 8 },
    6500: { perPage: 9 },
    7500: { perPage: 10 },

  },
};


</script>

<template>
  <div class="flex flex-col gap-5 max-sm:gap-4 sm:pb-10 pb-6 max-vsm:py-4 overflow-hidden">
    <div class="flex justify-between px-8">
      <span class="text-center font-extrabold font-montserrat text-[45px] max-sm:text-[45px] max-ssm:text-[40px] max-vsm:text-[30px] max-vvsm:text-[30px]">Gallery</span>
    </div>
    <div class="flex justify-center items-center">
      <Splide :options="options" class="flex justify-center">
        <SplideSlide v-for="(image ,index) in data" :key="index"
          class="flex overflow-hidden justify-center max-vsm:w-full w-[465px] h-[260px] bg-[#000]">
          <img :src="image" :alt="'Gallery image - ' + (index+1)"
            class="flex justify-center active:cursor-grabbing cursor-grab rounded-3xl"
          >
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<style scoped>
.carousel-container-c {
  animation: carousel-scroll 18s linear infinite;
}

@keyframes carousel-scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-465px * 8))}
}

</style>