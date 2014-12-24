// Set "oeapikey" in your code

// OpenExchangerates URL (default for non-HTTPS free plan)
if (!oeurl) {
	var oeurl = "http://openexchangerates.org/api/latest.json?app_id=";
}

// Alphabetical by name not abbr. *** TODO: Change DD to use value sorting
// [0]=Symbol, [1]=Decimals used, [2]=Display name
var currencies = 
{ AFN: [ '؋', 2, 'Afghan afghani' ],
  ALL: [ 'Lek', 2, 'Albanian lek' ],
  DZD: [ 'د', 2, 'Algerian dinar' ],
  AOA: [ '', 2, 'Angolan kwanza' ],
  AED: [ 'د', 2, 'Arab Emirates dirham' ],
  ARS: [ '$', 2, 'Argentine peso' ],
  AMD: [ '', 2, 'Armenian dram' ],
  AWG: [ 'ƒ', 2, 'Aruban florin' ],
  AUD: [ '$', 2, 'Australian dollar' ],
  AZN: [ 'ман', 2, 'Azerbaijani manat' ],
  BSD: [ '$', 2, 'Bahamian dollar' ],
  BHD: [ 'د', 2, 'Bahraini dinar' ],
  BDT: [ '', 2, 'Bangladeshi taka' ],
  BBD: [ '$', 2, 'Barbados dollar' ],
  BYR: [ 'p.', 2, 'Belarusian ruble' ],
  BZD: [ 'BZ$', 2, 'Belize dollar' ],
  BMD: [ '$', 2, 'Bermudian dollar' ],
  BTN: [ '', 2, 'Bhutanese ngultrum' ],
  BOB: [ '$b', 2, 'Boliviano' ],
  BAM: [ 'KM', 2, 'Bosnia and Herzegovina convertible mark' ],
  BWP: [ 'P', 2, 'Botswana pula' ],
  BRL: [ 'R$', 2, 'Brazilian real' ],
  BND: [ '$', 2, 'Brunei dollar' ],
  BGN: [ 'лв', 2, 'Bulgarian lev' ],
  BIF: [ '', 0, 'Burundian franc' ],
  KHR: [ '៛', 2, 'Cambodian riel' ],
  CAD: [ '$', 2, 'Canadian dollar' ],
  CVE: [ '', 2, 'Cape Verde escudo' ],
  KYD: [ '$', 2, 'Cayman Islands dollar' ],
  CLP: [ '$', 0, 'Chilean peso' ],
  CNY: [ '¥', 2, 'Chinese yuan' ],
  COP: [ '$', 2, 'Colombian peso' ],
  KMF: [ '', 0, 'Comoro franc' ],
  CDF: [ '', 2, 'Congolese franc' ],
  CRC: [ '₡', 2, 'Costa Rican colon' ],
  HRK: [ 'kn', 2, 'Croatian kuna' ],
  CUC: [ '', 2, 'Cuban convertible peso' ],
  CUP: [ '₱', 2, 'Cuban peso' ],
  CZK: [ 'Kč', 2, 'Czech koruna' ],
  DKK: [ 'kr', 2, 'Danish krone' ],
  DJF: [ '', 0, 'Djiboutian franc' ],
  DOP: [ 'RD$', 2, 'Dominican peso' ],
  EGP: [ '£', 2, 'Egyptian pound' ],
  ERN: [ '', 2, 'Eritrean nakfa' ],
  ETB: [ '', 2, 'Ethiopian birr' ],
  EUR: [ '€', 2, 'Euro' ],
  FKP: [ '£', 2, 'Falkland Islands pound' ],
  FJD: [ '$', 2, 'Fiji dollar' ],
  GMD: [ '', 2, 'Gambian dalasi' ],
  GEL: [ '', 2, 'Georgian lari' ],
  GHS: [ '', 2, 'Ghanaian cedi' ],
  GIP: [ '£', 2, 'Gibraltar pound' ],
  GTQ: [ 'Q', 2, 'Guatemalan quetzal' ],
  GNF: [ '', 0, 'Guinean franc' ],
  GYD: [ '$', 2, 'Guyanese dollar' ],
  HTG: [ '', 2, 'Haitian gourde' ],
  HNL: [ 'L', 2, 'Honduran lempira' ],
  HKD: [ '$', 2, 'Hong Kong dollar' ],
  HUF: [ 'Ft', 2, 'Hungarian forint' ],
  ISK: [ 'kr', 2, 'Icelandic króna' ],
  INR: [ '', 2, 'Indian rupee' ],
  IDR: [ 'Rp', 0, 'Indonesian rupiah' ],
  IRR: [ '﷼', 2, 'Iranian rial' ],
  IQD: [ 'د', 2, 'Iraqi dinar' ],
  ILS: [ '₪', 2, 'Israeli new shekel' ],
  JMD: [ 'J$', 2, 'Jamaican dollar' ],
  JPY: [ '¥', 0, 'Japanese yen' ],
  JOD: [ 'د', 2, 'Jordanian dinar' ],
  KZT: [ 'лв', 2, 'Kazakhstani tenge' ],
  KES: [ '', 2, 'Kenyan shilling' ],
  KWD: [ 'د', 2, 'Kuwaiti dinar' ],
  KGS: [ 'лв', 2, 'Kyrgyzstani som' ],
  LAK: [ '₭', 2, 'Lao kip' ],
  LBP: [ '£', 2, 'Lebanese pound' ],
  LSL: [ '', 2, 'Lesotho loti' ],
  LRD: [ '$', 2, 'Liberian dollar' ],
  LYD: [ 'د', 2, 'Libyan dinar' ],
  LTL: [ 'Lt', 2, 'Lithuanian litas' ],
  MOP: [ '', 2, 'Macanese pataca' ],
  MKD: [ 'ден', 2, 'Macedonian denar' ],
  MGA: [ '', 0, 'Malagasy ariary' ],
  MWK: [ '', 2, 'Malawian kwacha' ],
  MYR: [ 'RM', 2, 'Malaysian ringgit' ],
  MVR: [ '', 2, 'Maldivian rufiyaa' ],
  MRO: [ '', 2, 'Mauritanian ouguiya' ],
  MUR: [ '₨', 2, 'Mauritian rupee' ],
  MXN: [ '$', 2, 'Mexican peso' ],
  MDL: [ '', 2, 'Moldovan leu' ],
  MNT: [ '₮', 2, 'Mongolian tugrik' ],
  MAD: [ 'د', 2, 'Moroccan dirham' ],
  MZN: [ 'MT', 2, 'Mozambican metical' ],
  MMK: [ '', 2, 'Myanma kyat' ],
  NAD: [ '$', 2, 'Namibian dollar' ],
  NPR: [ '₨', 2, 'Nepalese rupee' ],
  ANG: [ 'ƒ', 2, 'Netherlands Antillean guilder' ],
  TWD: [ 'NT$', 2, 'New Taiwan dollar' ],
  NZD: [ '$', 2, 'New Zealand dollar' ],
  NIO: [ 'C$', 2, 'Nicaraguan córdoba' ],
  NGN: [ '₦', 2, 'Nigerian naira' ],
  KPW: [ '₩', 2, 'North Korean won' ],
  NOK: [ 'kr', 2, 'Norwegian krone' ],
  OMR: [ '﷼', 2, 'Omani rial' ],
  PKR: [ '₨', 2, 'Pakistani rupee' ],
  PAB: [ 'B/.', 2, 'Panamanian balboa' ],
  PGK: [ '', 2, 'Papua New Guinean kina' ],
  PYG: [ 'Gs', 0, 'Paraguayan guaraní' ],
  PEN: [ 'S/.', 2, 'Peruvian nuevo sol' ],
  PHP: [ '₱', 2, 'Philippine peso' ],
  PLN: [ 'zł', 2, 'Polish złoty' ],
  GBP: [ '£', 2, 'Pound sterling' ],
  QAR: [ '﷼', 2, 'Qatari riyal' ],
  RON: [ 'lei', 2, 'Romanian new leu' ],
  RUB: [ 'руб', 2, 'Russian ruble' ],
  RWF: [ '', 0, 'Rwandan franc' ],
  SHP: [ '£', 2, 'Saint Helena pound' ],
  WST: [ '', 2, 'Samoan tala' ],
  STD: [ '', 2, 'São Tomé and Príncipe dobra' ],
  SAR: [ '﷼', 2, 'Saudi riyal' ],
  RSD: [ 'Дин', 2, 'Serbian dinar' ],
  SCR: [ '₨', 2, 'Seychelles rupee' ],
  SLL: [ '', 2, 'Sierra Leonean leone' ],
  SGD: [ '$', 2, 'Singapore dollar' ],
  SBD: [ '$', 2, 'Solomon Islands dollar' ],
  SOS: [ 'S', 2, 'Somali shilling' ],
  ZAR: [ 'R', 2, 'South African rand' ],
  KRW: [ '₩', 0, 'South Korean won' ],
  SSP: [ '', 2, 'South Sudanese pound' ],
  LKR: [ '₨', 2, 'Sri Lankan rupee' ],
  SDG: [ '', 2, 'Sudanese pound' ],
  SRD: [ '$', 2, 'Surinamese dollar' ],
  SZL: [ '', 2, 'Swazi lilangeni' ],
  SEK: [ 'kr', 2, 'Swedish krona/kronor' ],
  CHF: [ 'CHF', 2, 'Swiss franc' ],
  SYP: [ '£', 2, 'Syrian pound' ],
  TJS: [ '', 2, 'Tajikistani somoni' ],
  TZS: [ '', 2, 'Tanzanian shilling' ],
  THB: [ '฿', 2, 'Thai baht' ],
  TOP: [ '', 2, 'Tongan paʻanga' ],
  TTD: [ 'TT$', 2, 'Trinidad and Tobago dollar' ],
  TND: [ 'د', 2, 'Tunisian dinar' ],
  TRY: [ '', 2, 'Turkish lira' ],
  TMT: [ '', 2, 'Turkmenistani manat' ],
  UGX: [ '', 2, 'Ugandan shilling' ],
  UAH: [ '₴', 2, 'Ukrainian hryvnia' ],
  USD: [ '$', 2, 'United States dollar' ],
  UYU: [ '$U', 2, 'Uruguayan peso' ],
  UZS: [ 'лв', 2, 'Uzbekistan som' ],
  VUV: [ '', 0, 'Vanuatu vatu' ],
  VEF: [ 'Bs', 2, 'Venezuelan bolívar' ],
  VND: [ '₫', 0, 'Vietnamese dong' ],
  YER: [ '﷼', 2, 'Yemeni rial' ],
  ZMW: [ '', 2, 'Zambian kwacha' ],
  ZWL: [ '$', 2, 'Zimbabwe dollar' ]
};

