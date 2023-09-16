
import React, { useState } from 'react'
// import { IoIosArrowDown } from 'react-icons/io'
import { GoChevronDown } from 'react-icons/go'


const Faq = ({ ques, ans, index,active ,setActive}) => {

    const [open, setOpen] = useState(false)
    return (
        <>
            <div>
                <div
                    className={`faq ${active == index - 2 ? "open" : null}`}>

                    <div className="faq-title">{ques}
                        <div className={`arrow-cont ${active == index - 2 ? "down-arrow" : null} flex-all`} onClick={() => { active== index - 2?setActive(null): setActive(index - 2) }}><GoChevronDown /></div>
                    </div>
                    <div className="faq-p">{ans}</div>
                </div>
            </div>
            {/* <img src="/bb.png" /> */}
        </>
    )
}

export default Faq