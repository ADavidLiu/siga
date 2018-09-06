class Header {
    constructor() {
        this._$header = $(".header");
        this._$btn = $(".header__btn");

        this._$btn.click(this.toggleNav);
    }

    toggleNav = () => {
        this._$header.toggleClass("header--active");
    }
}