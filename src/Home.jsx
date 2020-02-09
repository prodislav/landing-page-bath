import React from 'react';
import { Link } from 'react-router-dom';
import { FormView } from './FormView';

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
                        <div className="w-50 h-350 p-r">
                            <Link to="/project/1">
                                <div className="image i-13">
                                    <div className="image-shadow"></div>
                                    <div className='p-a image-text'>
                                        Проекты домов
                                    </div>
                                </div>

                            </Link>
                        </div>
                        <div className="w-50 h-350 p-r">
                            <div className="image i-12">
                                <div className="image-shadow"></div>
                            </div>
                            <div className='p-a image-text'>
                                Проекты бань
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="section">
                <div className="block-wrapper calc-class" style={{
                    backgroundImage: 'url(' + require(`./images/9efbd7b4211e1588942e187fb19f71af.png`) + ')'
                }}>
                    <div style={{ width: "33%"}}>
                    <h2 className="h1">Уже сделали расчёт в другой компании?</h2>
                    <div>
                        <p className="h2">
                            Никогда не поздно найти более
                            интересные условия и избежать
                            уловок строителей.
                        </p>

                        <p className="h2">
                            Мы сделаем бесплатный аудит
                            сметы и укажем на возможные
                            подводные камни.
                        </p>
                    </div>


                    </div>
                </div>

            </section>

            <section className="section">
                <div className="block-wrapper">

                    <div className="Form-Container border">
                        <FormView />
                    </div>

                </div>

            </section>
        </>
    )
})
