import { store } from "./store.mjs";

const firstProductSpecifications = store.products[0]?.details?.specifications;
if (firstProductSpecifications) {
  console.log(firstProductSpecifications);
} else {
  console.log("specifications can not be found");
}

const thirdProductPrice = store.products[2]?.getPrice?.();
if (thirdProductPrice !== undefined) {
  console.log(`Giá sản phẩm: ${thirdProductPrice}`);
} else {
  console.log("Không có thông tin giá.");
}
