import require$$0 from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

styleInject(css_248z,{"insertAt":"top"});

const React$1 = require$$0;

function BookmarkIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React$1.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React$1.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React$1.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
  }));
}

const ForwardRef$1 = React$1.forwardRef(BookmarkIcon$1);
var BookmarkIcon_1 = ForwardRef$1;

var BookmarkIcon = BookmarkIcon_1;

const React = require$$0;

function MapPinIcon$1({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = React.forwardRef(MapPinIcon$1);
var MapPinIcon_1 = ForwardRef;

var MapPinIcon = MapPinIcon_1;

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

function formatMoney(value, curr) {
    const input = Number(value);
    const digits = new Intl.NumberFormat().format(input);
    const usDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(input);
    return curr ? usDollar : digits;
}

const DRIVLY_FEE = 500;
const PARTNER_MARGIN = 0;
const auctionFees = [
    {
        id: 404876,
        feeId: 70374,
        vehiclePriceMin: 1,
        vehiclePriceMax: 499,
        dollarAmount: "225.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404877,
        feeId: 70374,
        vehiclePriceMin: 500,
        vehiclePriceMax: 999,
        dollarAmount: "225.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404878,
        feeId: 70374,
        vehiclePriceMin: 1000,
        vehiclePriceMax: 2999,
        dollarAmount: "255.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404879,
        feeId: 70374,
        vehiclePriceMin: 3000,
        vehiclePriceMax: 4999,
        dollarAmount: "295.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404880,
        feeId: 70374,
        vehiclePriceMin: 5000,
        vehiclePriceMax: 6999,
        dollarAmount: "335.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404881,
        feeId: 70374,
        vehiclePriceMin: 7000,
        vehiclePriceMax: 8999,
        dollarAmount: "380.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404882,
        feeId: 70374,
        vehiclePriceMin: 9000,
        vehiclePriceMax: 10999,
        dollarAmount: "420.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404883,
        feeId: 70374,
        vehiclePriceMin: 11000,
        vehiclePriceMax: 12999,
        dollarAmount: "445.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404884,
        feeId: 70374,
        vehiclePriceMin: 13000,
        vehiclePriceMax: 14999,
        dollarAmount: "470.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404885,
        feeId: 70374,
        vehiclePriceMin: 15000,
        vehiclePriceMax: 16999,
        dollarAmount: "505.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404886,
        feeId: 70374,
        vehiclePriceMin: 17000,
        vehiclePriceMax: 18999,
        dollarAmount: "530.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404887,
        feeId: 70374,
        vehiclePriceMin: 19000,
        vehiclePriceMax: 20999,
        dollarAmount: "555.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404888,
        feeId: 70374,
        vehiclePriceMin: 21000,
        vehiclePriceMax: 22999,
        dollarAmount: "570.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404889,
        feeId: 70374,
        vehiclePriceMin: 23000,
        vehiclePriceMax: 24999,
        dollarAmount: "595.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404890,
        feeId: 70374,
        vehiclePriceMin: 25000,
        vehiclePriceMax: 26999,
        dollarAmount: "620.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404891,
        feeId: 70374,
        vehiclePriceMin: 27000,
        vehiclePriceMax: 29999,
        dollarAmount: "640.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404892,
        feeId: 70374,
        vehiclePriceMin: 30000,
        vehiclePriceMax: 34999,
        dollarAmount: "665.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404893,
        feeId: 70374,
        vehiclePriceMin: 35000,
        vehiclePriceMax: 39999,
        dollarAmount: "695.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404894,
        feeId: 70374,
        vehiclePriceMin: 40000,
        vehiclePriceMax: 49999,
        dollarAmount: "720.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404895,
        feeId: 70374,
        vehiclePriceMin: 50000,
        vehiclePriceMax: 59999,
        dollarAmount: "770.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404896,
        feeId: 70374,
        vehiclePriceMin: 60000,
        vehiclePriceMax: 99999,
        dollarAmount: "835.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404897,
        feeId: 70374,
        vehiclePriceMin: 100000,
        vehiclePriceMax: 199999,
        dollarAmount: "1070.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
    {
        id: 404898,
        feeId: 70374,
        vehiclePriceMin: 200000,
        vehiclePriceMax: 9999999,
        dollarAmount: "1595.0",
        percentageAmount: null,
        currencyCode: "USD",
    },
];

function handleSalesPrice(vehicle, details) {
    const buyNowPrice = Math.max((vehicle === null || vehicle === void 0 ? void 0 : vehicle.buyNowPrice) || 0, (details === null || details === void 0 ? void 0 : details.buyNowPrice) || 0);
    const { askingPrice, minimumBid, wholesaleValue, retailValue, mmrPrice, price, startingBidPrice, bidPrice, } = vehicle;
    let salesPrice = {};
    if (buyNowPrice) {
        salesPrice['value'] = buyNowPrice;
        salesPrice['type'] = 'buy now';
    }
    else if (askingPrice) {
        salesPrice['value'] = askingPrice;
        salesPrice['type'] = 'asking';
    }
    else if (minimumBid) {
        salesPrice['value'] = minimumBid;
        salesPrice['type'] = 'min bid';
    }
    else if (wholesaleValue) {
        salesPrice['value'] = wholesaleValue;
        salesPrice['type'] = 'wholesale';
    }
    else if (retailValue) {
        salesPrice['value'] = retailValue;
        salesPrice['type'] = 'retail';
    }
    else if (mmrPrice) {
        salesPrice['value'] = mmrPrice;
        salesPrice['type'] = 'mmr price';
    }
    else if (price) {
        salesPrice['value'] = price;
        salesPrice['type'] = 'price';
    }
    else if (startingBidPrice) {
        salesPrice['value'] = startingBidPrice;
        salesPrice['type'] = 'starting bid';
    }
    else if (bidPrice) {
        salesPrice['value'] = bidPrice;
        salesPrice['type'] = 'bid price';
    }
    else {
        salesPrice['value'] = 'no info';
        salesPrice['type'] = 'no info';
    }
    // startingBidPrice
    //bidPrice
    const auctionFee = getAuctionFee(salesPrice.value);
    const amount = salesPrice.value + auctionFee + DRIVLY_FEE + PARTNER_MARGIN;
    salesPrice.value = amount === '$NaN' ? 'No info' : amount;
    return salesPrice;
}
function getAuctionFee(salesPrice) {
    let auctionFee = 0;
    for (let item of auctionFees) {
        let min = item.vehiclePriceMin;
        let max = item.vehiclePriceMax;
        if (salesPrice >= min && salesPrice <= max) {
            auctionFee = Number(item.dollarAmount);
        }
    }
    return auctionFee;
}

const VehicleCard = ({ vehicle, isLoading, itemUrl }) => {
    var _a, _b, _c;
    const price = handleSalesPrice(vehicle);
    const salesPrice = typeof price.value === 'number' ? '$' + formatMoney(price.value) : 'no info';
    return (require$$0.createElement("a", { href: itemUrl },
        require$$0.createElement("div", { className: 'vehicleCard z-50' },
            require$$0.createElement("div", { className: clsx('bg-zinc-900/80', {
                    vehicleImage: isLoading,
                }) },
                require$$0.createElement("img", { className: 'rounded-t-[10px] object-cover object-center', src: (vehicle === null || vehicle === void 0 ? void 0 : vehicle.image) || '/assets/comingSoon.jpg', alt: (vehicle === null || vehicle === void 0 ? void 0 : vehicle.model) || 'vehicle' })),
            require$$0.createElement("div", { className: 'flex h-full flex-col bg-white px-6 pb-6 pt-4 group-hover:bg-gray-50 md:px-4' },
                require$$0.createElement("div", { className: 'relative flex items-center justify-between' },
                    require$$0.createElement("h3", { className: 'vehicle__title' },
                        (vehicle === null || vehicle === void 0 ? void 0 : vehicle.year) || 'Missing',
                        " ", vehicle === null || vehicle === void 0 ? void 0 :
                        vehicle.make),
                    require$$0.createElement(BookmarkIcon, { className: 'ml-2 h-5 w-5 transform cursor-pointer hover:scale-110 hover:fill-DrivlyGreen hover:stroke-DrivlyGreen', onClick: (e) => {
                            e.preventDefault();
                        } })),
                require$$0.createElement("p", { className: 'vehicle__subtitle truncate capitalize' }, (_a = vehicle === null || vehicle === void 0 ? void 0 : vehicle.model) === null || _a === void 0 ? void 0 :
                    _a.toLowerCase(),
                    " ", (_b = vehicle === null || vehicle === void 0 ? void 0 : vehicle.trim) === null || _b === void 0 ? void 0 :
                    _b.toLowerCase()),
                require$$0.createElement("div", { className: 'relative flex items-center border-b border-Drivly/10 py-4 text-right tracking-[-0.02em]' },
                    require$$0.createElement("div", { className: '' },
                        require$$0.createElement("span", { className: 'text-lg font-semibold' }, salesPrice),
                        require$$0.createElement("span", { className: 'ml-2 whitespace-nowrap border-l border-Drivly/10 pl-2' }, (_c = vehicle === null || vehicle === void 0 ? void 0 : vehicle.mileage) === null || _c === void 0 ? void 0 :
                            _c.toLocaleString(),
                            " ",
                            require$$0.createElement("span", { className: 'text-sm ' }, "miles")),
                        ' '),
                    require$$0.createElement("div", { className: 'absolute bottom-5 right-0 flex flex-col font-sans' },
                        require$$0.createElement("span", { className: 'text-sm font-semibold capitalize leading-snug tracking-[0.02em] text-DrivlyGreen' }, price.type),
                        (vehicle === null || vehicle === void 0 ? void 0 : vehicle.lane) && (require$$0.createElement("span", { className: 'text-sm font-medium leading-tight tracking-[0.0002em] text-STEEL__BLUE' },
                            "Lane ", vehicle === null || vehicle === void 0 ? void 0 :
                            vehicle.lane,
                            "/",
                            (vehicle === null || vehicle === void 0 ? void 0 : vehicle.runNumber) ? `${vehicle === null || vehicle === void 0 ? void 0 : vehicle.runNumber}` : null)))),
                require$$0.createElement("div", { className: 'vehicle__footer flex gap-x-1' },
                    require$$0.createElement("p", { className: 'flex h-[30.6px] items-center gap-x-1 capitalize text-Drivly' },
                        require$$0.createElement(MapPinIcon, { className: 'mr-1 mb-1 h-4 text-[#B3B3B3]' }),
                        require$$0.createElement("span", null, (vehicle === null || vehicle === void 0 ? void 0 : vehicle.auction) || 'No info')),
                    (vehicle === null || vehicle === void 0 ? void 0 : vehicle.condition) && (require$$0.createElement("span", { className: 'vehicle__condition' }, vehicle === null || vehicle === void 0 ? void 0 :
                        vehicle.condition,
                        " Condition")))))));
};

export { VehicleCard };
//# sourceMappingURL=index.js.map