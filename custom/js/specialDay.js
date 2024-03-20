let specialDayTimer = null,
matter = "",
datatime = "";
const my_holiday = {
	"小淘气百天": "2010-12-06 00:00:00"
},
festivals = {
	"元旦": "2024-01-01",
	"春节": "2024-02-10",
	"清明节": "2024-04-04",
	"劳动节": "2024-05-01",
	"端午节": "2024-06-08",
	"中秋节": "2024-09-15",
	"国庆节": "2024-10-01",
};
function findFutureHolidays(e, t) {
	const a = new Date,
	n = {...e,
		...t
	},
	i = new Date(a).getTime();
	for (const e in n) {
		new Date(n[e]).getTime() > i && (matter = e, datatime = n[e])
	}
	return {
		name: "不知道什么日子",
		time: new Date(i + 7776e6).toISOString().split("T")[0]
	}
}
function getNextFestival() {
	let e = new Date;
	for (let t of festivals) {
		if (new Date(t.date) > e) return t
	}
	return null
}
findFutureHolidays(my_holiday, festivals);
var specialDay = () = >{
	if (clearTimeout(specialDayTimer), !document.querySelector("#specialDay")) return;
	let e;
	if (datatime && matter) e = new Date(datatime).getTime() / 1e3;
	else {
		let t = getNextFestival();
		if (!t) return "不知道什么日子";
		e = new Date(t.date).getTime() / 1e3,
		matter = t.name
	}
	let t = new Date(datatime).getTime() / 1e3,
	a = {
		0 : "周日",
		1 : "周一",
		2 : "周二",
		3 : "周三",
		4 : "周四",
		5 : "周五",
		6 : "周六"
	};
	function n(e) {
		return e > 9 ? e: "0" + e
	} !
	function e() {
		let i = new Date;
		document.querySelector("#specialDay .today").innerHTML = i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() + " " + a[i.getDay()];
		let l = t - Math.round(i.getTime() / 1e3);
		if (l < 0) document.querySelector("#specialDay .title").innerHTML = "已经过期了～",
		document.querySelector("#specialDay .specialDay-time").innerHTML = '<span class="happyspecialDay">需要重新设置</p>';
		else if (document.querySelector("#specialDay .title").innerHTML = "距离 <span> " + matter + "</span> 还剩：", l > 86400) document.querySelector("#specialDay .specialDay-time").innerHTML = ` < span class = "day" > $ {
			Math.ceil(l / 86400)
		} < span class = "unit" > 天 < /span></span > `;
		else {
			let t = n(parseInt(l / 3600));
			l %= 3600;
			let a = n(parseInt(l / 60));
			l %= 60;
			let i = n(l);
			document.querySelector("#specialDay .specialDay-time").innerHTML = ` < span class = "time" > $ {
				t
			}: $ {
				a
			}: $ {
				i
			} < /span></span > `,
			specialDayTimer = setTimeout(e, 1e3)
		}
	} (),
	jQuery(document).ready((function(e) {
		e("#specialDay").wpSuperSnow({
			flakes: ["https://img.pupper.cn/img/202307171658804.webp", "https://img.pupper.cn/img/202307171658100.webp", "https://img.pupper.cn/img/202307171659700.webp"],
			totalFlakes: "100",
			zIndex: "999999",
			maxSize: "30",
			maxDuration: "20",
			useFlakeTrans: !1
		})
	}))
};
document.addEventListener("pjax:complete", specialDay),
document.addEventListener("DOMContentLoaded", specialDay);