import React from 'react';
import SubMenu from '../components/SubMenu';
import * as AiIcons from 'react-icons/ai';
import {Typography} from "@material-ui/core";

export const HelpData = [
    {
      title: 'Cara Akses dengan Web',
      icon: <AiIcons.AiOutlineGlobal />,
      iconClosed: <AiIcons.AiOutlinePlus />,
      iconOpened: <AiIcons.AiOutlineMinus />,
  
      subNav: [
        {
          desc: '1. Buka browser Anda masing-masing.',
        },
        {
          desc: '2. Buka https://siparto-kab-semarang.web.app/.',
        },
        {
          desc: '3. Install aplikasi agar dapat berjalan offline.',
        }
      ]
    },
    {
        title: 'Cara Menggunakan Aplikasi',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <AiIcons.AiOutlinePlus />,
        iconOpened: <AiIcons.AiOutlineMinus />,
    
        subNav: [
          {
            desc: '1. Buka aplikasi SIPARTO yang telah terpasang.',
          },
          {
            desc: '2. Klik salah satu ikon biru di map.',
          },
          {
            desc: '3. Klik nama/alamat/gambar pada popup.',
          },
          {
            desc: '4. Eksplorasi detail dari tiap-tiap pariwisata.',
          },
        ]
      },
  ];


export default function Bantuan() {
  return (
      <>
      <div className='help'>
      <Typography align='left' gutterBottom variant="h4">Bagaimana Cara Mengoperasikan Aplikasi SIPARTO?</Typography>
      <Typography align='left' paragraph variant="h7">Aplikasi SIPARTO ini dapat kita gunakan untuk mencari informasi 
                                    mengenai pariwisata yang ada di Kabupaten Semarang. Untuk mulai 
                                    mengoperasikan aplikasi ini, bisa dilakukan melalui cara berikut:</Typography>
      </div>

      <div className='help-opsi'>
        {HelpData.map((item, index) => {
            return <SubMenu item={item} key={index} />;   
          })}
      </div>
      </>
  )
}

