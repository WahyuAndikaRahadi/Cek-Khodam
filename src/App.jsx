import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Druid from './druid';
import KorigganLeft from './KorigganLeft';
import KorigganRight from './KorigganRight';
import Pohon from './Pohon';

const khodamData = [
  { name: 'Raja Singa', description: 'Khodam ini memiliki kekuatan dan keberanian seperti raja singa.' },
  { name: 'Naga Hitam', description: 'Khodam ini memiliki kekuatan misterius seperti naga hitam yang kuat.' },
  { name: 'Bidadari Air', description: 'Khodam ini memiliki kecantikan dan keanggunan seperti bidadari air.' },
  { name: 'Elfa', description: 'Khodam ini memiliki kelembutan dan kecerdasan seperti bangsawan Elfa.' },
  { name: 'Pangeran Angin', description: 'Khodam ini memiliki kecepatan dan kebebasan seperti pangeran angin.' },
  { name: 'Putri Salju', description: 'Khodam ini memiliki keanggunan dan kecantikan seputih salju.' },
  { name: 'Ksatria Api', description: 'Khodam ini memiliki keberanian dan semangat seperti ksatria api yang berkobar.' },
  { name: 'Martabak Cokelat', description: 'Enak Khodamnya yaa' },
  { name: 'Naga Sakti', description: 'Khodam Ini memiliki Keberanian dan ketangguhan seperti naga sakti' },
  { name: 'Ratu Pantai Selatan', description: 'Khodam ini Memiliki kekuatan magis seperti sang penguasa pantai selatan' },
  { name: 'Harimau Putih', description: 'Khodam ini menggambarkan kesucian dan keberanian' },
  { name: 'Raja Jin', description: 'Khodam memiliki aura yang amarah dan pendendam' },
  { name: 'Dewi Bulan', description: 'Khodam Ini memiliki Aura yang pemurah' },
  { name: 'Penjaga Hutan', description: 'Khodam ini memiliki aura keberanian dan ketangguhan' },
  { name: 'Singa Emas', description: 'khodam ini memiliki aura yang berani dan perkasa dalam menghadapi beberapa hal ' },
  { name: 'Banteng Sakti', description: 'khodam ini memiliki kekuatan menyeruduk orang sejauh 100km' },
  { name: 'Elang Perkasa', description: 'khodam ini memiliki kekuatan yang dapat siapa saja bisa terbang' },
  { name: 'Laba-laba Sunda', description: 'khodam ini akan menjadikan penggunanya sosok laba laba sunda' },
  { name: 'Buaya Hitam', description: 'khodam ini akan menjadikan penggunanya sosok Buaya Hitam' },
  { name: 'Katak Sigma', description: 'khodam ini akan menjadikan penggunanya sosok Katak Sigma' },
  { name: 'Skibidi Sigma', description: 'khodam ini akan menjadikan penggunanya sosok Skibidi Toilet' },
  { name: 'Ikan Lohan Tidak Gyat', description: 'khodam ini akan menjadikan penggunanya Ikan Lohan tidak Gyat' },
  { name: 'Burung Puyuh Warna Bjir', description: 'khodam ini akan menjadikan penggunanya sosok Burung Puyuh Warna EfBi' },
  { name: 'Monyet Hutan', description: 'khodam ini akan menjadikan penggunanya sosok Monyet Hutan yang Pemberani' },
  { name: 'Gajah Ngawi', description: 'khodam ini akan menjadikan penggunanya sosok Gajah Ngawi yang pemberani' },
  { name: 'Kursi Mewing', description: 'khodam ini akan menjadikan penggunanya sosok Kursi Mewing,Langsung Mewing Lu' },
  { name: 'Balon Ku Sigma', description: 'khodam ini akan menjadikan penggunanya sosok Balon Ku sigma biasanya akan berefek jika didekat anak kecil' },
  { name: 'Di Hina Tetap Sigma', description: 'khodam ini akan menjadikan penggunanya sosok pemberani ketangguhan dan tidak sombong rill no fek' },
  { name: 'Kue Keju', description: 'Manis Dong Kaya penggunanya' },
  { name: 'Rehan Toyota', description: 'khodam ini akan menjadikan penggunanya sosok Rehan Toyota' },
  { name: 'Ikbal Hotwil', description: 'khodam ini akan menjadikan penggunanya sosok Ikbal Hotwil' },
  { name: 'Kuda Pake Sendal', description: 'khodam ini akan menjadikan penggunanya sosok Kuda Yang Kampungan' },
  { name: 'Sendal', description: 'khodam ini akan menjadikan penggunanya tidak terkena efek apapun saat berjalan keluar rumah' },
  { name: 'Jaket Bapak', description: 'khodam ini akan menjadikan penggunanya super duper terlindungi' },
  { name: 'Kambing Hitam', description: 'khodam ini akan menjadikan penggunanya sosok Kambing Ireng' },
  { name: 'Pintu Gerbang', description: 'khodam ini akan menjadikan penggunanya Pintu gerbang yang kokoh' },
  { name: 'Kayu Jati', description: 'khodam ini akan menjadikan penggunanya sosok Kayu jati yang kuat' },
  { name: 'Jati Diri', description: 'khodam ini akan menjadikan penggunanya Simpati,tidak sombong dan memiliki jati diri yang tinggi' },
  { name: 'Burung Elang Dari Jawa', description: 'khodam ini akan menjadikan penggunanya sosok Burung elang aseli jawa yang terbang bebas namu kadang toxic' },
  { name: 'Nokia Bapak', description: 'khodam ini akan menjadikan penggunanya sosok yang sangat kuat dan tidak bisa dihancurkan oleh apapun' },
  { name: 'Nasi Padang', description: 'khodam ini akan menjadikan penggunanya sosok aseli nasi padang emm enak' },
  { name: 'Pizza Mewah', description: 'khodam ini akan menjadikan penggunanya sosok pizza kelas atas' },
  { name: 'Nasi Goreng Spesial', description: 'khodam ini akan menjadikan penggunanya sosok yang Spesial seperti namanya' },
  { name: 'Kerupuk Kulit', description: 'khodam ini akan menjadikan penggunanya sosok Garing saat bercanda seperti khodamnya garing' },
  { name: 'Rengginang', description: 'khodam ini aka muncul 1 tahun sekali saat idul fitri' },
  { name: 'Pempek Palembang', description: 'khodam ini akan menjadikan penggunanya sosok Pempek Palempang kapal selam' },
  { name: 'Kapal jetski Cilacap', description: 'khodam ini akan menjadikan penggunanya sosok Kapal Jetski cilacap' },
  { name: 'Ondel Ondel', description: 'khodam ini akan menjadikan penggunanya sosok Ondel Ondel' },
  { name: 'Reog', description: 'khodam ini akan menjadikan penggunanya sosok yang ganas seperti reog' },
  { name: 'Putu Ayu', description: 'khodam ini akan menjadikan penggunanya sosok Cantik seperti Khodamnya Putu AYu' },
  { name: 'Bubur Ketan Hitam', description: 'khodam ini akan menjadikan penggunanya sosok manis seperti khodamnya' },
  { name: 'Kai Cenat Mode Sigma', description: 'Lawannya Kak gem mode mewing' },
  { name: 'Kapten Bajak Laut Ngawi', description: 'khodam ini akan menjadikan penggunanya sosok Yang hebat Dan dapat Memimpi Pasukan' },
  { name: 'Mio Mirza', description: 'khodam ini akan menjadikan penggunanya sosok Misterius seperti mio mirza' },
  { name: 'Kak Gem Mode Mewing', description: 'Baybay bay bay' },
  { name: 'Sambal Goreng Kecap Hitam', description: 'khodam ini akan menjadikan penggunanya udah digoreng nambah hitam' },
  { name: 'Kamu Bukan User Khodam !', description: 'Kamu Bukan User Khodam Pergi Dari Sini!' },
  { name: 'Ambatron Type 555 - y 9 UZ', description: 'khodam ini akan menjadikan penggunanya sosok Ambatron yang pintar dan cerdas dengan kekuatan ai tahun 2124' },
  { name: 'Ambatukam Mewing', description: 'khodam ini akan menjadikan penggunanya sosok yang ganteng dan tamvan' },
  { name: 'Alok', description: 'khodam ini akan menjadikan penggunanya sosok Bang Gift Alok 99 Daimond' }

];

