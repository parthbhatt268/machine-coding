import './otpBase.css'
import { useState, useRef, useEffect } from 'react';


const OTP_DIGITS_COUNT = 5;

export const OtpBase = () => {
    const [inputArr, setInputArr] = useState(
        new Array(OTP_DIGITS_COUNT).fill("")
    );

    const refArr = useRef([]);

    useEffect(() => {
        refArr.current[0]?.focus()
    }, [])

    const handleChange = (value, index) => {
        // If non a number simply return
        if (isNaN(value)) return;

        console.log(value)
        const newArr = [...inputArr];
        newValue = value.trim()
        newArr[index] = newValue.slice(-1);
        setInputArr(newArr);
        newValue && refArr.current[index + 1]?.focus();
    }

    const handleKeyDown = (e, index) => {
        if (!e.target.value && e.key === 'Backspace') { // <<<--- extreme important
            refArr.current[index - 1]?.focus();
        }
    }

    return (
        <div>
            <h1>Validate OTP</h1>

            {inputArr.map((input, index) => {
                return (
                    <input
                        className="otp-input"
                        key={index}
                        type="text"
                        value={inputArr[index]}
                        ref={(input) => (refArr.current[index] = input)}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                )
            })}

        </div>
    )
}
