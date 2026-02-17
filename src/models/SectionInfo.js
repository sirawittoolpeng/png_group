export default class SectionInfo {
    /**
     * @param {String} id
     * @param {*} component - Vue component for in-page section; null when href is used (link-only nav item)
     * @param {String} name
     * @param {String} faIcon
     * @param {String} [href] - optional route path (e.g. '/about'); when set, nav links here instead of #id
     */
    constructor(id, component, name = "", faIcon = "", href = "") {
        this._id = id
        this._component = component
        this._href = href
        if (!this._id) {
            throw new Error("You must specify an ID for every SectionInfo object!")
        }
        if (!this._component && !this._href) {
            throw new Error("SectionInfo must have either a component or an href!")
        }

        this._name = name
        this._faIcon = faIcon
    }

    get id() {
        return this._id
    }

    get name() {
        return this._name || null
    }

    get faIcon() {
        return this._faIcon || "fa-solid fa-circle"
    }

    get component() {
        return this._component
    }

    get hash() {
        return `#${this.id}`
    }

    /** Nav link path: href (e.g. /about) when set, otherwise hash (e.g. #about) */
    get path() {
        return this._href || this.hash
    }

    get href() {
        return this._href || null
    }
}