Currencies = new Meteor.Collection("currencies");

if (Meteor.isServer) {

	Meteor.startup(function() {

		Meteor.setInterval(function() {
			var ctime = Math.round(Date.now() / 1000);
			var lasto = Currencies.findOne({});
			var since = (lasto && lasto.timestamp) ? ctime - lasto.timestamp : ctime;

			if (since > 21600) { // Every 6 hours

				HTTP.post(oeurl + oeapikey, {}, function(error, result) {
					if (!error) {
						Currencies.remove({});
						Currencies.insert(result.data);
					}
				});

			} // end if
		}, 1000); // Check every 1 minute

	});

	Meteor.publish('currencies', function() {
		return Currencies.find({});
	});
}

if (Meteor.isClient) {
	Meteor.subscribe('currencies');
	setTimeout(function() {
		Session.setDefault("curr", "USD");
		Session.setDefault("units", "ounces");
	}, 100);
}



this.currValue = function(curr) {
	if (!curr) { curr = "USD"; }
	var data = Currencies.findOne({});

	if (data === undefined) { return 0; }
	else { return data.rates[curr]; }
};

this.getGold = function(curr, unit) {
	if (!curr) { curr = "USD"; }
	if (!unit) { unit = "ounces"; }
	
	var rate = currValue(curr);
	var gval = Currencies.findOne({}).rates.XAU;

	if (unit === "ounces") { return rate / gval; }
	else { return rate / gval / 31.1034768; }
};

