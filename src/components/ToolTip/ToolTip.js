import { createToolTip } from "../../utils/createToolTip"
import Vue from "vue"

// 根元素
var RealTooltip = Vue.extend({
	props: {
		content: [String, Number],
		placement: {
			type: String,
			default: "bottom",
		}
	},
	data() {
		return {
			popup: null,
			hideTimer: null,
		}
	},

	// 目标元素鼠标移入事件
	mounted() {
		this.$el.addEventListener("mouseenter", () => {
			this._showPopup()
		})
		this.$el.addEventListener("mouseleave", () => {
			this._hidePopup()
		})
	},
	methods: {
		_createPopup() {

			// 保证只有一个实例
			if (this.popup) {
				return
			}

			// 创建 tooltip
			this.popup = new RealTooltipPopup({
				data: {
					content: this.$slots.content,
					placement: this.placement,
					targetEl: this.$el,
				}
			})
			this.popup.$mount(document.createElement("div"))
			document.body.appendChild(this.popup.$el)

			// tooltip 绑定鼠标事件
			this.popup.$el.addEventListener("mouseenter", () => {
				this._showPopup()
			})

			this.popup.$el.addEventListener("mouseleave", () => {
				this._hidePopup()
			})
		},

		// show 事件
		_showPopup() {

			this._createPopup()
			this._setPopupContent()

			this.$nextTick( () => {
				this.popup.show()
			})
		},

		// hide 事件
		_hidePopup() {
			this.popup.hide()
		},

		// 设置 tooltip 内容
		_setPopupContent() {
			if (!this.popup) {
				return
			}
			this.popup.content = this.$slots.content || this.content || ""
		}
	},
	render(h) {
		return this.$slots.default[0]
	}
})

// tooltip
var RealTooltipPopup = Vue.extend({
	props: {
	},
	data() {
		return {
			content: "",
			targetEl: null,
			placement: "bottom",
			defaultPadding: 5,
			visibility: "",
			opacity: 0
		}
	},
	methods: {
		show() {
			this.setPosition()
			this.opacity = 1;
			this.visibility = "visible";
		},
		hide() {
			this.opacity = 0;
			this.visibility = "hidden";
		},
		setPosition() {
			var targetElement = this.targetEl.getBoundingClientRect()
			var toolTipElement = this.$el.getBoundingClientRect()

			var top = targetElement.y + window.scrollY
			var left = targetElement.x + window.scrollX

			// bottom
			if (this.placement === "bottom") {
				top += targetElement.height + this.defaultPadding
				left = left - (toolTipElement.width / 2) + (targetElement.width / 2)
			} else if (this.placement === "bottom-start") {
				top += targetElement.height + this.defaultPadding
			} else if (this.placement === "bottom-end") {
				top += targetElement.height + this.defaultPadding
				left = left + targetElement.width - toolTipElement.width
			}

			// top
			else if (this.placement === "top") {
				top -= toolTipElement.height + this.defaultPadding
				left = left - (toolTipElement.width / 2) + (targetElement.width / 2)
			} else if (this.placement === "top-start") {
				top -= toolTipElement.height + this.defaultPadding
			} else if (this.placement === "top-end") {
				top -= toolTipElement.height + this.defaultPadding
				left = left + targetElement.width - toolTipElement.width
			}

			// left
			else if (this.placement === "left") {
				top = top - (toolTipElement.height / 2) + (targetElement.height / 2)
				left = left - toolTipElement.width - this.defaultPadding
			} else if (this.placement === "left-start") {
				left = left - toolTipElement.width - this.defaultPadding
			} else if (this.placement === "left-end") {
				top = top + targetElement.height - toolTipElement.height
				left = left - toolTipElement.width - this.defaultPadding
			}

			// right
			else if (this.placement === "right") {
				top = top - (toolTipElement.height / 2) + (targetElement.height / 2)
				left = left + targetElement.width + this.defaultPadding
			} else if (this.placement === "right-start") {
				left = left + targetElement.width + this.defaultPadding
			} else if (this.placement === "right-end") {
				top = top + targetElement.height - toolTipElement.height
				left = left + targetElement.width + this.defaultPadding
			}

			this.top = Math.max(top, 0)
			this.left = Math.max(left, 0)
		}
	},
	render(h) {
		var $wrapper = createToolTip("div.dy-tooltip-popup", {
			style: {
				top: this.top + "px",
				left: this.left + "px",
				visibility: this.visibility,
				opacity: this.opacity
			},
			attrs: {
				"x-placement": this.placement
			}
		}).push( createToolTip("div.dy-tooltip-popup-inner", {}, [this.content]) )

		return $wrapper.resolve(h)
	}
})

Vue.component("dy-tooltip", RealTooltip)