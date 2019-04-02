// 简化 createElement 嵌套写法
class VNode {
	constructor(tag, props = {}, children = []) {
		this.tag = tag
		this.props = props
		this.children = children
	}

	push(vnode) {
		if (this.isArray(vnode)) {
			this.children.push(...vnode)
		} else {
			if (vnode) {
				this.children.push(vnode)
			}
		}

		return this
	}

	isArray(o) {
		return Object.prototype.toString.call(o) === "[object Array]"
	}

	resolve(h) {
		var children = this.children.map(child => {
			if (child instanceof VNode) {
				return child.resolve(h)
			}
			else {
				return child
			}
		})
		return h(this.tag, this.props, children)
	}
}

// div.dy-tooltip-popup ==> [div, dy-tooltip-popup]
function createToolTip(tag, props = {}, children = []) {
	if (tag.indexOf(".") !== -1) {
		var [realTag, className] = tag.split(".")
		tag = realTag

		if (className !== "") {
			var classList = className.split()

			if (!props["class"]) {
				props["class"] = {}
			}

			classList.forEach(el => {
				props["class"][el.trim()] = true
			})
		}
	}

	return new VNode(tag, props, children)
}


export {
	createToolTip
}