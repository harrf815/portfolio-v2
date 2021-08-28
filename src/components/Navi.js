import React from 'react';

const Navi = () => {

    return (
        <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle"/>
            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="'#section-about" class="navigation__link"><span>01</span>About Me</a></li>
                    <li class="navigation__item"><a href="'#section-project" class="navigation__link"><span>02</span>Projects</a></li>
                    <li class="navigation__item"><a href="'#section-work" class="navigation__link"><span>03</span>Experience</a></li>
                    <li class="navigation__item"><a href="'#section-blog" class="navigation__link"><span>04</span>Blog</a></li>
                    <li class="navigation__item"><a href="'#section-contact" class="navigation__link"><span>05</span>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navi;
