var ua = navigator.userAgent.toLowerCase();
if(ua.indexOf('ali213app')>0||isWx()){
	$('.mobilebox').remove();
	$('.head_3g-top').remove();
	$('.head_3g2020').remove();
}
var card = {};
var pond = data301[1]['data'];
var cjnum = 0;
var star5num = 0;
var star4num = 0;
var star3num = 0;
var star5upnum = 0;
var star4upnum = 0;
var star4bdnum = 0;
var star5bdnum = 0;
var star4bdjishu = 0;
var star5bdjishu = 0;
var isbz = {};
var pondid = 2;
var globalgl = {};
var card5chizi = {};
var card4chizi = {};
var card3chizi = {};

$('.extmsg').html(data301[1]['B']);

globalgl = getpoundset(pond,pondid);
$('.poundselect').html(pond[pondid]['B']);

/*卡牌*/
$.each(data299[1]['data'], function(k, v) {
	card[v['E']] = {
		'name':v['B'],
		'img':v['C'],
		'url':v['F'],
		'star':v['D'],
	}
});
/*获取卡池下拉*/
var str = '';
$.each(pond, function(k, v) {
	str += '<li data-id="'+k+'"'+(k==2?' class="active"':'')+'>'+v['B']+'</li>';
});
$('.downlist ul').html(str);
$('.tabbox').on('click', '.downbtn', function(event) {
    if(!$(this).hasClass('active')){
        $(this).addClass('active');
        $('.downlist').slideDown();
    }else{
        $(this).removeClass('active');
        $('.downlist').slideUp();
    }
});
$('.tabbox').on('click', '.pondset', function(event) {
    if(!$(this).hasClass('active')){
        $(this).addClass('active');
        $('.setbg').show();
        $('.setbox').show();
    }else{
        $(this).removeClass('active');
        $('.setbg').hide();
        $('.setbox').hide();
    }
});
$('.setbg,.setbox .close,.setbox .savebtn').click(function(event) {
	$('.setbg').hide();
	$('.setbox').hide();
	$('.checkedbox').removeClass('active');
});
$('.mskbig,.h5down .qx,.h5down .qr,.appdown .and,.appdown .ios').click(function(event) {
	$('.mskbig').hide();
	$('.alertbig.pc').hide();
	$('.alertbig.h5').hide();
});
$('.downlist').on('click', 'li', function(event) {
	if(!$(this).hasClass('active')){
		if($(this).attr('data-id') >= 26&&(ua.indexOf('ali213app')<=0&&!isWx())){
			if (screen.width < 1200) {
	            $('.mskbig').show();
	            $('.alertbig.h5').show();
	        }else {
	            $('.mskbig').show();
	            $('.alertbig.pc').show();
	        }
			return false;
		}
        pondid = $(this).attr('data-id');
        var tmpstr = $(this).html();
        $('.poundselect').html(tmpstr);
        $('.downlist li').removeClass('active');
        $(this).addClass('active');
        $('.downlist').slideUp();
        $('.downbtn').removeClass('active');
        globalgl = getpoundset(pond,pondid);

        cjnum = 0;
		star5num = 0;
		star4num = 0;
		star3num = 0;
		star5upnum = 0;
		star4upnum = 0;
		star4bdnum = 0;
		star5bdnum = 0;
		star4bdjishu = 0;
		star5bdjishu = 0;
		card5chizi = {};
		card4chizi = {};
		card3chizi = {};

		$('.lstjlistr .swiper-wrapper').html('');
		$('#cjnum').html(0);
		$('#star5num').html(0);
		$('#star5bdnum').html(0);
		$('#star5upnum').html(0);
		$('#star4num').html(0);
		$('#star4bdnum').html(0);
		$('#star4upnum').html(0);
		$('#star3num').html(0);

		var str = '';
		for (var i = 0; i < 10; i++) {
			str += '<div class="cjinlist"><img src="//cdn.jsdelivr.net/gh/finest-cy/genshin@main/images/wz.png" alt=""><span>???</span></div>';
		}
		$('.cjbox .cjin').html(str);
	}
});
$('.cksetbtnbox').on('click', '.returnbtn', function(event) {
	globalgl = getpoundset(pond,pondid);
	$('.setbg').hide();
	$('.setbox').hide();
	$('.checkedbox').removeClass('active');
});

