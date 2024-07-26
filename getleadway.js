const bpScript = () => {
    const listProblemItems = document.querySelectorAll('.home-problem-item')
    const parseRem = (input) => {
        return input / 10 * parseFloat(window.getComputedStyle(document.querySelector('html')).getPropertyValue("font-size"));
    }
    const handleSetItemLoaded = (item) => {
        listProblemItems.forEach((item, index) => {
            if (index === 0) {
                item.classList.add('home-problem-item-active')
            }
        })
    }
    const handleSwiperCaseStudy = () => {
        const handleSwiperCaseStudy = new Swiper('.home-casestudy-swiper', {
            slidesPerView: 'auto',
            spaceBetween: parseRem(32),
            navigation: {
                prevEl: '.home-casestudy-btn-prev',
                nextEl: '.home-casestudy-btn-next',
            },
        })
    }
    const handleSetItemFAQ = () => {
        const wrapFaq = document.querySelector('.home-faq-lists-inner')
        wrapFaq.addEventListener('click', (e) => {
            const target = e.target.closest('.home-faq-item')
            const listItemFAQ = document.querySelectorAll('.home-faq-item')
            listItemFAQ.forEach((item, index) => {
                if (item !== target) {
                    item.classList.remove('home-faq-item-active')
                }
            })
            target.classList.toggle('home-faq-item-active');
        })
    }
    handleSwiperCaseStudy()
    handleSetItemLoaded()
    handleSetItemFAQ()
};
document.addEventListener('DOMContentLoaded', bpScript)