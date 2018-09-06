class Course {
    constructor() {
        this._$statisticItems = $(".statistics__item-placeholder");
        this.initStatistics();

        this._$notificationClose = $(".notification__close");
        this._$notificationClose.click(this.closeNotification);
    }

    initStatistics = () => {
        this._$statisticItems.each(function(index) {
            const _$this = $(this);
            _$this.circleProgress({
                fill: "#AD2F2F",
                emptyFill: "#FFFFFF",
                value: _$this.attr("data-progress"),
                size: 200,
                startAngle: -Math.PI/2
            });
        });
    }

    closeNotification = e => {
        const _$this = $(e.currentTarget);
        _$this.parents(".notification").stop().slideUp("fast");
    }
}