/*卡池设置1*/
$('.glsz').on('blur', '.szlist .ipt', function(event) {
	var num = $(this).val();
	var type = $(this).parents('.szlist').attr('data-type');
	if($(this).hasClass('gl1')){
		var a = 0;
	}else{
		var a = 1;
	}
	globalgl['gailv'][type][a] = num;
});
/*卡池设置2*/
$('.bdsz').on('click', '.ipt', function(event) {
	var num = $(this).val();
	var type = $(this).parents('.szlist').attr('data-type');
	globalgl['bichu'][type][0] = num;
});

/*重置*/
$('.btnbox .reset').click(function(event) {
	cjnum = 0;
	star5num = 0;
	star4num = 0;
	star3num = 0;
	star5upnum = 0;
	star4upnum = 0;
	star4bdnum = 0;
	star5bdnum = 0;
	star4bdjishu = 0;
	star5bdjishu = 0;
	card5chizi = {};
	card4chizi = {};
	card3chizi = {};

	$('.lstjlistr .swiper-wrapper').html('');
	$('#cjnum').html(0);
	$('#star5num').html(0);
	$('#star5bdnum').html(0);
	$('#star5upnum').html(0);
	$('#star4num').html(0);
	$('#star4bdnum').html(0);
	$('#star4upnum').html(0);
	$('#star3num').html(0);

	var str = '';
	for (var i = 0; i < 10; i++) {
		str += '<div class="cjinlist"><img src="//cdn.jsdelivr.net/gh/finest-cy/genshin@main/images/wz.png" alt=""><span>???</span></div>';
	}
	$('.cjbox .cjin').html(str);
});

