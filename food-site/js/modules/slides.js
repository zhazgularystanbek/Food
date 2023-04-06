function slides({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    const slides = document.querySelectorAll(slide),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          current = document.querySelector(currentCounter),
          total = document.querySelector(totalCounter),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
          width = window.getComputedStyle(slidesWrapper).width,
          slider = document.querySelector(container);
          
    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    let slideIndex = 1,
        offset = 0,
        replaceNumber = +width.replace(/\D/g, '');

    slider.style.position = 'relative';
    const indicators = document.createElement('ol');
    let dots = [];
    indicators.classList.add('carousel-indicators');

    slider.append(indicators);

    function curIndex() {
    if(slideIndex < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }
    }
    curIndex();

    function dotsIndex() {
         dots.forEach(dot => dot.style.opacity = '.5');
         dots[slideIndex - 1].style.opacity = 1;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slides.forEach(slide => {
        slide.style.width = width;
    });

    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';

    next.addEventListener('click', ()=> {
        if (offset == replaceNumber * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += replaceNumber;
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        curIndex();

        dotsIndex();
    });

    prev.addEventListener('click', ()=> {
        if (offset == 0) {
            offset = replaceNumber * (slides.length - 1);

        } else {
            offset -= replaceNumber;
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        curIndex();

        dotsIndex();
    });

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i+1);
        dot.classList.add('dot');
        if (i==0) {
            dot.style.opacity = 1;
        }

        indicators.append(dot);
        dots.push(dot);
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;

            offset = replaceNumber  * (slideTo - 1);
            slidesField .style.transform = `translateX(-${offset}px)`;

            curIndex();
            dotsIndex();
        });
    });

    
    
    // showSlides(slideIndex);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }
    
    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => {
    //         item.style.display = 'none';
    //     });
    //     slides[slideIndex-1].style.display = 'block';

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }

    // function plusIndex(n) {
    //     showSlides(slideIndex+=n);
    // }

    // prev.addEventListener('click', () => {
    //     plusIndex(-1);
    // });

    // next.addEventListener('click', ()=> {
    //     plusIndex(1);
    // });

}

export default slides;