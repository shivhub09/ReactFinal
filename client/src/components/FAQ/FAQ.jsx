import React from 'react'
import './FAQ.css';
import FAQCards from '../../utils/FAQCards/FAQCards';


const FAQ = () => {
    return (
        <div className="FAQ-container">

            <div className="FAQ-title-box">
                <h1 className="FAQ-title">Frequently Asked Questions</h1>
            </div>

            <div className="FAQ-cards">
                <div className="FAQ-row1">
                    <FAQCards title="What is AiFusion?" content="Aifusion is a website where you can get answers to all your ai needs"></FAQCards>
                    <FAQCards title="What is AiFusion?" content="Aifusion is a website where you can get answers to all your ai needs"></FAQCards>
                    <FAQCards title="What is AiFusion?" content="Aifusion is a website where you can get answers to all your ai needs"></FAQCards>
                </div>
                <div className="FAQ-row2">
                    <FAQCards title="What is AiFusion?" content="Aifusion is a website where you can get answers to all your ai needs"></FAQCards>
                    <FAQCards title="What is AiFusion?" content="Aifusion is a website where you can get answers to all your ai needs"></FAQCards>
                    <FAQCards title="What is AiFusion?" content="Aifusion is a website where you can get answers to all your ai needs"></FAQCards>
                </div>

            </div>
            <div className="FAQ-button">
                <button className='FAQ-btn' type="button">Ask your Question</button>
            </div>
        </div>
    )
}

export default FAQ
