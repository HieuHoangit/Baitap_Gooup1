import hotels from "./hotel.mjs";
import { misc, promotionPercentCalc } from "./hotel.mjs";

hotels.forEach((hotel) => {
  hotel.emoji = misc[Math.floor(Math.random() * misc.length)];
});

hotels.forEach((hotel) => {
  const price = parseFloat(hotel.price.replace("$", "").replace(",", ""));
  const promotionPrice = parseFloat(
    hotel.promotionPrice.replace("$", "").replace(",", "")
  );
  hotel.promotionPercent = promotionPercentCalc(price, promotionPrice);
});

let cheapestHotel = hotels[0];
let lowestCleanFeeHotel = hotels[0];
let bestPriceHotel = hotels[0];

hotels.forEach((hotel) => {
  const price = parseFloat(
    hotel.promotionPrice.replace("$", "").replace(",", "")
  );
  const cleanFee = parseFloat(
    hotel.cleaningFee.replace("$", "").replace(",", "")
  );

  if (
    price <
    parseFloat(cheapestHotel.promotionPrice.replace("$", "").replace(",", ""))
  ) {
    cheapestHotel = hotel;
  }

  if (
    cleanFee <
    parseFloat(
      lowestCleanFeeHotel.cleaningFee.replace("$", "").replace(",", "")
    )
  ) {
    lowestCleanFeeHotel = hotel;
  }

  if (hotel.promotionPercent > bestPriceHotel.promotionPercent) {
    bestPriceHotel = hotel;
  }
});

cheapestHotel.tag = "cheapest";
lowestCleanFeeHotel.tag = "lowest-clean-fee";
bestPriceHotel.tag = "best-price";

console.log(hotels);