/*抽奖*/
$('.btnbox .shilianchou').click(function(event) {
	var star3gl = 1000;
	var star4gl = 0;
	var star4glup = 0;
	var star5gl = 0;
	var star5glup = 0;

	var cz = '';

	if(pondid == 0){
		alert('选择卡池');
		return false;
	}
	if(pondid == 16 && cjnum == 20){
		alert('该卡池只能抽20次');
		return false;
	}
	$.each(globalgl['gailv'], function(k, v) {
		star3gl = star3gl - v[0]*10;
		if(k == 4){
			star4gl = v[0]*10;
			star4glup = v[1];
		}else{
			star5gl = v[0]*10;
			star5glup = v[1];
		}
	});
	

	var resstr = '';
	for (var i = 0; i < 10; i++) {
		var rand = sj(1000);
		var obj = [];

		if(rand<=star3gl){
			cz = '3';
			star4bdjishu++;
			star5bdjishu++;
			obj = $.parseJSON(globalgl['card'][3]);
			star3num++;
		}else if(star3gl < rand && rand <= star4gl+star3gl){
			cz = '4';
			star4num++;
			star5bdjishu++;
			star4bdjishu = 0;
			obj = $.parseJSON(globalgl['card'][4]);
		}else if(star4gl+star3gl < rand && rand <= star5gl+star4gl+star3gl){
			cz = '5';
			star5num++;
			star4bdjishu = 0;
			star5bdjishu = 0;
			obj = $.parseJSON(globalgl['card'][5]);
		}

		if(star5bdjishu == parseInt(globalgl['bichu'][5][0])-1){
			star5bdjishu = 0;
			obj = $.parseJSON(globalgl['card'][5]);
			star5num++;
			star5bdnum++;
			star4bdjishu = 0;
			cz = '5';
		}else if(star4bdjishu == parseInt(globalgl['bichu'][4][0])-1){
			if(pondid == 16 && cjnum < 10){
			}else{
				star4bdjishu = 0;
				star4num++;
				star4bdnum++;
				cz = '4';
				obj = $.parseJSON(globalgl['card'][4]);
			}
		}

		var rand2 = sj(obj.length);

		if(star5glup != 0){
			if(cz == 5){
				
				if(star5num == 2){
					star5upnum++;
					obj = $.parseJSON(globalgl['up'][5])
					var rand2 = sj(obj.length);
				}else{
					var rand3 = sj(100);
					if(rand3 <= star5glup){
						star5upnum++;
						/*出了up*/
						obj = $.parseJSON(globalgl['up'][5])
						var rand2 = sj(obj.length);
					}
				}
			}
		}

		if(star4glup != 0){
			if(cz == 4){
				var rand3 = sj(100);
				if(rand3 <= star5glup){
					/*出了up*/
					star4upnum++;
					obj = $.parseJSON(globalgl['up'][4])
					var rand2 = sj(obj.length);
				}
			}
		}
		
		var cardid = obj[rand2-1];
		var cards = card[cardid];

		if(pondid == 16 && cjnum == 9){
			star4num++;
			star4bdnum++;
			star4bdjishu = 0;
			cards = card[11];
			cardid = 11;
			cz = 4;
		}
		
		resstr += '<div class="cjinlist"><img src="'+cards['img']+'" alt="'+cards['name']+'"><span>'+cards['name']+'</span></div>';
		cjnum++;

		if(cz == '3'){
			if(typeof card3chizi[obj[rand2-1]] != 'undefined'){
				card3chizi[cardid] = card3chizi[cardid] + 1;
			}else{
				card3chizi[cardid] = 1;
			}
		}else if(cz == '4'){
			if(typeof card4chizi[cardid] != 'undefined'){
				card4chizi[cardid] = card4chizi[cardid] + 1;
			}else{
				card4chizi[cardid] = 1;
			}
		}else if(cz == '5'){
			if(typeof card5chizi[obj[rand2-1]] != 'undefined'){
				card5chizi[cardid] = card5chizi[cardid] + 1;
			}else{
				card5chizi[cardid] = 1;
			}
		}
	}

	var card5chizistr = '';
	$.each(card5chizi, function(k, v) {
		var cards = card[k];
		card5chizistr += '<div class="swiper-slide"><img src="'+cards['img']+'" alt="'+cards['name']+'"><span>'+cards['name']+'</span><em>'+v+'</em></div>';
	});
	var card4chizistr = '';
	$.each(card4chizi, function(k, v) {
		var cards = card[k];
		card4chizistr += '<div class="swiper-slide"><img src="'+cards['img']+'" alt="'+cards['name']+'"><span>'+cards['name']+'</span><em>'+v+'</em></div>';
	});
	var card3chizistr = '';
	$.each(card3chizi, function(k, v) {
		var cards = card[k];
		card3chizistr += '<div class="swiper-slide"><img src="'+cards['img']+'" alt="'+cards['name']+'"><span>'+cards['name']+'</span><em>'+v+'</em></div>';
	});


	$('.cjbox .cjin').html(resstr);
	$('#cjnum').html(cjnum);
	$('#star5num').html(star5num);
	$('#star4num').html(star4num);
	$('#star3num').html(star3num);
	$('#star5upnum').html(star5upnum);
	$('#star4upnum').html(star4upnum);
	$('#star5bdnum').html(star5bdnum);
	$('#star4bdnum').html(star4bdnum);
	$('.swiper1 .swiper-wrapper').html(card5chizistr);
	$('.swiper2 .swiper-wrapper').html(card4chizistr);
	$('.swiper3 .swiper-wrapper').html(card3chizistr);
	var swiper1 = new Swiper('.lstjlistr', {
	    slidesPerView: 5,
	    spaceBetween: 10,
	    freeMode: true,
	    pagination: {
			el: '.swiper-pagination',
			clickable: true,
	    },
	})
});
var swiperztnav = new Swiper(".swiper-ztnav", {
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true,
    roundLengths: true
});

