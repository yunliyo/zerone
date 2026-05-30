// 存储 nuxt.config 和 app.config 共用的配置

import type { NitroConfig } from 'nitropack'

const author = {
	name: '韵狸',
	avatar: '/icon.png',
	email: 'yunliyo@foxmail.com',
	homepage: 'https://www.liqiang.info',
}

export interface Friend {
	name: string
	desc: string
	url: string
	avatar?: string
}

const friends: Friend[] = [
	{ name: '芋泥椰子冻', desc: '林雨夜，芋椰，椰椰', url: 'https://lyy0323.space/', avatar: 'https://lyy0323.space/writing/favicon.png' },
	{ name: '缺月正西窗', desc: '只管此时拥抱，无须别后回眸。', url: 'https://www.52shici.com/space.php?mem_id=2146', avatar: 'https://www.52shici.com/upload/member/2146.jpg' },
	{ name: '沐清公子', desc: '纵使千年铁门槛，终需一个土馒头', url: 'https://www.52shici.com/space.php?mem_id=30837', avatar: 'https://www.52shici.com/upload/member/30837.jpg' },
	{ name: '有司', desc: '秋风一夜庭梧老，客散蛩喧我自眠。', url: 'https://www.52shici.com/space.php?mem_id=30339', avatar: 'https://www.52shici.com/css/img/face.gif' },
	{ name: '楚凌岚', desc: '灿烂而冷若冰霜。', url: 'https://weibo.com/84811494', avatar: 'https://fass.nus.edu.sg/cs-chinese/wp-content/uploads/sites/26/2020/10/Li-Fanghua-2048x2048.jpg' },
	{ name: '雪窗', desc: '陶冶性灵存底物，新诗改罢自长吟。', url: 'https://weibo.com/u/2005188463', avatar: 'https://t10.baidu.com/it/fm=173&fmt=auto&h=897&img_JPG=&s=9918A35F4AA17317638491A40300E020&u=3622207257%2C1222170719&w=640' },
	{ name: '穆野霜泉', desc: '静穆、自由、悲悯、关怀', url: 'https://muyesq.cn/', avatar: 'https://muyesq.cn/favicon-32x32.png' },
	{ name: '蝉时雨', desc: '蝉鸣如雨 花宵道中', url: 'https://shiyu.me/', avatar: 'https://avatars.githubusercontent.com/u/22583039?v=4' },
	{ name: 'ihewro', desc: '白马入芦花，银碗里盛雪。', url: 'https://www.ihewro.com/', avatar: 'https://avatars.githubusercontent.com/u/20165605?v=4' },
	{ name: 'Alan', desc: '每个人都是月亮，总有一个阴暗面，从来不让人看见。', url: 'https://www.toalan.com/', avatar: 'https://avatars.githubusercontent.com/u/58797776?v=4' },
	{ name: 'Sukka', desc: '童话只美在真实却从不续写', url: 'https://blog.skk.moe/', avatar: 'https://cdn.skk.moe/favicon.ico' },
	{ name: 'Auriel', desc: '生活的最佳状态，是冷冷清清的风风火火。', url: 'https://blog.auriel.top/', avatar: 'https://blog.auriel.top/img/avatar.png' },
	{ name: 'xiaoz', desc: '希望我的分享，能为你带来价值。', url: 'https://blog.xiaoz.org/', avatar: 'https://img.rss.ink/imgs/2024/03/29/9efff235952f170a.jpg' },
	{ name: '维燕的数字花园', desc: 'BioIT 爱好者，沉淀生活，记录点滴。', url: 'https://shenwy.com/', avatar: 'https://shenwy.com/assets/logo.png' },
	{ name: 'Blokura', desc: '一个对二次元和电子科技感兴趣的咸鱼', url: 'https://www.caixiaojing.com/', avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=2913434936&spec=640' },
	{ name: '云游君', desc: '希望能成为一个有趣的人', url: 'https://www.yunyoujun.cn', avatar: 'https://www.yunyoujun.cn/images/avatar.jpg' },
	{ name: '麋鹿鲁哟', desc: '大道至简，知易行难。', url: 'https://miluluyo.github.io/vdoingBlog', avatar: 'https://miluluyo.github.io/vdoingBlog/img/tx.jpg' },
	{ name: "Evan's blog", desc: 'web前端小学生', url: 'https://xugaoyi.com/', avatar: 'https://xugaoyi.com/img/logo.png' },
	{ name: 'zyyo', desc: '分享与记录', url: 'https://zyyo.net/', avatar: 'https://q1.qlogo.cn/g?b=qq&nk=3509679579&s=5' },
	{ name: '纸鹿本鹿', desc: '纸鹿至麓不知路，支炉制露不止漉', url: 'https://blog.zhilu.site/', avatar: 'https://www.zhilu.site/api/avatar.png' },
	{ name: 'idealclover', desc: 'Stay simple, stay naive.', url: 'https://idealclover.top/', avatar: 'https://image.idealclover.cn/blog/assets/icon.png' },
	{ name: 'ViKi', desc: '大道至简。', url: 'https://blog.viki.moe/', avatar: 'https://blog.viki.moe/avatar.png' },
	{ name: '王烨', desc: '解密文档技术，精研技术写作，评说行业百态。', url: 'https://www.tcblabber.cn/', avatar: 'https://www.tcblabber.cn/favicon.ico' },
	{ name: '重庆城管职院', desc: '重庆城市管理职业学院', url: 'https://www.cqc.edu.cn/', avatar: 'https://www.cswu.cn/_upload/article/images/3b/dc/1d40eef14ae6bd954a67b3e1dad1/e4667539-a310-4208-b145-c71758f8a4b8.jpg' },
	{ name: '南洋吟游', desc: '上海交通大学国学社', url: 'https://sjtuguoxue.space/', avatar: 'https://sjtuguoxue.space/static/favicon.ico' },
]

const homepageConfig = {
	title: '韵狸',
	subtitle: '过眼溪山，旧时曾识',
	description: '一个热爱诗词书画的程序员',
	author,
	language: 'zh-CN',
	timeZone: 'Asia/Shanghai',
	favicon: '/icon.png',
	url: 'https://im.liqiang.info',
	blogAtom: 'https://blog.liqiang.info/atom.xml',
	friends,
}

// https://nitro.build/config#routerules
export const routeRules: NitroConfig['routeRules'] = {
	'/api/avatar.png': { redirect: author.avatar },
	'/api/icon.png': { redirect: homepageConfig.favicon },
	'/favicon.ico': { redirect: homepageConfig.favicon },
}

export default homepageConfig
