---
sidebar: false
aside: false
lastUpdated: false
prev: false
next: false
---

<div class="time-line">
  <div class="process" v-for="({ date, company, desc }, index) in process" :key="index">
    <div class="date">{{ date }}</div>
    <div class="card">
      <div class="title">{{ company }}</div>
      <div class="body">
        <details>
          <summary>展开</summary>
          <div class="pre-line">{{ desc }}</div>
        </details>
      </div>
    </div>
  </div>
</div>

<script setup>
import { reactive } from 'vue'

const process = reactive([
  {
    date: '2019-11',
    company: '萤火控股',
    desc: `大三下学期开始实习了，去了一家初创公司（萤火控股）。一个前端一个后端，那个前端就是我 哈哈哈。\r\n
          那年疫情刚开始，居家办公了几个月（可以说居家耍 嘿嘿）；等疫情好转了一些，准备过去，告诉我不用来了 😭。有趣的是没过几周就打电话给我说东西没做对(自己对技术狗求不懂)？我可是按照他们给的设计图来的，现在在不要我的情况下要我重新搞(啊？不可能 绝对不可能 直接不答应。真是搞笑，没见过这样的人 🐕‍🦺)。最后商量还是按之前上班来🙄（白嫖几个月工资还是可以，随便给他搞搞）。`
  },
  {
    date: '2020-07(毕业🎓)',
    company: '新中通供应链',
    desc: `大学毕业，重新找了一家公司，做医疗系统的。一个前端两个后端，没错，那个前端还是我 🤣。\r\n
          这家公司挺好耍的，去的第二周就跟着出差了，去了川西那边，风景是真不错；翻了折多山，遇到大雪封路，随便找了家旅店，睡的人家客厅🤦，冷的要命；路过了新都桥，摄影天堂，赶时间就没去，还看见了牦牛；在那边待了几个月，天天跟着医院的人到处下乡蹭吃蹭喝，真好🌼。挺怀念那段时光的，喜欢在外面跑的感觉。路上还出了车祸，得亏是在隧道 险😨 不细说。`
  },
  {
    date: '2021-03',
    company: '旺旺集团',
    desc: `随我舅来上海开始沪漂了(他倒是在上海安家了 我还漂着呢😭)；\r\n
          没到两周就找到了工作，入职了旺旺。团队还是比较完善，前端后端差不多都在 9 个左右，最开始写 H5，后来写后台了。\r\n
          吐槽：\r\n
          管理后台的代码是真的 💩 山 💩 山 💩 山；有个写后台的技术真的很啦，而且还不会调 Css 样式🤔，这不是必备的吗？不给涨工资，员工噩梦啊！怪不得留不住人。`
  },
  {
    date: '2024-03',
    company: '美团(外包)',
    desc: `大环境下，工作越来越不好找（hotWord 前端已死），更别说是大专了 😟，最终还是去了外包。`
  }
])
</script>

<style lang="scss">
.time-line {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: max-content;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 4px;
    height: 100%;
    transform: translateX(-50%) scaleX(0.8);
    border-radius: 3px;
    background-color: var(--vp-c-bg-soft);
  }
}
.process {
  width: 45%;
  max-width: 520px;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
  &:nth-child(odd) {
    transform: translateX(55%);
    .card::after {
      left: -5%;
      transform: translate(-50%, -50%);
    }
  }
  &:nth-child(even) {
    transform: translateX(-55%);
    .date {
      text-align: right;
    }
    .card::after {
      right: -5%;
      transform: translate(50%, -50%);
    }
  }
}
.date {
  color: #999;
  line-height: 1;
  margin-bottom: 12px;
}
.card {
  position: relative;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, .06);
  padding: 15px;
  background-color: var(--vp-c-bg-soft);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .01),
              0 3px 6px 3px rgba(0, 0, 0, .01),
              0 2px 6px 0 rgba(0, 0, 0, .03);
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    z-index: 9;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: translate(0, -50%);
    background-image: radial-gradient(#fff 40%, var(--vp-c-brand-1) 40%, #fff 80%);
  }
  .title {
    line-height: 22px;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 8px;
  }
  .pre-line {
    white-space: pre-line;
  }
}
</style>
