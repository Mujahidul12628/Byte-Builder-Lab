
'use client'

import React, { useRef, useState } from 'react';
import SignaturePad from 'react-signature-canvas';

const Canvas = () => {
  const [trimmedDataURL, setTrimmedDataURL] = useState(null);
  const signatureRef = useRef();
  const [showImage, setShowImage] = useState(false);

  const clearSignature = () => {
    signatureRef.current.clear();
    setTrimmedDataURL(null);
  };

  const trimSignature = () => {
    setTrimmedDataURL(signatureRef.current.getTrimmedCanvas().toDataURL('image/png'));
  };

  const showSignature = () => {
    if (trimmedDataURL) {
      // If the trimmedDataURL is already available, show the image immediately
      setShowImage(true);
    } else {
      // If trimmedDataURL is not available, generate it and then show the image
      const dataURL = signatureRef.current.getTrimmedCanvas().toDataURL('image/png');
      setTrimmedDataURL(dataURL);
      setShowImage(true);
    }
  };

  

  return (
    <section className='parent'>
    <div className="container"> 
      <div className="sigContainer"> 
        <SignaturePad
          ref={signatureRef}
          canvasProps={{ className: "sigPad" }} // Apply global CSS classes
        />
      </div>
      <div className='buttonContainer'>
        <button className="buttons" onClick={clearSignature}>Clear</button> {/* Apply global CSS classes */}
        <button className="buttons" onClick={trimSignature}>Trim</button> {/* Apply global CSS classes */}
        
      </div>
      {trimmedDataURL && (
        <div>
          <img className="sigImage" src={trimmedDataURL} alt="Trimmed Signature" /> 
        </div>
      )}
    </div>
    <div>
    {trimmedDataURL && (
        <div>
            <h1>Output</h1>
          <img className="sigImage" src={trimmedDataURL} alt="Trimmed Signature" /> {/* Apply global CSS classes */}
        </div>
      )}
    </div>
    </section>
  );
};

export default Canvas;
