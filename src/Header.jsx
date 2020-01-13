import React from 'react'
import { Link } from 'react-router-dom';

export const Header = React.memo(() => {
    const [toggled, setToggled] = React.useState(false);
    return (
        <>
            {
                toggled && <div className='menu' onMouseEnter={() => setToggled(true)} onMouseLeave={() => setToggled(false)}>
                    <div className="flex-c">
                        <div className="h-240 w-300 m-0-20 p-r">
                            <Link to="/project/1" onClick={() => setToggled(false)}>
                                <div className="image i-13">
                                    <div className="image-shadow"></div>
                                    <div className='p-a image-text'>
                                        Проекты домов
                                    </div>
                                    <div className='p-a image-cost'>
                                        $$$
                                </div>
                                </div>

                            </Link>
                        </div>
                        <div className="h-240 w-300 m-0-20 p-r">

                            <Link to="/bathes" onClick={() => setToggled(false)}>
                                <div className="image i-12">
                                    <div className="image-shadow"></div>
                                    <div className='p-a image-text'>
                                        Проекты бань
                                </div>
                                    <div className='p-a image-cost'>
                                        $$
                                </div>
                                </div>

                            </Link>
                        </div>
                    </div>
                </div>
            }
            <section className="fix w-100 header_block">
                <header className="header">
                    <div className="flex-sb align-i-c header--font">
                        <Link to="/">
                            <div className="header__logo">
                            </div>
                        </Link>
                        <nav className="header__nav flex-sb">
                            <div onMouseEnter={() => setToggled(true)} onMouseLeave={() => setToggled(false)}>Проекты
                        </div>
                            <div>Услуги</div>
                            <div>Галерея</div>

                            <div>
                                <Link to="/about">
                                    О нас
                                </Link>
                            </div>

                            <div>Контакты</div>
                        </nav>

                        <a href="tel:+78003331111" className="header__link header--font">
                            <span>8-800-333-11-11</span>
                        </a>

                    </div>
                </header>
            </section >
        </>
    )
})
