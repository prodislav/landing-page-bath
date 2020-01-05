import React from 'react'
import { Link } from 'react-router-dom';

export const Header = React.memo(() => {
    return (
        <section className="border fix w-100 header_block">
            <header className="header">
                <div className="flex-sb m-1">
                    <div className="header__logo">
                        <Link to="/">Home</Link>
                    </div>
                    <a href="tel:+78003331111" className="header__link">
                        <span>8-800-333-11-11</span>
                    </a>
                </div>
                <nav className="header__nav flex-sb">
                    <Link to="/project/1"><div>Проекты домов</div></Link>
                    <Link to="/bathes"><div>Проекты бань</div></Link>
                    <div>Услуги</div>
                    <div>Построенные дома</div>
                    <div>Технологии</div>
                    <div>О нас</div>
                    <div>Контакты</div>
                </nav>
            </header>
        </section >
    )
})
