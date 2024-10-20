import Swiper from 'swiper'
import {
	Autoplay,
	Navigation,
	Pagination,
	EffectFade,
	Grid,
} from 'swiper/modules'
import { getElement, getElements } from '../core/index.js'

function ukrainianBusinesses() {
	if (!getElement('[data-swiper="ukrainianBusinesses"]')) return
	new Swiper('[data-swiper="ukrainianBusinesses"]', {
		modules: [Navigation],
		spaceBetween: 32,
		slidesPerView: 1,
		loop: true,
		breakpoints: {
			1024: {
				slidesPerView: 2,
			},
		},

		navigation: {
			nextEl: '.businesses-next',
			prevEl: '.businesses-prev',
		},
	})
}
function results() {
	if (!getElement('[data-swiper="results"]')) return
	new Swiper('[data-swiper="results"]', {
		modules: [Navigation, Pagination],
		slidesPerView: 1,
		loop: true,
		breakpoints: {
			1024: {
				slidesPerView: 2,
			},
		},
		pagination: {
			el: '.result-pagination',
			type: 'fraction',
		},

		navigation: {
			nextEl: '.results-next',
			prevEl: '.results-prev',
		},
	})
}
export { ukrainianBusinesses, results }
