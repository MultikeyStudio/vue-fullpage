class Animate {
	constructor(el, binding, vnode) {
		const that = this,
			vm = vnode.context,
			aminate = binding.value;

		el.style.opacity = '0'
		vm.$on('toogle.animate', function(curIndex) {
			const curPage = +el.parentNode.getAttribute('data-id')
			if (curIndex === curPage) {
				that.addAnimated(el, aminate)
			} else {
				el.style.opacity = '0'
				that.removeAnimated(el, aminate)
			}
		})
	}
	addAnimated(el, animate) {
		const delay = animate.delay || 0
		el.classList.add('animated')
		window.setTimeout(function() {
			el.style.opacity = '1'
			el.classList.add(animate.value)
		}, delay)
	}
	removeAnimated(el, animate) {
		const cls = el.getAttribute('class');
		if (cls && cls.indexOf('animated') > -1) {
			el.classList.remove(animate.value)
		}
	}

}

export default Animate;