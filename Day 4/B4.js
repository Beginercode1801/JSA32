let hocSinh = [
    { ten: 'An', tuoi: 15, lop: '10A1'},
    { ten: 'Bình', tuoi: 16, lop: '11A2'},
    { ten: 'Châu', tuoi: 15, lop: '18A1'},
    ];
hocSinh.push ({ten: 'Dũng', tuoi:17, lop: '10A1'})
console.log(hocSinh);
hocSinh[1]= {ten: 'Bình', tuoi: 17, lop: '11A2'}
delete hocSinh[2]