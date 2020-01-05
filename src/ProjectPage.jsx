import React from 'react';
import { ImageSlider } from './ImageSlider'

export const ProjectPage = React.memo(() => {
    return (
        <section className="qwer">
            <div className="block-wrapper">
                <div className="q">
                    <h1>Название</h1>
                </div>
                <div className="qq">
                    <div className="qqq">
                        <ImageSlider />
                    </div>
                    <div className="qqqq">
                        <div className="m-30">
                            <div className='header-2'>
                                Название
                            </div>
                            <div className='flex-sb'>
                                <div className="text-c">Площадь дома:</div>
                                <div className="text-b">118 м2</div>
                            </div>

                            <div className='flex-sb'>
                                <div className="text-c">Площадь террасы:</div>
                                <div className="text-b">26 м2</div>
                            </div>
                        </div>

                        <div className='line'></div>

                        <div className="m-30">

                            <div className='text-b-2'>
                                Комплект дома:
                            </div>

                            <div className='text-b-3'>
                                Состоит из:
                            </div>
                            <ul className="project-d-list">
                                <li>Набор раскроенных панелей</li>
                                <li>Пиломатериал сухой строганый</li>
                                <li>Клееный брус</li>
                                <li>Крепеж (41 мм, 75 мм, 120 мм.)</li>
                                <li>Специализированный силовой крепеж (180мм - 360мм)</li>
                                <li>Материалы, улучшающие теплоизоляцию и герметичность дома</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})
