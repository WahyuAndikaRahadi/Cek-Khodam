import React, { useState,useEffect } from 'react';
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
  { name: 'Peri Hutan', description: 'Khodam ini memiliki keanggunan dan kebijaksanaan seperti peri hutan yang bijak.' },
  { name: 'Ratu Serigga', description: 'Khodam ini memiliki kekuatan dan loyalitas seperti ratu serigga yang perkasa.' },
  { name: 'Penyihir Es', description: 'Khodam ini memiliki kekuatan magis dan kebijaksanaan seperti penyihir es yang kuat.' },
  { name: 'Kaisar Petir', description: 'Khodam ini memiliki kecepatan dan ketangkasan seperti kaisar petir yang perkasa.' },
  { name: 'Malaikat Perdamaian', description: 'Khodam ini membawa kedamaian dan kebaikan seperti malaikat perdamaian.' },
  { name: 'Ksatria Malam', description: 'Khodam ini memiliki keberanian dan ketegasan seperti ksatria malam yang setia.' },
  { name: 'Naga Kristal', description: 'Khodam ini memiliki kekuatan misterius dan keindahan seperti naga kristal yang kuat.' },
  { name: 'Putri Phoenix', description: 'Khodam ini memiliki kebangkitan dan kekuatan seperti putri phoenix yang abadi.' },
  { name: 'Dewi Bulan', description: 'Khodam ini memiliki kecantikan dan kelembutan seperti dewi bulan yang anggun.' },
  { name: 'Prajurit Salju', description: 'Khodam ini memiliki kekuatan dan ketahanan seperti prajurit salju yang tangguh.' },
  { name: 'Raja Hujan', description: 'Khodam ini memiliki kekuatan dan penguasaan seperti raja hujan yang mendominasi.' },
  { name: 'Pangeran Awan', description: 'Khodam ini memiliki kelembutan dan kebebasan seperti pangeran awan yang lembut.' },
  { name: 'Malaikat Keadilan', description: 'Khodam ini membawa keadilan dan kebijaksanaan seperti malaikat keadilan.' },
  { name: 'Elfa Perak', description: 'Khodam ini memiliki kecerdasan dan keanggunan seperti elfa perak yang bijak.' },
  { name: 'Dewi Matahari', description: 'Khodam ini memiliki kehangatan dan kecerahan seperti dewi matahari yang bersinar terang.' },
  { name: 'Raja Pohon', description: 'Khodam ini memiliki kebijaksanaan dan kekuatan seperti raja pohon yang kuat.' },
  { name: 'Ksatria Pegasus', description: 'Khodam ini memiliki kecepatan dan keberanian seperti ksatria pegasus yang perkasa.' },
  { name: 'Penyihir Kelabu', description: 'Khodam ini memiliki kekuatan magis dan kebijaksanaan seperti penyihir kelabu yang kuat.' },
  { name: 'Naga Emas', description: 'Khodam ini memiliki kekuatan misterius dan keagungan seperti naga emas yang kuat.' },
  { name: 'Putri Laut', description: 'Khodam ini memiliki keanggunan dan kekuatan seperti putri laut yang cantik.' },
  { name: 'Ksatria Bayu', description: 'Khodam ini memiliki kecepatan dan kelembutan seperti ksatria bayu yang gesit.' },
  { name: 'Malaikat Keharmonisan', description: 'Khodam ini membawa keharmonisan dan kebaikan seperti malaikat keharmonisan.' },
  { name: 'Raja Salju', description: 'Khodam ini memiliki kekuatan dan keanggunan seperti raja salju yang perkasa.' },
  { name: 'Pangeran Tengah Malam', description: 'Khodam ini memiliki kecerdasan dan ketegasan seperti pangeran tengah malam yang misterius.' },
  { name: 'Dewi Hujan', description: 'Khodam ini membawa hujan dan kesegaran seperti dewi hujan yang membawa berkah.' },
  { name: 'Peri Keindahan', description: 'Khodam ini memiliki kecantikan dan kelembutan seperti peri keindahan yang anggun.' },
  { name: 'Ratu Serangga', description: 'Khodam ini memiliki kekuatan dan keberanian seperti ratu serangga yang tangguh.' },
  { name: 'Ksatria Bulan', description: 'Khodam ini memiliki kebijaksanaan dan kekuatan seperti ksatria bulan yang setia.' },
  { name: 'Naga Perunggu', description: 'Khodam ini memiliki kekuatan misterius dan keindahan seperti naga perunggu yang kuat.' },
  { name: 'Putri Sakura', description: 'Khodam ini memiliki keanggunan dan kelembutan seperti putri sakura yang anggun.' },
  { name: 'Elfa Kristal', description: 'Khodam ini memiliki kecerdasan dan keindahan seperti elfa kristal yang berkilauan.' },
  { name: 'Pangeran Petir', description: 'Khodam ini memiliki kecepatan dan kekuatan seperti pangeran petir yang kuat.' },
  { name: 'Malaikat Kebaikan', description: 'Khodam ini membawa kebaikan dan kebijaksanaan seperti malaikat kebaikan.' },
  { name: 'Raja Hutan', description: 'Khodam ini memiliki kekuatan dan kebijaksanaan seperti raja hutan yang perkasa.' },
  { name: 'Ksatria Api', description: 'Khodam ini memiliki semangat dan keberanian seperti ksatria api yang berkobar.' },
  { name: 'Peri Salju', description: 'Khodam ini memiliki keanggunan dan kelembutan seperti peri salju yang anggun.' },
  { name: 'Dewi Kabut', description: 'Khodam ini membawa kesegaran dan misteri seperti dewi kabut yang misterius.' },
  { name: 'Naga Perak', description: 'Khodam ini memiliki kekuatan misterius dan keanggunan seperti naga perak yang kuat.' },
  { name: 'Putri Merpati', description: 'Khodam ini memiliki kelembutan dan kedamaian seperti putri merpati yang damai.' },
  { name: 'Elfa Malam', description: 'Khodam ini memiliki kecerdasan dan keanggunan seperti elfa malam yang misterius.' },
  { name: 'Pangeran Angin Utara', description: 'Khodam ini memiliki kecepatan dan kebebasan seperti pangeran angin utara yang gesit.' },
  { name: 'Malaikat Cahaya', description: 'Khodam ini membawa cahaya dan kebaikan seperti malaikat cahaya.' },
  { name: 'Ratu Es', description: 'Khodam ini memiliki kekuatan dan keanggunan seperti ratu es yang perkasa.' },
  { name: 'Ksatria Bayangan', description: 'Khodam ini memiliki ketegasan dan keberanian seperti ksatria bayangan yang misterius.' }
  
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
        'Anda akan mendapatkan khodam...',
        'Sepertinya bagus...',
        'Ini dia khodam anda.'
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
        const randomChance = Math.floor(Math.random() * 100);

        if (randomChance < 20) {
          setResult(`${name} tidak memiliki khodam.`);
        } else {
          const randomIndex = Math.floor(Math.random() * khodamData.length);
          const selectedKhodam = khodamData[randomIndex];
          setResult(`${name} memiliki khodam ${selectedKhodam.name}. ${selectedKhodam.description}`);
        }
      } else {
        setResult('Masukkan nama untuk memeriksa khodam.');
      }

      setTimeout(() => {
        setProcessing(false);
        setDruidAnimation('Waiting');
      }, 5000);

    }, 5000);
  };

  const handleReset = () => {
    setName('');
    setResult('');
    setDruidAnimation('Waiting');
  };

  return (
    <div className="bg-beige min-h-screen flex justify-center items-center" style={{
      backgroundImage: `url('../public/bg-medieval.jpg')`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}
>
      <div className="max-w-xl w-full bg-gray-600 border-2 border-white-700 rounded-lg shadow-md p-4 md:p-6 flex flex-col justify-between items-center">
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
                Coba Lagi
              </button>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-bold mb-2 text-white">{processing ? processingText : "Cek Khodam Anda" }</h3>

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
                className={`w-full px-4 py-2 bg-green-500 text-white rounded-md cursor-pointer ${
                  processing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600 transition duration-300'
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
