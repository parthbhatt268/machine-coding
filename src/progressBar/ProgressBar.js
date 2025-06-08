import { useEffect, useState } from 'react'
import './progressBar.css'


const MutipleProgressBar = ({percentage}) => {

    const [active, setActive] = useState(0)

    useEffect(() => {
        setTimeout(()=>{
            setActive(percentage)
        }, 100)

    },[percentage])

    return (
        <div className="outer">
            <div className="inner"
            style={{
                // width: `${percentage}%`,
                transform: `translateX(${active - 100}%)`,
                transition: "0.5s ease-in"


                }}>
                {percentage}%
            </div>
        </div>
    )
}



export const ProgressBar = ({ progress }) => {

    const percentage = [5, 10, 30, 50, 60, 90, 100]

    return (
        <>
        {
            percentage.map( value => (
                <MutipleProgressBar key={value} percentage={value} />
            ))
        }
        </>
    )

}