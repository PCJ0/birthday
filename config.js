// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "最棒的垚垚",  // 同上...
        "今天是你的生日",
        "也是我陪你过的第一个生日",
        "现在回头想想",
        "我们认识虽然不久",
        "见面次数也不是很多",
        "但还是发生了好多好多快乐的事情",
        "不知道你还记不记得",
        "这是我们第一次到你家楼下找你",
        "这是我们在欢乐谷当社牛",
        "这是那天晚上的月亮",
        "哦还有累到不行的大小姐",
        "这是我第一次吃到的发糕",
        "最后一天一起散步看到的月亮",
        "以及最后一次见到的垚垚",
        "最近肯定课程压力很大吧",
        "但我还是希望至少生日这天",
        "我们大小姐可以开开心心的过完",
        "一定要加油哦",
        "你要相信",
        "不管在哪里发生什么事了",
        "我们都肯定会在你身后支撑着你",
        "毕竟",
        "垚垚是最棒的！！",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "这是我们第一次到你家楼下找你": "./imgs/louxia.jpg",
        "这是我们在欢乐谷当社牛": "./imgs/sheniu.jpg",
        "这是那天晚上的月亮": "./imgs/yueliang.jpg",
        "哦还有累到不行的大小姐": "./imgs/lei.jpg",
        "这是我第一次吃到的发糕": "./imgs/fagao.jpg",
        "最后一天一起散步看到的月亮": "./imgs/yue.jpg",
        "以及最后一次见到的垚垚": "./imgs/zuihou.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
