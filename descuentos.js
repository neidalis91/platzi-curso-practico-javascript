/*const preciOriginal = 120;
const descuento = 18;*/

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function priceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue =  inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);
    const resultadoP = document.getElementById("resultadoP");
    resultadoP.innerText = "El precio con descuentoson $" + precioConDescuento;
}
/*

const coupons = [
    "1",
    "2",
    "3" ,
];

function onClickButtonPriceDiscount() {
    const inputPriceC = document.getElementById("inputPriceC");
    const priceValueC = inputPriceC.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue) {
        case coupons[0]: // "JuanDC_es_Batman"
            descuento = 15;
            break;
        case coupons[1]: // "pero_no_le_digas_a_nadie"
            descuento = 30;
            break;
        case coupons[2]: // "es_un_secreto"
            descuento = 25;
            break;
    }
    const precioConDescuento = calcularPrecioConDescuento(priceValueC, descuento);

    const resultadoC = document.getElementById("resultadoC");
    resultadoC.innerText = "El precio con descuento son: $" + precioConDescuento;
}
*/

const coupons = [
    {
        name: "1",
        discount: 15,
    },
    {
        name: "2",
        discount: 30,
    },
    {
        name: "3",
        discount: 25,
    },
];

const isCouponValueValid = function (coupon) {
    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;
    return coupon.name == couponValue;
};

function onClickButtonPriceDiscount(){
    const inputPriceC = document.getElementById("inputPriceC");
    const priceValueC = inputPriceC.value;

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
    alert("El cupón " + couponValue + "no es válido");
} else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValueC, descuento);

    const resultadoC = document.getElementById("resultadoC");
    resultadoC.innerText = "El precio con descuento son: $" + precioConDescuento;
}
}
