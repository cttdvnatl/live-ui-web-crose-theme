const staffContent = [
{
    name: 'Phêrô Nguyễn Thành Danh',
    title: 'Trưởng ',
    deptAcronym: 'HĐMV',
    deptName: 'HĐMV',
    image: 'http://www.cttdvnatl.net/gallery/img/core-img/Danh.jpg',
    phone: '678-910-8100',
    email: 'danh.t.nguyen@hvmatl.org',
},
{
    name: 'Giuse Nguyễn Đức Sơn',
    deptAcronym: 'HĐTC',
    deptName: 'HĐTC',    
    title: 'Trưởng ',
    image: 'http://www.cttdvnatl.net/gallery/img/core-img/SonNguyen.jpg',
    phone: '678-906-8914',
    email: 'son.nguyen@hvmatl.org', 
},
{
    name: 'Phêrô Nguyễn Đức Phúc',
    deptAcronym: 'HĐMV',
    deptName: 'HĐMV',
    title: 'Phó ',
    image: 'http://www.cttdvnatl.net/gallery/img/core-img/PhucNguyen.jpg',
    phone: '678-978-4518',
    email: 'peter.d.nguyen@hvmatl.org',
},
    {
    name: 'Gioan Phạm Thanh Tú',
    title: 'Trưởng ',
    deptAcronym: 'KCS',
    deptName: 'Khối Cơ Sở',
    image: 'http://www.cttdvnatl.net/gallery/img/core-img/TuPham.jpg',
    phone: '404-376-1336',
    email: 'tupham@hvmatl.org',
},
{
    name: 'Antôn Vũ Thanh',
    deptAcronym: 'KCS',
    deptName: 'Khối Cơ Sở',    
    title: 'Phó ',
    image: 'http://www.cttdvnatl.net/gallery/img/core-img/ThanhVu.jpg',
    phone: '770-401-1916',
    email: 'thanhvu@hvmatl.org', 
},
{
    name: 'Phaolô Nguyễn Chinh Paul',
    deptAcronym: 'KGD',
    deptName: 'Khối Giáo Dục',
    title: 'Trưởng ',
    image: 'http://www.cttdvnatl.net/gallery/img/core-img/PaulNguyen.jpg',
    phone: '678-644-0853',
    email: 'paul.chinh.nguyen@hvmatl.org',
},
{
    name: 'Theresa Nguyễn Lệ Thảo',
    deptAcronym: 'KGD',
    deptName: 'Khối Giáo Dục',    
    title: 'Phó ',
    image: 'http://www.cttdvnatl.net/gallery/img/core-img/ThaoLe.jpg',
    phone: '770-900-0769',
    email: 'lethao.theresa@hvmatl.org',
},
{
    name: 'Anna Lê Tuyết Mai',
    deptAcronym: 'KDS',
    deptName: 'Khối Đời Sống',
    title: 'Trưởng ',
    image: 'http://www.cttdvnatl.net/gallery/img/core-img/MaiLe.jpg',
    phone: '770-241-0264',
    email: 'tuyetle@hvmatl.org',
},
{
    name: 'Phêrô Hà Thanh Hùng',
    deptAcronym: 'KDS',
    deptName: 'Khối Đời Sống',    
    title: 'Phó ',
    image: 'http://www.cttdvnatl.net/gallery/img/core-img/HungHa.jpg',
    phone: '770-542-9680',
    email: 'hungha@hvmatl.org',       
},
{
    name: 'Antôn Vũ Minh Tuấn',
    deptAcronym: 'KGQ',
    deptName: 'Khối Gây Quỹ',
    title: 'Trưởng ',
    image: 'http://www.cttdvnatl.net/gallery/img/core-img/TuanVu.jpg',
    phone: '678-600-6038',
    email: 'tuanvu@hvmatl.org',
},
{
    name: 'Micae Cao Hùng Anh',
    deptAcronym: 'KGQ',
    deptName: 'Khối Gây Quỹ',    
    title: 'Phó ',
    image: 'http://www.cttdvnatl.net/gallery/img/core-img/AnhCao.jpg',
    phone: '678-665-6189',
    email: 'anhcao@hvmatl.org',    
},  
{
    name: 'Gioan Phạm Khoa Văn',
    deptAcronym: 'KHC',
    deptName: 'Khối Hành Chánh',
    title: 'Trưởng ',
    image: 'http://www.cttdvnatl.net/gallery/img/core-img/VanPham.jpg',
    phone: '404-992-1122',
    email: 'van.k.pham@cttdvnatl.org',
},
{
    name: 'Anna Vũ Thùy Trang',
    deptAcronym: 'KHC',
    deptName: 'Khối Hành Chánh',
    title: 'Phó ',
    image: 'http://www.cttdvnatl.net/gallery/img/core-img/TrangVu.jpg',
    phone: '678-906-1001',
    email: 'trang.t.vu@hvmatl.org',
},
{
    name: 'Cecilia Lê Tú Anh',
    deptAcronym: 'KPT',
    deptName: 'Khối Phụng Tự',
    title: 'Trưởng ',
    image: 'http://www.cttdvnatl.net/gallery/img/core-img/TuAnh.jpg',
    phone: '404-403-2763',
    email: 'tuanhle@hvmatl.org',
},
{
    name: 'Gioakim Lê Kevin Tâm',
    deptAcronym: 'KPT',
    deptName: 'Khối Phụng Tự',    
    title: 'Phó ',
    image: 'http://www.cttdvnatl.net/gallery/img/core-img/TamLe.jpg',
    phone: '678-268-8891',
    email: 'tamle@hvmatl.org',
},
{
    name: 'Giuse Vũ Văn Hưởng',
    deptAcronym: 'KQT',
    deptName: 'Khối Quản Trị',
    title: 'Trưởng ',
    image: 'http://www.cttdvnatl.net/gallery/img/core-img/HuongVu.jpg',
    phone: '704-726-6872',
    email: 'huongvu@hvmatl.org',
},
{
    name: 'Lucia Lê Jennie',
    deptAcronym: 'KQT',
    deptName: 'Khối Quản Trị',    
    title: 'Quản Lý Văn Phòng - ',
    image: 'http://www.cttdvnatl.net/gallery/img/core-img/JennieLe.jpg',
    phone: '678-256-1314',
    email: 'jenniele@hvmatl.org',
},
{
    name: 'Madalena Toyama Madalena ',
    deptAcronym: 'KQT',
    deptName: 'Khối Quản Trị',    
    title: 'Thư Ký - ',
    image: 'http://www.cttdvnatl.net/gallery/img/core-img/NaMadalena.jpg',
    phone: '770-899-3548',
    email: 'toyamam@hvmatl.org',   
},
{
    name: 'Giuse Nguyễn Quang Tấn',
    deptAcronym: 'KTG',
    deptName: 'Khối Truyền Giáo',
    title: 'Trưởng ',
    image: 'http://www.cttdvnatl.net/gallery/img/core-img/TanNguyen.jpg',
    phone: '678-670-0817',
    email: 'tan.q.nguyen@hvmatl.org',
},
{
    name: 'Giuse Trần Khiêm Chánh',
    deptAcronym: 'KTG',
    deptName: 'Khối Truyền Giáo',    
    title: 'Phó ',
    image: 'http://www.cttdvnatl.net/gallery/img/core-img/ChanhTran.jpg',
    phone: '678-234-6530',
    email: 'chanhtran@hvmatl.org',
},
];

export default staffContent;
