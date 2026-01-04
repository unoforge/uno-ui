export const swiperScript = `import { $ } from "@flexilla/utilities";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper styles
import "swiper/css";

const swiperOnePerViewNoPagination = (box, element) => {
  const prevBtn = $("[data-prev-btn]", box);
  const nextBtn = $("[data-next-btn]", box);
  new Swiper(element, {
    slidesPerView: 1,
    spaceBetween: 16,
    modules: [Navigation],
    loop: true,
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
    },
  });
};

const swiperOnePerViewWithPaginationCustom = (box, element, bullet = {}) => {
  const prevBtn = $("[data-btn-prev]", box);
  const nextBtn = $("[data-btn-next]", box);
  const pagination = $("[data-pagination]", box);
  new Swiper(element, {
    slidesPerView: 1,
    spaceBetween: 16,
    modules: [Navigation, Pagination],
    loop: true,
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
    },
    pagination: {
      el: pagination,
      clickable: true,
      bulletClass: bullet.className,
      bulletActiveClass: bullet.activeClassName,
      renderBullet: (_, className) => {
        return \`<span class="\${className}"></span>\`;
      },
    },
  });
};

const swiperWithProgressPagination = (box, element, breakpoints = {}) => {
  const prevBtn = $("[data-prev-btn]", box);
  const nextBtn = $("[data-next-btn]", box);
  const pagination = $("[data-pagination-indicator]", box);
  new Swiper(element, {
    slidesPerView: 1,
    spaceBetween: 16,
    modules: [Navigation, Pagination, Autoplay],
    loop: false,
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints,
    pagination: {
      el: pagination,
      type: "progressbar",
      renderProgressbar: () =>
        \`<span class="hfull flex rd-full bg-primary duration-200 transition-200 transition-width" style="width:0%"></span>\`,
    },
    on: {
      progress(swiper, progress) {
        const indicator = pagination.querySelector('.bg-primary');
        if (indicator) {
          indicator.style.width = \`$\{progress * 100}%\`;
        }
      },
    },
  });
};`