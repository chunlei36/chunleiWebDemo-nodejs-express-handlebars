var express = require('express');
var router = express.Router();
var deliusers = require('../model/deliusers') //在wedding数据库下创建开weddingusers
var shopdata = require('../model/shopdata') //在wedding数据库下创建开weddingusers

var pwd = require('../encrypt/sha1')
	//
	//
	//var jiami=mima.hex_sha1(val)

shopdata.find((err, datas) => {
	if(err) {
		throw new Error('查询失败！')
	};
	if(datas && datas.length == 0) {
		[
		
		{
			shopID: 'shop1_1',
			navImgD: ['d_11.jpg',
				'd_12.jpg',
				'd_13.jpg',
				'd_14.jpg',
				'd_15.jpg',
				'd_16.jpg'
			],
			navImgS: ['dd_11.jpg',
				'dd_12.jpg',
				'dd_13.jpg',
				'dd_14.jpg',
				'dd_15.jpg',
				'dd_16.jpg'
			],
			msg1mh2: 'Q Mex Bar & Grill',
			msg1p1: '多道墨西哥风情招牌菜式Q Mex Bar & Grill 双人餐',
			msg1p2: '郑州市郑东新区天泽街',
			msg1p3: '0371-65853828',
			msg1p4: '52元／两位',
			msg1p4s: '¥52',
			msg2pb1: '单人自助午餐',
			msg2pb2: '不可退餐',
			msg2h2: '菜单',
			msg2p: [
				'以下菜单各一份',
				'pico de gallo salsa or sour tomatillo salsa',
				'新鲜番茄沙拉 或 酸辣绿番茄沙拉',
				'fried clam or calamari fritti'
			],
			msg2ppdiv: ['以下菜单各一份', 'pico de gallo salsa or sour tomatillo salsa', '新鲜番茄沙拉 或 酸辣绿番茄沙拉', 'fried clam or calamari fritti'],
			msg3h2: '亮点',
			msg3p: ['使馆区追捧的热门餐厅', '每日新鲜烘焙纽约贝果', '高品质的新鲜食材 满足所有贝果狂热者', '丰盛贝果塔开启阳光周末 ENJOY独享7折'],
			msg4h2: '温馨提示',
			msg4p: ['使用日期：2016.11.4-2017.2.4；', '使用时间：周六周日，9:00-19:00；', '特别提示：特殊节日及公众假日使用，请提前致电商家询问营业时间；', '限量商品不享受其它优惠；', '高峰期建议提前预约；', '本产品支持随时退款；', '如需开具发票，请具体咨询商户；', '如有疑问，请联系 ENJOY 客服。电话：4008-909-511'],
			//		菜单
			msg5img: 'd_13.jpg',
			zc:'主菜',
			msg5divp1: [
				'（2选1)',
				'单人A餐',
				'（水果坚果暖沙拉，煎鸡肉and沙拉，ORIGINS 经典三明治）',
				'单人B餐',
				'（大虾牛油果帕尼尼，烤牛骨髓三明治，墨鱼汁海鲜手工细面）'
			],
			lb:'前菜',
			msg5divp2: [
				'（任选1）',
				'低温蛋素食沙拉',
				'水果坚果暖沙拉',
				'西班牙火腿蘑菇球',
				'西班牙香肠烩牛肚'
				
			],
			zw:'招牌菜',
			msg5divp3: [
				'（二选1）',
				'DB牛肉汉堡',
				'加勒比烤鸡配炒蔬菜'
			],
			rr:'饮品',
			msg5divp4: [
				'（任选2）',
				'美式咖啡/拿铁咖啡/原味酸奶/青柠莫吉托/手工冰淇淋'
			]
		},{
			shopID: 'shop1_2',
			navImgD: ['d_21.jpg',
				'd_22.jpg',
				'd_23.jpg',
				'd_24.jpg',
				'd_25.jpg',
				'd_26.jpg'
			],
			navImgS: ['dd_21.jpg',
				'dd_22.jpg',
				'dd_23.jpg',
				'dd_24.jpg',
				'dd_25.jpg',
				'dd_26.jpg'
			],
			msg1mh2: 'Solounge',
			msg1p1: '搭配健康沙拉 Solounge 索兰至餐厅双人沙拉自助餐',
			msg1p2: '郑州市郑东新区天泽街',
			msg1p3: '0371-65853828',
			msg1p4: '214.8元/2位',
			msg1p4s: '¥214.8',
			msg2pb1: '单人自助午餐',
			msg2pb2: '不可退餐',
			msg2h2: '菜单',
			msg2p: [
				'以下菜单各一份',
				'pico de gallo salsa or sour tomatillo salsa',
				'新鲜番茄沙拉 或 酸辣绿番茄沙拉',
				'fried clam or calamari fritti'
			],
			msg2ppdiv: ['以下菜单各一份', 'pico de gallo salsa or sour tomatillo salsa', '新鲜番茄沙拉 或 酸辣绿番茄沙拉', 'fried clam or calamari fritti'],
			msg3h2: '亮点',
			msg3p: ['每15分钟鲜制沙拉意面美味佛卡西披萨', ' 轻食主义者的上乘之选', '慢烤牛排/新西兰烤羊排与自助沙拉搭配 轻食少脂的健康理念', '出品优质的半自助式双人餐 ENJOY “11.11”限时闪购'],
			msg4h2: '温馨提示',
			msg4p: ['使用日期：2016.11.10-2017.1.30', '使用时间：周一至周日，16:00-21:30；', '特别提示：特殊节日及公众假日使用，请提前致电商家询问营业时间；', '餐厅不接受8人以上订位，可直接到店用餐；', '请提前1天预约；', '本产品支持随时退款；', '如需开具发票，请具体咨询商户；', '如有疑问，请联系 ENJOY 客服。电话：4008-909-511'],
			//		菜单
			msg5img: 'd_12.jpg',
			zc:'主餐',
			msg5divp1: [
				'（2选1)',
				'单人A餐',
				'慢烤 Morton 牛排（2份）',
				'单人B餐',
				'凯博烤羊排（700g 左右）'
			],
			lb:'自助',
			msg5divp2: [
				'（任选1）',
				'自助沙拉台',
				'自助汤品台',
				'自助主食台',
				'自助配料台',
				'自助甜品台',
				'自助水果台',
				'自助饮料台'		
			]
		},
		{
			shopID: 'shop1_3',
			navImgD: ['d_31.jpg',
				'd_32.jpg',
				'd_33.jpg',
				'd_34.jpg',
				'd_35.jpg',
				'd_36.jpg'
			],
			navImgS: ['dd_31.jpg',
				'dd_32.jpg',
				'dd_33.jpg',
				'dd_34.jpg',
				'dd_35.jpg',
				'dd_36.jpg'
			],
			msg1mh2: 'Corso Como ',
			msg1p1: '主厨打造意式美食嘉年华 10 Corso Como 1人晚餐',
			msg1p2: '郑州市郑东新区天泽街',
			msg1p3: '0371-65853828',
			msg1p4: '688元/位',
			msg1p4s: '¥688',
			msg2pb1: '1人晚餐',
			msg2pb2: '不可退餐',
			msg2h2: '菜单',
			msg2p: [
				'以下菜单各一份',
				'pico de gallo salsa or sour tomatillo salsa',
				'新鲜番茄沙拉 或 酸辣绿番茄沙拉',
				'fried clam or calamari fritti'
			],
			msg2ppdiv: ['以下菜单各一份', 'pico de gallo salsa or sour tomatillo salsa', '新鲜番茄沙拉 或 酸辣绿番茄沙拉', 'fried clam or calamari fritti'],
			msg3h2: '亮点',
			msg3p: ['使馆区追捧的热门餐厅', '每日新鲜烘焙纽约贝果', '高品质的新鲜食材 满足所有贝果狂热者', '丰盛贝果塔开启阳光周末 ENJOY独享7折'],
			msg4h2: '温馨提示',
			msg4p: ['使用日期：2016.11.4-2017.2.4；', '使用时间：周六周日，9:00-19:00；', '特别提示：特殊节日及公众假日使用，请提前致电商家询问营业时间；', '限量商品不享受其它优惠；', '高峰期建议提前预约；', '本产品支持随时退款；', '如需开具发票，请具体咨询商户；', '如有疑问，请联系 ENJOY 客服。电话：4008-909-511'],
			//		菜单
			msg5img: 'd_36.jpg',
			zc:'前菜',
			msg5divp1: [
				'（2选1)',				
				'Capesante olive e scamorza',
				'Scallop with olives and scamorza smoked cheese',
				'香煎澳带配黑橄榄碎和烟熏奶酪',
				'Lumache in vigna',
				'Snails with parsley sauce and garlic foam',
				'蜗牛，意大利芹汁和大蒜泡沫'
				
			],
			lb:'主食',
			msg5divp2: [
				'（任选1）',
				'Panisa ( risotto con salciccia e fagioli)',
				'Panisa ( risotto with sausage and beans)',
				'香肠和波罗帝豆烩饭'
				
			],
			zw:'主菜',
			msg5divp3: [
				'Maialino cotto 36 ore con verdure',
				'Suckling pig cooked 36 hours with vegatables',
				'36小时低温慢煮乳猪配蔬菜'
			],
			rr:'甜品',
			msg5divp4: [
				'（任选2）',
				'Dolci di Carnevale/Carnival sweets/甜点嘉年华'
			]
		},
		{
			shopID: 'shop1_4',
			navImgD: ['d_41.jpg',
				'd_42.jpg',
				'd_43.jpg',
				'd_44.jpg',
				'd_45.jpg',
				'd_46.jpg'
			],
			navImgS: ['dd_41.jpg',
				'dd_42.jpg',
				'dd_43.jpg',
				'dd_44.jpg',
				'dd_45.jpg',
				'dd_46.jpg'
			],
			msg1mh2: '远洋光华国际店',
			msg1p1: '让泰式酸辣唤醒沉睡周末  周末双人餐',
			msg1p2: '郑州市郑东新区天泽街',
			msg1p3: '0371-65853828',
			msg1p4: '188元／两位',
			msg1p4s: '¥188',
			msg2pb1: '双人午餐',
			msg2pb2: '随时退餐',
			msg2h2: '菜单',
			msg2p: [
				'以下菜单各一份',
				'pico de gallo salsa or sour tomatillo salsa',
				'新鲜番茄沙拉 或 酸辣绿番茄沙拉',
				'fried clam or calamari fritti'
			],
			msg2ppdiv: ['以下菜单各一份', 'pico de gallo salsa or sour tomatillo salsa', '新鲜番茄沙拉 或 酸辣绿番茄沙拉', 'fried clam or calamari fritti'],
			msg3h2: '亮点',
			msg3p: ['首次亮相的8道泰式风情菜肴', '京城食客挚爱', '获奖无数的新味泰餐厅', '多道独享特色菜肴 ENJOY 独享41折'],
			msg4h2: '温馨提示',
			msg4p: ['使用日期：2015.9.5-2016.11.30；', '使用时间：周六周日，9:00-19:00；', '特别提示：公众假日及特殊节假日用餐，请提前致电商家；', '本产品支持随时退款；','如需开具发票，请具体咨询商户；', '如有疑问，请联系 ENJOY 客服。电话：4008-909-511'],
			//		菜单
			msg5img: 'd_43.jpg',
			zc:'菜品',
			msg5divp1: [
				'草菇沙拉',
				'泰式猪肉碎蛋饼',
				'冬阴功汤（2碗）',
				'香辣青口贝',
				'（ENJOY 独享）',
				'冬阴功汤（2碗）',
				'清炒秋葵',
				'（ENJOY 独享）',
				'菠萝饭（1份）',
				
			],
			lb:'饮品',
			msg5divp2: [
				'（任选2款）',
				'辣红男西瓜汁',
				'绿女香茅青柠苏打',
				'PP SANGRIA',
				'PASSION FRUIT LEMONADE'
				
			],
			zw:'甜品',
			msg5divp3: [
				'（二选1）',
				'烤糯米香蕉',
				'辣椒巧克力慕斯'
			]
		},
		{
			shopID: 'shop1_5',
			navImgD: ['d_51.jpg',
				'd_52.jpg',
				'd_53.jpg',
				'd_54.jpg',
				'd_55.jpg',
				'd_56.jpg'
			],
			navImgS: ['dd_51.jpg',
				'dd_52.jpg',
				'dd_53.jpg',
				'dd_54.jpg',
				'dd_55.jpg',
				'dd_56.jpg'
			],
			msg1mh2: '尚水长廊',
			msg1p1: '一餐享用雪龙和牛等多种顶级食 尊享单人餐',
			msg1p2: '郑州市郑东新区天泽街',
			msg1p3: '0371-65853828',
			msg1p4: '450元／位',
			msg1p4s: '¥450',
			msg2pb1: '适合多人午餐',
			msg2pb2: '随时退餐',
			msg2h2: '菜单',
			msg2p: [
				'以下菜单各一份',
				'pico de gallo salsa or sour tomatillo salsa',
				'新鲜番茄沙拉 或 酸辣绿番茄沙拉',
				'fried clam or calamari fritti'
			],
			msg2ppdiv: ['以下菜单各一份', 'pico de gallo salsa or sour tomatillo salsa', '新鲜番茄沙拉 或 酸辣绿番茄沙拉', 'fried clam or calamari fritti'],
			msg3h2: '亮点',
			msg3p: ['高级别日式料理 让用餐成为奢华享受', '入口惊艳的美食体验', '菜品再升级', '十余道高级菜式全天可享 ENJOY 独享5折'],
			msg4h2: '温馨提示',
			msg4p: ['使用日期：2015.12.4-2017.1.5；', '使用时间：11:30-21:30；', '特别提示：特殊节日及公众假日使用，请提前致电商家询问营业时间；', '包间有限，如需独立包间请提前2天预约；', '餐厅营业时间：11:30-22:00；','如需开具发票，请具体咨询商户；', '如有疑问，请联系 ENJOY 客服。电话：4008-909-511'],
			//		菜单
			msg5img: 'd_53.jpg',
			zc:'前菜',
			msg5divp1: [
				'牛油果沙拉',
				'法式烤面包',
				'烤时令蔬菜'
				
			],
			lb:'主菜',
			msg5divp2: [
				'野生蓝鳍金枪鱼刺身',
				'雪龙和牛',
				'鲜扇贝（2只）',
				'鹅肝（50g）'
				
				
			],
			zw:'汤品',
			msg5divp3: [
				'松茸茶壶汤',
				'茶树菇清汤'
			],
			rr:'甜品',
			msg5divp4: [
				'铁板火焰红莓冰淇淋',
				'鲜榨果汁'
			]
		},
		{
			shopID: 'shop1_6',
			navImgD: ['d_61.jpg',
				'd_62.jpg',
				'd_63.jpg',
				'd_64.jpg',
				'd_65.jpg',
				'd_66.jpg'
			],
			navImgS: ['dd_61.jpg',
				'dd_62.jpg',
				'dd_63.jpg',
				'dd_64.jpg',
				'dd_65.jpg',
				'dd_66.jpg'
			],
			msg1mh2: '遥远西餐吧',
			msg1p1: 'La Taverne 周末单人 Brunch',
			msg1p2: '郑州市郑东新区天泽街',
			msg1p3: '0371-65853828',
			msg1p4: '138元／位',
			msg1p4s: '¥138',
			msg2pb1: '单人自助午餐',
			msg2pb2: '随时退餐',
			msg2h2: '菜单',
			msg2p: [
				'以下菜单各一份',
				'pico de gallo salsa or sour tomatillo salsa',
				'新鲜番茄沙拉 或 酸辣绿番茄沙拉',
				'fried clam or calamari fritti'
			],
			msg2ppdiv: ['以下菜单各一份', 'pico de gallo salsa or sour tomatillo salsa', '新鲜番茄沙拉 或 酸辣绿番茄沙拉', 'fried clam or calamari fritti'],
			msg3h2: '亮点',
			msg3p: ['多道法式料理，', '在周末享受丰富早午餐', '15年从厨经验的法国经理携团队坐镇', '在法国人中大受欢迎的家庭料理'],
			msg4h2: '温馨提示',
			msg4p: ['使用日期：2015.9.27-2016.12.31；', '使用时间：周六周日，11:30-15:00；', '特别提示：特殊节日及公众假日使用，请提前致电商家询问营业时间；', '请提前1天预约；', '高峰期建议提前预约；', '本产品支持随时退款；', '如需开具发票，请具体咨询商户；', '如有疑问，请联系 ENJOY 客服。电话：4008-909-511'],
			//		菜单
			msg5img: 'd_63.jpg',
			zc:'菜单',
			msg5divp1: [
				'普通咖啡或茶（可续杯）',
				'Regular coffee with/without milk, or tea（free flow)',
				'橙汁 25 cl',
				'orange juice 25 cl',
				'现烤面包，黄油',
				'French traditional bread and butter',
				'炒鸡蛋或单面煎蛋',
				'Scrambled egg or sunny-side-up egg & toast',
				'煎培根',
				'Grilled rasher bacon',
				'早餐肠',
				'Breakfast grilled sausages',
				'蒜香烤番茄',
				'Baked tomato',
				'土豆饼',
				'Hash brown potatoes',
				'煎饼',
				'Pancake',
				'鲜果沙拉',
				'Fresh seasonal fruits salad',
				'蜂蜜，酸奶',
				'Plain yoghurt and honey'
			],
			lb:'赠送小拼盘',
			msg5divp2: [
				'香草三文鱼',
				'Dill marineted salmon',
				'法式奶酪',
				'french cheeses',
				'香肠拼盘',
				'Assortment of cold-cut',
				'时蔬沙拉',
				'Mixed salad, french shallot dressing'
				
				
			]
		},{
			shopID: 'shop1_7',
			navImgD: ['d_71.jpg',
				'd_72.jpg',
				'd_73.jpg',
				'd_74.jpg',
				'd_75.jpg',
				'd_76.jpg'
			],
			navImgS: ['dd_71.jpg',
				'dd_72.jpg',
				'dd_73.jpg',
				'dd_74.jpg',
				'dd_75.jpg',
				'dd_76.jpg'
			],
			msg1mh2: '苗家香 石榴小栈新品',
			msg1p1: '酸汤猪蹄锅2-3人餐',
			msg1p2: '郑州市郑东新区天泽街',
			msg1p3: '0371-65853828',
			msg1p4: '215元／每份',
			msg1p4s: '¥215',
			msg2pb1: '适合三到四人聚餐',
			msg2pb2: '随时退餐',
			msg2h2: '菜单',
			msg2p: [
				'以下菜单各一份',
				'pico de gallo salsa or sour tomatillo salsa',
				'新鲜番茄沙拉 或 酸辣绿番茄沙拉',
				'fried clam or calamari fritti'
			],
			msg2ppdiv: ['以下菜单各一份', 'pico de gallo salsa or sour tomatillo salsa', '新鲜番茄沙拉 或 酸辣绿番茄沙拉', 'fried clam or calamari fritti'],
			msg3h2: '亮点',
			msg3p: ['养生滋补不二选 初秋应时小宴', '酸香高汤熬煮肥嫩猪蹄 最温暖的味觉搭配', '小店面营造私房食堂的雅致', '石榴小栈 初秋养生新品「酸汤猪蹄锅」 ENJOY 独享85折'],
			msg4h2: '温馨提示',
			msg4p: ['使用日期：2015.9.6-2016.12.1；', '使用时段：周一至周日，11:30-14:30 ，17:30-22:30；', '特别提示：特殊节日及公众假日使用，请提前致电商家询问营业时间；', '限量商品不享受其它优惠；', '高峰期建议提前预约；', '本产品支持随时退款；', '如需开具发票，请具体咨询商户；', '如有疑问，请联系 ENJOY 客服。电话：4008-909-511'],
			//		菜单
			msg5img: 'd_73.jpg',
			zc:'菜单',
			msg5divp1: [
				'手工猪肉丸',
				'酸汤猪蹄锅',
				'豆腐皮',
				'土豆片',
				'蔬菜拼盘',
				'酥小排',
				'冰粉'
			]
		},
		{
			shopID: 'shop1_8',
			navImgD: ['d_81.jpg',
				'd_82.jpg',
				'd_83.jpg',
				'd_84.jpg',
				'd_85.jpg',
				'd_86.jpg'
			],
			navImgS: ['dd_81.jpg',
				'dd_82.jpg',
				'dd_83.jpg',
				'dd_84.jpg',
				'dd_85.jpg',
				'dd_86.jpg'
			],
			msg1mh2: '郑州专业日式丼',
			msg1p1: '肉入魂 · 烧肉丼饭专卖铺单人餐',
			msg1p2: '郑州市郑东新区天泽街',
			msg1p3: '0371-65853828',
			msg1p4: '78元／位',
			msg1p4s: '¥78',
			msg2pb1: '午餐',
			msg2pb2: '随时退餐',
			msg2h2: '菜单',
			msg2p: [
				'以下菜单各一份',
				'pico de gallo salsa or sour tomatillo salsa',
				'新鲜番茄沙拉 或 酸辣绿番茄沙拉',
				'fried clam or calamari fritti'
			],
			msg2ppdiv: ['以下菜单各一份', 'pico de gallo salsa or sour tomatillo salsa', '新鲜番茄沙拉 或 酸辣绿番茄沙拉', 'fried clam or calamari fritti'],
			msg3h2: '亮点',
			msg3p: ['者火团队的又一力作 高级日式烧肉丼饭专门店', '进口 M7-9级澳洲和牛', '遇上美味日式丼', '新店首发抢先尝 ENJOY 独享78折'],
			msg4h2: '温馨提示',
			msg4p: ['使用日期：2016.7.25-2017.1.25；', '使用时间：周一至周五，11:30-14:00，17:30-21:30，周六周日，11:30-21:30；', '特别提示：特殊节日及公众假日使用，请提前致电商家询问营业时间；', '高峰期可能需要等位；', '高峰期建议提前预约；', '本产品支持随时退款；', '如需开具发票，请具体咨询商户；', '如有疑问，请联系 ENJOY 客服。电话：4008-909-511'],
			//		菜单
			msg5img: 'd_83.jpg',
			zc:'主食',
			msg5divp1: [
				'（3选1)',
				'黑毛牛小排兄弟丼',
				'和牛肥腹肉山丼',
				'和牛寿喜烧丼'
			],
			lb:'蛋料理',
			msg5divp2: [
				'温泉蛋',
				'茶鸡蛋'
				
				
			],
			zw:'吸物',
			msg5divp3: [
				'诚意味噌汤',
				'苦瓜味清汤'
				
			],
			rr:'甜品',
			msg5divp4: [
				'自制杏仁豆腐',
				'奶油泡芙'
				
			]
		},
		{
			shopID: 'shop1_9',
			navImgD: ['d_91.jpg',
				'd_92.jpg',
				'd_93.jpg',
				'd_94.jpg',
				'd_95.jpg',
				'd_96.jpg'
			],
			navImgS: ['dd_91.jpg',
				'dd_92.jpg',
				'dd_93.jpg',
				'dd_94.jpg',
				'dd_95.jpg',
				'dd_96.jpg'
			],
			msg1mh2: '八剑传',
			msg1p1: '单人午餐',
			msg1p2: '郑州市郑东新区天泽街',
			msg1p3: '0371-65853828',
			msg1p4: '40元／位',
			msg1p4s: '¥40',
			msg2pb1: '单人自助午餐',
			msg2pb2: '随时退餐',
			msg2h2: '菜单',
			msg2p: [
				'以下菜单各一份',
				'pico de gallo salsa or sour tomatillo salsa',
				'新鲜番茄沙拉 或 酸辣绿番茄沙拉',
				'fried clam or calamari fritti'
			],
			msg2ppdiv: ['以下菜单各一份', 'pico de gallo salsa or sour tomatillo salsa', '新鲜番茄沙拉 或 酸辣绿番茄沙拉', 'fried clam or calamari fritti'],
			msg3h2: '亮点',
			msg3p: ['多款招牌面类/饭类定食可选', '更有甜品与软饮的超值搭配', '日本人气超高日料店 将美味带至三里屯', '10余种招牌定食随心选 ENJOY 独享甜品及软饮相赠'],
			msg4h2: '温馨提示',
			msg4p: ['使用日期：2016.8.17-2016.11.17；', '使用时段：周一至周日，11:30-13:30；', '特别提示：特殊节日及公众假日使用，请提前致电商家询问营业时间；', '限量商品不享受其它优惠；', '高峰期建议提前预约；', '本产品支持随时退款；', '如需开具发票，请具体咨询商户；', '如有疑问，请联系 ENJOY 客服。电话：4008-909-511'],
			//		菜单
			msg5img: 'd_93.jpg',
			zc:'饭类定食',
			msg5divp1: [
				'（6选1)',
				'猪肉生姜烧定食',
				'炸猪排定食',
				'石锅咖喱定食',
				'三文鱼盖饭',
				'照烧鸡腿肉盖饭',
				'山药泥鸡圆子盖饭',
				
			],
			lb:'面类定食',
			msg5divp2: [
				'（7选1）',
				'炒乌冬面',
				'酱油拉面',
				'味增拉面',
				'猪骨拉面',
				'日式乌冬面',
				'咖喱乌冬面',
				'清汤牛肉乌冬面',
				'*两款套餐内均包含小菜及什锦饭*'
			],
			zw:'独享礼遇',
			msg5divp3: [
				'【软饮】',
				'（橙汁/西柚汁/可乐/干姜水/乌龙茶/可尔必思，任选1款）',
				'【甜品】',
				'（冰淇淋球1个，有抹茶/香草/草莓/柠檬，4种口味任选1种）'
			]
		},
		{
			shopID: 'shop1_10',
			navImgD: ['d_101.jpg',
				'd_102.jpg',
				'd_103.jpg',
				'd_104.jpg',
				'd_105.jpg',
				'd_106.jpg'
			],
			navImgS: ['dd_101.jpg',
				'dd_102.jpg',
				'dd_103.jpg',
				'dd_104.jpg',
				'dd_105.jpg',
				'dd_106.jpg'
			],
			msg1mh2: '五口人气锅',
			msg1p1: '炉端烧日式锅物双人餐炭匠',
			msg1p2: '郑州市郑东新区天泽街',
			msg1p3: '0371-65853828',
			msg1p4: '238元／两位',
			msg1p4s: '¥238',
			msg2pb1: '双人午餐',
			msg2pb2: '随时退餐',
			msg2h2: '菜单',
			msg2p: [
				'以下菜单各一份',
				'pico de gallo salsa or sour tomatillo salsa',
				'新鲜番茄沙拉 或 酸辣绿番茄沙拉',
				'fried clam or calamari fritti'
			],
			msg2ppdiv: ['以下菜单各一份', 'pico de gallo salsa or sour tomatillo salsa', '新鲜番茄沙拉 或 酸辣绿番茄沙拉', 'fried clam or calamari fritti'],
			msg3h2: '亮点',
			msg3p: ['从人气热卖「寿喜锅」到新品「辣味牛排锅」', ' 多达5款丰富好料的日式锅物选择', '明净敞亮的餐厅环境 仿佛“楼中花园”的高级日料地', '选择丰富的锅物双人餐 ENJOY 独享41折'],
			msg4h2: '温馨提示',
			msg4p: ['使用日期：2016.10.27-2017.1.27；', '使用时间：周一至周五 17:30-22:00，周六周日 11:30-22:00；', '特别提示：特殊节日及公众假日使用，请提前致电商家询问营业时间；', '请至少提前半天预约；', '高峰期建议提前预约；', '本产品支持随时退款；', '如需开具发票，请具体咨询商户；', '如有疑问，请联系 ENJOY 客服。电话：4008-909-511'],
			//		菜单
			msg5img: 'd_103.jpg',
			zc:'锅物',
			msg5divp1: [
				'(5选1)',
				'豆乳锅',
				'咖喱牛肉火锅',
				'辣味牛排锅',
				'牛肠锅',
				'寿喜锅',
				'* 任选1款锅物均配乌冬面1份'

			],
			lb:'前菜',
			msg5divp2: [
				'一品海藻',
				'辣味海螺',
				'胡麻豆腐',
				'和风沙拉（1份）'
				
				
			],
			zw:'拼盘',
			msg5divp3: [
				'三文鱼',
				'金枪鱼',
				'甜虾'
			],
			rr:'炸、烤物',
			msg5divp4: [
				'（各1份）',
				'碳烤金线鱼',
				'银杏',
				'大虾白薯天妇罗（1份）'
			]
		},
		{
			shopID: 'shop11_11',
			navImgD: ['d_111.jpg',
				'd_112.jpg',
				'd_113.jpg',
				'd_114.jpg',
				'd_115.jpg',
				'd_116.jpg'
			],
			navImgS: ['dd_111.jpg',
				'dd_112.jpg',
				'dd_113.jpg',
				'dd_114.jpg',
				'dd_115.jpg',
				'dd_116.jpg'
			],
			msg1mh2: '威士忌美食之旅',
			msg1p1: ' Sunday   Brunch',
			msg1p2: '郑州市郑东新区天泽街',
			msg1p3: '0371-65853828',
			msg1p4: '358元／份',
			msg1p4s: '¥358',
			msg2pb1: '午餐',
			msg2pb2: '不可退餐',
			msg2h2: '菜单',
			msg2p: [
				'以下菜单各一份',
				'pico de gallo salsa or sour tomatillo salsa',
				'新鲜番茄沙拉 或 酸辣绿番茄沙拉',
				'fried clam or calamari fritti'
			],
			msg2ppdiv: ['以下菜单各一份', 'pico de gallo salsa or sour tomatillo salsa', '新鲜番茄沙拉 或 酸辣绿番茄沙拉', 'fried clam or calamari fritti'],
			msg3h2: '亮点',
			msg3p: ['私密体验  尊贵独享', '尊邸行政总厨呈上多国美食', '尊尼获加 Blue Label 顶级醇酿', '隐秘尊邸 ENJOY 限量尊享'],
			msg4h2: '温馨提示',
			msg4p: ['使用日期：2016.1.31-2017.8.31；', '使用时段：周日 11:30-15:00；', '特殊节日及公共节假日，本产品不可使用；', '每周仅限量招待20位贵客，如无预约，恕不接待；购买后请尽快致电餐厅预约，并在致电预约时告知 ENJOY 消费码，预定后不可取消；', '每周一不接受预定；', '温馨提示：未满18岁禁止入内；'],
			//		菜单
			msg5img: 'd_113.jpg',
			zc:'主菜',
			msg5divp1: [
				'（任选其一 choose one course from below)',
				'尊尼获加早餐',
				'切片培根,烟熏焗豆, 英式早餐肠, 威士忌烤蘑菇, 水波蛋和土豆饼',
				'文蛤意大利面配辣椒, 大蒜, 新鲜香草和烤法棒',
				'传统印度皇家早餐',
				'茶熏鳕鱼, 黄油, 秘制香料和鹌鹑蛋',
				'古老也芝士,小葱蛋奶酥,蛋奶酥,配低温烹制鸭腿,云南 鲜菇,鲜番茄和烤甜洋葱,埃及榛果香料粉',
				'安格斯菲力牛排配法式香草酱,薯条',
				'香煎多宝鱼配卷心菜土豆泥,烟熏黄油芦笋和水芹'
				
			],
			lb:'前菜',
			msg5divp2: [
				'自选',
				'（包含海鲜台）',
				'Buffet',
				'(including seafood station)'
				
			],
			zw:'甜品',
			msg5divp3: [
				'自选',
				'（包括现场精制 Eton Mess）',
				'Buffet',
				'(including onsite Eton Mess show)'
			],
			rr:'酒水',
			msg5divp4: [
				'（尊尼获加威士忌品鉴）',
				'Johnnie Walker whisky flight',
				'Or',
				'早午餐菜单内常规鸡尾酒2杯',
				'Or',
				'World Class 获奖作品 Blue Time 1杯'				
			]
		},
		{
			shopID: 'shop1_12',
			navImgD: ['d_121.jpg',
				'd_122.jpg',
				'd_123.jpg',
				'd_124.jpg',
				'd_125.jpg',
				'd_126.jpg'
			],
			navImgS: ['dd_121.jpg',
				'dd_122.jpg',
				'dd_123.jpg',
				'dd_124.jpg',
				'dd_125.jpg',
				'dd_126.jpg'
			],
			msg1mh2: '郑州人气餐厅的招牌菜单',
			msg1p1: '太古里店单人餐',
			msg1p2: '郑州市郑东新区天泽街',
			msg1p3: '0371-65853828',
			msg1p4: '40元／位',
			msg1p4s: '¥40',
			msg2pb1: '单人自助午餐',
			msg2pb2: '随时退餐',
			msg2h2: '菜单',
			msg2p: [
				'以下菜单各一份',
				'pico de gallo salsa or sour tomatillo salsa',
				'新鲜番茄沙拉 或 酸辣绿番茄沙拉',
				'fried clam or calamari fritti'
			],
			msg2ppdiv: ['以下菜单各一份', 'pico de gallo salsa or sour tomatillo salsa', '新鲜番茄沙拉 或 酸辣绿番茄沙拉', 'fried clam or calamari fritti'],
			msg3h2: '亮点',
			msg3p: ['别具一格的墙面设计 打造格调云南餐厅', '将招牌菜式汇入一单', '独家赏味的丰富菜式', '7款套餐任选1 ENJOY 独享的招牌单人菜单'],
			msg4h2: '温馨提示',
			msg4p: ['使用日期：2015.12.10-2017.2.28；', '使用时间：周一至周五，11:00-17:00；', '特别提示：特殊节日及公众假日使用，请提前致电商家询问营业时间；', '限量商品不享受其它优惠；', '高峰期建议提前预约；', '本产品支持随时退款；', '如需开具发票，请具体咨询商户；', '如有疑问，请联系 ENJOY 客服。电话：4008-909-511'],
			//		菜单 
			msg5img: 'd_123.jpg',
			zc:'40元套餐',
			msg5divp1: [
				'罐罐牛肉米线',
				'鸡枞虫草花',
				'香茅蜜烤翅',
				'野菜洋芋粑粑',
				'自制酸奶（原味）'
			],
			lb:'48元套餐',
			msg5divp2: [
				'【A】',
				'黑三剁/宣威洋芋鸡（2选1）',
				'金不换汽锅鸡',
				'鸡枞虫草花',
				'清炒圆白菜',
				'自制酸奶（原味）',
				'米饭、水果',
				'【B】',
				'黑三剁米线',
				'金不换汽锅鸡',
				'鸡枞虫草花',
				'清炒圆白菜',
				'【B】',
				'自制酸奶（原味）',
				'水果',
				'【C】',
				'蒙自过桥米线',
				'香茅蜜烤翅',
				'野菜洋芋粑粑',
				'自制酸奶（原味）',
				'水果'				
			],
			zw:'50元套餐',
			msg5divp3: [
				'无量山野菌烧肉',
				'金不换汽锅鸡',
				'鸡枞虫草花',
				'清炒圆白菜',
				'自制酸奶（原味）',
				'米饭、水果'
			]
		},
		{
			shopID: 'shop1_13',
			navImgD: ['d_131.jpg',
				'd_132.jpg',
				'd_133.jpg',
				'd_134.jpg',
				'd_135.jpg',
				'd_136.jpg'
			],
			navImgS: ['dd_131.jpg',
				'dd_132.jpg',
				'dd_133.jpg',
				'dd_134.jpg',
				'dd_135.jpg',
				'dd_136.jpg'
			],
			msg1mh2: '新西兰小伙寻遍世界找来的靠谱披萨',
			msg1p1: '单人午间自助',
			msg1p2: '郑州市郑东新区天泽街',
			msg1p3: '0371-65853828',
			msg1p4: '55元／位',
			msg1p4s: '¥55',
			msg2pb1: '单人自助午餐',
			msg2pb2: '可退餐',
			msg2h2: '菜单',
			msg2p: [
				'以下菜单各一份',
				'pico de gallo salsa or sour tomatillo salsa',
				'新鲜番茄沙拉 或 酸辣绿番茄沙拉',
				'fried clam or calamari fritti'
			],
			msg2ppdiv: ['以下菜单各一份', 'pico de gallo salsa or sour tomatillo salsa', '新鲜番茄沙拉 或 酸辣绿番茄沙拉', 'fried clam or calamari fritti'],
			msg3h2: '亮点',
			msg3p: ['寻遍世界只为一口靠谱比萨', '新西兰空运奶酪与绿色有机面粉齐叫板', '每日4款特色比萨 沙拉软饮不限量供应', 'ENJOY 用户独享餐后甜品'],
			msg4h2: '温馨提示',
			msg4p: ['拼单产品均不支持退款；', '使用日期：2015.08.10-2017.1.15；', '使用时段：周一至周五，11:30-14:00；', '限量商品不享受其它优惠；', '高峰期建议提前预约；', '本产品支持随时退款；', '如需开具发票，请具体咨询商户；', '如有疑问，请联系 ENJOY 客服。电话：4008-909-511'],
			//		菜单
			msg5img: 'd_133.jpg',
			zc:'披萨',
			msg5divp1: [
				'（每日任选4款随机供应）',
				'纽约经典比萨',
				'意大利比萨',
				'三杯茄子比萨',
				'意大利红肠比萨',
				'香蒜鸡块比萨',
				'BBQ 鸡块比萨',
				'夏威夷比萨',
				'香蒜菠菜豆腐比萨',
				'烤南瓜红薯比萨'

			],
			lb:'沙拉',
			msg5divp2: [
				'（每日任选3款随机供应）',
				'低盐希腊沙拉',
				'凯撒沙拉',
				'叫板特色沙拉',
				'烤蔬菜沙拉'
				
			],
			zw:'软饮',
			msg5divp3: [
				'（不限量）',
				'红茶',
				'可乐'
			],
			rr:'独享赠品',
			msg5divp4: [
				'蛋挞1只'
				
			]
		},
		{
			shopID: 'shop1_14',
			navImgD: ['d_141.jpg',
				'd_142.jpg',
				'd_143.jpg',
				'd_144.jpg',
				'd_145.jpg',
				'd_146.jpg'
			],
			navImgS: ['dd_141.jpg',
				'dd_142.jpg',
				'dd_143.jpg',
				'dd_144.jpg',
				'dd_145.jpg',
				'dd_146.jpg'
			],
			msg1mh2: '索兰至餐厅',
			msg1p1: '单人沙拉自助',
			msg1p2: '郑州市郑东新区天泽街',
			msg1p3: '0371-65853828',
			msg1p4: '105元／两位',
			msg1p4s: '¥105',
			msg2pb1: '单人沙拉自助',
			msg2pb2: '可退餐',
			msg2h2: '菜单',
			msg2p: [
				'以下菜单各一份',
				'pico de gallo salsa or sour tomatillo salsa',
				'新鲜番茄沙拉 或 酸辣绿番茄沙拉',
				'fried clam or calamari fritti'
			],
			msg2ppdiv: ['以下菜单各一份', 'pico de gallo salsa or sour tomatillo salsa', '新鲜番茄沙拉 或 酸辣绿番茄沙拉', 'fried clam or calamari fritti'],
			msg3h2: '亮点',
			msg3p: ['每半小时更换食材 新鲜美味选择多样', '中国第一家有机自助沙拉吧', '轻食少脂的健康理念', '赠送美式手工曲奇礼盒 ENJOY 独享82折'],
			msg4h2: '温馨提示',
			msg4p: ['使用日期：2016.3.17-2017.1.30；', '使用时间：周一至周日，11:00-21:30；', '特别提示：特殊节日及公众假日使用，请提前致电商家询问营业时间；', '限量商品不享受其它优惠；', '高峰期建议提前预约；', '本产品支持随时退款；', '如需开具发票，请具体咨询商户；', '如有疑问，请联系 ENJOY 客服。电话：4008-909-511'],
			//		菜单
			msg5img: 'd_143.jpg',
			zc:'单人自助',
			msg5divp1: [
				'自助沙拉台',
				'自助汤品台',
				'自助主食台',
				'自助配料台',
				'自助甜品台',
				'自助水果台',
				'自助饮料台'
				
			],
			lb:'独享礼遇',
			msg5divp2: [
				'美国手工大曲奇礼盒'
				
				
			]
		},
		{
			shopID: 'shop1_15',
			navImgD: ['d_151.jpg',
				'd_152.jpg',
				'd_153.jpg',
				'd_154.jpg',
				'd_155.jpg',
				'd_156.jpg'
			],
			navImgS: ['dd_151.jpg',
				'dd_152.jpg',
				'dd_153.jpg',
				'dd_154.jpg',
				'dd_155.jpg',
				'dd_156.jpg'
			],
			msg1mh2: '星级酒店寻味广式餐',
			msg1p1: '周末点心自助',
			msg1p2: '郑州市郑东新区天泽街',
			msg1p3: '0371-65853828',
			msg1p4: '106元／位',
			msg1p4s: '¥106',
			msg2pb1: '单人自助午餐',
			msg2pb2: '可退餐',
			msg2h2: '菜单',
			msg2p: [
				'以下菜单各一份',
				'pico de gallo salsa or sour tomatillo salsa',
				'新鲜番茄沙拉 或 酸辣绿番茄沙拉',
				'fried clam or calamari fritti'
			],
			msg2ppdiv: ['以下菜单各一份', 'pico de gallo salsa or sour tomatillo salsa', '新鲜番茄沙拉 或 酸辣绿番茄沙拉', 'fried clam or calamari fritti'],
			msg3h2: '亮点',
			msg3p: ['传统与现代 古老与创意并进的酒店中餐厅', '让周末在丰富美肴中开始', '数十款中式点心与料理无限享', '百元星级点心畅享 ENJOY 独享63折'],
			msg4h2: '温馨提示',
			msg4p: ['使用日期：2016.10.22-2016.12.31；', '使用时间：周六周日，11:30-14:30；', '除外日期：圣诞节、元旦、春节期间，本产品不可使用；', '限量商品不享受其它优惠；', '高峰期建议提前预约；', '本产品支持随时退款；', '如需开具发票，请具体咨询商户；', '如有疑问，请联系 ENJOY 客服。电话：4008-909-511'],
			//		菜单
			msg5img: 'd_13.jpg',
			zc:'主食',
			msg5divp1: [
				'扬州炒饭',
				'干炒牛肉河粉',
				'干烧伊面',
				'叉烧汤面'
				
			],
			lb:'热菜',
			msg5divp2: [
				'菠萝咕噜鸡',
				'草菇芥蓝牛柳',
				'椒盐脆皮豆腐'
				
				
			],
			zw:'汤类',
			msg5divp3: [
				'菜胆炖野菌',
				'蟹籽粟米羹',
				'传统酸辣汤'
			],
			rr:'甜点',
			msg5divp4: [
				'岭南鸡蛋挞',
				'蜂蜜龟苓膏',
				'蜜汁叉烧酥',
				'杨枝甘露',
				'椰汁西米露'
				


			]
		}
		].forEach((u) => {
			shopdata.create(u, (err, datas) => {
				if(err) {
					throw new Error('创建用户失败!')
				}
				console.log('添加用户' + datas.navImgD + '成功！')
			})
		})
	}
})

router.get('/detailpg/:shop', (req, res) => {
	console.log(req.params.shop)
	shopdata.find((err, datas) => {
		if(err) {
			throw new Error('001')
		};
		datas.forEach((u) => {

			if(req.params.shop == u.shopID) {

				res.render('DetailPages', {
					layout: 'layout',
					datas: u
				});
			}
		})
	})
})
module.exports = router;