let obj = JSON.parse($response.body);

obj = {
  "wechat_pay" : {
    "price_month" : 0,
    "price_lifetime" : 0
  },
  "current_version_ios" : {
    "version_name" : "2.6.6",
    "release_note" : "全新棋路，全新服务！",
    "version_code" : 212,
    "download_url" : "https://mdevs.cn"
  },
  "current_version_android" : {
    "version_name" : "2.6.6",
    "release_note" : "全新棋路，全新服务！",
    "version_code" : 212,
    "download_url" : "https://mdevs.cn"
  },
  "ad_android" : {
    "ad_reward_video" : 0,
    "ad_splash" : 0
  },
  "ad_ios" : {
    "ad_reward_video" : 0,
    "ad_splash" : 0
  }
}
  
$done({body: JSON.stringify(obj)});
