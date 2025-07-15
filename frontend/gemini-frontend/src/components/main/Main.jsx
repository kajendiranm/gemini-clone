import './main.css';
import { assets } from '../../assets/assets';

import { Context } from '../../store/chat-store';
import { useContext } from 'react';
import { useEffect, useRef } from 'react';


export default function Main() {
    const { onSent, loading, resultData, input } = useContext(Context);

    const chatEndRef = useRef(null);

    function handleSubmit() {
        if (!input.current.value.trim()) return;
        onSent();
    }

    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [resultData, loading]);


    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>

            <div className="main-container">
                {resultData.length === 0 ? (
                    <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Briefly summarize this concept: ?</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>What is React ...</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>What is React ...</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result">
                        {resultData.map((item, index) => (
                            <div key={index} className={item.role === 'user' ? 'result-title' : 'result-data'}>
                                <img src={item.role === 'user' ? assets.user_icon : assets.gemini_icon} alt="" />
                                <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
                            </div>
                        ))}

                        {loading && (
                            <div className="result-data">
                                <img src={assets.gemini_icon} alt="" />
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>
                )}

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                            ref={input}
                            type="text"
                            placeholder="Enter a prompt here"
                        />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img onClick={handleSubmit} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    {/* <p className="button-info">
                        Gemini can make mistakes. <span>Learn more</span>
                    </p> */}
                </div>
            </div>
        </div>
    );
}
