import Swiper from 'swiper'
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules'
import { getElement, getElements } from '../helpers/index.js'

function generateResultsSwiper(idx) {
	return new Swiper(`[data-swiper="${idx}"]`, {
		modules: [Navigation],

		loop: true,
		// lazy: true,
		navigation: {
			nextEl: `.${idx}__slider-next`,
			prevEl: `.${idx}__slider-prev`,
		},
	})
}