function App() {
  const [name, setName] = useState('');
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState('');
  const [druidAnimation, setDruidAnimation] = useState('Waiting');
  const [processingText, setProcessingText] = useState('');


  useEffect(() => {
    let intervalId;

    if (processing) {
      const texts = [
        'Saya terawang anda...',
        'Mencari Khodam Untuk Anda...',
        'Anda akan mendapatkan khodam...',
        'Sepertinya bagus...',
        'Ini dia khodam anda...'
      ];

      let currentIndex = 0;
      intervalId = setInterval(() => {
        setProcessingText(texts[currentIndex]);
        currentIndex = (currentIndex + 1) % texts.length;
      }, 800);
    } else {
      setProcessingText('');
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [processing]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    setProcessing(true);
    setDruidAnimation('Processing');

    setTimeout(() => {
      if (name.trim() !== '') {
        const hashCode = name.split('').reduce((acc, char) => {
          return acc + char.charCodeAt(0);
        }, 0);

        const randomIndex = Math.abs(hashCode) % khodamData.length;
        const selectedKhodam = khodamData[randomIndex];

        setResult(`${name} memiliki khodam ${selectedKhodam.name}. ${selectedKhodam.description}`);
      } else {
        setResult('Masukkan nama untuk memeriksa khodam.');
      }

      setTimeout(() => {
        setProcessing(false);
        setDruidAnimation('Waiting');
      }, 1000);

    }, 7000);
  };


  const handleReset = () => {
    setName('');
    setResult('');
    setDruidAnimation('Waiting');
  };

  return (
    <div className="bg-beige min-h-screen flex justify-center items-center" style={{
      backgroundImage: `url('/bg-medieval.jpg')`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}
    >
      <div className="max-w-xl w-full bg-green-800 border-2 border-white-700 rounded-lg shadow-md p-4 md:p-6 flex flex-col justify-between items-center">
        <div className="flex justify-center items-center h-60 md:h-80 lg:h-96 w-full">
          <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Druid animation={druidAnimation} />
            <KorigganLeft />
            <KorigganRight position={[2, 0, 0]} />
            <Pohon position={[4, 0, 0]} />
            <Pohon position={[-4, 0, 0]} />
          </Canvas>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 rounded-lg p-4 text-center">
          {result ? (
            <div>
              <h4 className="text-lg font-bold mb-2 text-white">Hasil:</h4>
              <p className="text-sm text-white">{result}</p>
              <button
                onClick={handleReset}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md cursor-pointer hover:bg-green-600 transition duration-300"
              >
                Coba Nama Lain
              </button>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-bold mb-2 text-white">{processing ? processingText : "Cek Khodam Anda"}</h3>

              <input
                type="text"
                name="name"
                placeholder="Masukkan nama"
                value={name}
                onChange={handleChange}
                disabled={processing}
                className="w-full px-4 py-2 bg-opacity-10 border border-white rounded-md mb-2 focus:outline-none focus:bg-opacity-20"
              />
              <button
                onClick={handleSubmit}
                disabled={processing}
                className={`w-full px-4 py-2 bg-green-500 text-white rounded-md cursor-pointer ${processing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600 transition duration-300'
                  }`}
              >
                {processing ? 'Memproses...' : 'Submit'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>


  );
}

export default App;
