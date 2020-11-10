<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, sIndex) in item" :key="sIndex">
                    <a :href="sub.id ? '/#/product/' + sub.id : 'javascript:;'"
                      ><img :src="sub.img || '/imgs/item-box-1.png'" />
                      {{ sub.name || "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper
          navigation
          :loop="true"
          :effect="swiperOption.effect"
          :autoplay="swiperOption.autoplay"
          :pagination="{ clickable: true }"
        >
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/' + item.id"><img :src="item.img"/></a>
          </swiper-slide>
        </swiper>
      </div>
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from "../components/ServiceBar";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectCube,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-cube/effect-cube.scss";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectCube]);
export default {
  name: "index",
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        autoplay: { delay: 3000, disableOnInteraction: false },
        effect: "cube",
      },
      slideList: [
        {
          id: 42,
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: 43,
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: 44,
          img: "/imgs/slider/slide-3.jpg",
        },
        {
          id: 45,
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: 46,
          img: "/imgs/slider/slide-5.jpg",
        },
      ],
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9",
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版",
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro",
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区",
          },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss">
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.index {
  .swiper-box {
    position: relative;
    .swiper-container {
      height: 451px;
      img {
        width: 100%;
        height: 100%;
      }
      .swiper-button-prev {
        left: 274px;
      }
    }
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0;
      background-color: #55585a7a;
      box-sizing: border-box;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            display: block;
            position: relative;
            &:after {
              content: "";
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
              vertical-align: middle;
              position: absolute;
              right: 30px;
              top: 17px;
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            ul {
              @include flex;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
                a {
                  color: $colorB;
                  font-size: 14px;
                  img {
                    vertical-align: middle;
                    width: 42px;
                    height: 35px;
                    margin-right: 15px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
