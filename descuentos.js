function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
return precioConDescuento;
}


const couponDiscount =[

 { name:  "AA001",
   discount: 30,
},
{ name: "AB001",
  discount : 35,
},
{name :"AC001",
discount : 40},
]





function onClickButtonPriceDiscount() {
const inputPrice = document.getElementById("InputPrice");
const priceValue = inputPrice.value;

const inputCoupon = document.getElementById("InputCoupon");
const valueCoupon = inputCoupon.value;

const isCouponValueValid = couponDiscount.find( descuento => descuento.name === valueCoupon );
if (!isCouponValueValid) {
    alert("El cupon:" + valueCoupon + " no es válido");
} else {
    discountValue = isCouponValueValid.discount;
}


const inputDiscount = document.getElementById("InputDiscount");
const discountValue = inputDiscount.value;

const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

const resultP = document.getElementById("ResultP");
resultP.innerText = "El precio con descuento es: $" + precioConDescuento;

}

