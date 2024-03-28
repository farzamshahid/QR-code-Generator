import React, { useState } from 'react'
import QRCode from "react-qr-code"
const QRCodeGenerator = () => {
    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')
    function handleGenerateCode() {
        setQrCode(input)
        setInput('')
    }
    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input type="text" value={input}
                    onChange={(e) => setInput(e.target.value)}
                    name='qr-code'
                    placeholder='Enter your value here' />
                <button
                    disabled={input && input.trim() !== "" ? false : true}
                    onClick={handleGenerateCode}>Generate
                </button>
            </div>
            <div>
                <QRCode
                    id='qr-code-value'
                    value={qrCode}
                    size={400}
                    bgColor='white'
                />
            </div>
        </div>
    )
}

export default QRCodeGenerator