import React from 'react'
import Stripe from './Stripe'

const Stripes = () => {
    const data = [
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67461a7f6e278782c11c6370_Keystone-white.svg", number: 48 },
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d4ee1fe5ae69e47b6c1c_Lavendar-logo-white.svg", number: 2 },
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d304ad489e305be8dad7_sevdesk-white.svg", number: 11 },
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88fc_660191edcdb42d79ba8c23aa_Logo.svg", number: 48 },
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62c438b36ad60fdcd_663a62d3cc5a74576d82a863_Singularity_logo.svg", number: 2 },
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6696b1c44ab856f14a95fc70_Logo-lockup-white.svg", number: 11 },
    ]
    return (
        <div className='flex items-center mt-20'>
            {data.map((item, index) => (
                <Stripe key={index} val={item} />
            ))}
        </div>
    )
}

export default Stripes