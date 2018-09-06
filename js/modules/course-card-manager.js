class CourseCardManager {
    constructor() {
        this._$btnFavorite = $(".course-card__favorite");

        this._$btnFavorite.click(this.toggleFavorite);
    }

    toggleFavorite = e => {
        e.preventDefault();
        e.stopPropagation();
        const _$this = $(e.currentTarget);
        const _$icon = _$this.children("i");
        
        _$icon.hasClass("far") ? _$icon.removeClass("far").addClass("fas") : _$icon.removeClass("fas").addClass("far");
    }
}