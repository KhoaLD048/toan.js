function tinhNamNhuan(nam) {
    if (nam % 4 === 0 && (nam % 100 !== 0 || nam % 400 === 0)) {
        return true; // Năm nhuận
    } else {
        return false; // Năm không nhuận
    }
}
//tinhNamNhuan(2020);
//tinhNamNhuan(2021);

function baiTinhCanChi(nam) {
    const can = ['Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ'];
    const chi = ['Thân', 'Dậu', 'Tuất', 'Hợi', 'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi'];
    
    const indexCan = (nam   % 10); 
    const indexChi = (nam   % 12); 

    return `${can[indexCan]} ${chi[indexChi]}`;
}
//baiTinhCanChi(2020);
//baiTinhCanChi(2021);

function inRaThuTrongTuan(ngay, thang, nam) {
   
    const date = new Date(nam, thang - 1, ngay);

  
    if (
        date.getFullYear() !== nam ||
        date.getMonth() !== thang - 1 ||
        date.getDate() !== ngay
    ) {
        return "Ngày không hợp lệ.";
    }

    // Mảng các thứ trong tuần
    const thu = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];

    return `Ngày ${ngay}/${thang}/${nam} là ${thu[date.getDay()]}.`;
}


console.log(inRaThuTrongTuan(5, 8, 2025)); 
console.log(inRaThuTrongTuan(29, 2, 2025)); 


function timUocChungLonNhat(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a; 
}
console.log(timUocChungLonNhat(12, 18)); 

function timBoiChungNhoNhat(a, b) {
    function timUocChungLonNhat(x, y) {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }

    return Math.abs(a * b) / timUocChungLonNhat(a, b);
}


//console.log(timBoiChungNhoNhat(12, 18));

function laSoNguyenTo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function layDaySoNguyenTo(dem) {
    let count = 0;
    let num = 2;
    let result = [];

    while (count < dem) {
        if (laSoNguyenTo(num)) {
            result.push(num);
            count++;
        }
        num++;
    }

    return result;
}
//  console.log(layDaySoNguyenTo(10)); 
