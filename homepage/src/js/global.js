
import "../scss/style.scss"
import $ from "jquery/dist/jquery.slim.js"
import "popper.js"
import * as bootstrap from "bootstrap"
import "./consulting.js"

$(() => {
    window.bootstrap = bootstrap
    // 스크롤 시 상단 헤더 고정 # Fixed Header on Scroll
    window.onscroll = () => {
        if (window.pageYOffset > header.offsetHeight) {
            $('#header').addClass('sticky-top');
            $('#header img').attr('height', '40px');
        } else {
            $('#header').removeClass('sticky-top');
            $('#header img').attr('height', '80px');
        }
    }
})
