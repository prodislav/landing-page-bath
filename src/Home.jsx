import React from 'react';


export const Home = React.memo(() => {
    return (
        <>
            <section className="image main-banner-image">
                <div className="block-wrapper">
                    <div className="main-banner-info">
                        <div className="main-banner-title"><span className="topTitle">Барнхаус 228м<sup>2</sup></span></div>
                        <div className="main-banner-text">
                            Индивидуальный  проект
                </div>
                        <div className="banner_button TODO:">
                            <span >Подробнее</span>
                        </div>
                    </div>


                </div>
            </section>

            <section className="section">
                <div className="block-wrapper">
                    <h1 className="main-section-title">Дома и бани по канадской технологии</h1>
                    <div className="flex-sb m-3">
                        <div className="w-50 h-350">
                            <div className="image i-12">
                            <div className="image-shadow"></div>
                            </div>
                        </div>
                        <div className="w-50 h-350">
                            <div className="image i-13">
                                <div className="image-shadow"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
})
