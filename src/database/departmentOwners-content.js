const departments = [
{
    name: 'KHC',
    deptName: 'Khối Hành Chánh',
    primaryOwner: 'Gioan Phạm Khoa Văn',
    primaryOwnerTitle: 'Trưởng Khối',
    primaryOwnerImg: 'http://www.hvmatl.net/gallery/img/core-img/VanPham.jpg',
    primaryOwnerPhone: '404-992-1122',
    primaryOwnerEmail: 'van.k.pham@hvmatl.org',
    secondaryOwner: 'Anna Vũ Thùy Trang',
    secondaryOwnerTitle: 'Phó Khối',
    secondaryOwnerImg: 'http://www.hvmatl.net/gallery/img/core-img/TrangVu.jpg',
    secondaryOwnerPhone: '678-906-1001',
    secondaryOwnerEmail: 'trang.t.vu@hvmatl.org',
},
{
    name: 'KDS',
    deptName: 'Khối Đời Sống',
    primaryOwner: 'Anna Lê Tuyết Mai',
    primaryOwnerTitle: 'Trưởng Khối',
    primaryOwnerImg: 'http://www.hvmatl.net/gallery/img/core-img/MaiLe.jpg',
    primaryOwnerPhone: '770-241-0264',
    primaryOwnerEmail: 'tuyetle@hvmatl.org',
    secondaryOwner: 'Phêrô Hà Thanh Hùng',
    secondaryOwnerTitle: 'Phó Khối',
    secondaryOwnerImg: 'http://www.hvmatl.net/gallery/img/core-img/HungHa.jpg',
    secondaryOwnerPhone: '770-542-9680',
    secondaryOwnerEmail: 'hungha@hvmatl.org',       
},
{
    name: 'KPT',
    deptName: 'Khối Phụng Tự',
    primaryOwner: 'Cecilia Lê Tú Anh',
    primaryOwnerTitle: 'Trưởng Khối',
    primaryOwnerImg: 'http://www.hvmatl.net/gallery/img/core-img/TuAnh.jpg',
    primaryOwnerPhone: '404-403-2763',
    primaryOwnerEmail: 'tuanhle@hvmatl.org',
    secondaryOwner: 'Gioakim Lê Kevin Tâm',
    secondaryOwnerTitle: 'Phó Khối',
    secondaryOwnerImg: 'http://www.hvmatl.net/gallery/img/core-img/TamLe.jpg',
    secondaryOwnerPhone: '678-268-8891',
    secondaryOwnerEmail: 'tamle@hvmatl.org',
},
{
    name: 'KTG',
    deptName: 'Khối Truyền Giáo',
    primaryOwner: 'Giuse Nguyễn Quang Tấn',
    primaryOwnerTitle: 'Trưởng Khối',
    primaryOwnerImg: 'http://www.hvmatl.net/gallery/img/core-img/TanNguyen.jpg',
    primaryOwnerPhone: '678-670-0817',
    primaryOwnerEmail: 'tan.q.nguyen@hvmatl.org',
    secondaryOwner: 'Giuse Trần Khiêm Chánh',
    secondaryOwnerTitle: 'Phó Khối',
    secondaryOwnerImg: 'http://www.hvmatl.net/gallery/img/core-img/ChanhTran.jpg',
    secondaryOwnerPhone: '678-234-6530',
    secondaryOwnerEmail: 'chanhtran@hvmatl.org',
},
{
    name: 'KGD',
    deptName: 'Khối Giáo Dục',
    primaryOwner: 'Phaolô Nguyễn Chinh Paul',
    primaryOwnerTitle: 'Trưởng Khối',
    primaryOwnerImg: 'http://www.hvmatl.net/gallery/img/core-img/PaulNguyen.jpg',
    primaryOwnerPhone: '678-644-0853',
    primaryOwnerEmail: 'paul.chinh.nguyen@hvmatl.org',
    secondaryOwner: 'Theresa Nguyễn Lệ Thảo',
    secondaryOwnerTitle: 'Phó Khối',
    secondaryOwnerImg: 'http://www.hvmatl.net/gallery/img/core-img/ThaoLe.jpg',
    secondaryOwnerPhone: '770-900-0769',
    secondaryOwnerEmail: 'lethao.theresa@hvmatl.org',
},
{
    name: 'KCS',
    deptName: 'Khối Cơ Sở',
    primaryOwner: 'Gioan Phạm Thanh Tú',
    primaryOwnerTitle: 'Trưởng Khối',
    primaryOwnerImg: 'http://www.hvmatl.net/gallery/img/core-img/TuPham.jpg',
    primaryOwnerPhone: '404-376-1336',
    primaryOwnerEmail: 'tupham@hvmatl.org',
    secondaryOwner: 'Antôn Vũ Thanh',
    secondaryOwnerTitle: 'Phó Khối',
    secondaryOwnerImg: 'http://www.hvmatl.net/gallery/img/core-img/ThanhVu.jpg',
    secondaryOwnerPhone: '770-401-1916',
    secondaryOwnerEmail: 'thanhvu@hvmatl.org', 
},
{
    name: 'KGQ',
    deptName: 'Khối Gây Quỹ',
    primaryOwner: 'Antôn Vũ Minh Tuấn',
    primaryOwnerTitle: 'Trưởng Khối',
    primaryOwnerImg: 'http://www.hvmatl.net/gallery/img/core-img/TuanVu.jpg',
    primaryOwnerPhone: '678-600-6038',
    primaryOwnerEmail: 'tuanvu@hvmatl.org',
    secondaryOwner: 'Micae Cao Hùng Anh',
    secondaryOwnerTitle: 'Phó Khối',
    secondaryOwnerImg: 'http://www.hvmatl.net/gallery/img/core-img/AnhCao.jpg',
    secondaryOwnerPhone: '678-665-6189',
    secondaryOwnerEmail: 'anhcao@hvmatl.org',    
},
{
    name: 'KQT',
    deptName: 'Khối Quản Trị',
    primaryOwner: 'Giuse Vũ Văn Hưởng',
    primaryOwnerTitle: 'Trưởng Khối',
    primaryOwnerImg: 'http://www.hvmatl.net/gallery/img/core-img/HuongVu.jpg',
    primaryOwnerPhone: '704-726-6872',
    primaryOwnerEmail: 'huongvu@hvmatl.org',
    secondaryOwner: 'Lucia Lê Jennie',
    secondaryOwnerTitle: 'Quản Lý Văn Phòng',
    secondaryOwnerImg: 'http://www.hvmatl.net/gallery/img/core-img/JennieLe.jpg',
    secondaryOwnerPhone: '678-256-1314',
    secondaryOwnerEmail: 'jenniele@hvmatl.org',
    thirdOwner: 'Madalena Toyama Madalena ',
    thirdOwnerTitle: 'Thư Ký',
    thirdOwnerImg: 'http://www.hvmatl.net/gallery/img/core-img/NaMadalena.jpg',
    thirdOwnerPhone: '770-899-3548',
    thirdOwnerEmail: 'toyamam@hvmatl.org',   
}
];

export default departments;
