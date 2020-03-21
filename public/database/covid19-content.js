/*

Please update a new article in this form:
  The image attribute (optional) is the link to the image in the article
    If there is no image, the default image will be added by articles.js
    Image ratio should be around horizontal:verticle 5:4. No need to be exact.
    The image should be put in this folder: http://cttdvnatl.net/gallery/img/hvm_covid19
  
  The pdf attribute is optinal

  {
    "Section":"covid19",
    "date":"yyyy-mm-dd",
    "image":"http://cttdvnatl.net/gallery/img/hvm_covid19/link-to-the-image",
    "title":"The title",
    "body":`sometext

    sometext`,
    "pdf":"http://cttdvnatl.net/gallery/pdf/hvm_covid19/link-to-the-pdf"
  },

*/

const articles =
[
  {
    "Section":"covid19",
    "date":"2020-03-17",
    "image":"http://cttdvnatl.net/gallery/img/hvm_covid19/ArchAtl_logoBox.png",
    "title":"Thông báo của Tổng Giáo phận Atlanta ( 2020-03-17)",
    "body":`Thông báo của Tổng Giáo phận Atlanta`,
    "pdf":"http://cttdvnatl.net/gallery/pdf/hvm_covid19/Covid19_RCAoA_GA.pdf"
  },
  {
    "Section":"covid19",
    "date":"2020-03-14",
    "image":"http://cttdvnatl.net/gallery/img/hvm_covid19/cttd_logoBox.png",
    "title":"CẬP NHẬT HÓA CORONAVIRUS (COVID-19)",
    "body":`Thông báo của cha chánh xứ`,
    "pdf":"http://cttdvnatl.net/gallery/pdf/hvm_covid19/TTMV_Covid19.pdf"
  },
  {
    "Section":"covid19",
    "date":"2020-03-13",
    "image":"http://cttdvnatl.net/gallery/img/hvm_covid19/hvmCovid_logoBox.png",
    "title":"Thông báo trên Facebook của giáo xứ",
    "body":`Để biết thêm chi tiết, vui lòng vào trang Facebook của giáo xứ tại https://www.facebook.com/cttdvn`,
    "pdf":"http://cttdvnatl.net/gallery/pdf/hvm_covid19/Facebook-announcement-2020-03-13.pdf"
  },
  {
    "Section":"covid19",
    "date":"2020-03-12",
    "image":"http://cttdvnatl.net/gallery/img/hvm_covid19/ArchAtl_logoBox.png",
    "title":"Thông báo của Tổng Giáo phận Atlanta",
    "body":`Thông báo của Tổng Giáo phận Atlanta về dịch bệnh COVID-19`,
    "pdf":"https://archatl.com/covid-19/"
  },
  {
    "Section":"Blog",
    "SubSec":"covid19",
    "image":"http://cttdvnatl.net/gallery/img/hvm_covid19/VAHPAG_logoBox.png",
    "date":"2020-03-11",
    "title":"Thông Tin Về Bệnh Dịch Coronavirus 2019 (COVID-19)",
    "body":"Thông tin về dịch bệnh đến từ Hội Chuyên gia Y tế Việt Nam tại Georgia",
    "pdf":`http://cttdvnatl.net/gallery/pdf/hvm_covid19/TT_COVID_19.pdf`
  }
]

export default articles;