document.onmousedown=function(ev){
	if($('.downbtn').hasClass('active')){
		$('.downbtn').removeClass('active');
		$('.downlist').slideUp();
	}
}
/*卡池下拉*/
function getpoundset(pond,pondid)
{
	var returnobj = {};
	returnobj['gailv'] = {};
	returnobj['bichu'] = {};
	returnobj['card'] = {};
	returnobj['up'] = {};
	var gl = '';
	var bd = '';
	var obj = pond[pondid]['data'];
	$.each(obj, function(k, v) {
		if(v['C'] == '概率'){
			gl += '<span>概率设置</span>';
			$.each(v['data'], function(k1, v1) {
				returnobj['gailv'][v1['D']] = [v1['E'],v1['F']];

				gl += '<div class="szlist" data-type="'+v1['D']+'"><div class="glsm"><span>'+v1['D']+'★</span><input type="text" class="ipt gl1" value="'+v1['E']+'" onkeyup="num(this,1,100)"><span>%</span></div><div class="glsm"><span>'+v1['D']+'★up</span><input type="text" class="ipt gl2" value="'+v1['F']+'" onkeyup="num(this,1,100)"><span>%</span></div></div>';
			});
		}else if(v['C'] == '必出保底'){
			bd += '<span>保底设置</span>'
			$.each(v['data'], function(k1, v1) {
				var str1 = v1['D'].match(/\[(\S*)\]/)[1];
				var str2 = v1['D'].match(/\{(\S*)\}/)[1];
				var str3 = v1['D'].match(/\<(\S*)\>/)[1];
				returnobj['bichu'][str3] = [str1,str2];
				bd += '<div class="szlist" data-type="'+str3+'"><div class="glnormal"><span>保证</span><input type="text" class="ipt" data-max="'+str2+'" value="'+str1+'" onkeyup="num(this,0,'+str2+')"><span> 抽有一个'+str3+'星</span></div></div>';
			});
		}else if(v['C'] == '卡片id'){
			$.each(v['data'], function(k1, v1) {
				returnobj['card'][v1['D']] = v1['E'];
			});
		}else if(v['C'] == 'up概率'){
			if(v['data']){
				$.each(v['data'], function(k1, v1) {
					returnobj['up'][v1['D']] = v1['E'];
				});
			}
		}
	});
	$('.glsz span').html(gl);
	$('.bdsz span').html(bd);
	return returnobj;
}


function num(obj,l,max){
	if(l>0){
		obj.value = obj.value.replace(/[^\d.]/g,""); //清除"数字"和"."以外的字符
		obj.value = obj.value.replace(/^\./g,""); //验证第一个字符是数字
		obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个, 清除多余的
		obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
		if(l == 1){
			obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d).*$/,'$1$2.$3'); //只能输入两个小数
		}else{
			obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3'); //只能输入两个小数
		}
	}else{
		obj.value = obj.value.replace(/[^\d]/g,""); //清除"数字"和"."以外的字符
		obj.value = obj.value.replace(/^\./g,""); //验证第一个字符是数字
	}
	if(obj.value>max){
		obj.value = max;
	}
}

function sj(x) {
    //x上限，y下限
    var y = 1;
    var rand = parseInt(Math.random() * (x - y + 1) + y);
    return rand;
}
function isWx() {
    var uAgent = navigator.userAgent.toLowerCase();
    var result = (/micromessenger/.test(uAgent)) ? true : false;
    if (result) {
        console.log('你正在访问微信浏览器');
    } else {
        console.log('你访问的不是微信浏览器');
    }
    return result;
}
