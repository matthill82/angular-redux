let CountryItem = () => {

    function CountryItem(name, isoCode) {
        this.added = true;
        this.name = name;
        this.isoCode = isoCode;
    }

    Object.defineProperty(CountryItem.prototype, "name", {
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.name = value.trim();
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(CountryItem.prototype, "isoCode", {
        get: function () {
            return this.isoCode;
        },
        set: function (value) {
            this.isoCode = value;
        },
        enumerable: true,
        configurable: true
    });

    return CountryItem;

};

export {CountryItem};