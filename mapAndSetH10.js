const { v4: uuidv4 } = require("uuid");

// Khởi tạo Set và Map
const danhSachOrderId = new Set();
const chiTietOrder = new Map();

// Hàm tính tổng giá trị đơn hàng
function tinhTongDonHang(sanPhams) {
  return sanPhams.reduce(
    (tong, sanPham) => tong + sanPham.gia * sanPham.soLuong,
    0
  );
}

// Tạo mới đơn hàng
function taoDonHang(sanPhams) {
  if (sanPhams.length === 0) {
    console.log("Đơn hàng phải chứa ít nhất một sản phẩm.");
    return;
  }

  const orderId = uuidv4();
  danhSachOrderId.add(orderId);
  chiTietOrder.set(orderId, sanPhams);
  console.log(`Đơn hàng ${orderId} đã được tạo thành công.`);
}

// Lấy chi tiết đơn hàng theo orderId
function layDonHang(orderId) {
  if (!danhSachOrderId.has(orderId)) {
    console.log(`Đơn hàng ${orderId} không tồn tại.`);
    return null;
  }
  return chiTietOrder.get(orderId);
}

// Cập nhật đơn hàng
function capNhatDonHang(orderId, sanPhamsCapNhat) {
  if (!danhSachOrderId.has(orderId)) {
    console.log(`Đơn hàng ${orderId} không tồn tại.`);
    return;
  }

  // Nếu tất cả sản phẩm có số lượng bằng 0, xóa đơn hàng
  if (sanPhamsCapNhat.every((sanPham) => sanPham.soLuong === 0)) {
    xoaDonHang(orderId);
    return;
  }

  // Ngược lại, cập nhật đơn hàng
  chiTietOrder.set(orderId, sanPhamsCapNhat);
  console.log(`Đơn hàng ${orderId} đã được cập nhật thành công.`);
}

// Xóa đơn hàng
function xoaDonHang(orderId) {
  if (!danhSachOrderId.has(orderId)) {
    console.log(`Đơn hàng ${orderId} không tồn tại.`);
    return;
  }

  danhSachOrderId.delete(orderId);
  chiTietOrder.delete(orderId);
  console.log(`Đơn hàng ${orderId} đã được xóa thành công.`);
}

// Tìm đơn hàng có tổng giá trị lớn nhất
function timDonHangTongGiaTriLonNhat() {
  let maxTong = 0;
  let maxOrderId = null;

  for (const orderId of danhSachOrderId) {
    const tong = tinhTongDonHang(chiTietOrder.get(orderId));
    if (tong > maxTong) {
      maxTong = tong;
      maxOrderId = orderId;
    }
  }

  if (maxOrderId) {
    console.log(
      `Đơn hàng có tổng giá trị lớn nhất: ${maxOrderId}, Tổng giá trị: ${maxTong} VND`
    );
  } else {
    console.log("Không có đơn hàng nào.");
  }
  return maxOrderId;
}

// In ra danh sách orderId
function inDanhSachOrderId() {
  if (danhSachOrderId.size === 0) {
    console.log("Không có đơn hàng nào.");
    return;
  }

  console.log("Danh sách mã đơn hàng:");
  danhSachOrderId.forEach((orderId) => {
    console.log(orderId);
  });
}

// Ví dụ sử dụng:

// Tạo vài đơn hàng
taoDonHang([
  { maSanPham: "sp1", soLuong: 2, tenSanPham: "Sản phẩm 1", gia: 10000 },
  { maSanPham: "sp2", soLuong: 1, tenSanPham: "Sản phẩm 2", gia: 20000 },
]);

taoDonHang([
  { maSanPham: "sp3", soLuong: 3, tenSanPham: "Sản phẩm 3", gia: 15000 },
]);

// Cập nhật đơn hàng
const orderIdDauTien = [...danhSachOrderId][0];
capNhatDonHang(orderIdDauTien, [
  { maSanPham: "sp1", soLuong: 0, tenSanPham: "Sản phẩm 1", gia: 10000 },
  { maSanPham: "sp2", soLuong: 0, tenSanPham: "Sản phẩm 2", gia: 20000 },
]);

// Tìm đơn hàng có tổng giá trị lớn nhất
timDonHangTongGiaTriLonNhat();

// In danh sách mã đơn hàng
inDanhSachOrderId();
