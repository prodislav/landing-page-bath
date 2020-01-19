import React from "react";

export function FormView() {
    return (
        <div className="form">
                <div className="h2">ПОСТРОЙТЕ СВОЙ ДОМ ВМЕСТЕ С KLIDI</div>
                <div className="desc">Наш менеджер свяжется с вами по почте или телефону</div>
                <a className="button" data-fancybox="" data-type="ajax" data-src="/form/form_order.php" href="javascript:;">
                    ОСТАВИТЬ ЗАЯВКУ
                </a>
        </div>
    );
}
