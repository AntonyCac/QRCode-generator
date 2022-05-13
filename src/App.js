import './App.css';
import QRCode from 'qrcode';
import { useState } from 'react';


function App() {

  const [url, setUrl] = useState('')
  const [qrCode, setQrCode] = useState('')

  const GenerateQRCode = () => {
    QRCode.toDataURL(url, {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      scale: 10
    }).then(url => {
      setQrCode(url)
    
    },
      (err, url) => {
      if (err) return console.error(err);
      console.log(url);
      setQrCode(url)
    })
  }


  return (
    <div className="App">
      <div className='bg-white dark:bg-slate-800 px-6 py-8 ring-1 ring-slate-800/5 lg:flex'>

        {/* sidebar left */}
        <div className="grid justify-center lg:justify-start px-5">
          <img className="max-w-full rounded-md" src="fake-ads.jpg" alt="" />

        </div>
        <div className="flex-1 pb-5">
          <h1 className="text-center text-slate-800 dark:text-white mt-5 text-base font-medium tracking-tight">QR CODE GENERATOR</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            Paste your URL and get a QR code.
          </p>
          <div className='sm:flex sm:justify-center lg:justify-start'>
            <div className='w-full'>
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                placeholder='e.g. https://google.com/' className=" mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      "/>
            </div>
            <div className='pl-2 flex items-center justify-center'>
              <button
                onClick={GenerateQRCode}
                className='text-white text-sm inline-flex items-center justify-center pr-4 pl-4 font-bold p-2 mt-1 bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow-md'>GENERATE</button>
            </div>
          </div>
          <div className='pt-2 grid items-center justify-center'>
          {qrCode && <>
            <img src={qrCode} alt=""
              className="rounded-md" />
              <a href={qrCode} download='qr-code.png' className='text-white text-sm inline-flex items-center justify-center pr-4 pl-4 font-bold p-2 mt-1 bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow-md'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
</svg> Download</a>
          </>}
          </div>
        </div>

        {/* sidebar right */}
        <div className="grid justify-center lg:justify-start px-5">
          <img className="max-w-full rounded-md" src="fake-ads.jpg" alt="" />
        </div>
      </div>
    </div>


  );
}

export default App;
