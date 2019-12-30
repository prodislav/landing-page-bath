import React, {Component} from 'react';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-xs-6">
                            <a href="/" className="header__logo">
                                <svg className="i i-logo">
                                </svg>
                            </a>
                        </div>
                        <div className="col-md-10 col-xs-6 header__buttons">
                            <div>
                                <div>
                                    <a href="tel:+78003331111" className="header__link hidden-sm hidden-xs">
                                        <svg className="i i-phone">
                                        </svg>
                                        <span>8-800-333-11-11</span>
                                    </a>
                                    <div className="header__btn hidden-sm hidden-xs" data-fancybox=""
                                         data-src="#callback-modal" href="javascript:;"><span className="link-dashed">Заказать обратный звонок</span>
                                    </div>
                                    <a href="https://lk.gwd.ru/" className="header__btn-right hidden-xs hidden-sm"
                                       target="_blank" title="Личный кабинет"
                                       onClick="yaCounter1067244.reachGoal('LOGIN'); return true;">
                                        <svg className="i i-user">
                                        </svg>
                                        <span className="link-dashed">Личный кабинет</span>
                                    </a>
                                    <a href="#" className="header__burger">
                                        <svg className="i i-burger">
                                        </svg>
                                        <svg className="i i-close-burger">
                                        </svg>
                                    </a>
                                </div>
                                <ul className="header__nav">
                                    <li className="visible-xs visible-sm text-center">
                                        <a href="tel:+78003331111" className="header__link">
                                            <svg className="i i-phone">
                                            </svg>
                                            <span>8-800-333-11-11</span>
                                        </a>
                                    </li>
                                    <li className="visible-xs visible-sm text-center">
                                        <div className="header__btn" data-fancybox="" data-src="#callback-modal"
                                             href="javascript:;"><span
                                            className="link-dashed">Заказать обратный звонок</span></div>
                                    </li>
                                    <li className="visible-xs visible-sm text-center">
                                        <a href="https://lk.gwd.ru/" className="header__btn-right" target="_blank"
                                           title="Личный кабинет"
                                           onClick="yaCounter1067244.reachGoal('LOGIN'); return true;">
                                            <svg className="i i-user">
                                            </svg>
                                            <span className="link-dashed">Личный кабинет</span>
                                        </a>
                                    </li>
                                    <li className="divider visible-xs visible-sm"></li>
                                    <li className="js-showslide">
                                        <a href="/catalog/" style={{cursor: 'pointer'}}>Проекты <svg
                                            className="i i-arrow-field">
                                        </svg></a>
                                        <div className="header__slide">

                                            <div className="project-buttons hidden-sm hidden-sm visible-md visible-lg">
                                                <div className="container" style={{paddingTop: 15 + 'px'}}>
                                                    <div className="row">

                                                        <div className="col-md-4 col-md-offset-2">
                                                            <a href="/projects/populyarnye-proekty/"
                                                               className="project-buttons__item project-buttons__item--sp">
                                                                <div className="project-buttons__item-shadow">
                                                                    <div className="project-buttons__price">₽₽</div>
                                                                    <div className="project-buttons__label">
                                                                        <span>Серийные</span>
                                                                        <br/>
                                                                        <span>проекты</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <a href="/projects/unikalnye-proekty/"
                                                               className="project-buttons__item project-buttons__item--ip">
                                                                <div className="project-buttons__item-shadow">
                                                                    <div className="project-buttons__price">₽₽₽</div>
                                                                    <div
                                                                        className="project-buttons__label">Индивидуальные<br/>проекты
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="container visible-sm visible-sm hidden-md hidden-lg">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <ul className="header__slide-content js-safari">

                                                            <li>
                                                                <a href="/projects/populyarnye-proekty/">Серийные
                                                                    проекты</a>
                                                            </li>
                                                            <li>
                                                                <a href="/projects/unikalnye-proekty/">Индивидуальные
                                                                    проекты</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="js-showslide">
                                        <a href="/uslugi/">
                                            Услуги <svg className="i i-arrow-field">
                                        </svg>
                                        </a>
                                        <div className="header__slide">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-10 col-sm-offset-2">
                                                        <ul className="header__slide-content js-safari">
                                                            <li>
                                                                <a href="/price/ceny/#credits-block">Кредитование</a>
                                                            </li>
                                                            <li>
                                                                <a href="/uslugi/stone/" target="_blank">Строительство
                                                                    домов из кирпича</a>
                                                            </li>
                                                            <li>
                                                                <a href="/uslugi/engineering/"> Инженерные
                                                                    коммуникации</a>
                                                            </li>
                                                            <li>
                                                                <a href="/uslugi/color/">Покраска деревянных домов</a>
                                                            </li>
                                                            <li>
                                                                <a href="/uslugi/innovatsii-i-tekhnicheskiy-nadzor/">Технический
                                                                    надзор</a>
                                                            </li>
                                                            <li>
                                                                <a href="/uslugi/interior_design/">Дизайн интерьеров</a>
                                                            </li>
                                                            <li>
                                                                <a href="/uslugi/video-surveillance/">Видеонаблюдение</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="js-showslide">
                                        <a href="/built/">
                                            Построенные дома <svg className="i i-arrow-field">
                                        </svg>
                                        </a>
                                        <div className="header__slide">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-10 col-sm-offset-2">
                                                        <ul className="header__slide-content js-safari">
                                                            <li>
                                                                <a href="/built/#gallery">Фасады</a>
                                                            </li>
                                                            <li>
                                                                <a href="/built/#demo-doma">Дома, готовые к
                                                                    просмотру</a>
                                                            </li>
                                                            <li>
                                                                <a href="/built/#gallery">Интерьеры</a>
                                                            </li>
                                                            <li>
                                                                <a href="/built/#built-map">Карта объектов</a>
                                                            </li>
                                                            <li>
                                                                <a href="/built/#tours3d">3D туры</a>
                                                            </li>
                                                            <li>
                                                                <a href="/built/projects-map/karta-poselkov/">Наши
                                                                    посёлки</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="js-showslide">
                                        <a href="/technology/">
                                            Технологии <svg className="i i-arrow-field">
                                        </svg>
                                        </a>
                                        <div className="header__slide">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-10 col-sm-offset-2">
                                                        <ul className="header__slide-content js-safari">
                                                            <li>
                                                                <a href="/technology/poleznaya-informatsiya/">Технологии
                                                                    строительства</a>
                                                            </li>
                                                            <li>
                                                                <a href="/technology/milestones/proektirovanie_new/">Этапы
                                                                    работ</a>
                                                            </li>
                                                            <li>
                                                                <a href="/technology/test-kakoy-dom-vam-podhodit/">Тест:
                                                                    «Какой дом тебе нужен?»</a>
                                                            </li>
                                                            <li>
                                                                <a href="/technology/faq/">Вопрос и ответ</a>
                                                            </li>
                                                            <li>
                                                                <a href="/technology/invites/">Семинар «Строительство
                                                                    дома»</a>
                                                            </li>
                                                            <li>
                                                                <a href="/technology/stati/">Статьи</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="js-showslide">
                                        <a href="/about/">
                                            О нас <svg className="i i-arrow-field">
                                        </svg>
                                        </a>
                                        <div className="header__slide">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-10 col-sm-offset-2">
                                                        <ul className="header__slide-content js-safari">
                                                            <li>
                                                                <a href="/about/company/">О компании</a>
                                                            </li>
                                                            <li>
                                                                <a href="/about/proizvodstvo/">Производство</a>
                                                            </li>
                                                            <li>
                                                                <a href="/about/employees/">Наши сотрудники</a>
                                                            </li>
                                                            <li>
                                                                <a href="/about/partners/">Партнёры</a>
                                                            </li>
                                                            <li>
                                                                <a href="/about/politika-otkrytosti/">Онлайн
                                                                    трансляция</a>
                                                            </li>
                                                            <li>
                                                                <a href="/about/vacancy/">Вакансии</a>
                                                            </li>
                                                            <li>
                                                                <a rel="noindex, nofollow" target="_blank"
                                                                   href="http://goodwoodplaza.ru/">GOOD WOOD PLAZA</a>
                                                            </li>
                                                            <li>
                                                                <a href="/about/video-roliki/">Полезное видео</a>
                                                            </li>
                                                            <li>
                                                                <a href="/about/documentation/">Документы</a>
                                                            </li>
                                                            <li>
                                                                <a href="/about/">Ещё...</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="js-showslide">
                                        <a href="/contacts/">Контакты <svg className="i i-arrow-field">
                                        </svg></a>
                                        <div className="header__slide header__slide--contacts">
                                            <ul className="header-slide__nav">
                                                <li>
                                                    <a href="/contacts/tsentralnyy-ofis/">Центральный офис
                                                        (производство)</a>
                                                </li>
                                                <li>
                                                    <a href="/contacts/moskva/">Москва (Баррикадная)</a>
                                                </li>
                                                <li>
                                                    <a href="/contacts/sankt-peterburg/">Санкт-Петербург</a>
                                                </li>
                                            </ul>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
