jQuery.noConflict();
let $ = document.querySelector.bind(document);
nunjucks.configure('/templates', { autoescape: false });

window.addEventListener('DOMContentLoaded', function() {
    header = $('#header');
    window.onscroll = () => {
        if (window.pageYOffset > header.offsetHeight) {
            header.classList.add('sticky-top');
            $('#header img').setAttribute('height', '40px');
        } else {
            header.classList.remove('sticky-top');
            $('#header img').setAttribute('height', '80px');
        }
    }

    test = nunjucks.render('_row.njk', {
        'title': "nunjuck test",
        'body': "이상하군 왜 되는거지?"
    });

    var httpRequest;
    document.getElementById("consulting-request-submit").addEventListener('click', function(e) {
        e.preventDefault();
        httpRequest = new XMLHttpRequest();
        if(!httpRequest) {
            alert('상담을 처리할 수 없습니다. 센터로 전화주세요.');
            return false;
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('POST', 'http://admin.eplabor.org/eplabor_admin/items/enquiry');
        httpRequest.send(new FormData( document.forms['consulting-request'] ));
    });
  
    function alertContents() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          alert('정상적으로 접수됐습니다. 담당자가 연락드리겠습니다.');
        } else {
          alert('필수 항목을 입력해주세요');
        }
      }
    }

});