this.getSilver = function(curr, unit) {
	if (!curr) { curr = "USD"; }
	if (!unit) { unit = "ounces"; }
	
	var rate = currValue(curr);
	var gval = Currencies.findOne({}).rates.XAG;

	if (unit === "ounces") { return rate / gval; }
	else { return rate / gval / 31.1034768; }
};

this.getNisab = function(curr, metal) {
	if (!curr) { curr = "USD"; }
	if (!metal) { metal = "low"; }
	
	var ngld = getGold(curr,"grams") * 85;
	var nslv = getSilver(curr,"grams") * 595;
	
	if (metal === "gold") { return ngld; }
	if (metal === "silver") { return nslv; }
	if (metal === "high") {
		if (ngld > nslv) { return ngld; }
		else { return nslv; }
	}
	else { 
		if (ngld < nslv) { return ngld; }
		else { return nslv; }
	}
};

this.formatCurr = function(x, curr, trim) {
	if (!curr) { var curr = "USD"; }
	if (!trim) { var floor = false; }

	var sym = currencies[curr][0];
	var dec = currencies[curr][1];
	var y = (trim) ? x.toFixed(0) : x.toFixed(dec);
	var z = y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return sym+z;
};

this.currDropdown = function(id,cls) {
	if (!id) { id = "currency"; }
	if (!cls) { cls = "form-control"; }

	var html = "<select id='"+id+"' name='"+id+"' class='"+cls+"'>";
	for (var k in currencies) {
		if (Session.get("curr") === k) { html += "<option value='" + k + "' selected>" + currencies[k][2] + "</option>"; }
		else { html += "<option value='" + k + "'>" + currencies[k][2] + "</option>"; }
	}
	html += "</select>";
	return html;
};

this.unitRadio = function(id) {
	if (!id) { id = "units"; }
	
	if (Session.get("units") === "ounces") { c1 = ""; c2 = "checked"; }
	else { c1 = "checked"; c2 = ""; }
	
	var html = "<label class='radio-inline' for='"+id+"-grams'><input type='radio' name='"+id+"' id='"+id+"-grams' value='grams' "+c1+">grams</label>";
	html += "<label class='radio-inline' for='"+id+"-ounces'><input type='radio' name='"+id+"' id='"+id+"-ounces' value='ounces' "+c2+">ounces</label>";
	return html;
};

this.showNisab = function() {
	var curr = Session.get("curr");
	return formatCurr(getNisab(curr),curr);
};

this.showGold = function() {
	var curr = Session.get("curr");
	var unit = Session.get("units");
	var suff = (unit === "ounces") ? " / oz" : " / g";
	
	return formatCurr(getGold(curr,unit),curr) + suff;
};

this.showSilver = function() {
	var curr = Session.get("curr");
	var unit = Session.get("units");
	var suff = (unit === "ounces") ? " / oz" : " / g";
	
	return formatCurr(getSilver(curr,unit),curr) + suff;
};
