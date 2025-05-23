.init-cover-layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99999;
    background: #f2f2f2
}

.init-cover-layer.remove {
    -webkit-animation: remove 1s ease-out 1s;
    animation: remove 1s ease-out 1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards
}

.init-cover-layer .layer-content {
    position: absolute;
    width: 200px;
    height: 200px;
    top: 50%;
    left: 50%;
    margin: -100px 0 0 -100px
}

.init-cover-layer .layer-content.fade-out {
    -webkit-animation: fadeOut .5s ease-in-out;
    animation: fadeOut .5s ease-in-out;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    display: none
}

.init-cover-layer .warning {
    position: absolute;
    top: 40px;
    left: 50%;
    width: 600px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background-color: #ff001d;
    margin-left: -300px
}

.init-cover-layer .spinner {
    width: 70px;
    height: 70px;
    background-color: #00bcd4;
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    line-height: 72px;
    text-align: center;
    margin: 50px auto 20px;
    border-radius: 2px;
    -webkit-animation: rotateplane 1.2s infinite ease-in-out;
    animation: rotateplane 1.2s infinite ease-in-out
}

.init-cover-layer .spinner span {
    display: block;
    width: 70px;
    height: 70px;
    line-height: 70px;
    text-align: center
}

.init-cover-layer .layer-loding {
    font-size: 18px;
    line-height: 24px;
    color: #666;
    text-align: center
}

.stop-animate {
    -webkit-transform: translateY(-100px);
    -ms-transform: translateY(-100px);
    transform: translateY(-100px);
    -webkit-transition: -webkit-transform .5s;
    transition: -webkit-transform .5s;
    transition: transform .5s;
    transition: transform .5s,-webkit-transform .5s
}

@-webkit-keyframes rotateplane {
    0% {
        -webkit-transform: perspective(120px)
    }

    50% {
        -webkit-transform: perspective(120px) rotateY(180deg)
    }

    to {
        -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg)
    }
}

@keyframes rotateplane {
    0% {
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
    }

    50% {
        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
    }

    to {
        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg)
    }
}

.cover-layer-top {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 40%;
    background-color: #f2f2f2
}

.cover-layer-bottom {
    height: 60%;
    background-color: #fff
}

.cover-layer-bottom,.cover-layer-center {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0
}

.cover-layer-center {
    top: 0
}

.cover-layer-center .book-name {
    font-size: 18px;
    font-weight: 700;
    color: #1e1e1e;
    height: 32px;
    line-height: 32px;
    text-align: center;
    margin-top: 8%
}

.cover-layer-center .caver-layer-img {
    width: 250px;
    height: 360px;
    margin: 30px auto;
    box-shadow: 4px 4px 12px rgba(0,0,0,.2);
    background-color: #fff
}

.cover-layer-center .caver-layer-img>img {
    display: block;
    width: 100%;
    height: 100%
}

.caver-layer-loader {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 26px;
    box-sizing: border-box;
    border-radius: 16px;
    padding: 6px;
    background: #eee
}

.caver-layer-loader:before {
    content: '';
    position: absolute;
    border-radius: 16px;
    width: 24px;
    height: 14px;
    left: 0;
    background: #21a5f1;
    -webkit-animation: push 1.2s infinite linear;
    animation: push 1.2s infinite linear
}

@-webkit-keyframes push {
    50% {
        left: 76px
    }
}

@keyframes push {
    50% {
        left: 76px
    }
}

.top-bar-container {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 60px;
    box-shadow: 1px 1px 2px rgba(0,0,0,.1),0 1px 2px rgba(0,0,0,.1);
    z-index: 101;
    background-color: #fff;
    -webkit-transition: all .4s;
    transition: all .4s;
    -webkit-transform: translate3D(0,-60px,0);
    -ms-transform: translate3D(0,-60px,0);
    transform: translate3D(0,-60px,0);
    opacity: 0
}

.top-bar-container.streamline {
    height: 50px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.top-bar-container.slide-down {
    -webkit-transform: translate3D(0,0,0);
    -ms-transform: translate3D(0,0,0);
    transform: translate3D(0,0,0);
    opacity: 1
}

.top-bar-container.streamline .flex-l,.top-bar-container.streamline .top-bar-left {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center
}

.top-bar-container.streamline .top-bar-left {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    border-right: 1px solid #f2f2f2;
    cursor: pointer
}

.top-bar-container.streamline .top-bar-left:hover {
    background-color: #e9f6fe
}

.top-bar-left .title {
    font-size: 20px;
    font-weight: 700;
    color: #1890ff;
    margin-left: 20px
}

.top-bar-left .svg-box {
    width: 50px;
    box-sizing: border-box;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center
}

.top-bar-center,.top-bar-left .svg-box {
    height: 50px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center
}

.top-bar-center {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row
}

.top-bar-center .go-back {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    cursor: pointer
}

.top-bar-center .bookshelf-svg-icon {
    display: inline-block;
    vertical-align: middle;
    color: #a9a9a9!important;
    width: 22px!important;
    height: 22px!important
}

.top-bar-center .icon {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 50px;
    height: 50px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-right: 1px solid #f2f2f2;
    cursor: pointer
}

.top-bar-center .icon svg {
    color: rgba(0,0,0,.6)!important
}

.top-bar-center .icon svg>path {
    stroke: rgba(0,0,0,.6)!important
}

.top-bar-center .icon:hover {
    background: #e9f6fe
}

.top-bar-center .nav-list {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 50px;
    padding: 0 15px;
    border-right: 1px solid #f2f2f2
}

.top-bar-center .nav-list.no-padding {
    padding: 0
}

.top-bar-center .nav-list .zoom-icon {
    border-right: none
}

.top-bar-center .nav-list .icon-text {
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    font-weight: 400;
    color: #666
}

.top-bar-center .nav-list .color-text {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 400;
    color: #666;
    margin-right: 5px;
    min-width: 24px
}

.top-bar-center .nav-list .color-list,.top-bar-center .nav-list .color-text {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center
}

.top-bar-center .nav-list .color-list {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.top-bar-center .nav-list .color-btn {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    border: 1px solid transparent;
    cursor: pointer;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    margin: 0 5px
}

.top-bar-center .nav-list .color-btn:hover {
    border-color: #828282;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.3)
}

.top-bar-center .nav-list .color-btn-1 {
    background: #fcfcfc;
    border-color: #d5d5d5
}

.top-bar-center .nav-list .color-btn-2 {
    background: #f9f4e9;
    border-color: #bbb6ab
}

.top-bar-center .nav-list .color-btn-3 {
    background: #ceeaba;
    border-color: #a0ea9c
}

.top-bar-center .nav-list .color-btn-4 {
    background: #6d6d6f;
    border-color: #535353
}

.top-bar-center .nav-list .color-btn-5 {
    background: #3b403c;
    border-color: #424242
}

.top-bar-center .nav-list .font-wrap {
    display: inline-block;
    vertical-align: middle;
    height: 24px;
    font-size: 0;
    margin: 18px 0 18px 16px
}

.top-bar-center .nav-list .font-tips {
    font-size: 12px;
    color: #666;
    min-width: 24px
}

.top-bar-center .nav-list .font-btn {
    font-size: 12px;
    padding: 0 5px;
    color: #999
}

.top-bar-center .nav-list .font-btn.disabled,.top-bar-center .nav-list .font-btn.disabled>* {
    cursor: not-allowed
}

.top-bar-center .nav-list .font-btn:hover .hover {
    color: #6d6d6f!important
}

.top-bar-center .nav-list .font-btn svg {
    display: inline-block;
    vertical-align: top;
    width: 18px!important;
    height: 18px!important;
    color: rgba(0,0,0,.4)!important;
    margin: 3px 0;
    cursor: pointer
}

.top-bar-center .nav-list .font-btn svg>path {
    stroke: rgba(0,0,0,.4)!important
}

.top-bar-center .nav-list .arrow {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    width: 24px;
    height: 24px;
    cursor: pointer
}

.top-bar-center .nav-list .arrow>svg {
    color: rgba(0,0,0,.7)!important;
    width: 18px!important;
    height: 18px!important
}

.top-bar-center .nav-list .arrow>svg>path {
    stroke: rgba(0,0,0,.7)!important
}

.top-bar-center .nav-list .right {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg)
}

.top-bar-center .nav-list .page-num {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 5px
}

.top-bar-center .nav-list .page-left {
    height: 24px
}

.top-bar-center .nav-list .page-left input {
    box-sizing: border-box;
    display: block;
    width: 36px;
    min-width: 36px;
    max-width: 100px;
    height: 24px;
    text-align: center;
    padding: 0 5px;
    font-size: 12px;
    font-weight: 400;
    color: #666;
    outline: none;
    border: 1px solid #ccc
}

.top-bar-center .nav-list .page-left input:focus {
    border-color: #0099fa
}

.top-bar-center .nav-list .page-right {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    min-width: 28px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    line-height: 24px;
    font-size: 12px;
    color: #666;
    padding-left: 10px
}

.top-bar-center .nav-list .page-right span {
    font-size: 12px;
    font-weight: 400;
    color: #666
}

.top-bar-center .nav-list .page-right span:nth-of-type(1) {
    margin-right: 5px
}

.top-bar-center .more-setting-wrap {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 50px;
    cursor: pointer;
    padding: 0 15px
}

.top-bar-center .more-setting-wrap .icon-text {
    min-width: 56px
}

.top-bar-center .more-setting-wrap:hover .hover {
    color: #6d6d6f!important
}

.top-bar-center .more-setting-btn {
    color: #cdcdcd!important;
    display: inline-block;
    vertical-align: middle;
    width: 20px!important;
    height: 20px!important;
    margin-right: 6px
}

.top-bar-center .more-setting-btn>path {
    stroke: rgba(0,0,0,.4)!important
}

.top-bar-container.streamline .flex-r {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row
}

.flex-r .right-icon,.top-bar-container.streamline .flex-r {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 50px
}

.flex-r .right-icon {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    cursor: pointer;
    border-right: 1px solid #f2f2f2;
    padding: 0 15px
}

.flex-r .right-icon:hover {
    background: #e9f6fe
}

.flex-r .bookmark-box .right-icon:hover {
    background: transparent
}

.flex-r .right-icon.line-left {
    border-left: 1px solid #f2f2f2
}

.flex-r .bookmark-box {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 10px;
    border-right: 1px solid #f2f2f2
}

.flex-r .bookmark-box,.flex-r .bookmark-box .right-icon {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 50px
}

.flex-r .bookmark-box .right-icon {
    position: relative;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0;
    border-right: none
}

.flex-r .left-line {
    border-left: 1px solid #f2f2f2
}

.flex-r .right-icon svg {
    vertical-align: middle;
    color: rgba(0,0,0,.6)!important;
    width: 22px!important;
    height: 22px!important
}

.flex-r .right-icon svg path {
    stroke: rgba(0,0,0,.6)!important
}

.flex-r .right-icon svg.click-book-mark {
    color: #ef5350!important
}

.flex-r .right-icon svg.toggle-svg-icon {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    width: 18px!important;
    height: 18px!important
}

.flex-r .right-icon svg.caveat-icon {
    color: #fd9623!important
}

.flex-r .right-icon svg.caveat-icon path {
    stroke: #fd9623!important
}

.flex-r .right-icon svg.print-svg-icon,.flex-r .right-icon svg.search-svg-icon {
    width: 20px!important;
    height: 20px!important
}

.flex-r .right-icon .slideup-svg-icon {
    width: 18px!important;
    height: 18px!important;
    margin-top: 2px
}

.flex-r .right-icon .icon-text {
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    color: #666;
    margin-left: 6px
}

.flex-r .right-icon .tocBtnHide {
    display: none!important
}

.flex-r .right-icon .tocBtnShow {
    display: block!important
}

@media screen and (max-width: 1157px) {
    .top-bar-container .flex-r {
        display:none
    }
}

@media screen and (max-width: 1266px) {
    .top-bar-container .flex-l .top-bar-left {
        display:none
    }
}

@media screen and (max-width: 1082px) {
    .top-bar-container .flex-l .nav-list.color-change {
        display:none
    }
}

@media screen and (max-width: 920px) {
    .top-bar-container .flex-l .nav-list.font-size-change {
        display:none
    }
}

@media screen and (max-width: 935px) {
    .top-bar-container .top-bar-center .center-line:last-child,.top-bar-container .top-bar-center .nav-list:last-child {
        display:none
    }
}

@media screen and (max-width: 669px) {
    .top-bar-container .center-control>div:nth-last-child(2),.top-bar-container .center-control>div:nth-last-child(3) {
        display:none
    }
}

.ant-dropdown-menu {
    text-indent: 0
}

.bottom-toolbar-container {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 60px;
    box-shadow: -1px -1px 2px rgba(0,0,0,.1),0 -1px 2px rgba(0,0,0,.1);
    z-index: 100;
    background-color: #fff;
    -webkit-transition: all .4s;
    transition: all .4s;
    -webkit-transform: translate3D(0,75px,0);
    -ms-transform: translate3D(0,75px,0);
    transform: translate3D(0,75px,0);
    opacity: 0
}

.bottom-toolbar-container.slide-up {
    -webkit-transform: translate3D(0,0,0);
    -ms-transform: translate3D(0,0,0);
    transform: translate3D(0,0,0);
    opacity: 1
}

.bottom-toolbar-container .toolbar-center {
    position: relative;
    width: 300px;
    height: 60px;
    margin: 0 auto
}

.bottom-toolbar-container .toolbar-center .arrow {
    position: absolute;
    top: 10px;
    width: 40px;
    height: 40px;
    cursor: pointer
}

.bottom-toolbar-container .toolbar-center .arrow-svg-icon {
    width: 40px!important;
    height: 40px!important;
    color: silver!important
}

.bottom-toolbar-container .toolbar-center .arrow.left {
    left: 0
}

.bottom-toolbar-container .toolbar-center .arrow.right {
    right: 0;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg)
}

.bottom-toolbar-container .toolbar-center .page-num {
    position: absolute;
    top: 13px;
    width: 140px;
    height: 36px;
    left: 50%;
    -webkit-transform: translate3D(-70px,0,0);
    -ms-transform: translate3D(-70px,0,0);
    transform: translate3D(-70px,0,0);
    text-align: center
}

.bottom-toolbar-container .toolbar-center .page-num div {
    float: left
}

.bottom-toolbar-container .toolbar-center .page-left {
    width: 70px;
    height: 36px
}

.bottom-toolbar-container .toolbar-center .page-left input {
    box-sizing: border-box;
    display: block;
    width: 70px;
    height: 36px;
    text-align: center;
    padding: 0 10px;
    font-size: 18px;
    font-weight: 400;
    color: #666;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 5px
}

.bottom-toolbar-container .toolbar-center .page-left input:focus {
    border-color: #0099fa
}

.bottom-toolbar-container .toolbar-center .page-right {
    line-height: 36px;
    font-size: 18px;
    font-weight: 400;
    color: #666;
    padding-left: 10px
}

.bottom-toolbar-container .toolbar-wrap {
    position: absolute;
    top: 0;
    height: 60px;
    width: 150px
}

.bottom-toolbar-container .toolbar-left {
    left: 20px
}

.bottom-toolbar-container .toolbar-right {
    right: 20px
}

.bottom-toolbar-container .toolbar-wrap>a {
    display: block;
    width: 100%;
    height: 34px;
    margin: 13px auto;
    text-align: center;
    line-height: 34px;
    font-size: 14px;
    color: #fff!important;
    border-radius: 17px
}

.bottom-toolbar-container .toolbar-wrap>a:hover {
    opacity: .8
}

.bottom-toolbar-container .toolbar-wrap .download-btn {
    background-color: #21a5f1
}

.bottom-toolbar-container .toolbar-wrap .upgrade-membership {
    background-color: #ff982d
}

.pimodal-container {
    background-color: rgba(33,33,33,.4);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    z-index: 99999;
    display: none
}

.pimodal-open {
    display: block
}

.pimodal-container .pimodal-body {
    background-color: #fff;
    border-radius: 2px;
    padding: 0 40px;
    width: 650px;
    min-height: 480px;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0);
    box-sizing: border-box
}

.pimodal-container .pimodal-title {
    font-size: 16px;
    font-weight: 700;
    height: 56px;
    line-height: 57px;
    border-bottom: 1px solid #e4e4e4
}

.pimodal-container .pimodal-close-btn {
    position: absolute;
    top: 0;
    right: 28px;
    width: 56px;
    height: 56px;
    padding: 16px;
    cursor: pointer
}

.pimodal-container .pimodal-close-btn svg {
    color: #999!important
}

.ant-modal-body .pimodal-content {
    box-sizing: border-box
}

.ant-modal-body .pimodal-content p {
    font-size: 16px;
    font-weight: 400;
    color: #333;
    line-height: 20px;
    margin: 0 0 20px
}

.ant-modal-body .pimodal-more {
    background: #f9f9f9;
    height: 316px;
    padding: 14px 0;
    margin-bottom: 14px;
    box-sizing: border-box
}

.ant-modal-body .pimodal-more .more-title {
    font-size: 16px;
    font-weight: 700;
    color: #666;
    line-height: 42px;
    border-bottom: 1px dashed #e4e4e4;
    margin: 0 42px
}

.ant-modal-body .pimodal-more .more-list {
    height: 158px;
    box-sizing: border-box;
    padding: 18px 0 14px;
    font-size: 0
}

.ant-modal-body .pimodal-more .list-item {
    display: inline-block;
    vertical-align: top;
    width: 25%;
    text-align: center
}

.ant-modal-body .pimodal-more .list-img {
    display: block;
    width: 80px;
    margin: 0 auto
}

.ant-modal-body .pimodal-more .list-title {
    font-size: 16px;
    font-weight: 400;
    color: #333;
    line-height: 20px;
    padding-bottom: 6px;
    margin: 0
}

.ant-modal-body .pimodal-more .list-link {
    font-size: 12px;
    color: #c9c9c9;
    line-height: 16px;
    text-decoration: underline;
    cursor: pointer
}

.ant-modal-body .pimodal-more .more-footer {
    margin: 0 42px;
    border-top: 1px dashed #e4e4e4;
    padding: 20px 0 18px;
    text-align: center
}

.ant-modal-body .pimodal-more .more-footer span {
    display: block;
    cursor: pointer
}

.ant-modal-body .pimodal-more .footer-btn-upgrade {
    height: 32px;
    line-height: 32px;
    background-color: #ff982d;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    padding: 0 28px;
    width: 180px;
    border-radius: 16px;
    box-sizing: border-box;
    margin: 0 auto
}

.ant-modal-body .pimodal-more .footer-btn-more {
    width: 150px;
    height: 24px;
    line-height: 24px;
    margin: 12px auto 0;
    text-decoration: underline;
    color: #999;
    font-size: 14px
}

.ant-modal-body .pimodal-footer {
    text-align: center
}

.ant-modal-body .pimodal-footer button {
    margin: 0 20px;
    padding: 8px 27px;
    font-size: 16px;
    border-radius: 2px;
    background-color: #ffd900;
    border: 0;
    outline: none
}

.pimodal-container .pimodal-footer button:hover {
    cursor: pointer;
    background-color: #fff000
}

.bottom-tips-wrap {
    position: absolute;
    right: 0;
    bottom: 60px;
    left: 0;
    height: 40px;
    background-color: #ff9800;
    z-index: 100;
    -webkit-transform: translate3d(0,150px,0);
    transform: translate3d(0,150px,0);
    -webkit-transition: all .4s;
    transition: all .4s
}

.bottom-tips-wrap.slide-up {
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
}

.bottom-tips-wrap .tips-text {
    width: 1000px;
    line-height: 40px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    margin: 0 auto;
    text-align: center
}

.bottom-tips-wrap .close-tips {
    position: absolute;
    right: 10px;
    top: 0;
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    padding: 8px;
    cursor: pointer
}

.bottom-tips-wrap .close-tips .close-btn-svg {
    color: #fff!important
}

.bottom-note-tips .small-tips {
    position: fixed;
    right: 30px;
    bottom: 10px;
    z-index: 99;
    width: 46px;
    height: 38px
}

.bottom-note-tips .small-tips .tips-btn {
    display: block;
    width: 46px;
    height: 38px;
    box-sizing: border-box;
    border-radius: 2px;
    background-color: hsla(0,0%,100%,.6);
    box-shadow: 2px 1px 3px rgba(0,0,0,.2);
    padding: 9px 13px;
    cursor: pointer
}

.bottom-note-tips .small-tips .tips-svg-icon {
    width: 20px!important;
    height: 20px!important;
    color: #d7d7d7!important
}

.bottom-note-tips .small-tips .tips-text {
    position: absolute;
    top: 0;
    left: -134px;
    height: 38px;
    line-height: 38px;
    background-color: #757575;
    color: #fff;
    padding: 0 20px;
    border-radius: 2px;
    display: none
}

.bottom-note-tips .small-tips:hover .tips-btn {
    background-color: #fff
}

.bottom-note-tips .small-tips:hover .tips-text {
    display: block
}

.screen-tips-wrap {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 101
}

.screen-tips-wrap .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5)
}

.screen-tips-wrap .tips-wrap-main {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 650px;
    min-height: 340px;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0);
    background-color: #fff;
    box-shadow: 1px 1px 2px rgba(0,0,0,.1);
    box-sizing: border-box;
    padding: 0 40px
}

.screen-tips-wrap .tips-wrap-top {
    height: 57px;
    border-bottom: 1px solid #e4e4e4
}

.screen-tips-wrap .tips-wrap-top .tips-title {
    float: left;
    font-size: 16px;
    font-weight: 700;
    line-height: 57px;
    color: #666
}

.screen-tips-wrap .tips-wrap-top .close-tips {
    float: right;
    width: 57px;
    height: 57px;
    box-sizing: border-box;
    padding: 17px;
    cursor: pointer
}

.screen-tips-wrap .tips-wrap-top .close-btn-svg {
    color: #d3d3d3!important
}

.screen-tips-wrap .tips-wrap-center {
    padding-top: 20px
}

.screen-tips-wrap .tips-wrap-text {
    font-size: 16px;
    line-height: 22px;
    color: #333;
    margin-bottom: 18px
}

.screen-tips-wrap .tips-wrap-box {
    padding-top: 6px
}

.screen-tips-wrap .tips-wrap-contrast {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #999;
    padding-bottom: 16px
}

.screen-tips-wrap .tips-wrap-contrast .tips-membership {
    color: #ff9800;
    font-size: 16px
}

.screen-tips-wrap .tips-wrap-box .box-table {
    border: 1px solid #d7d7d7;
    overflow: hidden
}

.screen-tips-wrap .tips-wrap-box .table-col {
    height: 40px;
    border-top: 1px solid #d7d7d7;
    margin-top: -1px
}

.screen-tips-wrap .tips-wrap-box .table-col:nth-of-type(1) {
    background-color: #e4e4e4
}

.screen-tips-wrap .tips-wrap-box .table-row {
    display: inline-block;
    vertical-align: top;
    border-top: 1px solid #d7d7d7;
    margin-top: -1px
}

.screen-tips-wrap .tips-wrap-box .table-col:nth-of-type(1) .table-row:nth-of-type(1) {
    background-color: #e4e4e4
}

.screen-tips-wrap .tips-wrap-box .table-row:nth-of-type(1) {
    width: 128px;
    height: 40px;
    line-height: 40px;
    border-right: 1px solid #d7d7d7;
    background-color: #f2f2f2;
    color: #999;
    box-sizing: border-box;
    padding-left: 16px
}

.screen-tips-wrap .tips-wrap-box .table-row:nth-of-type(2) {
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-right: 1px solid #d7d7d7
}

.screen-tips-wrap .tips-wrap-box .table-col:nth-of-type(1) .table-row:nth-of-type(3) {
    color: #ff9800;
    padding-left: 30px
}

.screen-tips-wrap .tips-wrap-box .table-row:nth-of-type(3) {
    position: relative;
    width: 360px;
    height: 40px;
    line-height: 40px;
    padding-left: 60px;
    color: #666
}

.screen-tips-wrap .tips-wrap-box .table-row .is-disable-icon {
    display: block!important;
    width: 16px!important;
    height: 16px!important;
    color: silver!important;
    margin: 12px auto
}

.screen-tips-wrap .tips-wrap-box .table-row .is-check-icon {
    position: absolute;
    left: 30px;
    top: 12px;
    width: 16px!important;
    height: 16px!important;
    color: #ff982d!important
}

.screen-tips-wrap .upgrade-wrap {
    padding-top: 28px;
    text-align: center
}

.screen-tips-wrap .upgrade-wrap>a {
    display: block;
    height: 32px
}

.screen-tips-wrap .upgrade-wrap>a:hover {
    opacity: .8
}

.screen-tips-wrap .upgrade-wrap .link-membership {
    background-color: #ff982d;
    line-height: 32px;
    color: #fff;
    border-radius: 16px;
    padding: 0 24px;
    width: 158px;
    margin: 0 auto 10px
}

.screen-tips-wrap .upgrade-wrap .link-more {
    padding: 0 30px;
    width: 160px;
    line-height: 32px;
    margin: 0 auto 10px;
    color: #999;
    box-sizing: border-box
}

.catalog-container {
    position: relative;
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 0;
    height: 100%;
    -webkit-transition: all .3s;
    transition: all .3s;
    box-shadow: 0 5px 7px rgba(0,0,0,.2);
    z-index: 2
}

.catalog-container,.catalog-container .close-catalog {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal
}

.catalog-container .close-catalog {
    position: absolute;
    -webkit-box-orient: horizontal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    top: 70px;
    right: -14px;
    width: 26px;
    height: 60px;
    border: 1px solid #ccc;
    z-index: 100;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer
}

.catalog-container .book-catalog-panel {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100%
}

.catalog-container .close-catalog .svg-icon-close {
    width: 20px!important;
    height: 20px!important;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    color: rgba(0,0,0,.4)!important
}

.catalog-container .close-catalog .svg-icon-close>path {
    stroke: rgba(0,0,0,.4)!important
}

.catalog-container .close-catalog .svg-icon-close.is-close {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg)
}

.catalog-container .close-catalog .svg-icon-close.is-open {
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg)
}

.book-catalog {
    overflow-y: auto;
    box-sizing: border-box;
    padding-top: 90px;
    padding-bottom: 90px;
    width: 100%
}

.book-catalog .no-data__title {
    font-size: 18px;
    line-height: 24px;
    color: #1890ff;
    padding-top: 100px
}

.book-catalog .no-data__context,.book-catalog .no-data__title {
    text-align: center;
    width: 300px;
    overflow: hidden;
    -webkit-transition: none;
    transition: none
}

.book-catalog .no-data__context {
    font-size: 14px;
    line-height: 20px
}

.book-catalog::-webkit-scrollbar {
    width: 8px;
    display: none
}

.book-catalog:hover::-webkit-scrollbar {
    display: block
}

.book-catalog::-webkit-scrollbar-thumb,.book-catalog::-webkit-scrollbar-thumb:hover {
    border-radius: 0
}

.catalog-container.catalog-open-left {
    width: 300px
}

@-webkit-keyframes moveLeft {
    0% {
        opacity: 0;
        -webkit-transform: translate3D(0,0,0);
        transform: translate3D(0,0,0);
        z-index: 98
    }

    to {
        opacity: 1;
        -webkit-transform: translate3D(-430px,0,0);
        transform: translate3D(-430px,0,0);
        z-index: 100
    }
}

@keyframes moveLeft {
    0% {
        opacity: 0;
        -webkit-transform: translate3D(0,0,0);
        transform: translate3D(0,0,0);
        z-index: 98
    }

    to {
        opacity: 1;
        -webkit-transform: translate3D(-430px,0,0);
        transform: translate3D(-430px,0,0);
        z-index: 100
    }
}

@-webkit-keyframes moveRight {
    0% {
        opacity: 1;
        -webkit-transform: translate3D(-430px,0,0);
        transform: translate3D(-430px,0,0);
        z-index: 100
    }

    to {
        opacity: 0;
        -webkit-transform: translate3D(0,0,0);
        transform: translate3D(0,0,0);
        z-index: 98
    }
}

@keyframes moveRight {
    0% {
        opacity: 1;
        -webkit-transform: translate3D(-430px,0,0);
        transform: translate3D(-430px,0,0);
        z-index: 100
    }

    to {
        opacity: 0;
        -webkit-transform: translate3D(0,0,0);
        transform: translate3D(0,0,0);
        z-index: 98
    }
}

.book-catalog .toc-item {
    position: relative;
    line-height: 48px
}

.book-catalog .toc-item .text {
    display: block;
    margin: 0 28px 0 20px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    border-bottom: 1px solid #e1e6f0
}

.book-catalog .toc-item .text:hover {
    -webkit-transition: all .1s;
    transition: all .1s;
    opacity: .7
}

.book-catalog .toc-item .arrow-slide {
    position: absolute;
    left: 14px;
    top: 0;
    width: 36px;
    height: 48px;
    cursor: pointer;
    z-index: 9;
    display: none
}

.book-catalog .toc-item .arrow-slide:before {
    content: '';
    position: absolute;
    top: 12px;
    left: 6px;
    width: 24px;
    height: 24px;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    background: url(/static/media/book-toc-item-arrow.222aefd4.png) 5px 5px no-repeat
}

.book-catalog .arrow-slide.show-more {
    position: absolute;
    left: 14px;
    top: 0;
    width: 36px;
    height: 48px;
    cursor: pointer
}

.book-catalog .arrow-slide.show-more:before {
    content: '';
    top: 12px;
    left: 6px;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
    background: url(/static/media/book-toc-item-arrow.222aefd4.png) 5px 5px no-repeat
}

.book-catalog .toc-item .toc-item-percent {
    position: absolute;
    right: 0;
    top: 0;
    width: 70px;
    height: 48px;
    line-height: 48px;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    color: #999;
    font-weight: 400
}

.book-catalog .nav-level-1 .text {
    font-weight: 700
}

.book-catalog .nav-level-2 .text {
    padding-left: 30px;
    position: relative;
    font-weight: 400
}

.book-catalog .nav-level-2 .arrow-slide {
    position: absolute;
    left: 50px;
    top: 0;
    width: 36px;
    height: 48px;
    cursor: pointer;
    z-index: 9
}

.book-catalog .nav-level-3 .text {
    padding-left: 60px;
    position: relative;
    font-weight: 400
}

.book-catalog .nav-level-3 .arrow-slide {
    position: absolute;
    left: 72px;
    top: 0;
    width: 36px;
    height: 48px;
    cursor: pointer;
    z-index: 9;
    display: none
}

.book-catalog .nav-level-4 .text {
    padding-left: 90px;
    position: relative;
    font-weight: 400
}

.book-catalog .nav-level-5 .text {
    padding-left: 120px;
    position: relative;
    font-weight: 400
}

.book-catalog .toc-item .text.active {
    color: #0f88eb
}

.book-catalog .toc-item .text.active:hover {
    -webkit-transition: all .1s;
    transition: all .1s
}

.book-catalog .toc-slide-up .toc-item {
    line-height: 0;
    overflow: hidden
}

.book-catalog .toc-item.open {
    line-height: 48px
}

.loader-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100
}

.loader-container.slide-up {
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
}

.loader-content {
    width: 200px;
    margin: 80px auto
}

.loader-content .card {
    text-align: center;
    vertical-align: middle;
    display: table-cell;
    width: 200px;
    height: 100px
}

.three-quarters-loader:not(:required) {
    -webkit-animation: three-quarters-loader .6s infinite linear;
    animation: three-quarters-loader .6s infinite linear;
    border: 8px solid #38e;
    border-right-color: transparent;
    border-radius: 16px;
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    overflow: hidden;
    text-indent: -9999px;
    width: 32px;
    height: 32px
}

@-webkit-keyframes three-quarters-loader {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

@keyframes three-quarters-loader {
    0% {
        -ms-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -ms-transform: rotate(1turn);
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

.book-render {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    z-index: 1
}

.show-top-toolbar {
    position: absolute;
    top: 7px;
    right: 7px;
    z-index: 100;
    width: 36px;
    height: 36px;
    padding: 7px;
    box-sizing: border-box;
    cursor: pointer;
    background-color: hsla(0,0%,100%,.5);
    -webkit-transition: all .2s;
    transition: all .2s
}

.show-top-toolbar:hover {
    background-color: #fff
}

.show-top-toolbar.slide-down {
    -webkit-transform: translate3D(0,0,0);
    -ms-transform: translate3D(0,0,0);
    transform: translate3D(0,0,0);
    opacity: 1
}

.iconButtonClass {
    position: relative;
    -webkit-transform: rotate(180deg) translateY(-1px);
    -ms-transform: rotate(180deg) translateY(-1px);
    transform: rotate(180deg) translateY(-1px);
    text-align: center
}

.iconButtonClass .toolbar-show-btn {
    width: 18px!important;
    height: 18px!important;
    color: rgba(0,0,0,.6)!important
}

.toolbar-show-btn {
    display: inline-block;
    vertical-align: middle;
    color: #d7d7d7!important;
    width: 18px!important;
    height: 18px!important
}

.epub-view::-webkit-scrollbar-thumb {
    background-color: #d7d7d7;
    height: 50px;
    outline-offset: -2px;
    outline: 1px solid #fff;
    -webkit-border-radius: 0;
    border: 2px solid transparent
}

.epub-view::-webkit-scrollbar-thumb:hover {
    background-color: #8c8c8c;
    height: 50px;
    -webkit-border-radius: 0
}

.epub-view::-webkit-scrollbar {
    width: 12px;
    height: 16px
}

.epub-view::-webkit-scrollbar-track-piece {
    background-color: transparent;
    -webkit-border-radius: 0
}

#neat-epub-viewer-container {
    box-sizing: border-box;
    position: relative;
    padding: 96px 48px 200px;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    margin: 0 auto;
    background-color: #fff;
    min-height: 100vh;
    z-index: 99
}

#neat-epub-viewer {
    height: 100%;
    width: 100%;
    word-break: break-word
}

#hidden-spine-doc-cover {
    z-index: 2;
    background-color: #fff
}

#hidden-spine-doc,#hidden-spine-doc-cover {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0
}

#hidden-spine-doc {
    z-index: 1;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.epub-view {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    overflow-y: auto;
    background-color: #eeeef4
}

.view-content {
    position: relative;
    width: 1000px;
    margin: 30px auto;
    box-shadow: 0 2px 7px rgba(0,0,0,.2);
    box-sizing: border-box
}

.epub-view .content-bg {
    bottom: 0;
    z-index: 2
}

.epub-view .content-bg,.epub-view .content-catalog {
    position: absolute;
    top: 0;
    left: 50%;
    width: 1220px;
    height: 100%;
    margin-left: -610px
}

.epub-view .content-catalog {
    z-index: 1
}

.epub-view .content-scroll {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    overflow-y: auto
}

.epub-view .upgrade-membership {
    margin-top: 10px
}

.epub-view .upgrade-membership .upgrade-tips {
    font-size: 16px;
    line-height: 30px;
    color: #999
}

.epub-view .upgrade-membership .upgrade-tips a {
    text-decoration: underline!important;
    color: #42a5f5!important
}

.view-content-pdf {
    padding: 0;
    text-align: center
}

.view-content-pdf .viewer-pusher {
    height: 30px
}

.view-content-pdf #neat-epub-viewer-container {
    display: inline-block;
    width: unset;
    padding: 0;
    margin: 0 auto
}

.view-content-pdf #neat-epub-viewer {
    height: auto;
    width: unset;
    display: inline-block
}

.book-note-container {
    position: absolute;
    top: 50px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100
}

.book-note-main {
    position: absolute;
    top: 8px;
    left: 200px;
    bottom: 84px;
    width: 360px;
    box-shadow: 3px 3px 4px rgba(0,0,0,.1),-1px -1px 2px rgba(0,0,0,.1);
    background-color: #fff
}

.book-note-main .book-note-top {
    height: 58px;
    border-bottom: 1px solid #e4e4e4;
    box-sizing: border-box;
    padding: 0 28px
}

.book-note-main .book-note-title {
    float: left;
    font-size: 16px;
    line-height: 32px;
    margin: 13px 0;
    color: #666
}

.book-note-main .export-note {
    float: left;
    height: 24px;
    line-height: 24px;
    margin: 17px 0 17px 26px;
    padding: 0 14px;
    background-color: #21a5f1;
    border-radius: 12px;
    cursor: pointer
}

.book-note-main .export-note .export-note-svg {
    vertical-align: top;
    width: 15px!important;
    height: 18px!important;
    color: #fff!important;
    margin-top: 3px
}

.book-note-main .export-note .export-note-title {
    display: inline-block;
    vertical-align: top;
    font-size: 13px;
    color: #fff;
    margin-left: 6px
}

.book-note-main .book-note-content {
    position: absolute;
    top: 58px;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto
}

.book-note-main .book-note-item {
    position: relative;
    border-bottom: 1px solid #f2f2f2;
    box-sizing: border-box;
    padding: 14px 16px;
    -webkit-transition: all .4s;
    transition: all .4s
}

.book-note-main .book-note-time {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: #949494;
    padding-bottom: 6px
}

.book-note-main .book-note-body {
    box-sizing: border-box;
    padding-left: 18px;
    width: 284px
}

.book-note-main .book-note-body .note-main {
    position: relative;
    font-size: 13px;
    line-height: 22px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2
}

.book-note-main .book-note-body .note-main-box {
    position: relative
}

.book-note-main .book-note-body .note-main-box:before {
    content: '';
    position: absolute;
    top: 10%;
    left: -18px;
    bottom: 10%;
    width: 6px;
    height: 78%
}

.note-color-1 .note-main-box:before {
    background: #ffed6c
}

.note-color-2 .note-main-box:before {
    background: #fcacca
}

.note-color-3 .note-main-box:before {
    background: #acd9fa
}

.note-color-4 .note-main-box:before {
    background: #c3f172
}

.note-color-5 .note-main-box:before {
    background: #d7aefd
}

.book-note-main .book-note-body .note-tag {
    font-size: 12px;
    color: #949494;
    line-height: 22px;
    padding-top: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.book-note-main .delete-note-btn {
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    height: 100%
}

.book-note-main .delete-note-btn .delete-note-svg {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -12px;
    margin-left: -12px;
    color: silver!important;
    opacity: 0
}

.book-note-main .book-note-item:hover {
    background-color: #f7f7f7;
    cursor: pointer
}

.book-note-main .book-note-item:hover .delete-note-svg {
    opacity: 1
}

.book-note-main .delete-note-btn:hover {
    background-color: #d7d7d7
}

.book-note-main .delete-note-btn:hover .delete-note-svg {
    color: #fff!important
}

.book-note-main .book-note-content .note-content {
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0;
    overflow-y: auto
}

.book-note-main .book-note-content .can-not-note {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
}

.book-note-main .book-note-content .has-no-note {
    margin-top: 70px;
    padding: 0 30px;
    text-align: center
}

.book-note-main .book-note-content .has-no-note-title {
    font-size: 22px;
    font-weight: 700;
    color: #666;
    line-height: 36px;
    margin-bottom: 10px
}

.book-note-main .book-note-content .svg-icon-no-note {
    display: block!important;
    margin: 0 auto 10px;
    color: #999!important;
    width: 40px!important;
    height: 40px!important
}

.book-note-main .book-note-content .has-no-note-info {
    font-size: 14px;
    line-height: 22px;
    color: #666
}

.book-note-main .book-note-content .has-no-note-tips {
    font-size: 14px;
    line-height: 24px;
    color: #ccc;
    padding-top: 10px;
    border-top: 1px dashed #ccc;
    margin-top: 20px
}

.book-thumbnail-panel {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #fff;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    padding-top: 70px;
    padding-bottom: 40px
}

.book-thumbnail-panel::-webkit-scrollbar {
    width: 8px;
    display: none;
    cursor: pointer
}

.book-thumbnail-panel:hover::-webkit-scrollbar {
    display: block
}

.book-thumbnail-panel::-webkit-scrollbar-thumb,.book-thumbnail-panel::-webkit-scrollbar-thumb:hover {
    border-radius: 0
}

.book-thumbnail-container {
    width: 292px
}

.book-thumbnail-container,.book-thumbnail-container .thumbnail {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center
}

.book-thumbnail-container .thumbnail {
    position: relative;
    width: 100%;
    background-color: transparent;
    box-sizing: border-box;
    cursor: pointer;
    padding: 30px 0
}

.book-thumbnail-container .thumbnail-box-img {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 156px;
    height: 193px;
    border: 3px solid transparent;
    box-sizing: border-box;
    background-color: #0000002b;
    overflow: hidden
}

.book-thumbnail-container .thumbnail-box-num {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 50px;
    height: 24px;
    background-color: #999;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 10px
}

.book-thumbnail-container .thumbnail-box-num .page-index {
    color: #f1f1f1;
    font-size: 14px;
    font-weight: 400
}

.book-thumbnail-container .thumbnail:hover {
    background-color: #ecf6fe
}

.book-thumbnail-container .thumbnail-box-img.active {
    border-color: #1890ff
}

.book-thumbnail-container .thumbnail-box-num.active {
    background-color: #1890ff
}

.book-thumbnail-container .thumbnail-box-img img {
    display: block;
    width: 100%;
    height: 100%
}

.book-thumbnail-container .thumbnail-box-img .loading {
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%)
}

.selection-menu-container {
    z-index: 999
}

.selection-menu-container,.selection-menu-container .selection-shadow-background {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0
}

.selection-menu-container .menu-body {
    position: absolute;
    left: 0;
    top: 0;
    width: 220px;
    box-shadow: 1px 1px 8px rgba(0,0,0,.4);
    border-radius: 1px;
    background: #fff
}

.selection-menu-container .menu-body .menu-list-top {
    height: 40px
}

.selection-menu-container .menu-body .menu-handle-list {
    position: absolute;
    top: 0;
    left: 0;
    height: 40px;
    width: 100%
}

.selection-menu-container .menu-body .menu-handle-list .menu-item-btn {
    float: left;
    width: 25%;
    height: 40px;
    position: relative
}

.selection-menu-container .menu-body .list-item-btn {
    float: left;
    width: 25%;
    height: 40px;
    padding: 9px 16px;
    cursor: pointer;
    position: relative
}

.selection-menu-container .menu-body .list-item-btn>svg {
    width: 22px!important;
    height: 22px!important
}

.selection-menu-container .menu-body .list-item-btn:hover {
    background-color: #f2f2f2
}

.public-tooltip {
    position: relative
}

.public-tooltip:hover:after {
    content: attr(data-tooltip);
    background-color: #666;
    color: #fff;
    position: absolute;
    top: -30px;
    left: 0;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    white-space: pre
}

.public-tooltip-bottom {
    position: relative
}

.public-tooltip-bottom:hover:after {
    content: attr(data-tooltip);
    background-color: #666;
    color: #fff;
    position: absolute;
    bottom: -30px;
    left: 0;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    white-space: pre
}

.selection-menu-container .menu-body .menu-list-color {
    height: 40px
}

.selection-menu-container .menu-body .menu-list-color>li {
    float: left;
    height: 40px;
    cursor: pointer;
    position: relative
}

.selection-menu-container .menu-body .menu-list-color .color-btn {
    width: 17%
}

.selection-menu-container .menu-body .menu-list-color>li:hover {
    background-color: #f2f2f2
}

.item-tips {
    position: absolute;
    top: -20px;
    left: 50%;
    width: 70px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    color: #fff;
    padding: 0 10px;
    margin-left: -35px;
    text-align: center;
    background-color: #666;
    z-index: 999
}

.selection-menu-container .menu-body .menu-list-color .close-btn {
    width: 15%;
    padding: 9px 5px
}

.selection-menu-container .menu-body .menu-list-color .item-close-menu {
    width: 20px!important;
    height: 20px!important;
    color: #c4c4c4!important
}

.selection-menu-container .menu-body .menu-list-color .item-delete-menu {
    width: 21px!important;
    height: 21px!important;
    color: #f25959!important
}

.selection-menu-container .menu-body .menu-list-color .color-btn:before {
    content: '';
    position: absolute;
    left: 10px;
    top: 10px;
    width: 18px;
    height: 18px;
    border-radius: 9px;
    border: 1px solid #ccc
}

.selection-menu-container .color-btn-1:before {
    content: '';
    background: #ffed6c;
    border-color: #f1dd66!important
}

.selection-menu-container .color-btn-2:before {
    content: '';
    background: #fcacca;
    border-color: #eda4bc!important
}

.selection-menu-container .color-btn-3:before {
    content: '';
    background: #acd9fa;
    border-color: #a6ceef!important
}

.selection-menu-container .color-btn-4:before {
    content: '';
    background: #c3f172;
    border-color: #b3e06a!important
}

.selection-menu-container .color-btn-5:before {
    content: '';
    background: #d7aefd;
    border-color: #c9a7ef!important
}

.selection-menu-container .note-edit-window {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 540px;
    height: 366px;
    margin: -183px 0 0 -270px;
    background-color: #fff;
    box-shadow: 4px 4px 12px rgba(0,0,0,.4)
}

.selection-menu-container .note-edit-window .note-wrap-top {
    height: 40px;
    background-color: #999
}

.selection-menu-container .note-edit-window .close-note-svg {
    float: right;
    width: 40px;
    height: 40px;
    cursor: pointer;
    padding: 10px
}

.selection-menu-container .note-edit-window .close-note-svg:hover {
    background-color: #626262
}

.selection-menu-container .note-edit-window .close-note-svg>svg {
    width: 20px!important;
    height: 20px!important;
    color: #fff!important
}

.selection-menu-container .note-edit-window .note-wrap-content {
    height: 326px
}

.selection-menu-container .note-edit-window .note-wrap-content .note-edit-content {
    width: 100%;
    height: 280px;
    padding: 26px 20px;
    font-size: 16px;
    border: none;
    outline: none;
    resize: none;
    overflow: hidden;
    display: block;
    overflow-y: scroll
}

.selection-menu-container .note-edit-window .note-content-down {
    height: 46px;
    border-top: 1px solid #f2f2f2
}

.selection-menu-container .note-edit-window .note-change-color {
    height: 46px;
    float: left
}

.selection-menu-container .note-edit-window .note-change-color .change-color-list {
    float: left;
    width: 46px;
    height: 46px;
    position: relative;
    margin-right: 14px;
    cursor: pointer;
    -webkit-transition: all .5s;
    transition: all .5s
}

.selection-menu-container .note-edit-window .note-change-color .change-color-list:before {
    content: '';
    position: absolute;
    left: 13px;
    top: 13px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 1px solid #ccc;
    z-index: 2
}

.selection-menu-container .note-edit-window .note-change-color .change-color-list:hover:after {
    content: '';
    position: absolute;
    left: 9px;
    top: 9px;
    width: 28px;
    height: 28px;
    z-index: 1;
    border-radius: 14px;
    border: 2px solid #a5a5a5;
    box-shadow: 1px 1px 4px rgba(0,0,0,.2)
}

.selection-menu-container .note-edit-window .change-confirm {
    float: right;
    width: 46px;
    height: 45px;
    cursor: pointer
}

.selection-menu-container .note-edit-window .change-confirm>svg {
    display: block!important;
    width: 22px!important;
    height: 22px!important;
    margin: 12px 0 0 12px
}

.selection-menu-container .note-edit-window .change-confirm:hover {
    background-color: #f2f2f2;
    display: block!important
}

.selection-menu-container .note-edit-window .note-change-color .color-list-active:after {
    content: '';
    position: absolute;
    left: 9px;
    top: 9px;
    width: 28px;
    height: 28px;
    z-index: 1;
    border-radius: 14px;
    border: 2px solid #a5a5a5;
    box-shadow: 1px 1px 4px rgba(0,0,0,.2)
}

.note-edit-container {
    z-index: 999
}

.note-edit-container,.note-edit-container .note-edit-shadow {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
}

.note-edit-container .note-edit-window {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 540px;
    height: 366px;
    margin: -183px 0 0 -270px;
    background-color: #fff;
    box-shadow: 4px 4px 12px rgba(0,0,0,.4)
}

.note-edit-container .note-edit-window .note-wrap-top {
    height: 40px;
    background-color: #999
}

.note-edit-container .note-edit-window .close-note-svg {
    float: right;
    width: 40px;
    height: 40px;
    cursor: pointer;
    padding: 10px
}

.note-edit-container .note-edit-window .close-note-svg:hover {
    background-color: #626262
}

.note-edit-container .note-edit-window .close-note-svg>svg {
    width: 20px!important;
    height: 20px!important;
    color: #fff!important
}

.note-edit-container .note-edit-window .note-wrap-content {
    height: 326px
}

.note-edit-container .note-edit-window .note-wrap-content .note-edit-content {
    width: 100%;
    height: 280px;
    padding: 26px 20px;
    font-size: 16px;
    border: none;
    outline: none;
    resize: none;
    overflow: hidden;
    display: block;
    overflow-y: scroll
}

.note-edit-container .note-edit-window .note-content-down {
    height: 46px;
    border-top: 1px solid #f2f2f2
}

.note-edit-container .note-edit-window .note-change-color {
    height: 46px;
    float: left
}

.note-edit-container .note-edit-window .note-change-color .change-color-list {
    float: left;
    width: 46px;
    height: 46px;
    position: relative;
    margin-right: 14px;
    cursor: pointer;
    -webkit-transition: all .5s;
    transition: all .5s
}

.note-edit-container .note-edit-window .note-change-color .change-color-list:before {
    content: '';
    position: absolute;
    left: 13px;
    top: 13px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 1px solid #ccc;
    z-index: 2
}

.note-edit-container .note-edit-window .note-change-color .change-color-list:hover:after {
    content: '';
    position: absolute;
    left: 9px;
    top: 9px;
    width: 28px;
    height: 28px;
    z-index: 1;
    border-radius: 14px;
    border: 2px solid #a5a5a5;
    box-shadow: 1px 1px 4px rgba(0,0,0,.2)
}

.note-edit-container .note-edit-window .change-confirm {
    float: right;
    width: 46px;
    height: 45px;
    cursor: pointer
}

.note-edit-container .note-edit-window .change-confirm>svg {
    display: block!important;
    width: 22px!important;
    height: 22px!important;
    margin: 12px 0 0 12px
}

.note-edit-container .note-edit-window .change-confirm:hover {
    background-color: #f2f2f2;
    display: block!important
}

.note-edit-container .note-edit-window .note-change-color .color-list-active:after {
    content: '';
    position: absolute;
    left: 9px;
    top: 9px;
    width: 28px;
    height: 28px;
    z-index: 1;
    border-radius: 14px;
    border: 2px solid #a5a5a5;
    box-shadow: 1px 1px 4px rgba(0,0,0,.2)
}

.note-edit-container .color-btn-1:before {
    content: '';
    background: #ffed6c;
    border-color: #f1dd66!important
}

.note-edit-container .color-btn-2:before {
    content: '';
    background: #fcacca;
    border-color: #eda4bc!important
}

.note-edit-container .color-btn-3:before {
    content: '';
    background: #acd9fa;
    border-color: #a6ceef!important
}

.note-edit-container .color-btn-4:before {
    content: '';
    background: #c3f172;
    border-color: #b3e06a!important
}

.note-edit-container .color-btn-5:before {
    content: '';
    background: #d7aefd;
    border-color: #c9a7ef!important
}

.translation-window {
    z-index: 999
}

.translation-window,.translation-window .translation-shadow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0
}

.translation-window .translate-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 220px;
    z-index: 5;
    height: 130px;
    box-shadow: 1px 1px 8px rgba(0,0,0,.4);
    border-radius: 1px;
    background: #fff
}

.translation-window .translate-wrap .top-header {
    height: 26px;
    background: #999;
    position: relative
}

.translation-window .translate-wrap .close-translate-btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 26px;
    height: 26px;
    cursor: pointer;
    padding: 3px
}

.translation-window .translate-wrap .close-translate-btn svg {
    width: 20px!important;
    height: 20px!important;
    color: #dedede!important
}

.translation-window .translate-wrap .wrap-text {
    position: relative;
    height: 104px;
    padding: 10px
}

.translation-window .translate-wrap .translate-text {
    max-height: 70px;
    overflow-y: auto
}

.translation-window .translate-wrap .translate-tips {
    position: absolute;
    bottom: 5px;
    left: 10px;
    font-size: 12px;
    color: #ccc
}

.book-setting-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999
}

.book-setting-container .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5)
}

.book-setting-container .setting-content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 650px;
    height: auto;
    background-color: #fff;
    box-shadow: 2px 2px 4px rgba(0,0,0,.2),-2px -2px 2px rgba(0,0,0,.1);
    padding: 0 38px 20px;
    -webkit-transform: translate3D(-325px,-50%,0);
    -ms-transform: translate3D(-325px,-50%,0);
    transform: translate3D(-325px,-50%,0)
}

.book-setting-container .setting-top {
    box-sizing: border-box;
    height: 56px;
    border-bottom: 1px solid #e4e4e4
}

.book-setting-container .setting-title {
    float: left;
    font-size: 16px;
    line-height: 56px;
    color: #666
}

.book-setting-container .close-btn {
    float: right;
    width: 56px;
    height: 56px;
    -webkit-transition: all .4s;
    transition: all .4s;
    cursor: pointer;
    padding: 16px;
    margin-right: -16px
}

.book-setting-container .close-btn .close-setting-svg {
    color: #dadada!important
}

.book-setting-container .close-btn:hover .close-setting-svg {
    color: #b0b0b0!important
}

.book-setting-container .setting-body {
    padding-top: 20px
}

.book-setting-container .setting-body .body-list {
    margin-bottom: 24px
}

.book-setting-container .setting-body .list-title {
    font-size: 14px;
    font-weight: 700;
    color: #666;
    line-height: 32px
}

.book-setting-container .setting-body .list-item {
    padding-top: 10px
}

.book-setting-container .setting-body .setting-icon {
    position: relative;
    display: inline-block;
    vertical-align: top;
    height: 24px;
    line-height: 24px;
    padding-left: 32px;
    font-size: 16px;
    font-weight: 400;
    color: #666;
    margin-right: 38px;
    cursor: pointer;
    -webkit-transition: all .4s;
    transition: all .4s
}

.book-setting-container .setting-body .setting-icon:last-child {
    margin-right: 0
}

.book-setting-container .setting-body .setting-icon:before {
    content: '';
    position: absolute;
    top: 2px;
    left: 0;
    width: 18px;
    height: 18px;
    border-radius: 10px;
    border: 1px solid #949494
}

.book-setting-container .setting-body .setting-icon.setting-active:after {
    content: '';
    position: absolute;
    left: 3px;
    top: 5px;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: #21a5f1
}

.book-setting-container .setting-body .setting-icon.setting-active:hover:before {
    border-color: #8c8c8c
}

.search-result-panel {
    position: absolute;
    top: 50px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100
}

.search-panel-box {
    position: absolute;
    box-sizing: border-box;
    top: 8px;
    right: 14px;
    bottom: 84px;
    width: 360px;
    box-shadow: 3px 3px 4px rgba(0,0,0,.1),-1px -1px 2px rgba(0,0,0,.1);
    background-color: #fff
}

.search-panel-box .panel-top {
    height: 58px;
    border-bottom: 1px solid #e4e4e4;
    box-sizing: border-box;
    padding: 0 28px
}

.search-panel-box .panel-title {
    display: inline-block;
    vertical-align: top;
    font-size: 16px;
    font-weight: 700;
    color: #666;
    line-height: 58px
}

.search-panel-box .panel-body {
    position: relative;
    display: inline-block;
    vertical-align: top;
    height: 32px;
    width: 256px;
    margin-top: 13px;
    margin-left: 16px
}

.search-panel-box .panel-body input {
    box-sizing: border-box;
    display: block;
    width: 256px;
    height: 32px;
    line-height: 32px;
    background-color: #f2f2f2;
    border: 1px solid #d7d7d7;
    border-radius: 3px;
    font-size: 14px;
    color: #999;
    padding: 0 30px 0 10px;
    outline: none
}

.search-panel-box .panel-body input:focus {
    border-color: #0099fa
}

.search-panel-box .search-svg-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 18px!important;
    height: 18px!important;
    color: #b0b0b0!important;
    cursor: pointer
}

.search-panel-box .panel-center {
    position: absolute;
    top: 58px;
    right: 0;
    bottom: 0;
    left: 0
}

.search-panel-box .search-progress {
    height: 44px;
    border-bottom: 1px solid #e4e4e4;
    background-color: #f2f2f2;
    padding: 0 28px
}

.search-panel-box .search-progress .search-loading {
    height: 44px
}

.search-panel-box .search-progress .loading-left {
    float: left;
    line-height: 44px;
    color: #999;
    font-size: 16px;
    font-weight: 700
}

.search-panel-box .search-progress .loading-right {
    float: right;
    margin-top: 11px
}

@-webkit-keyframes throbber-loader {
    0% {
        background: #fff
    }

    20% {
        background: #42a5f5
    }

    40% {
        background: #fff
    }
}

@keyframes throbber-loader {
    0% {
        background: #fff
    }

    20% {
        background: #42a5f5
    }

    40% {
        background: #fff
    }
}

.throbber-loader:not(:required) {
    -webkit-animation: throbber-loader 1s .15s infinite ease-out;
    animation: throbber-loader 1s .15s infinite ease-out;
    background: #fff;
    display: inline-block;
    position: relative;
    text-indent: -9999px;
    width: .9em;
    height: 1.5em;
    margin: 0 1.6em
}

.throbber-loader:not(:required):after,.throbber-loader:not(:required):before {
    background: #fff;
    content: 'x200B';
    display: inline-block;
    width: .9em;
    height: 1.5em;
    position: absolute;
    top: 0
}

.throbber-loader:not(:required):before {
    -webkit-animation: throbber-loader 1s 75ms infinite ease-out;
    animation: throbber-loader 1s 75ms infinite ease-out;
    left: -1.6em
}

.throbber-loader:not(:required):after {
    -webkit-animation: throbber-loader 1s 225ms infinite ease-out;
    animation: throbber-loader 1s 225ms infinite ease-out;
    right: -1.6em
}

.search-panel-box .search-progress .search-result-count {
    line-height: 44px;
    color: #999;
    font-size: 16px;
    font-weight: 700
}

.search-panel-box .search-result-body {
    box-sizing: border-box;
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto
}

.search-panel-box .search-result-body .result-item {
    padding: 18px 28px;
    border-bottom: 1px solid #f2f2f2;
    cursor: pointer;
    -webkit-transition: all .4s;
    transition: all .4s
}

.search-panel-box .search-result-body .item-text {
    font-size: 16px;
    font-weight: 400;
    color: #333;
    line-height: 22px
}

.search-panel-box .search-result-body .result-item:hover {
    background-color: #f7f7f7
}

.search-highlight {
    display: inline-block;
    color: #09f;
    padding: 0 3px
}

.book-mark-container {
    position: absolute;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99
}

.book-markMain-list {
    top: 8px;
    right: 14px;
    width: 360px
}

.book-markMain-list .svg-icon-arrow {
    position: absolute;
    top: -5px;
    left: 50%;
    margin-left: -12px;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: right center;
    -ms-transform-origin: right center;
    transform-origin: right center
}

.book-markMain-list.box-dialog {
    position: absolute;
    box-sizing: border-box;
    bottom: 84px;
    border: 1px solid #e4e4e4;
    border-radius: 2px;
    box-shadow: 3px 3px 4px rgba(0,0,0,.1),-1px -1px 2px rgba(0,0,0,.1);
    background-color: #fff
}

.book-markMain-list.box-dialog .catalog-list-title {
    height: 58px;
    border-bottom: 1px solid #e4e4e4;
    box-sizing: border-box;
    padding: 0 28px;
    font-size: 16px;
    font-weight: 700;
    color: #666;
    line-height: 58px
}

.book-mark-list {
    position: absolute;
    top: 58px;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto
}

.book-mark-list .mark-list {
    height: 78px;
    padding: 10px 28px;
    border-bottom: 1px solid #f2f2f2;
    text-align: left;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    position: relative;
    cursor: pointer
}

.book-mark-list .mark-list:hover {
    background-color: #f7f7f7
}

.book-mark-list .mark-text {
    line-height: 22px;
    font-size: 16px;
    font-weight: 400;
    padding: 6px 30px 6px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.book-mark-list .mark-top {
    width: 100%;
    height: 24px;
    line-height: 24px;
    position: relative
}

.book-mark-list .mark-icon {
    float: left;
    width: 18px;
    height: 18px;
    margin-right: 8px
}

.book-mark-list .mark-time {
    float: left;
    font-size: 12px;
    line-height: 24px;
    color: #666
}

.book-mark-list .mark-position {
    line-height: 78px;
    font-size: 14px;
    text-align: center;
    z-index: 1
}

.book-mark-list .mark-delete,.book-mark-list .mark-position {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 60px;
    color: #bebebe
}

.book-mark-list .mark-delete {
    font-size: 20px;
    display: none;
    cursor: pointer;
    z-index: 2
}

.book-mark-list .delete-bookmark-svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px!important;
    height: 24px!important;
    margin: -12px 0 0 -12px;
    vertical-align: top;
    color: #c4c4c4!important
}

.book-mark-list .mark-list:hover .mark-delete {
    display: block
}

.book-mark-list .mark-list:hover .mark-position {
    display: none
}

.book-mark-list .mark-delete:hover {
    background-color: #d4d4d4
}

.book-mark-list .mark-delete:hover .delete-bookmark-svg {
    color: #fff!important
}

.book-mark-list .mark-content {
    height: 52px;
    padding-top: 8px;
    line-height: 20px;
    font-size: 12px;
    color: #333;
    cursor: pointer
}

.img-viewer-layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999
}

.img-viewer-layer .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.8)
}

.img-viewer-layer .img-wrap {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto
}

.img-viewer-layer .img-scroll-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box
}

.img-viewer-layer .img-scroll-wrap>img {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0)
}

.img-viewer-layer .close-wrap {
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    padding: 18px;
    cursor: pointer;
    -webkit-transition: all .3s;
    transition: all .3s
}

.img-viewer-layer .close-wrap>svg {
    display: block!important;
    color: #fff!important
}

.img-viewer-layer .close-wrap:hover {
    background-color: #595959
}

.img-viewer-layer .handle-wrap {
    position: absolute;
    right: 14px;
    top: 50%;
    width: 40px;
    height: 120px;
    margin-top: -60px;
    background-color: #454545;
    cursor: pointer
}

.img-viewer-layer .handle-wrap span {
    display: block;
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    padding: 8px
}

.img-viewer-layer .handle-wrap span:hover {
    background-color: #595959
}

.img-viewer-layer .handle-wrap span>svg {
    color: #fff!important
}

.img-viewer-layer .handle-wrap .btn-disable {
    cursor: not-allowed
}

.img-viewer-layer .handle-wrap .btn-disable>svg {
    color: #999!important
}

.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.video-js .vjs-modal-dialog,.vjs-button>.vjs-icon-placeholder:before,.vjs-modal-dialog .vjs-modal-dialog-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.vjs-button>.vjs-icon-placeholder:before {
    text-align: center
}

@font-face {
    font-family: VideoJS;
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABDkAAsAAAAAG6gAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAPgAAAFZRiV3hY21hcAAAAYQAAADaAAADPv749/pnbHlmAAACYAAAC3AAABHQZg6OcWhlYWQAAA3QAAAAKwAAADYZw251aGhlYQAADfwAAAAdAAAAJA+RCLFobXR4AAAOHAAAABMAAACM744AAGxvY2EAAA4wAAAASAAAAEhF6kqubWF4cAAADngAAAAfAAAAIAE0AIFuYW1lAAAOmAAAASUAAAIK1cf1oHBvc3QAAA/AAAABJAAAAdPExYuNeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS7wTiBgZWBgaWQ5RkDA8MvCM0cwxDOeI6BgYmBlZkBKwhIc01hcPjI+FGJHcRdyA4RZgQRADK3CxEAAHic7dFZbsMgAEXRS0ycyZnnOeG7y+qC8pU1dHusIOXxuoxaOlwZYWQB0Aea4quIEN4E9LzKbKjzDeM6H/mua6Lmc/p8yhg0lvdYx15ZG8uOLQOGjMp3EzqmzJizYMmKNRu27Nhz4MiJMxeu3Ljz4Ekqm7T8P52G8PP3lnTOVk++Z6iN6QZzNN1F7ptuN7eGOjDUoaGODHVsuvU8MdTO9Hd5aqgzQ50b6sJQl4a6MtS1oW4MdWuoO0PdG+rBUI+GejLUs6FeDPVqqDdDvRvqw1CfhpqM9At0iFLaAAB4nJ1YDXBTVRZ+5/22TUlJ8we0pHlJm7RJf5O8F2j6EymlSPkpxaL8U2xpa3DKj0CBhc2IW4eWKSokIoLsuMqssM64f+jA4HSdWXXXscBq67IOs3FXZ1ZYWVyRFdo899yXtIBQZ90k7717zz3v3HPPOfd854YCCj9cL9dL0RQFOqCbGJnrHb5EayiKIWN8iA/hWBblo6hUWm8TtCDwE80WMJus/irwyxOdxeB0MDb14VNJHnXYoLLSl6FfCUYO9nYPTA8Epg9090LprfbBbZ2hY0UlJUXHQp3/vtWkS6EBv8+rPMq5u9692f/dNxJNiqwC1xPE9TCUgCsSdQWgE3XQD25lkG4CN2xmTcOXWBOyser6RN6KnGbKSbmQ3+d0OI1m2W8QzLLkI2sykrWAgJJEtA8vGGW/2Q+CmT3n8zS9wZwu2DCvtuZKZN3xkrLh36yCZuUomQSqGpY8t/25VfHVhw8z4ebGBtfLb0ya9PCaDc+8dGTvk2dsh6z7WzvowlXKUSWo9MJ15a3KrEP2loOr2Ojhw6iW6hf2BDdEccQvZGpaAy7YovSwq8kr7HGllxpd71rkS6G0Sf11sl9OvMK1+jwPPODxjUwkOim9CU3ix1wNjXDfmJSEn618Bs6lpWwUpU+8PCqLMY650zjq8VhCIP17NEKTx3eaLL+s5Pi6yJWaWjTHLR1jYzPSV9VF/6Ojdb/1kO3Mk3uhHC0x6gc1BjlKQ+nQFxTYdaJkZ7ySVxLBbhR1dsboNXp1tCYKW2LRaEzpYcIx2BKNxaL0ZaUnSqfFoiNhHKR/GkX6PWUSAaJelQaqZL1EpoHNsajSEyPSoJ9IjhIxTdjHLmwZvhRDOiFTY/YeQnvrVZmiTQtGncECXtFTBZLOVwwMRgoXHAkXzMzPn1nAJJ8jYSbMDaqN2waGLzNhih/bZynUBMpIWSg7VYi7DRx2m8ALkIdRCJwI6ArJx2EI8kaDWeTQKeAFk9fjl/1AvwktjQ1P7NjyMGQyfd4vjipX6M/i52D7Cq80kqlcxEcGXRr/FEcgs0u5uGgB4VWuMFfpdn2Re6Hi3PqzmxWKsz6+ae2Pn9hXXw/fqM859UiGC0oKYYILJBqJrsn1Z1E5qOs9rQCiUQRREjm8yJcbHF5cUJufX1vAHlefw0XgUoboS3ETfQlTxBC4SOtuE8VPRJTBSCQSjZCpk7Gqzu+masaZ2y7Zjehho4F3g82BNDkAHpORG4+OCS+f6JTPmtRn/PH1kch6d04sp7AQb25aQ/pqUyXeQ8vrebG8OYQdXOQ+585u0sdW9rqalzRURiJ+9F4MweRFrKUjl1GUYhH1A27WOHw5cTFSFPMo9EeUIGnQTZHIaJ7AHLaOKsOODaNF9jkBjYG2QEsQ2xjMUAx2bBEbeTBWMHwskBjngq56S/yfgkBnWBa4K9sqKtq2t1UI8S9He5XuBRbawAdatrQEAi30Aks2+LM8WeCbalVZkWNylvJ+dqJnzVb+OHlSoKW8nPCP7Rd+CcZ2DdWAGqJ2CBFOphgywFFCFBNtfAbGtNPBCwxvygHeYMZMY9ZboBqwq/pVrsbgN5tkv152ODlbMfiqwGMBgxa4Exz3QhovRIUp6acqZmQzRq0ypDXS2TPLT02YIkQETnOE445oOGxOmXAqUJNNG7XgupMjPq2ua9asrj5yY/yuKteO1Kx0YNJTufrirLe1mZnat7OL6rnUdCWenpW6I8mAnbsY8KWs1PuSovCW9A/Z25PQ24a7cNOqgmTkLmBMgh4THgc4b9k2IVv1/g/F5nGljwPLfOgHAzJzh45V/4+WenTzmMtR5Z7us2Tys909UHqrPY7KbckoxRvRHhmVc3cJGE97uml0R1S0jdULVl7EvZtDFVBF35N9cEdjpgmAiOlFZ+Dtoh93+D3zzHr8RRNZQhnCNMNbcegOvpEwZoL+06cJQ07h+th3fZ/7PVbVC6ngTAV/KoLFuO6+2KFcU651gEb5ugPSIb1D+Xp8V4+k3sEIGnw5mYe4If4k1lFYr6SCzmM2EQ8iWtmwjnBI9kTwe1TlfAmXh7H02by9fW2gsjKwtv0aaURKil4OdV7rDL1MXIFNrhdxohcZXYTnq47WisrKitaObbf5+yvkLi5J6lCNZZ+B6GC38VNBZBDidSS/+mSvh6s+srgC8pyKMvDtt+de3c9fU76ZPfuM8ud4Kv0fyP/LqfepMT/3oZxSqpZaTa1DaQYLY8TFsHYbWYsPoRhRWfL5eSSQbhUGgGC3YLbVMk6PitTFNGpAsNrC6D1VNBKgBHMejaiuRWEWGgsSDBTJjqWIl8kJLlsaLJ2tXDr6xGfT85bM2Q06a46x2HTgvdnV8z5YDy/27J4zt6x2VtkzjoYpkq36kaBr4eQSg7tyiVweWubXZugtadl58ydapfbORfKsDTuZ0OBgx4cfdjCf5tbWNITnL120fdOi1RV1C3uKGzNdwYLcMvZ3BxoPyTOCD1XvXTp7U10gWCVmTV9b3r2z0SkGWovb2hp9I89O8a2smlyaO8muMU+dRmtzp60IzAoFpjLr1n388boLyf0dRvxhsHZ0qbWqDkwqvvpkj4l0fY6EIXRi5sQSrAvsVYwXRy4qJ2EVtD1AN7a0HWth9ymvL1xc3WTUKK/TAHA/bXDVtVWfOMfuGxGZv4Ln/jVr9jc3j1yMv0tndmyt9Vq88Y9gH1wtLX3KWjot5++jWHgAoZZkQ14wGQ20Fli71UmKJAy4xKMSTGbVdybW7FDDAut9XpD5AzWrYO7zQ8qffqF8+Ynd/clrHcdyxGy3a/3+mfNnzC/cBsveTjnTvXf1o6vzOlZw7WtqtdmPK/Errz/6NNtD72zmNOZfbmYdTGHfoofqI79Oc+R2n1lrnL6pOm0Up7kwxhTW12Amm7WYkXR2qYrF2AmgmbAsxZjwy1xpg/m1Je2vrp8v/nz2xpmlBg4E9hrMU341wVpTOh/OfmGvAnra8q6uctr60ZQHV3Q+WMQJykMj8ZsWn2QBOmmHMB+m5pDIpTFonYigiaKAhGEiAHF7EliVnQkjoLVIMPtJpBKHYd3A8GYH9jJzrWwmHx5Qjp7vDAX0suGRym1vtm/9W1/HyR8vczfMs6Sk8DSv855/5dlX9oQq52hT8syyp2rx5Id17IAyAM3wIjQPMOHzytEB64q6D5zT91yNbnx3V/nqnd017S9Y0605k3izoXLpsxde2n38yoOV9s1LcjwzNjbdX6asnBVaBj/6/DwKwPkpcqbDG7BnsXoSqWnUAmottYF6jMSdVyYZh3zVXCjwTiwwHH6sGuRiEHQGzuRX6whZkp123oy1BWE2mEfJ/tvIRtM4ZM5bDXiMsPMaAKOTyc5uL57rqyyc5y5JE5pm1i2S2iUX0CcaQ6lC6Zog7JqSqZmYlosl2K6pwNA84zRnQW6SaALYZQGW5lhCtU/W34N6o+bKfZ8cf3/Cl/+iTX3wBzpOY4mRkeNf3rptycGSshQWgGbYt5jFc2e0+DglIrwl6DVWQ7BuwaJ3Xk1J4VL5urnLl/Wf+gHU/hZoZdKNym6lG+I34FaNeZKcSpJIo2IeCVvpdsDGfKvzJnAwmeD37Ow65ZWwSowpgwX5T69s/rB55dP5BcpgDKFV8p7q2sn/1uc93bVzT/w6UrCqDTWvfCq/oCD/qZXNoUj8BL5Kp6GU017frfNXkAtiiyf/SOCEeLqnd8R/Ql9GlCRfctS6k5chvIBuQ1zCCjoCHL2DHNHIXxMJ3kQeO8lbsUXONeSfA5EjcG6/E+KdhN4bP04vBhdi883+BFBzQbxFbvZzQeY9LNBZc0FNfn5NwfDn6rCTnTw6R8o+gfpf5hCom33cRuiTlss3KHmZjD+BPN+5gXuA2ziS/Q73mLxUkpbKN/eqwz5uK0X9F3h2d1V4nGNgZGBgAOJd776+iue3+crAzc4AAje5Bfcg0xz9YHEOBiYQBQA8FQlFAHicY2BkYGBnAAGOPgaG//85+hkYGVCBMgBGGwNYAAAAeJxjYGBgYB8EmKOPgQEAQ04BfgAAAAAAAA4AaAB+AMwA4AECAUIBbAGYAcICGAJYArQC4AMwA7AD3gQwBJYE3AUkBWYFigYgBmYGtAbqB1gIEghYCG4IhAi2COh4nGNgZGBgUGYoZWBnAAEmIOYCQgaG/2A+AwAYCQG2AHicXZBNaoNAGIZfE5PQCKFQ2lUps2oXBfOzzAESyDKBQJdGR2NQR3QSSE/QE/QEPUUPUHqsvsrXjTMw83zPvPMNCuAWP3DQDAejdm1GjzwS7pMmwi75XngAD4/CQ/oX4TFe4Qt7uMMbOzjuDc0EmXCP/C7cJ38Iu+RP4QEe8CU8pP8WHmOPX2EPz87TPo202ey2OjlnQSXV/6arOjWFmvszMWtd6CqwOlKHq6ovycLaWMWVydXKFFZnmVFlZU46tP7R2nI5ncbi/dDkfDtFBA2DDXbYkhKc+V0Bqs5Zt9JM1HQGBRTm/EezTmZNKtpcAMs9Yu6AK9caF76zoLWIWcfMGOSkVduvSWechqZsz040Ib2PY3urxBJTzriT95lipz+TN1fmAAAAeJxtkMl2wjAMRfOAhABlKm2h80C3+ajgCKKDY6cegP59TYBzukAL+z1Zsq8ctaJTTKPrsUQLbXQQI0EXKXroY4AbDDHCGBNMcYsZ7nCPB8yxwCOe8IwXvOIN7/jAJ76wxHfUqWX+OzgumWAjJMV17i0Ndlr6irLKO+qftdT7i6y4uFSUvCknay+lFYZIZaQcmfH/xIFdYn98bqhra1aKTM/6lWMnyaYirx1rFUQZFBkb2zJUtoXeJCeg0WnLtHeSFc3OtrnozNwqi0TkSpBMDB1nSde5oJXW23hTS2/T0LilglXX7dmFVxLnq5U0vYATHFk3zX3BOisoQHNDFDeZnqKDy9hRNawN7Vh727hFzcJ5c8TILrKZfH7tIPxAFP0BpLeJPA==) format("woff");
    font-weight: 400;
    font-style: normal
}

.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.video-js .vjs-play-control .vjs-icon-placeholder,.vjs-icon-play {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.video-js .vjs-play-control .vjs-icon-placeholder:before,.vjs-icon-play:before {
    content: "\F101"
}

.vjs-icon-play-circle {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.vjs-icon-play-circle:before {
    content: "\F102"
}

.video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder,.vjs-icon-pause {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder:before,.vjs-icon-pause:before {
    content: "\F103"
}

.video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder,.vjs-icon-volume-mute {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder:before,.vjs-icon-volume-mute:before {
    content: "\F104"
}

.video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder,.vjs-icon-volume-low {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder:before,.vjs-icon-volume-low:before {
    content: "\F105"
}

.video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder,.vjs-icon-volume-mid {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder:before,.vjs-icon-volume-mid:before {
    content: "\F106"
}

.video-js .vjs-mute-control .vjs-icon-placeholder,.vjs-icon-volume-high {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.video-js .vjs-mute-control .vjs-icon-placeholder:before,.vjs-icon-volume-high:before {
    content: "\F107"
}

.video-js .vjs-fullscreen-control .vjs-icon-placeholder,.vjs-icon-fullscreen-enter {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.video-js .vjs-fullscreen-control .vjs-icon-placeholder:before,.vjs-icon-fullscreen-enter:before {
    content: "\F108"
}

.video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder,.vjs-icon-fullscreen-exit {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder:before,.vjs-icon-fullscreen-exit:before {
    content: "\F109"
}

.vjs-icon-square {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.vjs-icon-square:before {
    content: "\F10A"
}

.vjs-icon-spinner {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.vjs-icon-spinner:before {
    content: "\F10B"
}

.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js .vjs-subs-caps-button .vjs-icon-placeholder,.video-js .vjs-subtitles-button .vjs-icon-placeholder,.vjs-icon-subtitles {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js .vjs-subtitles-button .vjs-icon-placeholder:before,.vjs-icon-subtitles:before {
    content: "\F10C"
}

.video-js .vjs-captions-button .vjs-icon-placeholder,.video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder,.vjs-icon-captions {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.video-js .vjs-captions-button .vjs-icon-placeholder:before,.video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder:before,.vjs-icon-captions:before {
    content: "\F10D"
}

.video-js .vjs-chapters-button .vjs-icon-placeholder,.vjs-icon-chapters {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.video-js .vjs-chapters-button .vjs-icon-placeholder:before,.vjs-icon-chapters:before {
    content: "\F10E"
}

.vjs-icon-share {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.vjs-icon-share:before {
    content: "\F10F"
}

.vjs-icon-cog {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.vjs-icon-cog:before {
    content: "\F110"
}

.video-js .vjs-play-progress,.video-js .vjs-volume-level,.vjs-icon-circle,.vjs-seek-to-live-control .vjs-icon-placeholder {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.video-js .vjs-play-progress:before,.video-js .vjs-volume-level:before,.vjs-icon-circle:before,.vjs-seek-to-live-control .vjs-icon-placeholder:before {
    content: "\F111"
}

.vjs-icon-circle-outline {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.vjs-icon-circle-outline:before {
    content: "\F112"
}

.vjs-icon-circle-inner-circle {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.vjs-icon-circle-inner-circle:before {
    content: "\F113"
}

.vjs-icon-hd {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.vjs-icon-hd:before {
    content: "\F114"
}

.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder,.vjs-icon-cancel {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before,.vjs-icon-cancel:before {
    content: "\F115"
}

.video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder,.vjs-icon-replay {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder:before,.vjs-icon-replay:before {
    content: "\F116"
}

.vjs-icon-facebook {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.vjs-icon-facebook:before {
    content: "\F117"
}

.vjs-icon-gplus {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.vjs-icon-gplus:before {
    content: "\F118"
}

.vjs-icon-linkedin {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.vjs-icon-linkedin:before {
    content: "\F119"
}

.vjs-icon-twitter {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.vjs-icon-twitter:before {
    content: "\F11A"
}

.vjs-icon-tumblr {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.vjs-icon-tumblr:before {
    content: "\F11B"
}

.vjs-icon-pinterest {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.vjs-icon-pinterest:before {
    content: "\F11C"
}

.video-js .vjs-descriptions-button .vjs-icon-placeholder,.vjs-icon-audio-description {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.video-js .vjs-descriptions-button .vjs-icon-placeholder:before,.vjs-icon-audio-description:before {
    content: "\F11D"
}

.video-js .vjs-audio-button .vjs-icon-placeholder,.vjs-icon-audio {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.video-js .vjs-audio-button .vjs-icon-placeholder:before,.vjs-icon-audio:before {
    content: "\F11E"
}

.vjs-icon-next-item {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.vjs-icon-next-item:before {
    content: "\F11F"
}

.vjs-icon-previous-item {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.vjs-icon-previous-item:before {
    content: "\F120"
}

.video-js .vjs-picture-in-picture-control .vjs-icon-placeholder,.vjs-icon-picture-in-picture-enter {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.video-js .vjs-picture-in-picture-control .vjs-icon-placeholder:before,.vjs-icon-picture-in-picture-enter:before {
    content: "\F121"
}

.video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder,.vjs-icon-picture-in-picture-exit {
    font-family: VideoJS;
    font-weight: 400;
    font-style: normal
}

.video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder:before,.vjs-icon-picture-in-picture-exit:before {
    content: "\F122"
}

.video-js {
    display: block;
    vertical-align: top;
    box-sizing: border-box;
    color: #fff;
    background-color: #000;
    position: relative;
    padding: 0;
    font-size: 10px;
    line-height: 1;
    font-weight: 400;
    font-style: normal;
    font-family: Arial,Helvetica,sans-serif;
    word-break: normal
}

.video-js:-moz-full-screen {
    position: absolute
}

.video-js:-webkit-full-screen {
    width: 100%!important;
    height: 100%!important
}

.video-js[tabindex="-1"] {
    outline: none
}

.video-js *,.video-js :after,.video-js :before {
    box-sizing: inherit
}

.video-js ul {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    list-style-position: outside;
    margin: 0
}

.video-js.vjs-4-3,.video-js.vjs-16-9,.video-js.vjs-fluid {
    width: 100%;
    max-width: 100%;
    height: 0
}

.video-js.vjs-16-9 {
    padding-top: 56.25%
}

.video-js.vjs-4-3 {
    padding-top: 75%
}

.video-js.vjs-fill,.video-js .vjs-tech {
    width: 100%;
    height: 100%
}

.video-js .vjs-tech {
    position: absolute;
    top: 0;
    left: 0
}

body.vjs-full-window {
    padding: 0;
    margin: 0;
    height: 100%
}

.vjs-full-window .video-js.vjs-fullscreen {
    position: fixed;
    overflow: hidden;
    z-index: 1000;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0
}

.video-js.vjs-fullscreen:not(.vjs-ios-native-fs) {
    width: 100%!important;
    height: 100%!important;
    padding-top: 0!important
}

.video-js.vjs-fullscreen.vjs-user-inactive {
    cursor: none
}

.vjs-hidden {
    display: none!important
}

.vjs-disabled {
    opacity: .5;
    cursor: default
}

.video-js .vjs-offscreen {
    height: 1px;
    left: -9999px;
    position: absolute;
    top: 0;
    width: 1px
}

.vjs-lock-showing {
    display: block!important;
    opacity: 1;
    visibility: visible
}

.vjs-no-js {
    padding: 20px;
    color: #fff;
    background-color: #000;
    font-size: 18px;
    font-family: Arial,Helvetica,sans-serif;
    text-align: center;
    width: 300px;
    height: 150px;
    margin: 0 auto
}

.vjs-no-js a,.vjs-no-js a:visited {
    color: #66a8cc
}

.video-js .vjs-big-play-button {
    font-size: 3em;
    line-height: 1.5em;
    height: 1.63332em;
    width: 3em;
    display: block;
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 0;
    cursor: pointer;
    opacity: 1;
    border: .06666em solid #fff;
    background-color: #2b333f;
    background-color: rgba(43,51,63,.7);
    border-radius: .3em;
    -webkit-transition: all .4s;
    transition: all .4s
}

.vjs-big-play-centered .vjs-big-play-button {
    top: 50%;
    left: 50%;
    margin-top: -.81666em;
    margin-left: -1.5em
}

.video-js .vjs-big-play-button:focus,.video-js:hover .vjs-big-play-button {
    border-color: #fff;
    background-color: #73859f;
    background-color: rgba(115,133,159,.5);
    -webkit-transition: all 0s;
    transition: all 0s
}

.vjs-controls-disabled .vjs-big-play-button,.vjs-error .vjs-big-play-button,.vjs-has-started .vjs-big-play-button,.vjs-using-native-controls .vjs-big-play-button {
    display: none
}

.vjs-has-started.vjs-paused.vjs-show-big-play-button-on-pause .vjs-big-play-button {
    display: block
}

.video-js button {
    background: none;
    border: none;
    color: inherit;
    display: inline-block;
    font-size: inherit;
    line-height: inherit;
    text-transform: none;
    text-decoration: none;
    -webkit-transition: none;
    transition: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}

.vjs-control .vjs-button {
    width: 100%;
    height: 100%
}

.video-js .vjs-control.vjs-close-button {
    cursor: pointer;
    height: 3em;
    position: absolute;
    right: 0;
    top: .5em;
    z-index: 2
}

.video-js .vjs-modal-dialog {
    background: rgba(0,0,0,.8);
    background: -webkit-linear-gradient(top,rgba(0,0,0,.8),hsla(0,0%,100%,0));
    background: linear-gradient(180deg,rgba(0,0,0,.8),hsla(0,0%,100%,0));
    overflow: auto
}

.video-js .vjs-modal-dialog>* {
    box-sizing: border-box
}

.vjs-modal-dialog .vjs-modal-dialog-content {
    font-size: 1.2em;
    line-height: 1.5;
    padding: 20px 24px;
    z-index: 1
}

.vjs-menu-button {
    cursor: pointer
}

.vjs-menu-button.vjs-disabled {
    cursor: default
}

.vjs-workinghover .vjs-menu-button.vjs-disabled:hover .vjs-menu {
    display: none
}

.vjs-menu .vjs-menu-content {
    display: block;
    padding: 0;
    margin: 0;
    font-family: Arial,Helvetica,sans-serif;
    overflow: auto
}

.vjs-menu .vjs-menu-content>* {
    box-sizing: border-box
}

.vjs-scrubbing .vjs-control.vjs-menu-button:hover .vjs-menu {
    display: none
}

.vjs-menu li {
    list-style: none;
    margin: 0;
    padding: .2em 0;
    line-height: 1.4em;
    font-size: 1.2em;
    text-align: center;
    text-transform: lowercase
}

.js-focus-visible .vjs-menu li.vjs-menu-item:hover,.vjs-menu li.vjs-menu-item:focus,.vjs-menu li.vjs-menu-item:hover {
    background-color: #73859f;
    background-color: rgba(115,133,159,.5)
}

.js-focus-visible .vjs-menu li.vjs-selected:hover,.vjs-menu li.vjs-selected,.vjs-menu li.vjs-selected:focus,.vjs-menu li.vjs-selected:hover {
    background-color: #fff;
    color: #2b333f
}

.vjs-menu li.vjs-menu-title {
    text-align: center;
    text-transform: uppercase;
    font-size: 1em;
    line-height: 2em;
    padding: 0;
    margin: 0 0 .3em;
    font-weight: 700;
    cursor: default
}

.vjs-menu-button-popup .vjs-menu {
    display: none;
    position: absolute;
    bottom: 0;
    width: 10em;
    left: -3em;
    height: 0;
    margin-bottom: 1.5em;
    border-top-color: rgba(43,51,63,.7)
}

.vjs-menu-button-popup .vjs-menu .vjs-menu-content {
    background-color: #2b333f;
    background-color: rgba(43,51,63,.7);
    position: absolute;
    width: 100%;
    bottom: 1.5em;
    max-height: 15em
}

.vjs-layout-tiny .vjs-menu-button-popup .vjs-menu .vjs-menu-content,.vjs-layout-x-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content {
    max-height: 5em
}

.vjs-layout-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content {
    max-height: 10em
}

.vjs-layout-medium .vjs-menu-button-popup .vjs-menu .vjs-menu-content {
    max-height: 14em
}

.vjs-layout-huge .vjs-menu-button-popup .vjs-menu .vjs-menu-content,.vjs-layout-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content,.vjs-layout-x-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content {
    max-height: 25em
}

.vjs-menu-button-popup .vjs-menu.vjs-lock-showing,.vjs-workinghover .vjs-menu-button-popup.vjs-hover .vjs-menu {
    display: block
}

.video-js .vjs-menu-button-inline {
    -webkit-transition: all .4s;
    transition: all .4s;
    overflow: hidden
}

.video-js .vjs-menu-button-inline:before {
    width: 2.222222222em
}

.video-js .vjs-menu-button-inline.vjs-slider-active,.video-js .vjs-menu-button-inline:focus,.video-js .vjs-menu-button-inline:hover,.video-js.vjs-no-flex .vjs-menu-button-inline {
    width: 12em
}

.vjs-menu-button-inline .vjs-menu {
    opacity: 0;
    height: 100%;
    width: auto;
    position: absolute;
    left: 4em;
    top: 0;
    padding: 0;
    margin: 0;
    -webkit-transition: all .4s;
    transition: all .4s
}

.vjs-menu-button-inline.vjs-slider-active .vjs-menu,.vjs-menu-button-inline:focus .vjs-menu,.vjs-menu-button-inline:hover .vjs-menu {
    display: block;
    opacity: 1
}

.vjs-no-flex .vjs-menu-button-inline .vjs-menu {
    display: block;
    opacity: 1;
    position: relative;
    width: auto
}

.vjs-no-flex .vjs-menu-button-inline.vjs-slider-active .vjs-menu,.vjs-no-flex .vjs-menu-button-inline:focus .vjs-menu,.vjs-no-flex .vjs-menu-button-inline:hover .vjs-menu {
    width: auto
}

.vjs-menu-button-inline .vjs-menu-content {
    width: auto;
    height: 100%;
    margin: 0;
    overflow: hidden
}

.video-js .vjs-control-bar {
    display: none;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3em;
    background-color: #2b333f;
    background-color: rgba(43,51,63,.7)
}

.vjs-has-started .vjs-control-bar {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    visibility: visible;
    opacity: 1;
    -webkit-transition: visibility .1s,opacity .1s;
    transition: visibility .1s,opacity .1s
}

.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {
    visibility: visible;
    opacity: 0;
    -webkit-transition: visibility 1s,opacity 1s;
    transition: visibility 1s,opacity 1s
}

.vjs-controls-disabled .vjs-control-bar,.vjs-error .vjs-control-bar,.vjs-using-native-controls .vjs-control-bar {
    display: none!important
}

.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {
    opacity: 1;
    visibility: visible
}

.vjs-has-started.vjs-no-flex .vjs-control-bar {
    display: table
}

.video-js .vjs-control {
    position: relative;
    text-align: center;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 4em;
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none
}

.vjs-button>.vjs-icon-placeholder:before {
    font-size: 1.8em;
    line-height: 1.67
}

.video-js .vjs-control:focus,.video-js .vjs-control:focus:before,.video-js .vjs-control:hover:before {
    text-shadow: 0 0 1em #fff
}

.video-js .vjs-control-text {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px
}

.vjs-no-flex .vjs-control {
    display: table-cell;
    vertical-align: middle
}

.video-js .vjs-custom-control-spacer {
    display: none
}

.video-js .vjs-progress-control {
    cursor: pointer;
    -webkit-box-flex: 1;
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    min-width: 4em;
    -ms-touch-action: none;
    touch-action: none
}

.video-js .vjs-progress-control.disabled {
    cursor: default
}

.vjs-live .vjs-progress-control {
    display: none
}

.vjs-liveui .vjs-progress-control {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center
}

.vjs-no-flex .vjs-progress-control {
    width: auto
}

.video-js .vjs-progress-holder {
    -webkit-box-flex: 1;
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    -webkit-transition: all .2s;
    transition: all .2s;
    height: .3em
}

.video-js .vjs-progress-control .vjs-progress-holder {
    margin: 0 10px
}

.video-js .vjs-progress-control:hover .vjs-progress-holder {
    font-size: 1.6666666667em
}

.video-js .vjs-progress-control:hover .vjs-progress-holder.disabled {
    font-size: 1em
}

.video-js .vjs-progress-holder .vjs-load-progress,.video-js .vjs-progress-holder .vjs-load-progress div,.video-js .vjs-progress-holder .vjs-play-progress {
    position: absolute;
    display: block;
    height: 100%;
    margin: 0;
    padding: 0;
    width: 0
}

.video-js .vjs-play-progress {
    background-color: #fff
}

.video-js .vjs-play-progress:before {
    font-size: .9em;
    position: absolute;
    right: -.5em;
    top: -.3333333333em;
    z-index: 1
}

.video-js .vjs-load-progress {
    background: rgba(115,133,159,.5)
}

.video-js .vjs-load-progress div {
    background: rgba(115,133,159,.75)
}

.video-js .vjs-time-tooltip {
    background-color: #fff;
    background-color: hsla(0,0%,100%,.8);
    border-radius: .3em;
    color: #000;
    float: right;
    font-family: Arial,Helvetica,sans-serif;
    font-size: 1em;
    padding: 6px 8px 8px;
    pointer-events: none;
    position: absolute;
    top: -3.4em;
    visibility: hidden;
    z-index: 1
}

.video-js .vjs-progress-holder:focus .vjs-time-tooltip {
    display: none
}

.video-js .vjs-progress-control:hover .vjs-progress-holder:focus .vjs-time-tooltip,.video-js .vjs-progress-control:hover .vjs-time-tooltip {
    display: block;
    font-size: .6em;
    visibility: visible
}

.video-js .vjs-progress-control.disabled:hover .vjs-time-tooltip {
    font-size: 1em
}

.video-js .vjs-progress-control .vjs-mouse-display {
    display: none;
    position: absolute;
    width: 1px;
    height: 100%;
    background-color: #000;
    z-index: 1
}

.vjs-no-flex .vjs-progress-control .vjs-mouse-display {
    z-index: 0
}

.video-js .vjs-progress-control:hover .vjs-mouse-display {
    display: block
}

.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display {
    visibility: hidden;
    opacity: 0;
    -webkit-transition: visibility 1s,opacity 1s;
    transition: visibility 1s,opacity 1s
}

.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display {
    display: none
}

.vjs-mouse-display .vjs-time-tooltip {
    color: #fff;
    background-color: #000;
    background-color: rgba(0,0,0,.8)
}

.video-js .vjs-slider {
    position: relative;
    cursor: pointer;
    padding: 0;
    margin: 0 .45em;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #73859f;
    background-color: rgba(115,133,159,.5)
}

.video-js .vjs-slider.disabled {
    cursor: default
}

.video-js .vjs-slider:focus {
    text-shadow: 0 0 1em #fff;
    box-shadow: 0 0 1em #fff
}

.video-js .vjs-mute-control {
    cursor: pointer;
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none
}

.video-js .vjs-volume-control {
    cursor: pointer;
    margin-right: 1em;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
}

.video-js .vjs-volume-control.vjs-volume-horizontal {
    width: 5em
}

.video-js .vjs-volume-panel .vjs-volume-control {
    visibility: visible;
    opacity: 0;
    width: 1px;
    height: 1px;
    margin-left: -1px
}

.video-js .vjs-volume-panel {
    -webkit-transition: width 1s;
    transition: width 1s
}

.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control~.vjs-volume-control,.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active,.video-js .vjs-volume-panel .vjs-volume-control:active,.video-js .vjs-volume-panel:active .vjs-volume-control,.video-js .vjs-volume-panel:focus .vjs-volume-control {
    visibility: visible;
    opacity: 1;
    position: relative;
    -webkit-transition: visibility .1s,opacity .1s,height .1s,width .1s,left 0s,top 0s;
    transition: visibility .1s,opacity .1s,height .1s,width .1s,left 0s,top 0s
}

.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control~.vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-horizontal,.video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-horizontal,.video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-horizontal {
    width: 5em;
    height: 3em;
    margin-right: 0
}

.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control~.vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical,.video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical,.video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical {
    left: -3.5em;
    -webkit-transition: left 0s;
    transition: left 0s
}

.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover,.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,.video-js .vjs-volume-panel.vjs-volume-panel-horizontal:active {
    width: 10em;
    -webkit-transition: width .1s;
    transition: width .1s
}

.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-mute-toggle-only {
    width: 4em
}

.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical {
    height: 8em;
    width: 3em;
    left: -3000em;
    -webkit-transition: visibility 1s,opacity 1s,height 1s 1s,width 1s 1s,left 1s 1s,top 1s 1s;
    transition: visibility 1s,opacity 1s,height 1s 1s,width 1s 1s,left 1s 1s,top 1s 1s
}

.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {
    -webkit-transition: visibility 1s,opacity 1s,height 1s 1s,width 1s,left 1s 1s,top 1s 1s;
    transition: visibility 1s,opacity 1s,height 1s 1s,width 1s,left 1s 1s,top 1s 1s
}

.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {
    width: 5em;
    height: 3em;
    visibility: visible;
    opacity: 1;
    position: relative;
    -webkit-transition: none;
    transition: none
}

.video-js.vjs-no-flex .vjs-volume-control.vjs-volume-vertical,.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical {
    position: absolute;
    bottom: 3em;
    left: .5em
}

.video-js .vjs-volume-panel {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
}

.video-js .vjs-volume-bar {
    margin: 1.35em .45em
}

.vjs-volume-bar.vjs-slider-horizontal {
    width: 5em;
    height: .3em
}

.vjs-volume-bar.vjs-slider-vertical {
    width: .3em;
    height: 5em;
    margin: 1.35em auto
}

.video-js .vjs-volume-level {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #fff
}

.video-js .vjs-volume-level:before {
    position: absolute;
    font-size: .9em
}

.vjs-slider-vertical .vjs-volume-level {
    width: .3em
}

.vjs-slider-vertical .vjs-volume-level:before {
    top: -.5em;
    left: -.3em
}

.vjs-slider-horizontal .vjs-volume-level {
    height: .3em
}

.vjs-slider-horizontal .vjs-volume-level:before {
    top: -.3em;
    right: -.5em
}

.video-js .vjs-volume-panel.vjs-volume-panel-vertical {
    width: 4em
}

.vjs-volume-bar.vjs-slider-vertical .vjs-volume-level {
    height: 100%
}

.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level {
    width: 100%
}

.video-js .vjs-volume-vertical {
    width: 3em;
    height: 8em;
    bottom: 8em;
    background-color: #2b333f;
    background-color: rgba(43,51,63,.7)
}

.video-js .vjs-volume-horizontal .vjs-menu {
    left: -2em
}

.vjs-poster {
    display: inline-block;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
    background-color: #000;
    cursor: pointer;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%
}

.vjs-has-started .vjs-poster {
    display: none
}

.vjs-audio.vjs-has-started .vjs-poster {
    display: block
}

.vjs-using-native-controls .vjs-poster {
    display: none
}

.video-js .vjs-live-control {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-flex: 1;
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    font-size: 1em;
    line-height: 3em
}

.vjs-no-flex .vjs-live-control {
    display: table-cell;
    width: auto;
    text-align: left
}

.video-js.vjs-liveui .vjs-live-control,.video-js:not(.vjs-live) .vjs-live-control {
    display: none
}

.video-js .vjs-seek-to-live-control {
    cursor: pointer;
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    height: 100%;
    padding-left: .5em;
    padding-right: .5em;
    font-size: 1em;
    line-height: 3em;
    width: auto;
    min-width: 4em
}

.vjs-no-flex .vjs-seek-to-live-control {
    display: table-cell;
    width: auto;
    text-align: left
}

.video-js.vjs-live:not(.vjs-liveui) .vjs-seek-to-live-control,.video-js:not(.vjs-live) .vjs-seek-to-live-control {
    display: none
}

.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge {
    cursor: auto
}

.vjs-seek-to-live-control .vjs-icon-placeholder {
    margin-right: .5em;
    color: #888
}

.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge .vjs-icon-placeholder {
    color: red
}

.video-js .vjs-time-control {
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    font-size: 1em;
    line-height: 3em;
    min-width: 2em;
    width: auto;
    padding-left: 1em;
    padding-right: 1em
}

.video-js .vjs-current-time,.video-js .vjs-duration,.vjs-live .vjs-time-control,.vjs-no-flex .vjs-current-time,.vjs-no-flex .vjs-duration {
    display: none
}

.vjs-time-divider {
    display: none;
    line-height: 3em
}

.vjs-live .vjs-time-divider {
    display: none
}

.video-js .vjs-play-control {
    cursor: pointer
}

.video-js .vjs-play-control .vjs-icon-placeholder {
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none
}

.vjs-text-track-display {
    position: absolute;
    bottom: 3em;
    left: 0;
    right: 0;
    top: 0;
    pointer-events: none
}

.video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display {
    bottom: 1em
}

.video-js .vjs-text-track {
    font-size: 1.4em;
    text-align: center;
    margin-bottom: .1em
}

.vjs-subtitles {
    color: #fff
}

.vjs-captions {
    color: #fc6
}

.vjs-tt-cue {
    display: block
}

video::-webkit-media-text-track-display {
    -webkit-transform: translateY(-3em);
    transform: translateY(-3em)
}

.video-js.vjs-user-inactive.vjs-playing video::-webkit-media-text-track-display {
    -webkit-transform: translateY(-1.5em);
    transform: translateY(-1.5em)
}

.video-js .vjs-fullscreen-control,.video-js .vjs-picture-in-picture-control {
    cursor: pointer;
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none
}

.vjs-playback-rate .vjs-playback-rate-value,.vjs-playback-rate>.vjs-menu-button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.vjs-playback-rate .vjs-playback-rate-value {
    pointer-events: none;
    font-size: 1.5em;
    line-height: 2;
    text-align: center
}

.vjs-playback-rate .vjs-menu {
    width: 4em;
    left: 0
}

.vjs-error .vjs-error-display .vjs-modal-dialog-content {
    font-size: 1.4em;
    text-align: center
}

.vjs-error .vjs-error-display:before {
    color: #fff;
    content: "X";
    font-family: Arial,Helvetica,sans-serif;
    font-size: 4em;
    left: 0;
    line-height: 1;
    margin-top: -.5em;
    position: absolute;
    text-shadow: .05em .05em .1em #000;
    text-align: center;
    top: 50%;
    vertical-align: middle;
    width: 100%
}

.vjs-loading-spinner {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -25px;
    opacity: .85;
    text-align: left;
    border: 6px solid rgba(43,51,63,.7);
    box-sizing: border-box;
    background-clip: padding-box;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    visibility: hidden
}

.vjs-seeking .vjs-loading-spinner,.vjs-waiting .vjs-loading-spinner {
    display: block;
    -webkit-animation: vjs-spinner-show 0s linear .3s forwards;
    animation: vjs-spinner-show 0s linear .3s forwards
}

.vjs-loading-spinner:after,.vjs-loading-spinner:before {
    content: "";
    position: absolute;
    margin: -6px;
    box-sizing: inherit;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    opacity: 1;
    border: inherit;
    border-color: transparent;
    border-top-color: #fff
}

.vjs-seeking .vjs-loading-spinner:after,.vjs-seeking .vjs-loading-spinner:before,.vjs-waiting .vjs-loading-spinner:after,.vjs-waiting .vjs-loading-spinner:before {
    -webkit-animation: vjs-spinner-spin 1.1s cubic-bezier(.6,.2,0,.8) infinite,vjs-spinner-fade 1.1s linear infinite;
    animation: vjs-spinner-spin 1.1s cubic-bezier(.6,.2,0,.8) infinite,vjs-spinner-fade 1.1s linear infinite
}

.vjs-seeking .vjs-loading-spinner:before,.vjs-waiting .vjs-loading-spinner:before {
    border-top-color: #fff
}

.vjs-seeking .vjs-loading-spinner:after,.vjs-waiting .vjs-loading-spinner:after {
    border-top-color: #fff;
    -webkit-animation-delay: .44s;
    animation-delay: .44s
}

@keyframes vjs-spinner-show {
    to {
        visibility: visible
    }
}

@-webkit-keyframes vjs-spinner-show {
    to {
        visibility: visible
    }
}

@keyframes vjs-spinner-spin {
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

@-webkit-keyframes vjs-spinner-spin {
    to {
        -webkit-transform: rotate(1turn)
    }
}

@keyframes vjs-spinner-fade {
    0% {
        border-top-color: #73859f
    }

    20% {
        border-top-color: #73859f
    }

    35% {
        border-top-color: #fff
    }

    60% {
        border-top-color: #73859f
    }

    to {
        border-top-color: #73859f
    }
}

@-webkit-keyframes vjs-spinner-fade {
    0% {
        border-top-color: #73859f
    }

    20% {
        border-top-color: #73859f
    }

    35% {
        border-top-color: #fff
    }

    60% {
        border-top-color: #73859f
    }

    to {
        border-top-color: #73859f
    }
}

.vjs-chapters-button .vjs-menu ul {
    width: 24em
}

.video-js .vjs-subs-caps-button+.vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder {
    vertical-align: middle;
    display: inline-block;
    margin-bottom: -.1em
}

.video-js .vjs-subs-caps-button+.vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before {
    font-family: VideoJS;
    content: "\F10D";
    font-size: 1.5em;
    line-height: inherit
}

.video-js .vjs-audio-button+.vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder {
    vertical-align: middle;
    display: inline-block;
    margin-bottom: -.1em
}

.video-js .vjs-audio-button+.vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before {
    font-family: VideoJS;
    content: " \F11D";
    font-size: 1.5em;
    line-height: inherit
}

.video-js:not(.vjs-fullscreen).vjs-layout-small .vjs-audio-button,.video-js:not(.vjs-fullscreen).vjs-layout-small .vjs-captions-button,.video-js:not(.vjs-fullscreen).vjs-layout-small .vjs-chapters-button,.video-js:not(.vjs-fullscreen).vjs-layout-small .vjs-current-time,.video-js:not(.vjs-fullscreen).vjs-layout-small .vjs-descriptions-button,.video-js:not(.vjs-fullscreen).vjs-layout-small .vjs-duration,.video-js:not(.vjs-fullscreen).vjs-layout-small .vjs-playback-rate,.video-js:not(.vjs-fullscreen).vjs-layout-small .vjs-remaining-time,.video-js:not(.vjs-fullscreen).vjs-layout-small .vjs-subtitles-button,.video-js:not(.vjs-fullscreen).vjs-layout-small .vjs-time-divider,.video-js:not(.vjs-fullscreen).vjs-layout-small .vjs-volume-control,.video-js:not(.vjs-fullscreen).vjs-layout-tiny .vjs-audio-button,.video-js:not(.vjs-fullscreen).vjs-layout-tiny .vjs-captions-button,.video-js:not(.vjs-fullscreen).vjs-layout-tiny .vjs-chapters-button,.video-js:not(.vjs-fullscreen).vjs-layout-tiny .vjs-current-time,.video-js:not(.vjs-fullscreen).vjs-layout-tiny .vjs-descriptions-button,.video-js:not(.vjs-fullscreen).vjs-layout-tiny .vjs-duration,.video-js:not(.vjs-fullscreen).vjs-layout-tiny .vjs-playback-rate,.video-js:not(.vjs-fullscreen).vjs-layout-tiny .vjs-remaining-time,.video-js:not(.vjs-fullscreen).vjs-layout-tiny .vjs-subtitles-button,.video-js:not(.vjs-fullscreen).vjs-layout-tiny .vjs-time-divider,.video-js:not(.vjs-fullscreen).vjs-layout-tiny .vjs-volume-control,.video-js:not(.vjs-fullscreen).vjs-layout-x-small .vjs-audio-button,.video-js:not(.vjs-fullscreen).vjs-layout-x-small .vjs-captions-button,.video-js:not(.vjs-fullscreen).vjs-layout-x-small .vjs-chapters-button,.video-js:not(.vjs-fullscreen).vjs-layout-x-small .vjs-current-time,.video-js:not(.vjs-fullscreen).vjs-layout-x-small .vjs-descriptions-button,.video-js:not(.vjs-fullscreen).vjs-layout-x-small .vjs-duration,.video-js:not(.vjs-fullscreen).vjs-layout-x-small .vjs-playback-rate,.video-js:not(.vjs-fullscreen).vjs-layout-x-small .vjs-remaining-time,.video-js:not(.vjs-fullscreen).vjs-layout-x-small .vjs-subtitles-button,.video-js:not(.vjs-fullscreen).vjs-layout-x-small .vjs-time-divider,.video-js:not(.vjs-fullscreen).vjs-layout-x-small .vjs-volume-control {
    display: none
}

.video-js:not(.vjs-fullscreen).vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,.video-js:not(.vjs-fullscreen).vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:active,.video-js:not(.vjs-fullscreen).vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover,.video-js:not(.vjs-fullscreen).vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,.video-js:not(.vjs-fullscreen).vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:active,.video-js:not(.vjs-fullscreen).vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:hover,.video-js:not(.vjs-fullscreen).vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,.video-js:not(.vjs-fullscreen).vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:active,.video-js:not(.vjs-fullscreen).vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover {
    width: auto
}

.video-js:not(.vjs-fullscreen).vjs-layout-tiny .vjs-subs-caps-button,.video-js:not(.vjs-fullscreen).vjs-layout-x-small:not(.vjs-live) .vjs-subs-caps-button,.video-js:not(.vjs-fullscreen).vjs-layout-x-small:not(.vjs-liveui) .vjs-subs-caps-button {
    display: none
}

.video-js:not(.vjs-fullscreen).vjs-layout-tiny .vjs-custom-control-spacer,.video-js:not(.vjs-fullscreen).vjs-layout-x-small.vjs-liveui .vjs-custom-control-spacer {
    -webkit-box-flex: 1;
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    display: block
}

.video-js:not(.vjs-fullscreen).vjs-layout-tiny.vjs-no-flex .vjs-custom-control-spacer,.video-js:not(.vjs-fullscreen).vjs-layout-x-small.vjs-liveui.vjs-no-flex .vjs-custom-control-spacer {
    width: auto
}

.video-js:not(.vjs-fullscreen).vjs-layout-tiny .vjs-progress-control,.video-js:not(.vjs-fullscreen).vjs-layout-x-small.vjs-liveui .vjs-progress-control {
    display: none
}

.vjs-modal-dialog.vjs-text-track-settings {
    background-color: #2b333f;
    background-color: rgba(43,51,63,.75);
    color: #fff;
    height: 70%
}

.vjs-text-track-settings .vjs-modal-dialog-content {
    display: table
}

.vjs-text-track-settings .vjs-track-settings-colors,.vjs-text-track-settings .vjs-track-settings-controls,.vjs-text-track-settings .vjs-track-settings-font {
    display: table-cell
}

.vjs-text-track-settings .vjs-track-settings-controls {
    text-align: right;
    vertical-align: bottom
}

@supports ((display: -ms-grid) or (display:grid)) {
    .vjs-text-track-settings .vjs-modal-dialog-content {
        display:-ms-grid;
        display: grid;
        -ms-grid-columns: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        -ms-grid-rows: 1fr;
        grid-template-rows: 1fr;
        padding: 20px 24px 0
    }

    .vjs-track-settings-controls .vjs-default-button {
        margin-bottom: 20px
    }

    .vjs-text-track-settings .vjs-track-settings-controls {
        grid-column: 1/-1
    }

    .vjs-layout-small .vjs-text-track-settings .vjs-modal-dialog-content,.vjs-layout-tiny .vjs-text-track-settings .vjs-modal-dialog-content,.vjs-layout-x-small .vjs-text-track-settings .vjs-modal-dialog-content {
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr
    }
}

.vjs-track-setting>select {
    margin-right: 1em;
    margin-bottom: .5em
}

.vjs-text-track-settings fieldset {
    margin: 5px;
    padding: 3px;
    border: none
}

.vjs-text-track-settings fieldset span {
    display: inline-block
}

.vjs-text-track-settings fieldset span>select {
    max-width: 7.3em
}

.vjs-text-track-settings legend {
    color: #fff;
    margin: 0 0 5px
}

.vjs-text-track-settings .vjs-label {
    position: absolute;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px,1px,1px,1px);
    display: block;
    margin: 0 0 5px;
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden
}

.vjs-track-settings-controls button:active,.vjs-track-settings-controls button:focus {
    outline-style: solid;
    outline-width: medium;
    background-image: -webkit-linear-gradient(bottom,#fff 88%,#73859f);
    background-image: linear-gradient(0deg,#fff 88%,#73859f)
}

.vjs-track-settings-controls button:hover {
    color: rgba(43,51,63,.75)
}

.vjs-track-settings-controls button {
    background-color: #fff;
    background-image: -webkit-linear-gradient(top,#fff 88%,#73859f);
    background-image: linear-gradient(-180deg,#fff 88%,#73859f);
    color: #2b333f;
    cursor: pointer;
    border-radius: 2px
}

.vjs-track-settings-controls .vjs-default-button {
    margin-right: 1em
}

@media print {
    .video-js>:not(.vjs-tech):not(.vjs-poster) {
        visibility: hidden
    }
}

.vjs-resize-manager {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    z-index: -1000
}

.js-focus-visible .video-js :focus:not(.focus-visible),.video-js .vjs-menu :focus:not(:focus-visible),.video-js :focus:not(:focus-visible) {
    outline: none;
    background: none
}

.book-video-layer {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    position: absolute;
    right: 20px;
    bottom: 6px;
    width: 522px;
    height: 344px;
    z-index: 101;
    box-sizing: border-box
}

.book-video-layer .top {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.book-video-layer .top,.book-video-layer .top .btn-wrap {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 40px
}

.book-video-layer .top .btn-wrap {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 40px;
    color: #fff;
    background-color: #333;
    cursor: pointer
}

.book-video-layer .top .btn-wrap img {
    display: block;
    width: 24px;
    height: 24px
}

.book-video-layer .bottom {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    background-color: #333;
    box-shadow: 0 0 10px 4px rgba(0,0,0,.1)
}

.book-video-layer #videoPlayer {
    width: 100%;
    height: 100%;
    border: none;
    outline: none
}

.book-video-layer #videoPlayer video {
    width: 100%;
    height: 100%
}

.book-video-layer .video-player {
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: none;
    border: none
}

.book-audio-layout {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    position: absolute;
    bottom: 8px;
    right: 15px;
    width: 340px;
    height: 54px;
    z-index: 101;
    border-radius: 30px;
    box-shadow: 0 0 10px 4px rgba(0,0,0,.1);
    background-color: #f1f3f4
}

.book-audio-layout audio {
    border: none;
    outline: none
}

.book-audio-layout .close-btn {
    cursor: pointer;
    height: 54px;
    width: 54px;
    box-sizing: border-box;
    padding: 20px 20px 20px 10px
}

.book-audio-layout .close-btn img {
    display: block;
    height: 100%;
    box-sizing: border-box
}

.book-web-page-layer .web-page-iframe {
    width: 100%;
    height: 100%;
    border: none
}

.book-web-page-layer {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    position: absolute;
    z-index: 102;
    width: 700px;
    height: 500px;
    right: 20px;
    bottom: 6px;
    box-sizing: border-box
}

.book-web-page-layer .top {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 2;
    -webkit-touch-callout: none
}

.book-web-page-layer .top,.book-web-page-layer .top .btn-wrap {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 38px
}

.book-web-page-layer .top .btn-wrap {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 38px;
    color: #fff;
    background-color: #333;
    cursor: pointer
}

.book-web-page-layer .top .btn-wrap img {
    display: block;
    width: 24px;
    height: 24px
}

.book-web-page-layer .bottom {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    background-color: #fff;
    box-shadow: 0 0 10px 4px rgba(0,0,0,.1)
}

#content-doc-frame,#reflowable-book-frame,#scaler,#scrolled-content-frame,.container,.iframe-fixed {
    height: 100%;
    width: 100%
}

.container {
    position: relative;
    min-width: 900px;
    overflow: hidden
}

.toggle-btn {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 110;
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #ff6c26
}

.window-create-tips {
    position: absolute;
    left: 50%;
    top: 70px;
    font-size: 14px;
    line-height: 22px;
    background: #666;
    color: #fff;
    padding: 6px 20px;
    border-radius: 2px;
    -webkit-transition: all .4s;
    transition: all .4s;
    width: auto
}

.book-container-full {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    height: 100vh
}

.logout-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
}

.logout-container .header {
    position: relative;
    height: 50px;
    background-color: #fff;
    box-shadow: 0 2px 3px rgba(0,0,0,.1);
    padding: 0 30px;
    z-index: 2
}

.logout-container .header .logo {
    float: left;
    line-height: 50px;
    font-size: 24px
}

.logout-container .header .logo a {
    font-size: 24px;
    color: #42a5f5
}

.logout-container .header .title {
    float: left;
    line-height: 50px;
    font-size: 16px;
    padding-left: 40px;
    color: #666
}

.logout-container .center {
    position: absolute;
    top: 50px;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #e4e4e4
}

.logout-container .center-box {
    position: absolute;
    top: 15%;
    left: 50%;
    width: 660px;
    min-height: 260px;
    box-sizing: border-box;
    margin-left: -330px;
    background-color: #fff;
    box-shadow: 0 2px 3px rgba(0,0,0,.1),2px 0 3px rgba(0,0,0,.1);
    padding: 0 40px
}

.logout-container .center-box .box-title {
    height: 56px;
    line-height: 56px;
    border-bottom: 1px solid #e4e4e4;
    font-size: 16px;
    color: #666
}

.logout-container .center-box .box-main {
    padding: 20px 0
}

.logout-container .center-box .box-main .box-info {
    font-size: 16px;
    color: #666;
    line-height: 24px
}

.logout-container .center-box .box-button {
    width: 224px;
    height: 42px;
    margin: 30px auto 0
}

.logout-container .center-box .box-button .btn {
    display: block;
    line-height: 42px;
    text-align: center;
    font-size: 16px;
    color: #fff
}

.logout-container .center-box .box-button .red {
    background-color: #ff656a;
    cursor: pointer
}

.logout-container .center-box .box-button .gray {
    background-color: #ccc;
    cursor: not-allowed
}

.logout-container .center-box .box-button .green {
    background-color: #86c355;
    cursor: pointer
}

.book-shelf-container .shelf-header {
    height: 50px;
    background-color: #fff;
    box-shadow: 0 2px 3px rgba(0,0,0,.1);
    position: relative;
    z-index: 2
}

.book-shelf-container .shelf-header .header-left {
    float: left;
    padding-left: 30px
}

.book-shelf-container .shelf-header .logo {
    float: left;
    line-height: 50px
}

.book-shelf-container .shelf-header .logo-link {
    display: inline-block;
    line-height: 50px;
    color: #42a5f5;
    font-size: 18px;
    vertical-align: top
}

.book-shelf-container .shelf-header .version {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    background: -webkit-linear-gradient(top,#00bfd5,#00aecf,#009cca);
    background: linear-gradient(180deg,#00bfd5,#00aecf,#009cca);
    color: #fff;
    border-radius: 3px;
    padding: 0 6px;
    margin: 15px 0 0 10px;
    vertical-align: top
}

.book-shelf-container .shelf-header .application-type {
    float: left;
    line-height: 50px;
    font-size: 14px;
    color: #999;
    margin-left: 18px
}

.book-shelf-container .shelf-header .version-type,.book-shelf-container .shelf-header .version-upgrade {
    float: left;
    height: 18px;
    line-height: 18px;
    font-size: 12px;
    color: #fff;
    border-radius: 3px;
    padding: 0 6px;
    background: #d7d7d7;
    margin: 17px 10px 0 20px
}

.book-shelf-container .shelf-header .header-right {
    float: right;
    height: 50px
}

.book-shelf-container .shelf-header .upgrade-explain {
    float: left;
    line-height: 50px;
    color: #f60;
    margin-right: 24px
}

.book-shelf-container .shelf-header .link-jump {
    float: left;
    line-height: 50px;
    color: #999;
    margin-right: 24px
}

.book-shelf-container .shelf-header .right-button-list {
    float: left;
    position: relative;
    padding: 11px 24px 11px 0
}

.book-shelf-container .shelf-header .right-button-list:before {
    content: '';
    position: absolute;
    left: 0;
    top: 11px;
    width: 1px;
    height: 28px
}

.book-shelf-container .shelf-header .right-button-list>a {
    display: inline-block;
    vertical-align: top
}

.book-shelf-container .shelf-header .item-login-btn {
    font-size: 16px;
    line-height: 28px;
    color: #666;
    padding: 0 24px
}

.book-shelf-container .shelf-header .item-register-btn {
    font-size: 16px;
    line-height: 28px;
    color: #42a5f5
}

.book-shelf-container .shelf-header .item-register-btn:hover {
    opacity: .8
}

.book-shelf-container .shelf-header .right-login-wrap {
    float: left;
    height: 50px;
    padding: 10px 24px 0;
    position: relative;
    cursor: pointer
}

.book-shelf-container .shelf-header .right-login-wrap:before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 1px;
    height: 30px;
    background-color: #e4e4e4
}

.book-shelf-container .right-login-wrap:hover .login-info-wrap {
    display: block
}

.book-shelf-container .shelf-header .user-head-avatar {
    position: relative;
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background: #d7d7d7
}

.book-shelf-container .shelf-header .user-head-avatar>img {
    display: block;
    width: 100%;
    border-radius: 50%;
    border: none
}

.book-shelf-container .shelf-header .login-info-wrap {
    position: absolute;
    right: 0;
    top: 50px;
    background: #fff;
    border: 1px solid #e4e4e4;
    width: 180px;
    display: none;
    box-shadow: 2px 2px 4px rgba(0,0,0,.2)
}

.book-shelf-container .shelf-header .info-item {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    position: relative
}

.book-shelf-container .shelf-header .logout-link {
    display: block;
    width: 100%;
    height: 100%
}

.book-shelf-container .shelf-header .item-bottom-border {
    border-bottom: 1px solid #e4e4e4
}

.book-shelf-container .shelf-header .info-item svg {
    float: left;
    width: 16px!important;
    height: 16px!important;
    color: #999!important;
    margin: 12px 8px 0
}

.book-shelf-container .shelf-header .info-item span {
    float: left;
    font-size: 14px;
    color: #383838;
    margin-left: 6px
}

.book-shelf-container .shelf-header .info-item:hover {
    background: #efefef;
    cursor: pointer
}

.book-shelf-container .shelf-header .info-item .svg-icon-logout,.book-shelf-container .shelf-header .info-item .svg-icon-message {
    width: 14px!important;
    height: 14px!important
}

.book-shelf-container .shelf-header .right-login-wrap:hover .login-info-wrap {
    display: block
}

.book-shelf-container .shelf-header .header-left .user-upgrade-tips {
    float: left;
    height: 18px;
    line-height: 18px;
    font-size: 12px;
    background-color: #ff6507;
    color: #fff;
    border-radius: 3px;
    padding: 0 6px;
    margin: 16px 0;
    cursor: pointer
}

.book-shelf-container .shelf-header .header-left .upgrade-membership-tips {
    float: left;
    width: 12px!important;
    height: 12px!important;
    color: #fff!important;
    margin: 3px 4px 0 0
}

.book-shelf-container .shelf-header .header-left .upgrade-membership-text {
    float: left;
    font-style: normal;
    line-height: 18px;
    font-size: 12px
}

.pulse-button {
    position: relative;
    border: none;
    box-shadow: 0 0 0 0 rgba(255,101,7,.7);
    cursor: pointer;
    -webkit-animation: pulse 2s infinite cubic-bezier(.66,0,0,1);
    animation: pulse 2s infinite cubic-bezier(.66,0,0,1)
}

.pulse-button:hover {
    -webkit-animation: none;
    animation: none
}

@-webkit-keyframes pulse {
    to {
        box-shadow: 0 0 0 6px rgba(255,101,7,0)
    }
}

@keyframes pulse {
    to {
        box-shadow: 0 0 0 6px rgba(255,101,7,0)
    }
}

.book-library-main .open-wrap {
    padding-top: 26px;
    padding-bottom: 14px;
    border-bottom: 1px solid #ccc
}

.book-library-main .open-wrap .left-tips {
    position: relative;
    float: left;
    font-size: 0;
    z-index: 10
}

.book-library-main .open-wrap .left-tips .tips-text {
    display: inline-block;
    vertical-align: top;
    height: 28px;
    line-height: 28px;
    font-size: 16px;
    color: #999
}

.book-library-main .open-wrap .left-tips .tips-wrap {
    position: relative;
    display: inline-block;
    vertical-align: top;
    height: 28px;
    line-height: 28px;
    padding: 4px 0;
    margin-left: 10px
}

.book-library-main .open-wrap .left-tips .tips-icon {
    display: block!important;
    width: 20px!important;
    height: 20px!important;
    color: #999!important;
    cursor: pointer
}

.book-library-main .open-wrap .left-tips .tips-box {
    position: absolute;
    top: 40px;
    left: 50%;
    width: 264px;
    min-height: 228px;
    padding: 10px 16px;
    background-color: #666;
    margin-left: -132px;
    display: none
}

.book-library-main .open-wrap .left-tips .tips-box:before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    width: 0;
    height: 0;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #666;
    margin-left: -10px
}

.book-library-main .open-wrap .left-tips .tips-wrap:hover .tips-box {
    display: block
}

.book-library-main .open-wrap .left-tips .tips-box span {
    display: block;
    font-size: 14px;
    line-height: 22px;
    color: #fff;
    padding-bottom: 10px
}

.book-library-main .open-wrap .left-tips .tips-box span:last-of-type {
    padding-bottom: 0
}

.book-library-main .open-wrap .tips-red {
    float: left;
    height: 28px;
    line-height: 28px;
    font-size: 18px;
    font-weight: 700;
    color: #ef5350;
    margin-left: 20px;
    text-decoration: underline;
    cursor: pointer
}

.book-library-main .open-wrap .right-button {
    float: right;
    font-size: 0
}

.book-library-main .open-wrap .right-button .button {
    position: relative;
    display: inline-block;
    vertical-align: top;
    padding: 0 20px 0 36px;
    margin-left: 20px;
    border-radius: 15px;
    cursor: pointer;
    -webkit-transition: all .3s;
    transition: all .3s
}

.book-library-main .open-wrap .right-button .button:hover {
    box-shadow: 2px 2px 6px rgba(0,0,0,.2)
}

.book-library-main .open-wrap .right-button .btn-icon {
    position: absolute;
    left: 10px;
    top: 4px;
    width: 20px;
    height: 20px
}

.book-library-main .open-wrap .right-button .btn-icon svg {
    display: block!important;
    width: 20px!important;
    height: 20px!important;
    color: #fff!important
}

.book-library-main .open-wrap .right-button .btn-text {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    color: #fff;
    line-height: 28px
}

.book-library-main .open-wrap .right-button .local-book {
    background-color: #ff6525
}

.book-library-main .open-wrap .right-button .cloud-book {
    background-color: #f94
}

.book-library-main .open-wrap .open-book-title {
    font-size: 36px;
    line-height: 48px;
    color: #666
}

.book-library-main .open-wrap .open-button-list {
    padding-top: 10px;
    position: relative
}

.book-library-main .open-wrap .button-item {
    display: inline-block;
    vertical-align: top;
    height: 38px;
    padding: 0 20px 0 16px;
    border-radius: 20px;
    margin-right: 24px;
    cursor: pointer;
    -webkit-transition: all .5s;
    transition: all .5s
}

.book-library-main .open-wrap .button-item:hover {
    opacity: .8;
    box-shadow: 2px 2px 4px rgba(0,0,0,.2)
}

.book-library-main .open-wrap .change-book-file {
    display: none
}

.book-library-main .open-wrap .button-item>img {
    display: inline-block;
    vertical-align: top;
    margin-top: 6px;
    width: 24px
}

.book-library-main .open-wrap .button-item>span {
    display: inline-block;
    vertical-align: top;
    line-height: 38px;
    color: #fff;
    margin-left: 10px
}

.book-library-main .open-wrap .local-book-btn {
    background: -webkit-linear-gradient(top,#00c1d5,#00b7d2,#00adcf,#00a2cc,#009bc9);
    background: linear-gradient(180deg,#00c1d5,#00b7d2,#00adcf,#00a2cc,#009bc9)
}

.book-library-main .open-wrap .cloud-book-btn {
    background: -webkit-linear-gradient(top,#fe6629,#fc7242,#f98164,#f69187,#f59693);
    background: linear-gradient(180deg,#fe6629,#fc7242,#f98164,#f69187,#f59693)
}

.book-library-main .open-wrap .share-book-btn {
    background-color: #95cc31
}

.book-library-main .open-wrap .help-btn {
    border: 2px solid #999
}

.book-library-main .open-wrap .help-btn .open-share-btn {
    width: 20px;
    height: 20px;
    margin-top: 6px
}

.book-library-main .open-wrap .help-btn span {
    line-height: 34px;
    color: #999
}

.book-library-main .open-wrap .no-add-book {
    position: absolute;
    top: 10px;
    left: 0;
    width: 400px;
    height: 38px;
    cursor: pointer
}

.book-library-main .open-wrap .vip-book-btn {
    border: 2px solid #f60
}

.book-library-main .open-wrap .vip-book-btn span {
    line-height: 34px;
    color: #f60
}

.book-library-main .open-wrap .vip-book-btn img {
    width: 22px;
    height: 22px;
    margin-top: 6px
}

#shadowBookRenderDivForEpub {
    display: none
}

.book-loading-wrap {
    position: fixed;
    width: 340px;
    height: 40px;
    left: 50%;
    bottom: 100px;
    z-index: 999;
    margin-left: -170px;
    -webkit-transform: translateY(200px);
    -ms-transform: translateY(200px);
    transform: translateY(200px);
    -webkit-transition: all 1s;
    transition: all 1s;
    opacity: 0
}

.book-loading-wrap .book-loading {
    background: #666;
    width: 226px;
    height: 40px;
    margin: 0 auto;
    opacity: 1;
    border-radius: 2px
}

.book-loading-wrap .loading-animate {
    float: left;
    width: 24px;
    height: 24px;
    margin: 8px 12px
}

.book-loading-wrap .animate-rotate {
    color: #fff!important;
    -webkit-animation: rotate 1s linear infinite;
    animation: rotate 1s linear infinite
}

.book-loading-wrap .loading-text {
    line-height: 40px;
    margin-left: 50px;
    color: #fff
}

@-webkit-keyframes rotate {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

@keyframes rotate {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

.book-loading-wrap .book-load-success {
    background: #4caf50;
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    -webkit-transition: all 1s;
    transition: all 1s;
    opacity: 0;
    border-radius: 2px
}

.book-loading-wrap .success-text {
    float: left;
    color: #fff;
    padding: 0 16px
}

.book-loading-wrap .close-loading-btn {
    float: right;
    width: 24px;
    height: 24px;
    margin: 8px 16px
}

.book-loading-wrap .svg-close-btn {
    color: #fff!important;
    cursor: pointer
}

.book-loading-wrap .book-load-fail {
    background: #f44336;
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    cursor: pointer;
    -webkit-transition: all 1s;
    transition: all 1s;
    opacity: 0;
    border-radius: 2px
}

.book-loading-wrap .fail-text {
    float: left;
    color: #fff;
    padding: 0 16px
}

.book-loading-wrap .fail-loading-btn {
    float: right;
    width: 24px;
    height: 24px;
    margin: 8px
}

.book-loading-wrap .fail-jump-btn {
    color: #fff!important
}

.book-loading-wrap.loading-in {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0)
}

.book-loading-wrap.loading-out {
    opacity: 0;
    -webkit-transform: translateY(200px);
    -ms-transform: translateY(200px);
    transform: translateY(200px)
}

.book-loading-wrap .show {
    opacity: 1
}

.book-loading-wrap .hide {
    opacity: 0
}

.book-loading-wrap .parse-fail-jump {
    float: left;
    width: 280px;
    height: 40px
}

.book-cloud-notification {
    position: fixed;
    min-width: 340px;
    height: 40px;
    left: 50%;
    bottom: 100px;
    z-index: 999;
    -webkit-transform: translate3d(-50%,200px,0);
    transform: translate3d(-50%,200px,0);
    -webkit-transition: all 1s;
    transition: all 1s;
    opacity: 0
}

.book-cloud-notification .book-is-already {
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    -webkit-transition: all 1s;
    transition: all 1s;
    border-radius: 2px
}

.book-cloud-notification .already-text {
    float: left;
    color: #fff;
    padding: 0 16px
}

.book-cloud-notification .close-book-cloud-tips {
    float: right;
    width: 24px;
    height: 24px;
    margin: 8px 16px
}

.book-cloud-notification .close-btn-svg {
    color: #fff!important;
    cursor: pointer
}

.book-cloud-notification .color-is-blue {
    background: #2196f3;
    opacity: 0
}

.book-cloud-notification .color-is-orange {
    background: #f60;
    opacity: 0
}

.book-cloud-notification.loading-in {
    opacity: 1;
    -webkit-transform: translate3d(-50%,0,0);
    transform: translate3d(-50%,0,0)
}

.book-cloud-notification.loading-out {
    opacity: 0;
    -webkit-transform: translate3d(-50%,200px,0);
    transform: translate3d(-50%,200px,0)
}

.book-cloud-notification .show {
    opacity: 1
}

.book-cloud-notification .hide {
    opacity: 0
}

.book-list-wrap .no-book-tips {
    height: 180px
}

.book-list-wrap .no-book-tips .tips-box {
    float: right;
    width: 460px;
    text-align: center;
    padding-top: 16px
}

.book-list-wrap .no-book-tips .tips-svg {
    display: block;
    width: 50px;
    height: 50px;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    margin: 0 auto
}

.book-list-wrap .no-book-tips .svg-icon-arrow {
    display: block!important;
    width: 50px!important;
    height: 50px!important;
    color: #919191!important
}

.book-list-wrap .no-book-tips .tips-title {
    font-size: 26px;
    color: #747474;
    padding-top: 16px
}

.book-list-wrap .no-book-tips .tips-text {
    font-size: 18px;
    color: #999;
    padding-top: 10px
}

.book-library-main .book-list-wrap .list-content {
    padding: 20px 140px;
    height: 100%;
    position: relative
}

.book-library-main .book-list-wrap .my-book-title {
    font-size: 16px;
    line-height: 36px;
    color: #666
}

.book-library-main .book-list-wrap .my-book-info {
    font-size: 14px;
    line-height: 26px;
    padding: 8px 0 12px;
    color: #666;
    border-bottom: 1px dashed #ccc
}

.book-library-main .book-list-wrap .my-book-box {
    padding-top: 30px;
    height: 78%;
    overflow-y: auto
}

.book-library-main .book-list-wrap .book-item {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 20%;
    margin-bottom: 25px
}

.book-library-main .book-list-wrap .book-read-time {
    font-size: 12px;
    line-height: 22px!important;
    padding-bottom: 8px;
    color: #9e9e9e!important
}

.book-library-main .book-list-wrap .book-main {
    position: relative;
    width: 140px;
    height: 196px;
    cursor: pointer;
    -webkit-transition: all .5s;
    transition: all .5s
}

.book-library-main .book-list-wrap .book-shadow {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.7);
    display: none;
    z-index: 3
}

.book-library-main .book-list-wrap .book-message {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: 0 1px 6px rgba(0,0,0,.12),0 1px 4px rgba(0,0,0,.12);
    -webkit-transition: all .5s;
    transition: all .5s
}

.book-library-main .book-list-wrap .book-cover {
    display: block;
    width: 100%;
    height: 100%
}

.book-library-main .book-list-wrap .book-upload {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 14px;
    width: 26px;
    height: 26px;
    border-radius: 13px;
    background-color: #fff;
    overflow: hidden;
    -webkit-transition: all .5s;
    transition: all .5s;
    box-shadow: 1px 1px 4px rgba(0,0,0,.2)
}

.book-library-main .book-list-wrap .book-upload-shadow {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: none
}

.book-library-main .book-list-wrap .upload-progress {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 14px;
    width: 26px;
    height: 26px;
    border-radius: 13px;
    background-color: #fff;
    overflow: hidden;
    -webkit-transition: all .5s;
    transition: all .5s
}

.book-library-main .book-list-wrap .upload-progress .loader,.book-library-main .book-list-wrap .upload-progress .loader:after {
    width: 26px;
    height: 26px;
    border-radius: 13px
}

.book-library-main .book-list-wrap .upload-progress .loader {
    margin: 0 auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 4px solid rgba(0,0,0,.2);
    border-right: 4px solid rgba(0,0,0,.2);
    border-bottom: 4px solid rgba(0,0,0,.2);
    border-left: 4px solid #0598cb;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear
}

@-webkit-keyframes load8 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

@keyframes load8 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

.book-library-main .book-list-wrap .upload-progress .upload-success {
    width: 26px;
    height: 26px;
    border-radius: 13px;
    padding: 4px;
    background: #4aae52;
    text-align: center;
    display: none
}

.book-library-main .book-list-wrap .upload-progress .svg-icon-success {
    display: block;
    width: 18px!important;
    height: 18px!important;
    color: #fff!important
}

.book-library-main .book-list-wrap .book-message:hover {
    box-shadow: 0 1px 12px rgba(0,0,0,.2),0 1px 10px rgba(0,0,0,.2)
}

.book-library-main .book-list-wrap .book-message:hover .book-upload {
    width: 116px
}

.book-library-main .book-list-wrap .book-message:hover .upload-book-text {
    display: inline-block!important
}

.book-library-main .book-list-wrap .book-open-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.book-library-main .book-list-wrap .book-upload>span {
    display: inline-block;
    vertical-align: top
}

.book-library-main .book-list-wrap .upload-book-icon {
    width: 22px;
    height: 22px;
    margin: 2px;
    background-color: #21a5f1;
    border-radius: 50%
}

.book-library-main .book-list-wrap .upload-book-icon>img {
    display: block;
    width: 16px;
    margin: 2px auto
}

.book-library-main .book-list-wrap .upload-book-text {
    font-size: 14px;
    line-height: 26px;
    color: #42a5f5;
    margin-left: 10px;
    display: none!important
}

.book-library-main .book-list-wrap .delete-book-btn {
    position: absolute;
    top: -13px;
    right: -13px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: #f2f2f2;
    box-shadow: 1px 2px 4px rgba(0,0,0,.1);
    cursor: pointer;
    opacity: 0;
    -webkit-transition: all .5s;
    transition: all .5s
}

.book-library-main .book-list-wrap .book-message:hover .delete-book-btn {
    opacity: 1
}

.book-library-main .book-list-wrap .delete-book-icon {
    color: #a9a9a9!important;
    margin: 1px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg)
}

.book-library-main .book-list-wrap .book-title {
    padding-top: 20px;
    width: 140px;
    line-height: 24px!important;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 15px!important;
    color: #333!important
}

.book-library-main .book-list-wrap .book-download-btn {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 4;
    display: none
}

.book-library-main .book-list-wrap .book-download-tips {
    color: #fff;
    font-size: 16px;
    line-height: 26px;
    padding-top: 16px;
    text-align: center
}

.book-library-main .book-list-wrap .download-book-main {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 14px;
    width: 26px;
    height: 26px;
    border-radius: 13px;
    background-color: #fff;
    overflow: hidden;
    -webkit-transition: all .5s;
    transition: all .5s
}

.book-library-main .book-list-wrap .download-book-main>img {
    display: block;
    width: 22px;
    height: 22px;
    margin: 2px;
    background-color: #98cc6d;
    border-radius: 50%
}

.book-library-main .book-list-wrap .bookList-loading {
    position: absolute;
    left: 50%;
    top: 40%;
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px
}

.book-library-main .book-list-wrap .loading-svg-icon {
    display: block!important;
    width: 64px!important;
    height: 64px!important;
    margin: 18px auto
}

.book-library-main .book-list-wrap .loading-svg-icon.animate-rotate {
    -webkit-animation: animate-rotate .7s infinite linear;
    animation: animate-rotate .7s infinite linear;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

@-webkit-keyframes animate-rotate {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    50% {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

@keyframes animate-rotate {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    50% {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

.book-library-main .no-book-top {
    padding: 16px 0 30px
}

.book-library-main .no-book-title {
    font-size: 24px
}

.book-library-main .no-book-info,.book-library-main .no-book-title {
    display: inline-block;
    vertical-align: top;
    line-height: 36px;
    color: #666
}

.book-library-main .no-book-info {
    font-size: 18px;
    padding-left: 6px
}

.book-library-main .no-book-body a.button {
    display: inline-block;
    padding: 8px 14px;
    font-size: 13px;
    font-weight: 600;
    border-radius: 3px;
    background-color: #00c3d6;
    color: #fff;
    margin-top: 10px;
    cursor: pointer;
    min-width: 145px;
    text-align: center
}

.book-library-main .no-book-body a.button:hover,a.button:focus {
    background-color: #00cfe2
}

.book-library-main .no-book-body .book-item {
    margin: 15px 1%;
    padding: 20px 15px;
    list-style-type: none;
    width: 48%;
    display: inline-block;
    vertical-align: top;
    visibility: visible;
    will-change: transform;
    -webkit-transition-duration: .25s,.25s;
    transition-duration: .25s,.25s;
    -webkit-transition-timing-function: ease,ease;
    transition-timing-function: ease,ease;
    -webkit-transition: opacity,-webkit-transform;
    transition: opacity,-webkit-transform;
    transition: transform,opacity;
    transition: transform,opacity,-webkit-transform;
    opacity: 1;
    -webkit-transform: translate(0) scale(1);
    -ms-transform: translate(0) scale(1);
    transform: translate(0) scale(1)
}

.book-library-main .no-book-body .book-item:after {
    content: '';
    position: absolute;
    top: 0;
    right: 15px;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    box-shadow: 0 0 0 0 transparent;
    background-color: rgba(0,0,0,.03);
    z-index: -1;
    -webkit-transition: all .25s ease-out;
    transition: all .25s ease-out
}

.book-library-main .no-book-body .book-item:hover:after {
    box-shadow: 2px 2px 4px rgba(0,0,0,.2);
    background-color: #f2f2f2
}

.book-library-main .no-book-body .book-item:hover .item-img img {
    box-shadow: 0 0 10px 0 rgba(49,49,49,.25)
}

.book-library-main .no-book-body .book-item:hover a.button {
    opacity: .8
}

.book-library-main .no-book-body .book-item:hover .bk-bookdefault {
    -webkit-transform: rotateY(25deg);
    transform: rotateY(25deg)
}

.book-library-main .no-book-body .book-item:hover .bk-back {
    opacity: 1
}

.book-library-main .no-book-body .book-item .item-img {
    display: inline-block;
    float: left;
    padding-right: 30px
}

.book-library-main .no-book-body .book-item .item-img img {
    box-shadow: 0 0 0 0 transparent;
    -webkit-transition: all .25s ease-out;
    transition: all .25s ease-out
}

.book-library-main .no-book-body .book-item .item-details {
    padding-right: 60px
}

.book-library-main .no-book-body .book-item .item-details>span {
    display: block;
    line-height: 24px;
    padding-top: 16px;
    padding-left: 200px;
    font-size: 12px;
    color: #999
}

.book-library-main .no-book-body .book-item .book-item_title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 6px;
    margin-bottom: 6px;
    font-size: 18px;
    line-height: 24px;
    color: #333
}

.book-library-main .no-book-body .book-info {
    font-size: 14px;
    line-height: 22px;
    color: #999;
    padding: 10px 0
}

.book-library-main .no-book-body .bk-img {
    position: relative;
    display: inline-block;
    float: left;
    padding-right: 50px;
    list-style: none
}

.book-library-main .no-book-body .bk-img .bk-wrapper {
    position: relative;
    width: 150px;
    height: 215px;
    float: left;
    z-index: 1;
    -webkit-perspective: 1400px;
    perspective: 1400px
}

.book-library-main .no-book-body .bk-img .bk-wrapper:last-child {
    margin-right: 0
}

.book-library-main .no-book-body .bk-img .bk-book {
    position: absolute;
    width: 100%;
    height: 215px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: -webkit-transform .5s;
    transition: -webkit-transform .5s;
    transition: transform .5s;
    transition: transform .5s,-webkit-transform .5s
}

.book-library-main .no-book-body .bk-img .bk-book>div,.book-library-main .no-book-body .bk-img .bk-front>div {
    display: block;
    position: absolute
}

.book-library-main .no-book-body .bk-img .bk-front {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform-origin: 0 50%;
    -ms-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition: -webkit-transform .5s;
    transition: -webkit-transform .5s;
    transition: transform .5s;
    transition: transform .5s,-webkit-transform .5s;
    -webkit-transform: translateZ(20px);
    transform: translateZ(20px);
    z-index: 10
}

.book-library-main .no-book-body .bk-img .bk-front>div {
    z-index: 1;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    border-radius: 0 3px 3px 0;
    box-shadow: inset 4px 0 10px rgba(0,0,0,.1)
}

.book-library-main .no-book-body .bk-img .bk-front:after {
    content: '';
    position: absolute;
    top: 1px;
    bottom: 1px;
    left: -1px;
    width: 1px
}

.book-library-main .no-book-body .bk-img .bk-back,.book-library-main .no-book-body .bk-img .bk-front,.book-library-main .no-book-body .bk-img .bk-front>div {
    width: 150px;
    height: 215px
}

.book-library-main .no-book-body .bk-img .bk-left,.book-library-main .no-book-body .bk-img .bk-right {
    width: 40px;
    left: -20px
}

.book-library-main .no-book-body .bk-img .bk-back {
    -webkit-transform: rotateY(-180deg) translateZ(20px);
    transform: rotateY(-180deg) translateZ(20px);
    box-shadow: 5px 7px 15px rgba(0,0,0,.3);
    border-radius: 3px 0 0 3px;
    opacity: 0;
    -webkit-transition: opacity .25s ease-out;
    transition: opacity .25s ease-out
}

.book-library-main .no-book-body .bk-img .bk-back:after {
    content: '';
    position: absolute;
    top: 0;
    left: 10px;
    bottom: 0;
    width: 3px;
    background: rgba(0,0,0,.06);
    box-shadow: 1px 0 3px hsla(0,0%,100%,.1)
}

.book-library-main .no-book-body .bk-img .bk-left {
    height: 215px;
    -webkit-transform: rotateY(-90deg);
    transform: rotateY(-90deg)
}

.book-library-main .no-book-body .bk-img .bk-left h2 {
    width: 215px;
    height: 40px;
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: rotate(90deg) translateY(-40px);
    -ms-transform: rotate(90deg) translateY(-40px);
    transform: rotate(90deg) translateY(-40px)
}

.book-library-main .no-book-body .bk-img .bk-cover {
    background-repeat: no-repeat;
    background-position: 10px 40px
}

.book-library-main .no-book-body .bk-img .bk-cover:after {
    content: '';
    position: absolute;
    top: 0;
    left: 10px;
    bottom: 0;
    width: 3px;
    background: rgba(0,0,0,.06);
    box-shadow: 1px 0 3px hsla(0,0%,100%,.1)
}

.book-library-main .no-book-body .bk-img .bk-cover {
    background-repeat: no-repeat;
    background-position: 0 0!important
}

.book-library-main .no-book-body .bk-img .bk-front>div,.book-library-main .no-book-body .bk-img .bk-left {
    background-color: #219e9a
}

.book-library-main .no-book-body .bk-cover-img {
    display: block;
    width: 100%;
    height: 100%
}

.book-library-main .list-books-box {
    padding: 32px 0
}

.shelf-main .book-library-main {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0 10%;
    overflow-y: auto
}

.shelf-main .book-library-main .library-main-box {
    width: 100%;
    min-width: 1000px;
    margin: 0 auto
}

.book-shelf-container .shelf-main {
    position: absolute;
    top: 50px;
    right: 0;
    bottom: 0;
    left: 0
}

.book-shelf-container .footer-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background-color: #fff;
    z-index: 10;
    border-top: 1px solid #f2f2f2
}

.book-shelf-container .footer-bar .content {
    min-width: 1200px;
    height: 40px;
    margin: 0 auto;
    padding: 0 20px
}

.book-shelf-container .footer-bar .download-title {
    display: inline-block;
    vertical-align: top;
    line-height: 40px;
    font-size: 18px;
    color: #f60
}

.book-shelf-container .footer-bar .download-list {
    display: inline-block;
    vertical-align: top;
    height: 40px;
    padding: 0 30px
}

.book-shelf-container .footer-bar .item-list-btn {
    float: left;
    width: 74px;
    height: 20px;
    line-height: 20px;
    padding: 0 10px;
    border-radius: 12px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    -webkit-transition: all .5s;
    transition: all .5s;
    margin: 10px 5px
}

.book-shelf-container .footer-bar .item-list-btn:hover {
    opacity: .8
}

.book-shelf-container .footer-bar .item-color-w {
    background-color: #0061ad
}

.book-shelf-container .footer-bar .item-color-m {
    background-color: #727272
}

.book-shelf-container .footer-bar .item-color-a {
    background-color: #95cc30
}

.book-shelf-container .footer-bar .item-color-i {
    background-color: #b9b9b9
}

.book-shelf-container .footer-bar .left-box {
    float: left;
    height: 40px;
    font-size: 0
}

.book-shelf-container .footer-bar .left-box .version-text {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    line-height: 40px;
    color: #999
}

.book-shelf-container .footer-bar .help-and-suggest {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    height: 40px;
    margin-left: 20px
}

.book-shelf-container .footer-bar .help-and-suggest a {
    float: left;
    height: 40px;
    line-height: 40px;
    margin-right: 20px;
    padding: 10px 0;
    color: #999
}

.book-shelf-container .footer-bar .help-text svg,.book-shelf-container .footer-bar .view-text svg {
    vertical-align: top;
    width: 18px!important;
    height: 18px!important;
    color: #999!important;
    margin-right: 6px
}

.book-shelf-container .footer-bar .help-text i,.book-shelf-container .footer-bar .view-text i {
    display: inline-block;
    vertical-align: top;
    font-style: normal;
    line-height: 18px
}

.book-shelf-container .footer-bar .right-box {
    float: right
}

.book-shelf-container .footer-bar .list-title {
    float: left;
    line-height: 40px;
    font-size: 12px;
    color: #999;
    margin-right: 12px
}

.book-shelf-container .cloud-list {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 13
}

.book-shelf-container .cloud-list .cloud-shadow {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.5)
}

.book-shelf-container .cloud-list .cloud-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 660px;
    height: 528px;
    margin: -264px 0 0 -330px;
    background-color: #fff;
    box-shadow: 2px 2px 4px rgba(0,0,0,.2)
}

.book-shelf-container .cloud-list .box-top {
    height: 46px;
    background-color: #999;
    padding-left: 42px
}

.book-shelf-container .cloud-list .top-title {
    float: left;
    vertical-align: top;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    line-height: 46px
}

.book-shelf-container .cloud-list .top-close-btn {
    float: right;
    width: 46px;
    height: 46px;
    padding: 11px;
    cursor: pointer
}

.book-shelf-container .cloud-list .close-svg-icon {
    display: block!important;
    color: #fff!important
}

.book-shelf-container .cloud-list .box-main {
    height: 482px;
    padding: 0 42px
}

.book-shelf-container .cloud-list .box-th {
    height: 54px;
    border-bottom: 1px solid #d7d7d7
}

.book-shelf-container .cloud-list .box-th-td {
    display: inline-block;
    vertical-align: top;
    line-height: 54px;
    font-size: 14px;
    color: #666;
    position: relative
}

.book-shelf-container .cloud-list .box-th-td:nth-of-type(1),.book-shelf-container .cloud-list .box-tr-td:nth-of-type(1) {
    width: 50%
}

.book-shelf-container .cloud-list .box-th-td:nth-of-type(2),.book-shelf-container .cloud-list .box-tr-td:nth-of-type(2) {
    width: 22%;
    text-align: center
}

.book-shelf-container .cloud-list .box-th-td:nth-of-type(3),.book-shelf-container .cloud-list .box-tr-td:nth-of-type(3) {
    width: 28%;
    text-align: center
}

.book-shelf-container .cloud-list .box-tr-td:nth-of-type(1) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.book-shelf-container .cloud-list .book-btn {
    float: left;
    width: 70px;
    height: 24px;
    line-height: 24px;
    margin-top: 17px;
    font-size: 12px;
    cursor: pointer;
    border-radius: 14px;
    color: #fff;
    display: none
}

.book-shelf-container .cloud-list .box-tr:hover .book-btn {
    display: block
}

.book-shelf-container .cloud-list .book-btn.read-button {
    background: #42a5f5
}

.book-shelf-container .cloud-list .book-btn.download-button {
    background: #999
}

.book-shelf-container .cloud-list .book-btn.download-button>svg {
    color: #fff!important;
    width: 20px!important;
    height: 20px!important;
    display: block!important;
    margin: 2px auto!important
}

.book-shelf-container .cloud-list .book-btn.delete-button {
    background: #ff5960
}

.book-shelf-container .cloud-list .book-btn:nth-of-type(1) {
    margin-right: 10px
}

.book-shelf-container .cloud-list .box-tr {
    height: 58px;
    border-bottom: 1px solid #d7d7d7;
    position: relative
}

.book-shelf-container .cloud-list .box-tr:hover {
    background-color: #f5f5f5
}

.book-shelf-container .cloud-list .box-tr-td {
    display: inline-block;
    vertical-align: top;
    line-height: 58px;
    color: #333
}

.book-shelf-container .cloud-list .download-svg-icon,.book-shelf-container .cloud-list .local-sync-false,.book-shelf-container .cloud-list .local-sync-true,.book-shelf-container .cloud-list .read-file-svg {
    display: block!important;
    color: #bfbfbf!important;
    width: 20px!important;
    height: 20px!important;
    margin: 19px auto
}

.book-shelf-container .cloud-list .local-sync-true {
    color: #42a5f5!important
}

.book-shelf-container .cloud-list .download-svg-icon,.book-shelf-container .cloud-list .read-file-svg {
    cursor: pointer
}

.book-shelf-container .cloud-list .box-scroll {
    height: 420px;
    overflow-y: auto
}

.book-shelf-container .cloud-list .box-download-progress {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(30,195,216,.1);
    display: none
}

.book-shelf-container .cloud-list .progress-slideBar {
    width: 0;
    height: 100%;
    background: rgba(30,195,216,.3)
}

.book-shelf-container .cloud-list .progress-text {
    position: absolute;
    top: 0;
    right: 2%;
    height: 100%;
    color: #fff;
    font-size: 18px;
    line-height: 50px;
    text-shadow: 1px 1px 2px rgba(0,0,0,.2)
}

.book-shelf-container .cloud-list .cloud-not {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 660px;
    min-height: 416px;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0);
    background-color: #fff;
    box-shadow: 2px 2px 4px rgba(0,0,0,.2);
    padding: 38px 48px 20px
}

.book-shelf-container .cloud-list .not-top-title {
    font-size: 30px;
    line-height: 60px;
    color: #666
}

.book-shelf-container .cloud-list .not-top-info {
    font-size: 18px;
    line-height: 40px;
    color: #666;
    padding-bottom: 10px;
    border-bottom: 1px solid #d7d7d7
}

.book-shelf-container .cloud-list .not-list {
    padding-top: 20px
}

.book-shelf-container .cloud-list .list-item-msg {
    font-size: 16px;
    color: #666;
    line-height: 36px;
    position: relative;
    padding-left: 20px
}

.book-shelf-container .cloud-list .list-item-msg:before {
    content: '';
    position: absolute;
    top: 12px;
    left: 0;
    width: 8px;
    height: 8px;
    border: 1px solid #ff702c;
    border-radius: 4px
}

.book-shelf-container .cloud-list .not-btn-wrap {
    padding-top: 34px
}

.book-shelf-container .cloud-list .not-btn-wrap .item-btn {
    display: inline-block;
    vertical-align: top;
    height: 42px;
    line-height: 42px
}

.book-shelf-container .cloud-list .not-btn-wrap .upgrade-btn {
    width: 288px;
    background: -webkit-linear-gradient(left,#ff6525,#ff6e26,#ff7828,#ff882b,#ff8f2c,#ff952d,#ff9e2e);
    background: linear-gradient(90deg,#ff6525,#ff6e26,#ff7828,#ff882b,#ff8f2c,#ff952d,#ff9e2e);
    color: #fff;
    font-size: 18px;
    text-align: center;
    box-shadow: 1px 1px 3px rgba(0,0,0,.1);
    -webkit-transition: all .5s;
    transition: all .5s
}

.book-shelf-container .cloud-list .not-btn-wrap .upgrade-btn:hover {
    opacity: .8;
    box-shadow: 2px 2px 8px rgba(0,0,0,.2)
}

.book-shelf-container .cloud-list .not-btn-wrap .more-btn {
    margin-left: 50px;
    color: #999
}

.book-shelf-container .cloud-list .free-member-btn {
    display: inline-block;
    vertical-align: top;
    margin-top: 10px;
    color: #f60;
    font-weight: 700;
    line-height: 34px
}

.cloud-loading {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 250px;
    height: 200px;
    margin: -100px 0 0 -150px;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-flex-basis: 25%;
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 25%;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center
}

@-webkit-keyframes line-scale {
    0% {
        -webkit-transform: scaley(1);
        transform: scaley(1)
    }

    50% {
        -webkit-transform: scaley(.4);
        transform: scaley(.4)
    }

    to {
        -webkit-transform: scaley(1);
        transform: scaley(1)
    }
}

@keyframes line-scale {
    0% {
        -webkit-transform: scaley(1);
        transform: scaley(1)
    }

    50% {
        -webkit-transform: scaley(.4);
        transform: scaley(.4)
    }

    to {
        -webkit-transform: scaley(1);
        transform: scaley(1)
    }
}

.line-scale>div:nth-child(1) {
    -webkit-animation: line-scale 1s .1s infinite cubic-bezier(.2,.68,.18,1.08);
    animation: line-scale 1s .1s infinite cubic-bezier(.2,.68,.18,1.08)
}

.line-scale>div:nth-child(2) {
    -webkit-animation: line-scale 1s .2s infinite cubic-bezier(.2,.68,.18,1.08);
    animation: line-scale 1s .2s infinite cubic-bezier(.2,.68,.18,1.08)
}

.line-scale>div:nth-child(3) {
    -webkit-animation: line-scale 1s .3s infinite cubic-bezier(.2,.68,.18,1.08);
    animation: line-scale 1s .3s infinite cubic-bezier(.2,.68,.18,1.08)
}

.line-scale>div:nth-child(4) {
    -webkit-animation: line-scale 1s .4s infinite cubic-bezier(.2,.68,.18,1.08);
    animation: line-scale 1s .4s infinite cubic-bezier(.2,.68,.18,1.08)
}

.line-scale>div:nth-child(5) {
    -webkit-animation: line-scale 1s .5s infinite cubic-bezier(.2,.68,.18,1.08);
    animation: line-scale 1s .5s infinite cubic-bezier(.2,.68,.18,1.08)
}

.line-scale>div {
    background-color: #fff;
    width: 4px;
    height: 35px;
    border-radius: 2px;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block
}

.book-shelf-container .cloud-list .isNot-book-list {
    position: absolute;
    top: 40%;
    left: 50%;
    width: 100px;
    height: 140px;
    margin-left: -50px
}

.book-shelf-container .cloud-list .svg-icon-no-book {
    display: block!important;
    width: 95px!important;
    height: 80px!important;
    color: #ccc!important;
    margin: 0 auto
}

.book-shelf-container .cloud-list .isNot-book-list p {
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #ccc;
    margin-top: 16px
}

.book-shelf-container .welcome-page {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99
}

.book-shelf-container .welcome-page .shadow {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.6)
}

.book-shelf-container .welcome-page .welcome-main {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 740px;
    min-height: 360px;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0);
    background-color: #fff;
    box-shadow: 2px 2px 6px rgba(0,0,0,.3);
    padding: 48px 70px 26px;
    text-align: center
}

.book-shelf-container .welcome-page .welcome-title {
    font-size: 36px;
    line-height: 56px;
    color: #333
}

.book-shelf-container .welcome-page .welcome-tips {
    padding-top: 30px;
    font-size: 28px;
    line-height: 40px;
    color: #666
}

.book-shelf-container .welcome-page .fast-guide {
    display: block;
    width: 294px;
    height: 56px;
    line-height: 56px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-radius: 32px;
    background: -webkit-linear-gradient(left,#00bcd2,#01b6d3,#01b1d4,#01acd6,#02a7d7,#02a2d8,#029fd9,#039bda);
    background: linear-gradient(90deg,#00bcd2,#01b6d3,#01b1d4,#01acd6,#02a7d7,#02a2d8,#029fd9,#039bda);
    margin: 20px auto 0;
    cursor: pointer;
    -webkit-transition: all .3s;
    transition: all .3s
}

.book-shelf-container .welcome-page .fast-guide:hover {
    opacity: .9
}

.book-shelf-container .welcome-page .jump-guide {
    display: block;
    width: 120px;
    font-size: 16px;
    line-height: 24px;
    margin: 24px auto 0;
    color: #999;
    cursor: pointer
}

*,:after,:before {
    box-sizing: border-box
}

html {
    font-size: 62.5%
}

body {
    min-height: 100%;
    font-size: 1.6rem;
    font-family: Helvetica,sans-serif;
    color: #222d33
}

a {
    color: #ff962c;
    text-decoration: none
}

.cd-nugget-info {
    position: absolute;
    width: 60%;
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

.cd-nugget-info h1 {
    color: #fefffb;
    font-size: 2.4rem;
    margin: .6em 0
}

.cd-nugget-info .cd-btn {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    border: none;
    border-radius: 50em;
    background: #ff962c;
    padding: 1em 2em;
    color: #fefffb;
    font-weight: 700;
    font-size: 1.4rem;
    cursor: pointer;
    box-shadow: inset 0 1px 0 hsla(0,0%,100%,.2)
}

.cd-nugget-info .cd-btn:active {
    -webkit-transform: scale(.9);
    -ms-transform: scale(.9);
    transform: scale(.9)
}

.cd-nugget-info .cd-btn:focus,.no-touch .cd-nugget-info .cd-btn:hover {
    outline: none;
    background: #ffa346
}

@media only screen and (min-width: 1100px) {
    .cd-nugget-info h1 {
        font-size:4.2rem;
        font-weight: 300
    }

    .cd-nugget-info .cd-btn {
        font-size: 1.6rem
    }
}

.cd-tour-wrapper {
    position: fixed;
    z-index: 2;
    height: 90%;
    width: 90%;
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    visibility: hidden;
    opacity: 0;
    -webkit-transition: opacity .4s 0s,visibility 0s .4s;
    transition: opacity .4s 0s,visibility 0s .4s
}

.cd-tour-wrapper:before {
    display: none;
    content: 'mobile'
}

.cd-tour-wrapper.active {
    visibility: visible;
    opacity: 1;
    z-index: 5;
    -webkit-transition: opacity .4s 0s,visibility 0s 0s;
    transition: opacity .4s 0s,visibility 0s 0s
}

@media only screen and (max-width: 767px) {
    li.cd-single-step {
        top:0!important;
        left: 0!important;
        width: 100%!important;
        height: auto!important
    }
}

@media only screen and (min-width: 600px) {
    .cd-tour-wrapper {
        max-width:500px;
        max-height: 600px
    }
}

@media only screen and (min-width: 768px) {
    .cd-tour-wrapper {
        position:absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        max-width: none;
        max-height: none;
        opacity: 1;
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0)
    }

    .cd-tour-wrapper:before {
        content: 'desktop'
    }

    .cd-tour-wrapper.active {
        visibility: hidden
    }
}

.cd-single-step {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    background-color: #fefffb;
    border-radius: 4px;
    box-shadow: 0 3px 10px rgba(0,0,0,.2);
    opacity: 0;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    transform: scale(0);
    -webkit-transition: -webkit-transform .4s 0s,opacity 0s .4s;
    -webkit-transition: opacity 0s .4s,-webkit-transform .4s 0s;
    transition: opacity 0s .4s,-webkit-transform .4s 0s;
    transition: transform .4s 0s,opacity 0s .4s;
    transition: transform .4s 0s,opacity 0s .4s,-webkit-transform .4s 0s
}

.cd-single-step,.cd-single-step>span {
    z-index: 1;
    -webkit-transform: scale(0);
    -ms-transform: scale(0)
}

.cd-single-step>span {
    position: relative;
    display: block;
    width: 10px;
    height: 10px;
    border-radius: inherit;
    background: #ff962c;
    transform: scale(0);
    -webkit-transition: -webkit-transform .4s;
    transition: -webkit-transform .4s;
    transition: transform .4s;
    transition: transform .4s,-webkit-transform .4s;
    overflow: hidden;
    text-indent: 100%;
    white-space: nowrap;
    display: none
}

.cd-single-step:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: inherit;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: none
}

.active .cd-single-step {
    -webkit-transform: scale(1) translateX(100%);
    -ms-transform: scale(1) translateX(100%);
    transform: scale(1) translateX(100%);
    -webkit-transition: -webkit-transform .4s 0s,opacity .4s 0s;
    -webkit-transition: opacity .4s 0s,-webkit-transform .4s 0s;
    transition: opacity .4s 0s,-webkit-transform .4s 0s;
    transition: transform .4s 0s,opacity .4s 0s;
    transition: transform .4s 0s,opacity .4s 0s,-webkit-transform .4s 0s
}

.active .cd-single-step.move-left {
    -webkit-transform: scale(1) translateX(-100%);
    -ms-transform: scale(1) translateX(-100%);
    transform: scale(1) translateX(-100%)
}

.active .cd-single-step.is-selected {
    opacity: 1;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    -webkit-transition: -webkit-transform .4s 0s;
    transition: -webkit-transform .4s 0s;
    transition: transform .4s 0s;
    transition: transform .4s 0s,-webkit-transform .4s 0s
}

@media only screen and (min-width: 768px) {
    .cd-single-step {
        height:auto;
        width: auto;
        top: auto;
        left: auto;
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0);
        border-radius: 50%;
        visibility: hidden;
        opacity: 1;
        background-color: transparent;
        box-shadow: none;
        -webkit-transition: visibility 0s .4s;
        transition: visibility 0s .4s
    }

    .cd-single-step:after,.cd-single-step>span {
        display: block
    }

    .active .cd-single-step,.active .cd-single-step.move-left {
        -webkit-transition: visibility 0s .4s;
        transition: visibility 0s .4s;
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0)
    }

    .cd-single-step.is-selected {
        visibility: visible;
        -webkit-transition: visibility 0s 0s;
        transition: visibility 0s 0s
    }

    .cd-single-step.is-selected>span {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1)
    }

    .cd-single-step.is-selected:after {
        -webkit-animation: a 2s infinite;
        animation: a 2s infinite;
        -webkit-animation-delay: .5s;
        animation-delay: .5s
    }

    .cd-single-step.is-selected .cd-more-info {
        opacity: 1
    }
}

@-webkit-keyframes a {
    0% {
        box-shadow: 0 0 0 0 #ff962c
    }

    to {
        box-shadow: 0 0 0 20px rgba(255,150,44,0)
    }
}

@keyframes a {
    0% {
        box-shadow: 0 0 0 0 #ff962c
    }

    to {
        box-shadow: 0 0 0 20px rgba(255,150,44,0)
    }
}

.cd-single-step .cd-more-info {
    z-index: 1;
    padding: 1.5em;
    width: 100%
}

.cd-single-step .cd-more-info:after {
    clear: both;
    content: "";
    display: table
}

.cd-single-step .cd-more-info:before {
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    border: 6px solid transparent;
    display: none
}

.cd-single-step .cd-more-info h2 {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: .4em
}

.cd-single-step .cd-more-info p {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 1.4em;
    font-family: Georgia,serif;
    color: #666
}

.cd-single-step .cd-more-info img {
    margin-bottom: 1.4em;
    max-width: 100%
}

.cd-single-step .cd-more-info .cd-close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
    overflow: hidden;
    text-indent: 100%;
    white-space: nowrap
}

.cd-single-step .cd-more-info .cd-close:after,.cd-single-step .cd-more-info .cd-close:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    height: 2px;
    width: 16px;
    border-radius: 4em;
    background-color: #cbccc8;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.cd-single-step .cd-more-info .cd-close:after {
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
    -ms-transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform: translateX(-50%) translateY(-50%) rotate(45deg)
}

.cd-single-step .cd-more-info .cd-close:before {
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(-45deg);
    -ms-transform: translateX(-50%) translateY(-50%) rotate(-45deg);
    transform: translateX(-50%) translateY(-50%) rotate(-45deg)
}

.cd-single-step .cd-more-info span {
    float: left;
    padding-top: .1em;
    font-size: 1.3rem;
    font-family: Georgia,serif
}

@media only screen and (min-width: 768px) {
    .cd-single-step .cd-more-info {
        position:absolute;
        width: 340px;
        border-radius: 4px;
        box-shadow: 0 3px 20px rgba(0,0,0,.15);
        opacity: 0;
        background-color: #fefffb;
        -webkit-transition: opacity .4s;
        transition: opacity .4s;
        border-color: #fefffb
    }

    .cd-single-step .cd-more-info p {
        margin-bottom: 2.5em
    }

    .cd-single-step .cd-more-info img {
        display: none
    }

    .cd-single-step .cd-more-info:before {
        display: block
    }

    .cd-single-step .cd-more-info.left {
        right: calc(100% + 15px)
    }

    .cd-single-step .cd-more-info.left,.cd-single-step .cd-more-info.right {
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%)
    }

    .cd-single-step .cd-more-info.right {
        left: calc(100% + 15px)
    }

    .cd-single-step .cd-more-info.left,.cd-single-step .cd-more-info.right {
        top: 50%
    }

    .cd-single-step .cd-more-info.top {
        bottom: calc(100% + 15px)
    }

    .cd-single-step .cd-more-info.bottom,.cd-single-step .cd-more-info.top {
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%)
    }

    .cd-single-step .cd-more-info.bottom {
        top: calc(100% + 15px)
    }

    .cd-single-step .cd-more-info.bottom,.cd-single-step .cd-more-info.top {
        left: 50%
    }

    .cd-single-step .cd-more-info.left:before,.cd-single-step .cd-more-info.right:before {
        top: 50%;
        bottom: auto;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%)
    }

    .cd-single-step .cd-more-info.bottom:before,.cd-single-step .cd-more-info.top:before {
        left: 50%;
        right: auto;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%)
    }

    .cd-single-step .cd-more-info.left:before {
        border-left-color: inherit;
        left: 100%
    }

    .cd-single-step .cd-more-info.right:before {
        border-right-color: inherit;
        right: 100%
    }

    .cd-single-step .cd-more-info.top:before {
        border-top-color: inherit;
        top: 100%
    }

    .cd-single-step .cd-more-info.bottom:before {
        border-bottom-color: inherit;
        bottom: 100%
    }

    .is-selected .cd-single-step .cd-more-info {
        opacity: 1
    }
}

.cd-tour-nav {
    float: right
}

.cd-tour-nav:after {
    clear: both;
    content: "";
    display: table
}

.cd-tour-nav li {
    display: inline-block;
    float: left
}

.cd-tour-nav li:first-of-type {
    margin-right: 1.5em
}

.cd-tour-nav a {
    font-size: 1.3rem;
    color: #222d33;
    font-weight: 700
}

.cd-tour-nav a.inactive {
    color: #cbccc8;
    cursor: not-allowed
}

.cd-cover-layer {
    position: fixed;
    z-index: 31;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.6);
    visibility: hidden;
    opacity: 0;
    -webkit-transition: opacity .4s 0s,visibility 0s .4s;
    transition: opacity .4s 0s,visibility 0s .4s
}

.cd-cover-layer.is-visible {
    opacity: 1;
    visibility: visible;
    -webkit-transition: opacity .4s 0s,visibility 0s 0s;
    transition: opacity .4s 0s,visibility 0s 0s
}

@media only screen and (min-width: 768px) {
    .cd-cover-layer.is-visible {
        opacity:0;
        -webkit-animation: b 2.1s;
        animation: b 2.1s
    }
}

@-webkit-keyframes b {
    0%,to {
        opacity: 0
    }

    14%,40% {
        opacity: 1
    }
}

@keyframes b {
    0%,to {
        opacity: 0
    }

    14%,40% {
        opacity: 1
    }
}

.cd-app-screen {
    position: absolute;
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    width: 90%;
    height: 80%;
    background: #222d33;
    border-radius: 4px;
    box-shadow: 0 10px 60px #08151d
}

.cd-app-screen:after,.cd-app-screen:before {
    content: '';
    position: absolute
}

.cd-app-screen:before {
    top: 0;
    left: 0;
    height: 40px;
    width: 100%;
    background: #fefffb;
    border-radius: 4px 4px 0 0
}

.cd-app-screen:after {
    top: 14px;
    left: 20px;
    height: 12px;
    width: 60px;
    background: #e4e5e1;
    border-radius: 3px
}

.overlay-tour {
    display: none;
    z-index: 3;
    background: #000;
    opacity: .5;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0
}

.tour-target-element {
    z-index: 4!important;
    position: relative!important
}

.cd-tour-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
}

.step-1 {
    right: 360px;
    top: 110px
}

.step-2 {
    left: 340px;
    top: 220px
}

.step-3 {
    left: 180px;
    bottom: 40px
}

.step-4 {
    right: 180px;
    bottom: 40px
}

.step-5 {
    right: 120px;
    top: 38px
}

.step-5 .cd-more-info {
    left: -100px!important
}

.step-5 .cd-more-info:before {
    left: 275px!important
}

.cd-tour-wrapper.active {
    z-index: 32!important
}

.cd-more-info>*,.cd-more-info span {
    font-family: Microsoft Yahei!important
}

.cd-more-info>p {
    padding-top: 10px
}

.cd-more-info h2 {
    margin-top: 0;
    font-size: 16px!important;
    font-weight: 400;
    color: #333!important
}

.top-notice-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 33
}

.top-notice-bar.activity-auto.slide-down,.top-notice-bar.activity.slide-down {
    -webkit-animation: slideDown .5s;
    animation: slideDown .5s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards
}

.top-notice-bar.activity-auto.slide-in,.top-notice-bar.activity.slide-in {
    -webkit-transform: translateY(-60px);
    -ms-transform: translateY(-60px);
    transform: translateY(-60px);
    opacity: 0;
    -webkit-animation: slideIn .5s;
    animation: slideIn .5s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards
}

.top-notice-bar .notice-activity-main {
    position: relative;
    height: 50px;
    line-height: 50px;
    text-align: center;
    box-shadow: 0 4px 4px rgba(0,0,0,.1)
}

.top-notice-bar.activity .notice-activity-main {
    background: -webkit-linear-gradient(left,#9c00f9,#a210f1,#a723e7,#b13ed9,#b750d1,#ba5acb,#be66c5);
    background: linear-gradient(90deg,#9c00f9,#a210f1,#a723e7,#b13ed9,#b750d1,#ba5acb,#be66c5)
}

.top-notice-bar.activity-auto .notice-activity-main {
    background: -webkit-linear-gradient(left,#ff6625,#ff6c26,#ff7427,#ff7f29,#ff872a,#ff8b2b,#ff902c);
    background: linear-gradient(90deg,#ff6625,#ff6c26,#ff7427,#ff7f29,#ff872a,#ff8b2b,#ff902c)
}

.top-notice-bar .activity-main-text {
    width: 1000px;
    height: 50px;
    margin: 0 auto;
    text-align: center
}

.top-notice-bar .activity-notice-icon {
    color: #fff!important;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px
}

.top-notice-bar .activity-notice-info {
    font-size: 16px;
    line-height: 50px;
    display: inline-block;
    color: #fff
}

.top-notice-bar .activity-notice-info:hover {
    text-decoration: underline
}

.top-notice-bar .activity-main-right {
    position: absolute;
    top: 0;
    right: 12px;
    color: #fff
}

.top-notice-bar .activity-main-right .time-out {
    float: left;
    font-size: 16px;
    color: #fff;
    margin-right: 20px;
    line-height: 50px
}

.top-notice-bar .activity-notice-close {
    float: left;
    color: #fff!important;
    margin-top: 12px;
    cursor: pointer
}

.top-notice-bar .notice-personal-main {
    position: relative;
    height: 84px;
    background: -webkit-linear-gradient(left,#0096ef,#19aae9,#34bce6,#42c5e3,#4ecce2);
    background: linear-gradient(90deg,#0096ef,#19aae9,#34bce6,#42c5e3,#4ecce2);
    box-shadow: 0 4px 4px rgba(0,0,0,.1)
}

.top-notice-bar .personal-main-text {
    width: 1000px;
    height: 84px;
    margin: 0 auto;
    text-align: center
}

.top-notice-bar .personal-notice-icon {
    color: #fff!important;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px
}

.top-notice-bar .personal-notice-info {
    font-size: 16px;
    line-height: 50px;
    display: inline-block;
    color: #fff
}

.top-notice-bar .personal-coupon-show {
    height: 24px
}

.top-notice-bar .personal-coupon-link {
    display: inline-block;
    vertical-align: middle;
    width: 192px;
    margin: 0 auto;
    box-shadow: 0 1px 6px rgba(0,0,0,.12),0 1px 4px rgba(0,0,0,.12)
}

.top-notice-bar .personal-coupon-link span {
    display: inline-block;
    width: 50%;
    height: 24px;
    line-height: 24px;
    text-align: center;
    vertical-align: middle
}

.top-notice-bar .personal-coupon-show .time-out {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    color: #fff;
    margin-left: 20px;
    line-height: 24px
}

.top-notice-bar .personal-coupon-show .time-out i {
    font-style: normal;
    font-weight: 700
}

.top-notice-bar .personal-coupon-link .coupon-code {
    border: 1px solid #f2f2f2;
    border-right: 0;
    border-radius: 2px 0 0 2px;
    font-size: 18px;
    color: #f2f2f2;
    background-color: #0288d1
}

.top-notice-bar .personal-coupon-link .coupon-btn {
    background-color: #f2f2f2;
    border-radius: 0 2px 2px 0;
    font-size: 14px;
    font-weight: 700;
    color: #0288d1
}

.top-notice-bar.personal.slide-down {
    -webkit-animation: slideDown2 .5s;
    animation: slideDown2 .5s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards
}

.top-notice-bar.personal.slide-in {
    -webkit-transform: translateY(-90px);
    -ms-transform: translateY(-90px);
    transform: translateY(-90px);
    opacity: 0;
    -webkit-animation: slideIn2 .5s;
    animation: slideIn2 .5s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards
}

@-webkit-keyframes slideDown {
    0% {
        -webkit-transform: translateY(-60px);
        transform: translateY(-60px);
        opacity: 0
    }

    to {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }
}

@keyframes slideDown {
    0% {
        -webkit-transform: translateY(-60px);
        transform: translateY(-60px);
        opacity: 0
    }

    to {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }
}

@-webkit-keyframes slideIn {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }

    to {
        -webkit-transform: translateY(-60px);
        transform: translateY(-60px);
        opacity: 0
    }
}

@keyframes slideIn {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }

    to {
        -webkit-transform: translateY(-60px);
        transform: translateY(-60px);
        opacity: 0
    }
}

@-webkit-keyframes slideDown2 {
    0% {
        -webkit-transform: translateY(-90px);
        transform: translateY(-90px);
        opacity: 0
    }

    to {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }
}

@keyframes slideDown2 {
    0% {
        -webkit-transform: translateY(-90px);
        transform: translateY(-90px);
        opacity: 0
    }

    to {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }
}

@-webkit-keyframes slideIn2 {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }

    to {
        -webkit-transform: translateY(-90px);
        transform: translateY(-90px);
        opacity: 0
    }
}

@keyframes slideIn2 {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }

    to {
        -webkit-transform: translateY(-90px);
        transform: translateY(-90px);
        opacity: 0
    }
}

.upload-progress-bar {
    position: absolute;
    right: 12px;
    bottom: 52px;
    width: 560px;
    height: 60px;
    background-color: #fff;
    box-shadow: 1px 1px 2px rgba(0,0,0,.1);
    -webkit-transform: translate3d(0,120px,0);
    transform: translate3d(0,120px,0);
    -webkit-transition: all .3s;
    transition: all .3s;
    opacity: 0;
    z-index: 11
}

.upload-progress-bar.slide-up {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1
}

.upload-progress-bar .upload {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 20px
}

.upload-progress-bar .left-bar {
    float: left;
    height: 100%
}

.upload-progress-bar .right-bar {
    float: right;
    height: 100%
}

.upload-progress-bar .left-bar>span {
    display: inline-block;
    vertical-align: top
}

.upload-progress-bar .left-bar .circle-loading {
    width: 16px;
    height: 16px;
    border: 2px solid #42a5f5;
    border-top: 2px solid #ccc;
    border-radius: 50%;
    -webkit-animation: spCircRot .6s infinite linear;
    animation: spCircRot .6s infinite linear;
    margin: 22px 14px 22px 0
}

.upload-progress-bar .left-bar .book-info {
    font-size: 14px;
    color: #666;
    line-height: 60px
}

.upload-progress-bar .left-bar .book-name {
    display: inline-block;
    vertical-align: top;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-style: normal
}

.upload-progress-bar .right-bar .waiting {
    font-size: 14px;
    line-height: 60px;
    color: #999
}

.upload-progress-bar .left-bar .uploaded-icon {
    margin: 18px 14px 18px 0
}

.upload-progress-bar .left-bar .success-svg-icon {
    vertical-align: top;
    color: #8bc34a!important
}

.upload-progress-bar .left-bar .uploaded-info {
    font-size: 14px;
    color: #666;
    line-height: 60px
}

.upload-progress-bar .right-bar .close-btn {
    display: block;
    width: 24px;
    height: 24px;
    margin: 18px 0;
    cursor: pointer
}

.upload-progress-bar .right-bar .close-svg-icon {
    color: #ababab!important
}

@-webkit-keyframes spCircRot {
    0% {
        -webkit-transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(359deg)
    }
}

@keyframes spCircRot {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg)
    }
}

.data-overdose-waring {
    position: absolute;
    right: 0;
    bottom: 40px;
    left: 0;
    height: 230px;
    background-color: #fff;
    z-index: 10;
    box-sizing: border-box;
    padding: 0 10%;
    -webkit-transform: translate3d(0,270px,0);
    transform: translate3d(0,270px,0);
    -webkit-transition: all .3s;
    transition: all .3s
}

.data-overdose-waring.open {
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
}

.data-overdose-waring .title {
    font-size: 20px;
    line-height: 32px;
    color: red;
    padding: 20px 0
}

.data-overdose-waring .tips {
    font-size: 16px;
    line-height: 22px;
    color: #666;
    padding-bottom: 16px
}

.data-overdose-waring .tips a {
    text-decoration: underline;
    color: #42a5f5
}

.book-fileSize-warning {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 11
}

.book-fileSize-warning .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.3)
}

.book-fileSize-warning .waring-content {
    position: absolute;
    top: 25%;
    left: 50%;
    width: 650px;
    height: 340px;
    background-color: #fff;
    margin-left: -325px;
    box-shadow: 1px 1px 3px rgba(0,0,0,.2);
    box-sizing: border-box;
    padding: 0 40px
}

.book-fileSize-warning .waring-content .top {
    height: 57px;
    border-bottom: 1px solid #e4e4e4
}

.book-fileSize-warning .waring-content .top-title {
    float: left;
    line-height: 57px;
    font-size: 16px;
    color: #ef5350
}

.book-fileSize-warning .waring-content .close-btn {
    float: right;
    width: 30px;
    height: 57px;
    padding-top: 17px;
    cursor: pointer
}

.book-fileSize-warning .waring-content .close-svg-btn {
    display: block!important;
    margin: 0 auto;
    color: #ccc!important
}

.book-fileSize-warning .waring-content .center {
    padding-top: 28px
}

.book-fileSize-warning .waring-content .center .tips {
    font-size: 16px;
    line-height: 22px;
    color: #666;
    padding-bottom: 12px
}

.book-fileSize-warning .waring-content .center .tips a {
    text-decoration: underline;
    color: #42a5f5
}

.book-fileSize-warning .waring-content .button {
    padding-top: 36px;
    text-align: center
}

.book-fileSize-warning .waring-content .button>span {
    display: block;
    cursor: pointer
}

.book-fileSize-warning .waring-content .cancel-btn {
    width: 132px;
    height: 40px;
    line-height: 40px;
    background-color: #f2f2f2;
    margin: 0 auto;
    border-radius: 2px;
    font-size: 16px;
    color: #999
}

.book-fileSize-warning .waring-content .confirm-btn {
    width: 180px;
    height: 20px;
    line-height: 20px;
    margin: 14px auto;
    font-size: 14px;
    color: #ef5350
}

.book-shelf-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #f2f2f2;
    min-width: 1000px
}

/*!
 * 
 * antd v4.2.0
 * 
 * Copyright 2015-present, Alipay, Inc.
 * All rights reserved.
 *       
 */
body,html {
    width: 100%;
    height: 100%
}

input::-ms-clear,input::-ms-reveal {
    display: none
}

*,:after,:before {
    box-sizing: border-box
}

html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0,0,0,0)
}

@-ms-viewport {
    width: device-width
}

article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section {
    display: block
}

body {
    margin: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;
    font-variant: tabular-nums;
    line-height: 1.5715;
    background-color: #fff;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum'
}

[tabindex='-1']:focus {
    outline: none!important
}

hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible
}

h1,h2,h3,h4,h5,h6 {
    margin-top: 0;
    margin-bottom: .5em;
    color: rgba(0,0,0,.85);
    font-weight: 500
}

p {
    margin-top: 0;
    margin-bottom: 1em
}

abbr[data-original-title],abbr[title] {
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    border-bottom: 0;
    cursor: help
}

address {
    margin-bottom: 1em;
    font-style: normal;
    line-height: inherit
}

input[type=number],input[type=password],input[type=text],textarea {
    -webkit-appearance: none
}

dl,ol,ul {
    margin-top: 0;
    margin-bottom: 1em
}

ol ol,ol ul,ul ol,ul ul {
    margin-bottom: 0
}

dt {
    font-weight: 500
}

dd {
    margin-bottom: .5em;
    margin-left: 0
}

blockquote {
    margin: 0 0 1em
}

dfn {
    font-style: italic
}

b,strong {
    font-weight: bolder
}

small {
    font-size: 80%
}

sub,sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline
}

sub {
    bottom: -.25em
}

sup {
    top: -.5em
}

a {
    color: #1890ff;
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    -webkit-transition: color .3s;
    transition: color .3s;
    -webkit-text-decoration-skip: objects
}

a:hover {
    color: #40a9ff
}

a:active {
    color: #096dd9
}

a:active,a:focus,a:hover {
    text-decoration: none;
    outline: 0
}

a[disabled] {
    color: rgba(0,0,0,.25);
    cursor: not-allowed;
    pointer-events: none
}

code,kbd,pre,samp {
    font-size: 1em;
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace
}

pre {
    margin-top: 0;
    margin-bottom: 1em;
    overflow: auto
}

figure {
    margin: 0 0 1em
}

img {
    vertical-align: middle;
    border-style: none
}

svg:not(:root) {
    overflow: hidden
}

[role=button],a,area,button,input:not([type=range]),label,select,summary,textarea {
    -ms-touch-action: manipulation;
    touch-action: manipulation
}

table {
    border-collapse: collapse
}

caption {
    padding-top: .75em;
    padding-bottom: .3em;
    color: rgba(0,0,0,.45);
    text-align: left;
    caption-side: bottom
}

th {
    text-align: inherit
}

button,input,optgroup,select,textarea {
    margin: 0;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit
}

button,input {
    overflow: visible
}

button,select {
    text-transform: none
}

[type=reset],[type=submit],button,html [type=button] {
    -webkit-appearance: button
}

[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner {
    padding: 0;
    border-style: none
}

input[type=checkbox],input[type=radio] {
    box-sizing: border-box;
    padding: 0
}

input[type=date],input[type=datetime-local],input[type=month],input[type=time] {
    -webkit-appearance: listbox
}

textarea {
    overflow: auto;
    resize: vertical
}

fieldset {
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0
}

legend {
    display: block;
    width: 100%;
    max-width: 100%;
    margin-bottom: .5em;
    padding: 0;
    color: inherit;
    font-size: 1.5em;
    line-height: inherit;
    white-space: normal
}

progress {
    vertical-align: baseline
}

[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button {
    height: auto
}

[type=search] {
    outline-offset: -2px;
    -webkit-appearance: none
}

[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}

::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button
}

output {
    display: inline-block
}

summary {
    display: list-item
}

template {
    display: none
}

[hidden] {
    display: none!important
}

mark {
    padding: .2em;
    background-color: #feffe6
}

::-moz-selection {
    color: #fff;
    background: #1890ff
}

::selection {
    color: #fff;
    background: #1890ff
}

.clearfix:after,.clearfix:before {
    display: table;
    content: ''
}

.clearfix:after {
    clear: both
}

.anticon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

.anticon>* {
    line-height: 1
}

.anticon svg {
    display: inline-block
}

.anticon:before {
    display: none
}

.anticon .anticon-icon {
    display: block
}

.anticon[tabindex] {
    cursor: pointer
}

.anticon-spin,.anticon-spin:before {
    display: inline-block;
    -webkit-animation: loadingCircle 1s infinite linear;
    animation: loadingCircle 1s infinite linear
}

.fade-appear,.fade-enter,.fade-leave {
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.fade-appear.fade-appear-active,.fade-enter.fade-enter-active {
    -webkit-animation-name: antFadeIn;
    animation-name: antFadeIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.fade-leave.fade-leave-active {
    -webkit-animation-name: antFadeOut;
    animation-name: antFadeOut;
    -webkit-animation-play-state: running;
    animation-play-state: running;
    pointer-events: none
}

.fade-appear,.fade-enter {
    opacity: 0
}

.fade-appear,.fade-enter,.fade-leave {
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear
}

@-webkit-keyframes antFadeIn {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@keyframes antFadeIn {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@-webkit-keyframes antFadeOut {
    0% {
        opacity: 1
    }

    to {
        opacity: 0
    }
}

@keyframes antFadeOut {
    0% {
        opacity: 1
    }

    to {
        opacity: 0
    }
}

.move-up-appear,.move-up-enter,.move-up-leave {
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.move-up-appear.move-up-appear-active,.move-up-enter.move-up-enter-active {
    -webkit-animation-name: antMoveUpIn;
    animation-name: antMoveUpIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.move-up-leave.move-up-leave-active {
    -webkit-animation-name: antMoveUpOut;
    animation-name: antMoveUpOut;
    -webkit-animation-play-state: running;
    animation-play-state: running;
    pointer-events: none
}

.move-up-appear,.move-up-enter {
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(.08,.82,.17,1);
    animation-timing-function: cubic-bezier(.08,.82,.17,1)
}

.move-up-leave {
    -webkit-animation-timing-function: cubic-bezier(.6,.04,.98,.34);
    animation-timing-function: cubic-bezier(.6,.04,.98,.34)
}

.move-down-appear,.move-down-enter,.move-down-leave {
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.move-down-appear.move-down-appear-active,.move-down-enter.move-down-enter-active {
    -webkit-animation-name: antMoveDownIn;
    animation-name: antMoveDownIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.move-down-leave.move-down-leave-active {
    -webkit-animation-name: antMoveDownOut;
    animation-name: antMoveDownOut;
    -webkit-animation-play-state: running;
    animation-play-state: running;
    pointer-events: none
}

.move-down-appear,.move-down-enter {
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(.08,.82,.17,1);
    animation-timing-function: cubic-bezier(.08,.82,.17,1)
}

.move-down-leave {
    -webkit-animation-timing-function: cubic-bezier(.6,.04,.98,.34);
    animation-timing-function: cubic-bezier(.6,.04,.98,.34)
}

.move-left-appear,.move-left-enter,.move-left-leave {
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.move-left-appear.move-left-appear-active,.move-left-enter.move-left-enter-active {
    -webkit-animation-name: antMoveLeftIn;
    animation-name: antMoveLeftIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.move-left-leave.move-left-leave-active {
    -webkit-animation-name: antMoveLeftOut;
    animation-name: antMoveLeftOut;
    -webkit-animation-play-state: running;
    animation-play-state: running;
    pointer-events: none
}

.move-left-appear,.move-left-enter {
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(.08,.82,.17,1);
    animation-timing-function: cubic-bezier(.08,.82,.17,1)
}

.move-left-leave {
    -webkit-animation-timing-function: cubic-bezier(.6,.04,.98,.34);
    animation-timing-function: cubic-bezier(.6,.04,.98,.34)
}

.move-right-appear,.move-right-enter,.move-right-leave {
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.move-right-appear.move-right-appear-active,.move-right-enter.move-right-enter-active {
    -webkit-animation-name: antMoveRightIn;
    animation-name: antMoveRightIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.move-right-leave.move-right-leave-active {
    -webkit-animation-name: antMoveRightOut;
    animation-name: antMoveRightOut;
    -webkit-animation-play-state: running;
    animation-play-state: running;
    pointer-events: none
}

.move-right-appear,.move-right-enter {
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(.08,.82,.17,1);
    animation-timing-function: cubic-bezier(.08,.82,.17,1)
}

.move-right-leave {
    -webkit-animation-timing-function: cubic-bezier(.6,.04,.98,.34);
    animation-timing-function: cubic-bezier(.6,.04,.98,.34)
}

@-webkit-keyframes antMoveDownIn {
    0% {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }

    to {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }
}

@keyframes antMoveDownIn {
    0% {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }

    to {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }
}

@-webkit-keyframes antMoveDownOut {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }

    to {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }
}

@keyframes antMoveDownOut {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }

    to {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }
}

@-webkit-keyframes antMoveLeftIn {
    0% {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }

    to {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }
}

@keyframes antMoveLeftIn {
    0% {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }

    to {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }
}

@-webkit-keyframes antMoveLeftOut {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }

    to {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }
}

@keyframes antMoveLeftOut {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }

    to {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }
}

@-webkit-keyframes antMoveRightIn {
    0% {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }

    to {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }
}

@keyframes antMoveRightIn {
    0% {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }

    to {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }
}

@-webkit-keyframes antMoveRightOut {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }

    to {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }
}

@keyframes antMoveRightOut {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }

    to {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }
}

@-webkit-keyframes antMoveUpIn {
    0% {
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }

    to {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }
}

@keyframes antMoveUpIn {
    0% {
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }

    to {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }
}

@-webkit-keyframes antMoveUpOut {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }

    to {
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }
}

@keyframes antMoveUpOut {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }

    to {
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }
}

@-webkit-keyframes loadingCircle {
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

@keyframes loadingCircle {
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

[ant-click-animating-without-extra-node=true],[ant-click-animating=true] {
    position: relative
}

html {
    --antd-wave-shadow-color: #1890ff;
    --scroll-bar: 0
}

.ant-click-animating-node,[ant-click-animating-without-extra-node=true]:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    border-radius: inherit;
    box-shadow: 0 0 0 0 #1890ff;
    box-shadow: 0 0 0 0 var(--antd-wave-shadow-color);
    opacity: .2;
    -webkit-animation: fadeEffect 2s cubic-bezier(.08,.82,.17,1),waveEffect .4s cubic-bezier(.08,.82,.17,1);
    animation: fadeEffect 2s cubic-bezier(.08,.82,.17,1),waveEffect .4s cubic-bezier(.08,.82,.17,1);
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    content: '';
    pointer-events: none
}

@-webkit-keyframes waveEffect {
    to {
        box-shadow: 0 0 0 #1890ff;
        box-shadow: 0 0 0 6px var(--antd-wave-shadow-color)
    }
}

@keyframes waveEffect {
    to {
        box-shadow: 0 0 0 #1890ff;
        box-shadow: 0 0 0 6px var(--antd-wave-shadow-color)
    }
}

@-webkit-keyframes fadeEffect {
    to {
        opacity: 0
    }
}

@keyframes fadeEffect {
    to {
        opacity: 0
    }
}

.slide-up-appear,.slide-up-enter,.slide-up-leave {
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.slide-up-appear.slide-up-appear-active,.slide-up-enter.slide-up-enter-active {
    -webkit-animation-name: antSlideUpIn;
    animation-name: antSlideUpIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.slide-up-leave.slide-up-leave-active {
    -webkit-animation-name: antSlideUpOut;
    animation-name: antSlideUpOut;
    -webkit-animation-play-state: running;
    animation-play-state: running;
    pointer-events: none
}

.slide-up-appear,.slide-up-enter {
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(.23,1,.32,1);
    animation-timing-function: cubic-bezier(.23,1,.32,1)
}

.slide-up-leave {
    -webkit-animation-timing-function: cubic-bezier(.755,.05,.855,.06);
    animation-timing-function: cubic-bezier(.755,.05,.855,.06)
}

.slide-down-appear,.slide-down-enter,.slide-down-leave {
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.slide-down-appear.slide-down-appear-active,.slide-down-enter.slide-down-enter-active {
    -webkit-animation-name: antSlideDownIn;
    animation-name: antSlideDownIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.slide-down-leave.slide-down-leave-active {
    -webkit-animation-name: antSlideDownOut;
    animation-name: antSlideDownOut;
    -webkit-animation-play-state: running;
    animation-play-state: running;
    pointer-events: none
}

.slide-down-appear,.slide-down-enter {
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(.23,1,.32,1);
    animation-timing-function: cubic-bezier(.23,1,.32,1)
}

.slide-down-leave {
    -webkit-animation-timing-function: cubic-bezier(.755,.05,.855,.06);
    animation-timing-function: cubic-bezier(.755,.05,.855,.06)
}

.slide-left-appear,.slide-left-enter,.slide-left-leave {
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.slide-left-appear.slide-left-appear-active,.slide-left-enter.slide-left-enter-active {
    -webkit-animation-name: antSlideLeftIn;
    animation-name: antSlideLeftIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.slide-left-leave.slide-left-leave-active {
    -webkit-animation-name: antSlideLeftOut;
    animation-name: antSlideLeftOut;
    -webkit-animation-play-state: running;
    animation-play-state: running;
    pointer-events: none
}

.slide-left-appear,.slide-left-enter {
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(.23,1,.32,1);
    animation-timing-function: cubic-bezier(.23,1,.32,1)
}

.slide-left-leave {
    -webkit-animation-timing-function: cubic-bezier(.755,.05,.855,.06);
    animation-timing-function: cubic-bezier(.755,.05,.855,.06)
}

.slide-right-appear,.slide-right-enter,.slide-right-leave {
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.slide-right-appear.slide-right-appear-active,.slide-right-enter.slide-right-enter-active {
    -webkit-animation-name: antSlideRightIn;
    animation-name: antSlideRightIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.slide-right-leave.slide-right-leave-active {
    -webkit-animation-name: antSlideRightOut;
    animation-name: antSlideRightOut;
    -webkit-animation-play-state: running;
    animation-play-state: running;
    pointer-events: none
}

.slide-right-appear,.slide-right-enter {
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(.23,1,.32,1);
    animation-timing-function: cubic-bezier(.23,1,.32,1)
}

.slide-right-leave {
    -webkit-animation-timing-function: cubic-bezier(.755,.05,.855,.06);
    animation-timing-function: cubic-bezier(.755,.05,.855,.06)
}

@-webkit-keyframes antSlideUpIn {
    0% {
        -webkit-transform: scaleY(.8);
        transform: scaleY(.8);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }

    to {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }
}

@keyframes antSlideUpIn {
    0% {
        -webkit-transform: scaleY(.8);
        transform: scaleY(.8);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }

    to {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }
}

@-webkit-keyframes antSlideUpOut {
    0% {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }

    to {
        -webkit-transform: scaleY(.8);
        transform: scaleY(.8);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }
}

@keyframes antSlideUpOut {
    0% {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }

    to {
        -webkit-transform: scaleY(.8);
        transform: scaleY(.8);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }
}

@-webkit-keyframes antSlideDownIn {
    0% {
        -webkit-transform: scaleY(.8);
        transform: scaleY(.8);
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        opacity: 0
    }

    to {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        opacity: 1
    }
}

@keyframes antSlideDownIn {
    0% {
        -webkit-transform: scaleY(.8);
        transform: scaleY(.8);
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        opacity: 0
    }

    to {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        opacity: 1
    }
}

@-webkit-keyframes antSlideDownOut {
    0% {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        opacity: 1
    }

    to {
        -webkit-transform: scaleY(.8);
        transform: scaleY(.8);
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        opacity: 0
    }
}

@keyframes antSlideDownOut {
    0% {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        opacity: 1
    }

    to {
        -webkit-transform: scaleY(.8);
        transform: scaleY(.8);
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        opacity: 0
    }
}

@-webkit-keyframes antSlideLeftIn {
    0% {
        -webkit-transform: scaleX(.8);
        transform: scaleX(.8);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }

    to {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }
}

@keyframes antSlideLeftIn {
    0% {
        -webkit-transform: scaleX(.8);
        transform: scaleX(.8);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }

    to {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }
}

@-webkit-keyframes antSlideLeftOut {
    0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }

    to {
        -webkit-transform: scaleX(.8);
        transform: scaleX(.8);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }
}

@keyframes antSlideLeftOut {
    0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }

    to {
        -webkit-transform: scaleX(.8);
        transform: scaleX(.8);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }
}

@-webkit-keyframes antSlideRightIn {
    0% {
        -webkit-transform: scaleX(.8);
        transform: scaleX(.8);
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
        opacity: 0
    }

    to {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
        opacity: 1
    }
}

@keyframes antSlideRightIn {
    0% {
        -webkit-transform: scaleX(.8);
        transform: scaleX(.8);
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
        opacity: 0
    }

    to {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
        opacity: 1
    }
}

@-webkit-keyframes antSlideRightOut {
    0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
        opacity: 1
    }

    to {
        -webkit-transform: scaleX(.8);
        transform: scaleX(.8);
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
        opacity: 0
    }
}

@keyframes antSlideRightOut {
    0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
        opacity: 1
    }

    to {
        -webkit-transform: scaleX(.8);
        transform: scaleX(.8);
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
        opacity: 0
    }
}

.zoom-appear,.zoom-enter,.zoom-leave {
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.zoom-appear.zoom-appear-active,.zoom-enter.zoom-enter-active {
    -webkit-animation-name: antZoomIn;
    animation-name: antZoomIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.zoom-leave.zoom-leave-active {
    -webkit-animation-name: antZoomOut;
    animation-name: antZoomOut;
    -webkit-animation-play-state: running;
    animation-play-state: running;
    pointer-events: none
}

.zoom-appear,.zoom-enter {
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(.08,.82,.17,1);
    animation-timing-function: cubic-bezier(.08,.82,.17,1)
}

.zoom-leave {
    -webkit-animation-timing-function: cubic-bezier(.78,.14,.15,.86);
    animation-timing-function: cubic-bezier(.78,.14,.15,.86)
}

.zoom-big-appear,.zoom-big-enter,.zoom-big-leave {
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.zoom-big-appear.zoom-big-appear-active,.zoom-big-enter.zoom-big-enter-active {
    -webkit-animation-name: antZoomBigIn;
    animation-name: antZoomBigIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.zoom-big-leave.zoom-big-leave-active {
    -webkit-animation-name: antZoomBigOut;
    animation-name: antZoomBigOut;
    -webkit-animation-play-state: running;
    animation-play-state: running;
    pointer-events: none
}

.zoom-big-appear,.zoom-big-enter {
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(.08,.82,.17,1);
    animation-timing-function: cubic-bezier(.08,.82,.17,1)
}

.zoom-big-leave {
    -webkit-animation-timing-function: cubic-bezier(.78,.14,.15,.86);
    animation-timing-function: cubic-bezier(.78,.14,.15,.86)
}

.zoom-big-fast-appear,.zoom-big-fast-enter,.zoom-big-fast-leave {
    -webkit-animation-duration: .1s;
    animation-duration: .1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.zoom-big-fast-appear.zoom-big-fast-appear-active,.zoom-big-fast-enter.zoom-big-fast-enter-active {
    -webkit-animation-name: antZoomBigIn;
    animation-name: antZoomBigIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.zoom-big-fast-leave.zoom-big-fast-leave-active {
    -webkit-animation-name: antZoomBigOut;
    animation-name: antZoomBigOut;
    -webkit-animation-play-state: running;
    animation-play-state: running;
    pointer-events: none
}

.zoom-big-fast-appear,.zoom-big-fast-enter {
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(.08,.82,.17,1);
    animation-timing-function: cubic-bezier(.08,.82,.17,1)
}

.zoom-big-fast-leave {
    -webkit-animation-timing-function: cubic-bezier(.78,.14,.15,.86);
    animation-timing-function: cubic-bezier(.78,.14,.15,.86)
}

.zoom-up-appear,.zoom-up-enter,.zoom-up-leave {
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.zoom-up-appear.zoom-up-appear-active,.zoom-up-enter.zoom-up-enter-active {
    -webkit-animation-name: antZoomUpIn;
    animation-name: antZoomUpIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.zoom-up-leave.zoom-up-leave-active {
    -webkit-animation-name: antZoomUpOut;
    animation-name: antZoomUpOut;
    -webkit-animation-play-state: running;
    animation-play-state: running;
    pointer-events: none
}

.zoom-up-appear,.zoom-up-enter {
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(.08,.82,.17,1);
    animation-timing-function: cubic-bezier(.08,.82,.17,1)
}

.zoom-up-leave {
    -webkit-animation-timing-function: cubic-bezier(.78,.14,.15,.86);
    animation-timing-function: cubic-bezier(.78,.14,.15,.86)
}

.zoom-down-appear,.zoom-down-enter,.zoom-down-leave {
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.zoom-down-appear.zoom-down-appear-active,.zoom-down-enter.zoom-down-enter-active {
    -webkit-animation-name: antZoomDownIn;
    animation-name: antZoomDownIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.zoom-down-leave.zoom-down-leave-active {
    -webkit-animation-name: antZoomDownOut;
    animation-name: antZoomDownOut;
    -webkit-animation-play-state: running;
    animation-play-state: running;
    pointer-events: none
}

.zoom-down-appear,.zoom-down-enter {
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(.08,.82,.17,1);
    animation-timing-function: cubic-bezier(.08,.82,.17,1)
}

.zoom-down-leave {
    -webkit-animation-timing-function: cubic-bezier(.78,.14,.15,.86);
    animation-timing-function: cubic-bezier(.78,.14,.15,.86)
}

.zoom-left-appear,.zoom-left-enter,.zoom-left-leave {
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.zoom-left-appear.zoom-left-appear-active,.zoom-left-enter.zoom-left-enter-active {
    -webkit-animation-name: antZoomLeftIn;
    animation-name: antZoomLeftIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.zoom-left-leave.zoom-left-leave-active {
    -webkit-animation-name: antZoomLeftOut;
    animation-name: antZoomLeftOut;
    -webkit-animation-play-state: running;
    animation-play-state: running;
    pointer-events: none
}

.zoom-left-appear,.zoom-left-enter {
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(.08,.82,.17,1);
    animation-timing-function: cubic-bezier(.08,.82,.17,1)
}

.zoom-left-leave {
    -webkit-animation-timing-function: cubic-bezier(.78,.14,.15,.86);
    animation-timing-function: cubic-bezier(.78,.14,.15,.86)
}

.zoom-right-appear,.zoom-right-enter,.zoom-right-leave {
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.zoom-right-appear.zoom-right-appear-active,.zoom-right-enter.zoom-right-enter-active {
    -webkit-animation-name: antZoomRightIn;
    animation-name: antZoomRightIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.zoom-right-leave.zoom-right-leave-active {
    -webkit-animation-name: antZoomRightOut;
    animation-name: antZoomRightOut;
    -webkit-animation-play-state: running;
    animation-play-state: running;
    pointer-events: none
}

.zoom-right-appear,.zoom-right-enter {
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(.08,.82,.17,1);
    animation-timing-function: cubic-bezier(.08,.82,.17,1)
}

.zoom-right-leave {
    -webkit-animation-timing-function: cubic-bezier(.78,.14,.15,.86);
    animation-timing-function: cubic-bezier(.78,.14,.15,.86)
}

@-webkit-keyframes antZoomIn {
    0% {
        -webkit-transform: scale(.2);
        transform: scale(.2);
        opacity: 0
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1
    }
}

@keyframes antZoomIn {
    0% {
        -webkit-transform: scale(.2);
        transform: scale(.2);
        opacity: 0
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1
    }
}

@-webkit-keyframes antZoomOut {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    to {
        -webkit-transform: scale(.2);
        transform: scale(.2);
        opacity: 0
    }
}

@keyframes antZoomOut {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    to {
        -webkit-transform: scale(.2);
        transform: scale(.2);
        opacity: 0
    }
}

@-webkit-keyframes antZoomBigIn {
    0% {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        opacity: 0
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1
    }
}

@keyframes antZoomBigIn {
    0% {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        opacity: 0
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1
    }
}

@-webkit-keyframes antZoomBigOut {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    to {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        opacity: 0
    }
}

@keyframes antZoomBigOut {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    to {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        opacity: 0
    }
}

@-webkit-keyframes antZoomUpIn {
    0% {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        -webkit-transform-origin: 50% 0;
        transform-origin: 50% 0;
        opacity: 0
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 50% 0;
        transform-origin: 50% 0
    }
}

@keyframes antZoomUpIn {
    0% {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        -webkit-transform-origin: 50% 0;
        transform-origin: 50% 0;
        opacity: 0
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 50% 0;
        transform-origin: 50% 0
    }
}

@-webkit-keyframes antZoomUpOut {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 50% 0;
        transform-origin: 50% 0
    }

    to {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        -webkit-transform-origin: 50% 0;
        transform-origin: 50% 0;
        opacity: 0
    }
}

@keyframes antZoomUpOut {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 50% 0;
        transform-origin: 50% 0
    }

    to {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        -webkit-transform-origin: 50% 0;
        transform-origin: 50% 0;
        opacity: 0
    }
}

@-webkit-keyframes antZoomLeftIn {
    0% {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%;
        opacity: 0
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%
    }
}

@keyframes antZoomLeftIn {
    0% {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%;
        opacity: 0
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%
    }
}

@-webkit-keyframes antZoomLeftOut {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%
    }

    to {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%;
        opacity: 0
    }
}

@keyframes antZoomLeftOut {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%
    }

    to {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%;
        opacity: 0
    }
}

@-webkit-keyframes antZoomRightIn {
    0% {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        -webkit-transform-origin: 100% 50%;
        transform-origin: 100% 50%;
        opacity: 0
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 100% 50%;
        transform-origin: 100% 50%
    }
}

@keyframes antZoomRightIn {
    0% {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        -webkit-transform-origin: 100% 50%;
        transform-origin: 100% 50%;
        opacity: 0
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 100% 50%;
        transform-origin: 100% 50%
    }
}

@-webkit-keyframes antZoomRightOut {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 100% 50%;
        transform-origin: 100% 50%
    }

    to {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        -webkit-transform-origin: 100% 50%;
        transform-origin: 100% 50%;
        opacity: 0
    }
}

@keyframes antZoomRightOut {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 100% 50%;
        transform-origin: 100% 50%
    }

    to {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        -webkit-transform-origin: 100% 50%;
        transform-origin: 100% 50%;
        opacity: 0
    }
}

@-webkit-keyframes antZoomDownIn {
    0% {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        opacity: 0
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%
    }
}

@keyframes antZoomDownIn {
    0% {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        opacity: 0
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%
    }
}

@-webkit-keyframes antZoomDownOut {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%
    }

    to {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        opacity: 0
    }
}

@keyframes antZoomDownOut {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%
    }

    to {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        opacity: 0
    }
}

.ant-motion-collapse-legacy {
    overflow: hidden
}

.ant-motion-collapse,.ant-motion-collapse-legacy-active {
    -webkit-transition: height .15s cubic-bezier(.645,.045,.355,1),opacity .15s cubic-bezier(.645,.045,.355,1)!important;
    transition: height .15s cubic-bezier(.645,.045,.355,1),opacity .15s cubic-bezier(.645,.045,.355,1)!important
}

.ant-motion-collapse {
    overflow: hidden
}

.ant-affix {
    position: fixed;
    z-index: 10
}

.ant-alert {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    padding: 8px 15px 8px 37px;
    word-wrap: break-word;
    border-radius: 2px
}

.ant-alert.ant-alert-no-icon {
    padding: 8px 15px
}

.ant-alert.ant-alert-no-icon .ant-alert-close-icon {
    top: 12.0005px
}

.ant-alert.ant-alert-closable {
    padding-right: 30px
}

.ant-alert-icon {
    position: absolute;
    top: 12.0005px;
    left: 16px
}

.ant-alert-description {
    display: none;
    font-size: 14px;
    line-height: 22px
}

.ant-alert-success {
    background-color: #f6ffed;
    border: 1px solid #b7eb8f
}

.ant-alert-success .ant-alert-icon {
    color: #52c41a
}

.ant-alert-info {
    background-color: #e6f7ff;
    border: 1px solid #91d5ff
}

.ant-alert-info .ant-alert-icon {
    color: #1890ff
}

.ant-alert-warning {
    background-color: #fffbe6;
    border: 1px solid #ffe58f
}

.ant-alert-warning .ant-alert-icon {
    color: #faad14
}

.ant-alert-error {
    background-color: #fff2f0;
    border: 1px solid #ffccc7
}

.ant-alert-error .ant-alert-icon {
    color: #ff4d4f
}

.ant-alert-error .ant-alert-description>pre {
    margin: 0;
    padding: 0
}

.ant-alert-close-icon {
    position: absolute;
    top: 12.0005px;
    right: 16px;
    padding: 0;
    overflow: hidden;
    font-size: 12px;
    line-height: 12px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer
}

.ant-alert-close-icon .anticon-close {
    color: rgba(0,0,0,.45);
    -webkit-transition: color .3s;
    transition: color .3s
}

.ant-alert-close-icon .anticon-close:hover {
    color: rgba(0,0,0,.75)
}

.ant-alert-close-text {
    color: rgba(0,0,0,.45);
    -webkit-transition: color .3s;
    transition: color .3s
}

.ant-alert-close-text:hover {
    color: rgba(0,0,0,.75)
}

.ant-alert-with-description {
    position: relative;
    padding: 15px 15px 14px 64px;
    color: rgba(0,0,0,.65);
    line-height: 1.5715;
    border-radius: 2px
}

.ant-alert-with-description.ant-alert-no-icon {
    padding: 15px
}

.ant-alert-with-description .ant-alert-icon {
    position: absolute;
    top: 15px;
    left: 24px;
    font-size: 24px
}

.ant-alert-with-description .ant-alert-close-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 14px;
    cursor: pointer
}

.ant-alert-with-description .ant-alert-message {
    display: block;
    margin-bottom: 4px;
    color: rgba(0,0,0,.85);
    font-size: 16px
}

.ant-alert-message {
    color: rgba(0,0,0,.85)
}

.ant-alert-with-description .ant-alert-description {
    display: block
}

.ant-alert.ant-alert-closing {
    height: 0!important;
    margin: 0;
    padding-top: 0;
    padding-bottom: 0;
    -webkit-transform-origin: 50% 0;
    -ms-transform-origin: 50% 0;
    transform-origin: 50% 0;
    -webkit-transition: all .3s cubic-bezier(.78,.14,.15,.86);
    transition: all .3s cubic-bezier(.78,.14,.15,.86)
}

.ant-alert-slide-up-leave {
    -webkit-animation: antAlertSlideUpOut .3s cubic-bezier(.78,.14,.15,.86);
    animation: antAlertSlideUpOut .3s cubic-bezier(.78,.14,.15,.86);
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

.ant-alert-banner {
    margin-bottom: 0;
    border: 0;
    border-radius: 0
}

@-webkit-keyframes antAlertSlideUpIn {
    0% {
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }

    to {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }
}

@keyframes antAlertSlideUpIn {
    0% {
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }

    to {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }
}

@-webkit-keyframes antAlertSlideUpOut {
    0% {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }

    to {
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }
}

@keyframes antAlertSlideUpOut {
    0% {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 1
    }

    to {
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        opacity: 0
    }
}

.ant-alert.ant-alert-rtl {
    padding: 8px 37px 8px 15px;
    direction: rtl
}

.ant-alert-rtl.ant-alert.ant-alert-no-icon {
    padding: 8px 15px
}

.ant-alert.ant-alert-rtl.ant-alert.ant-alert-closable {
    padding-right: 37px;
    padding-left: 30px
}

.ant-alert.ant-alert-rtl.ant-alert.ant-alert-no-icon.ant-alert-closable {
    padding-right: 15px;
    padding-left: 30px
}

.ant-alert-rtl .ant-alert-icon {
    right: 16px;
    left: auto
}

.ant-alert-rtl .ant-alert-close-icon {
    right: auto;
    left: 16px
}

.ant-alert.ant-alert-rtl.ant-alert-with-description,.ant-alert.ant-alert-rtl.ant-alert-with-description.ant-alert-closable {
    padding: 15px 64px 15px 15px
}

.ant-alert.ant-alert-rtl.ant-alert-with-description.ant-alert-no-icon {
    padding: 15px
}

.ant-alert-rtl.ant-alert-with-description .ant-alert-icon {
    right: 24px;
    left: auto
}

.ant-alert-rtl.ant-alert-with-description .ant-alert-close-icon {
    right: auto;
    left: 16px
}

.ant-anchor {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    padding-left: 2px
}

.ant-anchor-wrapper {
    margin-left: -4px;
    padding-left: 4px;
    overflow: auto;
    background-color: #fff
}

.ant-anchor-ink {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%
}

.ant-anchor-ink:before {
    position: relative;
    display: block;
    width: 2px;
    height: 100%;
    margin: 0 auto;
    background-color: #f0f0f0;
    content: ' '
}

.ant-anchor-ink-ball {
    position: absolute;
    left: 50%;
    display: none;
    width: 8px;
    height: 8px;
    background-color: #fff;
    border: 2px solid #1890ff;
    border-radius: 8px;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    -webkit-transition: top .3s ease-in-out;
    transition: top .3s ease-in-out
}

.ant-anchor-ink-ball.visible {
    display: inline-block
}

.ant-anchor.fixed .ant-anchor-ink .ant-anchor-ink-ball {
    display: none
}

.ant-anchor-link {
    padding: 7px 0 7px 16px;
    line-height: 1.143
}

.ant-anchor-link-title {
    position: relative;
    display: block;
    margin-bottom: 6px;
    overflow: hidden;
    color: rgba(0,0,0,.65);
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-anchor-link-title:only-child {
    margin-bottom: 0
}

.ant-anchor-link-active>.ant-anchor-link-title {
    color: #1890ff
}

.ant-anchor-link .ant-anchor-link {
    padding-top: 5px;
    padding-bottom: 5px
}

.ant-anchor-rtl {
    direction: rtl
}

.ant-anchor-rtl.ant-anchor-wrapper {
    margin-right: -4px;
    margin-left: 0;
    padding-right: 4px;
    padding-left: 0
}

.ant-anchor-rtl .ant-anchor-ink {
    right: 0;
    left: auto
}

.ant-anchor-rtl .ant-anchor-ink-ball {
    right: 50%;
    left: 0;
    -webkit-transform: translateX(50%);
    -ms-transform: translateX(50%);
    transform: translateX(50%)
}

.ant-anchor-rtl .ant-anchor-link {
    padding: 7px 16px 7px 0
}

.ant-select-auto-complete {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum'
}

.ant-select-auto-complete .ant-select-clear {
    right: 13px
}

.ant-select-single .ant-select-selector {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex
}

.ant-select-single .ant-select-selector .ant-select-selection-search {
    position: absolute;
    top: 0;
    right: 11px;
    bottom: 0;
    left: 11px
}

.ant-select-single .ant-select-selector .ant-select-selection-search-input {
    width: 100%
}

.ant-select-single .ant-select-selector .ant-select-selection-item,.ant-select-single .ant-select-selector .ant-select-selection-placeholder {
    padding: 0;
    line-height: 30px;
    -webkit-transition: all .3s;
    transition: all .3s;
    pointer-events: none
}

@supports (-moz-appearance: meterbar) {
    .ant-select-single .ant-select-selector .ant-select-selection-item,.ant-select-single .ant-select-selector .ant-select-selection-placeholder {
        line-height:30px
    }
}

.ant-select-single .ant-select-selector .ant-select-selection-item:after,.ant-select-single .ant-select-selector .ant-select-selection-placeholder:after,.ant-select-single .ant-select-selector:after {
    display: inline-block;
    width: 0;
    visibility: hidden;
    content: '\A0'
}

.ant-select-single.ant-select-show-arrow .ant-select-selection-search {
    right: 25px
}

.ant-select-single.ant-select-show-arrow .ant-select-selection-item,.ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    padding-right: 18px
}

.ant-select-single.ant-select-open .ant-select-selection-item {
    opacity: .4
}

.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    position: relative;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    height: 32px;
    padding: 0 11px
}

.ant-select-single:not(.ant-select-customize-input) .ant-select-selector input {
    cursor: pointer
}

.ant-select-show-search.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    cursor: text
}

.ant-select-show-search.ant-select-single:not(.ant-select-customize-input) .ant-select-selector input {
    cursor: auto
}

.ant-select-focused.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    border-color: #40a9ff;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24,144,255,.2)
}

.ant-select-disabled.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    color: rgba(0,0,0,.25);
    background: #f5f5f5;
    cursor: not-allowed
}

.ant-select-disabled.ant-select-single:not(.ant-select-customize-input) .ant-select-selector input {
    cursor: not-allowed
}

.ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {
    background: transparent;
    border: none;
    outline: none;
    height: 30px
}

.ant-select-single.ant-select-customize-input .ant-select-selector:after {
    display: none
}

.ant-select-single.ant-select-customize-input .ant-select-selector .ant-select-selection-search {
    position: static;
    width: 100%
}

.ant-select-single.ant-select-customize-input .ant-select-selector .ant-select-selection-placeholder {
    position: absolute;
    right: 0;
    left: 0;
    padding: 0 11px
}

.ant-select-single.ant-select-customize-input .ant-select-selector .ant-select-selection-placeholder:after {
    display: none
}

.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector {
    height: 40px
}

.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-item,.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-placeholder {
    line-height: 38px
}

.ant-select-single.ant-select-lg:not(.ant-select-customize-input):not(.ant-select-customize-input) .ant-select-selection-search-input {
    height: 38px
}

.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector {
    height: 24px
}

.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-item,.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-placeholder {
    line-height: 22px
}

.ant-select-single.ant-select-sm:not(.ant-select-customize-input):not(.ant-select-customize-input) .ant-select-selection-search-input {
    height: 22px
}

.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selection-search {
    right: 7px;
    left: 7px
}

.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector {
    padding: 0 7px
}

.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-search {
    right: 28px
}

.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-item,.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-placeholder {
    padding-right: 21px
}

.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector {
    padding: 0 11px
}

.ant-select-multiple .ant-select-selector {
    position: relative;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 1px 4px
}

.ant-select-multiple .ant-select-selector input {
    cursor: pointer
}

.ant-select-show-search.ant-select-multiple .ant-select-selector input {
    cursor: auto
}

.ant-select-focused.ant-select-multiple .ant-select-selector {
    border-color: #40a9ff;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24,144,255,.2)
}

.ant-select-disabled.ant-select-multiple .ant-select-selector {
    color: rgba(0,0,0,.25);
    background: #f5f5f5;
    cursor: not-allowed
}

.ant-select-disabled.ant-select-multiple .ant-select-selector input {
    cursor: not-allowed
}

.ant-select-multiple .ant-select-selector .ant-select-selection-search-input {
    background: transparent;
    border: none;
    outline: none
}

.ant-select-show-search.ant-select-multiple .ant-select-selector {
    cursor: text
}

.ant-select-multiple .ant-select-selector:after {
    display: inline-block;
    width: 0;
    margin: 2px 0;
    line-height: 24px;
    content: '\A0'
}

.ant-select-multiple.ant-select-allow-clear .ant-select-selector {
    padding-right: 24px
}

.ant-select-multiple .ant-select-selection-item {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: none;
    -webkit-flex: none;
    flex: none;
    box-sizing: border-box;
    max-width: 100%;
    height: 24px;
    margin-top: 2px;
    margin-right: 4px;
    margin-bottom: 2px;
    padding: 0 4px 0 8px;
    line-height: 22px;
    background: #f5f5f5;
    border: 1px solid #f0f0f0;
    border-radius: 2px;
    cursor: default;
    -webkit-transition: font-size .3s,line-height .3s,height .3s;
    transition: font-size .3s,line-height .3s,height .3s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.ant-select-multiple .ant-select-selection-item-content {
    display: inline-block;
    margin-right: 4px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.ant-select-multiple .ant-select-selection-item-remove {
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgba(0,0,0,.45);
    font-weight: 700;
    font-size: 12px;
    line-height: inherit;
    cursor: pointer;
    display: inline-block;
    font-size: 10px
}

.ant-select-multiple .ant-select-selection-item-remove>* {
    line-height: 1
}

.ant-select-multiple .ant-select-selection-item-remove svg {
    display: inline-block
}

.ant-select-multiple .ant-select-selection-item-remove:before {
    display: none
}

.ant-select-multiple .ant-select-selection-item-remove .ant-select-multiple .ant-select-selection-item-remove-icon {
    display: block
}

.ant-select-multiple .ant-select-selection-item-remove:hover {
    color: rgba(0,0,0,.75)
}

.ant-select-multiple .ant-select-selection-search {
    position: relative;
    margin-left: .5px
}

.ant-select-multiple .ant-select-selection-search-input,.ant-select-multiple .ant-select-selection-search-mirror {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;
    line-height: 1.5715;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-select-multiple .ant-select-selection-search-input {
    width: 100%;
    min-width: 3px
}

.ant-select-multiple .ant-select-selection-search-mirror {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    white-space: nowrap;
    visibility: hidden
}

.ant-select-multiple .ant-select-selection-search:first-child .ant-select-selection-search-input {
    margin-left: 6.5px
}

.ant-select-multiple .ant-select-selection-placeholder {
    position: absolute;
    top: 50%;
    right: 11px;
    left: 11px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-select-multiple.ant-select-lg .ant-select-selector:after {
    line-height: 32px
}

.ant-select-multiple.ant-select-lg .ant-select-selection-item {
    height: 32px;
    line-height: 30px
}

.ant-select-multiple.ant-select-lg .ant-select-selection-search {
    height: 33px;
    line-height: 33px
}

.ant-select-multiple.ant-select-lg .ant-select-selection-search-input,.ant-select-multiple.ant-select-lg .ant-select-selection-search-mirror {
    height: 32px;
    line-height: 30px
}

.ant-select-multiple.ant-select-sm .ant-select-selector:after {
    line-height: 16px
}

.ant-select-multiple.ant-select-sm .ant-select-selection-item {
    height: 16px;
    line-height: 14px
}

.ant-select-multiple.ant-select-sm .ant-select-selection-search {
    height: 17px;
    line-height: 17px
}

.ant-select-multiple.ant-select-sm .ant-select-selection-search-input,.ant-select-multiple.ant-select-sm .ant-select-selection-search-mirror {
    height: 16px;
    line-height: 14px
}

.ant-select-multiple.ant-select-sm .ant-select-selection-placeholder {
    left: 7px
}

.ant-select-multiple.ant-select-sm .ant-select-selection-search:first-child .ant-select-selection-search-input {
    margin-left: 3px
}

.ant-select-multiple.ant-select-lg .ant-select-selection-item {
    height: 32px;
    line-height: 32px
}

.ant-select-disabled .ant-select-selection-item-remove {
    display: none
}

.ant-select {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    display: inline-block;
    cursor: pointer
}

.ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: #40a9ff;
    border-right-width: 1px!important
}

.ant-select-selection-item {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

@media all and (-ms-high-contrast:none) {
    .ant-select-selection-item,.ant-select-selection-item ::-ms-backdrop {
        -ms-flex: auto;
        flex: auto
    }
}

.ant-select-selection-placeholder {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    opacity: .4
}

@media all and (-ms-high-contrast:none) {
    .ant-select-selection-placeholder,.ant-select-selection-placeholder ::-ms-backdrop {
        -ms-flex: auto;
        flex: auto
    }
}

.ant-select-arrow {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-transform: none;
    vertical-align: -.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    top: 53%;
    right: 11px;
    width: 12px;
    height: 12px;
    margin-top: -6px;
    color: rgba(0,0,0,.25);
    font-size: 12px;
    line-height: 1;
    text-align: center;
    pointer-events: none
}

.ant-select-arrow>* {
    line-height: 1
}

.ant-select-arrow svg {
    display: inline-block
}

.ant-select-arrow:before {
    display: none
}

.ant-select-arrow .ant-select-arrow-icon {
    display: block
}

.ant-select-arrow .anticon {
    vertical-align: top;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s
}

.ant-select-arrow .anticon>svg {
    vertical-align: top
}

.ant-select-arrow .anticon:not(.anticon-down) {
    pointer-events: auto
}

.ant-select-clear {
    position: absolute;
    top: 50%;
    right: 11px;
    z-index: 1;
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-top: -6px;
    color: rgba(0,0,0,.25);
    font-size: 12px;
    font-style: normal;
    line-height: 1;
    text-align: center;
    text-transform: none;
    background: #fff;
    cursor: pointer;
    opacity: 0;
    -webkit-transition: color .3s ease,opacity .15s ease;
    transition: color .3s ease,opacity .15s ease;
    text-rendering: auto
}

.ant-select-clear:before {
    display: block
}

.ant-select-clear:hover {
    color: rgba(0,0,0,.45)
}

.ant-select:hover .ant-select-clear {
    opacity: 1
}

.ant-select-dropdown {
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: absolute;
    top: -9999px;
    left: -9999px;
    z-index: 1050;
    box-sizing: border-box;
    padding: 4px 0;
    overflow: hidden;
    font-size: 14px;
    font-variant: normal;
    background-color: #fff;
    border-radius: 2px;
    outline: none;
    box-shadow: 0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)
}

.ant-select-dropdown.slide-up-appear.slide-up-appear-active.ant-select-dropdown-placement-bottomLeft,.ant-select-dropdown.slide-up-enter.slide-up-enter-active.ant-select-dropdown-placement-bottomLeft {
    -webkit-animation-name: antSlideUpIn;
    animation-name: antSlideUpIn
}

.ant-select-dropdown.slide-up-appear.slide-up-appear-active.ant-select-dropdown-placement-topLeft,.ant-select-dropdown.slide-up-enter.slide-up-enter-active.ant-select-dropdown-placement-topLeft {
    -webkit-animation-name: antSlideDownIn;
    animation-name: antSlideDownIn
}

.ant-select-dropdown.slide-up-leave.slide-up-leave-active.ant-select-dropdown-placement-bottomLeft {
    -webkit-animation-name: antSlideUpOut;
    animation-name: antSlideUpOut
}

.ant-select-dropdown.slide-up-leave.slide-up-leave-active.ant-select-dropdown-placement-topLeft {
    -webkit-animation-name: antSlideDownOut;
    animation-name: antSlideDownOut
}

.ant-select-dropdown-hidden {
    display: none
}

.ant-select-item,.ant-select-item-empty {
    position: relative;
    display: block;
    min-height: 32px;
    padding: 5px 12px;
    color: rgba(0,0,0,.65);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px
}

.ant-select-item {
    cursor: pointer;
    -webkit-transition: background .3s ease;
    transition: background .3s ease
}

.ant-select-item-group {
    color: rgba(0,0,0,.45);
    font-size: 12px;
    cursor: default
}

.ant-select-item-option {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex
}

.ant-select-item-option-content {
    -webkit-box-flex: 1;
    -ms-flex: auto;
    -webkit-flex: auto;
    flex: auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.ant-select-item-option-state {
    -webkit-box-flex: 0;
    -ms-flex: none;
    -webkit-flex: none;
    flex: none
}

.ant-select-item-option-active:not(.ant-select-item-option-disabled) {
    background-color: #f5f5f5
}

.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    color: rgba(0,0,0,.65);
    font-weight: 600;
    background-color: #e6f7ff
}

.ant-select-item-option-selected:not(.ant-select-item-option-disabled) .ant-select-item-option-state {
    color: #1890ff
}

.ant-select-item-option-disabled {
    color: rgba(0,0,0,.25);
    cursor: not-allowed
}

.ant-select-item-option-grouped {
    padding-left: 24px
}

.ant-select-lg {
    font-size: 16px
}

.ant-select-borderless .ant-select-selector {
    background-color: transparent!important;
    border-color: transparent!important;
    box-shadow: none!important
}

.ant-select-rtl {
    direction: rtl
}

.ant-select-rtl .ant-select-arrow,.ant-select-rtl .ant-select-clear {
    right: auto;
    left: 11px
}

.ant-select-dropdown-rtl {
    direction: rtl
}

.ant-select-dropdown-rtl .ant-select-item-option-grouped {
    padding-right: 24px;
    padding-left: 12px
}

.ant-select-rtl.ant-select-multiple.ant-select-allow-clear .ant-select-selector {
    padding-right: 4px;
    padding-left: 24px
}

.ant-select-rtl.ant-select-multiple .ant-select-selection-item,.ant-select-rtl.ant-select-multiple .ant-select-selection-item-content {
    margin-right: 0;
    margin-left: 4px;
    text-align: right
}

.ant-select-rtl.ant-select-multiple .ant-select-selection-search {
    margin-right: .5px;
    margin-left: 4px
}

.ant-select-rtl.ant-select-multiple .ant-select-selection-search-mirror {
    right: 0;
    left: auto
}

.ant-select-rtl.ant-select-multiple .ant-select-selection-placeholder {
    right: 11px;
    left: auto
}

.ant-select-rtl.ant-select-multiple.ant-select-sm .ant-select-selection-placeholder {
    right: 7px
}

.ant-select-rtl.ant-select-single .ant-select-selector .ant-select-selection-item,.ant-select-rtl.ant-select-single .ant-select-selector .ant-select-selection-placeholder {
    right: 0;
    left: 9px;
    text-align: right
}

.ant-select-rtl.ant-select-single.ant-select-show-arrow .ant-select-selection-search {
    right: 11px;
    left: 25px
}

.ant-select-rtl.ant-select-single.ant-select-show-arrow .ant-select-selection-item,.ant-select-rtl.ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    padding-right: 0;
    padding-left: 18px
}

.ant-select-rtl.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    padding: 0 11px
}

.ant-select-rtl.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-search {
    right: 0
}

.ant-select-rtl.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-item,.ant-select-rtl.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-placeholder {
    padding-right: 0;
    padding-left: 21px
}

.ant-empty {
    margin: 0 8px;
    font-size: 14px;
    line-height: 1.5715;
    text-align: center
}

.ant-empty-image {
    height: 100px;
    margin-bottom: 8px
}

.ant-empty-image img {
    height: 100%
}

.ant-empty-image svg {
    height: 100%;
    margin: auto
}

.ant-empty-description {
    margin: 0
}

.ant-empty-footer {
    margin-top: 16px
}

.ant-empty-normal {
    margin: 32px 0;
    color: rgba(0,0,0,.25)
}

.ant-empty-normal .ant-empty-image {
    height: 40px
}

.ant-empty-small {
    margin: 8px 0;
    color: rgba(0,0,0,.25)
}

.ant-empty-small .ant-empty-image {
    height: 35px
}

.ant-empty-img-default-ellipse {
    fill-opacity: .8;
    fill: #f5f5f5
}

.ant-empty-img-default-path-1 {
    fill: #aeb8c2
}

.ant-empty-img-default-path-2 {
    fill: url(#linearGradient-1)
}

.ant-empty-img-default-path-3 {
    fill: #f5f5f7
}

.ant-empty-img-default-path-4,.ant-empty-img-default-path-5 {
    fill: #dce0e6
}

.ant-empty-img-default-g {
    fill: #fff
}

.ant-empty-img-simple-ellipse {
    fill: #f5f5f5
}

.ant-empty-img-simple-g {
    stroke: #d9d9d9
}

.ant-empty-img-simple-path {
    fill: #fafafa
}

.ant-empty-rtl {
    direction: rtl
}

.ant-avatar {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    display: inline-block;
    overflow: hidden;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    background: #ccc;
    width: 32px;
    height: 32px;
    line-height: 32px;
    border-radius: 50%
}

.ant-avatar-image {
    background: transparent
}

.ant-avatar-string {
    position: absolute;
    left: 50%;
    -webkit-transform-origin: 0 center;
    -ms-transform-origin: 0 center;
    transform-origin: 0 center
}

.ant-avatar.ant-avatar-icon {
    font-size: 18px
}

.ant-avatar.ant-avatar-icon>.anticon {
    margin: 0
}

.ant-avatar-lg {
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%
}

.ant-avatar-lg-string {
    position: absolute;
    left: 50%;
    -webkit-transform-origin: 0 center;
    -ms-transform-origin: 0 center;
    transform-origin: 0 center
}

.ant-avatar-lg.ant-avatar-icon {
    font-size: 24px
}

.ant-avatar-lg.ant-avatar-icon>.anticon {
    margin: 0
}

.ant-avatar-sm {
    width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 50%
}

.ant-avatar-sm-string {
    position: absolute;
    left: 50%;
    -webkit-transform-origin: 0 center;
    -ms-transform-origin: 0 center;
    transform-origin: 0 center
}

.ant-avatar-sm.ant-avatar-icon {
    font-size: 14px
}

.ant-avatar-sm.ant-avatar-icon>.anticon {
    margin: 0
}

.ant-avatar-square {
    border-radius: 2px
}

.ant-avatar>img {
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover
}

.ant-back-top {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: fixed;
    right: 100px;
    bottom: 50px;
    z-index: 10;
    width: 40px;
    height: 40px;
    cursor: pointer
}

.ant-back-top-rtl {
    right: auto;
    left: 100px;
    direction: rtl
}

.ant-back-top-content {
    width: 40px;
    height: 40px;
    overflow: hidden;
    color: #fff;
    text-align: center;
    background-color: rgba(0,0,0,.45);
    border-radius: 20px
}

.ant-back-top-content,.ant-back-top-content:hover {
    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
    transition: all .3s cubic-bezier(.645,.045,.355,1)
}

.ant-back-top-content:hover {
    background-color: rgba(0,0,0,.65)
}

.ant-back-top-icon {
    width: 14px;
    height: 16px;
    margin: 12px auto;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAAABGdBTUEAALGPC/xhBQAAAbtJREFUWAntmMtKw0AUhhMvS5cuxILgQlRUpIggIoKIIoigG1eC+AA+jo+i6FIXBfeuXIgoeKVeitVWJX5HWhhDksnUpp3FDPyZk3Nm5nycmZKkXhAEOXSA3lG7muTeRzmfy6HneUvIhnYkQK+Q9NhAA0Opg0vBEhjBKHiyb8iGMyQMOYuK41BcBSypAL+MYXSKjtFAW7EAGEO3qN4uMQbbAkXiSfRQJ1H6a+yhlkKRcAoVFYiweYNjtCVQJJpBz2GCiPt7fBOZQpFgDpUikse5HgnkM4Fi4QX0Fpc5wf9EbLqpUCy4jMoJSXWhFwbMNgWKhVbRhy5jirhs9fy/oFhgHVVTJEs7RLZ8sSEoJm6iz7SZDMbJ+/OKERQTttCXQRLToRUmrKWCYuA2+jbN0MB4OQobYShfdTCgn/sL1K36M7TLrN3n+758aPy2rrpR6+/od5E8tf/A1uLS9aId5T7J3CNYihkQ4D9PiMdMC7mp4rjB9kjFjZp8BlnVHJBuO1yFXIV0FdDF3RlyFdJVQBdv5AxVdIsq8apiZ2PyYO1EVykesGfZEESsCkweyR8MUW+V8uJ1gkYipmpdP1pm2aJVPEGzAAAAAElFTkSuQmCC) 100%/100% no-repeat
}

@media screen and (max-width: 768px) {
    .ant-back-top {
        right:60px
    }
}

@media screen and (max-width: 480px) {
    .ant-back-top {
        right:20px
    }
}

.ant-badge {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    display: inline-block;
    color: unset;
    line-height: 1
}

.ant-badge-count {
    z-index: auto;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: #ff4d4f;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff
}

.ant-badge-count a,.ant-badge-count a:hover {
    color: #fff
}

.ant-badge-multiple-words {
    padding: 0 8px
}

.ant-badge-dot {
    z-index: auto;
    width: 6px;
    height: 6px;
    background: #ff4d4f;
    border-radius: 100%;
    box-shadow: 0 0 0 1px #fff
}

.ant-badge-count,.ant-badge-dot,.ant-badge .ant-scroll-number-custom-component {
    position: absolute;
    top: 0;
    right: 0;
    -webkit-transform: translate(50%,-50%);
    -ms-transform: translate(50%,-50%);
    transform: translate(50%,-50%);
    -webkit-transform-origin: 100% 0;
    -ms-transform-origin: 100% 0;
    transform-origin: 100% 0
}

.ant-badge-status {
    line-height: inherit;
    vertical-align: baseline
}

.ant-badge-status-dot {
    position: relative;
    top: -1px;
    display: inline-block;
    width: 6px;
    height: 6px;
    vertical-align: middle;
    border-radius: 50%
}

.ant-badge-status-success {
    background-color: #52c41a
}

.ant-badge-status-processing {
    position: relative;
    background-color: #1890ff
}

.ant-badge-status-processing:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #1890ff;
    border-radius: 50%;
    -webkit-animation: antStatusProcessing 1.2s infinite ease-in-out;
    animation: antStatusProcessing 1.2s infinite ease-in-out;
    content: ''
}

.ant-badge-status-default {
    background-color: #d9d9d9
}

.ant-badge-status-error {
    background-color: #ff4d4f
}

.ant-badge-status-warning {
    background-color: #faad14
}

.ant-badge-status-magenta,.ant-badge-status-pink {
    background: #eb2f96
}

.ant-badge-status-red {
    background: #f5222d
}

.ant-badge-status-volcano {
    background: #fa541c
}

.ant-badge-status-orange {
    background: #fa8c16
}

.ant-badge-status-yellow {
    background: #fadb14
}

.ant-badge-status-gold {
    background: #faad14
}

.ant-badge-status-cyan {
    background: #13c2c2
}

.ant-badge-status-lime {
    background: #a0d911
}

.ant-badge-status-green {
    background: #52c41a
}

.ant-badge-status-blue {
    background: #1890ff
}

.ant-badge-status-geekblue {
    background: #2f54eb
}

.ant-badge-status-purple {
    background: #722ed1
}

.ant-badge-status-text {
    margin-left: 8px;
    color: rgba(0,0,0,.65);
    font-size: 14px
}

.ant-badge-zoom-appear,.ant-badge-zoom-enter {
    -webkit-animation: antZoomBadgeIn .3s cubic-bezier(.12,.4,.29,1.46);
    animation: antZoomBadgeIn .3s cubic-bezier(.12,.4,.29,1.46);
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

.ant-badge-zoom-leave {
    -webkit-animation: antZoomBadgeOut .3s cubic-bezier(.71,-.46,.88,.6);
    animation: antZoomBadgeOut .3s cubic-bezier(.71,-.46,.88,.6);
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

.ant-badge-not-a-wrapper:not(.ant-badge-status) {
    vertical-align: middle
}

.ant-badge-not-a-wrapper .ant-scroll-number {
    position: relative;
    top: auto;
    display: block
}

@-webkit-keyframes antStatusProcessing {
    0% {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        opacity: .5
    }

    to {
        -webkit-transform: scale(2.4);
        transform: scale(2.4);
        opacity: 0
    }
}

@keyframes antStatusProcessing {
    0% {
        -webkit-transform: scale(.8);
        transform: scale(.8);
        opacity: .5
    }

    to {
        -webkit-transform: scale(2.4);
        transform: scale(2.4);
        opacity: 0
    }
}

.ant-scroll-number {
    overflow: hidden
}

.ant-scroll-number-only {
    display: inline-block;
    height: 20px;
    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
    transition: all .3s cubic-bezier(.645,.045,.355,1)
}

.ant-scroll-number-only>p.ant-scroll-number-only-unit {
    height: 20px;
    margin: 0
}

.ant-scroll-number-symbol {
    vertical-align: top
}

@-webkit-keyframes antZoomBadgeIn {
    0% {
        -webkit-transform: scale(0) translate(50%,-50%);
        transform: scale(0) translate(50%,-50%);
        opacity: 0
    }

    to {
        -webkit-transform: scale(1) translate(50%,-50%);
        transform: scale(1) translate(50%,-50%)
    }
}

@keyframes antZoomBadgeIn {
    0% {
        -webkit-transform: scale(0) translate(50%,-50%);
        transform: scale(0) translate(50%,-50%);
        opacity: 0
    }

    to {
        -webkit-transform: scale(1) translate(50%,-50%);
        transform: scale(1) translate(50%,-50%)
    }
}

@-webkit-keyframes antZoomBadgeOut {
    0% {
        -webkit-transform: scale(1) translate(50%,-50%);
        transform: scale(1) translate(50%,-50%)
    }

    to {
        -webkit-transform: scale(0) translate(50%,-50%);
        transform: scale(0) translate(50%,-50%);
        opacity: 0
    }
}

@keyframes antZoomBadgeOut {
    0% {
        -webkit-transform: scale(1) translate(50%,-50%);
        transform: scale(1) translate(50%,-50%)
    }

    to {
        -webkit-transform: scale(0) translate(50%,-50%);
        transform: scale(0) translate(50%,-50%);
        opacity: 0
    }
}

.ant-badge-rtl {
    direction: rtl
}

.ant-badge-rtl .ant-badge-count,.ant-badge-rtl .ant-badge-dot,.ant-badge-rtl .ant-badge .ant-scroll-number-custom-component {
    direction: ltr
}

.ant-badge-rtl .ant-badge-count,.ant-badge-rtl .ant-badge-dot,.ant-badge-rtl.ant-badge .ant-scroll-number-custom-component,.ant-badge-rtl .ant-badge .ant-scroll-number-custom-component {
    right: auto;
    left: 0;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0
}

.ant-badge-rtl .ant-badge-status-text {
    margin-right: 8px;
    margin-left: 0
}

.ant-badge-rtl .ant-badge-zoom-appear,.ant-badge-rtl .ant-badge-zoom-enter {
    -webkit-animation-name: antZoomBadgeInRtl;
    animation-name: antZoomBadgeInRtl
}

.ant-badge-rtl .ant-badge-zoom-leave {
    -webkit-animation-name: antZoomBadgeOutRtl;
    animation-name: antZoomBadgeOutRtl
}

.ant-badge-not-a-wrapper .ant-badge-count {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none
}

@-webkit-keyframes antZoomBadgeInRtl {
    0% {
        -webkit-transform: scale(0) translate(-50%,-50%);
        transform: scale(0) translate(-50%,-50%);
        opacity: 0
    }

    to {
        -webkit-transform: scale(1) translate(-50%,-50%);
        transform: scale(1) translate(-50%,-50%)
    }
}

@keyframes antZoomBadgeInRtl {
    0% {
        -webkit-transform: scale(0) translate(-50%,-50%);
        transform: scale(0) translate(-50%,-50%);
        opacity: 0
    }

    to {
        -webkit-transform: scale(1) translate(-50%,-50%);
        transform: scale(1) translate(-50%,-50%)
    }
}

@-webkit-keyframes antZoomBadgeOutRtl {
    0% {
        -webkit-transform: scale(1) translate(-50%,-50%);
        transform: scale(1) translate(-50%,-50%)
    }

    to {
        -webkit-transform: scale(0) translate(-50%,-50%);
        transform: scale(0) translate(-50%,-50%);
        opacity: 0
    }
}

@keyframes antZoomBadgeOutRtl {
    0% {
        -webkit-transform: scale(1) translate(-50%,-50%);
        transform: scale(1) translate(-50%,-50%)
    }

    to {
        -webkit-transform: scale(0) translate(-50%,-50%);
        transform: scale(0) translate(-50%,-50%);
        opacity: 0
    }
}

.ant-breadcrumb {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    color: rgba(0,0,0,.45);
    font-size: 14px
}

.ant-breadcrumb .anticon {
    font-size: 14px
}

.ant-breadcrumb a {
    color: rgba(0,0,0,.45);
    -webkit-transition: color .3s;
    transition: color .3s
}

.ant-breadcrumb a:hover {
    color: #40a9ff
}

.ant-breadcrumb>span:last-child,.ant-breadcrumb>span:last-child a {
    color: rgba(0,0,0,.65)
}

.ant-breadcrumb>span:last-child .ant-breadcrumb-separator {
    display: none
}

.ant-breadcrumb-separator {
    margin: 0 8px;
    color: rgba(0,0,0,.45)
}

.ant-breadcrumb-link>.anticon+span,.ant-breadcrumb-overlay-link>.anticon {
    margin-left: 4px
}

.ant-breadcrumb-rtl {
    direction: rtl
}

.ant-breadcrumb-rtl:before {
    display: table;
    content: ''
}

.ant-breadcrumb-rtl:after {
    display: table;
    clear: both;
    content: ''
}

.ant-breadcrumb-rtl>span {
    float: right
}

.ant-breadcrumb-rtl .ant-breadcrumb-link>.anticon+span,.ant-breadcrumb-rtl .ant-breadcrumb-overlay-link>.anticon {
    margin-right: 4px;
    margin-left: 0
}

.ant-menu {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    margin-bottom: 0;
    padding-left: 0;
    color: rgba(0,0,0,.65);
    line-height: 0;
    list-style: none;
    background: #fff;
    outline: none;
    box-shadow: 0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);
    -webkit-transition: background .3s,width .2s;
    transition: background .3s,width .2s
}

.ant-menu:after,.ant-menu:before {
    display: table;
    content: ''
}

.ant-menu:after {
    clear: both
}

.ant-menu ol,.ant-menu ul {
    margin: 0;
    padding: 0;
    list-style: none
}

.ant-menu-hidden {
    display: none
}

.ant-menu-item-group-title {
    height: 1.5715;
    padding: 8px 16px;
    color: rgba(0,0,0,.45);
    font-size: 14px;
    line-height: 1.5715;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-menu-submenu,.ant-menu-submenu-inline {
    -webkit-transition: border-color .3s cubic-bezier(.645,.045,.355,1),background .3s cubic-bezier(.645,.045,.355,1),padding .15s cubic-bezier(.645,.045,.355,1);
    transition: border-color .3s cubic-bezier(.645,.045,.355,1),background .3s cubic-bezier(.645,.045,.355,1),padding .15s cubic-bezier(.645,.045,.355,1)
}

.ant-menu-submenu-selected {
    color: #1890ff
}

.ant-menu-item:active,.ant-menu-submenu-title:active {
    background: #e6f7ff
}

.ant-menu-submenu .ant-menu-sub {
    cursor: auto;
    -webkit-transition: background .3s cubic-bezier(.645,.045,.355,1),padding .3s cubic-bezier(.645,.045,.355,1);
    transition: background .3s cubic-bezier(.645,.045,.355,1),padding .3s cubic-bezier(.645,.045,.355,1)
}

.ant-menu-item>a {
    color: rgba(0,0,0,.65)
}

.ant-menu-item>a:only-child {
    display: block
}

.ant-menu-item>a:hover {
    color: #1890ff
}

.ant-menu-item>a:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: transparent;
    content: ''
}

.ant-menu-item>.ant-badge>a {
    color: rgba(0,0,0,.65)
}

.ant-menu-item>.ant-badge>a:hover {
    color: #1890ff
}

.ant-menu-item-divider {
    height: 1px;
    overflow: hidden;
    line-height: 0;
    background-color: #f0f0f0
}

.ant-menu-item-active,.ant-menu-item:hover,.ant-menu-submenu-active,.ant-menu-submenu-title:hover,.ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open {
    color: #1890ff
}

.ant-menu-horizontal .ant-menu-item,.ant-menu-horizontal .ant-menu-submenu {
    margin-top: -1px
}

.ant-menu-horizontal>.ant-menu-item-active,.ant-menu-horizontal>.ant-menu-item:hover,.ant-menu-horizontal>.ant-menu-submenu .ant-menu-submenu-title:hover {
    background-color: transparent
}

.ant-menu-item-selected,.ant-menu-item-selected>a,.ant-menu-item-selected>a:hover {
    color: #1890ff
}

.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #e6f7ff
}

.ant-menu-inline,.ant-menu-vertical,.ant-menu-vertical-left {
    border-right: 1px solid #f0f0f0
}

.ant-menu-vertical-right {
    border-left: 1px solid #f0f0f0
}

.ant-menu-vertical-left.ant-menu-sub,.ant-menu-vertical-right.ant-menu-sub,.ant-menu-vertical.ant-menu-sub {
    min-width: 160px;
    max-height: calc(100vh - 100px);
    padding: 0;
    overflow: hidden;
    border-right: 0;
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0
}

.ant-menu-vertical-left.ant-menu-sub:not(.zoom-big-enter-active):not(.zoom-big-leave-active),.ant-menu-vertical-right.ant-menu-sub:not(.zoom-big-enter-active):not(.zoom-big-leave-active),.ant-menu-vertical.ant-menu-sub:not(.zoom-big-enter-active):not(.zoom-big-leave-active) {
    overflow-x: hidden;
    overflow-y: auto
}

.ant-menu-vertical-left.ant-menu-sub .ant-menu-item,.ant-menu-vertical-right.ant-menu-sub .ant-menu-item,.ant-menu-vertical.ant-menu-sub .ant-menu-item {
    left: 0;
    margin-left: 0;
    border-right: 0
}

.ant-menu-vertical-left.ant-menu-sub .ant-menu-item:after,.ant-menu-vertical-right.ant-menu-sub .ant-menu-item:after,.ant-menu-vertical.ant-menu-sub .ant-menu-item:after {
    border-right: 0
}

.ant-menu-vertical-left.ant-menu-sub>.ant-menu-item,.ant-menu-vertical-left.ant-menu-sub>.ant-menu-submenu,.ant-menu-vertical-right.ant-menu-sub>.ant-menu-item,.ant-menu-vertical-right.ant-menu-sub>.ant-menu-submenu,.ant-menu-vertical.ant-menu-sub>.ant-menu-item,.ant-menu-vertical.ant-menu-sub>.ant-menu-submenu {
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0
}

.ant-menu-horizontal.ant-menu-sub {
    min-width: 114px
}

.ant-menu-item,.ant-menu-submenu-title {
    position: relative;
    display: block;
    margin: 0;
    padding: 0 20px;
    white-space: nowrap;
    cursor: pointer;
    -webkit-transition: color .3s cubic-bezier(.645,.045,.355,1),border-color .3s cubic-bezier(.645,.045,.355,1),background .3s cubic-bezier(.645,.045,.355,1),padding .15s cubic-bezier(.645,.045,.355,1);
    transition: color .3s cubic-bezier(.645,.045,.355,1),border-color .3s cubic-bezier(.645,.045,.355,1),background .3s cubic-bezier(.645,.045,.355,1),padding .15s cubic-bezier(.645,.045,.355,1)
}

.ant-menu-item .anticon,.ant-menu-submenu-title .anticon {
    min-width: 14px;
    margin-right: 10px;
    font-size: 14px;
    -webkit-transition: font-size .15s cubic-bezier(.215,.61,.355,1),margin .3s cubic-bezier(.645,.045,.355,1);
    transition: font-size .15s cubic-bezier(.215,.61,.355,1),margin .3s cubic-bezier(.645,.045,.355,1)
}

.ant-menu-item .anticon+span,.ant-menu-submenu-title .anticon+span {
    opacity: 1;
    -webkit-transition: opacity .3s cubic-bezier(.645,.045,.355,1),width .3s cubic-bezier(.645,.045,.355,1);
    transition: opacity .3s cubic-bezier(.645,.045,.355,1),width .3s cubic-bezier(.645,.045,.355,1)
}

.ant-menu-item.ant-menu-item-only-child>.anticon,.ant-menu-submenu-title.ant-menu-item-only-child>.anticon {
    margin-right: 0
}

.ant-menu>.ant-menu-item-divider {
    height: 1px;
    margin: 1px 0;
    padding: 0;
    overflow: hidden;
    line-height: 0;
    background-color: #f0f0f0
}

.ant-menu-submenu-popup {
    position: absolute;
    z-index: 1050;
    border-radius: 2px;
    box-shadow: none
}

.ant-menu-submenu-popup:before {
    position: absolute;
    top: -7px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .0001;
    content: ' '
}

.ant-menu-submenu-placement-rightTop:before {
    top: 0;
    left: -7px
}

.ant-menu-submenu>.ant-menu {
    background-color: #fff;
    border-radius: 2px
}

.ant-menu-submenu>.ant-menu-submenu-title:after {
    -webkit-transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    transition: transform .3s cubic-bezier(.645,.045,.355,1);
    transition: transform .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1)
}

.ant-menu-submenu-popup>.ant-menu {
    background-color: #fff
}

.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow {
    position: absolute;
    top: 50%;
    right: 16px;
    width: 10px;
    -webkit-transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    transition: transform .3s cubic-bezier(.645,.045,.355,1);
    transition: transform .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1)
}

.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow:after,.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow:before,.ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow:after,.ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow:before,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow:after,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow:before,.ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow:after,.ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow:before {
    position: absolute;
    width: 6px;
    height: 1.5px;
    background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.65)),to(rgba(0,0,0,.65)));
    background-image: -webkit-linear-gradient(left,rgba(0,0,0,.65),rgba(0,0,0,.65));
    background-image: linear-gradient(90deg,rgba(0,0,0,.65),rgba(0,0,0,.65));
    border-radius: 2px;
    -webkit-transition: background .3s cubic-bezier(.645,.045,.355,1),top .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    transition: background .3s cubic-bezier(.645,.045,.355,1),top .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    transition: background .3s cubic-bezier(.645,.045,.355,1),transform .3s cubic-bezier(.645,.045,.355,1),top .3s cubic-bezier(.645,.045,.355,1);
    transition: background .3s cubic-bezier(.645,.045,.355,1),transform .3s cubic-bezier(.645,.045,.355,1),top .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    content: ''
}

.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow:before,.ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow:before,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow:before,.ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow:before {
    -webkit-transform: rotate(45deg) translateY(-2px);
    -ms-transform: rotate(45deg) translateY(-2px);
    transform: rotate(45deg) translateY(-2px)
}

.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow:after,.ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow:after,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow:after,.ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow:after {
    -webkit-transform: rotate(-45deg) translateY(2px);
    -ms-transform: rotate(-45deg) translateY(2px);
    transform: rotate(-45deg) translateY(2px)
}

.ant-menu-submenu-inline>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow:after,.ant-menu-submenu-inline>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow:before,.ant-menu-submenu-vertical-left>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow:after,.ant-menu-submenu-vertical-left>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow:before,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow:after,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow:before,.ant-menu-submenu-vertical>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow:after,.ant-menu-submenu-vertical>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow:before {
    background: -webkit-gradient(linear,left top,right top,from(#1890ff),to(#1890ff));
    background: -webkit-linear-gradient(left,#1890ff,#1890ff);
    background: linear-gradient(90deg,#1890ff,#1890ff)
}

.ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow:before,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow:before,.ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow:before {
    -webkit-transform: rotate(45deg) translateY(-2px);
    -ms-transform: rotate(45deg) translateY(-2px);
    transform: rotate(45deg) translateY(-2px)
}

.ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow:after,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow:after,.ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow:after {
    -webkit-transform: rotate(-45deg) translateY(2px);
    -ms-transform: rotate(-45deg) translateY(2px);
    transform: rotate(-45deg) translateY(2px)
}

.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow:before {
    -webkit-transform: rotate(-45deg) translateX(2px);
    -ms-transform: rotate(-45deg) translateX(2px);
    transform: rotate(-45deg) translateX(2px)
}

.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow:after {
    -webkit-transform: rotate(45deg) translateX(-2px);
    -ms-transform: rotate(45deg) translateX(-2px);
    transform: rotate(45deg) translateX(-2px)
}

.ant-menu-submenu-open.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow {
    -webkit-transform: translateY(-2px);
    -ms-transform: translateY(-2px);
    transform: translateY(-2px)
}

.ant-menu-submenu-open.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow:after {
    -webkit-transform: rotate(-45deg) translateX(-2px);
    -ms-transform: rotate(-45deg) translateX(-2px);
    transform: rotate(-45deg) translateX(-2px)
}

.ant-menu-submenu-open.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow:before {
    -webkit-transform: rotate(45deg) translateX(2px);
    -ms-transform: rotate(45deg) translateX(2px);
    transform: rotate(45deg) translateX(2px)
}

.ant-menu-vertical-left .ant-menu-submenu-selected,.ant-menu-vertical-left .ant-menu-submenu-selected>a,.ant-menu-vertical-right .ant-menu-submenu-selected,.ant-menu-vertical-right .ant-menu-submenu-selected>a,.ant-menu-vertical .ant-menu-submenu-selected,.ant-menu-vertical .ant-menu-submenu-selected>a {
    color: #1890ff
}

.ant-menu-horizontal {
    line-height: 46px;
    white-space: nowrap;
    border: 0;
    border-bottom: 1px solid #f0f0f0;
    box-shadow: none
}

.ant-menu-horizontal>.ant-menu-item,.ant-menu-horizontal>.ant-menu-submenu {
    position: relative;
    top: 1px;
    display: inline-block;
    vertical-align: bottom;
    border-bottom: 2px solid transparent
}

.ant-menu-horizontal>.ant-menu-item-active,.ant-menu-horizontal>.ant-menu-item-open,.ant-menu-horizontal>.ant-menu-item-selected,.ant-menu-horizontal>.ant-menu-item:hover,.ant-menu-horizontal>.ant-menu-submenu-active,.ant-menu-horizontal>.ant-menu-submenu-open,.ant-menu-horizontal>.ant-menu-submenu-selected,.ant-menu-horizontal>.ant-menu-submenu:hover {
    color: #1890ff;
    border-bottom: 2px solid #1890ff
}

.ant-menu-horizontal>.ant-menu-item>a {
    color: rgba(0,0,0,.65)
}

.ant-menu-horizontal>.ant-menu-item>a:only-child {
    display: block
}

.ant-menu-horizontal>.ant-menu-item>a:hover {
    color: #1890ff
}

.ant-menu-horizontal>.ant-menu-item>a:before {
    bottom: -2px
}

.ant-menu-horizontal>.ant-menu-item-selected>a {
    color: #1890ff
}

.ant-menu-horizontal:after {
    display: block;
    clear: both;
    height: 0;
    content: ' '
}

.ant-menu-inline .ant-menu-item,.ant-menu-vertical-left .ant-menu-item,.ant-menu-vertical-right .ant-menu-item,.ant-menu-vertical .ant-menu-item {
    position: relative
}

.ant-menu-inline .ant-menu-item:after,.ant-menu-vertical-left .ant-menu-item:after,.ant-menu-vertical-right .ant-menu-item:after,.ant-menu-vertical .ant-menu-item:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    border-right: 3px solid #1890ff;
    -webkit-transform: scaleY(.0001);
    -ms-transform: scaleY(.0001);
    transform: scaleY(.0001);
    opacity: 0;
    -webkit-transition: opacity .15s cubic-bezier(.215,.61,.355,1),-webkit-transform .15s cubic-bezier(.215,.61,.355,1);
    transition: opacity .15s cubic-bezier(.215,.61,.355,1),-webkit-transform .15s cubic-bezier(.215,.61,.355,1);
    transition: transform .15s cubic-bezier(.215,.61,.355,1),opacity .15s cubic-bezier(.215,.61,.355,1);
    transition: transform .15s cubic-bezier(.215,.61,.355,1),opacity .15s cubic-bezier(.215,.61,.355,1),-webkit-transform .15s cubic-bezier(.215,.61,.355,1);
    content: ''
}

.ant-menu-inline .ant-menu-item,.ant-menu-inline .ant-menu-submenu-title,.ant-menu-vertical-left .ant-menu-item,.ant-menu-vertical-left .ant-menu-submenu-title,.ant-menu-vertical-right .ant-menu-item,.ant-menu-vertical-right .ant-menu-submenu-title,.ant-menu-vertical .ant-menu-item,.ant-menu-vertical .ant-menu-submenu-title {
    height: 40px;
    margin-top: 4px;
    margin-bottom: 4px;
    padding: 0 16px;
    overflow: hidden;
    font-size: 14px;
    line-height: 40px;
    text-overflow: ellipsis
}

.ant-menu-inline .ant-menu-submenu,.ant-menu-vertical-left .ant-menu-submenu,.ant-menu-vertical-right .ant-menu-submenu,.ant-menu-vertical .ant-menu-submenu {
    padding-bottom: .02px
}

.ant-menu-inline .ant-menu-item:not(:last-child),.ant-menu-vertical-left .ant-menu-item:not(:last-child),.ant-menu-vertical-right .ant-menu-item:not(:last-child),.ant-menu-vertical .ant-menu-item:not(:last-child) {
    margin-bottom: 8px
}

.ant-menu-inline>.ant-menu-item,.ant-menu-inline>.ant-menu-submenu>.ant-menu-submenu-title,.ant-menu-vertical-left>.ant-menu-item,.ant-menu-vertical-left>.ant-menu-submenu>.ant-menu-submenu-title,.ant-menu-vertical-right>.ant-menu-item,.ant-menu-vertical-right>.ant-menu-submenu>.ant-menu-submenu-title,.ant-menu-vertical>.ant-menu-item,.ant-menu-vertical>.ant-menu-submenu>.ant-menu-submenu-title {
    height: 40px;
    line-height: 40px
}

.ant-menu-vertical .ant-menu-submenu-title {
    padding-right: 34px
}

.ant-menu-inline {
    width: 100%
}

.ant-menu-inline .ant-menu-item-selected:after,.ant-menu-inline .ant-menu-selected:after {
    -webkit-transform: scaleY(1);
    -ms-transform: scaleY(1);
    transform: scaleY(1);
    opacity: 1;
    -webkit-transition: opacity .15s cubic-bezier(.645,.045,.355,1),-webkit-transform .15s cubic-bezier(.645,.045,.355,1);
    transition: opacity .15s cubic-bezier(.645,.045,.355,1),-webkit-transform .15s cubic-bezier(.645,.045,.355,1);
    transition: transform .15s cubic-bezier(.645,.045,.355,1),opacity .15s cubic-bezier(.645,.045,.355,1);
    transition: transform .15s cubic-bezier(.645,.045,.355,1),opacity .15s cubic-bezier(.645,.045,.355,1),-webkit-transform .15s cubic-bezier(.645,.045,.355,1)
}

.ant-menu-inline .ant-menu-item,.ant-menu-inline .ant-menu-submenu-title {
    width: calc(100% + 1px)
}

.ant-menu-inline .ant-menu-submenu-title {
    padding-right: 34px
}

.ant-menu-inline-collapsed {
    width: 80px
}

.ant-menu-inline-collapsed>.ant-menu-item,.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-item,.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-submenu>.ant-menu-submenu-title,.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title {
    left: 0;
    padding: 0 32px;
    text-overflow: clip
}

.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-item .ant-menu-submenu-arrow,.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-submenu>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-inline-collapsed>.ant-menu-item .ant-menu-submenu-arrow,.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title .ant-menu-submenu-arrow {
    display: none
}

.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-item .anticon,.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-submenu>.ant-menu-submenu-title .anticon,.ant-menu-inline-collapsed>.ant-menu-item .anticon,.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title .anticon {
    margin: 0;
    font-size: 16px;
    line-height: 40px
}

.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-item .anticon+span,.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-submenu>.ant-menu-submenu-title .anticon+span,.ant-menu-inline-collapsed>.ant-menu-item .anticon+span,.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title .anticon+span {
    display: inline-block;
    max-width: 0;
    opacity: 0
}

.ant-menu-inline-collapsed .anticon {
    display: inline-block
}

.ant-menu-inline-collapsed-tooltip {
    pointer-events: none
}

.ant-menu-inline-collapsed-tooltip .anticon {
    display: none
}

.ant-menu-inline-collapsed-tooltip a {
    color: hsla(0,0%,100%,.85)
}

.ant-menu-inline-collapsed .ant-menu-item-group-title {
    padding-right: 4px;
    padding-left: 4px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.ant-menu-item-group-list {
    margin: 0;
    padding: 0
}

.ant-menu-item-group-list .ant-menu-item,.ant-menu-item-group-list .ant-menu-submenu-title {
    padding: 0 16px 0 28px
}

.ant-menu-root.ant-menu-inline,.ant-menu-root.ant-menu-vertical,.ant-menu-root.ant-menu-vertical-left,.ant-menu-root.ant-menu-vertical-right {
    box-shadow: none
}

.ant-menu-sub.ant-menu-inline {
    padding: 0;
    border: 0;
    border-radius: 0;
    box-shadow: none
}

.ant-menu-sub.ant-menu-inline>.ant-menu-item,.ant-menu-sub.ant-menu-inline>.ant-menu-submenu>.ant-menu-submenu-title {
    height: 40px;
    line-height: 40px;
    list-style-position: inside;
    list-style-type: disc
}

.ant-menu-sub.ant-menu-inline .ant-menu-item-group-title {
    padding-left: 32px
}

.ant-menu-item-disabled,.ant-menu-submenu-disabled {
    color: rgba(0,0,0,.25)!important;
    background: none;
    border-color: transparent!important;
    cursor: not-allowed
}

.ant-menu-item-disabled>a,.ant-menu-submenu-disabled>a {
    color: rgba(0,0,0,.25)!important;
    pointer-events: none
}

.ant-menu-item-disabled>.ant-menu-submenu-title,.ant-menu-submenu-disabled>.ant-menu-submenu-title {
    color: rgba(0,0,0,.25)!important;
    cursor: not-allowed
}

.ant-menu-item-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow:after,.ant-menu-item-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow:before,.ant-menu-submenu-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow:after,.ant-menu-submenu-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow:before {
    background: rgba(0,0,0,.25)!important
}

.ant-layout-header .ant-menu {
    line-height: inherit
}

.ant-menu-dark .ant-menu-sub,.ant-menu.ant-menu-dark {
    color: hsla(0,0%,100%,.65);
    background: #001529
}

.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu.ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow {
    opacity: .45;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow:after,.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow:before,.ant-menu.ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow:after,.ant-menu.ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow:before {
    background: #fff
}

.ant-menu-dark.ant-menu-submenu-popup {
    background: transparent
}

.ant-menu-dark .ant-menu-inline.ant-menu-sub {
    background: #000c17
}

.ant-menu-dark.ant-menu-horizontal {
    border-bottom: 0
}

.ant-menu-dark.ant-menu-horizontal>.ant-menu-item,.ant-menu-dark.ant-menu-horizontal>.ant-menu-submenu {
    top: 0;
    margin-top: 0;
    border-color: #001529;
    border-bottom: 0
}

.ant-menu-dark.ant-menu-horizontal>.ant-menu-item>a:before {
    bottom: 0
}

.ant-menu-dark .ant-menu-item,.ant-menu-dark .ant-menu-item-group-title,.ant-menu-dark .ant-menu-item>a {
    color: hsla(0,0%,100%,.65)
}

.ant-menu-dark.ant-menu-inline,.ant-menu-dark.ant-menu-vertical,.ant-menu-dark.ant-menu-vertical-left,.ant-menu-dark.ant-menu-vertical-right {
    border-right: 0
}

.ant-menu-dark.ant-menu-inline .ant-menu-item,.ant-menu-dark.ant-menu-vertical-left .ant-menu-item,.ant-menu-dark.ant-menu-vertical-right .ant-menu-item,.ant-menu-dark.ant-menu-vertical .ant-menu-item {
    left: 0;
    margin-left: 0;
    border-right: 0
}

.ant-menu-dark.ant-menu-inline .ant-menu-item:after,.ant-menu-dark.ant-menu-vertical-left .ant-menu-item:after,.ant-menu-dark.ant-menu-vertical-right .ant-menu-item:after,.ant-menu-dark.ant-menu-vertical .ant-menu-item:after {
    border-right: 0
}

.ant-menu-dark.ant-menu-inline .ant-menu-item,.ant-menu-dark.ant-menu-inline .ant-menu-submenu-title {
    width: 100%
}

.ant-menu-dark .ant-menu-item-active,.ant-menu-dark .ant-menu-item:hover,.ant-menu-dark .ant-menu-submenu-active,.ant-menu-dark .ant-menu-submenu-open,.ant-menu-dark .ant-menu-submenu-selected,.ant-menu-dark .ant-menu-submenu-title:hover {
    color: #fff;
    background-color: transparent
}

.ant-menu-dark .ant-menu-item-active>a,.ant-menu-dark .ant-menu-item:hover>a,.ant-menu-dark .ant-menu-submenu-active>a,.ant-menu-dark .ant-menu-submenu-open>a,.ant-menu-dark .ant-menu-submenu-selected>a,.ant-menu-dark .ant-menu-submenu-title:hover>a {
    color: #fff
}

.ant-menu-dark .ant-menu-item-active>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-item-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-item:hover>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-item:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-active>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-open>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-open>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-selected>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-selected>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-title:hover>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-title:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow {
    opacity: 1
}

.ant-menu-dark .ant-menu-item-active>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow:after,.ant-menu-dark .ant-menu-item-active>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow:before,.ant-menu-dark .ant-menu-item-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow:after,.ant-menu-dark .ant-menu-item-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow:before,.ant-menu-dark .ant-menu-item:hover>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow:after,.ant-menu-dark .ant-menu-item:hover>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow:before,.ant-menu-dark .ant-menu-item:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow:after,.ant-menu-dark .ant-menu-item:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow:before,.ant-menu-dark .ant-menu-submenu-active>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow:after,.ant-menu-dark .ant-menu-submenu-active>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow:before,.ant-menu-dark .ant-menu-submenu-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow:after,.ant-menu-dark .ant-menu-submenu-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow:before,.ant-menu-dark .ant-menu-submenu-open>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow:after,.ant-menu-dark .ant-menu-submenu-open>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow:before,.ant-menu-dark .ant-menu-submenu-open>.ant-menu-submenu-title>.ant-menu-submenu-arrow:after,.ant-menu-dark .ant-menu-submenu-open>.ant-menu-submenu-title>.ant-menu-submenu-arrow:before,.ant-menu-dark .ant-menu-submenu-selected>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow:after,.ant-menu-dark .ant-menu-submenu-selected>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow:before,.ant-menu-dark .ant-menu-submenu-selected>.ant-menu-submenu-title>.ant-menu-submenu-arrow:after,.ant-menu-dark .ant-menu-submenu-selected>.ant-menu-submenu-title>.ant-menu-submenu-arrow:before,.ant-menu-dark .ant-menu-submenu-title:hover>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow:after,.ant-menu-dark .ant-menu-submenu-title:hover>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow:before,.ant-menu-dark .ant-menu-submenu-title:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow:after,.ant-menu-dark .ant-menu-submenu-title:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow:before {
    background: #fff
}

.ant-menu-dark .ant-menu-item:hover {
    background-color: transparent
}

.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #1890ff
}

.ant-menu-dark .ant-menu-item-selected {
    color: #fff;
    border-right: 0
}

.ant-menu-dark .ant-menu-item-selected:after {
    border-right: 0
}

.ant-menu-dark .ant-menu-item-selected .anticon,.ant-menu-dark .ant-menu-item-selected .anticon+span,.ant-menu-dark .ant-menu-item-selected>a,.ant-menu-dark .ant-menu-item-selected>a:hover {
    color: #fff
}

.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected,.ant-menu.ant-menu-dark .ant-menu-item-selected {
    background-color: #1890ff
}

.ant-menu-dark .ant-menu-item-disabled,.ant-menu-dark .ant-menu-item-disabled>a,.ant-menu-dark .ant-menu-submenu-disabled,.ant-menu-dark .ant-menu-submenu-disabled>a {
    color: hsla(0,0%,100%,.35)!important;
    opacity: .8
}

.ant-menu-dark .ant-menu-item-disabled>.ant-menu-submenu-title,.ant-menu-dark .ant-menu-submenu-disabled>.ant-menu-submenu-title {
    color: hsla(0,0%,100%,.35)!important
}

.ant-menu-dark .ant-menu-item-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow:after,.ant-menu-dark .ant-menu-item-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow:before,.ant-menu-dark .ant-menu-submenu-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow:after,.ant-menu-dark .ant-menu-submenu-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow:before {
    background: hsla(0,0%,100%,.35)!important
}

.ant-menu-rtl {
    direction: rtl
}

.ant-menu-rtl .ant-menu-item-group-title {
    text-align: right
}

.ant-menu-rtl.ant-menu-inline,.ant-menu-rtl.ant-menu-vertical {
    border-right: none;
    border-left: 1px solid #f0f0f0
}

.ant-menu-rtl.ant-menu-dark .ant-menu-inline,.ant-menu-rtl.ant-menu-dark .ant-menu-vertical {
    border-left: none
}

.ant-menu-rtl.ant-menu-vertical-left.ant-menu-sub,.ant-menu-rtl.ant-menu-vertical-left.ant-menu-sub>.ant-menu-item,.ant-menu-rtl.ant-menu-vertical-left.ant-menu-sub>.ant-menu-submenu,.ant-menu-rtl.ant-menu-vertical-right.ant-menu-sub,.ant-menu-rtl.ant-menu-vertical-right.ant-menu-sub>.ant-menu-item,.ant-menu-rtl.ant-menu-vertical-right.ant-menu-sub>.ant-menu-submenu,.ant-menu-rtl.ant-menu-vertical.ant-menu-sub,.ant-menu-rtl.ant-menu-vertical.ant-menu-sub>.ant-menu-item,.ant-menu-rtl.ant-menu-vertical.ant-menu-sub>.ant-menu-submenu {
    -webkit-transform-origin: top right;
    -ms-transform-origin: top right;
    transform-origin: top right
}

.ant-menu-rtl .ant-menu-item .anticon,.ant-menu-rtl .ant-menu-submenu-title .anticon {
    margin-right: auto;
    margin-left: 10px
}

.ant-menu-rtl .ant-menu-item.ant-menu-item-only-child>.anticon,.ant-menu-rtl .ant-menu-submenu-title.ant-menu-item-only-child>.anticon {
    margin-left: 0
}

.ant-menu-rtl .ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-rtl .ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-rtl .ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-rtl .ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow {
    right: auto;
    left: 16px
}

.ant-menu-rtl .ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow:before,.ant-menu-rtl .ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow:before,.ant-menu-rtl .ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow:before {
    -webkit-transform: rotate(-45deg) translateY(-2px);
    -ms-transform: rotate(-45deg) translateY(-2px);
    transform: rotate(-45deg) translateY(-2px)
}

.ant-menu-rtl .ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow:after,.ant-menu-rtl .ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow:after,.ant-menu-rtl .ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow:after {
    -webkit-transform: rotate(45deg) translateY(2px);
    -ms-transform: rotate(45deg) translateY(2px);
    transform: rotate(45deg) translateY(2px)
}

.ant-menu-rtl.ant-menu-inline .ant-menu-item:after,.ant-menu-rtl.ant-menu-vertical-left .ant-menu-item:after,.ant-menu-rtl.ant-menu-vertical-right .ant-menu-item:after,.ant-menu-rtl.ant-menu-vertical .ant-menu-item:after {
    right: auto;
    left: 0
}

.ant-menu-rtl.ant-menu-inline .ant-menu-item,.ant-menu-rtl.ant-menu-inline .ant-menu-submenu-title,.ant-menu-rtl.ant-menu-vertical-left .ant-menu-item,.ant-menu-rtl.ant-menu-vertical-left .ant-menu-submenu-title,.ant-menu-rtl.ant-menu-vertical-right .ant-menu-item,.ant-menu-rtl.ant-menu-vertical-right .ant-menu-submenu-title,.ant-menu-rtl.ant-menu-vertical .ant-menu-item,.ant-menu-rtl.ant-menu-vertical .ant-menu-submenu-title {
    text-align: right
}

.ant-menu-rtl.ant-menu-inline .ant-menu-submenu-title {
    padding-right: 0;
    padding-left: 34px
}

.ant-menu-rtl.ant-menu-vertical .ant-menu-submenu-title {
    padding-right: 16px;
    padding-left: 34px
}

.ant-menu-rtl.ant-menu-inline-collapsed.ant-menu-vertical .ant-menu-submenu-title {
    padding: 0 32px
}

.ant-menu-rtl .ant-menu-item-group-list .ant-menu-item,.ant-menu-rtl .ant-menu-item-group-list .ant-menu-submenu-title {
    padding: 0 28px 0 16px
}

.ant-menu-rtl.ant-menu-sub.ant-menu-inline .ant-menu-item-group-title {
    padding-right: 32px;
    padding-left: 0
}

.ant-tooltip {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: absolute;
    z-index: 1060;
    display: block;
    max-width: 250px;
    visibility: visible
}

.ant-tooltip-hidden {
    display: none
}

.ant-tooltip-placement-top,.ant-tooltip-placement-topLeft,.ant-tooltip-placement-topRight {
    padding-bottom: 8px
}

.ant-tooltip-placement-right,.ant-tooltip-placement-rightBottom,.ant-tooltip-placement-rightTop {
    padding-left: 8px
}

.ant-tooltip-placement-bottom,.ant-tooltip-placement-bottomLeft,.ant-tooltip-placement-bottomRight {
    padding-top: 8px
}

.ant-tooltip-placement-left,.ant-tooltip-placement-leftBottom,.ant-tooltip-placement-leftTop {
    padding-right: 8px
}

.ant-tooltip-inner {
    min-width: 30px;
    min-height: 32px;
    padding: 6px 8px;
    color: #fff;
    text-align: left;
    text-decoration: none;
    word-wrap: break-word;
    background-color: rgba(0,0,0,.75);
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)
}

.ant-tooltip-arrow {
    position: absolute;
    display: block;
    width: 13.07106781px;
    height: 13.07106781px;
    overflow: hidden;
    background: transparent;
    pointer-events: none
}

.ant-tooltip-arrow:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 5px;
    height: 5px;
    margin: auto;
    background-color: rgba(0,0,0,.75);
    content: '';
    pointer-events: auto
}

.ant-tooltip-placement-top .ant-tooltip-arrow,.ant-tooltip-placement-topLeft .ant-tooltip-arrow,.ant-tooltip-placement-topRight .ant-tooltip-arrow {
    bottom: -5.07106781px
}

.ant-tooltip-placement-top .ant-tooltip-arrow:before,.ant-tooltip-placement-topLeft .ant-tooltip-arrow:before,.ant-tooltip-placement-topRight .ant-tooltip-arrow:before {
    box-shadow: 3px 3px 7px rgba(0,0,0,.07);
    -webkit-transform: translateY(-6.53553391px) rotate(45deg);
    -ms-transform: translateY(-6.53553391px) rotate(45deg);
    transform: translateY(-6.53553391px) rotate(45deg)
}

.ant-tooltip-placement-top .ant-tooltip-arrow {
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%)
}

.ant-tooltip-placement-topLeft .ant-tooltip-arrow {
    left: 13px
}

.ant-tooltip-placement-topRight .ant-tooltip-arrow {
    right: 13px
}

.ant-tooltip-placement-right .ant-tooltip-arrow,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow,.ant-tooltip-placement-rightTop .ant-tooltip-arrow {
    left: -5.07106781px
}

.ant-tooltip-placement-right .ant-tooltip-arrow:before,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow:before,.ant-tooltip-placement-rightTop .ant-tooltip-arrow:before {
    box-shadow: -3px 3px 7px rgba(0,0,0,.07);
    -webkit-transform: translateX(6.53553391px) rotate(45deg);
    -ms-transform: translateX(6.53553391px) rotate(45deg);
    transform: translateX(6.53553391px) rotate(45deg)
}

.ant-tooltip-placement-right .ant-tooltip-arrow {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

.ant-tooltip-placement-rightTop .ant-tooltip-arrow {
    top: 5px
}

.ant-tooltip-placement-rightBottom .ant-tooltip-arrow {
    bottom: 5px
}

.ant-tooltip-placement-left .ant-tooltip-arrow,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow,.ant-tooltip-placement-leftTop .ant-tooltip-arrow {
    right: -5.07106781px
}

.ant-tooltip-placement-left .ant-tooltip-arrow:before,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow:before,.ant-tooltip-placement-leftTop .ant-tooltip-arrow:before {
    box-shadow: 3px -3px 7px rgba(0,0,0,.07);
    -webkit-transform: translateX(-6.53553391px) rotate(45deg);
    -ms-transform: translateX(-6.53553391px) rotate(45deg);
    transform: translateX(-6.53553391px) rotate(45deg)
}

.ant-tooltip-placement-left .ant-tooltip-arrow {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

.ant-tooltip-placement-leftTop .ant-tooltip-arrow {
    top: 5px
}

.ant-tooltip-placement-leftBottom .ant-tooltip-arrow {
    bottom: 5px
}

.ant-tooltip-placement-bottom .ant-tooltip-arrow,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow {
    top: -5.07106781px
}

.ant-tooltip-placement-bottom .ant-tooltip-arrow:before,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow:before,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow:before {
    box-shadow: -3px -3px 7px rgba(0,0,0,.07);
    -webkit-transform: translateY(6.53553391px) rotate(45deg);
    -ms-transform: translateY(6.53553391px) rotate(45deg);
    transform: translateY(6.53553391px) rotate(45deg)
}

.ant-tooltip-placement-bottom .ant-tooltip-arrow {
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%)
}

.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow {
    left: 13px
}

.ant-tooltip-placement-bottomRight .ant-tooltip-arrow {
    right: 13px
}

.ant-tooltip-rtl {
    direction: rtl
}

.ant-tooltip-rtl .ant-tooltip-inner {
    text-align: right
}

.ant-dropdown {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: absolute;
    top: -9999px;
    left: -9999px;
    z-index: 1050;
    display: block
}

.ant-dropdown:before {
    position: absolute;
    top: -7px;
    right: 0;
    bottom: -7px;
    left: -7px;
    z-index: -9999;
    opacity: .0001;
    content: ' '
}

.ant-dropdown-wrap {
    position: relative
}

.ant-dropdown-wrap .ant-btn>.anticon-down {
    display: inline-block;
    font-size: 10px
}

.ant-dropdown-wrap .anticon-down:before {
    -webkit-transition: -webkit-transform .2s;
    transition: -webkit-transform .2s;
    transition: transform .2s;
    transition: transform .2s,-webkit-transform .2s
}

.ant-dropdown-wrap-open .anticon-down:before {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg)
}

.ant-dropdown-hidden,.ant-dropdown-menu-hidden {
    display: none
}

.ant-dropdown-menu {
    position: relative;
    margin: 0;
    padding: 4px 0;
    text-align: left;
    list-style-type: none;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 2px;
    outline: none;
    box-shadow: 0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);
    -webkit-transform: translateZ(0)
}

.ant-dropdown-menu-item-group-title {
    padding: 5px 12px;
    color: rgba(0,0,0,.45);
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-dropdown-menu-submenu-popup {
    position: absolute;
    z-index: 1050;
    background: transparent;
    box-shadow: none
}

.ant-dropdown-menu-submenu-popup>.ant-dropdown-menu {
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0
}

.ant-dropdown-menu-submenu-popup li,.ant-dropdown-menu-submenu-popup ul {
    list-style: none
}

.ant-dropdown-menu-submenu-popup ul {
    margin-right: .3em;
    margin-left: .3em
}

.ant-dropdown-menu-item,.ant-dropdown-menu-submenu-title {
    clear: both;
    margin: 0;
    padding: 5px 12px;
    color: rgba(0,0,0,.65);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    white-space: nowrap;
    cursor: pointer;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-dropdown-menu-item>.anticon:first-child,.ant-dropdown-menu-item>span>.anticon:first-child,.ant-dropdown-menu-submenu-title>.anticon:first-child,.ant-dropdown-menu-submenu-title>span>.anticon:first-child {
    min-width: 12px;
    margin-right: 8px;
    font-size: 12px
}

.ant-dropdown-menu-item>a,.ant-dropdown-menu-submenu-title>a {
    display: block;
    margin: -5px -12px;
    padding: 5px 12px;
    color: rgba(0,0,0,.65);
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-dropdown-menu-item>a:hover,.ant-dropdown-menu-submenu-title>a:hover {
    color: rgba(0,0,0,.65)
}

.ant-dropdown-menu-item-selected,.ant-dropdown-menu-item-selected>a,.ant-dropdown-menu-submenu-title-selected,.ant-dropdown-menu-submenu-title-selected>a {
    color: #1890ff;
    background-color: #e6f7ff
}

.ant-dropdown-menu-item:hover,.ant-dropdown-menu-submenu-title:hover {
    background-color: #f5f5f5
}

.ant-dropdown-menu-item-disabled,.ant-dropdown-menu-submenu-title-disabled {
    color: rgba(0,0,0,.25);
    cursor: not-allowed
}

.ant-dropdown-menu-item-disabled:hover,.ant-dropdown-menu-submenu-title-disabled:hover {
    color: rgba(0,0,0,.25);
    background-color: #fff;
    cursor: not-allowed
}

.ant-dropdown-menu-item-divider,.ant-dropdown-menu-submenu-title-divider {
    height: 1px;
    margin: 4px 0;
    overflow: hidden;
    line-height: 0;
    background-color: #f0f0f0
}

.ant-dropdown-menu-item .ant-dropdown-menu-submenu-arrow,.ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow {
    position: absolute;
    right: 8px
}

.ant-dropdown-menu-item .ant-dropdown-menu-submenu-arrow-icon,.ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow-icon {
    margin-right: 0!important;
    color: rgba(0,0,0,.45);
    font-style: normal;
    display: inline-block;
    font-size: 10px
}

.ant-dropdown-menu-item-group-list {
    margin: 0 8px;
    padding: 0;
    list-style: none
}

.ant-dropdown-menu-submenu-title {
    padding-right: 24px
}

.ant-dropdown-menu-submenu-vertical {
    position: relative
}

.ant-dropdown-menu-submenu-vertical>.ant-dropdown-menu {
    position: absolute;
    top: 0;
    left: 100%;
    min-width: 100%;
    margin-left: 4px;
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0
}

.ant-dropdown-menu-submenu.ant-dropdown-menu-submenu-disabled .ant-dropdown-menu-submenu-title,.ant-dropdown-menu-submenu.ant-dropdown-menu-submenu-disabled .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow-icon {
    color: rgba(0,0,0,.25);
    background-color: #fff;
    cursor: not-allowed
}

.ant-dropdown-menu-submenu-selected .ant-dropdown-menu-submenu-title {
    color: #1890ff
}

.ant-dropdown.slide-down-appear.slide-down-appear-active.ant-dropdown-placement-bottomCenter,.ant-dropdown.slide-down-appear.slide-down-appear-active.ant-dropdown-placement-bottomLeft,.ant-dropdown.slide-down-appear.slide-down-appear-active.ant-dropdown-placement-bottomRight,.ant-dropdown.slide-down-enter.slide-down-enter-active.ant-dropdown-placement-bottomCenter,.ant-dropdown.slide-down-enter.slide-down-enter-active.ant-dropdown-placement-bottomLeft,.ant-dropdown.slide-down-enter.slide-down-enter-active.ant-dropdown-placement-bottomRight {
    -webkit-animation-name: antSlideUpIn;
    animation-name: antSlideUpIn
}

.ant-dropdown.slide-up-appear.slide-up-appear-active.ant-dropdown-placement-topCenter,.ant-dropdown.slide-up-appear.slide-up-appear-active.ant-dropdown-placement-topLeft,.ant-dropdown.slide-up-appear.slide-up-appear-active.ant-dropdown-placement-topRight,.ant-dropdown.slide-up-enter.slide-up-enter-active.ant-dropdown-placement-topCenter,.ant-dropdown.slide-up-enter.slide-up-enter-active.ant-dropdown-placement-topLeft,.ant-dropdown.slide-up-enter.slide-up-enter-active.ant-dropdown-placement-topRight {
    -webkit-animation-name: antSlideDownIn;
    animation-name: antSlideDownIn
}

.ant-dropdown.slide-down-leave.slide-down-leave-active.ant-dropdown-placement-bottomCenter,.ant-dropdown.slide-down-leave.slide-down-leave-active.ant-dropdown-placement-bottomLeft,.ant-dropdown.slide-down-leave.slide-down-leave-active.ant-dropdown-placement-bottomRight {
    -webkit-animation-name: antSlideUpOut;
    animation-name: antSlideUpOut
}

.ant-dropdown.slide-up-leave.slide-up-leave-active.ant-dropdown-placement-topCenter,.ant-dropdown.slide-up-leave.slide-up-leave-active.ant-dropdown-placement-topLeft,.ant-dropdown.slide-up-leave.slide-up-leave-active.ant-dropdown-placement-topRight {
    -webkit-animation-name: antSlideDownOut;
    animation-name: antSlideDownOut
}

.ant-dropdown-link>.anticon.anticon-down,.ant-dropdown-trigger>.anticon.anticon-down {
    display: inline-block;
    font-size: 10px
}

.ant-dropdown-button {
    white-space: nowrap
}

.ant-dropdown-button.ant-btn-group>.ant-btn:last-child:not(:first-child) {
    padding-right: 8px;
    padding-left: 8px
}

.ant-dropdown-button .anticon.anticon-down {
    display: inline-block;
    font-size: 10px
}

.ant-dropdown-menu-dark,.ant-dropdown-menu-dark .ant-dropdown-menu {
    background: #001529
}

.ant-dropdown-menu-dark .ant-dropdown-menu-item,.ant-dropdown-menu-dark .ant-dropdown-menu-item .ant-dropdown-menu-submenu-arrow:after,.ant-dropdown-menu-dark .ant-dropdown-menu-item>a,.ant-dropdown-menu-dark .ant-dropdown-menu-item>a .ant-dropdown-menu-submenu-arrow:after,.ant-dropdown-menu-dark .ant-dropdown-menu-submenu-title,.ant-dropdown-menu-dark .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow:after {
    color: hsla(0,0%,100%,.65)
}

.ant-dropdown-menu-dark .ant-dropdown-menu-item:hover,.ant-dropdown-menu-dark .ant-dropdown-menu-item>a:hover,.ant-dropdown-menu-dark .ant-dropdown-menu-submenu-title:hover {
    color: #fff;
    background: transparent
}

.ant-dropdown-menu-dark .ant-dropdown-menu-item-selected,.ant-dropdown-menu-dark .ant-dropdown-menu-item-selected:hover,.ant-dropdown-menu-dark .ant-dropdown-menu-item-selected>a {
    color: #fff;
    background: #1890ff
}

.ant-dropdown-rtl {
    direction: rtl
}

.ant-dropdown-rtl.ant-dropdown:before {
    right: -7px;
    left: 0
}

.ant-dropdown-rtl .ant-dropdown-menu-item-group-title {
    direction: rtl;
    text-align: right
}

.ant-dropdown-rtl .ant-dropdown-menu-item,.ant-dropdown-rtl .ant-dropdown-menu-submenu-popup li,.ant-dropdown-rtl .ant-dropdown-menu-submenu-popup ul,.ant-dropdown-rtl .ant-dropdown-menu-submenu-title {
    text-align: right
}

.ant-dropdown-rtl .ant-dropdown-menu-item>.anticon:first-child,.ant-dropdown-rtl .ant-dropdown-menu-item>span>.anticon:first-child,.ant-dropdown-rtl .ant-dropdown-menu-submenu-title>.anticon:first-child,.ant-dropdown-rtl .ant-dropdown-menu-submenu-title>span>.anticon:first-child {
    margin-right: 0;
    margin-left: 8px
}

.ant-dropdown-rtl .ant-dropdown-menu-item .ant-dropdown-menu-submenu-arrow,.ant-dropdown-rtl .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow {
    right: auto;
    left: 8px
}

.ant-dropdown-rtl .ant-dropdown-menu-item .ant-dropdown-menu-submenu-arrow-icon,.ant-dropdown-rtl .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow-icon {
    margin-left: 0!important;
    -webkit-transform: scaleX(-1);
    -ms-transform: scaleX(-1);
    transform: scaleX(-1)
}

.ant-dropdown-rtl .ant-dropdown-menu-submenu-title {
    padding-right: 12px;
    padding-left: 24px
}

.ant-dropdown-rtl .ant-dropdown-menu-submenu-vertical>.ant-dropdown-menu {
    right: 100%;
    left: 0;
    margin-right: 4px;
    margin-left: 0
}

.ant-btn {
    line-height: 1.5715;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    box-shadow: 0 2px 0 rgba(0,0,0,.015);
    cursor: pointer;
    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    height: 32px;
    padding: 4px 15px;
    font-size: 14px;
    border-radius: 2px;
    color: rgba(0,0,0,.65);
    background-color: #fff;
    border-color: #d9d9d9
}

.ant-btn>.anticon {
    line-height: 1
}

.ant-btn,.ant-btn:active,.ant-btn:focus {
    outline: 0
}

.ant-btn:not([disabled]):hover {
    text-decoration: none
}

.ant-btn:not([disabled]):active {
    outline: 0;
    box-shadow: none
}

.ant-btn.disabled,.ant-btn[disabled] {
    cursor: not-allowed
}

.ant-btn.disabled>*,.ant-btn[disabled]>* {
    pointer-events: none
}

.ant-btn-lg {
    height: 40px;
    padding: 6.4px 15px;
    font-size: 16px;
    border-radius: 2px
}

.ant-btn-sm {
    height: 24px;
    padding: 0 7px;
    font-size: 14px;
    border-radius: 2px;
    line-height: 22px
}

.ant-btn>a:only-child {
    color: currentColor
}

.ant-btn>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn:focus,.ant-btn:hover {
    color: #40a9ff;
    background-color: #fff;
    border-color: #40a9ff
}

.ant-btn:focus>a:only-child,.ant-btn:hover>a:only-child {
    color: currentColor
}

.ant-btn:focus>a:only-child:after,.ant-btn:hover>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn.active,.ant-btn:active {
    color: #096dd9;
    background-color: #fff;
    border-color: #096dd9
}

.ant-btn.active>a:only-child,.ant-btn:active>a:only-child {
    color: currentColor
}

.ant-btn.active>a:only-child:after,.ant-btn:active>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-disabled,.ant-btn-disabled.active,.ant-btn-disabled:active,.ant-btn-disabled:focus,.ant-btn-disabled:hover,.ant-btn.disabled,.ant-btn.disabled.active,.ant-btn.disabled:active,.ant-btn.disabled:focus,.ant-btn.disabled:hover,.ant-btn[disabled],.ant-btn[disabled].active,.ant-btn[disabled]:active,.ant-btn[disabled]:focus,.ant-btn[disabled]:hover {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none
}

.ant-btn-disabled.active>a:only-child,.ant-btn-disabled:active>a:only-child,.ant-btn-disabled:focus>a:only-child,.ant-btn-disabled:hover>a:only-child,.ant-btn-disabled>a:only-child,.ant-btn.disabled.active>a:only-child,.ant-btn.disabled:active>a:only-child,.ant-btn.disabled:focus>a:only-child,.ant-btn.disabled:hover>a:only-child,.ant-btn.disabled>a:only-child,.ant-btn[disabled].active>a:only-child,.ant-btn[disabled]:active>a:only-child,.ant-btn[disabled]:focus>a:only-child,.ant-btn[disabled]:hover>a:only-child,.ant-btn[disabled]>a:only-child {
    color: currentColor
}

.ant-btn-disabled.active>a:only-child:after,.ant-btn-disabled:active>a:only-child:after,.ant-btn-disabled:focus>a:only-child:after,.ant-btn-disabled:hover>a:only-child:after,.ant-btn-disabled>a:only-child:after,.ant-btn.disabled.active>a:only-child:after,.ant-btn.disabled:active>a:only-child:after,.ant-btn.disabled:focus>a:only-child:after,.ant-btn.disabled:hover>a:only-child:after,.ant-btn.disabled>a:only-child:after,.ant-btn[disabled].active>a:only-child:after,.ant-btn[disabled]:active>a:only-child:after,.ant-btn[disabled]:focus>a:only-child:after,.ant-btn[disabled]:hover>a:only-child:after,.ant-btn[disabled]>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn.active,.ant-btn:active,.ant-btn:focus,.ant-btn:hover {
    text-decoration: none;
    background: #fff
}

.ant-btn>i,.ant-btn>span {
    display: inline-block;
    pointer-events: none
}

.ant-btn-primary {
    color: #fff;
    background-color: #1890ff;
    border-color: #1890ff;
    text-shadow: 0 -1px 0 rgba(0,0,0,.12);
    box-shadow: 0 2px 0 rgba(0,0,0,.045)
}

.ant-btn-primary>a:only-child {
    color: currentColor
}

.ant-btn-primary>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-primary:focus,.ant-btn-primary:hover {
    color: #fff;
    background-color: #40a9ff;
    border-color: #40a9ff
}

.ant-btn-primary:focus>a:only-child,.ant-btn-primary:hover>a:only-child {
    color: currentColor
}

.ant-btn-primary:focus>a:only-child:after,.ant-btn-primary:hover>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-primary.active,.ant-btn-primary:active {
    color: #fff;
    background-color: #096dd9;
    border-color: #096dd9
}

.ant-btn-primary.active>a:only-child,.ant-btn-primary:active>a:only-child {
    color: currentColor
}

.ant-btn-primary.active>a:only-child:after,.ant-btn-primary:active>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-primary-disabled,.ant-btn-primary-disabled.active,.ant-btn-primary-disabled:active,.ant-btn-primary-disabled:focus,.ant-btn-primary-disabled:hover,.ant-btn-primary.disabled,.ant-btn-primary.disabled.active,.ant-btn-primary.disabled:active,.ant-btn-primary.disabled:focus,.ant-btn-primary.disabled:hover,.ant-btn-primary[disabled],.ant-btn-primary[disabled].active,.ant-btn-primary[disabled]:active,.ant-btn-primary[disabled]:focus,.ant-btn-primary[disabled]:hover {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none
}

.ant-btn-primary-disabled.active>a:only-child,.ant-btn-primary-disabled:active>a:only-child,.ant-btn-primary-disabled:focus>a:only-child,.ant-btn-primary-disabled:hover>a:only-child,.ant-btn-primary-disabled>a:only-child,.ant-btn-primary.disabled.active>a:only-child,.ant-btn-primary.disabled:active>a:only-child,.ant-btn-primary.disabled:focus>a:only-child,.ant-btn-primary.disabled:hover>a:only-child,.ant-btn-primary.disabled>a:only-child,.ant-btn-primary[disabled].active>a:only-child,.ant-btn-primary[disabled]:active>a:only-child,.ant-btn-primary[disabled]:focus>a:only-child,.ant-btn-primary[disabled]:hover>a:only-child,.ant-btn-primary[disabled]>a:only-child {
    color: currentColor
}

.ant-btn-primary-disabled.active>a:only-child:after,.ant-btn-primary-disabled:active>a:only-child:after,.ant-btn-primary-disabled:focus>a:only-child:after,.ant-btn-primary-disabled:hover>a:only-child:after,.ant-btn-primary-disabled>a:only-child:after,.ant-btn-primary.disabled.active>a:only-child:after,.ant-btn-primary.disabled:active>a:only-child:after,.ant-btn-primary.disabled:focus>a:only-child:after,.ant-btn-primary.disabled:hover>a:only-child:after,.ant-btn-primary.disabled>a:only-child:after,.ant-btn-primary[disabled].active>a:only-child:after,.ant-btn-primary[disabled]:active>a:only-child:after,.ant-btn-primary[disabled]:focus>a:only-child:after,.ant-btn-primary[disabled]:hover>a:only-child:after,.ant-btn-primary[disabled]>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-group .ant-btn-primary:not(:first-child):not(:last-child) {
    border-right-color: #40a9ff;
    border-left-color: #40a9ff
}

.ant-btn-group .ant-btn-primary:not(:first-child):not(:last-child):disabled {
    border-color: #d9d9d9
}

.ant-btn-group .ant-btn-primary:first-child:not(:last-child) {
    border-right-color: #40a9ff
}

.ant-btn-group .ant-btn-primary:first-child:not(:last-child)[disabled] {
    border-right-color: #d9d9d9
}

.ant-btn-group .ant-btn-primary+.ant-btn-primary,.ant-btn-group .ant-btn-primary:last-child:not(:first-child) {
    border-left-color: #40a9ff
}

.ant-btn-group .ant-btn-primary+.ant-btn-primary[disabled],.ant-btn-group .ant-btn-primary:last-child:not(:first-child)[disabled] {
    border-left-color: #d9d9d9
}

.ant-btn-ghost {
    color: rgba(0,0,0,.65);
    background-color: transparent;
    border-color: #d9d9d9
}

.ant-btn-ghost>a:only-child {
    color: currentColor
}

.ant-btn-ghost>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-ghost:focus,.ant-btn-ghost:hover {
    color: #40a9ff;
    background-color: transparent;
    border-color: #40a9ff
}

.ant-btn-ghost:focus>a:only-child,.ant-btn-ghost:hover>a:only-child {
    color: currentColor
}

.ant-btn-ghost:focus>a:only-child:after,.ant-btn-ghost:hover>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-ghost.active,.ant-btn-ghost:active {
    color: #096dd9;
    background-color: transparent;
    border-color: #096dd9
}

.ant-btn-ghost.active>a:only-child,.ant-btn-ghost:active>a:only-child {
    color: currentColor
}

.ant-btn-ghost.active>a:only-child:after,.ant-btn-ghost:active>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-ghost-disabled,.ant-btn-ghost-disabled.active,.ant-btn-ghost-disabled:active,.ant-btn-ghost-disabled:focus,.ant-btn-ghost-disabled:hover,.ant-btn-ghost.disabled,.ant-btn-ghost.disabled.active,.ant-btn-ghost.disabled:active,.ant-btn-ghost.disabled:focus,.ant-btn-ghost.disabled:hover,.ant-btn-ghost[disabled],.ant-btn-ghost[disabled].active,.ant-btn-ghost[disabled]:active,.ant-btn-ghost[disabled]:focus,.ant-btn-ghost[disabled]:hover {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none
}

.ant-btn-ghost-disabled.active>a:only-child,.ant-btn-ghost-disabled:active>a:only-child,.ant-btn-ghost-disabled:focus>a:only-child,.ant-btn-ghost-disabled:hover>a:only-child,.ant-btn-ghost-disabled>a:only-child,.ant-btn-ghost.disabled.active>a:only-child,.ant-btn-ghost.disabled:active>a:only-child,.ant-btn-ghost.disabled:focus>a:only-child,.ant-btn-ghost.disabled:hover>a:only-child,.ant-btn-ghost.disabled>a:only-child,.ant-btn-ghost[disabled].active>a:only-child,.ant-btn-ghost[disabled]:active>a:only-child,.ant-btn-ghost[disabled]:focus>a:only-child,.ant-btn-ghost[disabled]:hover>a:only-child,.ant-btn-ghost[disabled]>a:only-child {
    color: currentColor
}

.ant-btn-ghost-disabled.active>a:only-child:after,.ant-btn-ghost-disabled:active>a:only-child:after,.ant-btn-ghost-disabled:focus>a:only-child:after,.ant-btn-ghost-disabled:hover>a:only-child:after,.ant-btn-ghost-disabled>a:only-child:after,.ant-btn-ghost.disabled.active>a:only-child:after,.ant-btn-ghost.disabled:active>a:only-child:after,.ant-btn-ghost.disabled:focus>a:only-child:after,.ant-btn-ghost.disabled:hover>a:only-child:after,.ant-btn-ghost.disabled>a:only-child:after,.ant-btn-ghost[disabled].active>a:only-child:after,.ant-btn-ghost[disabled]:active>a:only-child:after,.ant-btn-ghost[disabled]:focus>a:only-child:after,.ant-btn-ghost[disabled]:hover>a:only-child:after,.ant-btn-ghost[disabled]>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-dashed {
    color: rgba(0,0,0,.65);
    background-color: #fff;
    border-color: #d9d9d9;
    border-style: dashed
}

.ant-btn-dashed>a:only-child {
    color: currentColor
}

.ant-btn-dashed>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-dashed:focus,.ant-btn-dashed:hover {
    color: #40a9ff;
    background-color: #fff;
    border-color: #40a9ff
}

.ant-btn-dashed:focus>a:only-child,.ant-btn-dashed:hover>a:only-child {
    color: currentColor
}

.ant-btn-dashed:focus>a:only-child:after,.ant-btn-dashed:hover>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-dashed.active,.ant-btn-dashed:active {
    color: #096dd9;
    background-color: #fff;
    border-color: #096dd9
}

.ant-btn-dashed.active>a:only-child,.ant-btn-dashed:active>a:only-child {
    color: currentColor
}

.ant-btn-dashed.active>a:only-child:after,.ant-btn-dashed:active>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-dashed-disabled,.ant-btn-dashed-disabled.active,.ant-btn-dashed-disabled:active,.ant-btn-dashed-disabled:focus,.ant-btn-dashed-disabled:hover,.ant-btn-dashed.disabled,.ant-btn-dashed.disabled.active,.ant-btn-dashed.disabled:active,.ant-btn-dashed.disabled:focus,.ant-btn-dashed.disabled:hover,.ant-btn-dashed[disabled],.ant-btn-dashed[disabled].active,.ant-btn-dashed[disabled]:active,.ant-btn-dashed[disabled]:focus,.ant-btn-dashed[disabled]:hover {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none
}

.ant-btn-dashed-disabled.active>a:only-child,.ant-btn-dashed-disabled:active>a:only-child,.ant-btn-dashed-disabled:focus>a:only-child,.ant-btn-dashed-disabled:hover>a:only-child,.ant-btn-dashed-disabled>a:only-child,.ant-btn-dashed.disabled.active>a:only-child,.ant-btn-dashed.disabled:active>a:only-child,.ant-btn-dashed.disabled:focus>a:only-child,.ant-btn-dashed.disabled:hover>a:only-child,.ant-btn-dashed.disabled>a:only-child,.ant-btn-dashed[disabled].active>a:only-child,.ant-btn-dashed[disabled]:active>a:only-child,.ant-btn-dashed[disabled]:focus>a:only-child,.ant-btn-dashed[disabled]:hover>a:only-child,.ant-btn-dashed[disabled]>a:only-child {
    color: currentColor
}

.ant-btn-dashed-disabled.active>a:only-child:after,.ant-btn-dashed-disabled:active>a:only-child:after,.ant-btn-dashed-disabled:focus>a:only-child:after,.ant-btn-dashed-disabled:hover>a:only-child:after,.ant-btn-dashed-disabled>a:only-child:after,.ant-btn-dashed.disabled.active>a:only-child:after,.ant-btn-dashed.disabled:active>a:only-child:after,.ant-btn-dashed.disabled:focus>a:only-child:after,.ant-btn-dashed.disabled:hover>a:only-child:after,.ant-btn-dashed.disabled>a:only-child:after,.ant-btn-dashed[disabled].active>a:only-child:after,.ant-btn-dashed[disabled]:active>a:only-child:after,.ant-btn-dashed[disabled]:focus>a:only-child:after,.ant-btn-dashed[disabled]:hover>a:only-child:after,.ant-btn-dashed[disabled]>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-danger {
    color: #fff;
    background-color: #ff4d4f;
    border-color: #ff4d4f;
    text-shadow: 0 -1px 0 rgba(0,0,0,.12);
    box-shadow: 0 2px 0 rgba(0,0,0,.045)
}

.ant-btn-danger>a:only-child {
    color: currentColor
}

.ant-btn-danger>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-danger:focus,.ant-btn-danger:hover {
    color: #fff;
    background-color: #ff7875;
    border-color: #ff7875
}

.ant-btn-danger:focus>a:only-child,.ant-btn-danger:hover>a:only-child {
    color: currentColor
}

.ant-btn-danger:focus>a:only-child:after,.ant-btn-danger:hover>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-danger.active,.ant-btn-danger:active {
    color: #fff;
    background-color: #d9363e;
    border-color: #d9363e
}

.ant-btn-danger.active>a:only-child,.ant-btn-danger:active>a:only-child {
    color: currentColor
}

.ant-btn-danger.active>a:only-child:after,.ant-btn-danger:active>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-danger-disabled,.ant-btn-danger-disabled.active,.ant-btn-danger-disabled:active,.ant-btn-danger-disabled:focus,.ant-btn-danger-disabled:hover,.ant-btn-danger.disabled,.ant-btn-danger.disabled.active,.ant-btn-danger.disabled:active,.ant-btn-danger.disabled:focus,.ant-btn-danger.disabled:hover,.ant-btn-danger[disabled],.ant-btn-danger[disabled].active,.ant-btn-danger[disabled]:active,.ant-btn-danger[disabled]:focus,.ant-btn-danger[disabled]:hover {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none
}

.ant-btn-danger-disabled.active>a:only-child,.ant-btn-danger-disabled:active>a:only-child,.ant-btn-danger-disabled:focus>a:only-child,.ant-btn-danger-disabled:hover>a:only-child,.ant-btn-danger-disabled>a:only-child,.ant-btn-danger.disabled.active>a:only-child,.ant-btn-danger.disabled:active>a:only-child,.ant-btn-danger.disabled:focus>a:only-child,.ant-btn-danger.disabled:hover>a:only-child,.ant-btn-danger.disabled>a:only-child,.ant-btn-danger[disabled].active>a:only-child,.ant-btn-danger[disabled]:active>a:only-child,.ant-btn-danger[disabled]:focus>a:only-child,.ant-btn-danger[disabled]:hover>a:only-child,.ant-btn-danger[disabled]>a:only-child {
    color: currentColor
}

.ant-btn-danger-disabled.active>a:only-child:after,.ant-btn-danger-disabled:active>a:only-child:after,.ant-btn-danger-disabled:focus>a:only-child:after,.ant-btn-danger-disabled:hover>a:only-child:after,.ant-btn-danger-disabled>a:only-child:after,.ant-btn-danger.disabled.active>a:only-child:after,.ant-btn-danger.disabled:active>a:only-child:after,.ant-btn-danger.disabled:focus>a:only-child:after,.ant-btn-danger.disabled:hover>a:only-child:after,.ant-btn-danger.disabled>a:only-child:after,.ant-btn-danger[disabled].active>a:only-child:after,.ant-btn-danger[disabled]:active>a:only-child:after,.ant-btn-danger[disabled]:focus>a:only-child:after,.ant-btn-danger[disabled]:hover>a:only-child:after,.ant-btn-danger[disabled]>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-link {
    color: #1890ff;
    background-color: transparent;
    border-color: transparent;
    box-shadow: none
}

.ant-btn-link>a:only-child {
    color: currentColor
}

.ant-btn-link>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-link:focus,.ant-btn-link:hover {
    color: #40a9ff;
    background-color: transparent;
    border-color: #40a9ff
}

.ant-btn-link:focus>a:only-child,.ant-btn-link:hover>a:only-child {
    color: currentColor
}

.ant-btn-link:focus>a:only-child:after,.ant-btn-link:hover>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-link.active,.ant-btn-link:active {
    color: #096dd9;
    background-color: transparent;
    border-color: #096dd9
}

.ant-btn-link.active>a:only-child,.ant-btn-link:active>a:only-child {
    color: currentColor
}

.ant-btn-link.active>a:only-child:after,.ant-btn-link:active>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-link-disabled,.ant-btn-link-disabled.active,.ant-btn-link-disabled:active,.ant-btn-link-disabled:focus,.ant-btn-link-disabled:hover,.ant-btn-link.disabled,.ant-btn-link.disabled.active,.ant-btn-link.disabled:active,.ant-btn-link.disabled:focus,.ant-btn-link.disabled:hover,.ant-btn-link[disabled],.ant-btn-link[disabled].active,.ant-btn-link[disabled]:active,.ant-btn-link[disabled]:focus,.ant-btn-link[disabled]:hover {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none
}

.ant-btn-link:active,.ant-btn-link:focus,.ant-btn-link:hover {
    border-color: transparent
}

.ant-btn-link-disabled,.ant-btn-link-disabled.active,.ant-btn-link-disabled:active,.ant-btn-link-disabled:focus,.ant-btn-link-disabled:hover,.ant-btn-link.disabled,.ant-btn-link.disabled.active,.ant-btn-link.disabled:active,.ant-btn-link.disabled:focus,.ant-btn-link.disabled:hover,.ant-btn-link[disabled],.ant-btn-link[disabled].active,.ant-btn-link[disabled]:active,.ant-btn-link[disabled]:focus,.ant-btn-link[disabled]:hover {
    color: rgba(0,0,0,.25);
    background-color: transparent;
    border-color: transparent;
    text-shadow: none;
    box-shadow: none
}

.ant-btn-link-disabled.active>a:only-child,.ant-btn-link-disabled:active>a:only-child,.ant-btn-link-disabled:focus>a:only-child,.ant-btn-link-disabled:hover>a:only-child,.ant-btn-link-disabled>a:only-child,.ant-btn-link.disabled.active>a:only-child,.ant-btn-link.disabled:active>a:only-child,.ant-btn-link.disabled:focus>a:only-child,.ant-btn-link.disabled:hover>a:only-child,.ant-btn-link.disabled>a:only-child,.ant-btn-link[disabled].active>a:only-child,.ant-btn-link[disabled]:active>a:only-child,.ant-btn-link[disabled]:focus>a:only-child,.ant-btn-link[disabled]:hover>a:only-child,.ant-btn-link[disabled]>a:only-child {
    color: currentColor
}

.ant-btn-link-disabled.active>a:only-child:after,.ant-btn-link-disabled:active>a:only-child:after,.ant-btn-link-disabled:focus>a:only-child:after,.ant-btn-link-disabled:hover>a:only-child:after,.ant-btn-link-disabled>a:only-child:after,.ant-btn-link.disabled.active>a:only-child:after,.ant-btn-link.disabled:active>a:only-child:after,.ant-btn-link.disabled:focus>a:only-child:after,.ant-btn-link.disabled:hover>a:only-child:after,.ant-btn-link.disabled>a:only-child:after,.ant-btn-link[disabled].active>a:only-child:after,.ant-btn-link[disabled]:active>a:only-child:after,.ant-btn-link[disabled]:focus>a:only-child:after,.ant-btn-link[disabled]:hover>a:only-child:after,.ant-btn-link[disabled]>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-dangerous {
    color: #ff4d4f;
    background-color: #fff;
    border-color: #ff4d4f
}

.ant-btn-dangerous>a:only-child {
    color: currentColor
}

.ant-btn-dangerous>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-dangerous:focus,.ant-btn-dangerous:hover {
    color: #ff7875;
    background-color: #fff;
    border-color: #ff7875
}

.ant-btn-dangerous:focus>a:only-child,.ant-btn-dangerous:hover>a:only-child {
    color: currentColor
}

.ant-btn-dangerous:focus>a:only-child:after,.ant-btn-dangerous:hover>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-dangerous.active,.ant-btn-dangerous:active {
    color: #d9363e;
    background-color: #fff;
    border-color: #d9363e
}

.ant-btn-dangerous.active>a:only-child,.ant-btn-dangerous:active>a:only-child {
    color: currentColor
}

.ant-btn-dangerous.active>a:only-child:after,.ant-btn-dangerous:active>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-dangerous-disabled,.ant-btn-dangerous-disabled.active,.ant-btn-dangerous-disabled:active,.ant-btn-dangerous-disabled:focus,.ant-btn-dangerous-disabled:hover,.ant-btn-dangerous.disabled,.ant-btn-dangerous.disabled.active,.ant-btn-dangerous.disabled:active,.ant-btn-dangerous.disabled:focus,.ant-btn-dangerous.disabled:hover,.ant-btn-dangerous[disabled],.ant-btn-dangerous[disabled].active,.ant-btn-dangerous[disabled]:active,.ant-btn-dangerous[disabled]:focus,.ant-btn-dangerous[disabled]:hover {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none
}

.ant-btn-dangerous-disabled.active>a:only-child,.ant-btn-dangerous-disabled:active>a:only-child,.ant-btn-dangerous-disabled:focus>a:only-child,.ant-btn-dangerous-disabled:hover>a:only-child,.ant-btn-dangerous-disabled>a:only-child,.ant-btn-dangerous.disabled.active>a:only-child,.ant-btn-dangerous.disabled:active>a:only-child,.ant-btn-dangerous.disabled:focus>a:only-child,.ant-btn-dangerous.disabled:hover>a:only-child,.ant-btn-dangerous.disabled>a:only-child,.ant-btn-dangerous[disabled].active>a:only-child,.ant-btn-dangerous[disabled]:active>a:only-child,.ant-btn-dangerous[disabled]:focus>a:only-child,.ant-btn-dangerous[disabled]:hover>a:only-child,.ant-btn-dangerous[disabled]>a:only-child {
    color: currentColor
}

.ant-btn-dangerous-disabled.active>a:only-child:after,.ant-btn-dangerous-disabled:active>a:only-child:after,.ant-btn-dangerous-disabled:focus>a:only-child:after,.ant-btn-dangerous-disabled:hover>a:only-child:after,.ant-btn-dangerous-disabled>a:only-child:after,.ant-btn-dangerous.disabled.active>a:only-child:after,.ant-btn-dangerous.disabled:active>a:only-child:after,.ant-btn-dangerous.disabled:focus>a:only-child:after,.ant-btn-dangerous.disabled:hover>a:only-child:after,.ant-btn-dangerous.disabled>a:only-child:after,.ant-btn-dangerous[disabled].active>a:only-child:after,.ant-btn-dangerous[disabled]:active>a:only-child:after,.ant-btn-dangerous[disabled]:focus>a:only-child:after,.ant-btn-dangerous[disabled]:hover>a:only-child:after,.ant-btn-dangerous[disabled]>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-dangerous.ant-btn-primary {
    color: #fff;
    background-color: #ff4d4f;
    border-color: #ff4d4f;
    text-shadow: 0 -1px 0 rgba(0,0,0,.12);
    box-shadow: 0 2px 0 rgba(0,0,0,.045)
}

.ant-btn-dangerous.ant-btn-primary>a:only-child {
    color: currentColor
}

.ant-btn-dangerous.ant-btn-primary>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-dangerous.ant-btn-primary:focus,.ant-btn-dangerous.ant-btn-primary:hover {
    color: #fff;
    background-color: #ff7875;
    border-color: #ff7875
}

.ant-btn-dangerous.ant-btn-primary:focus>a:only-child,.ant-btn-dangerous.ant-btn-primary:hover>a:only-child {
    color: currentColor
}

.ant-btn-dangerous.ant-btn-primary:focus>a:only-child:after,.ant-btn-dangerous.ant-btn-primary:hover>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-dangerous.ant-btn-primary.active,.ant-btn-dangerous.ant-btn-primary:active {
    color: #fff;
    background-color: #d9363e;
    border-color: #d9363e
}

.ant-btn-dangerous.ant-btn-primary.active>a:only-child,.ant-btn-dangerous.ant-btn-primary:active>a:only-child {
    color: currentColor
}

.ant-btn-dangerous.ant-btn-primary.active>a:only-child:after,.ant-btn-dangerous.ant-btn-primary:active>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-dangerous.ant-btn-primary-disabled,.ant-btn-dangerous.ant-btn-primary-disabled.active,.ant-btn-dangerous.ant-btn-primary-disabled:active,.ant-btn-dangerous.ant-btn-primary-disabled:focus,.ant-btn-dangerous.ant-btn-primary-disabled:hover,.ant-btn-dangerous.ant-btn-primary.disabled,.ant-btn-dangerous.ant-btn-primary.disabled.active,.ant-btn-dangerous.ant-btn-primary.disabled:active,.ant-btn-dangerous.ant-btn-primary.disabled:focus,.ant-btn-dangerous.ant-btn-primary.disabled:hover,.ant-btn-dangerous.ant-btn-primary[disabled],.ant-btn-dangerous.ant-btn-primary[disabled].active,.ant-btn-dangerous.ant-btn-primary[disabled]:active,.ant-btn-dangerous.ant-btn-primary[disabled]:focus,.ant-btn-dangerous.ant-btn-primary[disabled]:hover {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none
}

.ant-btn-dangerous.ant-btn-primary-disabled.active>a:only-child,.ant-btn-dangerous.ant-btn-primary-disabled:active>a:only-child,.ant-btn-dangerous.ant-btn-primary-disabled:focus>a:only-child,.ant-btn-dangerous.ant-btn-primary-disabled:hover>a:only-child,.ant-btn-dangerous.ant-btn-primary-disabled>a:only-child,.ant-btn-dangerous.ant-btn-primary.disabled.active>a:only-child,.ant-btn-dangerous.ant-btn-primary.disabled:active>a:only-child,.ant-btn-dangerous.ant-btn-primary.disabled:focus>a:only-child,.ant-btn-dangerous.ant-btn-primary.disabled:hover>a:only-child,.ant-btn-dangerous.ant-btn-primary.disabled>a:only-child,.ant-btn-dangerous.ant-btn-primary[disabled].active>a:only-child,.ant-btn-dangerous.ant-btn-primary[disabled]:active>a:only-child,.ant-btn-dangerous.ant-btn-primary[disabled]:focus>a:only-child,.ant-btn-dangerous.ant-btn-primary[disabled]:hover>a:only-child,.ant-btn-dangerous.ant-btn-primary[disabled]>a:only-child {
    color: currentColor
}

.ant-btn-dangerous.ant-btn-primary-disabled.active>a:only-child:after,.ant-btn-dangerous.ant-btn-primary-disabled:active>a:only-child:after,.ant-btn-dangerous.ant-btn-primary-disabled:focus>a:only-child:after,.ant-btn-dangerous.ant-btn-primary-disabled:hover>a:only-child:after,.ant-btn-dangerous.ant-btn-primary-disabled>a:only-child:after,.ant-btn-dangerous.ant-btn-primary.disabled.active>a:only-child:after,.ant-btn-dangerous.ant-btn-primary.disabled:active>a:only-child:after,.ant-btn-dangerous.ant-btn-primary.disabled:focus>a:only-child:after,.ant-btn-dangerous.ant-btn-primary.disabled:hover>a:only-child:after,.ant-btn-dangerous.ant-btn-primary.disabled>a:only-child:after,.ant-btn-dangerous.ant-btn-primary[disabled].active>a:only-child:after,.ant-btn-dangerous.ant-btn-primary[disabled]:active>a:only-child:after,.ant-btn-dangerous.ant-btn-primary[disabled]:focus>a:only-child:after,.ant-btn-dangerous.ant-btn-primary[disabled]:hover>a:only-child:after,.ant-btn-dangerous.ant-btn-primary[disabled]>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-dangerous.ant-btn-link {
    color: #ff4d4f;
    background-color: transparent;
    border-color: transparent;
    box-shadow: none
}

.ant-btn-dangerous.ant-btn-link>a:only-child {
    color: currentColor
}

.ant-btn-dangerous.ant-btn-link>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-dangerous.ant-btn-link:focus,.ant-btn-dangerous.ant-btn-link:hover {
    color: #40a9ff;
    background-color: transparent;
    border-color: #40a9ff
}

.ant-btn-dangerous.ant-btn-link.active,.ant-btn-dangerous.ant-btn-link:active {
    color: #096dd9;
    background-color: transparent;
    border-color: #096dd9
}

.ant-btn-dangerous.ant-btn-link.active>a:only-child,.ant-btn-dangerous.ant-btn-link:active>a:only-child {
    color: currentColor
}

.ant-btn-dangerous.ant-btn-link.active>a:only-child:after,.ant-btn-dangerous.ant-btn-link:active>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-dangerous.ant-btn-link-disabled,.ant-btn-dangerous.ant-btn-link-disabled.active,.ant-btn-dangerous.ant-btn-link-disabled:active,.ant-btn-dangerous.ant-btn-link-disabled:focus,.ant-btn-dangerous.ant-btn-link-disabled:hover,.ant-btn-dangerous.ant-btn-link.disabled,.ant-btn-dangerous.ant-btn-link.disabled.active,.ant-btn-dangerous.ant-btn-link.disabled:active,.ant-btn-dangerous.ant-btn-link.disabled:focus,.ant-btn-dangerous.ant-btn-link.disabled:hover,.ant-btn-dangerous.ant-btn-link[disabled],.ant-btn-dangerous.ant-btn-link[disabled].active,.ant-btn-dangerous.ant-btn-link[disabled]:active,.ant-btn-dangerous.ant-btn-link[disabled]:focus,.ant-btn-dangerous.ant-btn-link[disabled]:hover {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none
}

.ant-btn-dangerous.ant-btn-link:focus,.ant-btn-dangerous.ant-btn-link:hover {
    color: #ff7875;
    background-color: transparent;
    border-color: transparent
}

.ant-btn-dangerous.ant-btn-link:focus>a:only-child,.ant-btn-dangerous.ant-btn-link:hover>a:only-child {
    color: currentColor
}

.ant-btn-dangerous.ant-btn-link:focus>a:only-child:after,.ant-btn-dangerous.ant-btn-link:hover>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-dangerous.ant-btn-link:active {
    color: #d9363e;
    background-color: transparent;
    border-color: transparent
}

.ant-btn-dangerous.ant-btn-link:active>a:only-child {
    color: currentColor
}

.ant-btn-dangerous.ant-btn-link:active>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-dangerous.ant-btn-link-disabled,.ant-btn-dangerous.ant-btn-link-disabled.active,.ant-btn-dangerous.ant-btn-link-disabled:active,.ant-btn-dangerous.ant-btn-link-disabled:focus,.ant-btn-dangerous.ant-btn-link-disabled:hover,.ant-btn-dangerous.ant-btn-link.disabled,.ant-btn-dangerous.ant-btn-link.disabled.active,.ant-btn-dangerous.ant-btn-link.disabled:active,.ant-btn-dangerous.ant-btn-link.disabled:focus,.ant-btn-dangerous.ant-btn-link.disabled:hover,.ant-btn-dangerous.ant-btn-link[disabled],.ant-btn-dangerous.ant-btn-link[disabled].active,.ant-btn-dangerous.ant-btn-link[disabled]:active,.ant-btn-dangerous.ant-btn-link[disabled]:focus,.ant-btn-dangerous.ant-btn-link[disabled]:hover {
    color: rgba(0,0,0,.25);
    background-color: transparent;
    border-color: transparent;
    text-shadow: none;
    box-shadow: none
}

.ant-btn-dangerous.ant-btn-link-disabled.active>a:only-child,.ant-btn-dangerous.ant-btn-link-disabled:active>a:only-child,.ant-btn-dangerous.ant-btn-link-disabled:focus>a:only-child,.ant-btn-dangerous.ant-btn-link-disabled:hover>a:only-child,.ant-btn-dangerous.ant-btn-link-disabled>a:only-child,.ant-btn-dangerous.ant-btn-link.disabled.active>a:only-child,.ant-btn-dangerous.ant-btn-link.disabled:active>a:only-child,.ant-btn-dangerous.ant-btn-link.disabled:focus>a:only-child,.ant-btn-dangerous.ant-btn-link.disabled:hover>a:only-child,.ant-btn-dangerous.ant-btn-link.disabled>a:only-child,.ant-btn-dangerous.ant-btn-link[disabled].active>a:only-child,.ant-btn-dangerous.ant-btn-link[disabled]:active>a:only-child,.ant-btn-dangerous.ant-btn-link[disabled]:focus>a:only-child,.ant-btn-dangerous.ant-btn-link[disabled]:hover>a:only-child,.ant-btn-dangerous.ant-btn-link[disabled]>a:only-child {
    color: currentColor
}

.ant-btn-dangerous.ant-btn-link-disabled.active>a:only-child:after,.ant-btn-dangerous.ant-btn-link-disabled:active>a:only-child:after,.ant-btn-dangerous.ant-btn-link-disabled:focus>a:only-child:after,.ant-btn-dangerous.ant-btn-link-disabled:hover>a:only-child:after,.ant-btn-dangerous.ant-btn-link-disabled>a:only-child:after,.ant-btn-dangerous.ant-btn-link.disabled.active>a:only-child:after,.ant-btn-dangerous.ant-btn-link.disabled:active>a:only-child:after,.ant-btn-dangerous.ant-btn-link.disabled:focus>a:only-child:after,.ant-btn-dangerous.ant-btn-link.disabled:hover>a:only-child:after,.ant-btn-dangerous.ant-btn-link.disabled>a:only-child:after,.ant-btn-dangerous.ant-btn-link[disabled].active>a:only-child:after,.ant-btn-dangerous.ant-btn-link[disabled]:active>a:only-child:after,.ant-btn-dangerous.ant-btn-link[disabled]:focus>a:only-child:after,.ant-btn-dangerous.ant-btn-link[disabled]:hover>a:only-child:after,.ant-btn-dangerous.ant-btn-link[disabled]>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-icon-only {
    width: 32px;
    height: 32px;
    padding: 2.4px 0;
    font-size: 16px;
    border-radius: 2px;
    vertical-align: -.5px
}

.ant-btn-icon-only>* {
    font-size: 16px
}

.ant-btn-icon-only.ant-btn-lg {
    width: 40px;
    height: 40px;
    padding: 4.9px 0;
    font-size: 18px;
    border-radius: 2px
}

.ant-btn-icon-only.ant-btn-lg>* {
    font-size: 18px
}

.ant-btn-icon-only.ant-btn-sm {
    width: 24px;
    height: 24px;
    padding: 0;
    font-size: 14px;
    border-radius: 2px
}

.ant-btn-icon-only.ant-btn-sm>* {
    font-size: 14px
}

.ant-btn-round {
    height: 32px;
    padding: 4px 16px;
    font-size: 14px;
    border-radius: 32px
}

.ant-btn-round.ant-btn-lg {
    height: 40px;
    padding: 6.4px 20px;
    font-size: 16px;
    border-radius: 40px
}

.ant-btn-round.ant-btn-sm {
    height: 24px;
    padding: 0 12px;
    font-size: 14px;
    border-radius: 24px
}

.ant-btn-round.ant-btn-icon-only {
    width: auto
}

.ant-btn-circle,.ant-btn-circle-outline {
    min-width: 32px;
    padding-right: 0;
    padding-left: 0;
    text-align: center;
    border-radius: 50%
}

.ant-btn-circle-outline.ant-btn-lg,.ant-btn-circle.ant-btn-lg {
    min-width: 40px;
    border-radius: 50%
}

.ant-btn-circle-outline.ant-btn-sm,.ant-btn-circle.ant-btn-sm {
    min-width: 24px;
    border-radius: 50%
}

.ant-btn:before {
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    z-index: 1;
    display: none;
    background: #fff;
    border-radius: inherit;
    opacity: .35;
    -webkit-transition: opacity .2s;
    transition: opacity .2s;
    content: '';
    pointer-events: none
}

.ant-btn .anticon {
    -webkit-transition: margin-left .3s cubic-bezier(.645,.045,.355,1);
    transition: margin-left .3s cubic-bezier(.645,.045,.355,1)
}

.ant-btn .anticon.anticon-minus>svg,.ant-btn .anticon.anticon-plus>svg {
    shape-rendering: optimizeSpeed
}

.ant-btn.ant-btn-loading {
    position: relative
}

.ant-btn.ant-btn-loading:not([disabled]) {
    pointer-events: none
}

.ant-btn.ant-btn-loading:before {
    display: block
}

.ant-btn>.ant-btn-loading-icon {
    padding-right: 8px;
    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
    transition: all .3s cubic-bezier(.645,.045,.355,1)
}

.ant-btn>.ant-btn-loading-icon:only-child {
    padding-right: 0
}

.ant-btn-group {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: -webkit-inline-flex;
    display: inline-flex
}

.ant-btn-group,.ant-btn-group>.ant-btn,.ant-btn-group>span>.ant-btn {
    position: relative
}

.ant-btn-group>.ant-btn.active,.ant-btn-group>.ant-btn:active,.ant-btn-group>.ant-btn:focus,.ant-btn-group>.ant-btn:hover,.ant-btn-group>span>.ant-btn.active,.ant-btn-group>span>.ant-btn:active,.ant-btn-group>span>.ant-btn:focus,.ant-btn-group>span>.ant-btn:hover {
    z-index: 2
}

.ant-btn-group>.ant-btn:disabled,.ant-btn-group>span>.ant-btn:disabled {
    z-index: 0
}

.ant-btn-group .ant-btn-icon-only {
    font-size: 14px
}

.ant-btn-group-lg>.ant-btn,.ant-btn-group-lg>span>.ant-btn {
    height: 40px;
    padding: 6.4px 15px;
    font-size: 16px;
    border-radius: 0
}

.ant-btn-group-lg .ant-btn.ant-btn-icon-only {
    width: 40px;
    height: 40px;
    padding-right: 0;
    padding-left: 0
}

.ant-btn-group-sm>.ant-btn,.ant-btn-group-sm>span>.ant-btn {
    height: 24px;
    padding: 0 7px;
    font-size: 14px;
    border-radius: 0
}

.ant-btn-group-sm>.ant-btn>.anticon,.ant-btn-group-sm>span>.ant-btn>.anticon {
    font-size: 14px
}

.ant-btn-group-sm .ant-btn.ant-btn-icon-only {
    width: 24px;
    height: 24px;
    padding-right: 0;
    padding-left: 0
}

.ant-btn+.ant-btn-group,.ant-btn-group+.ant-btn,.ant-btn-group+.ant-btn-group,.ant-btn-group .ant-btn+.ant-btn,.ant-btn-group .ant-btn+span,.ant-btn-group>span+span,.ant-btn-group span+.ant-btn {
    margin-left: -1px
}

.ant-btn-group .ant-btn-primary+.ant-btn:not(.ant-btn-primary):not([disabled]) {
    border-left-color: transparent
}

.ant-btn-group .ant-btn {
    border-radius: 0
}

.ant-btn-group>.ant-btn:first-child,.ant-btn-group>span:first-child>.ant-btn {
    margin-left: 0
}

.ant-btn-group>.ant-btn:only-child,.ant-btn-group>span:only-child>.ant-btn {
    border-radius: 2px
}

.ant-btn-group>.ant-btn:first-child:not(:last-child),.ant-btn-group>span:first-child:not(:last-child)>.ant-btn {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px
}

.ant-btn-group>.ant-btn:last-child:not(:first-child),.ant-btn-group>span:last-child:not(:first-child)>.ant-btn {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px
}

.ant-btn-group-sm>.ant-btn:only-child,.ant-btn-group-sm>span:only-child>.ant-btn {
    border-radius: 2px
}

.ant-btn-group-sm>.ant-btn:first-child:not(:last-child),.ant-btn-group-sm>span:first-child:not(:last-child)>.ant-btn {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px
}

.ant-btn-group-sm>.ant-btn:last-child:not(:first-child),.ant-btn-group-sm>span:last-child:not(:first-child)>.ant-btn {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px
}

.ant-btn-group>.ant-btn-group {
    float: left
}

.ant-btn-group>.ant-btn-group:not(:first-child):not(:last-child)>.ant-btn {
    border-radius: 0
}

.ant-btn-group>.ant-btn-group:first-child:not(:last-child)>.ant-btn:last-child {
    padding-right: 8px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}

.ant-btn-group>.ant-btn-group:last-child:not(:first-child)>.ant-btn:first-child {
    padding-left: 8px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}

.ant-btn-group-rtl.ant-btn+.ant-btn-group,.ant-btn-group-rtl.ant-btn-group+.ant-btn,.ant-btn-group-rtl.ant-btn-group+.ant-btn-group,.ant-btn-group-rtl.ant-btn-group .ant-btn+.ant-btn,.ant-btn-group-rtl.ant-btn-group .ant-btn+span,.ant-btn-group-rtl.ant-btn-group>span+span,.ant-btn-group-rtl.ant-btn-group span+.ant-btn,.ant-btn-rtl.ant-btn+.ant-btn-group,.ant-btn-rtl.ant-btn-group+.ant-btn,.ant-btn-rtl.ant-btn-group+.ant-btn-group,.ant-btn-rtl.ant-btn-group .ant-btn+.ant-btn,.ant-btn-rtl.ant-btn-group .ant-btn+span,.ant-btn-rtl.ant-btn-group>span+span,.ant-btn-rtl.ant-btn-group span+.ant-btn {
    margin-right: -1px;
    margin-left: auto
}

.ant-btn-group.ant-btn-group-rtl {
    direction: rtl
}

.ant-btn-group-rtl.ant-btn-group>.ant-btn:first-child:not(:last-child),.ant-btn-group-rtl.ant-btn-group>span:first-child:not(:last-child)>.ant-btn {
    border-top-left-radius: 0;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 0
}

.ant-btn-group-rtl.ant-btn-group>.ant-btn:last-child:not(:first-child),.ant-btn-group-rtl.ant-btn-group>span:last-child:not(:first-child)>.ant-btn {
    border-top-left-radius: 2px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 2px
}

.ant-btn-group-rtl.ant-btn-group-sm>.ant-btn:first-child:not(:last-child),.ant-btn-group-rtl.ant-btn-group-sm>span:first-child:not(:last-child)>.ant-btn {
    border-top-left-radius: 0;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 0
}

.ant-btn-group-rtl.ant-btn-group-sm>.ant-btn:last-child:not(:first-child),.ant-btn-group-rtl.ant-btn-group-sm>span:last-child:not(:first-child)>.ant-btn {
    border-top-left-radius: 2px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 2px
}

.ant-btn:active>span,.ant-btn:focus>span {
    position: relative
}

.ant-btn>.anticon+span,.ant-btn>span+.anticon {
    margin-left: 8px
}

.ant-btn-background-ghost {
    color: #fff;
    background: transparent!important;
    border-color: #fff
}

.ant-btn-background-ghost.ant-btn-primary {
    color: #1890ff;
    background-color: transparent;
    border-color: #1890ff;
    text-shadow: none
}

.ant-btn-background-ghost.ant-btn-primary>a:only-child {
    color: currentColor
}

.ant-btn-background-ghost.ant-btn-primary>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-background-ghost.ant-btn-primary:focus,.ant-btn-background-ghost.ant-btn-primary:hover {
    color: #40a9ff;
    background-color: transparent;
    border-color: #40a9ff
}

.ant-btn-background-ghost.ant-btn-primary:focus>a:only-child,.ant-btn-background-ghost.ant-btn-primary:hover>a:only-child {
    color: currentColor
}

.ant-btn-background-ghost.ant-btn-primary:focus>a:only-child:after,.ant-btn-background-ghost.ant-btn-primary:hover>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-background-ghost.ant-btn-primary.active,.ant-btn-background-ghost.ant-btn-primary:active {
    color: #096dd9;
    background-color: transparent;
    border-color: #096dd9
}

.ant-btn-background-ghost.ant-btn-primary.active>a:only-child,.ant-btn-background-ghost.ant-btn-primary:active>a:only-child {
    color: currentColor
}

.ant-btn-background-ghost.ant-btn-primary.active>a:only-child:after,.ant-btn-background-ghost.ant-btn-primary:active>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-background-ghost.ant-btn-primary-disabled,.ant-btn-background-ghost.ant-btn-primary-disabled.active,.ant-btn-background-ghost.ant-btn-primary-disabled:active,.ant-btn-background-ghost.ant-btn-primary-disabled:focus,.ant-btn-background-ghost.ant-btn-primary-disabled:hover,.ant-btn-background-ghost.ant-btn-primary.disabled,.ant-btn-background-ghost.ant-btn-primary.disabled.active,.ant-btn-background-ghost.ant-btn-primary.disabled:active,.ant-btn-background-ghost.ant-btn-primary.disabled:focus,.ant-btn-background-ghost.ant-btn-primary.disabled:hover,.ant-btn-background-ghost.ant-btn-primary[disabled],.ant-btn-background-ghost.ant-btn-primary[disabled].active,.ant-btn-background-ghost.ant-btn-primary[disabled]:active,.ant-btn-background-ghost.ant-btn-primary[disabled]:focus,.ant-btn-background-ghost.ant-btn-primary[disabled]:hover {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none
}

.ant-btn-background-ghost.ant-btn-primary-disabled.active>a:only-child,.ant-btn-background-ghost.ant-btn-primary-disabled:active>a:only-child,.ant-btn-background-ghost.ant-btn-primary-disabled:focus>a:only-child,.ant-btn-background-ghost.ant-btn-primary-disabled:hover>a:only-child,.ant-btn-background-ghost.ant-btn-primary-disabled>a:only-child,.ant-btn-background-ghost.ant-btn-primary.disabled.active>a:only-child,.ant-btn-background-ghost.ant-btn-primary.disabled:active>a:only-child,.ant-btn-background-ghost.ant-btn-primary.disabled:focus>a:only-child,.ant-btn-background-ghost.ant-btn-primary.disabled:hover>a:only-child,.ant-btn-background-ghost.ant-btn-primary.disabled>a:only-child,.ant-btn-background-ghost.ant-btn-primary[disabled].active>a:only-child,.ant-btn-background-ghost.ant-btn-primary[disabled]:active>a:only-child,.ant-btn-background-ghost.ant-btn-primary[disabled]:focus>a:only-child,.ant-btn-background-ghost.ant-btn-primary[disabled]:hover>a:only-child,.ant-btn-background-ghost.ant-btn-primary[disabled]>a:only-child {
    color: currentColor
}

.ant-btn-background-ghost.ant-btn-primary-disabled.active>a:only-child:after,.ant-btn-background-ghost.ant-btn-primary-disabled:active>a:only-child:after,.ant-btn-background-ghost.ant-btn-primary-disabled:focus>a:only-child:after,.ant-btn-background-ghost.ant-btn-primary-disabled:hover>a:only-child:after,.ant-btn-background-ghost.ant-btn-primary-disabled>a:only-child:after,.ant-btn-background-ghost.ant-btn-primary.disabled.active>a:only-child:after,.ant-btn-background-ghost.ant-btn-primary.disabled:active>a:only-child:after,.ant-btn-background-ghost.ant-btn-primary.disabled:focus>a:only-child:after,.ant-btn-background-ghost.ant-btn-primary.disabled:hover>a:only-child:after,.ant-btn-background-ghost.ant-btn-primary.disabled>a:only-child:after,.ant-btn-background-ghost.ant-btn-primary[disabled].active>a:only-child:after,.ant-btn-background-ghost.ant-btn-primary[disabled]:active>a:only-child:after,.ant-btn-background-ghost.ant-btn-primary[disabled]:focus>a:only-child:after,.ant-btn-background-ghost.ant-btn-primary[disabled]:hover>a:only-child:after,.ant-btn-background-ghost.ant-btn-primary[disabled]>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-background-ghost.ant-btn-danger {
    color: #ff4d4f;
    background-color: transparent;
    border-color: #ff4d4f;
    text-shadow: none
}

.ant-btn-background-ghost.ant-btn-danger>a:only-child {
    color: currentColor
}

.ant-btn-background-ghost.ant-btn-danger>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-background-ghost.ant-btn-danger:focus,.ant-btn-background-ghost.ant-btn-danger:hover {
    color: #ff7875;
    background-color: transparent;
    border-color: #ff7875
}

.ant-btn-background-ghost.ant-btn-danger:focus>a:only-child,.ant-btn-background-ghost.ant-btn-danger:hover>a:only-child {
    color: currentColor
}

.ant-btn-background-ghost.ant-btn-danger:focus>a:only-child:after,.ant-btn-background-ghost.ant-btn-danger:hover>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-background-ghost.ant-btn-danger.active,.ant-btn-background-ghost.ant-btn-danger:active {
    color: #d9363e;
    background-color: transparent;
    border-color: #d9363e
}

.ant-btn-background-ghost.ant-btn-danger.active>a:only-child,.ant-btn-background-ghost.ant-btn-danger:active>a:only-child {
    color: currentColor
}

.ant-btn-background-ghost.ant-btn-danger.active>a:only-child:after,.ant-btn-background-ghost.ant-btn-danger:active>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-background-ghost.ant-btn-danger-disabled,.ant-btn-background-ghost.ant-btn-danger-disabled.active,.ant-btn-background-ghost.ant-btn-danger-disabled:active,.ant-btn-background-ghost.ant-btn-danger-disabled:focus,.ant-btn-background-ghost.ant-btn-danger-disabled:hover,.ant-btn-background-ghost.ant-btn-danger.disabled,.ant-btn-background-ghost.ant-btn-danger.disabled.active,.ant-btn-background-ghost.ant-btn-danger.disabled:active,.ant-btn-background-ghost.ant-btn-danger.disabled:focus,.ant-btn-background-ghost.ant-btn-danger.disabled:hover,.ant-btn-background-ghost.ant-btn-danger[disabled],.ant-btn-background-ghost.ant-btn-danger[disabled].active,.ant-btn-background-ghost.ant-btn-danger[disabled]:active,.ant-btn-background-ghost.ant-btn-danger[disabled]:focus,.ant-btn-background-ghost.ant-btn-danger[disabled]:hover {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none
}

.ant-btn-background-ghost.ant-btn-danger-disabled.active>a:only-child,.ant-btn-background-ghost.ant-btn-danger-disabled:active>a:only-child,.ant-btn-background-ghost.ant-btn-danger-disabled:focus>a:only-child,.ant-btn-background-ghost.ant-btn-danger-disabled:hover>a:only-child,.ant-btn-background-ghost.ant-btn-danger-disabled>a:only-child,.ant-btn-background-ghost.ant-btn-danger.disabled.active>a:only-child,.ant-btn-background-ghost.ant-btn-danger.disabled:active>a:only-child,.ant-btn-background-ghost.ant-btn-danger.disabled:focus>a:only-child,.ant-btn-background-ghost.ant-btn-danger.disabled:hover>a:only-child,.ant-btn-background-ghost.ant-btn-danger.disabled>a:only-child,.ant-btn-background-ghost.ant-btn-danger[disabled].active>a:only-child,.ant-btn-background-ghost.ant-btn-danger[disabled]:active>a:only-child,.ant-btn-background-ghost.ant-btn-danger[disabled]:focus>a:only-child,.ant-btn-background-ghost.ant-btn-danger[disabled]:hover>a:only-child,.ant-btn-background-ghost.ant-btn-danger[disabled]>a:only-child {
    color: currentColor
}

.ant-btn-background-ghost.ant-btn-danger-disabled.active>a:only-child:after,.ant-btn-background-ghost.ant-btn-danger-disabled:active>a:only-child:after,.ant-btn-background-ghost.ant-btn-danger-disabled:focus>a:only-child:after,.ant-btn-background-ghost.ant-btn-danger-disabled:hover>a:only-child:after,.ant-btn-background-ghost.ant-btn-danger-disabled>a:only-child:after,.ant-btn-background-ghost.ant-btn-danger.disabled.active>a:only-child:after,.ant-btn-background-ghost.ant-btn-danger.disabled:active>a:only-child:after,.ant-btn-background-ghost.ant-btn-danger.disabled:focus>a:only-child:after,.ant-btn-background-ghost.ant-btn-danger.disabled:hover>a:only-child:after,.ant-btn-background-ghost.ant-btn-danger.disabled>a:only-child:after,.ant-btn-background-ghost.ant-btn-danger[disabled].active>a:only-child:after,.ant-btn-background-ghost.ant-btn-danger[disabled]:active>a:only-child:after,.ant-btn-background-ghost.ant-btn-danger[disabled]:focus>a:only-child:after,.ant-btn-background-ghost.ant-btn-danger[disabled]:hover>a:only-child:after,.ant-btn-background-ghost.ant-btn-danger[disabled]>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-background-ghost.ant-btn-dangerous {
    color: #ff4d4f;
    background-color: transparent;
    border-color: #ff4d4f;
    text-shadow: none
}

.ant-btn-background-ghost.ant-btn-dangerous>a:only-child {
    color: currentColor
}

.ant-btn-background-ghost.ant-btn-dangerous>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-background-ghost.ant-btn-dangerous:focus,.ant-btn-background-ghost.ant-btn-dangerous:hover {
    color: #ff7875;
    background-color: transparent;
    border-color: #ff7875
}

.ant-btn-background-ghost.ant-btn-dangerous:focus>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous:hover>a:only-child {
    color: currentColor
}

.ant-btn-background-ghost.ant-btn-dangerous:focus>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous:hover>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-background-ghost.ant-btn-dangerous.active,.ant-btn-background-ghost.ant-btn-dangerous:active {
    color: #d9363e;
    background-color: transparent;
    border-color: #d9363e
}

.ant-btn-background-ghost.ant-btn-dangerous.active>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous:active>a:only-child {
    color: currentColor
}

.ant-btn-background-ghost.ant-btn-dangerous.active>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous:active>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-background-ghost.ant-btn-dangerous-disabled,.ant-btn-background-ghost.ant-btn-dangerous-disabled.active,.ant-btn-background-ghost.ant-btn-dangerous-disabled:active,.ant-btn-background-ghost.ant-btn-dangerous-disabled:focus,.ant-btn-background-ghost.ant-btn-dangerous-disabled:hover,.ant-btn-background-ghost.ant-btn-dangerous.disabled,.ant-btn-background-ghost.ant-btn-dangerous.disabled.active,.ant-btn-background-ghost.ant-btn-dangerous.disabled:active,.ant-btn-background-ghost.ant-btn-dangerous.disabled:focus,.ant-btn-background-ghost.ant-btn-dangerous.disabled:hover,.ant-btn-background-ghost.ant-btn-dangerous[disabled],.ant-btn-background-ghost.ant-btn-dangerous[disabled].active,.ant-btn-background-ghost.ant-btn-dangerous[disabled]:active,.ant-btn-background-ghost.ant-btn-dangerous[disabled]:focus,.ant-btn-background-ghost.ant-btn-dangerous[disabled]:hover {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none
}

.ant-btn-background-ghost.ant-btn-dangerous-disabled.active>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous-disabled:active>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous-disabled:focus>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous-disabled:hover>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous-disabled>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.disabled.active>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.disabled:active>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.disabled:focus>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.disabled:hover>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.disabled>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous[disabled].active>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous[disabled]:active>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous[disabled]:focus>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous[disabled]:hover>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous[disabled]>a:only-child {
    color: currentColor
}

.ant-btn-background-ghost.ant-btn-dangerous-disabled.active>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous-disabled:active>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous-disabled:focus>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous-disabled:hover>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous-disabled>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous.disabled.active>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous.disabled:active>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous.disabled:focus>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous.disabled:hover>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous.disabled>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous[disabled].active>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous[disabled]:active>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous[disabled]:focus>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous[disabled]:hover>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous[disabled]>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link {
    color: #ff4d4f;
    background-color: transparent;
    border-color: transparent;
    text-shadow: none
}

.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link>a:only-child {
    color: currentColor
}

.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:focus,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:hover {
    color: #ff7875;
    background-color: transparent;
    border-color: transparent
}

.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:focus>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:hover>a:only-child {
    color: currentColor
}

.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:focus>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:hover>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link.active,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:active {
    color: #d9363e;
    background-color: transparent;
    border-color: transparent
}

.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link.active>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:active>a:only-child {
    color: currentColor
}

.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link.active>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:active>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link-disabled,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link-disabled.active,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link-disabled:active,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link-disabled:focus,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link-disabled:hover,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link.disabled,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link.disabled.active,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link.disabled:active,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link.disabled:focus,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link.disabled:hover,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled],.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled].active,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:active,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:focus,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:hover {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none
}

.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link-disabled.active>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link-disabled:active>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link-disabled:focus>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link-disabled:hover>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link-disabled>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link.disabled.active>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link.disabled:active>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link.disabled:focus>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link.disabled:hover>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link.disabled>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled].active>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:active>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:focus>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:hover>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]>a:only-child {
    color: currentColor
}

.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link-disabled.active>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link-disabled:active>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link-disabled:focus>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link-disabled:hover>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link-disabled>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link.disabled.active>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link.disabled:active>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link.disabled:focus>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link.disabled:hover>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link.disabled>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled].active>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:active>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:focus>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:hover>a:only-child:after,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-background-ghost.ant-btn-link {
    color: #1890ff;
    background-color: transparent;
    border-color: transparent;
    text-shadow: none;
    color: #fff
}

.ant-btn-background-ghost.ant-btn-link>a:only-child {
    color: currentColor
}

.ant-btn-background-ghost.ant-btn-link>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-background-ghost.ant-btn-link:focus,.ant-btn-background-ghost.ant-btn-link:hover {
    color: #40a9ff;
    background-color: transparent;
    border-color: transparent
}

.ant-btn-background-ghost.ant-btn-link:focus>a:only-child,.ant-btn-background-ghost.ant-btn-link:hover>a:only-child {
    color: currentColor
}

.ant-btn-background-ghost.ant-btn-link:focus>a:only-child:after,.ant-btn-background-ghost.ant-btn-link:hover>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-background-ghost.ant-btn-link.active,.ant-btn-background-ghost.ant-btn-link:active {
    color: #096dd9;
    background-color: transparent;
    border-color: transparent
}

.ant-btn-background-ghost.ant-btn-link.active>a:only-child,.ant-btn-background-ghost.ant-btn-link:active>a:only-child {
    color: currentColor
}

.ant-btn-background-ghost.ant-btn-link.active>a:only-child:after,.ant-btn-background-ghost.ant-btn-link:active>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-background-ghost.ant-btn-link-disabled,.ant-btn-background-ghost.ant-btn-link-disabled.active,.ant-btn-background-ghost.ant-btn-link-disabled:active,.ant-btn-background-ghost.ant-btn-link-disabled:focus,.ant-btn-background-ghost.ant-btn-link-disabled:hover,.ant-btn-background-ghost.ant-btn-link.disabled,.ant-btn-background-ghost.ant-btn-link.disabled.active,.ant-btn-background-ghost.ant-btn-link.disabled:active,.ant-btn-background-ghost.ant-btn-link.disabled:focus,.ant-btn-background-ghost.ant-btn-link.disabled:hover,.ant-btn-background-ghost.ant-btn-link[disabled],.ant-btn-background-ghost.ant-btn-link[disabled].active,.ant-btn-background-ghost.ant-btn-link[disabled]:active,.ant-btn-background-ghost.ant-btn-link[disabled]:focus,.ant-btn-background-ghost.ant-btn-link[disabled]:hover {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none
}

.ant-btn-background-ghost.ant-btn-link-disabled.active>a:only-child,.ant-btn-background-ghost.ant-btn-link-disabled:active>a:only-child,.ant-btn-background-ghost.ant-btn-link-disabled:focus>a:only-child,.ant-btn-background-ghost.ant-btn-link-disabled:hover>a:only-child,.ant-btn-background-ghost.ant-btn-link-disabled>a:only-child,.ant-btn-background-ghost.ant-btn-link.disabled.active>a:only-child,.ant-btn-background-ghost.ant-btn-link.disabled:active>a:only-child,.ant-btn-background-ghost.ant-btn-link.disabled:focus>a:only-child,.ant-btn-background-ghost.ant-btn-link.disabled:hover>a:only-child,.ant-btn-background-ghost.ant-btn-link.disabled>a:only-child,.ant-btn-background-ghost.ant-btn-link[disabled].active>a:only-child,.ant-btn-background-ghost.ant-btn-link[disabled]:active>a:only-child,.ant-btn-background-ghost.ant-btn-link[disabled]:focus>a:only-child,.ant-btn-background-ghost.ant-btn-link[disabled]:hover>a:only-child,.ant-btn-background-ghost.ant-btn-link[disabled]>a:only-child {
    color: currentColor
}

.ant-btn-background-ghost.ant-btn-link-disabled.active>a:only-child:after,.ant-btn-background-ghost.ant-btn-link-disabled:active>a:only-child:after,.ant-btn-background-ghost.ant-btn-link-disabled:focus>a:only-child:after,.ant-btn-background-ghost.ant-btn-link-disabled:hover>a:only-child:after,.ant-btn-background-ghost.ant-btn-link-disabled>a:only-child:after,.ant-btn-background-ghost.ant-btn-link.disabled.active>a:only-child:after,.ant-btn-background-ghost.ant-btn-link.disabled:active>a:only-child:after,.ant-btn-background-ghost.ant-btn-link.disabled:focus>a:only-child:after,.ant-btn-background-ghost.ant-btn-link.disabled:hover>a:only-child:after,.ant-btn-background-ghost.ant-btn-link.disabled>a:only-child:after,.ant-btn-background-ghost.ant-btn-link[disabled].active>a:only-child:after,.ant-btn-background-ghost.ant-btn-link[disabled]:active>a:only-child:after,.ant-btn-background-ghost.ant-btn-link[disabled]:focus>a:only-child:after,.ant-btn-background-ghost.ant-btn-link[disabled]:hover>a:only-child:after,.ant-btn-background-ghost.ant-btn-link[disabled]>a:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: ''
}

.ant-btn-two-chinese-chars:first-letter {
    letter-spacing: .34em
}

.ant-btn-two-chinese-chars>:not(.anticon) {
    margin-right: -.34em;
    letter-spacing: .34em
}

.ant-btn-block {
    width: 100%
}

.ant-btn:empty {
    display: inline-block;
    width: 0;
    visibility: hidden;
    content: '\A0'
}

a.ant-btn {
    padding-top: .1px;
    line-height: 30px
}

a.ant-btn-lg {
    line-height: 38px
}

a.ant-btn-sm {
    line-height: 22px
}

.ant-btn-rtl {
    direction: rtl
}

.ant-btn-group-rtl.ant-btn-group .ant-btn-primary+.ant-btn-primary,.ant-btn-group-rtl.ant-btn-group .ant-btn-primary:last-child:not(:first-child) {
    border-right-color: #40a9ff;
    border-left-color: #d9d9d9
}

.ant-btn-group-rtl.ant-btn-group .ant-btn-primary+.ant-btn-primary[disabled],.ant-btn-group-rtl.ant-btn-group .ant-btn-primary:last-child:not(:first-child)[disabled] {
    border-right-color: #d9d9d9;
    border-left-color: #40a9ff
}

.ant-btn-rtl.ant-btn>.ant-btn-loading-icon .anticon {
    padding-right: 0;
    padding-left: 8px
}

.ant-btn-rtl.ant-btn>.anticon+span,.ant-btn-rtl.ant-btn>span+.anticon {
    margin-right: 8px;
    margin-left: 0
}

.ant-picker-calendar {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    background: #fff
}

.ant-picker-calendar-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
    padding: 12px 0
}

.ant-picker-calendar-header .ant-picker-calendar-year-select {
    min-width: 80px
}

.ant-picker-calendar-header .ant-picker-calendar-month-select {
    min-width: 70px;
    margin-left: 8px
}

.ant-picker-calendar-header .ant-picker-calendar-mode-switch {
    margin-left: 8px
}

.ant-picker-calendar .ant-picker-panel {
    background: #fff;
    border: 0;
    border-top: 1px solid #f0f0f0;
    border-radius: 0
}

.ant-picker-calendar .ant-picker-panel .ant-picker-date-panel,.ant-picker-calendar .ant-picker-panel .ant-picker-month-panel {
    width: auto
}

.ant-picker-calendar .ant-picker-panel .ant-picker-body {
    padding: 8px 0
}

.ant-picker-calendar .ant-picker-panel .ant-picker-content {
    width: 100%
}

.ant-picker-calendar-mini {
    border-radius: 2px
}

.ant-picker-calendar-mini .ant-picker-calendar-header {
    padding-right: 8px;
    padding-left: 8px
}

.ant-picker-calendar-mini .ant-picker-panel {
    border-radius: 0 0 2px 2px
}

.ant-picker-calendar-mini .ant-picker-content {
    height: 256px
}

.ant-picker-calendar-mini .ant-picker-content th {
    height: auto;
    padding: 0;
    line-height: 18px
}

.ant-picker-calendar-full .ant-picker-panel {
    display: block;
    width: 100%;
    text-align: right;
    background: #fff;
    border: 0
}

.ant-picker-calendar-full .ant-picker-panel .ant-picker-body td,.ant-picker-calendar-full .ant-picker-panel .ant-picker-body th {
    padding: 0
}

.ant-picker-calendar-full .ant-picker-panel .ant-picker-body th {
    height: auto;
    padding: 0 12px 5px 0;
    line-height: 18px
}

.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell:before {
    display: none
}

.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell:hover .ant-picker-calendar-date {
    background: #f5f5f5
}

.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell .ant-picker-calendar-date-today:before {
    display: none
}

.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell-selected .ant-picker-calendar-date,.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell-selected .ant-picker-calendar-date-today,.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell-selected:hover .ant-picker-calendar-date,.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell-selected:hover .ant-picker-calendar-date-today {
    background: #e6f7ff
}

.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell-selected .ant-picker-calendar-date-today .ant-picker-calendar-date-value,.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell-selected .ant-picker-calendar-date .ant-picker-calendar-date-value,.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell-selected:hover .ant-picker-calendar-date-today .ant-picker-calendar-date-value,.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell-selected:hover .ant-picker-calendar-date .ant-picker-calendar-date-value {
    color: #1890ff
}

.ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date {
    display: block;
    width: auto;
    height: auto;
    margin: 0 4px;
    padding: 4px 8px 0;
    border: 0;
    border-top: 2px solid #f0f0f0;
    border-radius: 0;
    -webkit-transition: background .3s;
    transition: background .3s
}

.ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date-value {
    line-height: 24px;
    -webkit-transition: color .3s;
    transition: color .3s
}

.ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date-content {
    position: static;
    width: auto;
    height: 86px;
    overflow-y: auto;
    color: rgba(0,0,0,.65);
    line-height: 1.5715;
    text-align: left
}

.ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date-today {
    border-color: #1890ff
}

.ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date-today .ant-picker-calendar-date-value {
    color: rgba(0,0,0,.65)
}

@media only screen and (max-width: 480px) {
    .ant-picker-calendar-header {
        display:block
    }

    .ant-picker-calendar-header .ant-picker-calendar-year-select {
        width: 50%
    }

    .ant-picker-calendar-header .ant-picker-calendar-month-select {
        width: calc(50% - 8px)
    }

    .ant-picker-calendar-header .ant-picker-calendar-mode-switch {
        width: 100%;
        margin-top: 8px;
        margin-left: 0
    }

    .ant-picker-calendar-header .ant-picker-calendar-mode-switch>label {
        width: 50%;
        text-align: center
    }
}

.ant-picker-calendar-rtl {
    direction: rtl
}

.ant-picker-calendar-rtl .ant-picker-calendar-header .ant-picker-calendar-mode-switch,.ant-picker-calendar-rtl .ant-picker-calendar-header .ant-picker-calendar-month-select {
    margin-right: 8px;
    margin-left: 0
}

.ant-picker-calendar-rtl.ant-picker-calendar-full .ant-picker-panel {
    text-align: left
}

.ant-picker-calendar-rtl.ant-picker-calendar-full .ant-picker-panel .ant-picker-body th {
    padding: 0 0 5px 12px
}

.ant-radio-group {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    display: inline-block;
    line-height: unset
}

.ant-radio-group .ant-badge-count {
    z-index: 1
}

.ant-radio-group>.ant-badge:not(:first-child)>.ant-radio-button-wrapper {
    border-left: none
}

.ant-radio-wrapper {
    margin: 0;
    margin-right: 8px
}

.ant-radio,.ant-radio-wrapper {
    box-sizing: border-box;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    display: inline-block;
    white-space: nowrap;
    cursor: pointer
}

.ant-radio {
    margin: 0;
    top: 0;
    line-height: 1;
    vertical-align: sub;
    outline: none
}

.ant-radio-input:focus+.ant-radio-inner,.ant-radio-wrapper:hover .ant-radio,.ant-radio:hover .ant-radio-inner {
    border-color: #1890ff
}

.ant-radio-input:focus+.ant-radio-inner {
    box-shadow: 0 0 0 3px rgba(24,144,255,.08)
}

.ant-radio-checked:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #1890ff;
    border-radius: 50%;
    visibility: hidden;
    -webkit-animation: antRadioEffect .36s ease-in-out;
    animation: antRadioEffect .36s ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    content: ''
}

.ant-radio-wrapper:hover .ant-radio:after,.ant-radio:hover:after {
    visibility: visible
}

.ant-radio-inner {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 16px;
    height: 16px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 100px;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-radio-inner:after {
    position: absolute;
    top: 3px;
    left: 3px;
    display: table;
    width: 8px;
    height: 8px;
    background-color: #1890ff;
    border-top: 0;
    border-left: 0;
    border-radius: 8px;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    opacity: 0;
    -webkit-transition: all .3s cubic-bezier(.78,.14,.15,.86);
    transition: all .3s cubic-bezier(.78,.14,.15,.86);
    content: ' '
}

.ant-radio-input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    cursor: pointer;
    opacity: 0
}

.ant-radio-checked .ant-radio-inner {
    border-color: #1890ff
}

.ant-radio-checked .ant-radio-inner:after {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
    -webkit-transition: all .3s cubic-bezier(.78,.14,.15,.86);
    transition: all .3s cubic-bezier(.78,.14,.15,.86)
}

.ant-radio-disabled .ant-radio-inner {
    background-color: #f5f5f5;
    border-color: #d9d9d9!important;
    cursor: not-allowed
}

.ant-radio-disabled .ant-radio-inner:after {
    background-color: rgba(0,0,0,.2)
}

.ant-radio-disabled .ant-radio-input {
    cursor: not-allowed
}

.ant-radio-disabled+span {
    color: rgba(0,0,0,.25);
    cursor: not-allowed
}

span.ant-radio+* {
    padding-right: 8px;
    padding-left: 8px
}

.ant-radio-button-wrapper {
    position: relative;
    display: inline-block;
    height: 32px;
    margin: 0;
    padding: 0 15px;
    color: rgba(0,0,0,.65);
    line-height: 30px;
    background: #fff;
    border: 1px solid #d9d9d9;
    border-top-width: 1.02px;
    border-left-width: 0;
    cursor: pointer;
    -webkit-transition: color .3s,background .3s,border-color .3s,-webkit-box-shadow .3s;
    -webkit-transition: color .3s,background .3s,border-color .3s,box-shadow .3s;
    transition: color .3s,background .3s,border-color .3s,box-shadow .3s
}

.ant-radio-button-wrapper a {
    color: rgba(0,0,0,.65)
}

.ant-radio-button-wrapper>.ant-radio-button {
    display: block;
    width: 0;
    height: 0;
    margin-left: 0
}

.ant-radio-group-large .ant-radio-button-wrapper {
    height: 40px;
    font-size: 16px;
    line-height: 38px
}

.ant-radio-group-small .ant-radio-button-wrapper {
    height: 24px;
    padding: 0 7px;
    line-height: 22px
}

.ant-radio-button-wrapper:not(:first-child):before {
    position: absolute;
    top: -1px;
    left: -1px;
    display: block;
    box-sizing: content-box;
    width: 1px;
    height: 100%;
    padding: 1px 0;
    background-color: #d9d9d9;
    -webkit-transition: background-color .3s;
    transition: background-color .3s;
    content: ''
}

.ant-radio-button-wrapper:first-child {
    border-left: 1px solid #d9d9d9;
    border-radius: 2px 0 0 2px
}

.ant-radio-button-wrapper:last-child {
    border-radius: 0 2px 2px 0
}

.ant-radio-button-wrapper:first-child:last-child {
    border-radius: 2px
}

.ant-radio-button-wrapper:hover {
    position: relative;
    color: #1890ff
}

.ant-radio-button-wrapper:focus-within {
    box-shadow: 0 0 0 3px rgba(24,144,255,.08)
}

.ant-radio-button-wrapper .ant-radio-inner,.ant-radio-button-wrapper input[type=checkbox],.ant-radio-button-wrapper input[type=radio] {
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none
}

.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    z-index: 1;
    color: #1890ff;
    background: #fff;
    border-color: #1890ff
}

.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):before {
    background-color: #1890ff
}

.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):first-child {
    border-color: #1890ff
}

.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
    color: #40a9ff;
    border-color: #40a9ff
}

.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover:before {
    background-color: #40a9ff
}

.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active {
    color: #096dd9;
    border-color: #096dd9
}

.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active:before {
    background-color: #096dd9
}

.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
    box-shadow: 0 0 0 3px rgba(24,144,255,.08)
}

.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    color: #fff;
    background: #1890ff;
    border-color: #1890ff
}

.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
    color: #fff;
    background: #40a9ff;
    border-color: #40a9ff
}

.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active {
    color: #fff;
    background: #096dd9;
    border-color: #096dd9
}

.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
    box-shadow: 0 0 0 3px rgba(24,144,255,.08)
}

.ant-radio-button-wrapper-disabled {
    cursor: not-allowed
}

.ant-radio-button-wrapper-disabled,.ant-radio-button-wrapper-disabled:first-child,.ant-radio-button-wrapper-disabled:hover {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9
}

.ant-radio-button-wrapper-disabled:first-child {
    border-left-color: #d9d9d9
}

.ant-radio-button-wrapper-disabled.ant-radio-button-wrapper-checked {
    color: #fff;
    background-color: #e6e6e6;
    border-color: #d9d9d9;
    box-shadow: none
}

@-webkit-keyframes antRadioEffect {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: .5
    }

    to {
        -webkit-transform: scale(1.6);
        transform: scale(1.6);
        opacity: 0
    }
}

@keyframes antRadioEffect {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: .5
    }

    to {
        -webkit-transform: scale(1.6);
        transform: scale(1.6);
        opacity: 0
    }
}

@supports (-moz-appearance: meterbar) and (background-blend-mode:difference,normal) {
    .ant-radio {
        vertical-align:text-bottom
    }
}

.ant-radio-group.ant-radio-group-rtl {
    direction: rtl
}

.ant-radio-wrapper.ant-radio-wrapper-rtl {
    margin-right: 0;
    margin-left: 8px;
    direction: rtl
}

.ant-radio-button-wrapper.ant-radio-button-wrapper-rtl {
    border-right-width: 0;
    border-left-width: 1px
}

.ant-radio-button-wrapper.ant-radio-button-wrapper-rtl.ant-radio-button-wrapper:not(:first-child):before {
    right: -1px;
    left: 0
}

.ant-radio-button-wrapper.ant-radio-button-wrapper-rtl.ant-radio-button-wrapper:first-child {
    border-right: 1px solid #d9d9d9;
    border-radius: 0 2px 2px 0
}

.ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child {
    border-right-color: #40a9ff
}

.ant-radio-button-wrapper.ant-radio-button-wrapper-rtl.ant-radio-button-wrapper:last-child {
    border-radius: 2px 0 0 2px
}

.ant-radio-button-wrapper.ant-radio-button-wrapper-rtl.ant-radio-button-wrapper-disabled:first-child {
    border-right-color: #d9d9d9
}

.ant-picker-panel {
    display: inline-block;
    text-align: center;
    background: #fff;
    border: 1px solid #f0f0f0;
    border-radius: 2px;
    outline: none
}

.ant-picker-panel-focused {
    border-color: #1890ff
}

.ant-picker-date-panel,.ant-picker-decade-panel,.ant-picker-month-panel,.ant-picker-quarter-panel,.ant-picker-time-panel,.ant-picker-week-panel,.ant-picker-year-panel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
    width: 280px
}

.ant-picker-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    padding: 0 8px;
    color: rgba(0,0,0,.85);
    border-bottom: 1px solid #f0f0f0
}

.ant-picker-header>* {
    -webkit-box-flex: 0;
    -ms-flex: none;
    -webkit-flex: none;
    flex: none
}

.ant-picker-header button {
    padding: 0;
    color: rgba(0,0,0,.25);
    line-height: 40px;
    background: transparent;
    border: 0;
    cursor: pointer;
    -webkit-transition: color .3s;
    transition: color .3s
}

.ant-picker-header>button {
    min-width: 1.6em;
    font-size: 14px
}

.ant-picker-header>button:hover {
    color: rgba(0,0,0,.65)
}

.ant-picker-header-view {
    -webkit-box-flex: 1;
    -ms-flex: auto;
    -webkit-flex: auto;
    flex: auto;
    font-weight: 500;
    line-height: 40px
}

.ant-picker-header-view button {
    color: inherit;
    font-weight: inherit
}

.ant-picker-header-view button:not(:first-child) {
    margin-left: 8px
}

.ant-picker-header-view button:hover {
    color: #1890ff
}

.ant-picker-next-icon,.ant-picker-prev-icon,.ant-picker-super-next-icon,.ant-picker-super-prev-icon {
    position: relative;
    display: inline-block;
    width: 7px;
    height: 7px
}

.ant-picker-next-icon:before,.ant-picker-prev-icon:before,.ant-picker-super-next-icon:before,.ant-picker-super-prev-icon:before {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 7px;
    height: 7px;
    border: 0 solid currentColor;
    border-width: 1.5px 0 0 1.5px;
    content: ''
}

.ant-picker-super-next-icon:after,.ant-picker-super-prev-icon:after {
    position: absolute;
    top: 4px;
    left: 4px;
    display: inline-block;
    width: 7px;
    height: 7px;
    border: 0 solid currentColor;
    border-width: 1.5px 0 0 1.5px;
    content: ''
}

.ant-picker-prev-icon,.ant-picker-super-prev-icon {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg)
}

.ant-picker-next-icon,.ant-picker-super-next-icon {
    -webkit-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    transform: rotate(135deg)
}

.ant-picker-content {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse
}

.ant-picker-content td,.ant-picker-content th {
    position: relative;
    min-width: 24px;
    font-weight: 400
}

.ant-picker-content th {
    height: 30px;
    color: rgba(0,0,0,.65);
    line-height: 30px
}

.ant-picker-cell {
    padding: 3px 0;
    color: rgba(0,0,0,.25);
    cursor: pointer
}

.ant-picker-cell-in-view {
    color: rgba(0,0,0,.65)
}

.ant-picker-cell-disabled {
    cursor: not-allowed
}

.ant-picker-cell:before {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    z-index: 1;
    height: 24px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    content: ''
}

.ant-picker-cell:hover:not(.ant-picker-cell-in-view) .ant-picker-cell-inner,.ant-picker-cell:hover:not(.ant-picker-cell-selected):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end):not(.ant-picker-cell-range-hover-start):not(.ant-picker-cell-range-hover-end) .ant-picker-cell-inner {
    background: #f5f5f5
}

.ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    border: 1px solid #1890ff;
    border-radius: 2px;
    content: ''
}

.ant-picker-cell-in-view.ant-picker-cell-in-range {
    position: relative
}

.ant-picker-cell-in-view.ant-picker-cell-in-range:before {
    background: #e6f7ff
}

.ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner,.ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner,.ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
    color: #fff;
    background: #1890ff
}

.ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single):before,.ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single):before {
    background: #e6f7ff
}

.ant-picker-cell-in-view.ant-picker-cell-range-start:before {
    left: 50%
}

.ant-picker-cell-in-view.ant-picker-cell-range-end:before {
    right: 50%
}

.ant-picker-cell-in-view.ant-picker-cell-range-hover-end.ant-picker-cell-range-end-single:after,.ant-picker-cell-in-view.ant-picker-cell-range-hover-end:not(.ant-picker-cell-in-range):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end):after,.ant-picker-cell-in-view.ant-picker-cell-range-hover-start.ant-picker-cell-range-start-single:after,.ant-picker-cell-in-view.ant-picker-cell-range-hover-start:not(.ant-picker-cell-in-range):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end):after,.ant-picker-cell-in-view.ant-picker-cell-range-hover:not(.ant-picker-cell-in-range):after {
    position: absolute;
    top: 50%;
    z-index: 0;
    height: 24px;
    border-top: 1px dashed #7ec1ff;
    border-bottom: 1px dashed #7ec1ff;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    content: ''
}

.ant-picker-cell-range-hover-end:after,.ant-picker-cell-range-hover-start:after,.ant-picker-cell-range-hover:after {
    right: 0;
    left: 2px
}

.ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover:before,.ant-picker-cell-in-view.ant-picker-cell-range-end.ant-picker-cell-range-hover:before,.ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single).ant-picker-cell-range-hover-end:before,.ant-picker-cell-in-view.ant-picker-cell-range-start.ant-picker-cell-range-hover:before,.ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single).ant-picker-cell-range-hover-start:before,.ant-picker-panel>:not(.ant-picker-date-panel) .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end:before,.ant-picker-panel>:not(.ant-picker-date-panel) .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start:before {
    background: #cbe6ff
}

.ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single):not(.ant-picker-cell-range-end) .ant-picker-cell-inner {
    border-radius: 2px 0 0 2px
}

.ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single):not(.ant-picker-cell-range-start) .ant-picker-cell-inner {
    border-radius: 0 2px 2px 0
}

.ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end .ant-picker-cell-inner:after,.ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start .ant-picker-cell-inner:after {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: -1;
    background: #cbe6ff;
    content: ''
}

.ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start .ant-picker-cell-inner:after {
    right: -7px;
    left: 0
}

.ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end .ant-picker-cell-inner:after {
    right: 0;
    left: -7px
}

.ant-picker-cell-range-hover.ant-picker-cell-range-start:after {
    right: 50%
}

.ant-picker-cell-range-hover.ant-picker-cell-range-end:after {
    left: 50%
}

.ant-picker-cell-in-view.ant-picker-cell-range-hover-edge-start:not(.ant-picker-cell-range-hover-edge-start-near-range):after,.ant-picker-cell-in-view.ant-picker-cell-range-hover-start:after,tr>.ant-picker-cell-in-view.ant-picker-cell-range-hover-end:first-child:after,tr>.ant-picker-cell-in-view.ant-picker-cell-range-hover:first-child:after {
    left: 6px;
    border-left: 1px dashed #7ec1ff;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px
}

.ant-picker-cell-in-view.ant-picker-cell-range-hover-edge-end:not(.ant-picker-cell-range-hover-edge-end-near-range):after,.ant-picker-cell-in-view.ant-picker-cell-range-hover-end:after,tr>.ant-picker-cell-in-view.ant-picker-cell-range-hover-start:last-child:after,tr>.ant-picker-cell-in-view.ant-picker-cell-range-hover:last-child:after {
    right: 6px;
    border-right: 1px dashed #7ec1ff;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px
}

.ant-picker-cell-disabled {
    pointer-events: none
}

.ant-picker-cell-disabled .ant-picker-cell-inner {
    color: rgba(0,0,0,.25);
    background: transparent
}

.ant-picker-cell-disabled:before {
    background: #f5f5f5
}

.ant-picker-cell-disabled.ant-picker-cell-today .ant-picker-cell-inner:before {
    border-color: rgba(0,0,0,.25)
}

.ant-picker-decade-panel .ant-picker-content,.ant-picker-month-panel .ant-picker-content,.ant-picker-quarter-panel .ant-picker-content,.ant-picker-year-panel .ant-picker-content {
    height: 264px
}

.ant-picker-decade-panel .ant-picker-cell-inner,.ant-picker-month-panel .ant-picker-cell-inner,.ant-picker-quarter-panel .ant-picker-cell-inner,.ant-picker-year-panel .ant-picker-cell-inner {
    padding: 0 8px
}

.ant-picker-decade-panel .ant-picker-cell-disabled .ant-picker-cell-inner,.ant-picker-month-panel .ant-picker-cell-disabled .ant-picker-cell-inner,.ant-picker-quarter-panel .ant-picker-cell-disabled .ant-picker-cell-inner,.ant-picker-year-panel .ant-picker-cell-disabled .ant-picker-cell-inner {
    background: #f5f5f5
}

.ant-picker-quarter-panel .ant-picker-content {
    height: 56px
}

.ant-picker-footer {
    line-height: 38px;
    text-align: center;
    border-bottom: 1px solid transparent
}

.ant-picker-panel .ant-picker-footer {
    border-top: 1px solid #f0f0f0
}

.ant-picker-footer-extra {
    padding: 0 12px;
    line-height: 38px;
    text-align: left
}

.ant-picker-footer-extra:not(:last-child) {
    border-bottom: 1px solid #f0f0f0
}

.ant-picker-now {
    text-align: left
}

.ant-picker-today-btn {
    color: #1890ff
}

.ant-picker-today-btn:hover {
    color: #40a9ff
}

.ant-picker-today-btn:active {
    color: #096dd9
}

.ant-picker-decade-panel .ant-picker-cell-inner {
    padding: 0 4px
}

.ant-picker-decade-panel .ant-picker-cell:before {
    display: none
}

.ant-picker-month-panel .ant-picker-body,.ant-picker-quarter-panel .ant-picker-body,.ant-picker-year-panel .ant-picker-body {
    padding: 0 8px
}

.ant-picker-month-panel .ant-picker-cell-inner,.ant-picker-quarter-panel .ant-picker-cell-inner,.ant-picker-year-panel .ant-picker-cell-inner {
    width: 60px
}

.ant-picker-month-panel .ant-picker-cell-range-hover-start:after,.ant-picker-quarter-panel .ant-picker-cell-range-hover-start:after,.ant-picker-year-panel .ant-picker-cell-range-hover-start:after {
    left: 14px;
    border-left: 1px dashed #7ec1ff;
    border-radius: 2px 0 0 2px
}

.ant-picker-month-panel .ant-picker-cell-range-hover-end:after,.ant-picker-panel-rtl .ant-picker-month-panel .ant-picker-cell-range-hover-start:after,.ant-picker-panel-rtl .ant-picker-quarter-panel .ant-picker-cell-range-hover-start:after,.ant-picker-panel-rtl .ant-picker-year-panel .ant-picker-cell-range-hover-start:after,.ant-picker-quarter-panel .ant-picker-cell-range-hover-end:after,.ant-picker-year-panel .ant-picker-cell-range-hover-end:after {
    right: 14px;
    border-right: 1px dashed #7ec1ff;
    border-radius: 0 2px 2px 0
}

.ant-picker-panel-rtl .ant-picker-month-panel .ant-picker-cell-range-hover-end:after,.ant-picker-panel-rtl .ant-picker-quarter-panel .ant-picker-cell-range-hover-end:after,.ant-picker-panel-rtl .ant-picker-year-panel .ant-picker-cell-range-hover-end:after {
    left: 14px;
    border-left: 1px dashed #7ec1ff;
    border-radius: 2px 0 0 2px
}

.ant-picker-week-panel .ant-picker-body {
    padding: 8px 12px
}

.ant-picker-week-panel .ant-picker-cell-selected .ant-picker-cell-inner,.ant-picker-week-panel .ant-picker-cell .ant-picker-cell-inner,.ant-picker-week-panel .ant-picker-cell:hover .ant-picker-cell-inner {
    background: transparent!important
}

.ant-picker-week-panel-row td {
    -webkit-transition: background .3s;
    transition: background .3s
}

.ant-picker-week-panel-row:hover td {
    background: #f5f5f5
}

.ant-picker-week-panel-row-selected:hover td,.ant-picker-week-panel-row-selected td {
    background: #1890ff
}

.ant-picker-week-panel-row-selected:hover td.ant-picker-cell-week,.ant-picker-week-panel-row-selected td.ant-picker-cell-week {
    color: hsla(0,0%,100%,.5)
}

.ant-picker-week-panel-row-selected:hover td.ant-picker-cell-today .ant-picker-cell-inner:before,.ant-picker-week-panel-row-selected td.ant-picker-cell-today .ant-picker-cell-inner:before {
    border-color: #fff
}

.ant-picker-week-panel-row-selected:hover td .ant-picker-cell-inner,.ant-picker-week-panel-row-selected td .ant-picker-cell-inner {
    color: #fff
}

.ant-picker-date-panel .ant-picker-body {
    padding: 8px 12px
}

.ant-picker-date-panel .ant-picker-content {
    width: 252px
}

.ant-picker-date-panel .ant-picker-content th {
    width: 36px
}

.ant-picker-datetime-panel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex
}

.ant-picker-datetime-panel .ant-picker-time-panel {
    border-left: 1px solid #f0f0f0
}

.ant-picker-datetime-panel .ant-picker-date-panel,.ant-picker-datetime-panel .ant-picker-time-panel {
    -webkit-transition: opacity .3s;
    transition: opacity .3s
}

.ant-picker-datetime-panel-active .ant-picker-date-panel,.ant-picker-datetime-panel-active .ant-picker-time-panel {
    opacity: .3
}

.ant-picker-datetime-panel-active .ant-picker-date-panel-active,.ant-picker-datetime-panel-active .ant-picker-time-panel-active {
    opacity: 1
}

.ant-picker-time-panel {
    width: auto;
    min-width: auto
}

.ant-picker-time-panel .ant-picker-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: auto;
    -webkit-flex: auto;
    flex: auto;
    height: 224px
}

.ant-picker-time-panel-column {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    -webkit-flex: 1 0 auto;
    flex: 1 0 auto;
    width: 56px;
    margin: 0;
    padding: 0 0 194px;
    overflow-y: hidden;
    text-align: left;
    list-style: none;
    -webkit-transition: background .3s;
    transition: background .3s
}

.ant-picker-time-panel-column:not(:first-child) {
    border-left: 1px solid #f0f0f0
}

.ant-picker-time-panel-column-active {
    background: rgba(230,247,255,.2)
}

.ant-picker-time-panel-column:hover {
    overflow-y: auto
}

.ant-picker-time-panel-column>li {
    margin: 0;
    padding: 0
}

.ant-picker-time-panel-column>li.ant-picker-time-panel-cell .ant-picker-time-panel-cell-inner {
    display: block;
    width: 100%;
    height: 28px;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    line-height: 28px;
    text-align: center;
    border-radius: 0;
    cursor: pointer;
    -webkit-transition: background .3s;
    transition: background .3s
}

.ant-picker-time-panel-column>li.ant-picker-time-panel-cell .ant-picker-time-panel-cell-inner:hover {
    background: #f5f5f5
}

.ant-picker-time-panel-column>li.ant-picker-time-panel-cell-selected .ant-picker-time-panel-cell-inner {
    background: #e6f7ff
}

.ant-picker-time-panel-column>li.ant-picker-time-panel-cell-disabled .ant-picker-time-panel-cell-inner {
    color: rgba(0,0,0,.25);
    background: transparent;
    cursor: not-allowed
}

:root .ant-picker-range-wrapper .ant-picker-month-panel .ant-picker-cell,:root .ant-picker-range-wrapper .ant-picker-year-panel .ant-picker-cell,_:-ms-fullscreen .ant-picker-range-wrapper .ant-picker-month-panel .ant-picker-cell,_:-ms-fullscreen .ant-picker-range-wrapper .ant-picker-year-panel .ant-picker-cell {
    padding: 21px 0
}

.ant-picker {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    padding: 4px 11px;
    position: relative;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: -webkit-inline-flex;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    background: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    -webkit-transition: border .3s,-webkit-box-shadow .3s;
    -webkit-transition: border .3s,box-shadow .3s;
    transition: border .3s,box-shadow .3s
}

.ant-picker-focused,.ant-picker:hover {
    border-color: #40a9ff;
    border-right-width: 1px!important
}

.ant-picker-focused {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24,144,255,.2)
}

.ant-picker.ant-picker-disabled {
    background: #f5f5f5;
    border-color: #d9d9d9;
    cursor: not-allowed
}

.ant-picker.ant-picker-disabled .ant-picker-suffix {
    color: rgba(0,0,0,.25)
}

.ant-picker.ant-picker-borderless {
    background-color: transparent!important;
    border-color: transparent!important;
    box-shadow: none!important
}

.ant-picker-input {
    position: relative;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: -webkit-inline-flex;
    display: inline-flex;
    width: 100%
}

.ant-picker-input>input {
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    -webkit-transition: all .3s;
    transition: all .3s;
    -webkit-box-flex: 1;
    -ms-flex: auto;
    -webkit-flex: auto;
    flex: auto;
    min-width: 1px;
    height: auto;
    padding: 0;
    background: transparent;
    border: 0
}

.ant-picker-input>input::-moz-placeholder {
    opacity: 1
}

.ant-picker-input>input::-ms-input-placeholder {
    color: #bfbfbf
}

.ant-picker-input>input::-webkit-input-placeholder {
    color: #bfbfbf
}

.ant-picker-input>input::-moz-placeholder {
    color: #bfbfbf
}

.ant-picker-input>input:-ms-input-placeholder {
    color: #bfbfbf
}

.ant-picker-input>input::placeholder {
    color: #bfbfbf
}

.ant-picker-input>input:placeholder-shown {
    text-overflow: ellipsis
}

.ant-picker-input>input:hover {
    border-color: #40a9ff;
    border-right-width: 1px!important
}

.ant-picker-input>input-focused,.ant-picker-input>input:focus {
    border-color: #40a9ff;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24,144,255,.2)
}

.ant-picker-input>input-disabled {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1
}

.ant-picker-input>input-disabled:hover {
    border-color: #d9d9d9;
    border-right-width: 1px!important
}

.ant-picker-input>input[disabled] {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1
}

.ant-picker-input>input[disabled]:hover {
    border-color: #d9d9d9;
    border-right-width: 1px!important
}

textarea.ant-picker-input>input {
    max-width: 100%;
    height: auto;
    min-height: 32px;
    line-height: 1.5715;
    vertical-align: bottom;
    -webkit-transition: all .3s,height 0s;
    transition: all .3s,height 0s
}

.ant-picker-input>input-lg {
    padding: 6.5px 11px;
    font-size: 16px
}

.ant-picker-input>input-sm {
    padding: 0 7px
}

.ant-picker-input>input:focus {
    box-shadow: none
}

.ant-picker-input>input[disabled] {
    background: transparent
}

.ant-picker-input:hover .ant-picker-clear {
    opacity: 1
}

.ant-picker-large {
    padding: 6.5px 11px
}

.ant-picker-large .ant-picker-input>input {
    font-size: 16px
}

.ant-picker-small {
    padding: 0 7px
}

.ant-picker-suffix {
    -ms-flex-item-align: center;
    -webkit-align-self: center;
    -ms-grid-row-align: center;
    align-self: center;
    margin-left: 4px;
    color: rgba(0,0,0,.25);
    pointer-events: none
}

.ant-picker-clear {
    position: absolute;
    top: 50%;
    right: 0;
    color: rgba(0,0,0,.45);
    background: #fff;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    cursor: pointer;
    opacity: 0;
    -webkit-transition: opacity .3s,color .3s;
    transition: opacity .3s,color .3s
}

.ant-picker-clear:hover {
    color: rgba(0,0,0,.25)
}

.ant-picker-separator {
    position: relative;
    display: inline-block;
    width: 1em;
    height: 16px;
    color: rgba(0,0,0,.25);
    font-size: 16px;
    vertical-align: top;
    cursor: default
}

.ant-picker-focused .ant-picker-separator {
    color: rgba(0,0,0,.45)
}

.ant-picker-disabled .ant-picker-range-separator .ant-picker-separator {
    cursor: not-allowed
}

.ant-picker-range {
    position: relative;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: -webkit-inline-flex;
    display: inline-flex
}

.ant-picker-range .ant-picker-clear {
    right: 11px
}

.ant-picker-range:hover .ant-picker-clear {
    opacity: 1
}

.ant-picker-range .ant-picker-active-bar {
    bottom: -1px;
    height: 2px;
    margin-left: 11px;
    background: #1890ff;
    opacity: 0;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
    pointer-events: none
}

.ant-picker-range.ant-picker-focused .ant-picker-active-bar {
    opacity: 1
}

.ant-picker-range-separator {
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 0 8px;
    line-height: 1
}

.ant-picker-dropdown {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: absolute;
    z-index: 1050
}

.ant-picker-dropdown-hidden {
    display: none
}

.ant-picker-dropdown-placement-bottomLeft .ant-picker-range-arrow {
    top: 1.66666667px;
    display: block;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg)
}

.ant-picker-dropdown-placement-topLeft .ant-picker-range-arrow {
    bottom: 1.66666667px;
    display: block;
    -webkit-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    transform: rotate(135deg)
}

.ant-picker-dropdown-range {
    padding: 6.66666667px 0
}

.ant-picker-dropdown-range-hidden {
    display: none
}

.ant-picker-dropdown .ant-picker-panel>.ant-picker-time-panel {
    padding-top: 4px
}

.ant-picker-ranges {
    margin-bottom: 0;
    padding: 4px 12px;
    overflow: hidden;
    line-height: 34px;
    text-align: left;
    list-style: none
}

.ant-picker-ranges>li {
    display: inline-block
}

.ant-picker-ranges .ant-picker-preset>.ant-tag-blue {
    color: #1890ff;
    background: #e6f7ff;
    border-color: #91d5ff;
    cursor: pointer
}

.ant-picker-ranges .ant-picker-ok {
    float: right;
    margin-left: 8px
}

.ant-picker-range-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex
}

.ant-picker-range-arrow {
    position: absolute;
    z-index: 1;
    display: none;
    width: 10px;
    height: 10px;
    margin-left: 16.5px;
    box-shadow: 2px -2px 6px rgba(0,0,0,.06);
    -webkit-transition: left .3s ease-out;
    transition: left .3s ease-out
}

.ant-picker-range-arrow:after {
    position: absolute;
    top: 1px;
    right: 1px;
    width: 10px;
    height: 10px;
    border: 5px solid #f0f0f0;
    border-color: #fff #fff transparent transparent;
    content: ''
}

.ant-picker-panel-container {
    overflow: hidden;
    vertical-align: top;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);
    -webkit-transition: margin .3s;
    transition: margin .3s
}

.ant-picker-panel-container .ant-picker-panels {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: -webkit-inline-flex;
    display: inline-flex;
    -ms-flex-wrap: nowrap;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap
}

.ant-picker-panel-container .ant-picker-panel {
    vertical-align: top;
    background: transparent;
    border-width: 0 0 1px;
    border-radius: 0
}

.ant-picker-panel-container .ant-picker-panel-focused {
    border-color: #f0f0f0
}

.ant-picker-rtl {
    direction: rtl
}

.ant-picker-rtl .ant-picker-suffix {
    margin-right: 4px;
    margin-left: 0
}

.ant-picker-rtl .ant-picker-clear {
    right: auto;
    left: 0
}

.ant-picker-rtl .ant-picker-separator {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg)
}

.ant-picker-panel-rtl .ant-picker-header-view button:not(:first-child) {
    margin-right: 8px;
    margin-left: 0
}

.ant-picker-rtl.ant-picker-range .ant-picker-clear {
    right: auto;
    left: 11px
}

.ant-picker-dropdown-rtl .ant-picker-ranges {
    text-align: right
}

.ant-picker-dropdown-rtl .ant-picker-ranges .ant-picker-ok {
    float: left;
    margin-right: 8px;
    margin-left: 0
}

.ant-picker-panel-rtl {
    direction: rtl
}

.ant-picker-panel-rtl .ant-picker-prev-icon,.ant-picker-panel-rtl .ant-picker-super-prev-icon {
    -webkit-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    transform: rotate(135deg)
}

.ant-picker-panel-rtl .ant-picker-next-icon,.ant-picker-panel-rtl .ant-picker-super-next-icon {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg)
}

.ant-picker-cell .ant-picker-cell-inner {
    position: relative;
    z-index: 2;
    display: inline-block;
    min-width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 2px;
    -webkit-transition: background .3s,border .3s;
    transition: background .3s,border .3s
}

.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-start:before {
    right: 50%;
    left: 0
}

.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-end:before {
    right: 0;
    left: 50%
}

.ant-picker-panel-rtl .ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start .ant-picker-cell-inner:after {
    right: 0;
    left: -7px
}

.ant-picker-panel-rtl .ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end .ant-picker-cell-inner:after {
    right: -7px;
    left: 0
}

.ant-picker-panel-rtl .ant-picker-cell-range-hover.ant-picker-cell-range-start:after {
    right: 0;
    left: 50%
}

.ant-picker-panel-rtl .ant-picker-cell-range-hover.ant-picker-cell-range-end:after {
    right: 50%;
    left: 0
}

.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-hover-edge-start:not(.ant-picker-cell-range-hover-edge-start-near-range):after,.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-hover-start:after,.ant-picker-panel-rtl tr>.ant-picker-cell-in-view.ant-picker-cell-range-hover-end:first-child:after,.ant-picker-panel-rtl tr>.ant-picker-cell-in-view.ant-picker-cell-range-hover:first-child:after {
    right: 6px;
    left: 0;
    border-right: 1px dashed #7ec1ff;
    border-left: none;
    border-top-left-radius: 0;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 0
}

.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-hover-edge-end:not(.ant-picker-cell-range-hover-edge-end-near-range):after,.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-hover-end:after,.ant-picker-panel-rtl tr>.ant-picker-cell-in-view.ant-picker-cell-range-hover-start:last-child:after,.ant-picker-panel-rtl tr>.ant-picker-cell-in-view.ant-picker-cell-range-hover:last-child:after {
    right: 0;
    left: 6px;
    border-right: none;
    border-left: 1px dashed #7ec1ff;
    border-top-left-radius: 2px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 2px
}

.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-hover-start.ant-picker-cell-in-view.ant-picker-cell-range-hover-end:after,.ant-picker-panel-rtl tr>.ant-picker-cell-in-view.ant-picker-cell-range-hover-start:last-child:after {
    right: 6px;
    border-right: 1px dashed #7ec1ff;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px
}

.ant-picker-panel-rtl tr>.ant-picker-cell-in-view.ant-picker-cell-range-hover-end:first-child:after {
    left: 6px;
    border-left: 1px dashed #7ec1ff;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px
}

.ant-picker-panel-rtl .ant-picker-time-panel {
    direction: ltr
}

.ant-tag {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    display: inline-block;
    height: auto;
    margin-right: 8px;
    padding: 0 7px;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    background: #fafafa;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    cursor: default;
    opacity: 1;
    -webkit-transition: all .3s cubic-bezier(.78,.14,.15,.86);
    transition: all .3s cubic-bezier(.78,.14,.15,.86)
}

.ant-tag:hover {
    opacity: .85
}

.ant-tag,.ant-tag a,.ant-tag a:hover {
    color: rgba(0,0,0,.65)
}

.ant-tag>a:first-child:last-child {
    display: inline-block;
    margin: 0 -8px;
    padding: 0 8px
}

.ant-tag .anticon-close {
    display: inline-block;
    font-size: 10px;
    margin-left: 3px;
    color: rgba(0,0,0,.45);
    font-weight: 700;
    cursor: pointer;
    -webkit-transition: all .3s cubic-bezier(.78,.14,.15,.86);
    transition: all .3s cubic-bezier(.78,.14,.15,.86)
}

.ant-tag .anticon-close:hover {
    color: rgba(0,0,0,.85)
}

.ant-tag-has-color {
    border-color: transparent
}

.ant-tag-has-color,.ant-tag-has-color .anticon-close,.ant-tag-has-color .anticon-close:hover,.ant-tag-has-color a,.ant-tag-has-color a:hover {
    color: #fff
}

.ant-tag-checkable {
    background-color: transparent;
    border-color: transparent;
    cursor: pointer
}

.ant-tag-checkable:not(.ant-tag-checkable-checked):hover {
    color: #1890ff
}

.ant-tag-checkable-checked,.ant-tag-checkable:active {
    color: #fff
}

.ant-tag-checkable-checked {
    background-color: #1890ff
}

.ant-tag-checkable:active {
    background-color: #096dd9
}

.ant-tag-hidden {
    display: none
}

.ant-tag-pink {
    color: #eb2f96;
    background: #fff0f6;
    border-color: #ffadd2
}

.ant-tag-pink-inverse {
    color: #fff;
    background: #eb2f96;
    border-color: #eb2f96
}

.ant-tag-magenta {
    color: #eb2f96;
    background: #fff0f6;
    border-color: #ffadd2
}

.ant-tag-magenta-inverse {
    color: #fff;
    background: #eb2f96;
    border-color: #eb2f96
}

.ant-tag-red {
    color: #f5222d;
    background: #fff1f0;
    border-color: #ffa39e
}

.ant-tag-red-inverse {
    color: #fff;
    background: #f5222d;
    border-color: #f5222d
}

.ant-tag-volcano {
    color: #fa541c;
    background: #fff2e8;
    border-color: #ffbb96
}

.ant-tag-volcano-inverse {
    color: #fff;
    background: #fa541c;
    border-color: #fa541c
}

.ant-tag-orange {
    color: #fa8c16;
    background: #fff7e6;
    border-color: #ffd591
}

.ant-tag-orange-inverse {
    color: #fff;
    background: #fa8c16;
    border-color: #fa8c16
}

.ant-tag-yellow {
    color: #fadb14;
    background: #feffe6;
    border-color: #fffb8f
}

.ant-tag-yellow-inverse {
    color: #fff;
    background: #fadb14;
    border-color: #fadb14
}

.ant-tag-gold {
    color: #faad14;
    background: #fffbe6;
    border-color: #ffe58f
}

.ant-tag-gold-inverse {
    color: #fff;
    background: #faad14;
    border-color: #faad14
}

.ant-tag-cyan {
    color: #13c2c2;
    background: #e6fffb;
    border-color: #87e8de
}

.ant-tag-cyan-inverse {
    color: #fff;
    background: #13c2c2;
    border-color: #13c2c2
}

.ant-tag-lime {
    color: #a0d911;
    background: #fcffe6;
    border-color: #eaff8f
}

.ant-tag-lime-inverse {
    color: #fff;
    background: #a0d911;
    border-color: #a0d911
}

.ant-tag-green {
    color: #52c41a;
    background: #f6ffed;
    border-color: #b7eb8f
}

.ant-tag-green-inverse {
    color: #fff;
    background: #52c41a;
    border-color: #52c41a
}

.ant-tag-blue {
    color: #1890ff;
    background: #e6f7ff;
    border-color: #91d5ff
}

.ant-tag-blue-inverse {
    color: #fff;
    background: #1890ff;
    border-color: #1890ff
}

.ant-tag-geekblue {
    color: #2f54eb;
    background: #f0f5ff;
    border-color: #adc6ff
}

.ant-tag-geekblue-inverse {
    color: #fff;
    background: #2f54eb;
    border-color: #2f54eb
}

.ant-tag-purple {
    color: #722ed1;
    background: #f9f0ff;
    border-color: #d3adf7
}

.ant-tag-purple-inverse {
    color: #fff;
    background: #722ed1;
    border-color: #722ed1
}

.ant-tag-success {
    color: #52c41a;
    background: #f6ffed;
    border-color: #b7eb8f
}

.ant-tag-processing {
    color: #1890ff;
    background: #e6f7ff;
    border-color: #91d5ff
}

.ant-tag-error {
    color: #f5222d;
    background: #fff1f0;
    border-color: #ffa39e
}

.ant-tag-warning {
    color: #fa8c16;
    background: #fff7e6;
    border-color: #ffd591
}

.ant-tag>.anticon+span,.ant-tag>span+.anticon {
    margin-left: 7px
}

.ant-tag-rtl {
    margin-right: 0;
    margin-left: 8px;
    direction: rtl;
    text-align: right
}

.ant-tag-rtl.ant-tag .anticon-close {
    margin-right: 3px;
    margin-left: 0
}

.ant-tag-rtl.ant-tag>.anticon+span,.ant-tag-rtl.ant-tag>span+.anticon {
    margin-right: 7px;
    margin-left: 0
}

.ant-card {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    background: #fff;
    border-radius: 2px;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-card-rtl {
    direction: rtl
}

.ant-card-hoverable {
    cursor: pointer
}

.ant-card-hoverable:hover {
    border-color: transparent;
    box-shadow: 0 1px 2px -2px rgba(0,0,0,.16),0 3px 6px 0 rgba(0,0,0,.12),0 5px 12px 4px rgba(0,0,0,.09)
}

.ant-card-bordered {
    border: 1px solid #f0f0f0
}

.ant-card-head {
    min-height: 48px;
    margin-bottom: -1px;
    padding: 0 24px;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    font-size: 16px;
    background: transparent;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 2px 2px 0 0
}

.ant-card-head:after,.ant-card-head:before {
    display: table;
    content: ''
}

.ant-card-head:after {
    clear: both
}

.ant-card-head-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center
}

.ant-card-head-title {
    display: inline-block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding: 16px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.ant-card-head .ant-tabs {
    clear: both;
    margin-bottom: -17px;
    color: rgba(0,0,0,.65);
    font-weight: 400;
    font-size: 14px
}

.ant-card-head .ant-tabs-bar {
    border-bottom: 1px solid #f0f0f0
}

.ant-card-extra {
    float: right;
    margin-left: auto;
    padding: 16px 0;
    color: rgba(0,0,0,.65);
    font-weight: 400;
    font-size: 14px
}

.ant-card-rtl .ant-card-extra {
    margin-right: auto;
    margin-left: 0
}

.ant-card-body {
    padding: 24px
}

.ant-card-body:after,.ant-card-body:before {
    display: table;
    content: ''
}

.ant-card-body:after {
    clear: both
}

.ant-card-contain-grid:not(.ant-card-loading) .ant-card-body {
    margin: -1px 0 0 -1px;
    padding: 0
}

.ant-card-grid {
    float: left;
    width: 33.33%;
    padding: 24px;
    border: 0;
    border-radius: 0;
    box-shadow: 1px 0 0 0 #f0f0f0,0 1px 0 0 #f0f0f0,1px 1px 0 0 #f0f0f0,inset 1px 0 0 0 #f0f0f0,inset 0 1px 0 0 #f0f0f0;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-card-rtl .ant-card-grid {
    float: right
}

.ant-card-grid-hoverable:hover {
    position: relative;
    z-index: 1;
    box-shadow: 0 1px 2px -2px rgba(0,0,0,.16),0 3px 6px 0 rgba(0,0,0,.12),0 5px 12px 4px rgba(0,0,0,.09)
}

.ant-card-contain-tabs>.ant-card-head .ant-card-head-title {
    min-height: 32px;
    padding-bottom: 0
}

.ant-card-contain-tabs>.ant-card-head .ant-card-extra {
    padding-bottom: 0
}

.ant-card-cover {
    margin-right: -1px;
    margin-left: -1px
}

.ant-card-cover>* {
    display: block;
    width: 100%
}

.ant-card-cover img {
    border-radius: 2px 2px 0 0
}

.ant-card-actions {
    margin: 0;
    padding: 0;
    list-style: none;
    background: #fafafa;
    border-top: 1px solid #f0f0f0
}

.ant-card-actions:after,.ant-card-actions:before {
    display: table;
    content: ''
}

.ant-card-actions:after {
    clear: both
}

.ant-card-actions>li {
    float: left;
    margin: 12px 0;
    color: rgba(0,0,0,.45);
    text-align: center
}

.ant-card-rtl .ant-card-actions>li {
    float: right
}

.ant-card-actions>li>span {
    position: relative;
    display: block;
    min-width: 32px;
    font-size: 14px;
    line-height: 1.5715;
    cursor: pointer
}

.ant-card-actions>li>span:hover {
    color: #1890ff;
    -webkit-transition: color .3s;
    transition: color .3s
}

.ant-card-actions>li>span>.anticon,.ant-card-actions>li>span a:not(.ant-btn) {
    display: inline-block;
    width: 100%;
    color: rgba(0,0,0,.45);
    line-height: 22px;
    -webkit-transition: color .3s;
    transition: color .3s
}

.ant-card-actions>li>span>.anticon:hover,.ant-card-actions>li>span a:not(.ant-btn):hover {
    color: #1890ff
}

.ant-card-actions>li>span>.anticon {
    font-size: 16px;
    line-height: 22px
}

.ant-card-actions>li:not(:last-child) {
    border-right: 1px solid #f0f0f0
}

.ant-card-type-inner .ant-card-head {
    padding: 0 24px;
    background: #fafafa
}

.ant-card-type-inner .ant-card-head-title {
    padding: 12px 0;
    font-size: 14px
}

.ant-card-type-inner .ant-card-body {
    padding: 16px 24px
}

.ant-card-type-inner .ant-card-extra {
    padding: 13.5px 0
}

.ant-card-meta {
    margin: -4px 0
}

.ant-card-meta:after,.ant-card-meta:before {
    display: table;
    content: ''
}

.ant-card-meta:after {
    clear: both
}

.ant-card-meta-avatar {
    float: left;
    padding-right: 16px
}

.ant-card-rtl .ant-card-meta-avatar {
    float: right;
    padding-right: 0;
    padding-left: 16px
}

.ant-card-meta-detail {
    overflow: hidden
}

.ant-card-meta-detail>div:not(:last-child) {
    margin-bottom: 8px
}

.ant-card-meta-title {
    overflow: hidden;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis
}

.ant-card-meta-description {
    color: rgba(0,0,0,.45)
}

.ant-card-loading {
    overflow: hidden
}

.ant-card-loading .ant-card-body {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.ant-card-loading-content p {
    margin: 0
}

.ant-card-loading-block {
    height: 14px;
    margin: 4px 0;
    background: -webkit-gradient(linear,left top,right top,from(rgba(207,216,220,.2)),color-stop(rgba(207,216,220,.4)),to(rgba(207,216,220,.2)));
    background: -webkit-linear-gradient(left,rgba(207,216,220,.2),rgba(207,216,220,.4),rgba(207,216,220,.2));
    background: linear-gradient(90deg,rgba(207,216,220,.2),rgba(207,216,220,.4),rgba(207,216,220,.2));
    background-size: 600% 600%;
    border-radius: 2px;
    -webkit-animation: card-loading 1.4s ease infinite;
    animation: card-loading 1.4s ease infinite
}

@-webkit-keyframes card-loading {
    0%,to {
        background-position: 0 50%
    }

    50% {
        background-position: 100% 50%
    }
}

@keyframes card-loading {
    0%,to {
        background-position: 0 50%
    }

    50% {
        background-position: 100% 50%
    }
}

.ant-card-small>.ant-card-head {
    min-height: 36px;
    padding: 0 12px;
    font-size: 14px
}

.ant-card-small>.ant-card-head>.ant-card-head-wrapper>.ant-card-head-title {
    padding: 8px 0
}

.ant-card-small>.ant-card-head>.ant-card-head-wrapper>.ant-card-extra {
    padding: 8px 0;
    font-size: 14px
}

.ant-card-small>.ant-card-body {
    padding: 12px
}

.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-ink-bar {
    visibility: hidden
}

.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
    margin: 0;
    margin-right: 2px;
    padding: 8px 16px;
    line-height: 22px;
    background: #fafafa;
    border: 1px solid #f0f0f0;
    border-radius: 2px 2px 0 0;
    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
    transition: all .3s cubic-bezier(.645,.045,.355,1)
}

.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
    color: #1890ff;
    background: #fff;
    border-color: #f0f0f0;
    border-bottom: 1px solid #fff
}

.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active:before {
    border-top: 2px solid transparent
}

.ant-tabs.ant-tabs-small .ant-tabs-card-bar .ant-tabs-tab {
    padding: 6px 16px
}

.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-disabled {
    color: rgba(0,0,0,.25)
}

.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-inactive {
    padding: 0
}

.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-nav-wrap {
    margin-bottom: 0
}

.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab .ant-tabs-close-x {
    width: 16px;
    height: 14px;
    margin-right: -5px;
    margin-left: 3px;
    overflow: hidden;
    color: rgba(0,0,0,.45);
    font-size: 12px;
    vertical-align: middle;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab .ant-tabs-close-x:hover {
    color: rgba(0,0,0,.85)
}

.ant-tabs.ant-tabs-card .ant-tabs-card-content>.ant-tabs-tabpane,.ant-tabs.ant-tabs-editable-card .ant-tabs-card-content>.ant-tabs-tabpane {
    -webkit-transition: none!important;
    transition: none!important
}

.ant-tabs.ant-tabs-card .ant-tabs-card-content>.ant-tabs-tabpane-inactive,.ant-tabs.ant-tabs-editable-card .ant-tabs-card-content>.ant-tabs-tabpane-inactive {
    overflow: hidden
}

.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab:hover .anticon-close {
    opacity: 1
}

.ant-tabs-extra-content {
    line-height: 46.001px
}

.ant-tabs-extra-content .ant-tabs-new-tab {
    position: relative;
    width: 20px;
    height: 20px;
    color: rgba(0,0,0,.65);
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    border: 1px solid #f0f0f0;
    border-radius: 2px;
    cursor: pointer;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-tabs-extra-content .ant-tabs-new-tab:hover {
    color: #1890ff;
    border-color: #1890ff
}

.ant-tabs-extra-content .ant-tabs-new-tab svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto
}

.ant-tabs.ant-tabs-large .ant-tabs-extra-content {
    line-height: 57.144px
}

.ant-tabs.ant-tabs-small .ant-tabs-extra-content {
    line-height: 38.001px
}

.ant-tabs.ant-tabs-card .ant-tabs-extra-content {
    line-height: 40px
}

.ant-tabs-vertical.ant-tabs-card .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-nav-container,.ant-tabs-vertical.ant-tabs-card .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-nav-container {
    height: 100%
}

.ant-tabs-vertical.ant-tabs-card .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-tab,.ant-tabs-vertical.ant-tabs-card .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-tab {
    margin-bottom: 12px;
    border-bottom: 1px solid #f0f0f0
}

.ant-tabs-vertical.ant-tabs-card .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-tab-active,.ant-tabs-vertical.ant-tabs-card .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-tab-active {
    padding-bottom: 4px
}

.ant-tabs-vertical.ant-tabs-card .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-tab:last-child,.ant-tabs-vertical.ant-tabs-card .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-tab:last-child {
    margin-bottom: 12px
}

.ant-tabs-vertical.ant-tabs-card .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-new-tab,.ant-tabs-vertical.ant-tabs-card .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-new-tab {
    width: 90%
}

.ant-tabs-vertical.ant-tabs-card.ant-tabs-left .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-nav-wrap {
    margin-right: 0
}

.ant-tabs-vertical.ant-tabs-card.ant-tabs-left .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-tab {
    margin-right: 1px;
    border-right: 0;
    border-radius: 2px 0 0 2px
}

.ant-tabs-vertical.ant-tabs-card.ant-tabs-left .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-tab-active {
    margin-right: -1px;
    padding-right: 18px
}

.ant-tabs-vertical.ant-tabs-card.ant-tabs-right .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-nav-wrap {
    margin-left: 0
}

.ant-tabs-vertical.ant-tabs-card.ant-tabs-right .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-tab {
    margin-left: 1px;
    border-left: 0;
    border-radius: 0 2px 2px 0
}

.ant-tabs-vertical.ant-tabs-card.ant-tabs-right .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-tab-active {
    margin-left: -1px;
    padding-left: 18px
}

.ant-tabs .ant-tabs-card-bar.ant-tabs-bottom-bar .ant-tabs-tab {
    height: auto;
    border-top-color: #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 0 0 2px 2px
}

.ant-tabs .ant-tabs-card-bar.ant-tabs-bottom-bar .ant-tabs-tab-active {
    color: #1890ff;
    border-top-color: #fff
}

.ant-tabs {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    overflow: hidden
}

.ant-tabs:after,.ant-tabs:before {
    display: table;
    content: ''
}

.ant-tabs:after {
    clear: both
}

.ant-tabs-ink-bar {
    position: absolute;
    bottom: 1px;
    left: 0;
    z-index: 1;
    box-sizing: border-box;
    width: 0;
    height: 2px;
    background-color: #1890ff;
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0
}

.ant-tabs-bar {
    margin: 0 0 16px;
    border-bottom: 1px solid #f0f0f0;
    outline: none
}

.ant-tabs-bar,.ant-tabs-nav-container {
    -webkit-transition: padding .3s cubic-bezier(.645,.045,.355,1);
    transition: padding .3s cubic-bezier(.645,.045,.355,1)
}

.ant-tabs-nav-container {
    position: relative;
    box-sizing: border-box;
    margin-bottom: -1px;
    overflow: hidden;
    font-size: 14px;
    line-height: 1.5715;
    white-space: nowrap
}

.ant-tabs-nav-container:before {
    display: table;
    content: ''
}

.ant-tabs-nav-container:after {
    display: table;
    clear: both;
    content: ''
}

.ant-tabs-nav-container-scrolling {
    padding-right: 32px;
    padding-left: 32px
}

.ant-tabs-bottom .ant-tabs-bottom-bar {
    margin-top: 16px;
    margin-bottom: 0;
    border-top: 1px solid #f0f0f0;
    border-bottom: none
}

.ant-tabs-bottom .ant-tabs-bottom-bar .ant-tabs-ink-bar {
    top: 1px;
    bottom: auto
}

.ant-tabs-bottom .ant-tabs-bottom-bar .ant-tabs-nav-container {
    margin-top: -1px;
    margin-bottom: 0
}

.ant-tabs-tab-next,.ant-tabs-tab-prev {
    position: absolute;
    z-index: 2;
    width: 0;
    height: 100%;
    color: rgba(0,0,0,.45);
    text-align: center;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    opacity: 0;
    -webkit-transition: width .3s cubic-bezier(.645,.045,.355,1),opacity .3s cubic-bezier(.645,.045,.355,1),color .3s cubic-bezier(.645,.045,.355,1);
    transition: width .3s cubic-bezier(.645,.045,.355,1),opacity .3s cubic-bezier(.645,.045,.355,1),color .3s cubic-bezier(.645,.045,.355,1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none
}

.ant-tabs-tab-next.ant-tabs-tab-arrow-show,.ant-tabs-tab-prev.ant-tabs-tab-arrow-show {
    width: 32px;
    height: 100%;
    opacity: 1;
    pointer-events: auto
}

.ant-tabs-tab-next:hover,.ant-tabs-tab-prev:hover {
    color: rgba(0,0,0,.65)
}

.ant-tabs-tab-next-icon,.ant-tabs-tab-prev-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    font-weight: 700;
    font-style: normal;
    font-variant: normal;
    line-height: inherit;
    text-align: center;
    text-transform: none;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%)
}

.ant-tabs-tab-next-icon-target,.ant-tabs-tab-prev-icon-target {
    display: block;
    display: inline-block;
    font-size: 10px
}

.ant-tabs-tab-btn-disabled {
    cursor: not-allowed
}

.ant-tabs-tab-btn-disabled,.ant-tabs-tab-btn-disabled:hover {
    color: rgba(0,0,0,.25)
}

.ant-tabs-tab-next {
    right: 2px
}

.ant-tabs-tab-prev {
    left: 0
}

:root .ant-tabs-tab-prev {
    -webkit-filter: none;
    filter: none
}

.ant-tabs-nav-wrap {
    margin-bottom: -1px;
    overflow: hidden
}

.ant-tabs-nav-scroll {
    overflow: hidden;
    white-space: nowrap
}

.ant-tabs-nav {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    margin: 0;
    padding-left: 0;
    list-style: none;
    -webkit-transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    transition: transform .3s cubic-bezier(.645,.045,.355,1);
    transition: transform .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1)
}

.ant-tabs-nav:after,.ant-tabs-nav:before {
    display: table;
    content: ' '
}

.ant-tabs-nav:after {
    clear: both
}

.ant-tabs-nav .ant-tabs-tab {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    height: 100%;
    margin: 0 32px 0 0;
    padding: 12px 0;
    text-decoration: none;
    cursor: pointer;
    -webkit-transition: color .3s cubic-bezier(.645,.045,.355,1);
    transition: color .3s cubic-bezier(.645,.045,.355,1)
}

.ant-tabs-nav .ant-tabs-tab:before {
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    border-top: 2px solid transparent;
    border-radius: 2px 2px 0 0;
    -webkit-transition: all .3s;
    transition: all .3s;
    content: '';
    pointer-events: none
}

.ant-tabs-nav .ant-tabs-tab:last-child {
    margin-right: 0
}

.ant-tabs-nav .ant-tabs-tab:hover {
    color: #40a9ff
}

.ant-tabs-nav .ant-tabs-tab:active {
    color: #096dd9
}

.ant-tabs-nav .ant-tabs-tab .anticon {
    margin-right: 12px
}

.ant-tabs-nav .ant-tabs-tab-active {
    color: #1890ff;
    font-weight: 500;
    outline: none
}

.ant-tabs-nav .ant-tabs-tab-disabled,.ant-tabs-nav .ant-tabs-tab-disabled:hover {
    color: rgba(0,0,0,.25);
    cursor: not-allowed
}

.ant-tabs .ant-tabs-large-bar .ant-tabs-nav-container {
    font-size: 16px
}

.ant-tabs .ant-tabs-large-bar .ant-tabs-tab {
    padding: 16px 0
}

.ant-tabs .ant-tabs-small-bar .ant-tabs-nav-container {
    font-size: 14px
}

.ant-tabs .ant-tabs-small-bar .ant-tabs-tab {
    padding: 8px 0
}

.ant-tabs-content:before {
    display: block;
    overflow: hidden;
    content: ''
}

.ant-tabs .ant-tabs-tabpane {
    outline: none
}

.ant-tabs .ant-tabs-bottom-content,.ant-tabs .ant-tabs-top-content {
    width: 100%
}

.ant-tabs .ant-tabs-bottom-content>.ant-tabs-tabpane,.ant-tabs .ant-tabs-top-content>.ant-tabs-tabpane {
    -ms-flex-negative: 0;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    width: 100%;
    -webkit-backface-visibility: hidden;
    opacity: 1;
    -webkit-transition: opacity .45s;
    transition: opacity .45s
}

.ant-tabs .ant-tabs-bottom-content>.ant-tabs-tabpane-inactive,.ant-tabs .ant-tabs-top-content>.ant-tabs-tabpane-inactive {
    height: 0;
    padding: 0!important;
    overflow: hidden;
    opacity: 0;
    pointer-events: none
}

.ant-tabs .ant-tabs-bottom-content>.ant-tabs-tabpane-inactive input,.ant-tabs .ant-tabs-top-content>.ant-tabs-tabpane-inactive input {
    visibility: hidden
}

.ant-tabs .ant-tabs-bottom-content.ant-tabs-content-animated,.ant-tabs .ant-tabs-top-content.ant-tabs-content-animated {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-transition: margin-left .3s cubic-bezier(.645,.045,.355,1);
    transition: margin-left .3s cubic-bezier(.645,.045,.355,1);
    will-change: margin-left
}

.ant-tabs .ant-tabs-left-bar,.ant-tabs .ant-tabs-right-bar {
    height: 100%;
    border-bottom: 0
}

.ant-tabs .ant-tabs-left-bar .ant-tabs-tab-arrow-show,.ant-tabs .ant-tabs-right-bar .ant-tabs-tab-arrow-show {
    width: 100%;
    height: 32px
}

.ant-tabs .ant-tabs-left-bar .ant-tabs-tab,.ant-tabs .ant-tabs-right-bar .ant-tabs-tab {
    display: block;
    float: none;
    margin: 0 0 16px;
    padding: 8px 24px;
    text-align: center
}

.ant-tabs .ant-tabs-left-bar .ant-tabs-extra-content,.ant-tabs .ant-tabs-right-bar .ant-tabs-extra-content {
    text-align: center
}

.ant-tabs .ant-tabs-left-bar .ant-tabs-nav-scroll,.ant-tabs .ant-tabs-right-bar .ant-tabs-nav-scroll {
    width: auto
}

.ant-tabs .ant-tabs-left-bar .ant-tabs-nav-container,.ant-tabs .ant-tabs-left-bar .ant-tabs-nav-wrap,.ant-tabs .ant-tabs-right-bar .ant-tabs-nav-container,.ant-tabs .ant-tabs-right-bar .ant-tabs-nav-wrap {
    height: 100%
}

.ant-tabs .ant-tabs-left-bar .ant-tabs-nav-container,.ant-tabs .ant-tabs-right-bar .ant-tabs-nav-container {
    margin-bottom: 0
}

.ant-tabs .ant-tabs-left-bar .ant-tabs-nav-container.ant-tabs-nav-container-scrolling,.ant-tabs .ant-tabs-right-bar .ant-tabs-nav-container.ant-tabs-nav-container-scrolling {
    padding: 32px 0
}

.ant-tabs .ant-tabs-left-bar .ant-tabs-nav-wrap,.ant-tabs .ant-tabs-right-bar .ant-tabs-nav-wrap {
    margin-bottom: 0
}

.ant-tabs .ant-tabs-left-bar .ant-tabs-nav,.ant-tabs .ant-tabs-right-bar .ant-tabs-nav {
    width: 100%
}

.ant-tabs .ant-tabs-left-bar .ant-tabs-ink-bar,.ant-tabs .ant-tabs-right-bar .ant-tabs-ink-bar {
    top: 0;
    bottom: auto;
    left: auto;
    width: 2px;
    height: 0
}

.ant-tabs .ant-tabs-left-bar .ant-tabs-tab-next,.ant-tabs .ant-tabs-right-bar .ant-tabs-tab-next {
    right: 0;
    bottom: 0;
    width: 100%;
    height: 32px
}

.ant-tabs .ant-tabs-left-bar .ant-tabs-tab-prev,.ant-tabs .ant-tabs-right-bar .ant-tabs-tab-prev {
    top: 0;
    width: 100%;
    height: 32px
}

.ant-tabs .ant-tabs-left-content,.ant-tabs .ant-tabs-right-content {
    width: auto;
    margin-top: 0!important;
    overflow: hidden
}

.ant-tabs .ant-tabs-left-bar {
    float: left;
    margin-right: -1px;
    margin-bottom: 0;
    border-right: 1px solid #f0f0f0
}

.ant-tabs .ant-tabs-left-bar .ant-tabs-nav-container,.ant-tabs .ant-tabs-left-bar .ant-tabs-nav-wrap {
    margin-right: -1px
}

.ant-tabs .ant-tabs-left-bar .ant-tabs-ink-bar {
    right: 1px
}

.ant-tabs .ant-tabs-left-content {
    padding-left: 24px;
    border-left: 1px solid #f0f0f0
}

.ant-tabs .ant-tabs-right-bar {
    float: right;
    margin-bottom: 0;
    margin-left: -1px;
    border-left: 1px solid #f0f0f0
}

.ant-tabs .ant-tabs-right-bar .ant-tabs-nav-container,.ant-tabs .ant-tabs-right-bar .ant-tabs-nav-wrap {
    margin-left: -1px
}

.ant-tabs .ant-tabs-right-bar .ant-tabs-ink-bar {
    left: 1px
}

.ant-tabs .ant-tabs-right-content {
    padding-right: 24px;
    border-right: 1px solid #f0f0f0
}

.ant-tabs-bottom .ant-tabs-ink-bar-animated,.ant-tabs-top .ant-tabs-ink-bar-animated {
    -webkit-transition: width .2s cubic-bezier(.645,.045,.355,1),left .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    transition: width .2s cubic-bezier(.645,.045,.355,1),left .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    transition: transform .3s cubic-bezier(.645,.045,.355,1),width .2s cubic-bezier(.645,.045,.355,1),left .3s cubic-bezier(.645,.045,.355,1);
    transition: transform .3s cubic-bezier(.645,.045,.355,1),width .2s cubic-bezier(.645,.045,.355,1),left .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1)
}

.ant-tabs-left .ant-tabs-ink-bar-animated,.ant-tabs-right .ant-tabs-ink-bar-animated {
    -webkit-transition: height .2s cubic-bezier(.645,.045,.355,1),top .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    transition: height .2s cubic-bezier(.645,.045,.355,1),top .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    transition: transform .3s cubic-bezier(.645,.045,.355,1),height .2s cubic-bezier(.645,.045,.355,1),top .3s cubic-bezier(.645,.045,.355,1);
    transition: transform .3s cubic-bezier(.645,.045,.355,1),height .2s cubic-bezier(.645,.045,.355,1),top .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1)
}

.ant-tabs-no-animation>.ant-tabs-content>.ant-tabs-content-animated,.no-flex>.ant-tabs-content>.ant-tabs-content-animated {
    margin-left: 0!important;
    -webkit-transform: none!important;
    -ms-transform: none!important;
    transform: none!important
}

.ant-tabs-no-animation>.ant-tabs-content>.ant-tabs-tabpane-inactive,.no-flex>.ant-tabs-content>.ant-tabs-tabpane-inactive {
    height: 0;
    padding: 0!important;
    overflow: hidden;
    opacity: 0;
    pointer-events: none
}

.ant-tabs-no-animation>.ant-tabs-content>.ant-tabs-tabpane-inactive input,.no-flex>.ant-tabs-content>.ant-tabs-tabpane-inactive input {
    visibility: hidden
}

.ant-tabs-left-content>.ant-tabs-content-animated,.ant-tabs-right-content>.ant-tabs-content-animated {
    margin-left: 0!important;
    -webkit-transform: none!important;
    -ms-transform: none!important;
    transform: none!important
}

.ant-tabs-left-content>.ant-tabs-tabpane-inactive,.ant-tabs-right-content>.ant-tabs-tabpane-inactive {
    height: 0;
    padding: 0!important;
    overflow: hidden;
    opacity: 0;
    pointer-events: none
}

.ant-tabs-left-content>.ant-tabs-tabpane-inactive input,.ant-tabs-right-content>.ant-tabs-tabpane-inactive input {
    visibility: hidden
}

.ant-tabs-rtl {
    direction: rtl
}

.ant-tabs-rtl .ant-tabs-ink-bar {
    right: 0;
    left: auto
}

.ant-tabs-rtl .ant-tabs-tab-next {
    right: auto;
    left: 2px
}

.ant-tabs-rtl .ant-tabs-tab-prev {
    right: 2px;
    left: auto
}

.ant-tabs-rtl .ant-tabs-nav .ant-tabs-tab {
    margin: 0 0 0 32px
}

.ant-tabs-rtl .ant-tabs-nav .ant-tabs-tab .anticon {
    margin-right: 0;
    margin-left: 8px
}

.ant-tabs-rtl.ant-tabs .ant-tabs-left-bar .ant-tabs-tab,.ant-tabs-rtl.ant-tabs .ant-tabs-right-bar .ant-tabs-tab {
    margin: 0 0 16px
}

.ant-tabs .ant-tabs-left-bar .ant-tabs-tab:last-child,.ant-tabs .ant-tabs-right-bar .ant-tabs-tab:last-child {
    margin-bottom: 0
}

.ant-tabs-rtl.ant-tabs .ant-tabs-right-bar .ant-tabs-ink-bar {
    right: auto;
    left: 1px
}

.ant-tabs-rtl.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab .ant-tabs-close-x {
    margin-right: 3px;
    margin-left: -5px
}

.ant-tabs-rtl .ant-tabs-extra-content {
    float: left!important
}

.ant-row {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap
}

.ant-row,.ant-row:after,.ant-row:before {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex
}

.ant-row-start {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start
}

.ant-row-center {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center
}

.ant-row-end {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    -webkit-justify-content: flex-end;
    justify-content: flex-end
}

.ant-row-space-between {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between
}

.ant-row-space-around {
    -ms-flex-pack: distribute;
    -webkit-justify-content: space-around;
    justify-content: space-around
}

.ant-row-top {
    -webkit-box-align: start;
    -ms-flex-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start
}

.ant-row-middle {
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center
}

.ant-row-bottom {
    -webkit-box-align: end;
    -ms-flex-align: end;
    -webkit-align-items: flex-end;
    align-items: flex-end
}

.ant-col {
    position: relative;
    max-width: 100%;
    min-height: 1px
}

.ant-col-24 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    -webkit-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%
}

.ant-col-push-24 {
    left: 100%
}

.ant-col-pull-24 {
    right: 100%
}

.ant-col-offset-24 {
    margin-left: 100%
}

.ant-col-order-24 {
    -webkit-box-ordinal-group: 25;
    -ms-flex-order: 24;
    -webkit-order: 24;
    order: 24
}

.ant-col-23 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 95.83333333%;
    -webkit-flex: 0 0 95.83333333%;
    flex: 0 0 95.83333333%;
    max-width: 95.83333333%
}

.ant-col-push-23 {
    left: 95.83333333%
}

.ant-col-pull-23 {
    right: 95.83333333%
}

.ant-col-offset-23 {
    margin-left: 95.83333333%
}

.ant-col-order-23 {
    -webkit-box-ordinal-group: 24;
    -ms-flex-order: 23;
    -webkit-order: 23;
    order: 23
}

.ant-col-22 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 91.66666667%;
    -webkit-flex: 0 0 91.66666667%;
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%
}

.ant-col-push-22 {
    left: 91.66666667%
}

.ant-col-pull-22 {
    right: 91.66666667%
}

.ant-col-offset-22 {
    margin-left: 91.66666667%
}

.ant-col-order-22 {
    -webkit-box-ordinal-group: 23;
    -ms-flex-order: 22;
    -webkit-order: 22;
    order: 22
}

.ant-col-21 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 87.5%;
    -webkit-flex: 0 0 87.5%;
    flex: 0 0 87.5%;
    max-width: 87.5%
}

.ant-col-push-21 {
    left: 87.5%
}

.ant-col-pull-21 {
    right: 87.5%
}

.ant-col-offset-21 {
    margin-left: 87.5%
}

.ant-col-order-21 {
    -webkit-box-ordinal-group: 22;
    -ms-flex-order: 21;
    -webkit-order: 21;
    order: 21
}

.ant-col-20 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 83.33333333%;
    -webkit-flex: 0 0 83.33333333%;
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%
}

.ant-col-push-20 {
    left: 83.33333333%
}

.ant-col-pull-20 {
    right: 83.33333333%
}

.ant-col-offset-20 {
    margin-left: 83.33333333%
}

.ant-col-order-20 {
    -webkit-box-ordinal-group: 21;
    -ms-flex-order: 20;
    -webkit-order: 20;
    order: 20
}

.ant-col-19 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 79.16666667%;
    -webkit-flex: 0 0 79.16666667%;
    flex: 0 0 79.16666667%;
    max-width: 79.16666667%
}

.ant-col-push-19 {
    left: 79.16666667%
}

.ant-col-pull-19 {
    right: 79.16666667%
}

.ant-col-offset-19 {
    margin-left: 79.16666667%
}

.ant-col-order-19 {
    -webkit-box-ordinal-group: 20;
    -ms-flex-order: 19;
    -webkit-order: 19;
    order: 19
}

.ant-col-18 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 75%;
    -webkit-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%
}

.ant-col-push-18 {
    left: 75%
}

.ant-col-pull-18 {
    right: 75%
}

.ant-col-offset-18 {
    margin-left: 75%
}

.ant-col-order-18 {
    -webkit-box-ordinal-group: 19;
    -ms-flex-order: 18;
    -webkit-order: 18;
    order: 18
}

.ant-col-17 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 70.83333333%;
    -webkit-flex: 0 0 70.83333333%;
    flex: 0 0 70.83333333%;
    max-width: 70.83333333%
}

.ant-col-push-17 {
    left: 70.83333333%
}

.ant-col-pull-17 {
    right: 70.83333333%
}

.ant-col-offset-17 {
    margin-left: 70.83333333%
}

.ant-col-order-17 {
    -webkit-box-ordinal-group: 18;
    -ms-flex-order: 17;
    -webkit-order: 17;
    order: 17
}

.ant-col-16 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 66.66666667%;
    -webkit-flex: 0 0 66.66666667%;
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%
}

.ant-col-push-16 {
    left: 66.66666667%
}

.ant-col-pull-16 {
    right: 66.66666667%
}

.ant-col-offset-16 {
    margin-left: 66.66666667%
}

.ant-col-order-16 {
    -webkit-box-ordinal-group: 17;
    -ms-flex-order: 16;
    -webkit-order: 16;
    order: 16
}

.ant-col-15 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 62.5%;
    -webkit-flex: 0 0 62.5%;
    flex: 0 0 62.5%;
    max-width: 62.5%
}

.ant-col-push-15 {
    left: 62.5%
}

.ant-col-pull-15 {
    right: 62.5%
}

.ant-col-offset-15 {
    margin-left: 62.5%
}

.ant-col-order-15 {
    -webkit-box-ordinal-group: 16;
    -ms-flex-order: 15;
    -webkit-order: 15;
    order: 15
}

.ant-col-14 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 58.33333333%;
    -webkit-flex: 0 0 58.33333333%;
    flex: 0 0 58.33333333%;
    max-width: 58.33333333%
}

.ant-col-push-14 {
    left: 58.33333333%
}

.ant-col-pull-14 {
    right: 58.33333333%
}

.ant-col-offset-14 {
    margin-left: 58.33333333%
}

.ant-col-order-14 {
    -webkit-box-ordinal-group: 15;
    -ms-flex-order: 14;
    -webkit-order: 14;
    order: 14
}

.ant-col-13 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 54.16666667%;
    -webkit-flex: 0 0 54.16666667%;
    flex: 0 0 54.16666667%;
    max-width: 54.16666667%
}

.ant-col-push-13 {
    left: 54.16666667%
}

.ant-col-pull-13 {
    right: 54.16666667%
}

.ant-col-offset-13 {
    margin-left: 54.16666667%
}

.ant-col-order-13 {
    -webkit-box-ordinal-group: 14;
    -ms-flex-order: 13;
    -webkit-order: 13;
    order: 13
}

.ant-col-12 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    -webkit-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%
}

.ant-col-push-12 {
    left: 50%
}

.ant-col-pull-12 {
    right: 50%
}

.ant-col-offset-12 {
    margin-left: 50%
}

.ant-col-order-12 {
    -webkit-box-ordinal-group: 13;
    -ms-flex-order: 12;
    -webkit-order: 12;
    order: 12
}

.ant-col-11 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 45.83333333%;
    -webkit-flex: 0 0 45.83333333%;
    flex: 0 0 45.83333333%;
    max-width: 45.83333333%
}

.ant-col-push-11 {
    left: 45.83333333%
}

.ant-col-pull-11 {
    right: 45.83333333%
}

.ant-col-offset-11 {
    margin-left: 45.83333333%
}

.ant-col-order-11 {
    -webkit-box-ordinal-group: 12;
    -ms-flex-order: 11;
    -webkit-order: 11;
    order: 11
}

.ant-col-10 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 41.66666667%;
    -webkit-flex: 0 0 41.66666667%;
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%
}

.ant-col-push-10 {
    left: 41.66666667%
}

.ant-col-pull-10 {
    right: 41.66666667%
}

.ant-col-offset-10 {
    margin-left: 41.66666667%
}

.ant-col-order-10 {
    -webkit-box-ordinal-group: 11;
    -ms-flex-order: 10;
    -webkit-order: 10;
    order: 10
}

.ant-col-9 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 37.5%;
    -webkit-flex: 0 0 37.5%;
    flex: 0 0 37.5%;
    max-width: 37.5%
}

.ant-col-push-9 {
    left: 37.5%
}

.ant-col-pull-9 {
    right: 37.5%
}

.ant-col-offset-9 {
    margin-left: 37.5%
}

.ant-col-order-9 {
    -webkit-box-ordinal-group: 10;
    -ms-flex-order: 9;
    -webkit-order: 9;
    order: 9
}

.ant-col-8 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.33333333%;
    -webkit-flex: 0 0 33.33333333%;
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%
}

.ant-col-push-8 {
    left: 33.33333333%
}

.ant-col-pull-8 {
    right: 33.33333333%
}

.ant-col-offset-8 {
    margin-left: 33.33333333%
}

.ant-col-order-8 {
    -webkit-box-ordinal-group: 9;
    -ms-flex-order: 8;
    -webkit-order: 8;
    order: 8
}

.ant-col-7 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 29.16666667%;
    -webkit-flex: 0 0 29.16666667%;
    flex: 0 0 29.16666667%;
    max-width: 29.16666667%
}

.ant-col-push-7 {
    left: 29.16666667%
}

.ant-col-pull-7 {
    right: 29.16666667%
}

.ant-col-offset-7 {
    margin-left: 29.16666667%
}

.ant-col-order-7 {
    -webkit-box-ordinal-group: 8;
    -ms-flex-order: 7;
    -webkit-order: 7;
    order: 7
}

.ant-col-6 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    -webkit-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%
}

.ant-col-push-6 {
    left: 25%
}

.ant-col-pull-6 {
    right: 25%
}

.ant-col-offset-6 {
    margin-left: 25%
}

.ant-col-order-6 {
    -webkit-box-ordinal-group: 7;
    -ms-flex-order: 6;
    -webkit-order: 6;
    order: 6
}

.ant-col-5 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 20.83333333%;
    -webkit-flex: 0 0 20.83333333%;
    flex: 0 0 20.83333333%;
    max-width: 20.83333333%
}

.ant-col-push-5 {
    left: 20.83333333%
}

.ant-col-pull-5 {
    right: 20.83333333%
}

.ant-col-offset-5 {
    margin-left: 20.83333333%
}

.ant-col-order-5 {
    -webkit-box-ordinal-group: 6;
    -ms-flex-order: 5;
    -webkit-order: 5;
    order: 5
}

.ant-col-4 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 16.66666667%;
    -webkit-flex: 0 0 16.66666667%;
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%
}

.ant-col-push-4 {
    left: 16.66666667%
}

.ant-col-pull-4 {
    right: 16.66666667%
}

.ant-col-offset-4 {
    margin-left: 16.66666667%
}

.ant-col-order-4 {
    -webkit-box-ordinal-group: 5;
    -ms-flex-order: 4;
    -webkit-order: 4;
    order: 4
}

.ant-col-3 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 12.5%;
    -webkit-flex: 0 0 12.5%;
    flex: 0 0 12.5%;
    max-width: 12.5%
}

.ant-col-push-3 {
    left: 12.5%
}

.ant-col-pull-3 {
    right: 12.5%
}

.ant-col-offset-3 {
    margin-left: 12.5%
}

.ant-col-order-3 {
    -webkit-box-ordinal-group: 4;
    -ms-flex-order: 3;
    -webkit-order: 3;
    order: 3
}

.ant-col-2 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 8.33333333%;
    -webkit-flex: 0 0 8.33333333%;
    flex: 0 0 8.33333333%;
    max-width: 8.33333333%
}

.ant-col-push-2 {
    left: 8.33333333%
}

.ant-col-pull-2 {
    right: 8.33333333%
}

.ant-col-offset-2 {
    margin-left: 8.33333333%
}

.ant-col-order-2 {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    -webkit-order: 2;
    order: 2
}

.ant-col-1 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 4.16666667%;
    -webkit-flex: 0 0 4.16666667%;
    flex: 0 0 4.16666667%;
    max-width: 4.16666667%
}

.ant-col-push-1 {
    left: 4.16666667%
}

.ant-col-pull-1 {
    right: 4.16666667%
}

.ant-col-offset-1 {
    margin-left: 4.16666667%
}

.ant-col-order-1 {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    -webkit-order: 1;
    order: 1
}

.ant-col-0 {
    display: none
}

.ant-col-offset-0 {
    margin-left: 0
}

.ant-col-order-0 {
    -webkit-box-ordinal-group: 1;
    -ms-flex-order: 0;
    -webkit-order: 0;
    order: 0
}

.ant-col-offset-0.ant-col-rtl {
    margin-right: 0
}

.ant-col-push-1.ant-col-rtl {
    right: 4.16666667%;
    left: auto
}

.ant-col-pull-1.ant-col-rtl {
    right: auto;
    left: 4.16666667%
}

.ant-col-offset-1.ant-col-rtl {
    margin-right: 4.16666667%;
    margin-left: 0
}

.ant-col-push-2.ant-col-rtl {
    right: 8.33333333%;
    left: auto
}

.ant-col-pull-2.ant-col-rtl {
    right: auto;
    left: 8.33333333%
}

.ant-col-offset-2.ant-col-rtl {
    margin-right: 8.33333333%;
    margin-left: 0
}

.ant-col-push-3.ant-col-rtl {
    right: 12.5%;
    left: auto
}

.ant-col-pull-3.ant-col-rtl {
    right: auto;
    left: 12.5%
}

.ant-col-offset-3.ant-col-rtl {
    margin-right: 12.5%;
    margin-left: 0
}

.ant-col-push-4.ant-col-rtl {
    right: 16.66666667%;
    left: auto
}

.ant-col-pull-4.ant-col-rtl {
    right: auto;
    left: 16.66666667%
}

.ant-col-offset-4.ant-col-rtl {
    margin-right: 16.66666667%;
    margin-left: 0
}

.ant-col-push-5.ant-col-rtl {
    right: 20.83333333%;
    left: auto
}

.ant-col-pull-5.ant-col-rtl {
    right: auto;
    left: 20.83333333%
}

.ant-col-offset-5.ant-col-rtl {
    margin-right: 20.83333333%;
    margin-left: 0
}

.ant-col-push-6.ant-col-rtl {
    right: 25%;
    left: auto
}

.ant-col-pull-6.ant-col-rtl {
    right: auto;
    left: 25%
}

.ant-col-offset-6.ant-col-rtl {
    margin-right: 25%;
    margin-left: 0
}

.ant-col-push-7.ant-col-rtl {
    right: 29.16666667%;
    left: auto
}

.ant-col-pull-7.ant-col-rtl {
    right: auto;
    left: 29.16666667%
}

.ant-col-offset-7.ant-col-rtl {
    margin-right: 29.16666667%;
    margin-left: 0
}

.ant-col-push-8.ant-col-rtl {
    right: 33.33333333%;
    left: auto
}

.ant-col-pull-8.ant-col-rtl {
    right: auto;
    left: 33.33333333%
}

.ant-col-offset-8.ant-col-rtl {
    margin-right: 33.33333333%;
    margin-left: 0
}

.ant-col-push-9.ant-col-rtl {
    right: 37.5%;
    left: auto
}

.ant-col-pull-9.ant-col-rtl {
    right: auto;
    left: 37.5%
}

.ant-col-offset-9.ant-col-rtl {
    margin-right: 37.5%;
    margin-left: 0
}

.ant-col-push-10.ant-col-rtl {
    right: 41.66666667%;
    left: auto
}

.ant-col-pull-10.ant-col-rtl {
    right: auto;
    left: 41.66666667%
}

.ant-col-offset-10.ant-col-rtl {
    margin-right: 41.66666667%;
    margin-left: 0
}

.ant-col-push-11.ant-col-rtl {
    right: 45.83333333%;
    left: auto
}

.ant-col-pull-11.ant-col-rtl {
    right: auto;
    left: 45.83333333%
}

.ant-col-offset-11.ant-col-rtl {
    margin-right: 45.83333333%;
    margin-left: 0
}

.ant-col-push-12.ant-col-rtl {
    right: 50%;
    left: auto
}

.ant-col-pull-12.ant-col-rtl {
    right: auto;
    left: 50%
}

.ant-col-offset-12.ant-col-rtl {
    margin-right: 50%;
    margin-left: 0
}

.ant-col-push-13.ant-col-rtl {
    right: 54.16666667%;
    left: auto
}

.ant-col-pull-13.ant-col-rtl {
    right: auto;
    left: 54.16666667%
}

.ant-col-offset-13.ant-col-rtl {
    margin-right: 54.16666667%;
    margin-left: 0
}

.ant-col-push-14.ant-col-rtl {
    right: 58.33333333%;
    left: auto
}

.ant-col-pull-14.ant-col-rtl {
    right: auto;
    left: 58.33333333%
}

.ant-col-offset-14.ant-col-rtl {
    margin-right: 58.33333333%;
    margin-left: 0
}

.ant-col-push-15.ant-col-rtl {
    right: 62.5%;
    left: auto
}

.ant-col-pull-15.ant-col-rtl {
    right: auto;
    left: 62.5%
}

.ant-col-offset-15.ant-col-rtl {
    margin-right: 62.5%;
    margin-left: 0
}

.ant-col-push-16.ant-col-rtl {
    right: 66.66666667%;
    left: auto
}

.ant-col-pull-16.ant-col-rtl {
    right: auto;
    left: 66.66666667%
}

.ant-col-offset-16.ant-col-rtl {
    margin-right: 66.66666667%;
    margin-left: 0
}

.ant-col-push-17.ant-col-rtl {
    right: 70.83333333%;
    left: auto
}

.ant-col-pull-17.ant-col-rtl {
    right: auto;
    left: 70.83333333%
}

.ant-col-offset-17.ant-col-rtl {
    margin-right: 70.83333333%;
    margin-left: 0
}

.ant-col-push-18.ant-col-rtl {
    right: 75%;
    left: auto
}

.ant-col-pull-18.ant-col-rtl {
    right: auto;
    left: 75%
}

.ant-col-offset-18.ant-col-rtl {
    margin-right: 75%;
    margin-left: 0
}

.ant-col-push-19.ant-col-rtl {
    right: 79.16666667%;
    left: auto
}

.ant-col-pull-19.ant-col-rtl {
    right: auto;
    left: 79.16666667%
}

.ant-col-offset-19.ant-col-rtl {
    margin-right: 79.16666667%;
    margin-left: 0
}

.ant-col-push-20.ant-col-rtl {
    right: 83.33333333%;
    left: auto
}

.ant-col-pull-20.ant-col-rtl {
    right: auto;
    left: 83.33333333%
}

.ant-col-offset-20.ant-col-rtl {
    margin-right: 83.33333333%;
    margin-left: 0
}

.ant-col-push-21.ant-col-rtl {
    right: 87.5%;
    left: auto
}

.ant-col-pull-21.ant-col-rtl {
    right: auto;
    left: 87.5%
}

.ant-col-offset-21.ant-col-rtl {
    margin-right: 87.5%;
    margin-left: 0
}

.ant-col-push-22.ant-col-rtl {
    right: 91.66666667%;
    left: auto
}

.ant-col-pull-22.ant-col-rtl {
    right: auto;
    left: 91.66666667%
}

.ant-col-offset-22.ant-col-rtl {
    margin-right: 91.66666667%;
    margin-left: 0
}

.ant-col-push-23.ant-col-rtl {
    right: 95.83333333%;
    left: auto
}

.ant-col-pull-23.ant-col-rtl {
    right: auto;
    left: 95.83333333%
}

.ant-col-offset-23.ant-col-rtl {
    margin-right: 95.83333333%;
    margin-left: 0
}

.ant-col-push-24.ant-col-rtl {
    right: 100%;
    left: auto
}

.ant-col-pull-24.ant-col-rtl {
    right: auto;
    left: 100%
}

.ant-col-offset-24.ant-col-rtl {
    margin-right: 100%;
    margin-left: 0
}

.ant-col-xs-24 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    -webkit-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%
}

.ant-col-xs-push-24 {
    left: 100%
}

.ant-col-xs-pull-24 {
    right: 100%
}

.ant-col-xs-offset-24 {
    margin-left: 100%
}

.ant-col-xs-order-24 {
    -webkit-box-ordinal-group: 25;
    -ms-flex-order: 24;
    -webkit-order: 24;
    order: 24
}

.ant-col-xs-23 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 95.83333333%;
    -webkit-flex: 0 0 95.83333333%;
    flex: 0 0 95.83333333%;
    max-width: 95.83333333%
}

.ant-col-xs-push-23 {
    left: 95.83333333%
}

.ant-col-xs-pull-23 {
    right: 95.83333333%
}

.ant-col-xs-offset-23 {
    margin-left: 95.83333333%
}

.ant-col-xs-order-23 {
    -webkit-box-ordinal-group: 24;
    -ms-flex-order: 23;
    -webkit-order: 23;
    order: 23
}

.ant-col-xs-22 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 91.66666667%;
    -webkit-flex: 0 0 91.66666667%;
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%
}

.ant-col-xs-push-22 {
    left: 91.66666667%
}

.ant-col-xs-pull-22 {
    right: 91.66666667%
}

.ant-col-xs-offset-22 {
    margin-left: 91.66666667%
}

.ant-col-xs-order-22 {
    -webkit-box-ordinal-group: 23;
    -ms-flex-order: 22;
    -webkit-order: 22;
    order: 22
}

.ant-col-xs-21 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 87.5%;
    -webkit-flex: 0 0 87.5%;
    flex: 0 0 87.5%;
    max-width: 87.5%
}

.ant-col-xs-push-21 {
    left: 87.5%
}

.ant-col-xs-pull-21 {
    right: 87.5%
}

.ant-col-xs-offset-21 {
    margin-left: 87.5%
}

.ant-col-xs-order-21 {
    -webkit-box-ordinal-group: 22;
    -ms-flex-order: 21;
    -webkit-order: 21;
    order: 21
}

.ant-col-xs-20 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 83.33333333%;
    -webkit-flex: 0 0 83.33333333%;
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%
}

.ant-col-xs-push-20 {
    left: 83.33333333%
}

.ant-col-xs-pull-20 {
    right: 83.33333333%
}

.ant-col-xs-offset-20 {
    margin-left: 83.33333333%
}

.ant-col-xs-order-20 {
    -webkit-box-ordinal-group: 21;
    -ms-flex-order: 20;
    -webkit-order: 20;
    order: 20
}

.ant-col-xs-19 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 79.16666667%;
    -webkit-flex: 0 0 79.16666667%;
    flex: 0 0 79.16666667%;
    max-width: 79.16666667%
}

.ant-col-xs-push-19 {
    left: 79.16666667%
}

.ant-col-xs-pull-19 {
    right: 79.16666667%
}

.ant-col-xs-offset-19 {
    margin-left: 79.16666667%
}

.ant-col-xs-order-19 {
    -webkit-box-ordinal-group: 20;
    -ms-flex-order: 19;
    -webkit-order: 19;
    order: 19
}

.ant-col-xs-18 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 75%;
    -webkit-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%
}

.ant-col-xs-push-18 {
    left: 75%
}

.ant-col-xs-pull-18 {
    right: 75%
}

.ant-col-xs-offset-18 {
    margin-left: 75%
}

.ant-col-xs-order-18 {
    -webkit-box-ordinal-group: 19;
    -ms-flex-order: 18;
    -webkit-order: 18;
    order: 18
}

.ant-col-xs-17 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 70.83333333%;
    -webkit-flex: 0 0 70.83333333%;
    flex: 0 0 70.83333333%;
    max-width: 70.83333333%
}

.ant-col-xs-push-17 {
    left: 70.83333333%
}

.ant-col-xs-pull-17 {
    right: 70.83333333%
}

.ant-col-xs-offset-17 {
    margin-left: 70.83333333%
}

.ant-col-xs-order-17 {
    -webkit-box-ordinal-group: 18;
    -ms-flex-order: 17;
    -webkit-order: 17;
    order: 17
}

.ant-col-xs-16 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 66.66666667%;
    -webkit-flex: 0 0 66.66666667%;
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%
}

.ant-col-xs-push-16 {
    left: 66.66666667%
}

.ant-col-xs-pull-16 {
    right: 66.66666667%
}

.ant-col-xs-offset-16 {
    margin-left: 66.66666667%
}

.ant-col-xs-order-16 {
    -webkit-box-ordinal-group: 17;
    -ms-flex-order: 16;
    -webkit-order: 16;
    order: 16
}

.ant-col-xs-15 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 62.5%;
    -webkit-flex: 0 0 62.5%;
    flex: 0 0 62.5%;
    max-width: 62.5%
}

.ant-col-xs-push-15 {
    left: 62.5%
}

.ant-col-xs-pull-15 {
    right: 62.5%
}

.ant-col-xs-offset-15 {
    margin-left: 62.5%
}

.ant-col-xs-order-15 {
    -webkit-box-ordinal-group: 16;
    -ms-flex-order: 15;
    -webkit-order: 15;
    order: 15
}

.ant-col-xs-14 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 58.33333333%;
    -webkit-flex: 0 0 58.33333333%;
    flex: 0 0 58.33333333%;
    max-width: 58.33333333%
}

.ant-col-xs-push-14 {
    left: 58.33333333%
}

.ant-col-xs-pull-14 {
    right: 58.33333333%
}

.ant-col-xs-offset-14 {
    margin-left: 58.33333333%
}

.ant-col-xs-order-14 {
    -webkit-box-ordinal-group: 15;
    -ms-flex-order: 14;
    -webkit-order: 14;
    order: 14
}

.ant-col-xs-13 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 54.16666667%;
    -webkit-flex: 0 0 54.16666667%;
    flex: 0 0 54.16666667%;
    max-width: 54.16666667%
}

.ant-col-xs-push-13 {
    left: 54.16666667%
}

.ant-col-xs-pull-13 {
    right: 54.16666667%
}

.ant-col-xs-offset-13 {
    margin-left: 54.16666667%
}

.ant-col-xs-order-13 {
    -webkit-box-ordinal-group: 14;
    -ms-flex-order: 13;
    -webkit-order: 13;
    order: 13
}

.ant-col-xs-12 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    -webkit-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%
}

.ant-col-xs-push-12 {
    left: 50%
}

.ant-col-xs-pull-12 {
    right: 50%
}

.ant-col-xs-offset-12 {
    margin-left: 50%
}

.ant-col-xs-order-12 {
    -webkit-box-ordinal-group: 13;
    -ms-flex-order: 12;
    -webkit-order: 12;
    order: 12
}

.ant-col-xs-11 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 45.83333333%;
    -webkit-flex: 0 0 45.83333333%;
    flex: 0 0 45.83333333%;
    max-width: 45.83333333%
}

.ant-col-xs-push-11 {
    left: 45.83333333%
}

.ant-col-xs-pull-11 {
    right: 45.83333333%
}

.ant-col-xs-offset-11 {
    margin-left: 45.83333333%
}

.ant-col-xs-order-11 {
    -webkit-box-ordinal-group: 12;
    -ms-flex-order: 11;
    -webkit-order: 11;
    order: 11
}

.ant-col-xs-10 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 41.66666667%;
    -webkit-flex: 0 0 41.66666667%;
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%
}

.ant-col-xs-push-10 {
    left: 41.66666667%
}

.ant-col-xs-pull-10 {
    right: 41.66666667%
}

.ant-col-xs-offset-10 {
    margin-left: 41.66666667%
}

.ant-col-xs-order-10 {
    -webkit-box-ordinal-group: 11;
    -ms-flex-order: 10;
    -webkit-order: 10;
    order: 10
}

.ant-col-xs-9 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 37.5%;
    -webkit-flex: 0 0 37.5%;
    flex: 0 0 37.5%;
    max-width: 37.5%
}

.ant-col-xs-push-9 {
    left: 37.5%
}

.ant-col-xs-pull-9 {
    right: 37.5%
}

.ant-col-xs-offset-9 {
    margin-left: 37.5%
}

.ant-col-xs-order-9 {
    -webkit-box-ordinal-group: 10;
    -ms-flex-order: 9;
    -webkit-order: 9;
    order: 9
}

.ant-col-xs-8 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.33333333%;
    -webkit-flex: 0 0 33.33333333%;
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%
}

.ant-col-xs-push-8 {
    left: 33.33333333%
}

.ant-col-xs-pull-8 {
    right: 33.33333333%
}

.ant-col-xs-offset-8 {
    margin-left: 33.33333333%
}

.ant-col-xs-order-8 {
    -webkit-box-ordinal-group: 9;
    -ms-flex-order: 8;
    -webkit-order: 8;
    order: 8
}

.ant-col-xs-7 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 29.16666667%;
    -webkit-flex: 0 0 29.16666667%;
    flex: 0 0 29.16666667%;
    max-width: 29.16666667%
}

.ant-col-xs-push-7 {
    left: 29.16666667%
}

.ant-col-xs-pull-7 {
    right: 29.16666667%
}

.ant-col-xs-offset-7 {
    margin-left: 29.16666667%
}

.ant-col-xs-order-7 {
    -webkit-box-ordinal-group: 8;
    -ms-flex-order: 7;
    -webkit-order: 7;
    order: 7
}

.ant-col-xs-6 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    -webkit-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%
}

.ant-col-xs-push-6 {
    left: 25%
}

.ant-col-xs-pull-6 {
    right: 25%
}

.ant-col-xs-offset-6 {
    margin-left: 25%
}

.ant-col-xs-order-6 {
    -webkit-box-ordinal-group: 7;
    -ms-flex-order: 6;
    -webkit-order: 6;
    order: 6
}

.ant-col-xs-5 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 20.83333333%;
    -webkit-flex: 0 0 20.83333333%;
    flex: 0 0 20.83333333%;
    max-width: 20.83333333%
}

.ant-col-xs-push-5 {
    left: 20.83333333%
}

.ant-col-xs-pull-5 {
    right: 20.83333333%
}

.ant-col-xs-offset-5 {
    margin-left: 20.83333333%
}

.ant-col-xs-order-5 {
    -webkit-box-ordinal-group: 6;
    -ms-flex-order: 5;
    -webkit-order: 5;
    order: 5
}

.ant-col-xs-4 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 16.66666667%;
    -webkit-flex: 0 0 16.66666667%;
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%
}

.ant-col-xs-push-4 {
    left: 16.66666667%
}

.ant-col-xs-pull-4 {
    right: 16.66666667%
}

.ant-col-xs-offset-4 {
    margin-left: 16.66666667%
}

.ant-col-xs-order-4 {
    -webkit-box-ordinal-group: 5;
    -ms-flex-order: 4;
    -webkit-order: 4;
    order: 4
}

.ant-col-xs-3 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 12.5%;
    -webkit-flex: 0 0 12.5%;
    flex: 0 0 12.5%;
    max-width: 12.5%
}

.ant-col-xs-push-3 {
    left: 12.5%
}

.ant-col-xs-pull-3 {
    right: 12.5%
}

.ant-col-xs-offset-3 {
    margin-left: 12.5%
}

.ant-col-xs-order-3 {
    -webkit-box-ordinal-group: 4;
    -ms-flex-order: 3;
    -webkit-order: 3;
    order: 3
}

.ant-col-xs-2 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 8.33333333%;
    -webkit-flex: 0 0 8.33333333%;
    flex: 0 0 8.33333333%;
    max-width: 8.33333333%
}

.ant-col-xs-push-2 {
    left: 8.33333333%
}

.ant-col-xs-pull-2 {
    right: 8.33333333%
}

.ant-col-xs-offset-2 {
    margin-left: 8.33333333%
}

.ant-col-xs-order-2 {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    -webkit-order: 2;
    order: 2
}

.ant-col-xs-1 {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 4.16666667%;
    -webkit-flex: 0 0 4.16666667%;
    flex: 0 0 4.16666667%;
    max-width: 4.16666667%
}

.ant-col-xs-push-1 {
    left: 4.16666667%
}

.ant-col-xs-pull-1 {
    right: 4.16666667%
}

.ant-col-xs-offset-1 {
    margin-left: 4.16666667%
}

.ant-col-xs-order-1 {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    -webkit-order: 1;
    order: 1
}

.ant-col-xs-0 {
    display: none
}

.ant-col-push-0 {
    left: auto
}

.ant-col-pull-0 {
    right: auto
}

.ant-col-xs-push-0 {
    left: auto
}

.ant-col-xs-pull-0 {
    right: auto
}

.ant-col-xs-offset-0 {
    margin-left: 0
}

.ant-col-xs-order-0 {
    -webkit-box-ordinal-group: 1;
    -ms-flex-order: 0;
    -webkit-order: 0;
    order: 0
}

.ant-col-push-0.ant-col-rtl {
    right: auto
}

.ant-col-pull-0.ant-col-rtl {
    left: auto
}

.ant-col-xs-push-0.ant-col-rtl {
    right: auto
}

.ant-col-xs-pull-0.ant-col-rtl {
    left: auto
}

.ant-col-xs-offset-0.ant-col-rtl {
    margin-right: 0
}

.ant-col-xs-push-1.ant-col-rtl {
    right: 4.16666667%;
    left: auto
}

.ant-col-xs-pull-1.ant-col-rtl {
    right: auto;
    left: 4.16666667%
}

.ant-col-xs-offset-1.ant-col-rtl {
    margin-right: 4.16666667%;
    margin-left: 0
}

.ant-col-xs-push-2.ant-col-rtl {
    right: 8.33333333%;
    left: auto
}

.ant-col-xs-pull-2.ant-col-rtl {
    right: auto;
    left: 8.33333333%
}

.ant-col-xs-offset-2.ant-col-rtl {
    margin-right: 8.33333333%;
    margin-left: 0
}

.ant-col-xs-push-3.ant-col-rtl {
    right: 12.5%;
    left: auto
}

.ant-col-xs-pull-3.ant-col-rtl {
    right: auto;
    left: 12.5%
}

.ant-col-xs-offset-3.ant-col-rtl {
    margin-right: 12.5%;
    margin-left: 0
}

.ant-col-xs-push-4.ant-col-rtl {
    right: 16.66666667%;
    left: auto
}

.ant-col-xs-pull-4.ant-col-rtl {
    right: auto;
    left: 16.66666667%
}

.ant-col-xs-offset-4.ant-col-rtl {
    margin-right: 16.66666667%;
    margin-left: 0
}

.ant-col-xs-push-5.ant-col-rtl {
    right: 20.83333333%;
    left: auto
}

.ant-col-xs-pull-5.ant-col-rtl {
    right: auto;
    left: 20.83333333%
}

.ant-col-xs-offset-5.ant-col-rtl {
    margin-right: 20.83333333%;
    margin-left: 0
}

.ant-col-xs-push-6.ant-col-rtl {
    right: 25%;
    left: auto
}

.ant-col-xs-pull-6.ant-col-rtl {
    right: auto;
    left: 25%
}

.ant-col-xs-offset-6.ant-col-rtl {
    margin-right: 25%;
    margin-left: 0
}

.ant-col-xs-push-7.ant-col-rtl {
    right: 29.16666667%;
    left: auto
}

.ant-col-xs-pull-7.ant-col-rtl {
    right: auto;
    left: 29.16666667%
}

.ant-col-xs-offset-7.ant-col-rtl {
    margin-right: 29.16666667%;
    margin-left: 0
}

.ant-col-xs-push-8.ant-col-rtl {
    right: 33.33333333%;
    left: auto
}

.ant-col-xs-pull-8.ant-col-rtl {
    right: auto;
    left: 33.33333333%
}

.ant-col-xs-offset-8.ant-col-rtl {
    margin-right: 33.33333333%;
    margin-left: 0
}

.ant-col-xs-push-9.ant-col-rtl {
    right: 37.5%;
    left: auto
}

.ant-col-xs-pull-9.ant-col-rtl {
    right: auto;
    left: 37.5%
}

.ant-col-xs-offset-9.ant-col-rtl {
    margin-right: 37.5%;
    margin-left: 0
}

.ant-col-xs-push-10.ant-col-rtl {
    right: 41.66666667%;
    left: auto
}

.ant-col-xs-pull-10.ant-col-rtl {
    right: auto;
    left: 41.66666667%
}

.ant-col-xs-offset-10.ant-col-rtl {
    margin-right: 41.66666667%;
    margin-left: 0
}

.ant-col-xs-push-11.ant-col-rtl {
    right: 45.83333333%;
    left: auto
}

.ant-col-xs-pull-11.ant-col-rtl {
    right: auto;
    left: 45.83333333%
}

.ant-col-xs-offset-11.ant-col-rtl {
    margin-right: 45.83333333%;
    margin-left: 0
}

.ant-col-xs-push-12.ant-col-rtl {
    right: 50%;
    left: auto
}

.ant-col-xs-pull-12.ant-col-rtl {
    right: auto;
    left: 50%
}

.ant-col-xs-offset-12.ant-col-rtl {
    margin-right: 50%;
    margin-left: 0
}

.ant-col-xs-push-13.ant-col-rtl {
    right: 54.16666667%;
    left: auto
}

.ant-col-xs-pull-13.ant-col-rtl {
    right: auto;
    left: 54.16666667%
}

.ant-col-xs-offset-13.ant-col-rtl {
    margin-right: 54.16666667%;
    margin-left: 0
}

.ant-col-xs-push-14.ant-col-rtl {
    right: 58.33333333%;
    left: auto
}

.ant-col-xs-pull-14.ant-col-rtl {
    right: auto;
    left: 58.33333333%
}

.ant-col-xs-offset-14.ant-col-rtl {
    margin-right: 58.33333333%;
    margin-left: 0
}

.ant-col-xs-push-15.ant-col-rtl {
    right: 62.5%;
    left: auto
}

.ant-col-xs-pull-15.ant-col-rtl {
    right: auto;
    left: 62.5%
}

.ant-col-xs-offset-15.ant-col-rtl {
    margin-right: 62.5%;
    margin-left: 0
}

.ant-col-xs-push-16.ant-col-rtl {
    right: 66.66666667%;
    left: auto
}

.ant-col-xs-pull-16.ant-col-rtl {
    right: auto;
    left: 66.66666667%
}

.ant-col-xs-offset-16.ant-col-rtl {
    margin-right: 66.66666667%;
    margin-left: 0
}

.ant-col-xs-push-17.ant-col-rtl {
    right: 70.83333333%;
    left: auto
}

.ant-col-xs-pull-17.ant-col-rtl {
    right: auto;
    left: 70.83333333%
}

.ant-col-xs-offset-17.ant-col-rtl {
    margin-right: 70.83333333%;
    margin-left: 0
}

.ant-col-xs-push-18.ant-col-rtl {
    right: 75%;
    left: auto
}

.ant-col-xs-pull-18.ant-col-rtl {
    right: auto;
    left: 75%
}

.ant-col-xs-offset-18.ant-col-rtl {
    margin-right: 75%;
    margin-left: 0
}

.ant-col-xs-push-19.ant-col-rtl {
    right: 79.16666667%;
    left: auto
}

.ant-col-xs-pull-19.ant-col-rtl {
    right: auto;
    left: 79.16666667%
}

.ant-col-xs-offset-19.ant-col-rtl {
    margin-right: 79.16666667%;
    margin-left: 0
}

.ant-col-xs-push-20.ant-col-rtl {
    right: 83.33333333%;
    left: auto
}

.ant-col-xs-pull-20.ant-col-rtl {
    right: auto;
    left: 83.33333333%
}

.ant-col-xs-offset-20.ant-col-rtl {
    margin-right: 83.33333333%;
    margin-left: 0
}

.ant-col-xs-push-21.ant-col-rtl {
    right: 87.5%;
    left: auto
}

.ant-col-xs-pull-21.ant-col-rtl {
    right: auto;
    left: 87.5%
}

.ant-col-xs-offset-21.ant-col-rtl {
    margin-right: 87.5%;
    margin-left: 0
}

.ant-col-xs-push-22.ant-col-rtl {
    right: 91.66666667%;
    left: auto
}

.ant-col-xs-pull-22.ant-col-rtl {
    right: auto;
    left: 91.66666667%
}

.ant-col-xs-offset-22.ant-col-rtl {
    margin-right: 91.66666667%;
    margin-left: 0
}

.ant-col-xs-push-23.ant-col-rtl {
    right: 95.83333333%;
    left: auto
}

.ant-col-xs-pull-23.ant-col-rtl {
    right: auto;
    left: 95.83333333%
}

.ant-col-xs-offset-23.ant-col-rtl {
    margin-right: 95.83333333%;
    margin-left: 0
}

.ant-col-xs-push-24.ant-col-rtl {
    right: 100%;
    left: auto
}

.ant-col-xs-pull-24.ant-col-rtl {
    right: auto;
    left: 100%
}

.ant-col-xs-offset-24.ant-col-rtl {
    margin-right: 100%;
    margin-left: 0
}

@media (min-width: 576px) {
    .ant-col-sm-24 {
        display:block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        -webkit-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%
    }

    .ant-col-sm-push-24 {
        left: 100%
    }

    .ant-col-sm-pull-24 {
        right: 100%
    }

    .ant-col-sm-offset-24 {
        margin-left: 100%
    }

    .ant-col-sm-order-24 {
        -webkit-box-ordinal-group: 25;
        -ms-flex-order: 24;
        -webkit-order: 24;
        order: 24
    }

    .ant-col-sm-23 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 95.83333333%;
        -webkit-flex: 0 0 95.83333333%;
        flex: 0 0 95.83333333%;
        max-width: 95.83333333%
    }

    .ant-col-sm-push-23 {
        left: 95.83333333%
    }

    .ant-col-sm-pull-23 {
        right: 95.83333333%
    }

    .ant-col-sm-offset-23 {
        margin-left: 95.83333333%
    }

    .ant-col-sm-order-23 {
        -webkit-box-ordinal-group: 24;
        -ms-flex-order: 23;
        -webkit-order: 23;
        order: 23
    }

    .ant-col-sm-22 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 91.66666667%;
        -webkit-flex: 0 0 91.66666667%;
        flex: 0 0 91.66666667%;
        max-width: 91.66666667%
    }

    .ant-col-sm-push-22 {
        left: 91.66666667%
    }

    .ant-col-sm-pull-22 {
        right: 91.66666667%
    }

    .ant-col-sm-offset-22 {
        margin-left: 91.66666667%
    }

    .ant-col-sm-order-22 {
        -webkit-box-ordinal-group: 23;
        -ms-flex-order: 22;
        -webkit-order: 22;
        order: 22
    }

    .ant-col-sm-21 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 87.5%;
        -webkit-flex: 0 0 87.5%;
        flex: 0 0 87.5%;
        max-width: 87.5%
    }

    .ant-col-sm-push-21 {
        left: 87.5%
    }

    .ant-col-sm-pull-21 {
        right: 87.5%
    }

    .ant-col-sm-offset-21 {
        margin-left: 87.5%
    }

    .ant-col-sm-order-21 {
        -webkit-box-ordinal-group: 22;
        -ms-flex-order: 21;
        -webkit-order: 21;
        order: 21
    }

    .ant-col-sm-20 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 83.33333333%;
        -webkit-flex: 0 0 83.33333333%;
        flex: 0 0 83.33333333%;
        max-width: 83.33333333%
    }

    .ant-col-sm-push-20 {
        left: 83.33333333%
    }

    .ant-col-sm-pull-20 {
        right: 83.33333333%
    }

    .ant-col-sm-offset-20 {
        margin-left: 83.33333333%
    }

    .ant-col-sm-order-20 {
        -webkit-box-ordinal-group: 21;
        -ms-flex-order: 20;
        -webkit-order: 20;
        order: 20
    }

    .ant-col-sm-19 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 79.16666667%;
        -webkit-flex: 0 0 79.16666667%;
        flex: 0 0 79.16666667%;
        max-width: 79.16666667%
    }

    .ant-col-sm-push-19 {
        left: 79.16666667%
    }

    .ant-col-sm-pull-19 {
        right: 79.16666667%
    }

    .ant-col-sm-offset-19 {
        margin-left: 79.16666667%
    }

    .ant-col-sm-order-19 {
        -webkit-box-ordinal-group: 20;
        -ms-flex-order: 19;
        -webkit-order: 19;
        order: 19
    }

    .ant-col-sm-18 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
        -webkit-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%
    }

    .ant-col-sm-push-18 {
        left: 75%
    }

    .ant-col-sm-pull-18 {
        right: 75%
    }

    .ant-col-sm-offset-18 {
        margin-left: 75%
    }

    .ant-col-sm-order-18 {
        -webkit-box-ordinal-group: 19;
        -ms-flex-order: 18;
        -webkit-order: 18;
        order: 18
    }

    .ant-col-sm-17 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 70.83333333%;
        -webkit-flex: 0 0 70.83333333%;
        flex: 0 0 70.83333333%;
        max-width: 70.83333333%
    }

    .ant-col-sm-push-17 {
        left: 70.83333333%
    }

    .ant-col-sm-pull-17 {
        right: 70.83333333%
    }

    .ant-col-sm-offset-17 {
        margin-left: 70.83333333%
    }

    .ant-col-sm-order-17 {
        -webkit-box-ordinal-group: 18;
        -ms-flex-order: 17;
        -webkit-order: 17;
        order: 17
    }

    .ant-col-sm-16 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 66.66666667%;
        -webkit-flex: 0 0 66.66666667%;
        flex: 0 0 66.66666667%;
        max-width: 66.66666667%
    }

    .ant-col-sm-push-16 {
        left: 66.66666667%
    }

    .ant-col-sm-pull-16 {
        right: 66.66666667%
    }

    .ant-col-sm-offset-16 {
        margin-left: 66.66666667%
    }

    .ant-col-sm-order-16 {
        -webkit-box-ordinal-group: 17;
        -ms-flex-order: 16;
        -webkit-order: 16;
        order: 16
    }

    .ant-col-sm-15 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 62.5%;
        -webkit-flex: 0 0 62.5%;
        flex: 0 0 62.5%;
        max-width: 62.5%
    }

    .ant-col-sm-push-15 {
        left: 62.5%
    }

    .ant-col-sm-pull-15 {
        right: 62.5%
    }

    .ant-col-sm-offset-15 {
        margin-left: 62.5%
    }

    .ant-col-sm-order-15 {
        -webkit-box-ordinal-group: 16;
        -ms-flex-order: 15;
        -webkit-order: 15;
        order: 15
    }

    .ant-col-sm-14 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 58.33333333%;
        -webkit-flex: 0 0 58.33333333%;
        flex: 0 0 58.33333333%;
        max-width: 58.33333333%
    }

    .ant-col-sm-push-14 {
        left: 58.33333333%
    }

    .ant-col-sm-pull-14 {
        right: 58.33333333%
    }

    .ant-col-sm-offset-14 {
        margin-left: 58.33333333%
    }

    .ant-col-sm-order-14 {
        -webkit-box-ordinal-group: 15;
        -ms-flex-order: 14;
        -webkit-order: 14;
        order: 14
    }

    .ant-col-sm-13 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 54.16666667%;
        -webkit-flex: 0 0 54.16666667%;
        flex: 0 0 54.16666667%;
        max-width: 54.16666667%
    }

    .ant-col-sm-push-13 {
        left: 54.16666667%
    }

    .ant-col-sm-pull-13 {
        right: 54.16666667%
    }

    .ant-col-sm-offset-13 {
        margin-left: 54.16666667%
    }

    .ant-col-sm-order-13 {
        -webkit-box-ordinal-group: 14;
        -ms-flex-order: 13;
        -webkit-order: 13;
        order: 13
    }

    .ant-col-sm-12 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        -webkit-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%
    }

    .ant-col-sm-push-12 {
        left: 50%
    }

    .ant-col-sm-pull-12 {
        right: 50%
    }

    .ant-col-sm-offset-12 {
        margin-left: 50%
    }

    .ant-col-sm-order-12 {
        -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
        -webkit-order: 12;
        order: 12
    }

    .ant-col-sm-11 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 45.83333333%;
        -webkit-flex: 0 0 45.83333333%;
        flex: 0 0 45.83333333%;
        max-width: 45.83333333%
    }

    .ant-col-sm-push-11 {
        left: 45.83333333%
    }

    .ant-col-sm-pull-11 {
        right: 45.83333333%
    }

    .ant-col-sm-offset-11 {
        margin-left: 45.83333333%
    }

    .ant-col-sm-order-11 {
        -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
        -webkit-order: 11;
        order: 11
    }

    .ant-col-sm-10 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 41.66666667%;
        -webkit-flex: 0 0 41.66666667%;
        flex: 0 0 41.66666667%;
        max-width: 41.66666667%
    }

    .ant-col-sm-push-10 {
        left: 41.66666667%
    }

    .ant-col-sm-pull-10 {
        right: 41.66666667%
    }

    .ant-col-sm-offset-10 {
        margin-left: 41.66666667%
    }

    .ant-col-sm-order-10 {
        -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
        -webkit-order: 10;
        order: 10
    }

    .ant-col-sm-9 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 37.5%;
        -webkit-flex: 0 0 37.5%;
        flex: 0 0 37.5%;
        max-width: 37.5%
    }

    .ant-col-sm-push-9 {
        left: 37.5%
    }

    .ant-col-sm-pull-9 {
        right: 37.5%
    }

    .ant-col-sm-offset-9 {
        margin-left: 37.5%
    }

    .ant-col-sm-order-9 {
        -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
        -webkit-order: 9;
        order: 9
    }

    .ant-col-sm-8 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33.33333333%;
        -webkit-flex: 0 0 33.33333333%;
        flex: 0 0 33.33333333%;
        max-width: 33.33333333%
    }

    .ant-col-sm-push-8 {
        left: 33.33333333%
    }

    .ant-col-sm-pull-8 {
        right: 33.33333333%
    }

    .ant-col-sm-offset-8 {
        margin-left: 33.33333333%
    }

    .ant-col-sm-order-8 {
        -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
        -webkit-order: 8;
        order: 8
    }

    .ant-col-sm-7 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 29.16666667%;
        -webkit-flex: 0 0 29.16666667%;
        flex: 0 0 29.16666667%;
        max-width: 29.16666667%
    }

    .ant-col-sm-push-7 {
        left: 29.16666667%
    }

    .ant-col-sm-pull-7 {
        right: 29.16666667%
    }

    .ant-col-sm-offset-7 {
        margin-left: 29.16666667%
    }

    .ant-col-sm-order-7 {
        -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
        -webkit-order: 7;
        order: 7
    }

    .ant-col-sm-6 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        -webkit-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%
    }

    .ant-col-sm-push-6 {
        left: 25%
    }

    .ant-col-sm-pull-6 {
        right: 25%
    }

    .ant-col-sm-offset-6 {
        margin-left: 25%
    }

    .ant-col-sm-order-6 {
        -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
        -webkit-order: 6;
        order: 6
    }

    .ant-col-sm-5 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 20.83333333%;
        -webkit-flex: 0 0 20.83333333%;
        flex: 0 0 20.83333333%;
        max-width: 20.83333333%
    }

    .ant-col-sm-push-5 {
        left: 20.83333333%
    }

    .ant-col-sm-pull-5 {
        right: 20.83333333%
    }

    .ant-col-sm-offset-5 {
        margin-left: 20.83333333%
    }

    .ant-col-sm-order-5 {
        -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
        -webkit-order: 5;
        order: 5
    }

    .ant-col-sm-4 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 16.66666667%;
        -webkit-flex: 0 0 16.66666667%;
        flex: 0 0 16.66666667%;
        max-width: 16.66666667%
    }

    .ant-col-sm-push-4 {
        left: 16.66666667%
    }

    .ant-col-sm-pull-4 {
        right: 16.66666667%
    }

    .ant-col-sm-offset-4 {
        margin-left: 16.66666667%
    }

    .ant-col-sm-order-4 {
        -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
        -webkit-order: 4;
        order: 4
    }

    .ant-col-sm-3 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 12.5%;
        -webkit-flex: 0 0 12.5%;
        flex: 0 0 12.5%;
        max-width: 12.5%
    }

    .ant-col-sm-push-3 {
        left: 12.5%
    }

    .ant-col-sm-pull-3 {
        right: 12.5%
    }

    .ant-col-sm-offset-3 {
        margin-left: 12.5%
    }

    .ant-col-sm-order-3 {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        -webkit-order: 3;
        order: 3
    }

    .ant-col-sm-2 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 8.33333333%;
        -webkit-flex: 0 0 8.33333333%;
        flex: 0 0 8.33333333%;
        max-width: 8.33333333%
    }

    .ant-col-sm-push-2 {
        left: 8.33333333%
    }

    .ant-col-sm-pull-2 {
        right: 8.33333333%
    }

    .ant-col-sm-offset-2 {
        margin-left: 8.33333333%
    }

    .ant-col-sm-order-2 {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        -webkit-order: 2;
        order: 2
    }

    .ant-col-sm-1 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 4.16666667%;
        -webkit-flex: 0 0 4.16666667%;
        flex: 0 0 4.16666667%;
        max-width: 4.16666667%
    }

    .ant-col-sm-push-1 {
        left: 4.16666667%
    }

    .ant-col-sm-pull-1 {
        right: 4.16666667%
    }

    .ant-col-sm-offset-1 {
        margin-left: 4.16666667%
    }

    .ant-col-sm-order-1 {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        -webkit-order: 1;
        order: 1
    }

    .ant-col-sm-0 {
        display: none
    }

    .ant-col-push-0 {
        left: auto
    }

    .ant-col-pull-0 {
        right: auto
    }

    .ant-col-sm-push-0 {
        left: auto
    }

    .ant-col-sm-pull-0 {
        right: auto
    }

    .ant-col-sm-offset-0 {
        margin-left: 0
    }

    .ant-col-sm-order-0 {
        -webkit-box-ordinal-group: 1;
        -ms-flex-order: 0;
        -webkit-order: 0;
        order: 0
    }

    .ant-col-push-0.ant-col-rtl {
        right: auto
    }

    .ant-col-pull-0.ant-col-rtl {
        left: auto
    }

    .ant-col-sm-push-0.ant-col-rtl {
        right: auto
    }

    .ant-col-sm-pull-0.ant-col-rtl {
        left: auto
    }

    .ant-col-sm-offset-0.ant-col-rtl {
        margin-right: 0
    }

    .ant-col-sm-push-1.ant-col-rtl {
        right: 4.16666667%;
        left: auto
    }

    .ant-col-sm-pull-1.ant-col-rtl {
        right: auto;
        left: 4.16666667%
    }

    .ant-col-sm-offset-1.ant-col-rtl {
        margin-right: 4.16666667%;
        margin-left: 0
    }

    .ant-col-sm-push-2.ant-col-rtl {
        right: 8.33333333%;
        left: auto
    }

    .ant-col-sm-pull-2.ant-col-rtl {
        right: auto;
        left: 8.33333333%
    }

    .ant-col-sm-offset-2.ant-col-rtl {
        margin-right: 8.33333333%;
        margin-left: 0
    }

    .ant-col-sm-push-3.ant-col-rtl {
        right: 12.5%;
        left: auto
    }

    .ant-col-sm-pull-3.ant-col-rtl {
        right: auto;
        left: 12.5%
    }

    .ant-col-sm-offset-3.ant-col-rtl {
        margin-right: 12.5%;
        margin-left: 0
    }

    .ant-col-sm-push-4.ant-col-rtl {
        right: 16.66666667%;
        left: auto
    }

    .ant-col-sm-pull-4.ant-col-rtl {
        right: auto;
        left: 16.66666667%
    }

    .ant-col-sm-offset-4.ant-col-rtl {
        margin-right: 16.66666667%;
        margin-left: 0
    }

    .ant-col-sm-push-5.ant-col-rtl {
        right: 20.83333333%;
        left: auto
    }

    .ant-col-sm-pull-5.ant-col-rtl {
        right: auto;
        left: 20.83333333%
    }

    .ant-col-sm-offset-5.ant-col-rtl {
        margin-right: 20.83333333%;
        margin-left: 0
    }

    .ant-col-sm-push-6.ant-col-rtl {
        right: 25%;
        left: auto
    }

    .ant-col-sm-pull-6.ant-col-rtl {
        right: auto;
        left: 25%
    }

    .ant-col-sm-offset-6.ant-col-rtl {
        margin-right: 25%;
        margin-left: 0
    }

    .ant-col-sm-push-7.ant-col-rtl {
        right: 29.16666667%;
        left: auto
    }

    .ant-col-sm-pull-7.ant-col-rtl {
        right: auto;
        left: 29.16666667%
    }

    .ant-col-sm-offset-7.ant-col-rtl {
        margin-right: 29.16666667%;
        margin-left: 0
    }

    .ant-col-sm-push-8.ant-col-rtl {
        right: 33.33333333%;
        left: auto
    }

    .ant-col-sm-pull-8.ant-col-rtl {
        right: auto;
        left: 33.33333333%
    }

    .ant-col-sm-offset-8.ant-col-rtl {
        margin-right: 33.33333333%;
        margin-left: 0
    }

    .ant-col-sm-push-9.ant-col-rtl {
        right: 37.5%;
        left: auto
    }

    .ant-col-sm-pull-9.ant-col-rtl {
        right: auto;
        left: 37.5%
    }

    .ant-col-sm-offset-9.ant-col-rtl {
        margin-right: 37.5%;
        margin-left: 0
    }

    .ant-col-sm-push-10.ant-col-rtl {
        right: 41.66666667%;
        left: auto
    }

    .ant-col-sm-pull-10.ant-col-rtl {
        right: auto;
        left: 41.66666667%
    }

    .ant-col-sm-offset-10.ant-col-rtl {
        margin-right: 41.66666667%;
        margin-left: 0
    }

    .ant-col-sm-push-11.ant-col-rtl {
        right: 45.83333333%;
        left: auto
    }

    .ant-col-sm-pull-11.ant-col-rtl {
        right: auto;
        left: 45.83333333%
    }

    .ant-col-sm-offset-11.ant-col-rtl {
        margin-right: 45.83333333%;
        margin-left: 0
    }

    .ant-col-sm-push-12.ant-col-rtl {
        right: 50%;
        left: auto
    }

    .ant-col-sm-pull-12.ant-col-rtl {
        right: auto;
        left: 50%
    }

    .ant-col-sm-offset-12.ant-col-rtl {
        margin-right: 50%;
        margin-left: 0
    }

    .ant-col-sm-push-13.ant-col-rtl {
        right: 54.16666667%;
        left: auto
    }

    .ant-col-sm-pull-13.ant-col-rtl {
        right: auto;
        left: 54.16666667%
    }

    .ant-col-sm-offset-13.ant-col-rtl {
        margin-right: 54.16666667%;
        margin-left: 0
    }

    .ant-col-sm-push-14.ant-col-rtl {
        right: 58.33333333%;
        left: auto
    }

    .ant-col-sm-pull-14.ant-col-rtl {
        right: auto;
        left: 58.33333333%
    }

    .ant-col-sm-offset-14.ant-col-rtl {
        margin-right: 58.33333333%;
        margin-left: 0
    }

    .ant-col-sm-push-15.ant-col-rtl {
        right: 62.5%;
        left: auto
    }

    .ant-col-sm-pull-15.ant-col-rtl {
        right: auto;
        left: 62.5%
    }

    .ant-col-sm-offset-15.ant-col-rtl {
        margin-right: 62.5%;
        margin-left: 0
    }

    .ant-col-sm-push-16.ant-col-rtl {
        right: 66.66666667%;
        left: auto
    }

    .ant-col-sm-pull-16.ant-col-rtl {
        right: auto;
        left: 66.66666667%
    }

    .ant-col-sm-offset-16.ant-col-rtl {
        margin-right: 66.66666667%;
        margin-left: 0
    }

    .ant-col-sm-push-17.ant-col-rtl {
        right: 70.83333333%;
        left: auto
    }

    .ant-col-sm-pull-17.ant-col-rtl {
        right: auto;
        left: 70.83333333%
    }

    .ant-col-sm-offset-17.ant-col-rtl {
        margin-right: 70.83333333%;
        margin-left: 0
    }

    .ant-col-sm-push-18.ant-col-rtl {
        right: 75%;
        left: auto
    }

    .ant-col-sm-pull-18.ant-col-rtl {
        right: auto;
        left: 75%
    }

    .ant-col-sm-offset-18.ant-col-rtl {
        margin-right: 75%;
        margin-left: 0
    }

    .ant-col-sm-push-19.ant-col-rtl {
        right: 79.16666667%;
        left: auto
    }

    .ant-col-sm-pull-19.ant-col-rtl {
        right: auto;
        left: 79.16666667%
    }

    .ant-col-sm-offset-19.ant-col-rtl {
        margin-right: 79.16666667%;
        margin-left: 0
    }

    .ant-col-sm-push-20.ant-col-rtl {
        right: 83.33333333%;
        left: auto
    }

    .ant-col-sm-pull-20.ant-col-rtl {
        right: auto;
        left: 83.33333333%
    }

    .ant-col-sm-offset-20.ant-col-rtl {
        margin-right: 83.33333333%;
        margin-left: 0
    }

    .ant-col-sm-push-21.ant-col-rtl {
        right: 87.5%;
        left: auto
    }

    .ant-col-sm-pull-21.ant-col-rtl {
        right: auto;
        left: 87.5%
    }

    .ant-col-sm-offset-21.ant-col-rtl {
        margin-right: 87.5%;
        margin-left: 0
    }

    .ant-col-sm-push-22.ant-col-rtl {
        right: 91.66666667%;
        left: auto
    }

    .ant-col-sm-pull-22.ant-col-rtl {
        right: auto;
        left: 91.66666667%
    }

    .ant-col-sm-offset-22.ant-col-rtl {
        margin-right: 91.66666667%;
        margin-left: 0
    }

    .ant-col-sm-push-23.ant-col-rtl {
        right: 95.83333333%;
        left: auto
    }

    .ant-col-sm-pull-23.ant-col-rtl {
        right: auto;
        left: 95.83333333%
    }

    .ant-col-sm-offset-23.ant-col-rtl {
        margin-right: 95.83333333%;
        margin-left: 0
    }

    .ant-col-sm-push-24.ant-col-rtl {
        right: 100%;
        left: auto
    }

    .ant-col-sm-pull-24.ant-col-rtl {
        right: auto;
        left: 100%
    }

    .ant-col-sm-offset-24.ant-col-rtl {
        margin-right: 100%;
        margin-left: 0
    }
}

@media (min-width: 768px) {
    .ant-col-md-24 {
        display:block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        -webkit-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%
    }

    .ant-col-md-push-24 {
        left: 100%
    }

    .ant-col-md-pull-24 {
        right: 100%
    }

    .ant-col-md-offset-24 {
        margin-left: 100%
    }

    .ant-col-md-order-24 {
        -webkit-box-ordinal-group: 25;
        -ms-flex-order: 24;
        -webkit-order: 24;
        order: 24
    }

    .ant-col-md-23 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 95.83333333%;
        -webkit-flex: 0 0 95.83333333%;
        flex: 0 0 95.83333333%;
        max-width: 95.83333333%
    }

    .ant-col-md-push-23 {
        left: 95.83333333%
    }

    .ant-col-md-pull-23 {
        right: 95.83333333%
    }

    .ant-col-md-offset-23 {
        margin-left: 95.83333333%
    }

    .ant-col-md-order-23 {
        -webkit-box-ordinal-group: 24;
        -ms-flex-order: 23;
        -webkit-order: 23;
        order: 23
    }

    .ant-col-md-22 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 91.66666667%;
        -webkit-flex: 0 0 91.66666667%;
        flex: 0 0 91.66666667%;
        max-width: 91.66666667%
    }

    .ant-col-md-push-22 {
        left: 91.66666667%
    }

    .ant-col-md-pull-22 {
        right: 91.66666667%
    }

    .ant-col-md-offset-22 {
        margin-left: 91.66666667%
    }

    .ant-col-md-order-22 {
        -webkit-box-ordinal-group: 23;
        -ms-flex-order: 22;
        -webkit-order: 22;
        order: 22
    }

    .ant-col-md-21 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 87.5%;
        -webkit-flex: 0 0 87.5%;
        flex: 0 0 87.5%;
        max-width: 87.5%
    }

    .ant-col-md-push-21 {
        left: 87.5%
    }

    .ant-col-md-pull-21 {
        right: 87.5%
    }

    .ant-col-md-offset-21 {
        margin-left: 87.5%
    }

    .ant-col-md-order-21 {
        -webkit-box-ordinal-group: 22;
        -ms-flex-order: 21;
        -webkit-order: 21;
        order: 21
    }

    .ant-col-md-20 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 83.33333333%;
        -webkit-flex: 0 0 83.33333333%;
        flex: 0 0 83.33333333%;
        max-width: 83.33333333%
    }

    .ant-col-md-push-20 {
        left: 83.33333333%
    }

    .ant-col-md-pull-20 {
        right: 83.33333333%
    }

    .ant-col-md-offset-20 {
        margin-left: 83.33333333%
    }

    .ant-col-md-order-20 {
        -webkit-box-ordinal-group: 21;
        -ms-flex-order: 20;
        -webkit-order: 20;
        order: 20
    }

    .ant-col-md-19 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 79.16666667%;
        -webkit-flex: 0 0 79.16666667%;
        flex: 0 0 79.16666667%;
        max-width: 79.16666667%
    }

    .ant-col-md-push-19 {
        left: 79.16666667%
    }

    .ant-col-md-pull-19 {
        right: 79.16666667%
    }

    .ant-col-md-offset-19 {
        margin-left: 79.16666667%
    }

    .ant-col-md-order-19 {
        -webkit-box-ordinal-group: 20;
        -ms-flex-order: 19;
        -webkit-order: 19;
        order: 19
    }

    .ant-col-md-18 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
        -webkit-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%
    }

    .ant-col-md-push-18 {
        left: 75%
    }

    .ant-col-md-pull-18 {
        right: 75%
    }

    .ant-col-md-offset-18 {
        margin-left: 75%
    }

    .ant-col-md-order-18 {
        -webkit-box-ordinal-group: 19;
        -ms-flex-order: 18;
        -webkit-order: 18;
        order: 18
    }

    .ant-col-md-17 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 70.83333333%;
        -webkit-flex: 0 0 70.83333333%;
        flex: 0 0 70.83333333%;
        max-width: 70.83333333%
    }

    .ant-col-md-push-17 {
        left: 70.83333333%
    }

    .ant-col-md-pull-17 {
        right: 70.83333333%
    }

    .ant-col-md-offset-17 {
        margin-left: 70.83333333%
    }

    .ant-col-md-order-17 {
        -webkit-box-ordinal-group: 18;
        -ms-flex-order: 17;
        -webkit-order: 17;
        order: 17
    }

    .ant-col-md-16 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 66.66666667%;
        -webkit-flex: 0 0 66.66666667%;
        flex: 0 0 66.66666667%;
        max-width: 66.66666667%
    }

    .ant-col-md-push-16 {
        left: 66.66666667%
    }

    .ant-col-md-pull-16 {
        right: 66.66666667%
    }

    .ant-col-md-offset-16 {
        margin-left: 66.66666667%
    }

    .ant-col-md-order-16 {
        -webkit-box-ordinal-group: 17;
        -ms-flex-order: 16;
        -webkit-order: 16;
        order: 16
    }

    .ant-col-md-15 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 62.5%;
        -webkit-flex: 0 0 62.5%;
        flex: 0 0 62.5%;
        max-width: 62.5%
    }

    .ant-col-md-push-15 {
        left: 62.5%
    }

    .ant-col-md-pull-15 {
        right: 62.5%
    }

    .ant-col-md-offset-15 {
        margin-left: 62.5%
    }

    .ant-col-md-order-15 {
        -webkit-box-ordinal-group: 16;
        -ms-flex-order: 15;
        -webkit-order: 15;
        order: 15
    }

    .ant-col-md-14 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 58.33333333%;
        -webkit-flex: 0 0 58.33333333%;
        flex: 0 0 58.33333333%;
        max-width: 58.33333333%
    }

    .ant-col-md-push-14 {
        left: 58.33333333%
    }

    .ant-col-md-pull-14 {
        right: 58.33333333%
    }

    .ant-col-md-offset-14 {
        margin-left: 58.33333333%
    }

    .ant-col-md-order-14 {
        -webkit-box-ordinal-group: 15;
        -ms-flex-order: 14;
        -webkit-order: 14;
        order: 14
    }

    .ant-col-md-13 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 54.16666667%;
        -webkit-flex: 0 0 54.16666667%;
        flex: 0 0 54.16666667%;
        max-width: 54.16666667%
    }

    .ant-col-md-push-13 {
        left: 54.16666667%
    }

    .ant-col-md-pull-13 {
        right: 54.16666667%
    }

    .ant-col-md-offset-13 {
        margin-left: 54.16666667%
    }

    .ant-col-md-order-13 {
        -webkit-box-ordinal-group: 14;
        -ms-flex-order: 13;
        -webkit-order: 13;
        order: 13
    }

    .ant-col-md-12 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        -webkit-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%
    }

    .ant-col-md-push-12 {
        left: 50%
    }

    .ant-col-md-pull-12 {
        right: 50%
    }

    .ant-col-md-offset-12 {
        margin-left: 50%
    }

    .ant-col-md-order-12 {
        -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
        -webkit-order: 12;
        order: 12
    }

    .ant-col-md-11 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 45.83333333%;
        -webkit-flex: 0 0 45.83333333%;
        flex: 0 0 45.83333333%;
        max-width: 45.83333333%
    }

    .ant-col-md-push-11 {
        left: 45.83333333%
    }

    .ant-col-md-pull-11 {
        right: 45.83333333%
    }

    .ant-col-md-offset-11 {
        margin-left: 45.83333333%
    }

    .ant-col-md-order-11 {
        -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
        -webkit-order: 11;
        order: 11
    }

    .ant-col-md-10 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 41.66666667%;
        -webkit-flex: 0 0 41.66666667%;
        flex: 0 0 41.66666667%;
        max-width: 41.66666667%
    }

    .ant-col-md-push-10 {
        left: 41.66666667%
    }

    .ant-col-md-pull-10 {
        right: 41.66666667%
    }

    .ant-col-md-offset-10 {
        margin-left: 41.66666667%
    }

    .ant-col-md-order-10 {
        -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
        -webkit-order: 10;
        order: 10
    }

    .ant-col-md-9 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 37.5%;
        -webkit-flex: 0 0 37.5%;
        flex: 0 0 37.5%;
        max-width: 37.5%
    }

    .ant-col-md-push-9 {
        left: 37.5%
    }

    .ant-col-md-pull-9 {
        right: 37.5%
    }

    .ant-col-md-offset-9 {
        margin-left: 37.5%
    }

    .ant-col-md-order-9 {
        -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
        -webkit-order: 9;
        order: 9
    }

    .ant-col-md-8 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33.33333333%;
        -webkit-flex: 0 0 33.33333333%;
        flex: 0 0 33.33333333%;
        max-width: 33.33333333%
    }

    .ant-col-md-push-8 {
        left: 33.33333333%
    }

    .ant-col-md-pull-8 {
        right: 33.33333333%
    }

    .ant-col-md-offset-8 {
        margin-left: 33.33333333%
    }

    .ant-col-md-order-8 {
        -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
        -webkit-order: 8;
        order: 8
    }

    .ant-col-md-7 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 29.16666667%;
        -webkit-flex: 0 0 29.16666667%;
        flex: 0 0 29.16666667%;
        max-width: 29.16666667%
    }

    .ant-col-md-push-7 {
        left: 29.16666667%
    }

    .ant-col-md-pull-7 {
        right: 29.16666667%
    }

    .ant-col-md-offset-7 {
        margin-left: 29.16666667%
    }

    .ant-col-md-order-7 {
        -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
        -webkit-order: 7;
        order: 7
    }

    .ant-col-md-6 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        -webkit-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%
    }

    .ant-col-md-push-6 {
        left: 25%
    }

    .ant-col-md-pull-6 {
        right: 25%
    }

    .ant-col-md-offset-6 {
        margin-left: 25%
    }

    .ant-col-md-order-6 {
        -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
        -webkit-order: 6;
        order: 6
    }

    .ant-col-md-5 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 20.83333333%;
        -webkit-flex: 0 0 20.83333333%;
        flex: 0 0 20.83333333%;
        max-width: 20.83333333%
    }

    .ant-col-md-push-5 {
        left: 20.83333333%
    }

    .ant-col-md-pull-5 {
        right: 20.83333333%
    }

    .ant-col-md-offset-5 {
        margin-left: 20.83333333%
    }

    .ant-col-md-order-5 {
        -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
        -webkit-order: 5;
        order: 5
    }

    .ant-col-md-4 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 16.66666667%;
        -webkit-flex: 0 0 16.66666667%;
        flex: 0 0 16.66666667%;
        max-width: 16.66666667%
    }

    .ant-col-md-push-4 {
        left: 16.66666667%
    }

    .ant-col-md-pull-4 {
        right: 16.66666667%
    }

    .ant-col-md-offset-4 {
        margin-left: 16.66666667%
    }

    .ant-col-md-order-4 {
        -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
        -webkit-order: 4;
        order: 4
    }

    .ant-col-md-3 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 12.5%;
        -webkit-flex: 0 0 12.5%;
        flex: 0 0 12.5%;
        max-width: 12.5%
    }

    .ant-col-md-push-3 {
        left: 12.5%
    }

    .ant-col-md-pull-3 {
        right: 12.5%
    }

    .ant-col-md-offset-3 {
        margin-left: 12.5%
    }

    .ant-col-md-order-3 {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        -webkit-order: 3;
        order: 3
    }

    .ant-col-md-2 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 8.33333333%;
        -webkit-flex: 0 0 8.33333333%;
        flex: 0 0 8.33333333%;
        max-width: 8.33333333%
    }

    .ant-col-md-push-2 {
        left: 8.33333333%
    }

    .ant-col-md-pull-2 {
        right: 8.33333333%
    }

    .ant-col-md-offset-2 {
        margin-left: 8.33333333%
    }

    .ant-col-md-order-2 {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        -webkit-order: 2;
        order: 2
    }

    .ant-col-md-1 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 4.16666667%;
        -webkit-flex: 0 0 4.16666667%;
        flex: 0 0 4.16666667%;
        max-width: 4.16666667%
    }

    .ant-col-md-push-1 {
        left: 4.16666667%
    }

    .ant-col-md-pull-1 {
        right: 4.16666667%
    }

    .ant-col-md-offset-1 {
        margin-left: 4.16666667%
    }

    .ant-col-md-order-1 {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        -webkit-order: 1;
        order: 1
    }

    .ant-col-md-0 {
        display: none
    }

    .ant-col-push-0 {
        left: auto
    }

    .ant-col-pull-0 {
        right: auto
    }

    .ant-col-md-push-0 {
        left: auto
    }

    .ant-col-md-pull-0 {
        right: auto
    }

    .ant-col-md-offset-0 {
        margin-left: 0
    }

    .ant-col-md-order-0 {
        -webkit-box-ordinal-group: 1;
        -ms-flex-order: 0;
        -webkit-order: 0;
        order: 0
    }

    .ant-col-push-0.ant-col-rtl {
        right: auto
    }

    .ant-col-pull-0.ant-col-rtl {
        left: auto
    }

    .ant-col-md-push-0.ant-col-rtl {
        right: auto
    }

    .ant-col-md-pull-0.ant-col-rtl {
        left: auto
    }

    .ant-col-md-offset-0.ant-col-rtl {
        margin-right: 0
    }

    .ant-col-md-push-1.ant-col-rtl {
        right: 4.16666667%;
        left: auto
    }

    .ant-col-md-pull-1.ant-col-rtl {
        right: auto;
        left: 4.16666667%
    }

    .ant-col-md-offset-1.ant-col-rtl {
        margin-right: 4.16666667%;
        margin-left: 0
    }

    .ant-col-md-push-2.ant-col-rtl {
        right: 8.33333333%;
        left: auto
    }

    .ant-col-md-pull-2.ant-col-rtl {
        right: auto;
        left: 8.33333333%
    }

    .ant-col-md-offset-2.ant-col-rtl {
        margin-right: 8.33333333%;
        margin-left: 0
    }

    .ant-col-md-push-3.ant-col-rtl {
        right: 12.5%;
        left: auto
    }

    .ant-col-md-pull-3.ant-col-rtl {
        right: auto;
        left: 12.5%
    }

    .ant-col-md-offset-3.ant-col-rtl {
        margin-right: 12.5%;
        margin-left: 0
    }

    .ant-col-md-push-4.ant-col-rtl {
        right: 16.66666667%;
        left: auto
    }

    .ant-col-md-pull-4.ant-col-rtl {
        right: auto;
        left: 16.66666667%
    }

    .ant-col-md-offset-4.ant-col-rtl {
        margin-right: 16.66666667%;
        margin-left: 0
    }

    .ant-col-md-push-5.ant-col-rtl {
        right: 20.83333333%;
        left: auto
    }

    .ant-col-md-pull-5.ant-col-rtl {
        right: auto;
        left: 20.83333333%
    }

    .ant-col-md-offset-5.ant-col-rtl {
        margin-right: 20.83333333%;
        margin-left: 0
    }

    .ant-col-md-push-6.ant-col-rtl {
        right: 25%;
        left: auto
    }

    .ant-col-md-pull-6.ant-col-rtl {
        right: auto;
        left: 25%
    }

    .ant-col-md-offset-6.ant-col-rtl {
        margin-right: 25%;
        margin-left: 0
    }

    .ant-col-md-push-7.ant-col-rtl {
        right: 29.16666667%;
        left: auto
    }

    .ant-col-md-pull-7.ant-col-rtl {
        right: auto;
        left: 29.16666667%
    }

    .ant-col-md-offset-7.ant-col-rtl {
        margin-right: 29.16666667%;
        margin-left: 0
    }

    .ant-col-md-push-8.ant-col-rtl {
        right: 33.33333333%;
        left: auto
    }

    .ant-col-md-pull-8.ant-col-rtl {
        right: auto;
        left: 33.33333333%
    }

    .ant-col-md-offset-8.ant-col-rtl {
        margin-right: 33.33333333%;
        margin-left: 0
    }

    .ant-col-md-push-9.ant-col-rtl {
        right: 37.5%;
        left: auto
    }

    .ant-col-md-pull-9.ant-col-rtl {
        right: auto;
        left: 37.5%
    }

    .ant-col-md-offset-9.ant-col-rtl {
        margin-right: 37.5%;
        margin-left: 0
    }

    .ant-col-md-push-10.ant-col-rtl {
        right: 41.66666667%;
        left: auto
    }

    .ant-col-md-pull-10.ant-col-rtl {
        right: auto;
        left: 41.66666667%
    }

    .ant-col-md-offset-10.ant-col-rtl {
        margin-right: 41.66666667%;
        margin-left: 0
    }

    .ant-col-md-push-11.ant-col-rtl {
        right: 45.83333333%;
        left: auto
    }

    .ant-col-md-pull-11.ant-col-rtl {
        right: auto;
        left: 45.83333333%
    }

    .ant-col-md-offset-11.ant-col-rtl {
        margin-right: 45.83333333%;
        margin-left: 0
    }

    .ant-col-md-push-12.ant-col-rtl {
        right: 50%;
        left: auto
    }

    .ant-col-md-pull-12.ant-col-rtl {
        right: auto;
        left: 50%
    }

    .ant-col-md-offset-12.ant-col-rtl {
        margin-right: 50%;
        margin-left: 0
    }

    .ant-col-md-push-13.ant-col-rtl {
        right: 54.16666667%;
        left: auto
    }

    .ant-col-md-pull-13.ant-col-rtl {
        right: auto;
        left: 54.16666667%
    }

    .ant-col-md-offset-13.ant-col-rtl {
        margin-right: 54.16666667%;
        margin-left: 0
    }

    .ant-col-md-push-14.ant-col-rtl {
        right: 58.33333333%;
        left: auto
    }

    .ant-col-md-pull-14.ant-col-rtl {
        right: auto;
        left: 58.33333333%
    }

    .ant-col-md-offset-14.ant-col-rtl {
        margin-right: 58.33333333%;
        margin-left: 0
    }

    .ant-col-md-push-15.ant-col-rtl {
        right: 62.5%;
        left: auto
    }

    .ant-col-md-pull-15.ant-col-rtl {
        right: auto;
        left: 62.5%
    }

    .ant-col-md-offset-15.ant-col-rtl {
        margin-right: 62.5%;
        margin-left: 0
    }

    .ant-col-md-push-16.ant-col-rtl {
        right: 66.66666667%;
        left: auto
    }

    .ant-col-md-pull-16.ant-col-rtl {
        right: auto;
        left: 66.66666667%
    }

    .ant-col-md-offset-16.ant-col-rtl {
        margin-right: 66.66666667%;
        margin-left: 0
    }

    .ant-col-md-push-17.ant-col-rtl {
        right: 70.83333333%;
        left: auto
    }

    .ant-col-md-pull-17.ant-col-rtl {
        right: auto;
        left: 70.83333333%
    }

    .ant-col-md-offset-17.ant-col-rtl {
        margin-right: 70.83333333%;
        margin-left: 0
    }

    .ant-col-md-push-18.ant-col-rtl {
        right: 75%;
        left: auto
    }

    .ant-col-md-pull-18.ant-col-rtl {
        right: auto;
        left: 75%
    }

    .ant-col-md-offset-18.ant-col-rtl {
        margin-right: 75%;
        margin-left: 0
    }

    .ant-col-md-push-19.ant-col-rtl {
        right: 79.16666667%;
        left: auto
    }

    .ant-col-md-pull-19.ant-col-rtl {
        right: auto;
        left: 79.16666667%
    }

    .ant-col-md-offset-19.ant-col-rtl {
        margin-right: 79.16666667%;
        margin-left: 0
    }

    .ant-col-md-push-20.ant-col-rtl {
        right: 83.33333333%;
        left: auto
    }

    .ant-col-md-pull-20.ant-col-rtl {
        right: auto;
        left: 83.33333333%
    }

    .ant-col-md-offset-20.ant-col-rtl {
        margin-right: 83.33333333%;
        margin-left: 0
    }

    .ant-col-md-push-21.ant-col-rtl {
        right: 87.5%;
        left: auto
    }

    .ant-col-md-pull-21.ant-col-rtl {
        right: auto;
        left: 87.5%
    }

    .ant-col-md-offset-21.ant-col-rtl {
        margin-right: 87.5%;
        margin-left: 0
    }

    .ant-col-md-push-22.ant-col-rtl {
        right: 91.66666667%;
        left: auto
    }

    .ant-col-md-pull-22.ant-col-rtl {
        right: auto;
        left: 91.66666667%
    }

    .ant-col-md-offset-22.ant-col-rtl {
        margin-right: 91.66666667%;
        margin-left: 0
    }

    .ant-col-md-push-23.ant-col-rtl {
        right: 95.83333333%;
        left: auto
    }

    .ant-col-md-pull-23.ant-col-rtl {
        right: auto;
        left: 95.83333333%
    }

    .ant-col-md-offset-23.ant-col-rtl {
        margin-right: 95.83333333%;
        margin-left: 0
    }

    .ant-col-md-push-24.ant-col-rtl {
        right: 100%;
        left: auto
    }

    .ant-col-md-pull-24.ant-col-rtl {
        right: auto;
        left: 100%
    }

    .ant-col-md-offset-24.ant-col-rtl {
        margin-right: 100%;
        margin-left: 0
    }
}

@media (min-width: 992px) {
    .ant-col-lg-24 {
        display:block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        -webkit-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%
    }

    .ant-col-lg-push-24 {
        left: 100%
    }

    .ant-col-lg-pull-24 {
        right: 100%
    }

    .ant-col-lg-offset-24 {
        margin-left: 100%
    }

    .ant-col-lg-order-24 {
        -webkit-box-ordinal-group: 25;
        -ms-flex-order: 24;
        -webkit-order: 24;
        order: 24
    }

    .ant-col-lg-23 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 95.83333333%;
        -webkit-flex: 0 0 95.83333333%;
        flex: 0 0 95.83333333%;
        max-width: 95.83333333%
    }

    .ant-col-lg-push-23 {
        left: 95.83333333%
    }

    .ant-col-lg-pull-23 {
        right: 95.83333333%
    }

    .ant-col-lg-offset-23 {
        margin-left: 95.83333333%
    }

    .ant-col-lg-order-23 {
        -webkit-box-ordinal-group: 24;
        -ms-flex-order: 23;
        -webkit-order: 23;
        order: 23
    }

    .ant-col-lg-22 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 91.66666667%;
        -webkit-flex: 0 0 91.66666667%;
        flex: 0 0 91.66666667%;
        max-width: 91.66666667%
    }

    .ant-col-lg-push-22 {
        left: 91.66666667%
    }

    .ant-col-lg-pull-22 {
        right: 91.66666667%
    }

    .ant-col-lg-offset-22 {
        margin-left: 91.66666667%
    }

    .ant-col-lg-order-22 {
        -webkit-box-ordinal-group: 23;
        -ms-flex-order: 22;
        -webkit-order: 22;
        order: 22
    }

    .ant-col-lg-21 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 87.5%;
        -webkit-flex: 0 0 87.5%;
        flex: 0 0 87.5%;
        max-width: 87.5%
    }

    .ant-col-lg-push-21 {
        left: 87.5%
    }

    .ant-col-lg-pull-21 {
        right: 87.5%
    }

    .ant-col-lg-offset-21 {
        margin-left: 87.5%
    }

    .ant-col-lg-order-21 {
        -webkit-box-ordinal-group: 22;
        -ms-flex-order: 21;
        -webkit-order: 21;
        order: 21
    }

    .ant-col-lg-20 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 83.33333333%;
        -webkit-flex: 0 0 83.33333333%;
        flex: 0 0 83.33333333%;
        max-width: 83.33333333%
    }

    .ant-col-lg-push-20 {
        left: 83.33333333%
    }

    .ant-col-lg-pull-20 {
        right: 83.33333333%
    }

    .ant-col-lg-offset-20 {
        margin-left: 83.33333333%
    }

    .ant-col-lg-order-20 {
        -webkit-box-ordinal-group: 21;
        -ms-flex-order: 20;
        -webkit-order: 20;
        order: 20
    }

    .ant-col-lg-19 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 79.16666667%;
        -webkit-flex: 0 0 79.16666667%;
        flex: 0 0 79.16666667%;
        max-width: 79.16666667%
    }

    .ant-col-lg-push-19 {
        left: 79.16666667%
    }

    .ant-col-lg-pull-19 {
        right: 79.16666667%
    }

    .ant-col-lg-offset-19 {
        margin-left: 79.16666667%
    }

    .ant-col-lg-order-19 {
        -webkit-box-ordinal-group: 20;
        -ms-flex-order: 19;
        -webkit-order: 19;
        order: 19
    }

    .ant-col-lg-18 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
        -webkit-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%
    }

    .ant-col-lg-push-18 {
        left: 75%
    }

    .ant-col-lg-pull-18 {
        right: 75%
    }

    .ant-col-lg-offset-18 {
        margin-left: 75%
    }

    .ant-col-lg-order-18 {
        -webkit-box-ordinal-group: 19;
        -ms-flex-order: 18;
        -webkit-order: 18;
        order: 18
    }

    .ant-col-lg-17 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 70.83333333%;
        -webkit-flex: 0 0 70.83333333%;
        flex: 0 0 70.83333333%;
        max-width: 70.83333333%
    }

    .ant-col-lg-push-17 {
        left: 70.83333333%
    }

    .ant-col-lg-pull-17 {
        right: 70.83333333%
    }

    .ant-col-lg-offset-17 {
        margin-left: 70.83333333%
    }

    .ant-col-lg-order-17 {
        -webkit-box-ordinal-group: 18;
        -ms-flex-order: 17;
        -webkit-order: 17;
        order: 17
    }

    .ant-col-lg-16 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 66.66666667%;
        -webkit-flex: 0 0 66.66666667%;
        flex: 0 0 66.66666667%;
        max-width: 66.66666667%
    }

    .ant-col-lg-push-16 {
        left: 66.66666667%
    }

    .ant-col-lg-pull-16 {
        right: 66.66666667%
    }

    .ant-col-lg-offset-16 {
        margin-left: 66.66666667%
    }

    .ant-col-lg-order-16 {
        -webkit-box-ordinal-group: 17;
        -ms-flex-order: 16;
        -webkit-order: 16;
        order: 16
    }

    .ant-col-lg-15 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 62.5%;
        -webkit-flex: 0 0 62.5%;
        flex: 0 0 62.5%;
        max-width: 62.5%
    }

    .ant-col-lg-push-15 {
        left: 62.5%
    }

    .ant-col-lg-pull-15 {
        right: 62.5%
    }

    .ant-col-lg-offset-15 {
        margin-left: 62.5%
    }

    .ant-col-lg-order-15 {
        -webkit-box-ordinal-group: 16;
        -ms-flex-order: 15;
        -webkit-order: 15;
        order: 15
    }

    .ant-col-lg-14 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 58.33333333%;
        -webkit-flex: 0 0 58.33333333%;
        flex: 0 0 58.33333333%;
        max-width: 58.33333333%
    }

    .ant-col-lg-push-14 {
        left: 58.33333333%
    }

    .ant-col-lg-pull-14 {
        right: 58.33333333%
    }

    .ant-col-lg-offset-14 {
        margin-left: 58.33333333%
    }

    .ant-col-lg-order-14 {
        -webkit-box-ordinal-group: 15;
        -ms-flex-order: 14;
        -webkit-order: 14;
        order: 14
    }

    .ant-col-lg-13 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 54.16666667%;
        -webkit-flex: 0 0 54.16666667%;
        flex: 0 0 54.16666667%;
        max-width: 54.16666667%
    }

    .ant-col-lg-push-13 {
        left: 54.16666667%
    }

    .ant-col-lg-pull-13 {
        right: 54.16666667%
    }

    .ant-col-lg-offset-13 {
        margin-left: 54.16666667%
    }

    .ant-col-lg-order-13 {
        -webkit-box-ordinal-group: 14;
        -ms-flex-order: 13;
        -webkit-order: 13;
        order: 13
    }

    .ant-col-lg-12 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        -webkit-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%
    }

    .ant-col-lg-push-12 {
        left: 50%
    }

    .ant-col-lg-pull-12 {
        right: 50%
    }

    .ant-col-lg-offset-12 {
        margin-left: 50%
    }

    .ant-col-lg-order-12 {
        -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
        -webkit-order: 12;
        order: 12
    }

    .ant-col-lg-11 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 45.83333333%;
        -webkit-flex: 0 0 45.83333333%;
        flex: 0 0 45.83333333%;
        max-width: 45.83333333%
    }

    .ant-col-lg-push-11 {
        left: 45.83333333%
    }

    .ant-col-lg-pull-11 {
        right: 45.83333333%
    }

    .ant-col-lg-offset-11 {
        margin-left: 45.83333333%
    }

    .ant-col-lg-order-11 {
        -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
        -webkit-order: 11;
        order: 11
    }

    .ant-col-lg-10 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 41.66666667%;
        -webkit-flex: 0 0 41.66666667%;
        flex: 0 0 41.66666667%;
        max-width: 41.66666667%
    }

    .ant-col-lg-push-10 {
        left: 41.66666667%
    }

    .ant-col-lg-pull-10 {
        right: 41.66666667%
    }

    .ant-col-lg-offset-10 {
        margin-left: 41.66666667%
    }

    .ant-col-lg-order-10 {
        -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
        -webkit-order: 10;
        order: 10
    }

    .ant-col-lg-9 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 37.5%;
        -webkit-flex: 0 0 37.5%;
        flex: 0 0 37.5%;
        max-width: 37.5%
    }

    .ant-col-lg-push-9 {
        left: 37.5%
    }

    .ant-col-lg-pull-9 {
        right: 37.5%
    }

    .ant-col-lg-offset-9 {
        margin-left: 37.5%
    }

    .ant-col-lg-order-9 {
        -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
        -webkit-order: 9;
        order: 9
    }

    .ant-col-lg-8 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33.33333333%;
        -webkit-flex: 0 0 33.33333333%;
        flex: 0 0 33.33333333%;
        max-width: 33.33333333%
    }

    .ant-col-lg-push-8 {
        left: 33.33333333%
    }

    .ant-col-lg-pull-8 {
        right: 33.33333333%
    }

    .ant-col-lg-offset-8 {
        margin-left: 33.33333333%
    }

    .ant-col-lg-order-8 {
        -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
        -webkit-order: 8;
        order: 8
    }

    .ant-col-lg-7 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 29.16666667%;
        -webkit-flex: 0 0 29.16666667%;
        flex: 0 0 29.16666667%;
        max-width: 29.16666667%
    }

    .ant-col-lg-push-7 {
        left: 29.16666667%
    }

    .ant-col-lg-pull-7 {
        right: 29.16666667%
    }

    .ant-col-lg-offset-7 {
        margin-left: 29.16666667%
    }

    .ant-col-lg-order-7 {
        -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
        -webkit-order: 7;
        order: 7
    }

    .ant-col-lg-6 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        -webkit-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%
    }

    .ant-col-lg-push-6 {
        left: 25%
    }

    .ant-col-lg-pull-6 {
        right: 25%
    }

    .ant-col-lg-offset-6 {
        margin-left: 25%
    }

    .ant-col-lg-order-6 {
        -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
        -webkit-order: 6;
        order: 6
    }

    .ant-col-lg-5 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 20.83333333%;
        -webkit-flex: 0 0 20.83333333%;
        flex: 0 0 20.83333333%;
        max-width: 20.83333333%
    }

    .ant-col-lg-push-5 {
        left: 20.83333333%
    }

    .ant-col-lg-pull-5 {
        right: 20.83333333%
    }

    .ant-col-lg-offset-5 {
        margin-left: 20.83333333%
    }

    .ant-col-lg-order-5 {
        -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
        -webkit-order: 5;
        order: 5
    }

    .ant-col-lg-4 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 16.66666667%;
        -webkit-flex: 0 0 16.66666667%;
        flex: 0 0 16.66666667%;
        max-width: 16.66666667%
    }

    .ant-col-lg-push-4 {
        left: 16.66666667%
    }

    .ant-col-lg-pull-4 {
        right: 16.66666667%
    }

    .ant-col-lg-offset-4 {
        margin-left: 16.66666667%
    }

    .ant-col-lg-order-4 {
        -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
        -webkit-order: 4;
        order: 4
    }

    .ant-col-lg-3 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 12.5%;
        -webkit-flex: 0 0 12.5%;
        flex: 0 0 12.5%;
        max-width: 12.5%
    }

    .ant-col-lg-push-3 {
        left: 12.5%
    }

    .ant-col-lg-pull-3 {
        right: 12.5%
    }

    .ant-col-lg-offset-3 {
        margin-left: 12.5%
    }

    .ant-col-lg-order-3 {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        -webkit-order: 3;
        order: 3
    }

    .ant-col-lg-2 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 8.33333333%;
        -webkit-flex: 0 0 8.33333333%;
        flex: 0 0 8.33333333%;
        max-width: 8.33333333%
    }

    .ant-col-lg-push-2 {
        left: 8.33333333%
    }

    .ant-col-lg-pull-2 {
        right: 8.33333333%
    }

    .ant-col-lg-offset-2 {
        margin-left: 8.33333333%
    }

    .ant-col-lg-order-2 {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        -webkit-order: 2;
        order: 2
    }

    .ant-col-lg-1 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 4.16666667%;
        -webkit-flex: 0 0 4.16666667%;
        flex: 0 0 4.16666667%;
        max-width: 4.16666667%
    }

    .ant-col-lg-push-1 {
        left: 4.16666667%
    }

    .ant-col-lg-pull-1 {
        right: 4.16666667%
    }

    .ant-col-lg-offset-1 {
        margin-left: 4.16666667%
    }

    .ant-col-lg-order-1 {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        -webkit-order: 1;
        order: 1
    }

    .ant-col-lg-0 {
        display: none
    }

    .ant-col-push-0 {
        left: auto
    }

    .ant-col-pull-0 {
        right: auto
    }

    .ant-col-lg-push-0 {
        left: auto
    }

    .ant-col-lg-pull-0 {
        right: auto
    }

    .ant-col-lg-offset-0 {
        margin-left: 0
    }

    .ant-col-lg-order-0 {
        -webkit-box-ordinal-group: 1;
        -ms-flex-order: 0;
        -webkit-order: 0;
        order: 0
    }

    .ant-col-push-0.ant-col-rtl {
        right: auto
    }

    .ant-col-pull-0.ant-col-rtl {
        left: auto
    }

    .ant-col-lg-push-0.ant-col-rtl {
        right: auto
    }

    .ant-col-lg-pull-0.ant-col-rtl {
        left: auto
    }

    .ant-col-lg-offset-0.ant-col-rtl {
        margin-right: 0
    }

    .ant-col-lg-push-1.ant-col-rtl {
        right: 4.16666667%;
        left: auto
    }

    .ant-col-lg-pull-1.ant-col-rtl {
        right: auto;
        left: 4.16666667%
    }

    .ant-col-lg-offset-1.ant-col-rtl {
        margin-right: 4.16666667%;
        margin-left: 0
    }

    .ant-col-lg-push-2.ant-col-rtl {
        right: 8.33333333%;
        left: auto
    }

    .ant-col-lg-pull-2.ant-col-rtl {
        right: auto;
        left: 8.33333333%
    }

    .ant-col-lg-offset-2.ant-col-rtl {
        margin-right: 8.33333333%;
        margin-left: 0
    }

    .ant-col-lg-push-3.ant-col-rtl {
        right: 12.5%;
        left: auto
    }

    .ant-col-lg-pull-3.ant-col-rtl {
        right: auto;
        left: 12.5%
    }

    .ant-col-lg-offset-3.ant-col-rtl {
        margin-right: 12.5%;
        margin-left: 0
    }

    .ant-col-lg-push-4.ant-col-rtl {
        right: 16.66666667%;
        left: auto
    }

    .ant-col-lg-pull-4.ant-col-rtl {
        right: auto;
        left: 16.66666667%
    }

    .ant-col-lg-offset-4.ant-col-rtl {
        margin-right: 16.66666667%;
        margin-left: 0
    }

    .ant-col-lg-push-5.ant-col-rtl {
        right: 20.83333333%;
        left: auto
    }

    .ant-col-lg-pull-5.ant-col-rtl {
        right: auto;
        left: 20.83333333%
    }

    .ant-col-lg-offset-5.ant-col-rtl {
        margin-right: 20.83333333%;
        margin-left: 0
    }

    .ant-col-lg-push-6.ant-col-rtl {
        right: 25%;
        left: auto
    }

    .ant-col-lg-pull-6.ant-col-rtl {
        right: auto;
        left: 25%
    }

    .ant-col-lg-offset-6.ant-col-rtl {
        margin-right: 25%;
        margin-left: 0
    }

    .ant-col-lg-push-7.ant-col-rtl {
        right: 29.16666667%;
        left: auto
    }

    .ant-col-lg-pull-7.ant-col-rtl {
        right: auto;
        left: 29.16666667%
    }

    .ant-col-lg-offset-7.ant-col-rtl {
        margin-right: 29.16666667%;
        margin-left: 0
    }

    .ant-col-lg-push-8.ant-col-rtl {
        right: 33.33333333%;
        left: auto
    }

    .ant-col-lg-pull-8.ant-col-rtl {
        right: auto;
        left: 33.33333333%
    }

    .ant-col-lg-offset-8.ant-col-rtl {
        margin-right: 33.33333333%;
        margin-left: 0
    }

    .ant-col-lg-push-9.ant-col-rtl {
        right: 37.5%;
        left: auto
    }

    .ant-col-lg-pull-9.ant-col-rtl {
        right: auto;
        left: 37.5%
    }

    .ant-col-lg-offset-9.ant-col-rtl {
        margin-right: 37.5%;
        margin-left: 0
    }

    .ant-col-lg-push-10.ant-col-rtl {
        right: 41.66666667%;
        left: auto
    }

    .ant-col-lg-pull-10.ant-col-rtl {
        right: auto;
        left: 41.66666667%
    }

    .ant-col-lg-offset-10.ant-col-rtl {
        margin-right: 41.66666667%;
        margin-left: 0
    }

    .ant-col-lg-push-11.ant-col-rtl {
        right: 45.83333333%;
        left: auto
    }

    .ant-col-lg-pull-11.ant-col-rtl {
        right: auto;
        left: 45.83333333%
    }

    .ant-col-lg-offset-11.ant-col-rtl {
        margin-right: 45.83333333%;
        margin-left: 0
    }

    .ant-col-lg-push-12.ant-col-rtl {
        right: 50%;
        left: auto
    }

    .ant-col-lg-pull-12.ant-col-rtl {
        right: auto;
        left: 50%
    }

    .ant-col-lg-offset-12.ant-col-rtl {
        margin-right: 50%;
        margin-left: 0
    }

    .ant-col-lg-push-13.ant-col-rtl {
        right: 54.16666667%;
        left: auto
    }

    .ant-col-lg-pull-13.ant-col-rtl {
        right: auto;
        left: 54.16666667%
    }

    .ant-col-lg-offset-13.ant-col-rtl {
        margin-right: 54.16666667%;
        margin-left: 0
    }

    .ant-col-lg-push-14.ant-col-rtl {
        right: 58.33333333%;
        left: auto
    }

    .ant-col-lg-pull-14.ant-col-rtl {
        right: auto;
        left: 58.33333333%
    }

    .ant-col-lg-offset-14.ant-col-rtl {
        margin-right: 58.33333333%;
        margin-left: 0
    }

    .ant-col-lg-push-15.ant-col-rtl {
        right: 62.5%;
        left: auto
    }

    .ant-col-lg-pull-15.ant-col-rtl {
        right: auto;
        left: 62.5%
    }

    .ant-col-lg-offset-15.ant-col-rtl {
        margin-right: 62.5%;
        margin-left: 0
    }

    .ant-col-lg-push-16.ant-col-rtl {
        right: 66.66666667%;
        left: auto
    }

    .ant-col-lg-pull-16.ant-col-rtl {
        right: auto;
        left: 66.66666667%
    }

    .ant-col-lg-offset-16.ant-col-rtl {
        margin-right: 66.66666667%;
        margin-left: 0
    }

    .ant-col-lg-push-17.ant-col-rtl {
        right: 70.83333333%;
        left: auto
    }

    .ant-col-lg-pull-17.ant-col-rtl {
        right: auto;
        left: 70.83333333%
    }

    .ant-col-lg-offset-17.ant-col-rtl {
        margin-right: 70.83333333%;
        margin-left: 0
    }

    .ant-col-lg-push-18.ant-col-rtl {
        right: 75%;
        left: auto
    }

    .ant-col-lg-pull-18.ant-col-rtl {
        right: auto;
        left: 75%
    }

    .ant-col-lg-offset-18.ant-col-rtl {
        margin-right: 75%;
        margin-left: 0
    }

    .ant-col-lg-push-19.ant-col-rtl {
        right: 79.16666667%;
        left: auto
    }

    .ant-col-lg-pull-19.ant-col-rtl {
        right: auto;
        left: 79.16666667%
    }

    .ant-col-lg-offset-19.ant-col-rtl {
        margin-right: 79.16666667%;
        margin-left: 0
    }

    .ant-col-lg-push-20.ant-col-rtl {
        right: 83.33333333%;
        left: auto
    }

    .ant-col-lg-pull-20.ant-col-rtl {
        right: auto;
        left: 83.33333333%
    }

    .ant-col-lg-offset-20.ant-col-rtl {
        margin-right: 83.33333333%;
        margin-left: 0
    }

    .ant-col-lg-push-21.ant-col-rtl {
        right: 87.5%;
        left: auto
    }

    .ant-col-lg-pull-21.ant-col-rtl {
        right: auto;
        left: 87.5%
    }

    .ant-col-lg-offset-21.ant-col-rtl {
        margin-right: 87.5%;
        margin-left: 0
    }

    .ant-col-lg-push-22.ant-col-rtl {
        right: 91.66666667%;
        left: auto
    }

    .ant-col-lg-pull-22.ant-col-rtl {
        right: auto;
        left: 91.66666667%
    }

    .ant-col-lg-offset-22.ant-col-rtl {
        margin-right: 91.66666667%;
        margin-left: 0
    }

    .ant-col-lg-push-23.ant-col-rtl {
        right: 95.83333333%;
        left: auto
    }

    .ant-col-lg-pull-23.ant-col-rtl {
        right: auto;
        left: 95.83333333%
    }

    .ant-col-lg-offset-23.ant-col-rtl {
        margin-right: 95.83333333%;
        margin-left: 0
    }

    .ant-col-lg-push-24.ant-col-rtl {
        right: 100%;
        left: auto
    }

    .ant-col-lg-pull-24.ant-col-rtl {
        right: auto;
        left: 100%
    }

    .ant-col-lg-offset-24.ant-col-rtl {
        margin-right: 100%;
        margin-left: 0
    }
}

@media (min-width: 1200px) {
    .ant-col-xl-24 {
        display:block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        -webkit-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%
    }

    .ant-col-xl-push-24 {
        left: 100%
    }

    .ant-col-xl-pull-24 {
        right: 100%
    }

    .ant-col-xl-offset-24 {
        margin-left: 100%
    }

    .ant-col-xl-order-24 {
        -webkit-box-ordinal-group: 25;
        -ms-flex-order: 24;
        -webkit-order: 24;
        order: 24
    }

    .ant-col-xl-23 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 95.83333333%;
        -webkit-flex: 0 0 95.83333333%;
        flex: 0 0 95.83333333%;
        max-width: 95.83333333%
    }

    .ant-col-xl-push-23 {
        left: 95.83333333%
    }

    .ant-col-xl-pull-23 {
        right: 95.83333333%
    }

    .ant-col-xl-offset-23 {
        margin-left: 95.83333333%
    }

    .ant-col-xl-order-23 {
        -webkit-box-ordinal-group: 24;
        -ms-flex-order: 23;
        -webkit-order: 23;
        order: 23
    }

    .ant-col-xl-22 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 91.66666667%;
        -webkit-flex: 0 0 91.66666667%;
        flex: 0 0 91.66666667%;
        max-width: 91.66666667%
    }

    .ant-col-xl-push-22 {
        left: 91.66666667%
    }

    .ant-col-xl-pull-22 {
        right: 91.66666667%
    }

    .ant-col-xl-offset-22 {
        margin-left: 91.66666667%
    }

    .ant-col-xl-order-22 {
        -webkit-box-ordinal-group: 23;
        -ms-flex-order: 22;
        -webkit-order: 22;
        order: 22
    }

    .ant-col-xl-21 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 87.5%;
        -webkit-flex: 0 0 87.5%;
        flex: 0 0 87.5%;
        max-width: 87.5%
    }

    .ant-col-xl-push-21 {
        left: 87.5%
    }

    .ant-col-xl-pull-21 {
        right: 87.5%
    }

    .ant-col-xl-offset-21 {
        margin-left: 87.5%
    }

    .ant-col-xl-order-21 {
        -webkit-box-ordinal-group: 22;
        -ms-flex-order: 21;
        -webkit-order: 21;
        order: 21
    }

    .ant-col-xl-20 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 83.33333333%;
        -webkit-flex: 0 0 83.33333333%;
        flex: 0 0 83.33333333%;
        max-width: 83.33333333%
    }

    .ant-col-xl-push-20 {
        left: 83.33333333%
    }

    .ant-col-xl-pull-20 {
        right: 83.33333333%
    }

    .ant-col-xl-offset-20 {
        margin-left: 83.33333333%
    }

    .ant-col-xl-order-20 {
        -webkit-box-ordinal-group: 21;
        -ms-flex-order: 20;
        -webkit-order: 20;
        order: 20
    }

    .ant-col-xl-19 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 79.16666667%;
        -webkit-flex: 0 0 79.16666667%;
        flex: 0 0 79.16666667%;
        max-width: 79.16666667%
    }

    .ant-col-xl-push-19 {
        left: 79.16666667%
    }

    .ant-col-xl-pull-19 {
        right: 79.16666667%
    }

    .ant-col-xl-offset-19 {
        margin-left: 79.16666667%
    }

    .ant-col-xl-order-19 {
        -webkit-box-ordinal-group: 20;
        -ms-flex-order: 19;
        -webkit-order: 19;
        order: 19
    }

    .ant-col-xl-18 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
        -webkit-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%
    }

    .ant-col-xl-push-18 {
        left: 75%
    }

    .ant-col-xl-pull-18 {
        right: 75%
    }

    .ant-col-xl-offset-18 {
        margin-left: 75%
    }

    .ant-col-xl-order-18 {
        -webkit-box-ordinal-group: 19;
        -ms-flex-order: 18;
        -webkit-order: 18;
        order: 18
    }

    .ant-col-xl-17 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 70.83333333%;
        -webkit-flex: 0 0 70.83333333%;
        flex: 0 0 70.83333333%;
        max-width: 70.83333333%
    }

    .ant-col-xl-push-17 {
        left: 70.83333333%
    }

    .ant-col-xl-pull-17 {
        right: 70.83333333%
    }

    .ant-col-xl-offset-17 {
        margin-left: 70.83333333%
    }

    .ant-col-xl-order-17 {
        -webkit-box-ordinal-group: 18;
        -ms-flex-order: 17;
        -webkit-order: 17;
        order: 17
    }

    .ant-col-xl-16 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 66.66666667%;
        -webkit-flex: 0 0 66.66666667%;
        flex: 0 0 66.66666667%;
        max-width: 66.66666667%
    }

    .ant-col-xl-push-16 {
        left: 66.66666667%
    }

    .ant-col-xl-pull-16 {
        right: 66.66666667%
    }

    .ant-col-xl-offset-16 {
        margin-left: 66.66666667%
    }

    .ant-col-xl-order-16 {
        -webkit-box-ordinal-group: 17;
        -ms-flex-order: 16;
        -webkit-order: 16;
        order: 16
    }

    .ant-col-xl-15 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 62.5%;
        -webkit-flex: 0 0 62.5%;
        flex: 0 0 62.5%;
        max-width: 62.5%
    }

    .ant-col-xl-push-15 {
        left: 62.5%
    }

    .ant-col-xl-pull-15 {
        right: 62.5%
    }

    .ant-col-xl-offset-15 {
        margin-left: 62.5%
    }

    .ant-col-xl-order-15 {
        -webkit-box-ordinal-group: 16;
        -ms-flex-order: 15;
        -webkit-order: 15;
        order: 15
    }

    .ant-col-xl-14 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 58.33333333%;
        -webkit-flex: 0 0 58.33333333%;
        flex: 0 0 58.33333333%;
        max-width: 58.33333333%
    }

    .ant-col-xl-push-14 {
        left: 58.33333333%
    }

    .ant-col-xl-pull-14 {
        right: 58.33333333%
    }

    .ant-col-xl-offset-14 {
        margin-left: 58.33333333%
    }

    .ant-col-xl-order-14 {
        -webkit-box-ordinal-group: 15;
        -ms-flex-order: 14;
        -webkit-order: 14;
        order: 14
    }

    .ant-col-xl-13 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 54.16666667%;
        -webkit-flex: 0 0 54.16666667%;
        flex: 0 0 54.16666667%;
        max-width: 54.16666667%
    }

    .ant-col-xl-push-13 {
        left: 54.16666667%
    }

    .ant-col-xl-pull-13 {
        right: 54.16666667%
    }

    .ant-col-xl-offset-13 {
        margin-left: 54.16666667%
    }

    .ant-col-xl-order-13 {
        -webkit-box-ordinal-group: 14;
        -ms-flex-order: 13;
        -webkit-order: 13;
        order: 13
    }

    .ant-col-xl-12 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        -webkit-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%
    }

    .ant-col-xl-push-12 {
        left: 50%
    }

    .ant-col-xl-pull-12 {
        right: 50%
    }

    .ant-col-xl-offset-12 {
        margin-left: 50%
    }

    .ant-col-xl-order-12 {
        -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
        -webkit-order: 12;
        order: 12
    }

    .ant-col-xl-11 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 45.83333333%;
        -webkit-flex: 0 0 45.83333333%;
        flex: 0 0 45.83333333%;
        max-width: 45.83333333%
    }

    .ant-col-xl-push-11 {
        left: 45.83333333%
    }

    .ant-col-xl-pull-11 {
        right: 45.83333333%
    }

    .ant-col-xl-offset-11 {
        margin-left: 45.83333333%
    }

    .ant-col-xl-order-11 {
        -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
        -webkit-order: 11;
        order: 11
    }

    .ant-col-xl-10 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 41.66666667%;
        -webkit-flex: 0 0 41.66666667%;
        flex: 0 0 41.66666667%;
        max-width: 41.66666667%
    }

    .ant-col-xl-push-10 {
        left: 41.66666667%
    }

    .ant-col-xl-pull-10 {
        right: 41.66666667%
    }

    .ant-col-xl-offset-10 {
        margin-left: 41.66666667%
    }

    .ant-col-xl-order-10 {
        -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
        -webkit-order: 10;
        order: 10
    }

    .ant-col-xl-9 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 37.5%;
        -webkit-flex: 0 0 37.5%;
        flex: 0 0 37.5%;
        max-width: 37.5%
    }

    .ant-col-xl-push-9 {
        left: 37.5%
    }

    .ant-col-xl-pull-9 {
        right: 37.5%
    }

    .ant-col-xl-offset-9 {
        margin-left: 37.5%
    }

    .ant-col-xl-order-9 {
        -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
        -webkit-order: 9;
        order: 9
    }

    .ant-col-xl-8 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33.33333333%;
        -webkit-flex: 0 0 33.33333333%;
        flex: 0 0 33.33333333%;
        max-width: 33.33333333%
    }

    .ant-col-xl-push-8 {
        left: 33.33333333%
    }

    .ant-col-xl-pull-8 {
        right: 33.33333333%
    }

    .ant-col-xl-offset-8 {
        margin-left: 33.33333333%
    }

    .ant-col-xl-order-8 {
        -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
        -webkit-order: 8;
        order: 8
    }

    .ant-col-xl-7 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 29.16666667%;
        -webkit-flex: 0 0 29.16666667%;
        flex: 0 0 29.16666667%;
        max-width: 29.16666667%
    }

    .ant-col-xl-push-7 {
        left: 29.16666667%
    }

    .ant-col-xl-pull-7 {
        right: 29.16666667%
    }

    .ant-col-xl-offset-7 {
        margin-left: 29.16666667%
    }

    .ant-col-xl-order-7 {
        -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
        -webkit-order: 7;
        order: 7
    }

    .ant-col-xl-6 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        -webkit-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%
    }

    .ant-col-xl-push-6 {
        left: 25%
    }

    .ant-col-xl-pull-6 {
        right: 25%
    }

    .ant-col-xl-offset-6 {
        margin-left: 25%
    }

    .ant-col-xl-order-6 {
        -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
        -webkit-order: 6;
        order: 6
    }

    .ant-col-xl-5 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 20.83333333%;
        -webkit-flex: 0 0 20.83333333%;
        flex: 0 0 20.83333333%;
        max-width: 20.83333333%
    }

    .ant-col-xl-push-5 {
        left: 20.83333333%
    }

    .ant-col-xl-pull-5 {
        right: 20.83333333%
    }

    .ant-col-xl-offset-5 {
        margin-left: 20.83333333%
    }

    .ant-col-xl-order-5 {
        -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
        -webkit-order: 5;
        order: 5
    }

    .ant-col-xl-4 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 16.66666667%;
        -webkit-flex: 0 0 16.66666667%;
        flex: 0 0 16.66666667%;
        max-width: 16.66666667%
    }

    .ant-col-xl-push-4 {
        left: 16.66666667%
    }

    .ant-col-xl-pull-4 {
        right: 16.66666667%
    }

    .ant-col-xl-offset-4 {
        margin-left: 16.66666667%
    }

    .ant-col-xl-order-4 {
        -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
        -webkit-order: 4;
        order: 4
    }

    .ant-col-xl-3 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 12.5%;
        -webkit-flex: 0 0 12.5%;
        flex: 0 0 12.5%;
        max-width: 12.5%
    }

    .ant-col-xl-push-3 {
        left: 12.5%
    }

    .ant-col-xl-pull-3 {
        right: 12.5%
    }

    .ant-col-xl-offset-3 {
        margin-left: 12.5%
    }

    .ant-col-xl-order-3 {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        -webkit-order: 3;
        order: 3
    }

    .ant-col-xl-2 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 8.33333333%;
        -webkit-flex: 0 0 8.33333333%;
        flex: 0 0 8.33333333%;
        max-width: 8.33333333%
    }

    .ant-col-xl-push-2 {
        left: 8.33333333%
    }

    .ant-col-xl-pull-2 {
        right: 8.33333333%
    }

    .ant-col-xl-offset-2 {
        margin-left: 8.33333333%
    }

    .ant-col-xl-order-2 {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        -webkit-order: 2;
        order: 2
    }

    .ant-col-xl-1 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 4.16666667%;
        -webkit-flex: 0 0 4.16666667%;
        flex: 0 0 4.16666667%;
        max-width: 4.16666667%
    }

    .ant-col-xl-push-1 {
        left: 4.16666667%
    }

    .ant-col-xl-pull-1 {
        right: 4.16666667%
    }

    .ant-col-xl-offset-1 {
        margin-left: 4.16666667%
    }

    .ant-col-xl-order-1 {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        -webkit-order: 1;
        order: 1
    }

    .ant-col-xl-0 {
        display: none
    }

    .ant-col-push-0 {
        left: auto
    }

    .ant-col-pull-0 {
        right: auto
    }

    .ant-col-xl-push-0 {
        left: auto
    }

    .ant-col-xl-pull-0 {
        right: auto
    }

    .ant-col-xl-offset-0 {
        margin-left: 0
    }

    .ant-col-xl-order-0 {
        -webkit-box-ordinal-group: 1;
        -ms-flex-order: 0;
        -webkit-order: 0;
        order: 0
    }

    .ant-col-push-0.ant-col-rtl {
        right: auto
    }

    .ant-col-pull-0.ant-col-rtl {
        left: auto
    }

    .ant-col-xl-push-0.ant-col-rtl {
        right: auto
    }

    .ant-col-xl-pull-0.ant-col-rtl {
        left: auto
    }

    .ant-col-xl-offset-0.ant-col-rtl {
        margin-right: 0
    }

    .ant-col-xl-push-1.ant-col-rtl {
        right: 4.16666667%;
        left: auto
    }

    .ant-col-xl-pull-1.ant-col-rtl {
        right: auto;
        left: 4.16666667%
    }

    .ant-col-xl-offset-1.ant-col-rtl {
        margin-right: 4.16666667%;
        margin-left: 0
    }

    .ant-col-xl-push-2.ant-col-rtl {
        right: 8.33333333%;
        left: auto
    }

    .ant-col-xl-pull-2.ant-col-rtl {
        right: auto;
        left: 8.33333333%
    }

    .ant-col-xl-offset-2.ant-col-rtl {
        margin-right: 8.33333333%;
        margin-left: 0
    }

    .ant-col-xl-push-3.ant-col-rtl {
        right: 12.5%;
        left: auto
    }

    .ant-col-xl-pull-3.ant-col-rtl {
        right: auto;
        left: 12.5%
    }

    .ant-col-xl-offset-3.ant-col-rtl {
        margin-right: 12.5%;
        margin-left: 0
    }

    .ant-col-xl-push-4.ant-col-rtl {
        right: 16.66666667%;
        left: auto
    }

    .ant-col-xl-pull-4.ant-col-rtl {
        right: auto;
        left: 16.66666667%
    }

    .ant-col-xl-offset-4.ant-col-rtl {
        margin-right: 16.66666667%;
        margin-left: 0
    }

    .ant-col-xl-push-5.ant-col-rtl {
        right: 20.83333333%;
        left: auto
    }

    .ant-col-xl-pull-5.ant-col-rtl {
        right: auto;
        left: 20.83333333%
    }

    .ant-col-xl-offset-5.ant-col-rtl {
        margin-right: 20.83333333%;
        margin-left: 0
    }

    .ant-col-xl-push-6.ant-col-rtl {
        right: 25%;
        left: auto
    }

    .ant-col-xl-pull-6.ant-col-rtl {
        right: auto;
        left: 25%
    }

    .ant-col-xl-offset-6.ant-col-rtl {
        margin-right: 25%;
        margin-left: 0
    }

    .ant-col-xl-push-7.ant-col-rtl {
        right: 29.16666667%;
        left: auto
    }

    .ant-col-xl-pull-7.ant-col-rtl {
        right: auto;
        left: 29.16666667%
    }

    .ant-col-xl-offset-7.ant-col-rtl {
        margin-right: 29.16666667%;
        margin-left: 0
    }

    .ant-col-xl-push-8.ant-col-rtl {
        right: 33.33333333%;
        left: auto
    }

    .ant-col-xl-pull-8.ant-col-rtl {
        right: auto;
        left: 33.33333333%
    }

    .ant-col-xl-offset-8.ant-col-rtl {
        margin-right: 33.33333333%;
        margin-left: 0
    }

    .ant-col-xl-push-9.ant-col-rtl {
        right: 37.5%;
        left: auto
    }

    .ant-col-xl-pull-9.ant-col-rtl {
        right: auto;
        left: 37.5%
    }

    .ant-col-xl-offset-9.ant-col-rtl {
        margin-right: 37.5%;
        margin-left: 0
    }

    .ant-col-xl-push-10.ant-col-rtl {
        right: 41.66666667%;
        left: auto
    }

    .ant-col-xl-pull-10.ant-col-rtl {
        right: auto;
        left: 41.66666667%
    }

    .ant-col-xl-offset-10.ant-col-rtl {
        margin-right: 41.66666667%;
        margin-left: 0
    }

    .ant-col-xl-push-11.ant-col-rtl {
        right: 45.83333333%;
        left: auto
    }

    .ant-col-xl-pull-11.ant-col-rtl {
        right: auto;
        left: 45.83333333%
    }

    .ant-col-xl-offset-11.ant-col-rtl {
        margin-right: 45.83333333%;
        margin-left: 0
    }

    .ant-col-xl-push-12.ant-col-rtl {
        right: 50%;
        left: auto
    }

    .ant-col-xl-pull-12.ant-col-rtl {
        right: auto;
        left: 50%
    }

    .ant-col-xl-offset-12.ant-col-rtl {
        margin-right: 50%;
        margin-left: 0
    }

    .ant-col-xl-push-13.ant-col-rtl {
        right: 54.16666667%;
        left: auto
    }

    .ant-col-xl-pull-13.ant-col-rtl {
        right: auto;
        left: 54.16666667%
    }

    .ant-col-xl-offset-13.ant-col-rtl {
        margin-right: 54.16666667%;
        margin-left: 0
    }

    .ant-col-xl-push-14.ant-col-rtl {
        right: 58.33333333%;
        left: auto
    }

    .ant-col-xl-pull-14.ant-col-rtl {
        right: auto;
        left: 58.33333333%
    }

    .ant-col-xl-offset-14.ant-col-rtl {
        margin-right: 58.33333333%;
        margin-left: 0
    }

    .ant-col-xl-push-15.ant-col-rtl {
        right: 62.5%;
        left: auto
    }

    .ant-col-xl-pull-15.ant-col-rtl {
        right: auto;
        left: 62.5%
    }

    .ant-col-xl-offset-15.ant-col-rtl {
        margin-right: 62.5%;
        margin-left: 0
    }

    .ant-col-xl-push-16.ant-col-rtl {
        right: 66.66666667%;
        left: auto
    }

    .ant-col-xl-pull-16.ant-col-rtl {
        right: auto;
        left: 66.66666667%
    }

    .ant-col-xl-offset-16.ant-col-rtl {
        margin-right: 66.66666667%;
        margin-left: 0
    }

    .ant-col-xl-push-17.ant-col-rtl {
        right: 70.83333333%;
        left: auto
    }

    .ant-col-xl-pull-17.ant-col-rtl {
        right: auto;
        left: 70.83333333%
    }

    .ant-col-xl-offset-17.ant-col-rtl {
        margin-right: 70.83333333%;
        margin-left: 0
    }

    .ant-col-xl-push-18.ant-col-rtl {
        right: 75%;
        left: auto
    }

    .ant-col-xl-pull-18.ant-col-rtl {
        right: auto;
        left: 75%
    }

    .ant-col-xl-offset-18.ant-col-rtl {
        margin-right: 75%;
        margin-left: 0
    }

    .ant-col-xl-push-19.ant-col-rtl {
        right: 79.16666667%;
        left: auto
    }

    .ant-col-xl-pull-19.ant-col-rtl {
        right: auto;
        left: 79.16666667%
    }

    .ant-col-xl-offset-19.ant-col-rtl {
        margin-right: 79.16666667%;
        margin-left: 0
    }

    .ant-col-xl-push-20.ant-col-rtl {
        right: 83.33333333%;
        left: auto
    }

    .ant-col-xl-pull-20.ant-col-rtl {
        right: auto;
        left: 83.33333333%
    }

    .ant-col-xl-offset-20.ant-col-rtl {
        margin-right: 83.33333333%;
        margin-left: 0
    }

    .ant-col-xl-push-21.ant-col-rtl {
        right: 87.5%;
        left: auto
    }

    .ant-col-xl-pull-21.ant-col-rtl {
        right: auto;
        left: 87.5%
    }

    .ant-col-xl-offset-21.ant-col-rtl {
        margin-right: 87.5%;
        margin-left: 0
    }

    .ant-col-xl-push-22.ant-col-rtl {
        right: 91.66666667%;
        left: auto
    }

    .ant-col-xl-pull-22.ant-col-rtl {
        right: auto;
        left: 91.66666667%
    }

    .ant-col-xl-offset-22.ant-col-rtl {
        margin-right: 91.66666667%;
        margin-left: 0
    }

    .ant-col-xl-push-23.ant-col-rtl {
        right: 95.83333333%;
        left: auto
    }

    .ant-col-xl-pull-23.ant-col-rtl {
        right: auto;
        left: 95.83333333%
    }

    .ant-col-xl-offset-23.ant-col-rtl {
        margin-right: 95.83333333%;
        margin-left: 0
    }

    .ant-col-xl-push-24.ant-col-rtl {
        right: 100%;
        left: auto
    }

    .ant-col-xl-pull-24.ant-col-rtl {
        right: auto;
        left: 100%
    }

    .ant-col-xl-offset-24.ant-col-rtl {
        margin-right: 100%;
        margin-left: 0
    }
}

@media (min-width: 1600px) {
    .ant-col-xxl-24 {
        display:block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        -webkit-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%
    }

    .ant-col-xxl-push-24 {
        left: 100%
    }

    .ant-col-xxl-pull-24 {
        right: 100%
    }

    .ant-col-xxl-offset-24 {
        margin-left: 100%
    }

    .ant-col-xxl-order-24 {
        -webkit-box-ordinal-group: 25;
        -ms-flex-order: 24;
        -webkit-order: 24;
        order: 24
    }

    .ant-col-xxl-23 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 95.83333333%;
        -webkit-flex: 0 0 95.83333333%;
        flex: 0 0 95.83333333%;
        max-width: 95.83333333%
    }

    .ant-col-xxl-push-23 {
        left: 95.83333333%
    }

    .ant-col-xxl-pull-23 {
        right: 95.83333333%
    }

    .ant-col-xxl-offset-23 {
        margin-left: 95.83333333%
    }

    .ant-col-xxl-order-23 {
        -webkit-box-ordinal-group: 24;
        -ms-flex-order: 23;
        -webkit-order: 23;
        order: 23
    }

    .ant-col-xxl-22 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 91.66666667%;
        -webkit-flex: 0 0 91.66666667%;
        flex: 0 0 91.66666667%;
        max-width: 91.66666667%
    }

    .ant-col-xxl-push-22 {
        left: 91.66666667%
    }

    .ant-col-xxl-pull-22 {
        right: 91.66666667%
    }

    .ant-col-xxl-offset-22 {
        margin-left: 91.66666667%
    }

    .ant-col-xxl-order-22 {
        -webkit-box-ordinal-group: 23;
        -ms-flex-order: 22;
        -webkit-order: 22;
        order: 22
    }

    .ant-col-xxl-21 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 87.5%;
        -webkit-flex: 0 0 87.5%;
        flex: 0 0 87.5%;
        max-width: 87.5%
    }

    .ant-col-xxl-push-21 {
        left: 87.5%
    }

    .ant-col-xxl-pull-21 {
        right: 87.5%
    }

    .ant-col-xxl-offset-21 {
        margin-left: 87.5%
    }

    .ant-col-xxl-order-21 {
        -webkit-box-ordinal-group: 22;
        -ms-flex-order: 21;
        -webkit-order: 21;
        order: 21
    }

    .ant-col-xxl-20 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 83.33333333%;
        -webkit-flex: 0 0 83.33333333%;
        flex: 0 0 83.33333333%;
        max-width: 83.33333333%
    }

    .ant-col-xxl-push-20 {
        left: 83.33333333%
    }

    .ant-col-xxl-pull-20 {
        right: 83.33333333%
    }

    .ant-col-xxl-offset-20 {
        margin-left: 83.33333333%
    }

    .ant-col-xxl-order-20 {
        -webkit-box-ordinal-group: 21;
        -ms-flex-order: 20;
        -webkit-order: 20;
        order: 20
    }

    .ant-col-xxl-19 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 79.16666667%;
        -webkit-flex: 0 0 79.16666667%;
        flex: 0 0 79.16666667%;
        max-width: 79.16666667%
    }

    .ant-col-xxl-push-19 {
        left: 79.16666667%
    }

    .ant-col-xxl-pull-19 {
        right: 79.16666667%
    }

    .ant-col-xxl-offset-19 {
        margin-left: 79.16666667%
    }

    .ant-col-xxl-order-19 {
        -webkit-box-ordinal-group: 20;
        -ms-flex-order: 19;
        -webkit-order: 19;
        order: 19
    }

    .ant-col-xxl-18 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
        -webkit-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%
    }

    .ant-col-xxl-push-18 {
        left: 75%
    }

    .ant-col-xxl-pull-18 {
        right: 75%
    }

    .ant-col-xxl-offset-18 {
        margin-left: 75%
    }

    .ant-col-xxl-order-18 {
        -webkit-box-ordinal-group: 19;
        -ms-flex-order: 18;
        -webkit-order: 18;
        order: 18
    }

    .ant-col-xxl-17 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 70.83333333%;
        -webkit-flex: 0 0 70.83333333%;
        flex: 0 0 70.83333333%;
        max-width: 70.83333333%
    }

    .ant-col-xxl-push-17 {
        left: 70.83333333%
    }

    .ant-col-xxl-pull-17 {
        right: 70.83333333%
    }

    .ant-col-xxl-offset-17 {
        margin-left: 70.83333333%
    }

    .ant-col-xxl-order-17 {
        -webkit-box-ordinal-group: 18;
        -ms-flex-order: 17;
        -webkit-order: 17;
        order: 17
    }

    .ant-col-xxl-16 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 66.66666667%;
        -webkit-flex: 0 0 66.66666667%;
        flex: 0 0 66.66666667%;
        max-width: 66.66666667%
    }

    .ant-col-xxl-push-16 {
        left: 66.66666667%
    }

    .ant-col-xxl-pull-16 {
        right: 66.66666667%
    }

    .ant-col-xxl-offset-16 {
        margin-left: 66.66666667%
    }

    .ant-col-xxl-order-16 {
        -webkit-box-ordinal-group: 17;
        -ms-flex-order: 16;
        -webkit-order: 16;
        order: 16
    }

    .ant-col-xxl-15 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 62.5%;
        -webkit-flex: 0 0 62.5%;
        flex: 0 0 62.5%;
        max-width: 62.5%
    }

    .ant-col-xxl-push-15 {
        left: 62.5%
    }

    .ant-col-xxl-pull-15 {
        right: 62.5%
    }

    .ant-col-xxl-offset-15 {
        margin-left: 62.5%
    }

    .ant-col-xxl-order-15 {
        -webkit-box-ordinal-group: 16;
        -ms-flex-order: 15;
        -webkit-order: 15;
        order: 15
    }

    .ant-col-xxl-14 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 58.33333333%;
        -webkit-flex: 0 0 58.33333333%;
        flex: 0 0 58.33333333%;
        max-width: 58.33333333%
    }

    .ant-col-xxl-push-14 {
        left: 58.33333333%
    }

    .ant-col-xxl-pull-14 {
        right: 58.33333333%
    }

    .ant-col-xxl-offset-14 {
        margin-left: 58.33333333%
    }

    .ant-col-xxl-order-14 {
        -webkit-box-ordinal-group: 15;
        -ms-flex-order: 14;
        -webkit-order: 14;
        order: 14
    }

    .ant-col-xxl-13 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 54.16666667%;
        -webkit-flex: 0 0 54.16666667%;
        flex: 0 0 54.16666667%;
        max-width: 54.16666667%
    }

    .ant-col-xxl-push-13 {
        left: 54.16666667%
    }

    .ant-col-xxl-pull-13 {
        right: 54.16666667%
    }

    .ant-col-xxl-offset-13 {
        margin-left: 54.16666667%
    }

    .ant-col-xxl-order-13 {
        -webkit-box-ordinal-group: 14;
        -ms-flex-order: 13;
        -webkit-order: 13;
        order: 13
    }

    .ant-col-xxl-12 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        -webkit-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%
    }

    .ant-col-xxl-push-12 {
        left: 50%
    }

    .ant-col-xxl-pull-12 {
        right: 50%
    }

    .ant-col-xxl-offset-12 {
        margin-left: 50%
    }

    .ant-col-xxl-order-12 {
        -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
        -webkit-order: 12;
        order: 12
    }

    .ant-col-xxl-11 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 45.83333333%;
        -webkit-flex: 0 0 45.83333333%;
        flex: 0 0 45.83333333%;
        max-width: 45.83333333%
    }

    .ant-col-xxl-push-11 {
        left: 45.83333333%
    }

    .ant-col-xxl-pull-11 {
        right: 45.83333333%
    }

    .ant-col-xxl-offset-11 {
        margin-left: 45.83333333%
    }

    .ant-col-xxl-order-11 {
        -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
        -webkit-order: 11;
        order: 11
    }

    .ant-col-xxl-10 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 41.66666667%;
        -webkit-flex: 0 0 41.66666667%;
        flex: 0 0 41.66666667%;
        max-width: 41.66666667%
    }

    .ant-col-xxl-push-10 {
        left: 41.66666667%
    }

    .ant-col-xxl-pull-10 {
        right: 41.66666667%
    }

    .ant-col-xxl-offset-10 {
        margin-left: 41.66666667%
    }

    .ant-col-xxl-order-10 {
        -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
        -webkit-order: 10;
        order: 10
    }

    .ant-col-xxl-9 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 37.5%;
        -webkit-flex: 0 0 37.5%;
        flex: 0 0 37.5%;
        max-width: 37.5%
    }

    .ant-col-xxl-push-9 {
        left: 37.5%
    }

    .ant-col-xxl-pull-9 {
        right: 37.5%
    }

    .ant-col-xxl-offset-9 {
        margin-left: 37.5%
    }

    .ant-col-xxl-order-9 {
        -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
        -webkit-order: 9;
        order: 9
    }

    .ant-col-xxl-8 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33.33333333%;
        -webkit-flex: 0 0 33.33333333%;
        flex: 0 0 33.33333333%;
        max-width: 33.33333333%
    }

    .ant-col-xxl-push-8 {
        left: 33.33333333%
    }

    .ant-col-xxl-pull-8 {
        right: 33.33333333%
    }

    .ant-col-xxl-offset-8 {
        margin-left: 33.33333333%
    }

    .ant-col-xxl-order-8 {
        -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
        -webkit-order: 8;
        order: 8
    }

    .ant-col-xxl-7 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 29.16666667%;
        -webkit-flex: 0 0 29.16666667%;
        flex: 0 0 29.16666667%;
        max-width: 29.16666667%
    }

    .ant-col-xxl-push-7 {
        left: 29.16666667%
    }

    .ant-col-xxl-pull-7 {
        right: 29.16666667%
    }

    .ant-col-xxl-offset-7 {
        margin-left: 29.16666667%
    }

    .ant-col-xxl-order-7 {
        -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
        -webkit-order: 7;
        order: 7
    }

    .ant-col-xxl-6 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        -webkit-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%
    }

    .ant-col-xxl-push-6 {
        left: 25%
    }

    .ant-col-xxl-pull-6 {
        right: 25%
    }

    .ant-col-xxl-offset-6 {
        margin-left: 25%
    }

    .ant-col-xxl-order-6 {
        -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
        -webkit-order: 6;
        order: 6
    }

    .ant-col-xxl-5 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 20.83333333%;
        -webkit-flex: 0 0 20.83333333%;
        flex: 0 0 20.83333333%;
        max-width: 20.83333333%
    }

    .ant-col-xxl-push-5 {
        left: 20.83333333%
    }

    .ant-col-xxl-pull-5 {
        right: 20.83333333%
    }

    .ant-col-xxl-offset-5 {
        margin-left: 20.83333333%
    }

    .ant-col-xxl-order-5 {
        -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
        -webkit-order: 5;
        order: 5
    }

    .ant-col-xxl-4 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 16.66666667%;
        -webkit-flex: 0 0 16.66666667%;
        flex: 0 0 16.66666667%;
        max-width: 16.66666667%
    }

    .ant-col-xxl-push-4 {
        left: 16.66666667%
    }

    .ant-col-xxl-pull-4 {
        right: 16.66666667%
    }

    .ant-col-xxl-offset-4 {
        margin-left: 16.66666667%
    }

    .ant-col-xxl-order-4 {
        -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
        -webkit-order: 4;
        order: 4
    }

    .ant-col-xxl-3 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 12.5%;
        -webkit-flex: 0 0 12.5%;
        flex: 0 0 12.5%;
        max-width: 12.5%
    }

    .ant-col-xxl-push-3 {
        left: 12.5%
    }

    .ant-col-xxl-pull-3 {
        right: 12.5%
    }

    .ant-col-xxl-offset-3 {
        margin-left: 12.5%
    }

    .ant-col-xxl-order-3 {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        -webkit-order: 3;
        order: 3
    }

    .ant-col-xxl-2 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 8.33333333%;
        -webkit-flex: 0 0 8.33333333%;
        flex: 0 0 8.33333333%;
        max-width: 8.33333333%
    }

    .ant-col-xxl-push-2 {
        left: 8.33333333%
    }

    .ant-col-xxl-pull-2 {
        right: 8.33333333%
    }

    .ant-col-xxl-offset-2 {
        margin-left: 8.33333333%
    }

    .ant-col-xxl-order-2 {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        -webkit-order: 2;
        order: 2
    }

    .ant-col-xxl-1 {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 4.16666667%;
        -webkit-flex: 0 0 4.16666667%;
        flex: 0 0 4.16666667%;
        max-width: 4.16666667%
    }

    .ant-col-xxl-push-1 {
        left: 4.16666667%
    }

    .ant-col-xxl-pull-1 {
        right: 4.16666667%
    }

    .ant-col-xxl-offset-1 {
        margin-left: 4.16666667%
    }

    .ant-col-xxl-order-1 {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        -webkit-order: 1;
        order: 1
    }

    .ant-col-xxl-0 {
        display: none
    }

    .ant-col-push-0 {
        left: auto
    }

    .ant-col-pull-0 {
        right: auto
    }

    .ant-col-xxl-push-0 {
        left: auto
    }

    .ant-col-xxl-pull-0 {
        right: auto
    }

    .ant-col-xxl-offset-0 {
        margin-left: 0
    }

    .ant-col-xxl-order-0 {
        -webkit-box-ordinal-group: 1;
        -ms-flex-order: 0;
        -webkit-order: 0;
        order: 0
    }

    .ant-col-push-0.ant-col-rtl {
        right: auto
    }

    .ant-col-pull-0.ant-col-rtl {
        left: auto
    }

    .ant-col-xxl-push-0.ant-col-rtl {
        right: auto
    }

    .ant-col-xxl-pull-0.ant-col-rtl {
        left: auto
    }

    .ant-col-xxl-offset-0.ant-col-rtl {
        margin-right: 0
    }

    .ant-col-xxl-push-1.ant-col-rtl {
        right: 4.16666667%;
        left: auto
    }

    .ant-col-xxl-pull-1.ant-col-rtl {
        right: auto;
        left: 4.16666667%
    }

    .ant-col-xxl-offset-1.ant-col-rtl {
        margin-right: 4.16666667%;
        margin-left: 0
    }

    .ant-col-xxl-push-2.ant-col-rtl {
        right: 8.33333333%;
        left: auto
    }

    .ant-col-xxl-pull-2.ant-col-rtl {
        right: auto;
        left: 8.33333333%
    }

    .ant-col-xxl-offset-2.ant-col-rtl {
        margin-right: 8.33333333%;
        margin-left: 0
    }

    .ant-col-xxl-push-3.ant-col-rtl {
        right: 12.5%;
        left: auto
    }

    .ant-col-xxl-pull-3.ant-col-rtl {
        right: auto;
        left: 12.5%
    }

    .ant-col-xxl-offset-3.ant-col-rtl {
        margin-right: 12.5%;
        margin-left: 0
    }

    .ant-col-xxl-push-4.ant-col-rtl {
        right: 16.66666667%;
        left: auto
    }

    .ant-col-xxl-pull-4.ant-col-rtl {
        right: auto;
        left: 16.66666667%
    }

    .ant-col-xxl-offset-4.ant-col-rtl {
        margin-right: 16.66666667%;
        margin-left: 0
    }

    .ant-col-xxl-push-5.ant-col-rtl {
        right: 20.83333333%;
        left: auto
    }

    .ant-col-xxl-pull-5.ant-col-rtl {
        right: auto;
        left: 20.83333333%
    }

    .ant-col-xxl-offset-5.ant-col-rtl {
        margin-right: 20.83333333%;
        margin-left: 0
    }

    .ant-col-xxl-push-6.ant-col-rtl {
        right: 25%;
        left: auto
    }

    .ant-col-xxl-pull-6.ant-col-rtl {
        right: auto;
        left: 25%
    }

    .ant-col-xxl-offset-6.ant-col-rtl {
        margin-right: 25%;
        margin-left: 0
    }

    .ant-col-xxl-push-7.ant-col-rtl {
        right: 29.16666667%;
        left: auto
    }

    .ant-col-xxl-pull-7.ant-col-rtl {
        right: auto;
        left: 29.16666667%
    }

    .ant-col-xxl-offset-7.ant-col-rtl {
        margin-right: 29.16666667%;
        margin-left: 0
    }

    .ant-col-xxl-push-8.ant-col-rtl {
        right: 33.33333333%;
        left: auto
    }

    .ant-col-xxl-pull-8.ant-col-rtl {
        right: auto;
        left: 33.33333333%
    }

    .ant-col-xxl-offset-8.ant-col-rtl {
        margin-right: 33.33333333%;
        margin-left: 0
    }

    .ant-col-xxl-push-9.ant-col-rtl {
        right: 37.5%;
        left: auto
    }

    .ant-col-xxl-pull-9.ant-col-rtl {
        right: auto;
        left: 37.5%
    }

    .ant-col-xxl-offset-9.ant-col-rtl {
        margin-right: 37.5%;
        margin-left: 0
    }

    .ant-col-xxl-push-10.ant-col-rtl {
        right: 41.66666667%;
        left: auto
    }

    .ant-col-xxl-pull-10.ant-col-rtl {
        right: auto;
        left: 41.66666667%
    }

    .ant-col-xxl-offset-10.ant-col-rtl {
        margin-right: 41.66666667%;
        margin-left: 0
    }

    .ant-col-xxl-push-11.ant-col-rtl {
        right: 45.83333333%;
        left: auto
    }

    .ant-col-xxl-pull-11.ant-col-rtl {
        right: auto;
        left: 45.83333333%
    }

    .ant-col-xxl-offset-11.ant-col-rtl {
        margin-right: 45.83333333%;
        margin-left: 0
    }

    .ant-col-xxl-push-12.ant-col-rtl {
        right: 50%;
        left: auto
    }

    .ant-col-xxl-pull-12.ant-col-rtl {
        right: auto;
        left: 50%
    }

    .ant-col-xxl-offset-12.ant-col-rtl {
        margin-right: 50%;
        margin-left: 0
    }

    .ant-col-xxl-push-13.ant-col-rtl {
        right: 54.16666667%;
        left: auto
    }

    .ant-col-xxl-pull-13.ant-col-rtl {
        right: auto;
        left: 54.16666667%
    }

    .ant-col-xxl-offset-13.ant-col-rtl {
        margin-right: 54.16666667%;
        margin-left: 0
    }

    .ant-col-xxl-push-14.ant-col-rtl {
        right: 58.33333333%;
        left: auto
    }

    .ant-col-xxl-pull-14.ant-col-rtl {
        right: auto;
        left: 58.33333333%
    }

    .ant-col-xxl-offset-14.ant-col-rtl {
        margin-right: 58.33333333%;
        margin-left: 0
    }

    .ant-col-xxl-push-15.ant-col-rtl {
        right: 62.5%;
        left: auto
    }

    .ant-col-xxl-pull-15.ant-col-rtl {
        right: auto;
        left: 62.5%
    }

    .ant-col-xxl-offset-15.ant-col-rtl {
        margin-right: 62.5%;
        margin-left: 0
    }

    .ant-col-xxl-push-16.ant-col-rtl {
        right: 66.66666667%;
        left: auto
    }

    .ant-col-xxl-pull-16.ant-col-rtl {
        right: auto;
        left: 66.66666667%
    }

    .ant-col-xxl-offset-16.ant-col-rtl {
        margin-right: 66.66666667%;
        margin-left: 0
    }

    .ant-col-xxl-push-17.ant-col-rtl {
        right: 70.83333333%;
        left: auto
    }

    .ant-col-xxl-pull-17.ant-col-rtl {
        right: auto;
        left: 70.83333333%
    }

    .ant-col-xxl-offset-17.ant-col-rtl {
        margin-right: 70.83333333%;
        margin-left: 0
    }

    .ant-col-xxl-push-18.ant-col-rtl {
        right: 75%;
        left: auto
    }

    .ant-col-xxl-pull-18.ant-col-rtl {
        right: auto;
        left: 75%
    }

    .ant-col-xxl-offset-18.ant-col-rtl {
        margin-right: 75%;
        margin-left: 0
    }

    .ant-col-xxl-push-19.ant-col-rtl {
        right: 79.16666667%;
        left: auto
    }

    .ant-col-xxl-pull-19.ant-col-rtl {
        right: auto;
        left: 79.16666667%
    }

    .ant-col-xxl-offset-19.ant-col-rtl {
        margin-right: 79.16666667%;
        margin-left: 0
    }

    .ant-col-xxl-push-20.ant-col-rtl {
        right: 83.33333333%;
        left: auto
    }

    .ant-col-xxl-pull-20.ant-col-rtl {
        right: auto;
        left: 83.33333333%
    }

    .ant-col-xxl-offset-20.ant-col-rtl {
        margin-right: 83.33333333%;
        margin-left: 0
    }

    .ant-col-xxl-push-21.ant-col-rtl {
        right: 87.5%;
        left: auto
    }

    .ant-col-xxl-pull-21.ant-col-rtl {
        right: auto;
        left: 87.5%
    }

    .ant-col-xxl-offset-21.ant-col-rtl {
        margin-right: 87.5%;
        margin-left: 0
    }

    .ant-col-xxl-push-22.ant-col-rtl {
        right: 91.66666667%;
        left: auto
    }

    .ant-col-xxl-pull-22.ant-col-rtl {
        right: auto;
        left: 91.66666667%
    }

    .ant-col-xxl-offset-22.ant-col-rtl {
        margin-right: 91.66666667%;
        margin-left: 0
    }

    .ant-col-xxl-push-23.ant-col-rtl {
        right: 95.83333333%;
        left: auto
    }

    .ant-col-xxl-pull-23.ant-col-rtl {
        right: auto;
        left: 95.83333333%
    }

    .ant-col-xxl-offset-23.ant-col-rtl {
        margin-right: 95.83333333%;
        margin-left: 0
    }

    .ant-col-xxl-push-24.ant-col-rtl {
        right: 100%;
        left: auto
    }

    .ant-col-xxl-pull-24.ant-col-rtl {
        right: auto;
        left: 100%
    }

    .ant-col-xxl-offset-24.ant-col-rtl {
        margin-right: 100%;
        margin-left: 0
    }
}

.ant-row-rtl {
    direction: rtl
}

.ant-col.ant-col-rtl {
    float: right
}

.ant-carousel {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum'
}

.ant-carousel .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent
}

.ant-carousel .slick-list {
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
    overflow: hidden
}

.ant-carousel .slick-list:focus {
    outline: none
}

.ant-carousel .slick-list.dragging {
    cursor: pointer
}

.ant-carousel .slick-list .slick-slide {
    pointer-events: none
}

.ant-carousel .slick-list .slick-slide input.ant-checkbox-input,.ant-carousel .slick-list .slick-slide input.ant-radio-input {
    visibility: hidden
}

.ant-carousel .slick-list .slick-slide.slick-active {
    pointer-events: auto
}

.ant-carousel .slick-list .slick-slide.slick-active input.ant-checkbox-input,.ant-carousel .slick-list .slick-slide.slick-active input.ant-radio-input {
    visibility: visible
}

.ant-carousel .slick-slider .slick-list,.ant-carousel .slick-slider .slick-track {
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
}

.ant-carousel .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block
}

.ant-carousel .slick-track:after,.ant-carousel .slick-track:before {
    display: table;
    content: ''
}

.ant-carousel .slick-track:after {
    clear: both
}

.slick-loading .ant-carousel .slick-track {
    visibility: hidden
}

.ant-carousel .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px
}

.ant-carousel .slick-slide img {
    display: block
}

.ant-carousel .slick-slide.slick-loading img {
    display: none
}

.ant-carousel .slick-slide.dragging img {
    pointer-events: none
}

.ant-carousel .slick-initialized .slick-slide {
    display: block
}

.ant-carousel .slick-loading .slick-slide {
    visibility: hidden
}

.ant-carousel .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent
}

.ant-carousel .slick-arrow.slick-hidden {
    display: none
}

.ant-carousel .slick-next,.ant-carousel .slick-prev {
    position: absolute;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    padding: 0;
    font-size: 0;
    line-height: 0;
    border: 0;
    cursor: pointer
}

.ant-carousel .slick-next,.ant-carousel .slick-next:focus,.ant-carousel .slick-next:hover,.ant-carousel .slick-prev,.ant-carousel .slick-prev:focus,.ant-carousel .slick-prev:hover {
    color: transparent;
    background: transparent;
    outline: none
}

.ant-carousel .slick-next:focus:before,.ant-carousel .slick-next:hover:before,.ant-carousel .slick-prev:focus:before,.ant-carousel .slick-prev:hover:before {
    opacity: 1
}

.ant-carousel .slick-next.slick-disabled:before,.ant-carousel .slick-prev.slick-disabled:before {
    opacity: .25
}

.ant-carousel .slick-prev {
    left: -25px
}

.ant-carousel .slick-prev:before {
    content: '\2190'
}

.ant-carousel .slick-next {
    right: -25px
}

.ant-carousel .slick-next:before {
    content: '\2192'
}

.ant-carousel .slick-dots {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: -webkit-box!important;
    display: -ms-flexbox!important;
    display: -webkit-flex!important;
    display: flex!important;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    padding-left: 0;
    list-style: none
}

.ant-carousel .slick-dots-bottom {
    bottom: 12px
}

.ant-carousel .slick-dots-top {
    top: 12px
}

.ant-carousel .slick-dots li {
    position: relative;
    display: inline-block;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    -webkit-flex: 0 1 auto;
    flex: 0 1 auto;
    box-sizing: content-box;
    width: 16px;
    margin: 0 2px;
    margin-right: 3px;
    margin-left: 3px;
    text-align: center;
    text-indent: -999px;
    vertical-align: top
}

.ant-carousel .slick-dots li,.ant-carousel .slick-dots li button {
    height: 3px;
    padding: 0;
    -webkit-transition: all .5s;
    transition: all .5s
}

.ant-carousel .slick-dots li button {
    display: block;
    width: 100%;
    color: transparent;
    font-size: 0;
    background: #fff;
    border: 0;
    border-radius: 1px;
    outline: none;
    cursor: pointer;
    opacity: .3
}

.ant-carousel .slick-dots li button:focus,.ant-carousel .slick-dots li button:hover {
    opacity: .75
}

.ant-carousel .slick-dots li.slick-active {
    width: 24px
}

.ant-carousel .slick-dots li.slick-active button {
    background: #fff;
    opacity: 1
}

.ant-carousel .slick-dots li.slick-active:focus,.ant-carousel .slick-dots li.slick-active:hover {
    opacity: 1
}

.ant-carousel-vertical .slick-dots {
    top: 50%;
    bottom: auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
    width: 3px;
    height: auto;
    margin: 0;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

.ant-carousel-vertical .slick-dots-left {
    right: auto;
    left: 12px
}

.ant-carousel-vertical .slick-dots-right {
    right: 12px;
    left: auto
}

.ant-carousel-vertical .slick-dots li {
    width: 3px;
    height: 16px;
    margin: 4px 2px;
    vertical-align: baseline
}

.ant-carousel-vertical .slick-dots li button {
    width: 3px;
    height: 16px
}

.ant-carousel-vertical .slick-dots li.slick-active,.ant-carousel-vertical .slick-dots li.slick-active button {
    width: 3px;
    height: 24px
}

.ant-carousel-rtl {
    direction: rtl
}

.ant-carousel-rtl .ant-carousel .slick-track {
    right: 0;
    left: auto
}

.ant-carousel-rtl .ant-carousel .slick-prev {
    right: -25px;
    left: auto
}

.ant-carousel-rtl .ant-carousel .slick-prev:before {
    content: '\2192'
}

.ant-carousel-rtl .ant-carousel .slick-next {
    right: auto;
    left: -25px
}

.ant-carousel-rtl .ant-carousel .slick-next:before {
    content: '\2190'
}

.ant-carousel-rtl.ant-carousel .slick-dots {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    -webkit-flex-direction: row-reverse;
    flex-direction: row-reverse
}

.ant-carousel-rtl.ant-carousel-vertical .slick-dots {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column
}

.ant-cascader {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum'
}

.ant-cascader-input.ant-input {
    position: static;
    width: 100%;
    padding-right: 24px;
    background-color: transparent!important;
    cursor: pointer
}

.ant-cascader-picker-show-search .ant-cascader-input.ant-input {
    position: relative
}

.ant-cascader-picker {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    display: inline-block;
    background-color: #fff;
    border-radius: 2px;
    outline: 0;
    cursor: pointer;
    -webkit-transition: color .3s;
    transition: color .3s
}

.ant-cascader-picker-with-value .ant-cascader-picker-label {
    color: transparent
}

.ant-cascader-picker-disabled {
    color: rgba(0,0,0,.25);
    background: #f5f5f5;
    cursor: not-allowed
}

.ant-cascader-picker-disabled .ant-cascader-input {
    cursor: not-allowed
}

.ant-cascader-picker:focus .ant-cascader-input {
    border-color: #40a9ff;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24,144,255,.2)
}

.ant-cascader-picker-borderless .ant-cascader-input {
    border-color: transparent!important;
    box-shadow: none!important
}

.ant-cascader-picker-show-search.ant-cascader-picker-focused {
    color: rgba(0,0,0,.25)
}

.ant-cascader-picker-label {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 20px;
    margin-top: -10px;
    padding: 0 20px 0 12px;
    overflow: hidden;
    line-height: 20px;
    white-space: nowrap;
    text-overflow: ellipsis
}

.ant-cascader-picker-clear {
    position: absolute;
    top: 50%;
    right: 12px;
    z-index: 2;
    width: 12px;
    height: 12px;
    margin-top: -6px;
    color: rgba(0,0,0,.25);
    font-size: 12px;
    line-height: 12px;
    background: #fff;
    cursor: pointer;
    opacity: 0;
    -webkit-transition: color .3s ease,opacity .15s ease;
    transition: color .3s ease,opacity .15s ease
}

.ant-cascader-picker-clear:hover {
    color: rgba(0,0,0,.45)
}

.ant-cascader-picker:hover .ant-cascader-picker-clear {
    opacity: 1
}

.ant-cascader-picker-arrow {
    position: absolute;
    top: 50%;
    right: 12px;
    z-index: 1;
    width: 12px;
    height: 12px;
    margin-top: -6px;
    color: rgba(0,0,0,.25);
    font-size: 12px;
    line-height: 12px;
    -webkit-transition: -webkit-transform .2s;
    transition: -webkit-transform .2s;
    transition: transform .2s;
    transition: transform .2s,-webkit-transform .2s
}

.ant-cascader-picker-arrow.ant-cascader-picker-arrow-expand {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg)
}

.ant-cascader-picker-label:hover+.ant-cascader-input {
    border-color: #40a9ff;
    border-right-width: 1px!important
}

.ant-cascader-picker-small .ant-cascader-picker-arrow,.ant-cascader-picker-small .ant-cascader-picker-clear {
    right: 8px
}

.ant-cascader-menus {
    position: absolute;
    z-index: 1050;
    font-size: 14px;
    white-space: nowrap;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)
}

.ant-cascader-menus ol,.ant-cascader-menus ul {
    margin: 0;
    list-style: none
}

.ant-cascader-menus-empty,.ant-cascader-menus-hidden {
    display: none
}

.ant-cascader-menus.slide-up-appear.slide-up-appear-active.ant-cascader-menus-placement-bottomLeft,.ant-cascader-menus.slide-up-enter.slide-up-enter-active.ant-cascader-menus-placement-bottomLeft {
    -webkit-animation-name: antSlideUpIn;
    animation-name: antSlideUpIn
}

.ant-cascader-menus.slide-up-appear.slide-up-appear-active.ant-cascader-menus-placement-topLeft,.ant-cascader-menus.slide-up-enter.slide-up-enter-active.ant-cascader-menus-placement-topLeft {
    -webkit-animation-name: antSlideDownIn;
    animation-name: antSlideDownIn
}

.ant-cascader-menus.slide-up-leave.slide-up-leave-active.ant-cascader-menus-placement-bottomLeft {
    -webkit-animation-name: antSlideUpOut;
    animation-name: antSlideUpOut
}

.ant-cascader-menus.slide-up-leave.slide-up-leave-active.ant-cascader-menus-placement-topLeft {
    -webkit-animation-name: antSlideDownOut;
    animation-name: antSlideDownOut
}

.ant-cascader-menu {
    display: inline-block;
    min-width: 111px;
    height: 180px;
    margin: 0;
    padding: 4px 0;
    overflow: auto;
    vertical-align: top;
    list-style: none;
    border-right: 1px solid #f0f0f0;
    -ms-overflow-style: -ms-autohiding-scrollbar
}

.ant-cascader-menu:first-child {
    border-radius: 2px 0 0 2px
}

.ant-cascader-menu:last-child {
    margin-right: -1px;
    border-right-color: transparent;
    border-radius: 0 2px 2px 0
}

.ant-cascader-menu:only-child {
    border-radius: 2px
}

.ant-cascader-menu-item {
    padding: 5px 12px;
    line-height: 22px;
    white-space: nowrap;
    cursor: pointer;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-cascader-menu-item:hover {
    background: #f5f5f5
}

.ant-cascader-menu-item-disabled {
    color: rgba(0,0,0,.25);
    cursor: not-allowed
}

.ant-cascader-menu-item-disabled:hover {
    background: transparent
}

.ant-cascader-menu-item-active:not(.ant-cascader-menu-item-disabled),.ant-cascader-menu-item-active:not(.ant-cascader-menu-item-disabled):hover {
    font-weight: 600;
    background-color: #e6f7ff
}

.ant-cascader-menu-item-expand {
    position: relative;
    padding-right: 24px
}

.ant-cascader-menu-item-expand .ant-cascader-menu-item-expand-icon,.ant-cascader-menu-item-loading-icon {
    display: inline-block;
    font-size: 10px;
    position: absolute;
    right: 12px;
    color: rgba(0,0,0,.45)
}

.ant-cascader-menu-item .ant-cascader-menu-item-keyword {
    color: #ff4d4f
}

.ant-cascader-picker-rtl .ant-cascader-input.ant-input {
    padding-right: 11px;
    padding-left: 24px;
    text-align: right
}

.ant-cascader-picker-rtl {
    direction: rtl
}

.ant-cascader-picker-rtl .ant-cascader-picker-label {
    padding: 0 12px 0 20px;
    text-align: right
}

.ant-cascader-picker-rtl .ant-cascader-picker-arrow,.ant-cascader-picker-rtl .ant-cascader-picker-clear {
    right: auto;
    left: 12px
}

.ant-cascader-picker-rtl.ant-cascader-picker-small .ant-cascader-picker-arrow,.ant-cascader-picker-rtl.ant-cascader-picker-small .ant-cascader-picker-clear {
    right: auto;
    left: 8px
}

.ant-cascader-menu-rtl {
    direction: rtl;
    border-right: none;
    border-left: 1px solid #f0f0f0
}

.ant-cascader-menu-rtl:last-child {
    margin-right: 0;
    margin-left: -1px;
    border-left-color: transparent;
    border-radius: 0 0 4px 4px
}

.ant-cascader-menu-rtl .ant-cascader-menu-item-expand {
    padding-right: 12px;
    padding-left: 24px
}

.ant-cascader-menu-rtl .ant-cascader-menu-item-expand .ant-cascader-menu-item-expand-icon,.ant-cascader-menu-rtl .ant-cascader-menu-item-loading-icon {
    right: auto;
    left: 12px
}

.ant-input-affix-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    -webkit-transition: all .3s;
    transition: all .3s;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: -webkit-inline-flex;
    display: inline-flex;
    max-height: 32px
}

.ant-input-affix-wrapper::-moz-placeholder {
    opacity: 1
}

.ant-input-affix-wrapper::-ms-input-placeholder {
    color: #bfbfbf
}

.ant-input-affix-wrapper::-webkit-input-placeholder {
    color: #bfbfbf
}

.ant-input-affix-wrapper::-moz-placeholder {
    color: #bfbfbf
}

.ant-input-affix-wrapper:-ms-input-placeholder {
    color: #bfbfbf
}

.ant-input-affix-wrapper::placeholder {
    color: #bfbfbf
}

.ant-input-affix-wrapper:placeholder-shown {
    text-overflow: ellipsis
}

.ant-input-affix-wrapper:hover {
    border-color: #40a9ff;
    border-right-width: 1px!important
}

.ant-input-rtl .ant-input-affix-wrapper:hover {
    border-right-width: 0;
    border-left-width: 1px!important
}

.ant-input-affix-wrapper-focused,.ant-input-affix-wrapper:focus {
    border-color: #40a9ff;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24,144,255,.2)
}

.ant-input-rtl .ant-input-affix-wrapper-focused,.ant-input-rtl .ant-input-affix-wrapper:focus {
    border-right-width: 0;
    border-left-width: 1px!important
}

.ant-input-affix-wrapper-disabled {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1
}

.ant-input-affix-wrapper-disabled:hover {
    border-color: #d9d9d9;
    border-right-width: 1px!important
}

.ant-input-affix-wrapper[disabled] {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1
}

.ant-input-affix-wrapper[disabled]:hover {
    border-color: #d9d9d9;
    border-right-width: 1px!important
}

textarea.ant-input-affix-wrapper {
    max-width: 100%;
    height: auto;
    min-height: 32px;
    line-height: 1.5715;
    vertical-align: bottom;
    -webkit-transition: all .3s,height 0s;
    transition: all .3s,height 0s
}

.ant-input-affix-wrapper-lg {
    padding: 6.5px 11px;
    font-size: 16px
}

.ant-input-affix-wrapper-sm {
    padding: 0 7px
}

.ant-input-affix-wrapper-rtl {
    direction: rtl
}

.ant-input-affix-wrapper-lg {
    max-height: 40px
}

.ant-input-affix-wrapper-sm {
    max-height: 24px
}

.ant-input-affix-wrapper-disabled .ant-input[disabled] {
    background: transparent
}

.ant-input-affix-wrapper>input.ant-input {
    padding-right: 0;
    padding-left: 0;
    border: none;
    outline: none
}

.ant-input-affix-wrapper>input.ant-input:focus {
    box-shadow: none
}

.ant-input-affix-wrapper:before {
    width: 0;
    visibility: hidden;
    content: '\A0'
}

.ant-input-prefix,.ant-input-suffix {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: none;
    -webkit-flex: none;
    flex: none;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center
}

.ant-input-prefix {
    margin-right: 4px
}

.ant-input-suffix {
    margin-left: 4px
}

.ant-input-clear-icon {
    color: rgba(0,0,0,.25);
    font-size: 12px;
    cursor: pointer;
    -webkit-transition: color .3s;
    transition: color .3s;
    margin: 0 4px;
    vertical-align: -1px
}

.ant-input-clear-icon:hover {
    color: rgba(0,0,0,.45)
}

.ant-input-clear-icon:active {
    color: rgba(0,0,0,.65)
}

.ant-input-clear-icon+i {
    margin-left: 6px
}

.ant-input-clear-icon-hidden {
    visibility: hidden
}

.ant-input-clear-icon:last-child {
    margin-right: 0
}

.ant-input-affix-wrapper-textarea-with-clear-btn {
    padding: 0!important;
    border: 0!important
}

.ant-input-textarea-clear-icon {
    color: rgba(0,0,0,.25);
    font-size: 12px;
    cursor: pointer;
    -webkit-transition: color .3s;
    transition: color .3s;
    position: absolute;
    top: 0;
    right: 0;
    margin: 8px 8px 0 0
}

.ant-input-textarea-clear-icon:hover {
    color: rgba(0,0,0,.45)
}

.ant-input-textarea-clear-icon:active {
    color: rgba(0,0,0,.65)
}

.ant-input-textarea-clear-icon+i {
    margin-left: 6px
}

.ant-input-textarea-clear-icon-hidden {
    visibility: hidden
}

.ant-input {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-variant: tabular-nums;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-input::-moz-placeholder {
    opacity: 1
}

.ant-input::-ms-input-placeholder {
    color: #bfbfbf
}

.ant-input::-webkit-input-placeholder {
    color: #bfbfbf
}

.ant-input::-moz-placeholder {
    color: #bfbfbf
}

.ant-input:-ms-input-placeholder {
    color: #bfbfbf
}

.ant-input::placeholder {
    color: #bfbfbf
}

.ant-input:placeholder-shown {
    text-overflow: ellipsis
}

.ant-input:hover {
    border-color: #40a9ff;
    border-right-width: 1px!important
}

.ant-input-rtl .ant-input:hover {
    border-right-width: 0;
    border-left-width: 1px!important
}

.ant-input-focused,.ant-input:focus {
    border-color: #40a9ff;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24,144,255,.2)
}

.ant-input-rtl .ant-input-focused,.ant-input-rtl .ant-input:focus {
    border-right-width: 0;
    border-left-width: 1px!important
}

.ant-input-disabled {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1
}

.ant-input-disabled:hover {
    border-color: #d9d9d9;
    border-right-width: 1px!important
}

.ant-input[disabled] {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1
}

.ant-input[disabled]:hover {
    border-color: #d9d9d9;
    border-right-width: 1px!important
}

textarea.ant-input {
    max-width: 100%;
    height: auto;
    min-height: 32px;
    line-height: 1.5715;
    vertical-align: bottom;
    -webkit-transition: all .3s,height 0s;
    transition: all .3s,height 0s
}

.ant-input-lg {
    padding: 6.5px 11px;
    font-size: 16px
}

.ant-input-sm {
    padding: 0 7px
}

.ant-input-rtl {
    direction: rtl
}

.ant-input-group {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    display: table;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0
}

.ant-input-group[class*=col-] {
    float: none;
    padding-right: 0;
    padding-left: 0
}

.ant-input-group>[class*=col-] {
    padding-right: 8px
}

.ant-input-group>[class*=col-]:last-child {
    padding-right: 0
}

.ant-input-group-addon,.ant-input-group-wrap,.ant-input-group>.ant-input {
    display: table-cell
}

.ant-input-group-addon:not(:first-child):not(:last-child),.ant-input-group-wrap:not(:first-child):not(:last-child),.ant-input-group>.ant-input:not(:first-child):not(:last-child) {
    border-radius: 0
}

.ant-input-group-addon,.ant-input-group-wrap {
    width: 1px;
    white-space: nowrap;
    vertical-align: middle
}

.ant-input-group-wrap>* {
    display: block!important
}

.ant-input-group .ant-input {
    float: left;
    width: 100%;
    margin-bottom: 0;
    text-align: inherit
}

.ant-input-group .ant-input:focus,.ant-input-group .ant-input:hover {
    z-index: 1;
    border-right-width: 1px
}

.ant-input-group-addon {
    position: relative;
    padding: 0 11px;
    color: rgba(0,0,0,.65);
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    background-color: #fafafa;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-input-group-addon .ant-select {
    margin: -5px -11px
}

.ant-input-group-addon .ant-select.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    background-color: inherit;
    border: 1px solid transparent;
    box-shadow: none
}

.ant-input-group-addon .ant-select-focused .ant-select-selector,.ant-input-group-addon .ant-select-open .ant-select-selector {
    color: #1890ff
}

.ant-input-group-addon>i:only-child:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: ''
}

.ant-input-group-addon:first-child,.ant-input-group-addon:first-child .ant-select .ant-select-selector,.ant-input-group>.ant-input:first-child,.ant-input-group>.ant-input:first-child .ant-select .ant-select-selector {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}

.ant-input-group>.ant-input-affix-wrapper:not(:first-child) .ant-input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}

.ant-input-group>.ant-input-affix-wrapper:not(:last-child) .ant-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}

.ant-input-group-addon:first-child {
    border-right: 0
}

.ant-input-group-addon:last-child {
    border-left: 0
}

.ant-input-group-addon:last-child,.ant-input-group-addon:last-child .ant-select .ant-select-selector,.ant-input-group>.ant-input:last-child,.ant-input-group>.ant-input:last-child .ant-select .ant-select-selector {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}

.ant-input-group-lg .ant-input,.ant-input-group-lg>.ant-input-group-addon {
    padding: 6.5px 11px;
    font-size: 16px
}

.ant-input-group-sm .ant-input,.ant-input-group-sm>.ant-input-group-addon {
    padding: 0 7px
}

.ant-input-group-lg .ant-select-single .ant-select-selector {
    height: 40px
}

.ant-input-group-sm .ant-select-single .ant-select-selector {
    height: 24px
}

.ant-input-group .ant-input-affix-wrapper:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}

.ant-input-group .ant-input-affix-wrapper:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}

.ant-input-group.ant-input-group-compact {
    display: block
}

.ant-input-group.ant-input-group-compact:before {
    display: table;
    content: ''
}

.ant-input-group.ant-input-group-compact:after {
    display: table;
    clear: both;
    content: ''
}

.ant-input-group.ant-input-group-compact-addon:not(:first-child):not(:last-child),.ant-input-group.ant-input-group-compact-wrap:not(:first-child):not(:last-child),.ant-input-group.ant-input-group-compact>.ant-input:not(:first-child):not(:last-child) {
    border-right-width: 1px
}

.ant-input-group.ant-input-group-compact-addon:not(:first-child):not(:last-child):focus,.ant-input-group.ant-input-group-compact-addon:not(:first-child):not(:last-child):hover,.ant-input-group.ant-input-group-compact-wrap:not(:first-child):not(:last-child):focus,.ant-input-group.ant-input-group-compact-wrap:not(:first-child):not(:last-child):hover,.ant-input-group.ant-input-group-compact>.ant-input:not(:first-child):not(:last-child):focus,.ant-input-group.ant-input-group-compact>.ant-input:not(:first-child):not(:last-child):hover {
    z-index: 1
}

.ant-input-group.ant-input-group-compact>* {
    display: inline-block;
    float: none;
    vertical-align: top;
    border-radius: 0
}

.ant-input-group.ant-input-group-compact>.ant-input-affix-wrapper,.ant-input-group.ant-input-group-compact>.ant-picker-range {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: -webkit-inline-flex;
    display: inline-flex
}

.ant-input-group.ant-input-group-compact>:not(:last-child) {
    margin-right: -1px;
    border-right-width: 1px
}

.ant-input-group.ant-input-group-compact .ant-input {
    float: none
}

.ant-input-group.ant-input-group-compact>.ant-calendar-picker .ant-input,.ant-input-group.ant-input-group-compact>.ant-cascader-picker .ant-input,.ant-input-group.ant-input-group-compact>.ant-input-group-wrapper .ant-input,.ant-input-group.ant-input-group-compact>.ant-mention-wrapper .ant-mention-editor,.ant-input-group.ant-input-group-compact>.ant-select-auto-complete .ant-input,.ant-input-group.ant-input-group-compact>.ant-select>.ant-select-selector,.ant-input-group.ant-input-group-compact>.ant-time-picker .ant-time-picker-input {
    border-right-width: 1px;
    border-radius: 0
}

.ant-input-group.ant-input-group-compact>.ant-calendar-picker .ant-input:focus,.ant-input-group.ant-input-group-compact>.ant-calendar-picker .ant-input:hover,.ant-input-group.ant-input-group-compact>.ant-cascader-picker .ant-input:focus,.ant-input-group.ant-input-group-compact>.ant-cascader-picker .ant-input:hover,.ant-input-group.ant-input-group-compact>.ant-input-group-wrapper .ant-input:focus,.ant-input-group.ant-input-group-compact>.ant-input-group-wrapper .ant-input:hover,.ant-input-group.ant-input-group-compact>.ant-mention-wrapper .ant-mention-editor:focus,.ant-input-group.ant-input-group-compact>.ant-mention-wrapper .ant-mention-editor:hover,.ant-input-group.ant-input-group-compact>.ant-select-auto-complete .ant-input:focus,.ant-input-group.ant-input-group-compact>.ant-select-auto-complete .ant-input:hover,.ant-input-group.ant-input-group-compact>.ant-select>.ant-select-arrow,.ant-input-group.ant-input-group-compact>.ant-select>.ant-select-selector:focus,.ant-input-group.ant-input-group-compact>.ant-select>.ant-select-selector:hover,.ant-input-group.ant-input-group-compact>.ant-time-picker .ant-time-picker-input:focus,.ant-input-group.ant-input-group-compact>.ant-time-picker .ant-time-picker-input:hover {
    z-index: 1
}

.ant-input-group.ant-input-group-compact>.ant-calendar-picker:first-child .ant-input,.ant-input-group.ant-input-group-compact>.ant-cascader-picker:first-child .ant-input,.ant-input-group.ant-input-group-compact>.ant-mention-wrapper:first-child .ant-mention-editor,.ant-input-group.ant-input-group-compact>.ant-select-auto-complete:first-child .ant-input,.ant-input-group.ant-input-group-compact>.ant-select:first-child>.ant-select-selector,.ant-input-group.ant-input-group-compact>.ant-time-picker:first-child .ant-time-picker-input,.ant-input-group.ant-input-group-compact>:first-child {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px
}

.ant-input-group.ant-input-group-compact>.ant-calendar-picker:last-child .ant-input,.ant-input-group.ant-input-group-compact>.ant-cascader-picker-focused:last-child .ant-input,.ant-input-group.ant-input-group-compact>.ant-cascader-picker:last-child .ant-input,.ant-input-group.ant-input-group-compact>.ant-mention-wrapper:last-child .ant-mention-editor,.ant-input-group.ant-input-group-compact>.ant-select-auto-complete:last-child .ant-input,.ant-input-group.ant-input-group-compact>.ant-select:last-child>.ant-select-selector,.ant-input-group.ant-input-group-compact>.ant-time-picker:last-child .ant-time-picker-input,.ant-input-group.ant-input-group-compact>:last-child {
    border-right-width: 1px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px
}

.ant-input-group.ant-input-group-compact>.ant-select-auto-complete .ant-input {
    vertical-align: top
}

.ant-input-group-rtl .ant-input-group-addon:first-child,.ant-input-group>.ant-input-rtl:first-child {
    border-radius: 2px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}

.ant-input-group-rtl .ant-input-group-addon:first-child {
    border-right: 1px solid #d9d9d9;
    border-left: 0
}

.ant-input-group-rtl .ant-input-group-addon:last-child {
    border-right: 0;
    border-left: 1px solid #d9d9d9
}

.ant-input-group-rtl .ant-input-group-addon:last-child,.ant-input-group-rtl .ant-input-group>.ant-input:last-child {
    border-radius: 2px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}

.ant-input-group-rtl.ant-input-group.ant-input-group-compact>:not(:last-child) {
    margin-right: 0;
    margin-left: -1px;
    border-left-width: 1px
}

.ant-input-group-rtl.ant-input-group.ant-input-group-compact>.ant-calendar-picker:first-child .ant-input,.ant-input-group-rtl.ant-input-group.ant-input-group-compact>.ant-cascader-picker:first-child .ant-input,.ant-input-group-rtl.ant-input-group.ant-input-group-compact>.ant-mention-wrapper:first-child .ant-mention-editor,.ant-input-group-rtl.ant-input-group.ant-input-group-compact>.ant-select-auto-complete:first-child .ant-input,.ant-input-group-rtl.ant-input-group.ant-input-group-compact>.ant-select:first-child>.ant-select-selector,.ant-input-group-rtl.ant-input-group.ant-input-group-compact>.ant-time-picker:first-child .ant-time-picker-input,.ant-input-group-rtl.ant-input-group.ant-input-group-compact>:first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 0
}

.ant-input-group-rtl.ant-input-group.ant-input-group-compact>.ant-calendar-picker:last-child .ant-input,.ant-input-group-rtl.ant-input-group.ant-input-group-compact>.ant-cascader-picker-focused:last-child .ant-input,.ant-input-group-rtl.ant-input-group.ant-input-group-compact>.ant-cascader-picker:last-child .ant-input,.ant-input-group-rtl.ant-input-group.ant-input-group-compact>.ant-mention-wrapper:last-child .ant-mention-editor,.ant-input-group-rtl.ant-input-group.ant-input-group-compact>.ant-select-auto-complete:last-child .ant-input,.ant-input-group-rtl.ant-input-group.ant-input-group-compact>.ant-select:last-child>.ant-select-selector,.ant-input-group-rtl.ant-input-group.ant-input-group-compact>.ant-time-picker:last-child .ant-time-picker-input,.ant-input-group-rtl.ant-input-group.ant-input-group-compact>:last-child {
    border-left-width: 1px;
    border-top-left-radius: 2px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 2px
}

.ant-input-group-wrapper {
    display: inline-block;
    width: 100%;
    text-align: start;
    vertical-align: top
}

.ant-input-password-icon {
    color: rgba(0,0,0,.45);
    cursor: pointer;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-input-password-icon:hover {
    color: rgba(0,0,0,.85)
}

.ant-input[type=color] {
    height: 32px
}

.ant-input[type=color].ant-input-lg {
    height: 40px
}

.ant-input[type=color].ant-input-sm {
    height: 24px;
    padding-top: 3px;
    padding-bottom: 3px
}

.ant-input-search-icon {
    padding: 0 9px
}

.ant-input-search-icon:before {
    -webkit-transform: translateX(-10px);
    -ms-transform: translateX(-10px);
    transform: translateX(-10px)
}

.ant-input-search-icon:after {
    width: 32px
}

.ant-input-affix-wrapper-lg .ant-input-search-icon {
    padding: 0 12px
}

.ant-input-affix-wrapper-lg .ant-input-search-icon:before {
    -webkit-transform: translateX(-13px);
    -ms-transform: translateX(-13px);
    transform: translateX(-13px)
}

.ant-input-affix-wrapper-lg .ant-input-search-icon:after {
    width: 40px
}

.ant-input-affix-wrapper-sm .ant-input-search-icon {
    padding: 0 6px
}

.ant-input-affix-wrapper-sm .ant-input-search-icon:before {
    -webkit-transform: translateX(-7px);
    -ms-transform: translateX(-7px);
    transform: translateX(-7px)
}

.ant-input-affix-wrapper-sm .ant-input-search-icon:after {
    width: 24px
}

.ant-input-search-icon {
    margin-left: .5em;
    color: rgba(0,0,0,.45);
    cursor: pointer;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-input-search-icon:hover {
    color: rgba(0,0,0,.85)
}

.ant-input-search-icon:before {
    position: absolute;
    top: 0;
    bottom: 0;
    display: block;
    border-left: 1px solid #d9d9d9;
    -webkit-transition: all .3s;
    transition: all .3s;
    content: ''
}

.ant-input-search-icon:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    content: ''
}

.ant-input-search:not(.ant-input-search-enter-button) {
    padding-right: 0
}

.ant-input-search-enter-button.ant-input-affix-wrapper,.ant-input-search-enter-button input {
    border-right: 0
}

.ant-input-search-enter-button+.ant-input-group-addon,.ant-input-search-enter-button input+.ant-input-group-addon {
    padding: 0;
    border: 0
}

.ant-input-search-enter-button+.ant-input-group-addon .ant-input-search-button,.ant-input-search-enter-button input+.ant-input-group-addon .ant-input-search-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}

.ant-input-group-rtl,.ant-input-group-wrapper-rtl {
    direction: rtl
}

.ant-input-affix-wrapper-rtl .ant-input-prefix {
    margin: 0 0 0 4px
}

.ant-input-affix-wrapper-rtl .ant-input-suffix {
    margin: 0 4px 0 0
}

.ant-input-search-rtl {
    direction: rtl
}

.ant-input-search-rtl .ant-input-search-icon {
    margin-right: .5em;
    margin-left: 0
}

.ant-input-search-rtl .ant-input-search-icon:before {
    border-left: none
}

.ant-input-search-rtl .ant-input-search-icon:after {
    right: auto;
    left: 0;
    border-right: 1px solid #d9d9d9;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-input-search-rtl.ant-input-search:not(.ant-input-search-enter-button) {
    padding-right: 11px;
    padding-left: 0
}

.ant-input-search-rtl.ant-input-search-enter-button input {
    border: 1px solid #d9d9d9;
    border-left: 0
}

.ant-input-search-enter-button input:focus,.ant-input-search-enter-button input:hover {
    border-color: #40a9ff
}

.ant-input-search-rtl.ant-input-search-enter-button+.ant-input-group-addon .ant-input-search-button,.ant-input-search-rtl.ant-input-search-enter-button input+.ant-input-group-addon .ant-input-search-button {
    width: 100%;
    border-top-left-radius: 2px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 2px
}

.ant-checkbox {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    top: -.09em;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    vertical-align: middle;
    outline: none;
    cursor: pointer
}

.ant-checkbox-input:focus+.ant-checkbox-inner,.ant-checkbox-wrapper:hover .ant-checkbox-inner,.ant-checkbox:hover .ant-checkbox-inner {
    border-color: #1890ff
}

.ant-checkbox-checked:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #1890ff;
    border-radius: 2px;
    visibility: hidden;
    -webkit-animation: antCheckboxEffect .36s ease-in-out;
    animation: antCheckboxEffect .36s ease-in-out;
    -webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
    content: ''
}

.ant-checkbox-wrapper:hover .ant-checkbox:after,.ant-checkbox:hover:after {
    visibility: visible
}

.ant-checkbox-inner {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 16px;
    height: 16px;
    direction: ltr;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    border-collapse: separate;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-checkbox-inner:after {
    position: absolute;
    top: 50%;
    left: 22%;
    display: table;
    width: 5.71428571px;
    height: 9.14285714px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    -webkit-transform: rotate(45deg) scale(0) translate(-50%,-50%);
    -ms-transform: rotate(45deg) scale(0) translate(-50%,-50%);
    transform: rotate(45deg) scale(0) translate(-50%,-50%);
    opacity: 0;
    -webkit-transition: all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s;
    transition: all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s;
    content: ' '
}

.ant-checkbox-input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0
}

.ant-checkbox-checked .ant-checkbox-inner:after {
    position: absolute;
    display: table;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    -webkit-transform: rotate(45deg) scale(1) translate(-50%,-50%);
    -ms-transform: rotate(45deg) scale(1) translate(-50%,-50%);
    transform: rotate(45deg) scale(1) translate(-50%,-50%);
    opacity: 1;
    -webkit-transition: all .2s cubic-bezier(.12,.4,.29,1.46) .1s;
    transition: all .2s cubic-bezier(.12,.4,.29,1.46) .1s;
    content: ' '
}

.ant-checkbox-checked .ant-checkbox-inner {
    background-color: #1890ff;
    border-color: #1890ff
}

.ant-checkbox-disabled {
    cursor: not-allowed
}

.ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner:after {
    border-color: rgba(0,0,0,.25);
    -webkit-animation-name: none;
    animation-name: none
}

.ant-checkbox-disabled .ant-checkbox-input {
    cursor: not-allowed
}

.ant-checkbox-disabled .ant-checkbox-inner {
    background-color: #f5f5f5;
    border-color: #d9d9d9!important
}

.ant-checkbox-disabled .ant-checkbox-inner:after {
    border-color: #f5f5f5;
    border-collapse: separate;
    -webkit-animation-name: none;
    animation-name: none
}

.ant-checkbox-disabled+span {
    color: rgba(0,0,0,.25);
    cursor: not-allowed
}

.ant-checkbox-disabled:hover:after,.ant-checkbox-wrapper:hover .ant-checkbox-disabled:after {
    visibility: hidden
}

.ant-checkbox-wrapper {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    display: inline-block;
    line-height: unset;
    cursor: pointer
}

.ant-checkbox-wrapper.ant-checkbox-wrapper-disabled {
    cursor: not-allowed
}

.ant-checkbox-wrapper+.ant-checkbox-wrapper {
    margin-left: 8px
}

.ant-checkbox+span {
    padding-right: 8px;
    padding-left: 8px
}

.ant-checkbox-group {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    display: inline-block
}

.ant-checkbox-group-item {
    display: inline-block;
    margin-right: 8px
}

.ant-checkbox-group-item:last-child {
    margin-right: 0
}

.ant-checkbox-group-item+.ant-checkbox-group-item {
    margin-left: 0
}

.ant-checkbox-indeterminate .ant-checkbox-inner {
    background-color: #fff;
    border-color: #d9d9d9
}

.ant-checkbox-indeterminate .ant-checkbox-inner:after {
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    background-color: #1890ff;
    border: 0;
    -webkit-transform: translate(-50%,-50%) scale(1);
    -ms-transform: translate(-50%,-50%) scale(1);
    transform: translate(-50%,-50%) scale(1);
    opacity: 1;
    content: ' '
}

.ant-checkbox-indeterminate.ant-checkbox-disabled .ant-checkbox-inner:after {
    background-color: rgba(0,0,0,.25);
    border-color: rgba(0,0,0,.25)
}

.ant-checkbox-rtl {
    direction: rtl
}

.ant-checkbox-group-rtl .ant-checkbox-group-item {
    margin-right: 0;
    margin-left: 8px
}

.ant-checkbox-group-rtl .ant-checkbox-group-item:last-child {
    margin-left: 0!important
}

.ant-checkbox-group-rtl .ant-checkbox-group-item+.ant-checkbox-group-item {
    margin-left: 8px
}

.ant-collapse {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    background-color: #fafafa;
    border: 1px solid #d9d9d9;
    border-bottom: 0;
    border-radius: 2px
}

.ant-collapse>.ant-collapse-item {
    border-bottom: 1px solid #d9d9d9
}

.ant-collapse>.ant-collapse-item:last-child,.ant-collapse>.ant-collapse-item:last-child>.ant-collapse-header {
    border-radius: 0 0 2px 2px
}

.ant-collapse>.ant-collapse-item>.ant-collapse-header {
    position: relative;
    padding: 12px 16px;
    padding-left: 40px;
    color: rgba(0,0,0,.85);
    line-height: 1.5715;
    cursor: pointer;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-collapse>.ant-collapse-item>.ant-collapse-header:before {
    display: table;
    content: ''
}

.ant-collapse>.ant-collapse-item>.ant-collapse-header:after {
    display: table;
    clear: both;
    content: ''
}

.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow {
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    top: 50%;
    left: 16px;
    display: inline-block;
    font-size: 12px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow>* {
    line-height: 1
}

.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow svg {
    display: inline-block
}

.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow:before {
    display: none
}

.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow .ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow-icon {
    display: block
}

.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow svg {
    -webkit-transition: -webkit-transform .24s;
    transition: -webkit-transform .24s;
    transition: transform .24s;
    transition: transform .24s,-webkit-transform .24s
}

.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-extra {
    float: right
}

.ant-collapse>.ant-collapse-item>.ant-collapse-header:focus {
    outline: none
}

.ant-collapse>.ant-collapse-item.ant-collapse-no-arrow>.ant-collapse-header {
    padding-left: 12px
}

.ant-collapse-icon-position-right>.ant-collapse-item>.ant-collapse-header {
    padding: 12px 16px;
    padding-right: 40px
}

.ant-collapse-icon-position-right>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow {
    right: 16px;
    left: auto
}

.ant-collapse-anim-active {
    -webkit-transition: height .2s cubic-bezier(.215,.61,.355,1);
    transition: height .2s cubic-bezier(.215,.61,.355,1)
}

.ant-collapse-content {
    overflow: hidden;
    color: rgba(0,0,0,.65);
    background-color: #fff;
    border-top: 1px solid #d9d9d9
}

.ant-collapse-content>.ant-collapse-content-box {
    padding: 16px
}

.ant-collapse-content-inactive {
    display: none
}

.ant-collapse-item:last-child>.ant-collapse-content {
    border-radius: 0 0 2px 2px
}

.ant-collapse-borderless {
    background-color: #fafafa;
    border: 0
}

.ant-collapse-borderless>.ant-collapse-item {
    border-bottom: 1px solid #d9d9d9
}

.ant-collapse-borderless>.ant-collapse-item:last-child,.ant-collapse-borderless>.ant-collapse-item:last-child .ant-collapse-header {
    border-radius: 0
}

.ant-collapse-borderless>.ant-collapse-item>.ant-collapse-content {
    background-color: transparent;
    border-top: 0
}

.ant-collapse-borderless>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box {
    padding-top: 4px
}

.ant-collapse .ant-collapse-item-disabled>.ant-collapse-header,.ant-collapse .ant-collapse-item-disabled>.ant-collapse-header>.arrow {
    color: rgba(0,0,0,.25);
    cursor: not-allowed
}

.ant-collapse-rtl {
    direction: rtl
}

.ant-collapse-rtl .ant-collapse>.ant-collapse-item>.ant-collapse-header {
    padding: 12px 16px;
    padding-right: 40px
}

.ant-collapse-rtl.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow svg {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg)
}

.ant-collapse-rtl.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-extra {
    float: left
}

.ant-collapse-rtl.ant-collapse>.ant-collapse-item.ant-collapse-no-arrow>.ant-collapse-header {
    padding-right: 12px;
    padding-left: 0
}

.ant-comment {
    position: relative;
    background-color: inherit
}

.ant-comment-inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    padding: 16px 0
}

.ant-comment-avatar {
    position: relative;
    -ms-flex-negative: 0;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    margin-right: 12px;
    cursor: pointer
}

.ant-comment-avatar img {
    width: 32px;
    height: 32px;
    border-radius: 50%
}

.ant-comment-content {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    min-width: 1px;
    font-size: 14px;
    word-wrap: break-word
}

.ant-comment-content-author {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    margin-bottom: 4px;
    font-size: 14px
}

.ant-comment-content-author>a,.ant-comment-content-author>span {
    padding-right: 8px;
    font-size: 12px;
    line-height: 18px
}

.ant-comment-content-author-name {
    color: rgba(0,0,0,.45);
    font-size: 14px;
    -webkit-transition: color .3s;
    transition: color .3s
}

.ant-comment-content-author-name>*,.ant-comment-content-author-name>:hover {
    color: rgba(0,0,0,.45)
}

.ant-comment-content-author-time {
    color: #ccc;
    white-space: nowrap;
    cursor: auto
}

.ant-comment-content-detail p {
    margin-bottom: inherit;
    white-space: pre-wrap
}

.ant-comment-actions {
    margin-top: 12px;
    margin-bottom: inherit;
    padding-left: 0
}

.ant-comment-actions>li {
    display: inline-block;
    color: rgba(0,0,0,.45)
}

.ant-comment-actions>li>span {
    padding-right: 10px;
    color: rgba(0,0,0,.45);
    font-size: 12px;
    cursor: pointer;
    -webkit-transition: color .3s;
    transition: color .3s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.ant-comment-actions>li>span:hover {
    color: #595959
}

.ant-comment-nested {
    margin-left: 44px
}

.ant-comment-rtl {
    direction: rtl
}

.ant-comment-rtl .ant-comment-avatar {
    margin-right: 0;
    margin-left: 12px
}

.ant-comment-rtl .ant-comment-content-author>a,.ant-comment-rtl .ant-comment-content-author>span {
    padding-right: 0;
    padding-left: 8px
}

.ant-comment-rtl .ant-comment-actions {
    padding-right: 0
}

.ant-comment-rtl .ant-comment-actions>li>span {
    padding-right: 0;
    padding-left: 10px
}

.ant-comment-rtl .ant-comment-nested {
    margin-right: 44px;
    margin-left: 0
}

.ant-descriptions-title {
    margin-bottom: 20px;
    color: rgba(0,0,0,.85);
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5715
}

.ant-descriptions-view {
    width: 100%;
    overflow: hidden;
    border-radius: 2px
}

.ant-descriptions-view table {
    width: 100%;
    table-layout: fixed
}

.ant-descriptions-row>td,.ant-descriptions-row>th {
    padding-bottom: 16px
}

.ant-descriptions-row:last-child {
    border-bottom: none
}

.ant-descriptions-item-label {
    color: rgba(0,0,0,.85);
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5715
}

.ant-descriptions-item-label:after {
    position: relative;
    top: -.5px;
    margin: 0 8px 0 2px;
    content: ' '
}

.ant-descriptions-item-colon:after {
    content: ':'
}

.ant-descriptions-item-no-label:after {
    margin: 0;
    content: ''
}

.ant-descriptions-item-content {
    display: table-cell;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    line-height: 1.5715
}

.ant-descriptions-item {
    padding-bottom: 0
}

.ant-descriptions-item>span {
    display: inline-block
}

.ant-descriptions-middle .ant-descriptions-row>td,.ant-descriptions-middle .ant-descriptions-row>th {
    padding-bottom: 12px
}

.ant-descriptions-small .ant-descriptions-row>td,.ant-descriptions-small .ant-descriptions-row>th {
    padding-bottom: 8px
}

.ant-descriptions-bordered .ant-descriptions-view {
    border: 1px solid #f0f0f0
}

.ant-descriptions-bordered .ant-descriptions-view>table {
    table-layout: auto
}

.ant-descriptions-bordered .ant-descriptions-item-content,.ant-descriptions-bordered .ant-descriptions-item-label {
    padding: 16px 24px;
    border-right: 1px solid #f0f0f0
}

.ant-descriptions-bordered .ant-descriptions-item-content:last-child,.ant-descriptions-bordered .ant-descriptions-item-label:last-child {
    border-right: none
}

.ant-descriptions-bordered .ant-descriptions-item-label {
    background-color: #fafafa
}

.ant-descriptions-bordered .ant-descriptions-item-label:after {
    display: none
}

.ant-descriptions-bordered .ant-descriptions-row {
    border-bottom: 1px solid #f0f0f0
}

.ant-descriptions-bordered .ant-descriptions-row:last-child {
    border-bottom: none
}

.ant-descriptions-bordered.ant-descriptions-middle .ant-descriptions-item-content,.ant-descriptions-bordered.ant-descriptions-middle .ant-descriptions-item-label {
    padding: 12px 24px
}

.ant-descriptions-bordered.ant-descriptions-small .ant-descriptions-item-content,.ant-descriptions-bordered.ant-descriptions-small .ant-descriptions-item-label {
    padding: 8px 16px
}

.ant-descriptions-rtl {
    direction: rtl
}

.ant-descriptions-rtl .ant-descriptions-item-label:after {
    margin: 0 2px 0 8px
}

.ant-divider {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    background: #f0f0f0
}

.ant-divider-vertical {
    position: relative;
    top: -.06em;
    display: inline-block;
    width: 1px;
    height: .9em;
    margin: 0 8px;
    vertical-align: middle
}

.ant-divider-horizontal {
    display: block;
    clear: both;
    width: 100%;
    min-width: 100%;
    height: 1px;
    margin: 24px 0
}

.ant-divider-horizontal.ant-divider-with-text {
    display: table;
    margin: 16px 0;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    text-align: center;
    background: transparent
}

.ant-divider-horizontal.ant-divider-with-text:after,.ant-divider-horizontal.ant-divider-with-text:before {
    position: relative;
    top: 50%;
    display: table-cell;
    width: 50%;
    border-top: 1px solid #f0f0f0;
    -webkit-transform: translateY(50%);
    -ms-transform: translateY(50%);
    transform: translateY(50%);
    content: ''
}

.ant-divider-horizontal.ant-divider-with-text-left:before {
    top: 50%;
    width: 5%
}

.ant-divider-horizontal.ant-divider-with-text-left:after,.ant-divider-horizontal.ant-divider-with-text-right:before {
    top: 50%;
    width: 95%
}

.ant-divider-horizontal.ant-divider-with-text-right:after {
    top: 50%;
    width: 5%
}

.ant-divider-inner-text {
    display: inline-block;
    padding: 0 1em
}

.ant-divider-dashed {
    background: none;
    border-color: #f0f0f0;
    border-style: dashed;
    border-width: 1px 0 0
}

.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed {
    border-top: 0
}

.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed:after,.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed:before {
    border-style: dashed none none
}

.ant-divider-vertical.ant-divider-dashed {
    border-width: 0 0 0 1px
}

.ant-divider-plain.ant-divider-with-text {
    color: rgba(0,0,0,.65);
    font-weight: 400;
    font-size: 14px
}

.ant-divider-rtl {
    direction: rtl
}

.ant-divider-rtl.ant-divider-horizontal.ant-divider-with-text-left:before {
    width: 95%
}

.ant-divider-rtl.ant-divider-horizontal.ant-divider-with-text-left:after,.ant-divider-rtl.ant-divider-horizontal.ant-divider-with-text-right:before {
    width: 5%
}

.ant-divider-rtl.ant-divider-horizontal.ant-divider-with-text-right:after {
    width: 95%
}

.ant-drawer {
    position: fixed;
    z-index: 1000;
    width: 0;
    height: 100%;
    -webkit-transition: height 0s ease .3s,width 0s ease .3s,-webkit-transform .3s cubic-bezier(.7,.3,.1,1);
    transition: height 0s ease .3s,width 0s ease .3s,-webkit-transform .3s cubic-bezier(.7,.3,.1,1);
    transition: transform .3s cubic-bezier(.7,.3,.1,1),height 0s ease .3s,width 0s ease .3s;
    transition: transform .3s cubic-bezier(.7,.3,.1,1),height 0s ease .3s,width 0s ease .3s,-webkit-transform .3s cubic-bezier(.7,.3,.1,1)
}

.ant-drawer>* {
    -webkit-transition: -webkit-transform .3s cubic-bezier(.7,.3,.1,1),-webkit-box-shadow .3s cubic-bezier(.7,.3,.1,1);
    -webkit-transition: box-shadow .3s cubic-bezier(.7,.3,.1,1),-webkit-transform .3s cubic-bezier(.7,.3,.1,1);
    transition: box-shadow .3s cubic-bezier(.7,.3,.1,1),-webkit-transform .3s cubic-bezier(.7,.3,.1,1);
    transition: transform .3s cubic-bezier(.7,.3,.1,1),box-shadow .3s cubic-bezier(.7,.3,.1,1);
    transition: transform .3s cubic-bezier(.7,.3,.1,1),box-shadow .3s cubic-bezier(.7,.3,.1,1),-webkit-transform .3s cubic-bezier(.7,.3,.1,1)
}

.ant-drawer-content-wrapper {
    position: absolute
}

.ant-drawer .ant-drawer-content {
    width: 100%;
    height: 100%
}

.ant-drawer-left,.ant-drawer-right {
    top: 0;
    width: 0;
    height: 100%
}

.ant-drawer-left .ant-drawer-content-wrapper,.ant-drawer-right .ant-drawer-content-wrapper {
    height: 100%
}

.ant-drawer-left.ant-drawer-open,.ant-drawer-right.ant-drawer-open {
    width: 100%;
    -webkit-transition: -webkit-transform .3s cubic-bezier(.7,.3,.1,1);
    transition: -webkit-transform .3s cubic-bezier(.7,.3,.1,1);
    transition: transform .3s cubic-bezier(.7,.3,.1,1);
    transition: transform .3s cubic-bezier(.7,.3,.1,1),-webkit-transform .3s cubic-bezier(.7,.3,.1,1)
}

.ant-drawer-left.ant-drawer-open.no-mask,.ant-drawer-right.ant-drawer-open.no-mask {
    width: 0
}

.ant-drawer-left,.ant-drawer-left .ant-drawer-content-wrapper {
    left: 0
}

.ant-drawer-left.ant-drawer-open .ant-drawer-content-wrapper {
    box-shadow: 6px 0 16px -8px rgba(0,0,0,.08),9px 0 28px 0 rgba(0,0,0,.05),12px 0 48px 16px rgba(0,0,0,.03)
}

.ant-drawer-right,.ant-drawer-right .ant-drawer-content-wrapper {
    right: 0
}

.ant-drawer-right.ant-drawer-open .ant-drawer-content-wrapper {
    box-shadow: -6px 0 16px -8px rgba(0,0,0,.08),-9px 0 28px 0 rgba(0,0,0,.05),-12px 0 48px 16px rgba(0,0,0,.03)
}

.ant-drawer-right.ant-drawer-open.no-mask {
    right: 1px;
    -webkit-transform: translateX(1px);
    -ms-transform: translateX(1px);
    transform: translateX(1px)
}

.ant-drawer-bottom,.ant-drawer-top {
    left: 0;
    width: 100%;
    height: 0%
}

.ant-drawer-bottom .ant-drawer-content-wrapper,.ant-drawer-top .ant-drawer-content-wrapper {
    width: 100%
}

.ant-drawer-bottom.ant-drawer-open,.ant-drawer-top.ant-drawer-open {
    height: 100%;
    -webkit-transition: -webkit-transform .3s cubic-bezier(.7,.3,.1,1);
    transition: -webkit-transform .3s cubic-bezier(.7,.3,.1,1);
    transition: transform .3s cubic-bezier(.7,.3,.1,1);
    transition: transform .3s cubic-bezier(.7,.3,.1,1),-webkit-transform .3s cubic-bezier(.7,.3,.1,1)
}

.ant-drawer-bottom.ant-drawer-open.no-mask,.ant-drawer-top.ant-drawer-open.no-mask {
    height: 0%
}

.ant-drawer-top {
    top: 0
}

.ant-drawer-top.ant-drawer-open .ant-drawer-content-wrapper {
    box-shadow: 0 6px 16px -8px rgba(0,0,0,.08),0 9px 28px 0 rgba(0,0,0,.05),0 12px 48px 16px rgba(0,0,0,.03)
}

.ant-drawer-bottom,.ant-drawer-bottom .ant-drawer-content-wrapper {
    bottom: 0
}

.ant-drawer-bottom.ant-drawer-open .ant-drawer-content-wrapper {
    box-shadow: 0 -6px 16px -8px rgba(0,0,0,.08),0 -9px 28px 0 rgba(0,0,0,.05),0 -12px 48px 16px rgba(0,0,0,.03)
}

.ant-drawer-bottom.ant-drawer-open.no-mask {
    bottom: 1px;
    -webkit-transform: translateY(1px);
    -ms-transform: translateY(1px);
    transform: translateY(1px)
}

.ant-drawer.ant-drawer-open .ant-drawer-mask {
    height: 100%;
    opacity: 1;
    -webkit-transition: none;
    transition: none;
    -webkit-animation: antdDrawerFadeIn .3s cubic-bezier(.7,.3,.1,1);
    animation: antdDrawerFadeIn .3s cubic-bezier(.7,.3,.1,1)
}

.ant-drawer-title {
    margin: 0;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    font-size: 16px;
    line-height: 22px
}

.ant-drawer-content {
    position: relative;
    z-index: 1;
    overflow: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 0
}

.ant-drawer-close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    display: block;
    padding: 20px;
    color: rgba(0,0,0,.45);
    font-weight: 700;
    font-size: 16px;
    font-style: normal;
    line-height: 1;
    text-align: center;
    text-transform: none;
    text-decoration: none;
    background: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
    -webkit-transition: color .3s;
    transition: color .3s;
    text-rendering: auto
}

.ant-drawer-close:focus,.ant-drawer-close:hover {
    color: rgba(0,0,0,.75);
    text-decoration: none
}

.ant-drawer-header-no-title .ant-drawer-close {
    margin-right: var(--scroll-bar);
    padding-right: calc(20px - var(--scroll-bar))
}

.ant-drawer-header {
    position: relative;
    padding: 16px 24px;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 2px 2px 0 0
}

.ant-drawer-header,.ant-drawer-header-no-title {
    color: rgba(0,0,0,.65);
    background: #fff
}

.ant-drawer-wrapper-body {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: nowrap;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%
}

.ant-drawer-body {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    padding: 24px;
    overflow: auto;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word
}

.ant-drawer-footer {
    -ms-flex-negative: 0;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    padding: 10px;
    border-top: 1px solid #f0f0f0
}

.ant-drawer-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: rgba(0,0,0,.45);
    opacity: 0;
    filter: alpha(opacity=45);
    -webkit-transition: opacity .3s linear,height 0s ease .3s;
    transition: opacity .3s linear,height 0s ease .3s
}

.ant-drawer-open-content {
    box-shadow: 0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)
}

.ant-drawer .ant-picker-clear {
    background: #fff
}

@-webkit-keyframes antdDrawerFadeIn {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@keyframes antdDrawerFadeIn {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

.ant-drawer-rtl {
    direction: rtl
}

.ant-drawer-rtl .ant-drawer-close {
    right: auto;
    left: 0
}

.ant-form-item .ant-mentions,.ant-form-item textarea.ant-input {
    height: auto
}

.ant-form-item .ant-upload {
    background: transparent
}

.ant-form-item .ant-upload.ant-upload-drag {
    background: #fafafa
}

.ant-form-item input[type=checkbox],.ant-form-item input[type=radio] {
    width: 14px;
    height: 14px
}

.ant-form-item .ant-checkbox-inline,.ant-form-item .ant-radio-inline {
    display: inline-block;
    margin-left: 8px;
    font-weight: 400;
    vertical-align: middle;
    cursor: pointer
}

.ant-form-item .ant-checkbox-inline:first-child,.ant-form-item .ant-radio-inline:first-child {
    margin-left: 0
}

.ant-form-item .ant-checkbox-vertical,.ant-form-item .ant-radio-vertical {
    display: block
}

.ant-form-item .ant-checkbox-vertical+.ant-checkbox-vertical,.ant-form-item .ant-radio-vertical+.ant-radio-vertical {
    margin-left: 0
}

.ant-form-item .ant-input-number+.ant-form-text {
    margin-left: 8px
}

.ant-form-item .ant-input-number-handler-wrap {
    z-index: 2
}

.ant-form-item .ant-cascader-picker,.ant-form-item .ant-select {
    width: 100%
}

.ant-form-item .ant-input-group .ant-cascader-picker,.ant-form-item .ant-input-group .ant-select {
    width: auto
}

.ant-form-inline {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap
}

.ant-form-inline .ant-form-item {
    -webkit-box-flex: 0;
    -ms-flex: none;
    -webkit-flex: none;
    flex: none;
    -ms-flex-wrap: nowrap;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
    margin-right: 16px;
    margin-bottom: 0
}

.ant-form-inline .ant-form-item-with-help {
    margin-bottom: 24px
}

.ant-form-inline .ant-form-item>.ant-form-item-control,.ant-form-inline .ant-form-item>.ant-form-item-label {
    display: inline-block;
    vertical-align: top
}

.ant-form-inline .ant-form-item .ant-form-item-has-feedback,.ant-form-inline .ant-form-item .ant-form-text {
    display: inline-block
}

.ant-form-horizontal .ant-form-item-label {
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    -webkit-flex-grow: 0;
    flex-grow: 0
}

.ant-form-horizontal .ant-form-item-control {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0px;
    -webkit-flex: 1 1 0;
    flex: 1 1 0
}

.ant-form-vertical .ant-form-item {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column
}

.ant-form-vertical .ant-form-item-label>label {
    height: auto
}

.ant-col-24.ant-form-item-label,.ant-col-xl-24.ant-form-item-label,.ant-form-vertical .ant-form-item-label {
    margin: 0;
    padding: 0 0 8px;
    line-height: 1.5715;
    white-space: normal;
    text-align: left
}

.ant-col-24.ant-form-item-label>label,.ant-col-xl-24.ant-form-item-label>label,.ant-form-vertical .ant-form-item-label>label {
    margin: 0
}

.ant-col-24.ant-form-item-label>label:after,.ant-col-xl-24.ant-form-item-label>label:after,.ant-form-vertical .ant-form-item-label>label:after {
    display: none
}

.ant-form-rtl.ant-col-24.ant-form-item-label,.ant-form-rtl.ant-col-xl-24.ant-form-item-label,.ant-form-rtl.ant-form-vertical .ant-form-item-label {
    text-align: right
}

@media (max-width: 575px) {
    .ant-form-item .ant-form-item-label {
        margin:0;
        padding: 0 0 8px;
        line-height: 1.5715;
        white-space: normal;
        text-align: left
    }

    .ant-form-item .ant-form-item-label>label {
        margin: 0
    }

    .ant-form-item .ant-form-item-label>label:after {
        display: none
    }

    .ant-form-rtl.ant-form-item .ant-form-item-label {
        text-align: right
    }

    .ant-form .ant-form-item {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap
    }

    .ant-form .ant-form-item .ant-form-item-control,.ant-form .ant-form-item .ant-form-item-label {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        -webkit-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%
    }

    .ant-col-xs-24.ant-form-item-label {
        margin: 0;
        padding: 0 0 8px;
        line-height: 1.5715;
        white-space: normal;
        text-align: left
    }

    .ant-col-xs-24.ant-form-item-label>label {
        margin: 0
    }

    .ant-col-xs-24.ant-form-item-label>label:after {
        display: none
    }

    .ant-form-rtl.ant-col-xs-24.ant-form-item-label {
        text-align: right
    }
}

@media (max-width: 767px) {
    .ant-col-sm-24.ant-form-item-label {
        margin:0;
        padding: 0 0 8px;
        line-height: 1.5715;
        white-space: normal;
        text-align: left
    }

    .ant-col-sm-24.ant-form-item-label>label {
        margin: 0
    }

    .ant-col-sm-24.ant-form-item-label>label:after {
        display: none
    }

    .ant-form-rtl.ant-col-sm-24.ant-form-item-label {
        text-align: right
    }
}

@media (max-width: 991px) {
    .ant-col-md-24.ant-form-item-label {
        margin:0;
        padding: 0 0 8px;
        line-height: 1.5715;
        white-space: normal;
        text-align: left
    }

    .ant-col-md-24.ant-form-item-label>label {
        margin: 0
    }

    .ant-col-md-24.ant-form-item-label>label:after {
        display: none
    }

    .ant-form-rtl.ant-col-md-24.ant-form-item-label {
        text-align: right
    }
}

@media (max-width: 1199px) {
    .ant-col-lg-24.ant-form-item-label {
        margin:0;
        padding: 0 0 8px;
        line-height: 1.5715;
        white-space: normal;
        text-align: left
    }

    .ant-col-lg-24.ant-form-item-label>label {
        margin: 0
    }

    .ant-col-lg-24.ant-form-item-label>label:after {
        display: none
    }

    .ant-form-rtl.ant-col-lg-24.ant-form-item-label {
        text-align: right
    }
}

@media (max-width: 1599px) {
    .ant-col-xl-24.ant-form-item-label {
        margin:0;
        padding: 0 0 8px;
        line-height: 1.5715;
        white-space: normal;
        text-align: left
    }

    .ant-col-xl-24.ant-form-item-label>label {
        margin: 0
    }

    .ant-col-xl-24.ant-form-item-label>label:after {
        display: none
    }

    .ant-form-rtl.ant-col-xl-24.ant-form-item-label {
        text-align: right
    }
}

.ant-form-item-has-feedback .ant-input {
    padding-right: 24px
}

.ant-form-item-has-feedback .ant-input-affix-wrapper .ant-input-suffix {
    padding-right: 18px
}

.ant-form-item-has-feedback .ant-input-search:not(.ant-input-search-enter-button) .ant-input-suffix {
    right: 28px
}

.ant-form-item-has-feedback .ant-switch {
    margin: 2px 0 4px
}

.ant-form-item-has-feedback :not(.ant-input-group-addon)>.ant-select .ant-select-arrow,.ant-form-item-has-feedback :not(.ant-input-group-addon)>.ant-select .ant-select-selection__clear,.ant-form-item-has-feedback>.ant-select .ant-select-arrow,.ant-form-item-has-feedback>.ant-select .ant-select-selection__clear {
    right: 28px
}

.ant-form-item-has-feedback :not(.ant-input-group-addon)>.ant-select .ant-select-selection-selected-value,.ant-form-item-has-feedback>.ant-select .ant-select-selection-selected-value {
    padding-right: 42px
}

.ant-form-item-has-feedback .ant-cascader-picker-arrow {
    margin-right: 17px
}

.ant-form-item-has-feedback .ant-cascader-picker-clear {
    right: 28px
}

.ant-form-item-has-feedback .ant-picker,.ant-form-item-has-feedback .ant-picker-large {
    padding-right: 29.2px
}

.ant-form-item-has-feedback .ant-picker-small {
    padding-right: 25.2px
}

.ant-form-item-has-feedback.ant-form-item-has-error .ant-form-item-children-icon,.ant-form-item-has-feedback.ant-form-item-has-success .ant-form-item-children-icon,.ant-form-item-has-feedback.ant-form-item-has-warning .ant-form-item-children-icon,.ant-form-item-has-feedback.ant-form-item-is-validating .ant-form-item-children-icon {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 1;
    width: 32px;
    height: 20px;
    margin-top: -10px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    visibility: visible;
    -webkit-animation: zoomIn .3s cubic-bezier(.12,.4,.29,1.46);
    animation: zoomIn .3s cubic-bezier(.12,.4,.29,1.46);
    pointer-events: none
}

.ant-form-item-has-feedback.ant-form-item-has-error .ant-form-item-children-icon svg,.ant-form-item-has-feedback.ant-form-item-has-success .ant-form-item-children-icon svg,.ant-form-item-has-feedback.ant-form-item-has-warning .ant-form-item-children-icon svg,.ant-form-item-has-feedback.ant-form-item-is-validating .ant-form-item-children-icon svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto
}

.ant-form-item-has-success.ant-form-item-has-feedback .ant-form-item-children-icon {
    color: #52c41a;
    -webkit-animation-name: diffZoomIn1!important;
    animation-name: diffZoomIn1!important
}

.ant-form-item-has-warning .ant-form-item-explain,.ant-form-item-has-warning .ant-form-item-split {
    color: #faad14
}

.ant-form-item-has-warning .ant-input,.ant-form-item-has-warning .ant-input-affix-wrapper,.ant-form-item-has-warning .ant-input-affix-wrapper:hover,.ant-form-item-has-warning .ant-input:hover {
    background-color: #fff;
    border-color: #faad14
}

.ant-form-item-has-warning .ant-input-affix-wrapper-focused,.ant-form-item-has-warning .ant-input-affix-wrapper:focus,.ant-form-item-has-warning .ant-input-focused,.ant-form-item-has-warning .ant-input:focus {
    border-color: #ffc53d;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(250,173,20,.2)
}

.ant-form-item-has-warning .ant-input-affix-wrapper:not([disabled]):hover,.ant-form-item-has-warning .ant-input:not([disabled]):hover {
    border-color: #faad14
}

.ant-form-item-has-warning .ant-input-affix-wrapper input:focus {
    box-shadow: none!important
}

.ant-form-item-has-warning .ant-calendar-picker-open .ant-calendar-picker-input {
    border-color: #ffc53d;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(250,173,20,.2)
}

.ant-form-item-has-warning .ant-input-prefix {
    color: #faad14
}

.ant-form-item-has-warning .ant-input-group-addon {
    color: #faad14;
    background-color: #fff;
    border-color: #faad14
}

.ant-form-item-has-warning .has-feedback {
    color: #faad14
}

.ant-form-item-has-warning.ant-form-item-has-feedback .ant-form-item-children-icon {
    color: #faad14;
    -webkit-animation-name: diffZoomIn3!important;
    animation-name: diffZoomIn3!important
}

.ant-form-item-has-warning .ant-select:not(.ant-select-borderless) .ant-select-selector {
    border-color: #faad14!important
}

.ant-form-item-has-warning .ant-select:not(.ant-select-borderless).ant-select-focused .ant-select-selector,.ant-form-item-has-warning .ant-select:not(.ant-select-borderless).ant-select-open .ant-select-selector {
    border-color: #ffc53d;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(250,173,20,.2)
}

.ant-form-item-has-warning .ant-input-number,.ant-form-item-has-warning .ant-picker {
    border-color: #faad14
}

.ant-form-item-has-warning .ant-input-number-focused,.ant-form-item-has-warning .ant-input-number:focus,.ant-form-item-has-warning .ant-picker-focused,.ant-form-item-has-warning .ant-picker:focus {
    border-color: #ffc53d;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(250,173,20,.2)
}

.ant-form-item-has-warning .ant-input-number:not([disabled]):hover,.ant-form-item-has-warning .ant-picker:not([disabled]):hover {
    border-color: #faad14
}

.ant-form-item-has-warning .ant-cascader-picker:focus .ant-cascader-input {
    border-color: #ffc53d;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(250,173,20,.2)
}

.ant-form-item-has-error .ant-form-item-explain,.ant-form-item-has-error .ant-form-item-split {
    color: #ff4d4f
}

.ant-form-item-has-error .ant-input,.ant-form-item-has-error .ant-input-affix-wrapper,.ant-form-item-has-error .ant-input-affix-wrapper:hover,.ant-form-item-has-error .ant-input:hover {
    background-color: #fff;
    border-color: #ff4d4f
}

.ant-form-item-has-error .ant-input-affix-wrapper-focused,.ant-form-item-has-error .ant-input-affix-wrapper:focus,.ant-form-item-has-error .ant-input-focused,.ant-form-item-has-error .ant-input:focus {
    border-color: #ff7875;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(255,77,79,.2)
}

.ant-form-item-has-error .ant-input-affix-wrapper:not([disabled]):hover,.ant-form-item-has-error .ant-input:not([disabled]):hover {
    border-color: #ff4d4f
}

.ant-form-item-has-error .ant-input-affix-wrapper input:focus {
    box-shadow: none!important
}

.ant-form-item-has-error .ant-calendar-picker-open .ant-calendar-picker-input {
    border-color: #ff7875;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(255,77,79,.2)
}

.ant-form-item-has-error .ant-input-prefix {
    color: #ff4d4f
}

.ant-form-item-has-error .ant-input-group-addon {
    color: #ff4d4f;
    background-color: #fff;
    border-color: #ff4d4f
}

.ant-form-item-has-error .has-feedback {
    color: #ff4d4f
}

.ant-form-item-has-error.ant-form-item-has-feedback .ant-form-item-children-icon {
    color: #ff4d4f;
    -webkit-animation-name: diffZoomIn2!important;
    animation-name: diffZoomIn2!important
}

.ant-form-item-has-error .ant-select:not(.ant-select-borderless) .ant-select-selector {
    border-color: #ff4d4f!important
}

.ant-form-item-has-error .ant-select:not(.ant-select-borderless).ant-select-focused .ant-select-selector,.ant-form-item-has-error .ant-select:not(.ant-select-borderless).ant-select-open .ant-select-selector {
    border-color: #ff7875;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(255,77,79,.2)
}

.ant-form-item-has-error .ant-input-group-addon .ant-select.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    border: 0
}

.ant-form-item-has-error .ant-input-number,.ant-form-item-has-error .ant-picker,.ant-form-item-has-error .ant-select.ant-select-auto-complete .ant-input:focus {
    border-color: #ff4d4f
}

.ant-form-item-has-error .ant-input-number-focused,.ant-form-item-has-error .ant-input-number:focus,.ant-form-item-has-error .ant-picker-focused,.ant-form-item-has-error .ant-picker:focus {
    border-color: #ff7875;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(255,77,79,.2)
}

.ant-form-item-has-error .ant-input-number:not([disabled]):hover,.ant-form-item-has-error .ant-mention-wrapper .ant-mention-editor,.ant-form-item-has-error .ant-mention-wrapper .ant-mention-editor:not([disabled]):hover,.ant-form-item-has-error .ant-picker:not([disabled]):hover {
    border-color: #ff4d4f
}

.ant-form-item-has-error .ant-cascader-picker:focus .ant-cascader-input,.ant-form-item-has-error .ant-mention-wrapper.ant-mention-active:not([disabled]) .ant-mention-editor,.ant-form-item-has-error .ant-mention-wrapper .ant-mention-editor:not([disabled]):focus {
    border-color: #ff7875;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(255,77,79,.2)
}

.ant-form-item-has-error .ant-transfer-list {
    border-color: #ff4d4f
}

.ant-form-item-has-error .ant-transfer-list-search:not([disabled]) {
    border-color: #d9d9d9
}

.ant-form-item-has-error .ant-transfer-list-search:not([disabled]):hover {
    border-color: #40a9ff;
    border-right-width: 1px!important
}

.ant-form-item-has-error .ant-transfer-list-search:not([disabled]):focus {
    border-color: #40a9ff;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24,144,255,.2)
}

.ant-form-item-has-error-leave .ant-form-item-explain {
    color: #ff4d4f
}

.ant-form-item-is-validating.ant-form-item-has-feedback .ant-form-item-children-icon {
    display: inline-block;
    color: #1890ff
}

.ant-form {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum'
}

.ant-form legend {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    padding: 0;
    color: rgba(0,0,0,.45);
    font-size: 16px;
    line-height: inherit;
    border: 0;
    border-bottom: 1px solid #d9d9d9
}

.ant-form label {
    font-size: 14px
}

.ant-form input[type=search] {
    box-sizing: border-box
}

.ant-form input[type=checkbox],.ant-form input[type=radio] {
    line-height: normal
}

.ant-form input[type=file] {
    display: block
}

.ant-form input[type=range] {
    display: block;
    width: 100%
}

.ant-form select[multiple],.ant-form select[size] {
    height: auto
}

.ant-form input[type=checkbox]:focus,.ant-form input[type=file]:focus,.ant-form input[type=radio]:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px
}

.ant-form output {
    display: block;
    padding-top: 15px;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    line-height: 1.5715
}

.ant-form .ant-form-text {
    display: inline-block;
    padding-right: 8px
}

.ant-form-small .ant-form-item-label>label {
    height: 24px
}

.ant-form-small .ant-form-item-control-input {
    min-height: 24px
}

.ant-form-large .ant-form-item-label>label {
    height: 40px
}

.ant-form-large .ant-form-item-control-input {
    min-height: 40px
}

.ant-form-item {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    margin-bottom: 24px;
    vertical-align: top
}

.ant-form-item-with-help {
    margin-bottom: 0
}

.ant-form-item-label {
    display: inline-block;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    -webkit-flex-grow: 0;
    flex-grow: 0;
    overflow: hidden;
    white-space: nowrap;
    text-align: right;
    vertical-align: middle
}

.ant-form-item-label-left {
    text-align: left
}

.ant-form-item-label>label {
    position: relative;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: -webkit-inline-flex;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 32px;
    color: rgba(0,0,0,.85);
    font-size: 14px
}

.ant-form-item-label>label>.anticon {
    font-size: 14px;
    vertical-align: top
}

.ant-form-item-label>label.ant-form-item-required:before {
    display: inline-block;
    margin-right: 4px;
    color: #ff4d4f;
    font-size: 14px;
    font-family: SimSun,sans-serif;
    line-height: 1;
    content: '*'
}

.ant-form-hide-required-mark .ant-form-item-label>label.ant-form-item-required:before {
    display: none
}

.ant-form-item-label>label:after {
    content: ':';
    position: relative;
    top: -.5px;
    margin: 0 8px 0 2px
}

.ant-form-item-label>label.ant-form-item-no-colon:after {
    content: ' '
}

.ant-form-item-control {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    -webkit-flex-grow: 1;
    flex-grow: 1
}

.ant-form-item-control:first-child:not([class^=ant-col-]):not([class*=' ant-col-']) {
    width: 100%
}

.ant-form-item-control-input {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    min-height: 32px
}

.ant-form-item-control-input-content {
    -webkit-box-flex: 1;
    -ms-flex: auto;
    -webkit-flex: auto;
    flex: auto;
    max-width: 100%
}

.ant-form-item-explain,.ant-form-item-extra {
    clear: both;
    min-height: 24px;
    padding-top: 0;
    color: rgba(0,0,0,.45);
    font-size: 14px;
    line-height: 1.5715;
    -webkit-transition: color .3s cubic-bezier(.215,.61,.355,1);
    transition: color .3s cubic-bezier(.215,.61,.355,1)
}

.show-help-appear,.show-help-enter,.show-help-leave {
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.show-help-appear.show-help-appear-active,.show-help-enter.show-help-enter-active {
    -webkit-animation-name: antShowHelpIn;
    animation-name: antShowHelpIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.show-help-leave.show-help-leave-active {
    -webkit-animation-name: antShowHelpOut;
    animation-name: antShowHelpOut;
    -webkit-animation-play-state: running;
    animation-play-state: running;
    pointer-events: none
}

.show-help-appear,.show-help-enter {
    opacity: 0
}

.show-help-appear,.show-help-enter,.show-help-leave {
    -webkit-animation-timing-function: cubic-bezier(.645,.045,.355,1);
    animation-timing-function: cubic-bezier(.645,.045,.355,1)
}

@-webkit-keyframes antShowHelpIn {
    0% {
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
        opacity: 0
    }

    to {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }
}

@keyframes antShowHelpIn {
    0% {
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
        opacity: 0
    }

    to {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }
}

@-webkit-keyframes antShowHelpOut {
    to {
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
        opacity: 0
    }
}

@keyframes antShowHelpOut {
    to {
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
        opacity: 0
    }
}

@-webkit-keyframes diffZoomIn1 {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0)
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

@keyframes diffZoomIn1 {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0)
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

@-webkit-keyframes diffZoomIn2 {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0)
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

@keyframes diffZoomIn2 {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0)
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

@-webkit-keyframes diffZoomIn3 {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0)
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

@keyframes diffZoomIn3 {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0)
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

.ant-form-rtl {
    direction: rtl
}

.ant-form-rtl .ant-form-item-label {
    text-align: left
}

.ant-form-rtl .ant-form-item-label>label.ant-form-item-required:before {
    margin-right: 0;
    margin-left: 4px
}

.ant-form-rtl .ant-form-item-label>label:after {
    margin: 0 2px 0 8px
}

.ant-col-rtl .ant-form-item-control:first-child {
    width: 100%
}

.ant-form-rtl .ant-form-item-has-feedback .ant-input {
    padding-right: 11px;
    padding-left: 24px
}

.ant-form-rtl .ant-form-item-has-feedback .ant-input-affix-wrapper .ant-input-suffix {
    padding-right: 11px;
    padding-left: 18px
}

.ant-form-rtl .ant-form-item-has-feedback .ant-input-affix-wrapper .ant-input {
    padding: 0
}

.ant-form-rtl .ant-form-item-has-feedback .ant-input-search:not(.ant-input-search-enter-button) .ant-input-suffix {
    right: auto;
    left: 28px
}

.ant-form-rtl .ant-form-item-has-feedback .ant-input-number {
    padding-left: 18px
}

.ant-form-rtl .ant-form-item-has-feedback :not(.ant-input-group-addon)>.ant-select .ant-select-arrow,.ant-form-rtl .ant-form-item-has-feedback :not(.ant-input-group-addon)>.ant-select .ant-select-selection__clear,.ant-form-rtl .ant-form-item-has-feedback>.ant-select .ant-select-arrow,.ant-form-rtl .ant-form-item-has-feedback>.ant-select .ant-select-selection__clear {
    right: auto;
    left: 28px
}

.ant-form-rtl .ant-form-item-has-feedback :not(.ant-input-group-addon)>.ant-select .ant-select-selection-selected-value,.ant-form-rtl .ant-form-item-has-feedback>.ant-select .ant-select-selection-selected-value {
    padding-right: 0;
    padding-left: 42px
}

.ant-form-rtl .ant-form-item-has-feedback .ant-cascader-picker-arrow {
    margin-right: 0;
    margin-left: 17px
}

.ant-form-rtl .ant-form-item-has-feedback .ant-cascader-picker-clear {
    right: auto;
    left: 28px
}

.ant-form-rtl .ant-form-item-has-feedback .ant-picker,.ant-form-rtl .ant-form-item-has-feedback .ant-picker-large {
    padding-right: 11px;
    padding-left: 29.2px
}

.ant-form-rtl .ant-form-item-has-feedback .ant-picker-small {
    padding-right: 7px;
    padding-left: 25.2px
}

.ant-form-rtl .ant-form-item-has-feedback.ant-form-item-has-error .ant-form-item-children-icon,.ant-form-rtl .ant-form-item-has-feedback.ant-form-item-has-success .ant-form-item-children-icon,.ant-form-rtl .ant-form-item-has-feedback.ant-form-item-has-warning .ant-form-item-children-icon,.ant-form-rtl .ant-form-item-has-feedback.ant-form-item-is-validating .ant-form-item-children-icon {
    right: auto;
    left: 0
}

.ant-form-rtl.ant-form-inline .ant-form-item {
    margin-right: 0;
    margin-left: 16px
}

.ant-input-number {
    box-sizing: border-box;
    font-variant: tabular-nums;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    -webkit-transition: all .3s;
    transition: all .3s;
    display: inline-block;
    width: 90px;
    margin: 0;
    padding: 0;
    border: 1px solid #d9d9d9;
    border-radius: 2px
}

.ant-input-number::-moz-placeholder {
    opacity: 1
}

.ant-input-number::-ms-input-placeholder {
    color: #bfbfbf
}

.ant-input-number::-webkit-input-placeholder {
    color: #bfbfbf
}

.ant-input-number::-moz-placeholder {
    color: #bfbfbf
}

.ant-input-number:-ms-input-placeholder {
    color: #bfbfbf
}

.ant-input-number::placeholder {
    color: #bfbfbf
}

.ant-input-number:placeholder-shown {
    text-overflow: ellipsis
}

.ant-input-number-focused,.ant-input-number:focus {
    border-color: #40a9ff;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24,144,255,.2)
}

.ant-input-number[disabled] {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1
}

.ant-input-number[disabled]:hover {
    border-color: #d9d9d9;
    border-right-width: 1px!important
}

textarea.ant-input-number {
    max-width: 100%;
    height: auto;
    min-height: 32px;
    line-height: 1.5715;
    vertical-align: bottom;
    -webkit-transition: all .3s,height 0s;
    transition: all .3s,height 0s
}

.ant-input-number-lg {
    padding: 6.5px 11px;
    font-size: 16px
}

.ant-input-number-sm {
    padding: 0 7px
}

.ant-input-number-handler {
    position: relative;
    display: block;
    width: 100%;
    height: 50%;
    overflow: hidden;
    color: rgba(0,0,0,.45);
    font-weight: 700;
    line-height: 0;
    text-align: center;
    -webkit-transition: all .1s linear;
    transition: all .1s linear
}

.ant-input-number-handler:active {
    background: #f4f4f4
}

.ant-input-number-handler:hover .ant-input-number-handler-down-inner,.ant-input-number-handler:hover .ant-input-number-handler-up-inner {
    color: #40a9ff
}

.ant-input-number-handler-down-inner,.ant-input-number-handler-up-inner {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    right: 4px;
    width: 12px;
    height: 12px;
    color: rgba(0,0,0,.45);
    line-height: 12px;
    -webkit-transition: all .1s linear;
    transition: all .1s linear;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.ant-input-number-handler-down-inner>*,.ant-input-number-handler-up-inner>* {
    line-height: 1
}

.ant-input-number-handler-down-inner svg,.ant-input-number-handler-up-inner svg {
    display: inline-block
}

.ant-input-number-handler-down-inner:before,.ant-input-number-handler-up-inner:before {
    display: none
}

.ant-input-number-handler-down-inner .ant-input-number-handler-down-inner-icon,.ant-input-number-handler-down-inner .ant-input-number-handler-up-inner-icon,.ant-input-number-handler-up-inner .ant-input-number-handler-down-inner-icon,.ant-input-number-handler-up-inner .ant-input-number-handler-up-inner-icon {
    display: block
}

.ant-input-number:hover {
    border-color: #40a9ff;
    border-right-width: 1px!important
}

.ant-input-number:hover+.ant-form-item-children-icon {
    opacity: 0;
    -webkit-transition: opacity .24s linear .24s;
    transition: opacity .24s linear .24s
}

.ant-input-number-focused {
    border-color: #40a9ff;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24,144,255,.2)
}

.ant-input-number-disabled {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1
}

.ant-input-number-disabled:hover {
    border-color: #d9d9d9;
    border-right-width: 1px!important
}

.ant-input-number-disabled .ant-input-number-input {
    cursor: not-allowed
}

.ant-input-number-disabled .ant-input-number-handler-wrap {
    display: none
}

.ant-input-number-input {
    width: 100%;
    height: 30px;
    padding: 0 11px;
    text-align: left;
    background-color: transparent;
    border: 0;
    border-radius: 2px;
    outline: 0;
    -webkit-transition: all .3s linear;
    transition: all .3s linear;
    -moz-appearance: textfield!important
}

.ant-input-number-input::-moz-placeholder {
    opacity: 1
}

.ant-input-number-input::-ms-input-placeholder {
    color: #bfbfbf
}

.ant-input-number-input::-webkit-input-placeholder {
    color: #bfbfbf
}

.ant-input-number-input::-moz-placeholder {
    color: #bfbfbf
}

.ant-input-number-input:-ms-input-placeholder {
    color: #bfbfbf
}

.ant-input-number-input::placeholder {
    color: #bfbfbf
}

.ant-input-number-input:placeholder-shown {
    text-overflow: ellipsis
}

.ant-input-number-input[type=number]::-webkit-inner-spin-button,.ant-input-number-input[type=number]::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none
}

.ant-input-number-lg {
    padding: 0;
    font-size: 16px
}

.ant-input-number-lg input {
    height: 38px
}

.ant-input-number-sm {
    padding: 0
}

.ant-input-number-sm input {
    height: 22px;
    padding: 0 7px
}

.ant-input-number-handler-wrap {
    position: absolute;
    top: 0;
    right: 0;
    width: 22px;
    height: 100%;
    background: #fff;
    border-left: 1px solid #d9d9d9;
    border-radius: 0 2px 2px 0;
    opacity: 0;
    -webkit-transition: opacity .24s linear .1s;
    transition: opacity .24s linear .1s
}

.ant-input-number-handler-wrap .ant-input-number-handler .ant-input-number-handler-down-inner,.ant-input-number-handler-wrap .ant-input-number-handler .ant-input-number-handler-up-inner {
    display: inline-block;
    font-size: 7px;
    min-width: auto;
    margin-right: 0
}

.ant-input-number-handler-wrap:hover .ant-input-number-handler {
    height: 40%
}

.ant-input-number:hover .ant-input-number-handler-wrap {
    opacity: 1
}

.ant-input-number-handler-up {
    border-top-right-radius: 2px;
    cursor: pointer
}

.ant-input-number-handler-up-inner {
    top: 50%;
    margin-top: -5px;
    text-align: center
}

.ant-input-number-handler-up:hover {
    height: 60%!important
}

.ant-input-number-handler-down {
    top: 0;
    border-top: 1px solid #d9d9d9;
    border-bottom-right-radius: 2px;
    cursor: pointer
}

.ant-input-number-handler-down-inner {
    top: 50%;
    margin-top: -6px;
    text-align: center
}

.ant-input-number-handler-down:hover {
    height: 60%!important
}

.ant-input-number-handler-down-disabled,.ant-input-number-handler-up-disabled {
    cursor: not-allowed
}

.ant-input-number-handler-down-disabled:hover .ant-input-number-handler-down-inner,.ant-input-number-handler-up-disabled:hover .ant-input-number-handler-up-inner {
    color: rgba(0,0,0,.25)
}

.ant-input-number-rtl {
    direction: rtl
}

.ant-input-number-rtl .ant-input-number-handler-wrap {
    right: auto;
    left: 0;
    border-right: 1px solid #d9d9d9;
    border-left: 0;
    border-radius: 2px 0 0 2px
}

.ant-input-number-rtl .ant-input-number-input {
    direction: rtl;
    text-align: right
}

.ant-layout {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: auto;
    -webkit-flex: auto;
    flex: auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
    min-height: 0;
    background: #f0f2f5
}

.ant-layout,.ant-layout * {
    box-sizing: border-box
}

.ant-layout.ant-layout-has-sider {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    flex-direction: row
}

.ant-layout.ant-layout-has-sider>.ant-layout,.ant-layout.ant-layout-has-sider>.ant-layout-content {
    overflow-x: hidden
}

.ant-layout-footer,.ant-layout-header {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto
}

.ant-layout-header {
    height: 64px;
    padding: 0 50px;
    color: rgba(0,0,0,.65);
    line-height: 64px;
    background: #001529
}

.ant-layout-footer {
    padding: 24px 50px;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    background: #f0f2f5
}

.ant-layout-content {
    -webkit-box-flex: 1;
    -ms-flex: auto;
    -webkit-flex: auto;
    flex: auto;
    min-height: 0
}

.ant-layout-sider {
    position: relative;
    min-width: 0;
    background: #001529;
    -webkit-transition: all .2s;
    transition: all .2s
}

.ant-layout-sider-children {
    height: 100%;
    margin-top: -.1px;
    padding-top: .1px
}

.ant-layout-sider-has-trigger {
    padding-bottom: 48px
}

.ant-layout-sider-right {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    -webkit-order: 1;
    order: 1
}

.ant-layout-sider-trigger {
    position: fixed;
    bottom: 0;
    z-index: 1;
    height: 48px;
    color: #fff;
    line-height: 48px;
    text-align: center;
    background: #002140;
    cursor: pointer;
    -webkit-transition: all .2s;
    transition: all .2s
}

.ant-layout-sider-zero-width>* {
    overflow: hidden
}

.ant-layout-sider-zero-width-trigger {
    position: absolute;
    top: 64px;
    right: -36px;
    z-index: 1;
    width: 36px;
    height: 42px;
    color: #fff;
    font-size: 18px;
    line-height: 42px;
    text-align: center;
    background: #001529;
    border-radius: 0 2px 2px 0;
    cursor: pointer;
    -webkit-transition: background .3s ease;
    transition: background .3s ease
}

.ant-layout-sider-zero-width-trigger:hover {
    background: #192c3e
}

.ant-layout-sider-zero-width-trigger-right {
    left: -36px;
    border-radius: 2px 0 0 2px
}

.ant-layout-sider-light {
    background: #fff
}

.ant-layout-sider-light .ant-layout-sider-trigger,.ant-layout-sider-light .ant-layout-sider-zero-width-trigger {
    color: rgba(0,0,0,.65);
    background: #fff
}

.ant-list {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative
}

.ant-list * {
    outline: none
}

.ant-list-pagination {
    margin-top: 24px;
    text-align: right
}

.ant-list-pagination .ant-pagination-options {
    text-align: left
}

.ant-list-more {
    margin-top: 12px;
    text-align: center
}

.ant-list-more button {
    padding-right: 32px;
    padding-left: 32px
}

.ant-list-spin {
    min-height: 40px;
    text-align: center
}

.ant-list-empty-text {
    padding: 16px;
    color: rgba(0,0,0,.25);
    font-size: 14px;
    text-align: center
}

.ant-list-items {
    margin: 0;
    padding: 0;
    list-style: none
}

.ant-list-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    padding: 12px 0
}

.ant-list-item-content {
    color: rgba(0,0,0,.65)
}

.ant-list-item-meta {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -webkit-box-align: start;
    -ms-flex-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    font-size: 0
}

.ant-list-item-meta-avatar {
    margin-right: 16px
}

.ant-list-item-meta-content {
    -webkit-box-flex: 1;
    -ms-flex: 1 0;
    -webkit-flex: 1 0;
    flex: 1 0
}

.ant-list-item-meta-title {
    margin-bottom: 4px;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    line-height: 1.5715
}

.ant-list-item-meta-title>a {
    color: rgba(0,0,0,.65);
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-list-item-meta-title>a:hover {
    color: #1890ff
}

.ant-list-item-meta-description {
    color: rgba(0,0,0,.45);
    font-size: 14px;
    line-height: 1.5715
}

.ant-list-item-action {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    margin-left: 48px;
    padding: 0;
    font-size: 0;
    list-style: none
}

.ant-list-item-action>li {
    position: relative;
    display: inline-block;
    padding: 0 8px;
    color: rgba(0,0,0,.45);
    font-size: 14px;
    line-height: 1.5715;
    text-align: center;
    cursor: pointer
}

.ant-list-item-action>li:first-child {
    padding-left: 0
}

.ant-list-item-action-split {
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: 14px;
    margin-top: -7px;
    background-color: #f0f0f0
}

.ant-list-footer,.ant-list-header {
    background: transparent
}

.ant-list-footer,.ant-list-header {
    padding-top: 12px;
    padding-bottom: 12px
}

.ant-list-empty {
    padding: 16px 0;
    color: rgba(0,0,0,.45);
    font-size: 12px;
    text-align: center
}

.ant-list-split .ant-list-item {
    border-bottom: 1px solid #f0f0f0
}

.ant-list-split .ant-list-item:last-child {
    border-bottom: none
}

.ant-list-split .ant-list-header {
    border-bottom: 1px solid #f0f0f0
}

.ant-list-split.ant-list-empty .ant-list-footer {
    border-top: 1px solid #f0f0f0
}

.ant-list-loading .ant-list-spin-nested-loading {
    min-height: 32px
}

.ant-list-split.ant-list-something-after-last-item .ant-spin-container>.ant-list-items>.ant-list-item:last-child {
    border-bottom: 1px solid #f0f0f0
}

.ant-list-lg .ant-list-item {
    padding: 16px 24px
}

.ant-list-sm .ant-list-item {
    padding: 8px 16px
}

.ant-list-vertical .ant-list-item {
    -webkit-box-align: initial;
    -ms-flex-align: initial;
    -webkit-align-items: initial;
    align-items: initial
}

.ant-list-vertical .ant-list-item-main {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    -webkit-flex: 1;
    flex: 1
}

.ant-list-vertical .ant-list-item-extra {
    margin-left: 40px
}

.ant-list-vertical .ant-list-item-meta {
    margin-bottom: 16px
}

.ant-list-vertical .ant-list-item-meta-title {
    margin-bottom: 12px;
    color: rgba(0,0,0,.85);
    font-size: 16px;
    line-height: 24px
}

.ant-list-vertical .ant-list-item-action {
    margin-top: 16px;
    margin-left: auto
}

.ant-list-vertical .ant-list-item-action>li {
    padding: 0 16px
}

.ant-list-vertical .ant-list-item-action>li:first-child {
    padding-left: 0
}

.ant-list-grid .ant-col>.ant-list-item {
    display: block;
    max-width: 100%;
    margin-bottom: 16px;
    padding-top: 0;
    padding-bottom: 0;
    border-bottom: none
}

.ant-list-item-no-flex {
    display: block
}

.ant-list:not(.ant-list-vertical) .ant-list-item-no-flex .ant-list-item-action {
    float: right
}

.ant-list-bordered {
    border: 1px solid #d9d9d9;
    border-radius: 2px
}

.ant-list-bordered .ant-list-footer,.ant-list-bordered .ant-list-header,.ant-list-bordered .ant-list-item {
    padding-right: 24px;
    padding-left: 24px
}

.ant-list-bordered .ant-list-pagination {
    margin: 16px 24px
}

.ant-list-bordered.ant-list-sm .ant-list-footer,.ant-list-bordered.ant-list-sm .ant-list-header,.ant-list-bordered.ant-list-sm .ant-list-item {
    padding: 8px 16px
}

.ant-list-bordered.ant-list-lg .ant-list-footer,.ant-list-bordered.ant-list-lg .ant-list-header,.ant-list-bordered.ant-list-lg .ant-list-item {
    padding: 16px 24px
}

@media screen and (max-width: 768px) {
    .ant-list-item-action,.ant-list-vertical .ant-list-item-extra {
        margin-left:24px
    }
}

@media screen and (max-width: 576px) {
    .ant-list-item {
        -ms-flex-wrap:wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap
    }

    .ant-list-item-action {
        margin-left: 12px
    }

    .ant-list-vertical .ant-list-item {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse
    }

    .ant-list-vertical .ant-list-item-main {
        min-width: 220px
    }

    .ant-list-vertical .ant-list-item-extra {
        margin: auto auto 16px
    }
}

.ant-list-rtl {
    direction: rtl;
    text-align: right
}

.ant-list-rtl .ReactVirtualized__List .ant-list-item {
    direction: rtl
}

.ant-list-rtl .ant-list-pagination {
    text-align: left
}

.ant-list-rtl .ant-list-item-meta-avatar {
    margin-right: 0;
    margin-left: 16px
}

.ant-list-rtl .ant-list-item-action {
    margin-right: 48px;
    margin-left: 0
}

.ant-list-rtl .ant-list-item-action>li:first-child {
    padding-right: 0;
    padding-left: 8px
}

.ant-list-rtl .ant-list-item-action-split {
    right: auto;
    left: 0
}

.ant-list-rtl.ant-list-vertical .ant-list-item-extra {
    margin-right: 40px;
    margin-left: 0
}

.ant-list-rtl.ant-list-vertical .ant-list-item-action {
    margin-right: auto
}

.ant-list-rtl .ant-list-vertical .ant-list-item-action>li:first-child {
    padding-right: 0;
    padding-left: 16px
}

.ant-list-rtl .ant-list:not(.ant-list-vertical) .ant-list-item-no-flex .ant-list-item-action {
    float: left
}

@media screen and (max-width: 768px) {
    .ant-list-rtl .ant-list-item-action,.ant-list-rtl .ant-list-vertical .ant-list-item-extra {
        margin-right:24px;
        margin-left: 0
    }
}

@media screen and (max-width: 576px) {
    .ant-list-rtl .ant-list-item-action {
        margin-right:22px;
        margin-left: 0
    }

    .ant-list-rtl.ant-list-vertical .ant-list-item-extra {
        margin: auto auto 16px
    }
}

.ant-spin {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: absolute;
    display: none;
    color: #1890ff;
    text-align: center;
    vertical-align: middle;
    opacity: 0;
    -webkit-transition: -webkit-transform .3s cubic-bezier(.78,.14,.15,.86);
    transition: -webkit-transform .3s cubic-bezier(.78,.14,.15,.86);
    transition: transform .3s cubic-bezier(.78,.14,.15,.86);
    transition: transform .3s cubic-bezier(.78,.14,.15,.86),-webkit-transform .3s cubic-bezier(.78,.14,.15,.86)
}

.ant-spin-spinning {
    position: static;
    display: inline-block;
    opacity: 1
}

.ant-spin-nested-loading {
    position: relative
}

.ant-spin-nested-loading>div>.ant-spin {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
    display: block;
    width: 100%;
    height: 100%;
    max-height: 400px
}

.ant-spin-nested-loading>div>.ant-spin .ant-spin-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -10px
}

.ant-spin-nested-loading>div>.ant-spin .ant-spin-text {
    position: absolute;
    top: 50%;
    width: 100%;
    padding-top: 5px;
    text-shadow: 0 1px 2px #fff
}

.ant-spin-nested-loading>div>.ant-spin.ant-spin-show-text .ant-spin-dot {
    margin-top: -20px
}

.ant-spin-nested-loading>div>.ant-spin-sm .ant-spin-dot {
    margin: -7px
}

.ant-spin-nested-loading>div>.ant-spin-sm .ant-spin-text {
    padding-top: 2px
}

.ant-spin-nested-loading>div>.ant-spin-sm.ant-spin-show-text .ant-spin-dot {
    margin-top: -17px
}

.ant-spin-nested-loading>div>.ant-spin-lg .ant-spin-dot {
    margin: -16px
}

.ant-spin-nested-loading>div>.ant-spin-lg .ant-spin-text {
    padding-top: 11px
}

.ant-spin-nested-loading>div>.ant-spin-lg.ant-spin-show-text .ant-spin-dot {
    margin-top: -26px
}

.ant-spin-container {
    position: relative;
    -webkit-transition: opacity .3s;
    transition: opacity .3s
}

.ant-spin-container:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: none\9;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0;
    -webkit-transition: all .3s;
    transition: all .3s;
    content: '';
    pointer-events: none
}

.ant-spin-blur {
    clear: both;
    overflow: hidden;
    opacity: .5;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none
}

.ant-spin-blur:after {
    opacity: .4;
    pointer-events: auto
}

.ant-spin-tip {
    color: rgba(0,0,0,.45)
}

.ant-spin-dot {
    position: relative;
    display: inline-block;
    font-size: 20px;
    width: 1em;
    height: 1em
}

.ant-spin-dot-item {
    position: absolute;
    display: block;
    width: 9px;
    height: 9px;
    background-color: #1890ff;
    border-radius: 100%;
    -webkit-transform: scale(.75);
    -ms-transform: scale(.75);
    transform: scale(.75);
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    opacity: .3;
    -webkit-animation: antSpinMove 1s infinite linear alternate;
    animation: antSpinMove 1s infinite linear alternate
}

.ant-spin-dot-item:nth-child(1) {
    top: 0;
    left: 0
}

.ant-spin-dot-item:nth-child(2) {
    top: 0;
    right: 0;
    -webkit-animation-delay: .4s;
    animation-delay: .4s
}

.ant-spin-dot-item:nth-child(3) {
    right: 0;
    bottom: 0;
    -webkit-animation-delay: .8s;
    animation-delay: .8s
}

.ant-spin-dot-item:nth-child(4) {
    bottom: 0;
    left: 0;
    -webkit-animation-delay: 1.2s;
    animation-delay: 1.2s
}

.ant-spin-dot-spin {
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-animation: antRotate 1.2s infinite linear;
    animation: antRotate 1.2s infinite linear
}

.ant-spin-sm .ant-spin-dot {
    font-size: 14px
}

.ant-spin-sm .ant-spin-dot i {
    width: 6px;
    height: 6px
}

.ant-spin-lg .ant-spin-dot {
    font-size: 32px
}

.ant-spin-lg .ant-spin-dot i {
    width: 14px;
    height: 14px
}

.ant-spin.ant-spin-show-text .ant-spin-text {
    display: block
}

@media (-ms-high-contrast:active),all and (-ms-high-contrast:none) {
    .ant-spin-blur {
        background: #fff;
        opacity: .5
    }
}

@-webkit-keyframes antSpinMove {
    to {
        opacity: 1
    }
}

@keyframes antSpinMove {
    to {
        opacity: 1
    }
}

@-webkit-keyframes antRotate {
    to {
        -webkit-transform: rotate(405deg);
        transform: rotate(405deg)
    }
}

@keyframes antRotate {
    to {
        -webkit-transform: rotate(405deg);
        transform: rotate(405deg)
    }
}

.ant-spin-rtl {
    direction: rtl
}

.ant-spin-rtl .ant-spin-dot-spin {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation-name: antRotateRtl;
    animation-name: antRotateRtl
}

@-webkit-keyframes antRotateRtl {
    to {
        -webkit-transform: rotate(-405deg);
        transform: rotate(-405deg)
    }
}

@keyframes antRotateRtl {
    to {
        -webkit-transform: rotate(-405deg);
        transform: rotate(-405deg)
    }
}

.ant-pagination {
    box-sizing: border-box;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum'
}

.ant-pagination,.ant-pagination ol,.ant-pagination ul {
    margin: 0;
    padding: 0;
    list-style: none
}

.ant-pagination:after {
    display: block;
    clear: both;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    content: ' '
}

.ant-pagination-item,.ant-pagination-total-text {
    display: inline-block;
    height: 32px;
    margin-right: 8px;
    line-height: 30px;
    vertical-align: middle
}

.ant-pagination-item {
    min-width: 32px;
    font-family: Arial;
    text-align: center;
    list-style: none;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    outline: 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.ant-pagination-item a {
    display: block;
    padding: 0 6px;
    color: rgba(0,0,0,.65);
    -webkit-transition: none;
    transition: none
}

.ant-pagination-item a:hover {
    text-decoration: none
}

.ant-pagination-item:focus,.ant-pagination-item:hover {
    border-color: #1890ff;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-pagination-item:focus a,.ant-pagination-item:hover a {
    color: #1890ff
}

.ant-pagination-item-active {
    font-weight: 500;
    background: #fff;
    border-color: #1890ff
}

.ant-pagination-item-active a {
    color: #1890ff
}

.ant-pagination-item-active:focus,.ant-pagination-item-active:hover {
    border-color: #40a9ff
}

.ant-pagination-item-active:focus a,.ant-pagination-item-active:hover a {
    color: #40a9ff
}

.ant-pagination-jump-next,.ant-pagination-jump-prev {
    outline: 0
}

.ant-pagination-jump-next .ant-pagination-item-container,.ant-pagination-jump-prev .ant-pagination-item-container {
    position: relative
}

.ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-link-icon,.ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-link-icon {
    color: #1890ff;
    font-size: 12px;
    letter-spacing: -1px;
    opacity: 0;
    -webkit-transition: all .2s;
    transition: all .2s
}

.ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-link-icon-svg,.ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-link-icon-svg {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto
}

.ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-ellipsis,.ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-ellipsis {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    margin: auto;
    color: rgba(0,0,0,.25);
    letter-spacing: 2px;
    text-align: center;
    text-indent: .13em;
    opacity: 1;
    -webkit-transition: all .2s;
    transition: all .2s
}

.ant-pagination-jump-next:focus .ant-pagination-item-link-icon,.ant-pagination-jump-next:hover .ant-pagination-item-link-icon,.ant-pagination-jump-prev:focus .ant-pagination-item-link-icon,.ant-pagination-jump-prev:hover .ant-pagination-item-link-icon {
    opacity: 1
}

.ant-pagination-jump-next:focus .ant-pagination-item-ellipsis,.ant-pagination-jump-next:hover .ant-pagination-item-ellipsis,.ant-pagination-jump-prev:focus .ant-pagination-item-ellipsis,.ant-pagination-jump-prev:hover .ant-pagination-item-ellipsis {
    opacity: 0
}

.ant-pagination-jump-next,.ant-pagination-jump-prev,.ant-pagination-prev {
    margin-right: 8px
}

.ant-pagination-jump-next,.ant-pagination-jump-prev,.ant-pagination-next,.ant-pagination-prev {
    display: inline-block;
    min-width: 32px;
    height: 32px;
    color: rgba(0,0,0,.65);
    font-family: Arial;
    line-height: 32px;
    text-align: center;
    vertical-align: middle;
    list-style: none;
    border-radius: 2px;
    cursor: pointer;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-pagination-next,.ant-pagination-prev {
    outline: 0
}

.ant-pagination-next a,.ant-pagination-prev a {
    color: rgba(0,0,0,.65);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.ant-pagination-next:hover a,.ant-pagination-prev:hover a {
    border-color: #40a9ff
}

.ant-pagination-next .ant-pagination-item-link,.ant-pagination-prev .ant-pagination-item-link {
    display: block;
    height: 100%;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    outline: none;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-pagination-next:focus .ant-pagination-item-link,.ant-pagination-next:hover .ant-pagination-item-link,.ant-pagination-prev:focus .ant-pagination-item-link,.ant-pagination-prev:hover .ant-pagination-item-link {
    color: #1890ff;
    border-color: #1890ff
}

.ant-pagination-disabled,.ant-pagination-disabled:focus,.ant-pagination-disabled:hover {
    cursor: not-allowed
}

.ant-pagination-disabled .ant-pagination-item-link,.ant-pagination-disabled:focus .ant-pagination-item-link,.ant-pagination-disabled:focus a,.ant-pagination-disabled:hover .ant-pagination-item-link,.ant-pagination-disabled:hover a,.ant-pagination-disabled a {
    color: rgba(0,0,0,.25);
    border-color: #d9d9d9;
    cursor: not-allowed
}

.ant-pagination-slash {
    margin: 0 10px 0 5px
}

.ant-pagination-options {
    display: inline-block;
    margin-left: 16px;
    vertical-align: middle
}

@media all and (-ms-high-contrast:none) {
    .ant-pagination-options,.ant-pagination-options ::-ms-backdrop {
        vertical-align: top
    }
}

.ant-pagination-options-size-changer.ant-select {
    display: inline-block;
    width: auto;
    margin-right: 8px
}

.ant-pagination-options-quick-jumper {
    display: inline-block;
    height: 32px;
    line-height: 32px;
    vertical-align: top
}

.ant-pagination-options-quick-jumper input {
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    -webkit-transition: all .3s;
    transition: all .3s;
    width: 50px;
    margin: 0 8px
}

.ant-pagination-options-quick-jumper input::-moz-placeholder {
    opacity: 1
}

.ant-pagination-options-quick-jumper input::-ms-input-placeholder {
    color: #bfbfbf
}

.ant-pagination-options-quick-jumper input::-webkit-input-placeholder {
    color: #bfbfbf
}

.ant-pagination-options-quick-jumper input::-moz-placeholder {
    color: #bfbfbf
}

.ant-pagination-options-quick-jumper input:-ms-input-placeholder {
    color: #bfbfbf
}

.ant-pagination-options-quick-jumper input::placeholder {
    color: #bfbfbf
}

.ant-pagination-options-quick-jumper input:placeholder-shown {
    text-overflow: ellipsis
}

.ant-pagination-options-quick-jumper input:hover {
    border-color: #40a9ff;
    border-right-width: 1px!important
}

.ant-pagination-options-quick-jumper input-focused,.ant-pagination-options-quick-jumper input:focus {
    border-color: #40a9ff;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24,144,255,.2)
}

.ant-pagination-options-quick-jumper input-disabled {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1
}

.ant-pagination-options-quick-jumper input-disabled:hover {
    border-color: #d9d9d9;
    border-right-width: 1px!important
}

.ant-pagination-options-quick-jumper input[disabled] {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1
}

.ant-pagination-options-quick-jumper input[disabled]:hover {
    border-color: #d9d9d9;
    border-right-width: 1px!important
}

textarea.ant-pagination-options-quick-jumper input {
    max-width: 100%;
    height: auto;
    min-height: 32px;
    line-height: 1.5715;
    vertical-align: bottom;
    -webkit-transition: all .3s,height 0s;
    transition: all .3s,height 0s
}

.ant-pagination-options-quick-jumper input-lg {
    padding: 6.5px 11px;
    font-size: 16px
}

.ant-pagination-options-quick-jumper input-sm {
    padding: 0 7px
}

.ant-pagination-simple .ant-pagination-next,.ant-pagination-simple .ant-pagination-prev {
    height: 24px;
    line-height: 24px;
    vertical-align: top
}

.ant-pagination-simple .ant-pagination-next .ant-pagination-item-link,.ant-pagination-simple .ant-pagination-prev .ant-pagination-item-link {
    height: 24px;
    border: 0
}

.ant-pagination-simple .ant-pagination-next .ant-pagination-item-link:after,.ant-pagination-simple .ant-pagination-prev .ant-pagination-item-link:after {
    height: 24px;
    line-height: 24px
}

.ant-pagination-simple .ant-pagination-simple-pager {
    display: inline-block;
    height: 24px;
    margin-right: 8px
}

.ant-pagination-simple .ant-pagination-simple-pager input {
    box-sizing: border-box;
    height: 100%;
    margin-right: 8px;
    padding: 0 6px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    outline: none;
    -webkit-transition: border-color .3s;
    transition: border-color .3s
}

.ant-pagination-simple .ant-pagination-simple-pager input:hover {
    border-color: #1890ff
}

.ant-pagination.mini .ant-pagination-simple-pager,.ant-pagination.mini .ant-pagination-total-text {
    height: 24px;
    line-height: 24px
}

.ant-pagination.mini .ant-pagination-item {
    min-width: 24px;
    height: 24px;
    margin: 0;
    line-height: 22px
}

.ant-pagination.mini .ant-pagination-item:not(.ant-pagination-item-active) {
    background: transparent;
    border-color: transparent
}

.ant-pagination.mini .ant-pagination-next,.ant-pagination.mini .ant-pagination-prev {
    min-width: 24px;
    height: 24px;
    margin: 0;
    line-height: 24px
}

.ant-pagination.mini .ant-pagination-next .ant-pagination-item-link,.ant-pagination.mini .ant-pagination-prev .ant-pagination-item-link {
    background: transparent;
    border-color: transparent
}

.ant-pagination.mini .ant-pagination-next .ant-pagination-item-link:after,.ant-pagination.mini .ant-pagination-prev .ant-pagination-item-link:after {
    height: 24px;
    line-height: 24px
}

.ant-pagination.mini .ant-pagination-jump-next,.ant-pagination.mini .ant-pagination-jump-prev {
    height: 24px;
    margin-right: 0;
    line-height: 24px
}

.ant-pagination.mini .ant-pagination-options {
    margin-left: 2px
}

.ant-pagination.mini .ant-pagination-options-size-changer {
    top: 0
}

.ant-pagination.mini .ant-pagination-options-quick-jumper {
    height: 24px;
    line-height: 24px
}

.ant-pagination.mini .ant-pagination-options-quick-jumper input {
    padding: 0 7px;
    width: 44px
}

.ant-pagination.ant-pagination-disabled {
    cursor: not-allowed
}

.ant-pagination.ant-pagination-disabled .ant-pagination-item {
    background: #f5f5f5;
    border-color: #d9d9d9;
    cursor: not-allowed
}

.ant-pagination.ant-pagination-disabled .ant-pagination-item a {
    color: rgba(0,0,0,.25);
    background: transparent;
    border: none;
    cursor: not-allowed
}

.ant-pagination.ant-pagination-disabled .ant-pagination-item-active {
    background: #dbdbdb;
    border-color: transparent
}

.ant-pagination.ant-pagination-disabled .ant-pagination-item-active a {
    color: #fff
}

.ant-pagination.ant-pagination-disabled .ant-pagination-item-link,.ant-pagination.ant-pagination-disabled .ant-pagination-item-link:focus,.ant-pagination.ant-pagination-disabled .ant-pagination-item-link:hover {
    color: rgba(0,0,0,.45);
    background: #f5f5f5;
    border-color: #d9d9d9;
    cursor: not-allowed
}

.ant-pagination.ant-pagination-disabled .ant-pagination-jump-next:focus .ant-pagination-item-link-icon,.ant-pagination.ant-pagination-disabled .ant-pagination-jump-next:hover .ant-pagination-item-link-icon,.ant-pagination.ant-pagination-disabled .ant-pagination-jump-prev:focus .ant-pagination-item-link-icon,.ant-pagination.ant-pagination-disabled .ant-pagination-jump-prev:hover .ant-pagination-item-link-icon {
    opacity: 0
}

.ant-pagination.ant-pagination-disabled .ant-pagination-jump-next:focus .ant-pagination-item-ellipsis,.ant-pagination.ant-pagination-disabled .ant-pagination-jump-next:hover .ant-pagination-item-ellipsis,.ant-pagination.ant-pagination-disabled .ant-pagination-jump-prev:focus .ant-pagination-item-ellipsis,.ant-pagination.ant-pagination-disabled .ant-pagination-jump-prev:hover .ant-pagination-item-ellipsis {
    opacity: 1
}

@media only screen and (max-width: 992px) {
    .ant-pagination-item-after-jump-prev,.ant-pagination-item-before-jump-next {
        display:none
    }
}

@media only screen and (max-width: 576px) {
    .ant-pagination-options {
        display:none
    }
}

.ant-pagination-rtl {
    direction: rtl
}

.ant-pagination-rtl .ant-pagination-item,.ant-pagination-rtl .ant-pagination-jump-next,.ant-pagination-rtl .ant-pagination-jump-prev,.ant-pagination-rtl .ant-pagination-prev,.ant-pagination-rtl .ant-pagination-total-text {
    margin-right: 0;
    margin-left: 8px
}

.ant-pagination-rtl .ant-pagination-options {
    margin-right: 16px;
    margin-left: 0
}

.ant-pagination-rtl .ant-pagination-options-size-changer.ant-select,.ant-pagination-rtl.ant-pagination-simple .ant-pagination-simple-pager,.ant-pagination-rtl.ant-pagination-simple .ant-pagination-simple-pager input {
    margin-right: 0;
    margin-left: 8px
}

.ant-pagination-rtl.ant-pagination.mini .ant-pagination-options {
    margin-right: 2px;
    margin-left: 0
}

.ant-mentions {
    box-sizing: border-box;
    margin: 0;
    font-variant: tabular-nums;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    -webkit-transition: all .3s;
    transition: all .3s;
    position: relative;
    display: inline-block;
    height: auto;
    padding: 0;
    overflow: hidden;
    line-height: 1.5715;
    white-space: pre-wrap;
    vertical-align: bottom
}

.ant-mentions::-moz-placeholder {
    opacity: 1
}

.ant-mentions::-ms-input-placeholder {
    color: #bfbfbf
}

.ant-mentions::-webkit-input-placeholder {
    color: #bfbfbf
}

.ant-mentions::-moz-placeholder {
    color: #bfbfbf
}

.ant-mentions:-ms-input-placeholder {
    color: #bfbfbf
}

.ant-mentions::placeholder {
    color: #bfbfbf
}

.ant-mentions:placeholder-shown {
    text-overflow: ellipsis
}

.ant-mentions-focused,.ant-mentions:focus,.ant-mentions:hover {
    border-color: #40a9ff;
    border-right-width: 1px!important
}

.ant-mentions-focused,.ant-mentions:focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24,144,255,.2)
}

.ant-mentions-disabled {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1
}

.ant-mentions-disabled:hover {
    border-color: #d9d9d9;
    border-right-width: 1px!important
}

.ant-mentions[disabled] {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1
}

.ant-mentions[disabled]:hover {
    border-color: #d9d9d9;
    border-right-width: 1px!important
}

textarea.ant-mentions {
    max-width: 100%;
    height: auto;
    min-height: 32px;
    line-height: 1.5715;
    vertical-align: bottom;
    -webkit-transition: all .3s,height 0s;
    transition: all .3s,height 0s
}

.ant-mentions-lg {
    padding: 6.5px 11px;
    font-size: 16px
}

.ant-mentions-sm {
    padding: 0 7px
}

.ant-mentions-disabled>textarea {
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1
}

.ant-mentions-disabled>textarea:hover {
    border-color: #d9d9d9;
    border-right-width: 1px!important
}

.ant-mentions-focused {
    border-color: #40a9ff;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24,144,255,.2)
}

.ant-mentions-measure,.ant-mentions>textarea {
    min-height: 30px;
    margin: 0;
    padding: 4px 11px;
    overflow: inherit;
    overflow-x: hidden;
    overflow-y: auto;
    font-weight: inherit;
    font-size: inherit;
    font-family: inherit;
    font-style: inherit;
    font-variant: inherit;
    font-size-adjust: inherit;
    font-stretch: inherit;
    line-height: inherit;
    direction: inherit;
    letter-spacing: inherit;
    white-space: inherit;
    text-align: inherit;
    vertical-align: top;
    word-wrap: break-word;
    word-break: inherit;
    -moz-tab-size: inherit;
    -o-tab-size: inherit;
    tab-size: inherit
}

.ant-mentions>textarea {
    width: 100%;
    border: none;
    outline: none;
    resize: none
}

.ant-mentions>textarea::-moz-placeholder {
    opacity: 1
}

.ant-mentions>textarea::-ms-input-placeholder {
    color: #bfbfbf
}

.ant-mentions>textarea::-webkit-input-placeholder {
    color: #bfbfbf
}

.ant-mentions>textarea::-moz-placeholder {
    color: #bfbfbf
}

.ant-mentions>textarea:-ms-input-placeholder {
    color: #bfbfbf
}

.ant-mentions>textarea::placeholder {
    color: #bfbfbf
}

.ant-mentions>textarea:placeholder-shown {
    text-overflow: ellipsis
}

.ant-mentions>textarea:-moz-read-only {
    cursor: default
}

.ant-mentions>textarea:read-only {
    cursor: default
}

.ant-mentions-measure {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    color: transparent;
    pointer-events: none
}

.ant-mentions-measure>span {
    display: inline-block;
    min-height: 1em
}

.ant-mentions-dropdown {
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: absolute;
    top: -9999px;
    left: -9999px;
    z-index: 1050;
    box-sizing: border-box;
    font-size: 14px;
    font-variant: normal;
    background-color: #fff;
    border-radius: 2px;
    outline: none;
    box-shadow: 0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)
}

.ant-mentions-dropdown-hidden {
    display: none
}

.ant-mentions-dropdown-menu {
    max-height: 250px;
    margin-bottom: 0;
    padding-left: 0;
    overflow: auto;
    list-style: none;
    outline: none
}

.ant-mentions-dropdown-menu-item {
    position: relative;
    display: block;
    min-width: 100px;
    padding: 5px 12px;
    overflow: hidden;
    color: rgba(0,0,0,.65);
    font-weight: 400;
    line-height: 1.5715;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    -webkit-transition: background .3s ease;
    transition: background .3s ease
}

.ant-mentions-dropdown-menu-item:hover {
    background-color: #f5f5f5
}

.ant-mentions-dropdown-menu-item:first-child {
    border-radius: 2px 2px 0 0
}

.ant-mentions-dropdown-menu-item:last-child {
    border-radius: 0 0 2px 2px
}

.ant-mentions-dropdown-menu-item-disabled {
    color: rgba(0,0,0,.25);
    cursor: not-allowed
}

.ant-mentions-dropdown-menu-item-disabled:hover {
    color: rgba(0,0,0,.25);
    background-color: #fff;
    cursor: not-allowed
}

.ant-mentions-dropdown-menu-item-selected {
    color: rgba(0,0,0,.65);
    font-weight: 600;
    background-color: #fafafa
}

.ant-mentions-dropdown-menu-item-active {
    background-color: #f5f5f5
}

.ant-mentions-rtl {
    direction: rtl
}

.ant-message {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: fixed;
    top: 16px;
    left: 0;
    z-index: 1010;
    width: 100%;
    pointer-events: none
}

.ant-message-notice {
    padding: 8px;
    text-align: center
}

.ant-message-notice:first-child {
    margin-top: -8px
}

.ant-message-notice-content {
    display: inline-block;
    padding: 10px 16px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);
    pointer-events: all
}

.ant-message-success .anticon {
    color: #52c41a
}

.ant-message-error .anticon {
    color: #ff4d4f
}

.ant-message-warning .anticon {
    color: #faad14
}

.ant-message-info .anticon,.ant-message-loading .anticon {
    color: #1890ff
}

.ant-message .anticon {
    position: relative;
    top: 1px;
    margin-right: 8px;
    font-size: 16px
}

.ant-message-notice.move-up-leave.move-up-leave-active {
    -webkit-animation-name: MessageMoveOut;
    animation-name: MessageMoveOut;
    -webkit-animation-duration: .3s;
    animation-duration: .3s
}

@-webkit-keyframes MessageMoveOut {
    0% {
        max-height: 150px;
        padding: 8px;
        opacity: 1
    }

    to {
        max-height: 0;
        padding: 0;
        opacity: 0
    }
}

@keyframes MessageMoveOut {
    0% {
        max-height: 150px;
        padding: 8px;
        opacity: 1
    }

    to {
        max-height: 0;
        padding: 0;
        opacity: 0
    }
}

.ant-message-rtl,.ant-message-rtl span {
    direction: rtl
}

.ant-message-rtl .anticon {
    margin-right: 0;
    margin-left: 8px
}

.ant-modal {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    top: 100px;
    width: auto;
    margin: 0 auto;
    padding-bottom: 24px;
    pointer-events: none
}

.ant-modal-wrap {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: auto;
    outline: 0;
    -webkit-overflow-scrolling: touch
}

.ant-modal-title {
    margin: 0;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    word-wrap: break-word
}

.ant-modal-content {
    position: relative;
    background-color: #fff;
    background-clip: padding-box;
    border: 0;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);
    pointer-events: auto
}

.ant-modal-close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    padding: 0;
    color: rgba(0,0,0,.45);
    font-weight: 700;
    line-height: 1;
    text-decoration: none;
    background: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
    -webkit-transition: color .3s;
    transition: color .3s
}

.ant-modal-close-x {
    display: block;
    width: 56px;
    height: 56px;
    font-size: 16px;
    font-style: normal;
    line-height: 56px;
    text-align: center;
    text-transform: none;
    text-rendering: auto
}

.ant-modal-close:focus,.ant-modal-close:hover {
    color: rgba(0,0,0,.75);
    text-decoration: none
}

.ant-modal-header {
    padding: 16px 24px;
    color: rgba(0,0,0,.65);
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 2px 2px 0 0
}

.ant-modal-body {
    padding: 24px;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word
}

.ant-modal-footer {
    padding: 10px 16px;
    text-align: right;
    background: transparent;
    border-top: 1px solid #f0f0f0;
    border-radius: 0 0 2px 2px
}

.ant-modal-footer button+button {
    margin-bottom: 0;
    margin-left: 8px
}

.ant-modal.zoom-appear,.ant-modal.zoom-enter {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    opacity: 0;
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.ant-modal-mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    height: 100%;
    background-color: rgba(0,0,0,.45);
    filter: alpha(opacity=50)
}

.ant-modal-mask-hidden {
    display: none
}

.ant-modal-open {
    overflow: hidden
}

.ant-modal-centered {
    text-align: center
}

.ant-modal-centered:before {
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
    content: ''
}

.ant-modal-centered .ant-modal {
    top: 0;
    display: inline-block;
    text-align: left;
    vertical-align: middle
}

@media (max-width: 767px) {
    .ant-modal {
        max-width:calc(100vw - 16px);
        margin: 8px auto
    }

    .ant-modal-centered .ant-modal {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        -webkit-flex: 1;
        flex: 1
    }
}

.ant-modal-confirm .ant-modal-close,.ant-modal-confirm .ant-modal-header {
    display: none
}

.ant-modal-confirm .ant-modal-body {
    padding: 32px 32px 24px
}

.ant-modal-confirm-body-wrapper:before {
    display: table;
    content: ''
}

.ant-modal-confirm-body-wrapper:after {
    display: table;
    clear: both;
    content: ''
}

.ant-modal-confirm-body .ant-modal-confirm-title {
    display: block;
    overflow: hidden;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    font-size: 16px;
    line-height: 1.4
}

.ant-modal-confirm-body .ant-modal-confirm-content {
    margin-top: 8px;
    color: rgba(0,0,0,.65);
    font-size: 14px
}

.ant-modal-confirm-body>.anticon {
    float: left;
    margin-right: 16px;
    font-size: 22px
}

.ant-modal-confirm-body>.anticon+.ant-modal-confirm-title+.ant-modal-confirm-content {
    margin-left: 38px
}

.ant-modal-confirm .ant-modal-confirm-btns {
    float: right;
    margin-top: 24px
}

.ant-modal-confirm .ant-modal-confirm-btns button+button {
    margin-bottom: 0;
    margin-left: 8px
}

.ant-modal-confirm-error .ant-modal-confirm-body>.anticon {
    color: #ff4d4f
}

.ant-modal-confirm-confirm .ant-modal-confirm-body>.anticon,.ant-modal-confirm-warning .ant-modal-confirm-body>.anticon {
    color: #faad14
}

.ant-modal-confirm-info .ant-modal-confirm-body>.anticon {
    color: #1890ff
}

.ant-modal-confirm-success .ant-modal-confirm-body>.anticon {
    color: #52c41a
}

.ant-modal-wrap-rtl {
    direction: rtl
}

.ant-modal-wrap-rtl .ant-modal-close {
    right: auto;
    left: 0
}

.ant-modal-wrap-rtl .ant-modal-footer {
    text-align: left
}

.ant-modal-wrap-rtl .ant-modal-footer button+button {
    margin-right: 8px;
    margin-left: 0
}

.ant-modal-wrap-rtl.ant-modal-centered .ant-modal {
    text-align: right
}

.ant-notification {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: fixed;
    z-index: 1010;
    width: 384px;
    max-width: calc(100vw - 32px);
    margin-right: 24px
}

.ant-notification-bottomLeft,.ant-notification-topLeft {
    margin-right: 0;
    margin-left: 24px
}

.ant-notification-bottomLeft .ant-notification-fade-appear.ant-notification-fade-appear-active,.ant-notification-bottomLeft .ant-notification-fade-enter.ant-notification-fade-enter-active,.ant-notification-topLeft .ant-notification-fade-appear.ant-notification-fade-appear-active,.ant-notification-topLeft .ant-notification-fade-enter.ant-notification-fade-enter-active {
    -webkit-animation-name: NotificationLeftFadeIn;
    animation-name: NotificationLeftFadeIn
}

.ant-notification-close-icon {
    font-size: 14px;
    cursor: pointer
}

.ant-notification-hook-holder,.ant-notification-notice {
    position: relative;
    margin-bottom: 16px;
    overflow: hidden;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)
}

.ant-notification-hook-holder>.ant-notification-notice {
    margin-bottom: 0;
    box-shadow: none
}

.ant-notification-notice {
    padding: 16px 24px;
    line-height: 1.5715
}

.ant-notification-notice-message {
    display: inline-block;
    margin-bottom: 8px;
    color: rgba(0,0,0,.85);
    font-size: 16px;
    line-height: 24px
}

.ant-notification-notice-message-single-line-auto-margin {
    display: block;
    width: calc(384px - 24px * 2 - 24px - 48px - 100%);
    max-width: 4px;
    background-color: transparent;
    pointer-events: none
}

.ant-notification-notice-message-single-line-auto-margin:before {
    display: block;
    content: ''
}

.ant-notification-notice-description {
    font-size: 14px
}

.ant-notification-notice-closable .ant-notification-notice-message {
    padding-right: 24px
}

.ant-notification-notice-with-icon .ant-notification-notice-message {
    margin-bottom: 4px;
    margin-left: 48px;
    font-size: 16px
}

.ant-notification-notice-with-icon .ant-notification-notice-description {
    margin-left: 48px;
    font-size: 14px
}

.ant-notification-notice-icon {
    position: absolute;
    margin-left: 4px;
    font-size: 24px;
    line-height: 24px
}

.anticon.ant-notification-notice-icon-success {
    color: #52c41a
}

.anticon.ant-notification-notice-icon-info {
    color: #1890ff
}

.anticon.ant-notification-notice-icon-warning {
    color: #faad14
}

.anticon.ant-notification-notice-icon-error {
    color: #ff4d4f
}

.ant-notification-notice-close {
    position: absolute;
    top: 16px;
    right: 22px;
    color: rgba(0,0,0,.45);
    outline: none
}

.ant-notification-notice-close:hover {
    color: rgba(0,0,0,.67)
}

.ant-notification-notice-btn {
    float: right;
    margin-top: 16px
}

.ant-notification .notification-fade-effect {
    -webkit-animation-duration: .24s;
    animation-duration: .24s;
    -webkit-animation-timing-function: cubic-bezier(.645,.045,.355,1);
    animation-timing-function: cubic-bezier(.645,.045,.355,1);
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

.ant-notification-fade-appear,.ant-notification-fade-enter {
    opacity: 0;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.ant-notification-fade-appear,.ant-notification-fade-enter,.ant-notification-fade-leave {
    -webkit-animation-duration: .24s;
    animation-duration: .24s;
    -webkit-animation-timing-function: cubic-bezier(.645,.045,.355,1);
    animation-timing-function: cubic-bezier(.645,.045,.355,1);
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

.ant-notification-fade-leave {
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-play-state: paused;
    animation-play-state: paused
}

.ant-notification-fade-appear.ant-notification-fade-appear-active,.ant-notification-fade-enter.ant-notification-fade-enter-active {
    -webkit-animation-name: NotificationFadeIn;
    animation-name: NotificationFadeIn;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

.ant-notification-fade-leave.ant-notification-fade-leave-active {
    -webkit-animation-name: NotificationFadeOut;
    animation-name: NotificationFadeOut;
    -webkit-animation-play-state: running;
    animation-play-state: running
}

@-webkit-keyframes NotificationFadeIn {
    0% {
        left: 384px;
        opacity: 0
    }

    to {
        left: 0;
        opacity: 1
    }
}

@keyframes NotificationFadeIn {
    0% {
        left: 384px;
        opacity: 0
    }

    to {
        left: 0;
        opacity: 1
    }
}

@-webkit-keyframes NotificationLeftFadeIn {
    0% {
        right: 384px;
        opacity: 0
    }

    to {
        right: 0;
        opacity: 1
    }
}

@keyframes NotificationLeftFadeIn {
    0% {
        right: 384px;
        opacity: 0
    }

    to {
        right: 0;
        opacity: 1
    }
}

@-webkit-keyframes NotificationFadeOut {
    0% {
        max-height: 150px;
        margin-bottom: 16px;
        padding-top: 16px;
        padding-bottom: 16px;
        opacity: 1
    }

    to {
        max-height: 0;
        margin-bottom: 0;
        padding-top: 0;
        padding-bottom: 0;
        opacity: 0
    }
}

@keyframes NotificationFadeOut {
    0% {
        max-height: 150px;
        margin-bottom: 16px;
        padding-top: 16px;
        padding-bottom: 16px;
        opacity: 1
    }

    to {
        max-height: 0;
        margin-bottom: 0;
        padding-top: 0;
        padding-bottom: 0;
        opacity: 0
    }
}

.ant-notification-rtl {
    direction: rtl
}

.ant-notification-rtl .ant-notification-notice-closable .ant-notification-notice-message {
    padding-right: 0;
    padding-left: 24px
}

.ant-notification-rtl .ant-notification-notice-with-icon .ant-notification-notice-description,.ant-notification-rtl .ant-notification-notice-with-icon .ant-notification-notice-message {
    margin-right: 48px;
    margin-left: 0
}

.ant-notification-rtl .ant-notification-notice-icon {
    margin-right: 4px;
    margin-left: 0
}

.ant-notification-rtl .ant-notification-notice-close {
    right: auto;
    left: 22px
}

.ant-notification-rtl .ant-notification-notice-btn {
    float: left
}

.ant-page-header {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    padding: 16px 24px;
    background-color: #fff
}

.ant-page-header-ghost {
    background-color: inherit
}

.ant-page-header.has-breadcrumb {
    padding-top: 12px
}

.ant-page-header.has-footer {
    padding-bottom: 0
}

.ant-page-header-back {
    margin-right: 16px;
    font-size: 16px;
    line-height: 1
}

.ant-page-header-back-button {
    color: #1890ff;
    text-decoration: none;
    outline: none;
    -webkit-transition: color .3s;
    transition: color .3s;
    color: #000;
    cursor: pointer
}

.ant-page-header-back-button:focus,.ant-page-header-back-button:hover {
    color: #40a9ff
}

.ant-page-header-back-button:active {
    color: #096dd9
}

.ant-page-header .ant-divider-vertical {
    height: 14px;
    margin: 0 12px;
    vertical-align: middle
}

.ant-breadcrumb+.ant-page-header-heading {
    margin-top: 8px
}

.ant-page-header-heading {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between
}

.ant-page-header-heading,.ant-page-header-heading-left {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex
}

.ant-page-header-heading-left {
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    margin: 4px 0;
    overflow: hidden
}

.ant-page-header-heading-title {
    margin-right: 12px;
    margin-bottom: 0;
    color: rgba(0,0,0,.85);
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.ant-page-header-heading .ant-avatar {
    margin-right: 12px
}

.ant-page-header-heading-sub-title {
    margin-right: 12px;
    color: rgba(0,0,0,.45);
    font-size: 14px;
    line-height: 1.5715;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.ant-page-header-heading-extra {
    margin: 4px 0;
    white-space: nowrap
}

.ant-page-header-heading-extra>* {
    margin-left: 12px;
    white-space: unset
}

.ant-page-header-heading-extra>:first-child {
    margin-left: 0
}

.ant-page-header-content {
    padding-top: 12px
}

.ant-page-header-footer {
    margin-top: 16px
}

.ant-page-header-footer .ant-tabs-bar {
    margin-bottom: 1px;
    border-bottom: 0
}

.ant-page-header-footer .ant-tabs-bar .ant-tabs-nav .ant-tabs-tab {
    padding: 8px 0;
    font-size: 16px
}

.ant-page-header-compact .ant-page-header-heading {
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap
}

.ant-page-header-rtl {
    direction: rtl
}

.ant-page-header-rtl .ant-page-header-back {
    float: right;
    margin-right: 0;
    margin-left: 16px
}

.ant-page-header-rtl .ant-page-header-heading-title,.ant-page-header-rtl .ant-page-header-heading .ant-avatar {
    margin-right: 0;
    margin-left: 12px
}

.ant-page-header-rtl .ant-page-header-heading-sub-title {
    float: right;
    margin-right: 0;
    margin-left: 12px
}

.ant-page-header-rtl .ant-page-header-heading-tags {
    float: right
}

.ant-page-header-rtl .ant-page-header-heading-extra {
    float: left
}

.ant-page-header-rtl .ant-page-header-heading-extra>* {
    margin-right: 12px;
    margin-left: 0
}

.ant-page-header-rtl .ant-page-header-heading-extra>:first-child {
    margin-right: 0
}

.ant-page-header-rtl .ant-page-header-footer .ant-tabs-bar .ant-tabs-nav {
    float: right
}

.ant-popover {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1030;
    font-weight: 400;
    white-space: normal;
    text-align: left;
    cursor: auto;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text
}

.ant-popover:after {
    position: absolute;
    background: hsla(0,0%,100%,.01);
    content: ''
}

.ant-popover-hidden {
    display: none
}

.ant-popover-placement-top,.ant-popover-placement-topLeft,.ant-popover-placement-topRight {
    padding-bottom: 10px
}

.ant-popover-placement-right,.ant-popover-placement-rightBottom,.ant-popover-placement-rightTop {
    padding-left: 10px
}

.ant-popover-placement-bottom,.ant-popover-placement-bottomLeft,.ant-popover-placement-bottomRight {
    padding-top: 10px
}

.ant-popover-placement-left,.ant-popover-placement-leftBottom,.ant-popover-placement-leftTop {
    padding-right: 10px
}

.ant-popover-inner {
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);
    box-shadow: 0 0 8px rgba(0,0,0,.15)\9
}

@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active) {
    .ant-popover-inner {
        box-shadow: 0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)
    }
}

.ant-popover-title {
    min-width: 177px;
    min-height: 32px;
    margin: 0;
    padding: 5px 16px 4px;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    border-bottom: 1px solid #f0f0f0
}

.ant-popover-inner-content {
    padding: 12px 16px;
    color: rgba(0,0,0,.65)
}

.ant-popover-message {
    position: relative;
    padding: 4px 0 12px;
    color: rgba(0,0,0,.65);
    font-size: 14px
}

.ant-popover-message>.anticon {
    position: absolute;
    top: 8.0005px;
    color: #faad14;
    font-size: 14px
}

.ant-popover-message-title {
    padding-left: 22px
}

.ant-popover-buttons {
    margin-bottom: 4px;
    text-align: right
}

.ant-popover-buttons button {
    margin-left: 8px
}

.ant-popover-arrow {
    position: absolute;
    display: block;
    width: 8.48528137px;
    height: 8.48528137px;
    background: transparent;
    border-style: solid;
    border-width: 4.24264069px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg)
}

.ant-popover-placement-top>.ant-popover-content>.ant-popover-arrow,.ant-popover-placement-topLeft>.ant-popover-content>.ant-popover-arrow,.ant-popover-placement-topRight>.ant-popover-content>.ant-popover-arrow {
    bottom: 6.2px;
    border-top-color: transparent;
    border-right-color: #fff;
    border-bottom-color: #fff;
    border-left-color: transparent;
    box-shadow: 3px 3px 7px rgba(0,0,0,.07)
}

.ant-popover-placement-top>.ant-popover-content>.ant-popover-arrow {
    left: 50%;
    -webkit-transform: translateX(-50%) rotate(45deg);
    -ms-transform: translateX(-50%) rotate(45deg);
    transform: translateX(-50%) rotate(45deg)
}

.ant-popover-placement-topLeft>.ant-popover-content>.ant-popover-arrow {
    left: 16px
}

.ant-popover-placement-topRight>.ant-popover-content>.ant-popover-arrow {
    right: 16px
}

.ant-popover-placement-right>.ant-popover-content>.ant-popover-arrow,.ant-popover-placement-rightBottom>.ant-popover-content>.ant-popover-arrow,.ant-popover-placement-rightTop>.ant-popover-content>.ant-popover-arrow {
    left: 6px;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: #fff;
    border-left-color: #fff;
    box-shadow: -3px 3px 7px rgba(0,0,0,.07)
}

.ant-popover-placement-right>.ant-popover-content>.ant-popover-arrow {
    top: 50%;
    -webkit-transform: translateY(-50%) rotate(45deg);
    -ms-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg)
}

.ant-popover-placement-rightTop>.ant-popover-content>.ant-popover-arrow {
    top: 12px
}

.ant-popover-placement-rightBottom>.ant-popover-content>.ant-popover-arrow {
    bottom: 12px
}

.ant-popover-placement-bottom>.ant-popover-content>.ant-popover-arrow,.ant-popover-placement-bottomLeft>.ant-popover-content>.ant-popover-arrow,.ant-popover-placement-bottomRight>.ant-popover-content>.ant-popover-arrow {
    top: 6px;
    border-top-color: #fff;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: #fff;
    box-shadow: -2px -2px 5px rgba(0,0,0,.06)
}

.ant-popover-placement-bottom>.ant-popover-content>.ant-popover-arrow {
    left: 50%;
    -webkit-transform: translateX(-50%) rotate(45deg);
    -ms-transform: translateX(-50%) rotate(45deg);
    transform: translateX(-50%) rotate(45deg)
}

.ant-popover-placement-bottomLeft>.ant-popover-content>.ant-popover-arrow {
    left: 16px
}

.ant-popover-placement-bottomRight>.ant-popover-content>.ant-popover-arrow {
    right: 16px
}

.ant-popover-placement-left>.ant-popover-content>.ant-popover-arrow,.ant-popover-placement-leftBottom>.ant-popover-content>.ant-popover-arrow,.ant-popover-placement-leftTop>.ant-popover-content>.ant-popover-arrow {
    right: 6px;
    border-top-color: #fff;
    border-right-color: #fff;
    border-bottom-color: transparent;
    border-left-color: transparent;
    box-shadow: 3px -3px 7px rgba(0,0,0,.07)
}

.ant-popover-placement-left>.ant-popover-content>.ant-popover-arrow {
    top: 50%;
    -webkit-transform: translateY(-50%) rotate(45deg);
    -ms-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg)
}

.ant-popover-placement-leftTop>.ant-popover-content>.ant-popover-arrow {
    top: 12px
}

.ant-popover-placement-leftBottom>.ant-popover-content>.ant-popover-arrow {
    bottom: 12px
}

.ant-popover-rtl {
    direction: rtl;
    text-align: right
}

.ant-popover-rtl .ant-popover-message-title {
    padding-right: 22px;
    padding-left: 16px
}

.ant-popover-rtl .ant-popover-buttons {
    text-align: left
}

.ant-popover-rtl .ant-popover-buttons button {
    margin-right: 8px;
    margin-left: 0
}

.ant-progress {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    display: inline-block
}

.ant-progress-line {
    position: relative;
    width: 100%;
    font-size: 14px
}

.ant-progress-steps {
    display: inline-block
}

.ant-progress-steps-outer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center
}

.ant-progress-steps-item {
    -ms-flex-negative: 0;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    min-width: 2px;
    margin-right: 2px;
    background: #f3f3f3
}

.ant-progress-small.ant-progress-line,.ant-progress-small.ant-progress-line .ant-progress-text .anticon {
    font-size: 12px
}

.ant-progress-outer {
    display: inline-block;
    width: 100%;
    margin-right: 0;
    padding-right: 0
}

.ant-progress-show-info .ant-progress-outer {
    margin-right: calc(-2em - 8px);
    padding-right: calc(2em + 8px)
}

.ant-progress-inner {
    position: relative;
    display: inline-block;
    width: 100%;
    overflow: hidden;
    vertical-align: middle;
    background-color: #f5f5f5;
    border-radius: 100px
}

.ant-progress-circle-trail {
    stroke: #f5f5f5
}

.ant-progress-circle-path {
    -webkit-animation: ant-progress-appear .3s;
    animation: ant-progress-appear .3s
}

.ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path {
    stroke: #1890ff
}

.ant-progress-bg,.ant-progress-success-bg {
    position: relative;
    background-color: #1890ff;
    border-radius: 100px;
    -webkit-transition: all .4s cubic-bezier(.08,.82,.17,1) 0s;
    transition: all .4s cubic-bezier(.08,.82,.17,1) 0s
}

.ant-progress-success-bg {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #52c41a
}

.ant-progress-text {
    display: inline-block;
    width: 2em;
    margin-left: 8px;
    color: rgba(0,0,0,.45);
    font-size: 1em;
    line-height: 1;
    white-space: nowrap;
    text-align: left;
    vertical-align: middle;
    word-break: normal
}

.ant-progress-text .anticon {
    font-size: 14px
}

.ant-progress-status-active .ant-progress-bg:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    border-radius: 10px;
    opacity: 0;
    -webkit-animation: ant-progress-active 2.4s cubic-bezier(.23,1,.32,1) infinite;
    animation: ant-progress-active 2.4s cubic-bezier(.23,1,.32,1) infinite;
    content: ''
}

.ant-progress-status-exception .ant-progress-bg {
    background-color: #ff4d4f
}

.ant-progress-status-exception .ant-progress-text {
    color: #ff4d4f
}

.ant-progress-status-exception .ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path {
    stroke: #ff4d4f
}

.ant-progress-status-success .ant-progress-bg {
    background-color: #52c41a
}

.ant-progress-status-success .ant-progress-text {
    color: #52c41a
}

.ant-progress-status-success .ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path {
    stroke: #52c41a
}

.ant-progress-circle .ant-progress-inner {
    position: relative;
    line-height: 1;
    background-color: transparent
}

.ant-progress-circle .ant-progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 1em;
    line-height: 1;
    white-space: normal;
    text-align: center;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%)
}

.ant-progress-circle .ant-progress-text .anticon {
    font-size: 1.16666667em
}

.ant-progress-circle.ant-progress-status-exception .ant-progress-text {
    color: #ff4d4f
}

.ant-progress-circle.ant-progress-status-success .ant-progress-text {
    color: #52c41a
}

@-webkit-keyframes ant-progress-active {
    0% {
        width: 0;
        opacity: .1
    }

    20% {
        width: 0;
        opacity: .5
    }

    to {
        width: 100%;
        opacity: 0
    }
}

@keyframes ant-progress-active {
    0% {
        width: 0;
        opacity: .1
    }

    20% {
        width: 0;
        opacity: .5
    }

    to {
        width: 100%;
        opacity: 0
    }
}

.ant-progress-rtl {
    direction: rtl
}

.ant-progress-rtl.ant-progress-show-info .ant-progress-outer {
    margin-right: 0;
    margin-left: calc(-2em - 8px);
    padding-right: 0;
    padding-left: calc(2em + 8px)
}

.ant-progress-rtl .ant-progress-success-bg {
    right: 0;
    left: auto
}

.ant-progress-rtl.ant-progress-line .ant-progress-text,.ant-progress-rtl.ant-progress-steps .ant-progress-text {
    margin-right: 8px;
    margin-left: 0;
    text-align: right
}

.ant-rate {
    box-sizing: border-box;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    display: inline-block;
    margin: 0;
    padding: 0;
    color: #fadb14;
    font-size: 20px;
    line-height: unset;
    list-style: none;
    outline: none
}

.ant-rate-disabled .ant-rate-star {
    cursor: default
}

.ant-rate-disabled .ant-rate-star:hover {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1)
}

.ant-rate-star {
    position: relative;
    display: inline-block;
    margin: 0;
    padding: 0;
    color: inherit;
    cursor: pointer;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-rate-star:not(:last-child) {
    margin-right: 8px
}

.ant-rate-star>div:focus {
    outline: 0
}

.ant-rate-star>div:focus,.ant-rate-star>div:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1)
}

.ant-rate-star-first,.ant-rate-star-second {
    color: #f0f0f0;
    -webkit-transition: all .3s;
    transition: all .3s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.ant-rate-star-first .anticon,.ant-rate-star-second .anticon {
    vertical-align: middle
}

.ant-rate-star-first {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;
    opacity: 0
}

.ant-rate-star-half .ant-rate-star-first,.ant-rate-star-half .ant-rate-star-second {
    opacity: 1
}

.ant-rate-star-full .ant-rate-star-second,.ant-rate-star-half .ant-rate-star-first {
    color: inherit
}

.ant-rate-text {
    display: inline-block;
    margin: 0 8px;
    font-size: 14px
}

.ant-rate-rtl {
    direction: rtl
}

.ant-rate-rtl .ant-rate-star:not(:last-child) {
    margin-right: 0;
    margin-left: 8px
}

.ant-rate-rtl .ant-rate-star-first {
    right: 0;
    left: auto
}

.ant-result {
    padding: 48px 32px
}

.ant-result-success .ant-result-icon>.anticon {
    color: #52c41a
}

.ant-result-error .ant-result-icon>.anticon {
    color: #ff4d4f
}

.ant-result-info .ant-result-icon>.anticon {
    color: #1890ff
}

.ant-result-warning .ant-result-icon>.anticon {
    color: #faad14
}

.ant-result-image {
    width: 250px;
    height: 295px;
    margin: auto
}

.ant-result-icon {
    margin-bottom: 24px;
    text-align: center
}

.ant-result-icon>.anticon {
    font-size: 72px
}

.ant-result-title {
    color: rgba(0,0,0,.85);
    font-size: 24px;
    line-height: 1.8;
    text-align: center
}

.ant-result-subtitle {
    color: rgba(0,0,0,.45);
    font-size: 14px;
    line-height: 1.6;
    text-align: center
}

.ant-result-extra {
    margin: 32px 0 0;
    text-align: center
}

.ant-result-extra>* {
    margin-right: 8px
}

.ant-result-extra>:last-child {
    margin-right: 0
}

.ant-result-content {
    margin-top: 24px;
    padding: 24px 40px;
    background-color: #fafafa
}

.ant-result-rtl {
    direction: rtl
}

.ant-result-rtl .ant-result-extra>* {
    margin-right: 0;
    margin-left: 8px
}

.ant-result-rtl .ant-result-extra>:last-child {
    margin-left: 0
}

.ant-skeleton {
    display: table;
    width: 100%
}

.ant-skeleton-header {
    display: table-cell;
    padding-right: 16px;
    vertical-align: top
}

.ant-skeleton-header .ant-skeleton-avatar {
    display: inline-block;
    vertical-align: top;
    background: #f2f2f2;
    width: 32px;
    height: 32px;
    line-height: 32px
}

.ant-skeleton-header .ant-skeleton-avatar.ant-skeleton-avatar-circle {
    border-radius: 50%
}

.ant-skeleton-header .ant-skeleton-avatar-lg {
    width: 40px;
    height: 40px;
    line-height: 40px
}

.ant-skeleton-header .ant-skeleton-avatar-lg.ant-skeleton-avatar-circle {
    border-radius: 50%
}

.ant-skeleton-header .ant-skeleton-avatar-sm {
    width: 24px;
    height: 24px;
    line-height: 24px
}

.ant-skeleton-header .ant-skeleton-avatar-sm.ant-skeleton-avatar-circle {
    border-radius: 50%
}

.ant-skeleton-content {
    display: table-cell;
    width: 100%;
    vertical-align: top
}

.ant-skeleton-content .ant-skeleton-title {
    width: 100%;
    height: 16px;
    margin-top: 16px;
    background: #f2f2f2
}

.ant-skeleton-content .ant-skeleton-title+.ant-skeleton-paragraph {
    margin-top: 24px
}

.ant-skeleton-content .ant-skeleton-paragraph {
    padding: 0
}

.ant-skeleton-content .ant-skeleton-paragraph>li {
    width: 100%;
    height: 16px;
    list-style: none;
    background: #f2f2f2
}

.ant-skeleton-content .ant-skeleton-paragraph>li:last-child:not(:first-child):not(:nth-child(2)) {
    width: 61%
}

.ant-skeleton-content .ant-skeleton-paragraph>li+li {
    margin-top: 16px
}

.ant-skeleton-with-avatar .ant-skeleton-content .ant-skeleton-title {
    margin-top: 12px
}

.ant-skeleton-with-avatar .ant-skeleton-content .ant-skeleton-title+.ant-skeleton-paragraph {
    margin-top: 28px
}

.ant-skeleton.ant-skeleton-active .ant-skeleton-avatar,.ant-skeleton.ant-skeleton-active .ant-skeleton-button,.ant-skeleton.ant-skeleton-active .ant-skeleton-content .ant-skeleton-paragraph>li,.ant-skeleton.ant-skeleton-active .ant-skeleton-content .ant-skeleton-title,.ant-skeleton.ant-skeleton-active .ant-skeleton-input {
    background: -webkit-gradient(linear,left top,right top,color-stop(25%,#f2f2f2),color-stop(37%,#e6e6e6),color-stop(63%,#f2f2f2));
    background: -webkit-linear-gradient(left,#f2f2f2 25%,#e6e6e6 37%,#f2f2f2 63%);
    background: linear-gradient(90deg,#f2f2f2 25%,#e6e6e6 37%,#f2f2f2 63%);
    background-size: 400% 100%;
    -webkit-animation: ant-skeleton-loading 1.4s ease infinite;
    animation: ant-skeleton-loading 1.4s ease infinite
}

.ant-skeleton-element {
    display: inline-block
}

.ant-skeleton-element .ant-skeleton-button {
    display: inline-block;
    vertical-align: top;
    background: #f2f2f2;
    border-radius: 2px;
    width: 64px;
    height: 32px;
    line-height: 32px
}

.ant-skeleton-element .ant-skeleton-button.ant-skeleton-button-circle {
    width: 32px;
    border-radius: 50%
}

.ant-skeleton-element .ant-skeleton-button.ant-skeleton-button-round {
    border-radius: 32px
}

.ant-skeleton-element .ant-skeleton-button-lg {
    width: 80px;
    height: 40px;
    line-height: 40px
}

.ant-skeleton-element .ant-skeleton-button-lg.ant-skeleton-button-circle {
    width: 40px;
    border-radius: 50%
}

.ant-skeleton-element .ant-skeleton-button-lg.ant-skeleton-button-round {
    border-radius: 40px
}

.ant-skeleton-element .ant-skeleton-button-sm {
    width: 48px;
    height: 24px;
    line-height: 24px
}

.ant-skeleton-element .ant-skeleton-button-sm.ant-skeleton-button-circle {
    width: 24px;
    border-radius: 50%
}

.ant-skeleton-element .ant-skeleton-button-sm.ant-skeleton-button-round {
    border-radius: 24px
}

.ant-skeleton-element .ant-skeleton-avatar {
    display: inline-block;
    vertical-align: top;
    background: #f2f2f2;
    width: 32px;
    height: 32px;
    line-height: 32px
}

.ant-skeleton-element .ant-skeleton-avatar.ant-skeleton-avatar-circle {
    border-radius: 50%
}

.ant-skeleton-element .ant-skeleton-avatar-lg {
    width: 40px;
    height: 40px;
    line-height: 40px
}

.ant-skeleton-element .ant-skeleton-avatar-lg.ant-skeleton-avatar-circle {
    border-radius: 50%
}

.ant-skeleton-element .ant-skeleton-avatar-sm {
    width: 24px;
    height: 24px;
    line-height: 24px
}

.ant-skeleton-element .ant-skeleton-avatar-sm.ant-skeleton-avatar-circle {
    border-radius: 50%
}

.ant-skeleton-element .ant-skeleton-input {
    display: inline-block;
    vertical-align: top;
    background: #f2f2f2;
    width: 100%;
    height: 32px;
    line-height: 32px
}

.ant-skeleton-element .ant-skeleton-input-lg {
    width: 100%;
    height: 40px;
    line-height: 40px
}

.ant-skeleton-element .ant-skeleton-input-sm {
    width: 100%;
    height: 24px;
    line-height: 24px
}

@-webkit-keyframes ant-skeleton-loading {
    0% {
        background-position: 100% 50%
    }

    to {
        background-position: 0 50%
    }
}

@keyframes ant-skeleton-loading {
    0% {
        background-position: 100% 50%
    }

    to {
        background-position: 0 50%
    }
}

.ant-skeleton-rtl {
    direction: rtl
}

.ant-skeleton-rtl .ant-skeleton-header {
    padding-right: 0;
    padding-left: 16px
}

.ant-skeleton-rtl.ant-skeleton.ant-skeleton-active .ant-skeleton-avatar,.ant-skeleton-rtl.ant-skeleton.ant-skeleton-active .ant-skeleton-content .ant-skeleton-paragraph>li,.ant-skeleton-rtl.ant-skeleton.ant-skeleton-active .ant-skeleton-content .ant-skeleton-title {
    -webkit-animation-name: ant-skeleton-loading-rtl;
    animation-name: ant-skeleton-loading-rtl
}

@-webkit-keyframes ant-skeleton-loading-rtl {
    0% {
        background-position: 0 50%
    }

    to {
        background-position: 100% 50%
    }
}

@keyframes ant-skeleton-loading-rtl {
    0% {
        background-position: 0 50%
    }

    to {
        background-position: 100% 50%
    }
}

.ant-slider {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    height: 12px;
    margin: 10px 6px;
    padding: 4px 0;
    cursor: pointer;
    -ms-touch-action: none;
    touch-action: none
}

.ant-slider-vertical {
    width: 12px;
    height: 100%;
    margin: 6px 10px;
    padding: 0 4px
}

.ant-slider-vertical .ant-slider-rail {
    width: 4px;
    height: 100%
}

.ant-slider-vertical .ant-slider-track {
    width: 4px
}

.ant-slider-vertical .ant-slider-handle {
    margin-top: -6px;
    margin-left: -5px
}

.ant-slider-vertical .ant-slider-mark {
    top: 0;
    left: 12px;
    width: 18px;
    height: 100%
}

.ant-slider-vertical .ant-slider-mark-text {
    left: 4px;
    white-space: nowrap
}

.ant-slider-vertical .ant-slider-step {
    width: 4px;
    height: 100%
}

.ant-slider-vertical .ant-slider-dot {
    top: auto;
    left: 2px;
    margin-bottom: -4px
}

.ant-slider-tooltip .ant-tooltip-inner {
    min-width: unset
}

.ant-slider-rtl.ant-slider-vertical .ant-slider-handle {
    margin-right: -5px;
    margin-left: 0
}

.ant-slider-rtl.ant-slider-vertical .ant-slider-mark {
    right: 12px;
    left: auto
}

.ant-slider-rtl.ant-slider-vertical .ant-slider-mark-text {
    right: 4px;
    left: auto
}

.ant-slider-rtl.ant-slider-vertical .ant-slider-dot {
    right: 2px;
    left: auto
}

.ant-slider-with-marks {
    margin-bottom: 28px
}

.ant-slider-rail {
    width: 100%;
    background-color: #f5f5f5
}

.ant-slider-rail,.ant-slider-track {
    position: absolute;
    height: 4px;
    border-radius: 2px;
    -webkit-transition: background-color .3s;
    transition: background-color .3s
}

.ant-slider-track {
    background-color: #91d5ff
}

.ant-slider-handle {
    position: absolute;
    width: 14px;
    height: 14px;
    margin-top: -5px;
    background-color: #fff;
    border: 2px solid #91d5ff;
    border-radius: 50%;
    box-shadow: 0;
    cursor: pointer;
    -webkit-transition: border-color .3s,-webkit-box-shadow .6s,-webkit-transform .3s cubic-bezier(.18,.89,.32,1.28);
    -webkit-transition: border-color .3s,box-shadow .6s,-webkit-transform .3s cubic-bezier(.18,.89,.32,1.28);
    transition: border-color .3s,box-shadow .6s,-webkit-transform .3s cubic-bezier(.18,.89,.32,1.28);
    transition: border-color .3s,box-shadow .6s,transform .3s cubic-bezier(.18,.89,.32,1.28);
    transition: border-color .3s,box-shadow .6s,transform .3s cubic-bezier(.18,.89,.32,1.28),-webkit-transform .3s cubic-bezier(.18,.89,.32,1.28)
}

.ant-slider-handle-dragging.ant-slider-handle-dragging.ant-slider-handle-dragging,.ant-slider-handle:focus {
    border-color: #46a6ff;
    box-shadow: 0 0 0 5px rgba(24,144,255,.12)
}

.ant-slider-handle:focus {
    outline: none
}

.ant-slider-handle.ant-tooltip-open {
    border-color: #1890ff
}

.ant-slider:hover .ant-slider-rail {
    background-color: #e1e1e1
}

.ant-slider:hover .ant-slider-track {
    background-color: #69c0ff
}

.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open) {
    border-color: #69c0ff
}

.ant-slider-mark {
    position: absolute;
    top: 14px;
    left: 0;
    width: 100%;
    font-size: 14px
}

.ant-slider-mark-text {
    position: absolute;
    display: inline-block;
    color: rgba(0,0,0,.45);
    text-align: center;
    word-break: keep-all;
    cursor: pointer
}

.ant-slider-mark-text-active {
    color: rgba(0,0,0,.65)
}

.ant-slider-step {
    position: absolute;
    width: 100%;
    height: 4px;
    background: transparent
}

.ant-slider-dot {
    position: absolute;
    top: -2px;
    width: 8px;
    height: 8px;
    background-color: #fff;
    border: 2px solid #f0f0f0;
    border-radius: 50%;
    cursor: pointer
}

.ant-slider-dot,.ant-slider-dot:first-child,.ant-slider-dot:last-child {
    margin-left: -4px
}

.ant-slider-dot-active {
    border-color: #8cc8ff
}

.ant-slider-disabled {
    cursor: not-allowed
}

.ant-slider-disabled .ant-slider-track {
    background-color: rgba(0,0,0,.25)!important
}

.ant-slider-disabled .ant-slider-dot,.ant-slider-disabled .ant-slider-handle {
    background-color: #fff;
    border-color: rgba(0,0,0,.25)!important;
    box-shadow: none;
    cursor: not-allowed
}

.ant-slider-disabled .ant-slider-dot,.ant-slider-disabled .ant-slider-mark-text {
    cursor: not-allowed!important
}

.ant-slider-rtl {
    direction: rtl
}

.ant-slider-rtl .ant-slider-mark {
    right: 0;
    left: auto
}

.ant-slider-rtl .ant-slider-dot,.ant-slider-rtl .ant-slider-dot:first-child,.ant-slider-rtl .ant-slider-dot:last-child {
    margin-right: -4px;
    margin-left: 0
}

.ant-space {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: -webkit-inline-flex;
    display: inline-flex
}

.ant-space-vertical {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column
}

.ant-space-align-center {
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center
}

.ant-space-align-start {
    -webkit-box-align: start;
    -ms-flex-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start
}

.ant-space-align-end {
    -webkit-box-align: end;
    -ms-flex-align: end;
    -webkit-align-items: flex-end;
    align-items: flex-end
}

.ant-space-align-baseline {
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    -webkit-align-items: baseline;
    align-items: baseline
}

.ant-space-rtl {
    direction: rtl
}

.ant-statistic {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum'
}

.ant-statistic-title {
    margin-bottom: 4px;
    color: rgba(0,0,0,.45);
    font-size: 14px
}

.ant-statistic-content {
    color: rgba(0,0,0,.85);
    font-size: 24px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif
}

.ant-statistic-content-value {
    display: inline-block;
    direction: ltr
}

.ant-statistic-content-value-decimal {
    font-size: 16px
}

.ant-statistic-content-prefix,.ant-statistic-content-suffix {
    display: inline-block
}

.ant-statistic-content-prefix {
    margin-right: 4px
}

.ant-statistic-content-suffix {
    margin-left: 4px;
    font-size: 16px
}

.ant-statistic-rtl {
    direction: rtl
}

.ant-statistic-rtl .ant-statistic-content-prefix {
    margin-right: 0;
    margin-left: 4px
}

.ant-statistic-rtl .ant-statistic-content-suffix {
    margin-right: 4px;
    margin-left: 0
}

.ant-steps {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    width: 100%;
    font-size: 0
}

.ant-steps-item {
    position: relative;
    display: inline-block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    overflow: hidden;
    vertical-align: top
}

.ant-steps-item-container {
    outline: none
}

.ant-steps-item:last-child {
    -webkit-box-flex: 0;
    -ms-flex: none;
    -webkit-flex: none;
    flex: none
}

.ant-steps-item:last-child>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title:after,.ant-steps-item:last-child>.ant-steps-item-container>.ant-steps-item-tail {
    display: none
}

.ant-steps-item-content,.ant-steps-item-icon {
    display: inline-block;
    vertical-align: top
}

.ant-steps-item-icon {
    width: 32px;
    height: 32px;
    margin: 0 8px 0 0;
    font-size: 16px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;
    line-height: 32px;
    text-align: center;
    border: 1px solid rgba(0,0,0,.25);
    border-radius: 32px;
    -webkit-transition: background-color .3s,border-color .3s;
    transition: background-color .3s,border-color .3s
}

.ant-steps-item-icon>.ant-steps-icon {
    position: relative;
    top: -1px;
    color: #1890ff;
    line-height: 1
}

.ant-steps-item-tail {
    position: absolute;
    top: 12px;
    left: 0;
    width: 100%;
    padding: 0 10px
}

.ant-steps-item-tail:after {
    display: inline-block;
    width: 100%;
    height: 1px;
    background: #f0f0f0;
    border-radius: 1px;
    -webkit-transition: background .3s;
    transition: background .3s;
    content: ''
}

.ant-steps-item-title {
    position: relative;
    display: inline-block;
    padding-right: 16px;
    color: rgba(0,0,0,.65);
    font-size: 16px;
    line-height: 32px
}

.ant-steps-item-title:after {
    position: absolute;
    top: 16px;
    left: 100%;
    display: block;
    width: 9999px;
    height: 1px;
    background: #f0f0f0;
    content: ''
}

.ant-steps-item-subtitle {
    display: inline;
    margin-left: 8px;
    font-weight: 400
}

.ant-steps-item-description,.ant-steps-item-subtitle {
    color: rgba(0,0,0,.45);
    font-size: 14px
}

.ant-steps-item-wait .ant-steps-item-icon {
    background-color: #fff;
    border-color: rgba(0,0,0,.25)
}

.ant-steps-item-wait .ant-steps-item-icon>.ant-steps-icon {
    color: rgba(0,0,0,.25)
}

.ant-steps-item-wait .ant-steps-item-icon>.ant-steps-icon .ant-steps-icon-dot {
    background: rgba(0,0,0,.25)
}

.ant-steps-item-wait>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title {
    color: rgba(0,0,0,.45)
}

.ant-steps-item-wait>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title:after {
    background-color: #f0f0f0
}

.ant-steps-item-wait>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-description {
    color: rgba(0,0,0,.45)
}

.ant-steps-item-wait>.ant-steps-item-container>.ant-steps-item-tail:after {
    background-color: #f0f0f0
}

.ant-steps-item-process .ant-steps-item-icon {
    background-color: #fff;
    border-color: #1890ff
}

.ant-steps-item-process .ant-steps-item-icon>.ant-steps-icon {
    color: #1890ff
}

.ant-steps-item-process .ant-steps-item-icon>.ant-steps-icon .ant-steps-icon-dot {
    background: #1890ff
}

.ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title {
    color: rgba(0,0,0,.85)
}

.ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title:after {
    background-color: #f0f0f0
}

.ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-description {
    color: rgba(0,0,0,.65)
}

.ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-tail:after {
    background-color: #f0f0f0
}

.ant-steps-item-process .ant-steps-item-icon {
    background: #1890ff
}

.ant-steps-item-process .ant-steps-item-icon>.ant-steps-icon {
    color: #fff
}

.ant-steps-item-process .ant-steps-item-title {
    font-weight: 500
}

.ant-steps-item-finish .ant-steps-item-icon {
    background-color: #fff;
    border-color: #1890ff
}

.ant-steps-item-finish .ant-steps-item-icon>.ant-steps-icon {
    color: #1890ff
}

.ant-steps-item-finish .ant-steps-item-icon>.ant-steps-icon .ant-steps-icon-dot {
    background: #1890ff
}

.ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title {
    color: rgba(0,0,0,.65)
}

.ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title:after {
    background-color: #1890ff
}

.ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-description {
    color: rgba(0,0,0,.45)
}

.ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-tail:after {
    background-color: #1890ff
}

.ant-steps-item-error .ant-steps-item-icon {
    background-color: #fff;
    border-color: #ff4d4f
}

.ant-steps-item-error .ant-steps-item-icon>.ant-steps-icon {
    color: #ff4d4f
}

.ant-steps-item-error .ant-steps-item-icon>.ant-steps-icon .ant-steps-icon-dot {
    background: #ff4d4f
}

.ant-steps-item-error>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title {
    color: #ff4d4f
}

.ant-steps-item-error>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title:after {
    background-color: #f0f0f0
}

.ant-steps-item-error>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-description {
    color: #ff4d4f
}

.ant-steps-item-error>.ant-steps-item-container>.ant-steps-item-tail:after {
    background-color: #f0f0f0
}

.ant-steps-item.ant-steps-next-error .ant-steps-item-title:after {
    background: #ff4d4f
}

.ant-steps-item-disabled {
    cursor: not-allowed
}

.ant-steps .ant-steps-item:not(.ant-steps-item-active)>.ant-steps-item-container[role=button] {
    cursor: pointer
}

.ant-steps .ant-steps-item:not(.ant-steps-item-active)>.ant-steps-item-container[role=button] .ant-steps-item-description,.ant-steps .ant-steps-item:not(.ant-steps-item-active)>.ant-steps-item-container[role=button] .ant-steps-item-icon .ant-steps-icon,.ant-steps .ant-steps-item:not(.ant-steps-item-active)>.ant-steps-item-container[role=button] .ant-steps-item-title {
    -webkit-transition: color .3s;
    transition: color .3s
}

.ant-steps .ant-steps-item:not(.ant-steps-item-active)>.ant-steps-item-container[role=button]:hover .ant-steps-item-description,.ant-steps .ant-steps-item:not(.ant-steps-item-active)>.ant-steps-item-container[role=button]:hover .ant-steps-item-subtitle,.ant-steps .ant-steps-item:not(.ant-steps-item-active)>.ant-steps-item-container[role=button]:hover .ant-steps-item-title {
    color: #1890ff
}

.ant-steps .ant-steps-item:not(.ant-steps-item-active):not(.ant-steps-item-process)>.ant-steps-item-container[role=button]:hover .ant-steps-item-icon {
    border-color: #1890ff
}

.ant-steps .ant-steps-item:not(.ant-steps-item-active):not(.ant-steps-item-process)>.ant-steps-item-container[role=button]:hover .ant-steps-item-icon .ant-steps-icon {
    color: #1890ff
}

.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {
    margin-right: 16px;
    white-space: nowrap
}

.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child {
    margin-right: 0
}

.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child .ant-steps-item-title {
    padding-right: 0
}

.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item-tail {
    display: none
}

.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item-description {
    max-width: 140px;
    white-space: normal
}

.ant-steps-item-custom .ant-steps-item-icon {
    height: auto;
    background: none;
    border: 0
}

.ant-steps-item-custom .ant-steps-item-icon>.ant-steps-icon {
    top: 0;
    left: .5px;
    width: 32px;
    height: 32px;
    font-size: 24px;
    line-height: 32px
}

.ant-steps-item-custom.ant-steps-item-process .ant-steps-item-icon>.ant-steps-icon {
    color: #1890ff
}

.ant-steps:not(.ant-steps-vertical) .ant-steps-item-custom .ant-steps-item-icon {
    width: auto;
    background: none
}

.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {
    margin-right: 12px
}

.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child {
    margin-right: 0
}

.ant-steps-small .ant-steps-item-icon {
    width: 24px;
    height: 24px;
    margin: 0 8px 0 0;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    border-radius: 24px
}

.ant-steps-small .ant-steps-item-title {
    padding-right: 12px;
    font-size: 14px;
    line-height: 24px
}

.ant-steps-small .ant-steps-item-title:after {
    top: 12px
}

.ant-steps-small .ant-steps-item-description {
    color: rgba(0,0,0,.45);
    font-size: 14px
}

.ant-steps-small .ant-steps-item-tail {
    top: 8px
}

.ant-steps-small .ant-steps-item-custom .ant-steps-item-icon {
    width: inherit;
    height: inherit;
    line-height: inherit;
    background: none;
    border: 0;
    border-radius: 0
}

.ant-steps-small .ant-steps-item-custom .ant-steps-item-icon>.ant-steps-icon {
    font-size: 24px;
    line-height: 24px;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none
}

.ant-steps-vertical {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column
}

.ant-steps-vertical .ant-steps-item {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    -webkit-flex: 1 0 auto;
    flex: 1 0 auto;
    overflow: visible
}

.ant-steps-vertical .ant-steps-item-icon {
    float: left;
    margin: 0 16px 0 0
}

.ant-steps-vertical .ant-steps-item-content {
    display: block;
    min-height: 48px;
    overflow: hidden
}

.ant-steps-vertical .ant-steps-item-title {
    line-height: 32px
}

.ant-steps-vertical .ant-steps-item-description {
    padding-bottom: 12px
}

.ant-steps-vertical>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail {
    position: absolute;
    top: 0;
    left: 16px;
    width: 1px;
    height: 100%;
    padding: 38px 0 6px
}

.ant-steps-vertical>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail:after {
    width: 1px;
    height: 100%
}

.ant-steps-vertical>.ant-steps-item:not(:last-child)>.ant-steps-item-container>.ant-steps-item-tail {
    display: block
}

.ant-steps-vertical>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title:after {
    display: none
}

.ant-steps-vertical.ant-steps-small .ant-steps-item-container .ant-steps-item-tail {
    position: absolute;
    top: 0;
    left: 12px;
    padding: 30px 0 6px
}

.ant-steps-vertical.ant-steps-small .ant-steps-item-container .ant-steps-item-title {
    line-height: 24px
}

.ant-steps-rtl.ant-steps-vertical .ant-steps-item-icon {
    float: right;
    margin-right: 0;
    margin-left: 16px
}

.ant-steps-rtl.ant-steps-vertical>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail {
    right: 16px;
    left: auto
}

.ant-steps-rtl.ant-steps-vertical.ant-steps-small .ant-steps-item-container .ant-steps-item-tail {
    right: 12px;
    left: auto
}

@media (max-width: 480px) {
    .ant-steps-horizontal.ant-steps-label-horizontal {
        display:-webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column
    }

    .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item {
        display: block;
        -webkit-box-flex: 1;
        -ms-flex: 1 0 auto;
        -webkit-flex: 1 0 auto;
        flex: 1 0 auto;
        overflow: visible
    }

    .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-icon {
        float: left;
        margin: 0 16px 0 0
    }

    .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-content {
        display: block;
        min-height: 48px;
        overflow: hidden
    }

    .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-title {
        line-height: 32px
    }

    .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-description {
        padding-bottom: 12px
    }

    .ant-steps-horizontal.ant-steps-label-horizontal>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail {
        position: absolute;
        top: 0;
        left: 16px;
        width: 1px;
        height: 100%;
        padding: 38px 0 6px
    }

    .ant-steps-horizontal.ant-steps-label-horizontal>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail:after {
        width: 1px;
        height: 100%
    }

    .ant-steps-horizontal.ant-steps-label-horizontal>.ant-steps-item:not(:last-child)>.ant-steps-item-container>.ant-steps-item-tail {
        display: block
    }

    .ant-steps-horizontal.ant-steps-label-horizontal>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title:after {
        display: none
    }

    .ant-steps-horizontal.ant-steps-label-horizontal.ant-steps-small .ant-steps-item-container .ant-steps-item-tail {
        position: absolute;
        top: 0;
        left: 12px;
        padding: 30px 0 6px
    }

    .ant-steps-horizontal.ant-steps-label-horizontal.ant-steps-small .ant-steps-item-container .ant-steps-item-title {
        line-height: 24px
    }

    .ant-steps-rtl.ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-icon {
        float: right;
        margin-right: 0;
        margin-left: 16px
    }

    .ant-steps-rtl.ant-steps-horizontal.ant-steps-label-horizontal>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail {
        right: 16px;
        left: auto
    }

    .ant-steps-rtl.ant-steps-horizontal.ant-steps-label-horizontal.ant-steps-small .ant-steps-item-container .ant-steps-item-tail {
        right: 12px;
        left: auto
    }
}

.ant-steps-label-vertical .ant-steps-item {
    overflow: visible
}

.ant-steps-label-vertical .ant-steps-item-tail {
    margin-left: 58px;
    padding: 3.5px 24px
}

.ant-steps-label-vertical .ant-steps-item-content {
    display: block;
    width: 116px;
    margin-top: 8px;
    text-align: center
}

.ant-steps-label-vertical .ant-steps-item-icon {
    display: inline-block;
    margin-left: 42px
}

.ant-steps-label-vertical .ant-steps-item-title {
    padding-right: 0;
    padding-left: 0
}

.ant-steps-label-vertical .ant-steps-item-title:after {
    display: none
}

.ant-steps-label-vertical .ant-steps-item-subtitle {
    display: block;
    margin-bottom: 4px;
    margin-left: 0;
    line-height: 1.5715
}

.ant-steps-label-vertical.ant-steps-small:not(.ant-steps-dot) .ant-steps-item-icon {
    margin-left: 46px
}

.ant-steps-dot .ant-steps-item-title,.ant-steps-dot.ant-steps-small .ant-steps-item-title {
    line-height: 1.5715
}

.ant-steps-dot .ant-steps-item-tail,.ant-steps-dot.ant-steps-small .ant-steps-item-tail {
    top: 2px;
    width: 100%;
    margin: 0 0 0 70px;
    padding: 0
}

.ant-steps-dot .ant-steps-item-tail:after,.ant-steps-dot.ant-steps-small .ant-steps-item-tail:after {
    width: calc(100% - 20px);
    height: 3px;
    margin-left: 12px
}

.ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot,.ant-steps-dot.ant-steps-small .ant-steps-item:first-child .ant-steps-icon-dot {
    left: 2px
}

.ant-steps-dot .ant-steps-item-icon,.ant-steps-dot.ant-steps-small .ant-steps-item-icon {
    width: 8px;
    height: 8px;
    margin-left: 67px;
    padding-right: 0;
    line-height: 8px;
    background: transparent;
    border: 0
}

.ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot,.ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot {
    position: relative;
    float: left;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot:after,.ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot:after {
    position: absolute;
    top: -12px;
    left: -26px;
    width: 60px;
    height: 32px;
    background: rgba(0,0,0,.001);
    content: ''
}

.ant-steps-dot .ant-steps-item-content,.ant-steps-dot.ant-steps-small .ant-steps-item-content {
    width: 140px
}

.ant-steps-dot .ant-steps-item-process .ant-steps-item-icon,.ant-steps-dot.ant-steps-small .ant-steps-item-process .ant-steps-item-icon {
    position: relative;
    top: -1px;
    width: 10px;
    height: 10px;
    line-height: 10px
}

.ant-steps-vertical.ant-steps-dot .ant-steps-item-icon {
    margin-top: 8px;
    margin-left: 0;
    background: none
}

.ant-steps-vertical.ant-steps-dot .ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail {
    top: 2px;
    left: -9px;
    margin: 0;
    padding: 22px 0 4px
}

.ant-steps-vertical.ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot {
    left: 0
}

.ant-steps-vertical.ant-steps-dot .ant-steps-item-process .ant-steps-icon-dot {
    left: -2px
}

.ant-steps-navigation {
    padding-top: 12px
}

.ant-steps-navigation.ant-steps-small .ant-steps-item-container {
    margin-left: -12px
}

.ant-steps-navigation .ant-steps-item {
    overflow: visible;
    text-align: center
}

.ant-steps-navigation .ant-steps-item-container {
    display: inline-block;
    height: 100%;
    margin-left: -16px;
    padding-bottom: 12px;
    text-align: left;
    -webkit-transition: opacity .3s;
    transition: opacity .3s
}

.ant-steps-navigation .ant-steps-item-container .ant-steps-item-content {
    max-width: auto
}

.ant-steps-navigation .ant-steps-item-container .ant-steps-item-title {
    max-width: 100%;
    padding-right: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.ant-steps-navigation .ant-steps-item-container .ant-steps-item-title:after {
    display: none
}

.ant-steps-navigation .ant-steps-item:not(.ant-steps-item-active) .ant-steps-item-container[role=button] {
    cursor: pointer
}

.ant-steps-navigation .ant-steps-item:not(.ant-steps-item-active) .ant-steps-item-container[role=button]:hover {
    opacity: .85
}

.ant-steps-navigation .ant-steps-item:last-child {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    -webkit-flex: 1;
    flex: 1
}

.ant-steps-navigation .ant-steps-item:last-child:after {
    display: none
}

.ant-steps-navigation .ant-steps-item:after {
    position: absolute;
    top: 50%;
    left: 100%;
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-top: -14px;
    margin-left: -2px;
    border: 1px solid rgba(0,0,0,.25);
    border-bottom: none;
    border-left: none;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    content: ''
}

.ant-steps-navigation .ant-steps-item:before {
    position: absolute;
    bottom: 0;
    left: 50%;
    display: inline-block;
    width: 0;
    height: 3px;
    background-color: #1890ff;
    -webkit-transition: width .3s,left .3s;
    transition: width .3s,left .3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    content: ''
}

.ant-steps-navigation .ant-steps-item.ant-steps-item-active:before {
    left: 0;
    width: 100%
}

@media (max-width: 480px) {
    .ant-steps-navigation>.ant-steps-item {
        margin-right:0!important
    }

    .ant-steps-navigation>.ant-steps-item:before {
        display: none
    }

    .ant-steps-navigation>.ant-steps-item.ant-steps-item-active:before {
        top: 0;
        right: 0;
        left: unset;
        display: block;
        width: 3px;
        height: calc(100% - 24px)
    }

    .ant-steps-navigation>.ant-steps-item:after {
        position: relative;
        top: -2px;
        left: 50%;
        display: block;
        width: 8px;
        height: 8px;
        margin-bottom: 8px;
        text-align: center;
        -webkit-transform: rotate(135deg);
        -ms-transform: rotate(135deg);
        transform: rotate(135deg)
    }

    .ant-steps-navigation>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail {
        visibility: hidden
    }
}

.ant-steps-rtl {
    direction: rtl
}

.ant-steps.ant-steps-rtl .ant-steps-item-icon {
    margin-right: 0;
    margin-left: 8px
}

.ant-steps-rtl .ant-steps-item-tail {
    right: 0;
    left: auto
}

.ant-steps-rtl .ant-steps-item-title {
    padding-right: 0;
    padding-left: 16px
}

.ant-steps-rtl .ant-steps-item-title:after {
    right: 100%;
    left: auto
}

.ant-steps-rtl.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {
    margin-right: 0;
    margin-left: 16px
}

.ant-steps-rtl.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child {
    margin-left: 0
}

.ant-steps-rtl.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child .ant-steps-item-title {
    padding-left: 0
}

.ant-steps-rtl .ant-steps-item-custom .ant-steps-item-icon>.ant-steps-icon {
    right: .5px;
    left: auto
}

.ant-steps-rtl.ant-steps-navigation.ant-steps-small .ant-steps-item-container {
    margin-right: -12px;
    margin-left: 0
}

.ant-steps-rtl.ant-steps-navigation .ant-steps-item-container {
    margin-right: -16px;
    margin-left: 0;
    text-align: right
}

.ant-steps-rtl.ant-steps-navigation .ant-steps-item-container .ant-steps-item-title {
    padding-left: 0
}

.ant-steps-rtl.ant-steps-navigation .ant-steps-item:after {
    right: 100%;
    left: auto;
    margin-right: -2px;
    margin-left: 0;
    -webkit-transform: rotate(225deg);
    -ms-transform: rotate(225deg);
    transform: rotate(225deg)
}

.ant-steps-rtl.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {
    margin-right: 0;
    margin-left: 12px
}

.ant-steps-rtl.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child {
    margin-left: 0
}

.ant-steps-rtl.ant-steps-small .ant-steps-item-title {
    padding-right: 0;
    padding-left: 12px
}

.ant-steps-rtl.ant-steps-label-vertical .ant-steps-item-title {
    padding-left: 0
}

.ant-steps-rtl.ant-steps-dot .ant-steps-item-tail,.ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item-tail {
    margin: 0 70px 0 0
}

.ant-steps-rtl.ant-steps-dot .ant-steps-item-tail:after,.ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item-tail:after {
    margin-right: 12px;
    margin-left: 0
}

.ant-steps-rtl.ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot,.ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item:first-child .ant-steps-icon-dot {
    right: 2px;
    left: auto
}

.ant-steps-rtl.ant-steps-dot .ant-steps-item-icon,.ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item-icon {
    margin-right: 67px;
    margin-left: 0
}

.ant-steps-rtl.ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot,.ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot {
    float: right
}

.ant-steps-rtl.ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot:after,.ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot:after {
    right: -26px;
    left: auto
}

.ant-steps-rtl.ant-steps-vertical.ant-steps-dot .ant-steps-item-icon {
    margin-right: 0;
    margin-left: 16px
}

.ant-steps-rtl.ant-steps-vertical.ant-steps-dot .ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail {
    right: -9px;
    left: auto
}

.ant-steps-rtl.ant-steps-vertical.ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot {
    right: 0;
    left: auto
}

.ant-steps-rtl.ant-steps-vertical.ant-steps-dot .ant-steps-item-process .ant-steps-icon-dot {
    right: -2px;
    left: auto
}

.ant-switch {
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    min-width: 44px;
    height: 22px;
    line-height: 20px;
    vertical-align: middle;
    background-color: rgba(0,0,0,.25);
    border: 1px solid transparent;
    border-radius: 100px;
    cursor: pointer;
    -webkit-transition: all .36s;
    transition: all .36s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.ant-switch-inner {
    display: block;
    margin: 0 24px 0 6px;
    color: #fff;
    font-size: 12px
}

.ant-switch-loading-icon,.ant-switch:after {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border-radius: 18px;
    cursor: pointer;
    -webkit-transition: all .36s cubic-bezier(.78,.14,.15,.86);
    transition: all .36s cubic-bezier(.78,.14,.15,.86);
    content: ' '
}

.ant-switch:after {
    box-shadow: 0 2px 4px 0 rgba(0,35,11,.2)
}

.ant-switch:not(.ant-switch-disabled):active:after,.ant-switch:not(.ant-switch-disabled):active:before {
    width: 24px
}

.ant-switch-loading-icon {
    z-index: 1;
    display: none;
    font-size: 12px;
    background: transparent
}

.ant-switch-loading-icon svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto
}

.ant-switch-loading .ant-switch-loading-icon {
    display: inline-block;
    color: rgba(0,0,0,.65)
}

.ant-switch-checked.ant-switch-loading .ant-switch-loading-icon {
    color: #1890ff
}

.ant-switch:focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24,144,255,.2)
}

.ant-switch:focus:hover {
    box-shadow: none
}

.ant-switch-small {
    min-width: 28px;
    height: 16px;
    line-height: 14px
}

.ant-switch-small .ant-switch-inner {
    margin-right: 3px;
    margin-left: 18px;
    font-size: 12px
}

.ant-switch-small:after {
    width: 12px;
    height: 12px
}

.ant-switch-small:active:after,.ant-switch-small:active:before {
    width: 16px
}

.ant-switch-small .ant-switch-loading-icon {
    width: 12px;
    height: 12px
}

.ant-switch-small.ant-switch-checked .ant-switch-inner {
    margin-right: 18px;
    margin-left: 3px
}

.ant-switch-small.ant-switch-checked .ant-switch-loading-icon {
    left: 100%;
    margin-left: -13px
}

.ant-switch-small.ant-switch-loading .ant-switch-loading-icon {
    font-weight: 700;
    -webkit-transform: scale(.66667);
    -ms-transform: scale(.66667);
    transform: scale(.66667)
}

.ant-switch-checked {
    background-color: #1890ff
}

.ant-switch-checked .ant-switch-inner {
    margin: 0 24px 0 6px
}

.ant-switch-checked:after {
    left: 100%;
    margin-left: -1px;
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%)
}

.ant-switch-checked .ant-switch-loading-icon {
    left: 100%;
    margin-left: -19px
}

.ant-switch-disabled,.ant-switch-loading {
    cursor: not-allowed;
    opacity: .4
}

.ant-switch-disabled *,.ant-switch-disabled:after,.ant-switch-disabled:before,.ant-switch-loading *,.ant-switch-loading:after,.ant-switch-loading:before {
    cursor: not-allowed
}

@-webkit-keyframes AntSwitchSmallLoadingCircle {
    0% {
        -webkit-transform: rotate(0deg) scale(.66667);
        transform: rotate(0deg) scale(.66667);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%
    }

    to {
        -webkit-transform: rotate(1turn) scale(.66667);
        transform: rotate(1turn) scale(.66667);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%
    }
}

@keyframes AntSwitchSmallLoadingCircle {
    0% {
        -webkit-transform: rotate(0deg) scale(.66667);
        transform: rotate(0deg) scale(.66667);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%
    }

    to {
        -webkit-transform: rotate(1turn) scale(.66667);
        transform: rotate(1turn) scale(.66667);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%
    }
}

.ant-switch-rtl {
    direction: rtl
}

.ant-switch-rtl .ant-switch-inner {
    margin-right: 24px;
    margin-left: 6px
}

.ant-switch-rtl.ant-switch-loading-icon,.ant-switch-rtl.ant-switch:after {
    left: 100%;
    margin-left: -1px;
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%)
}

.ant-switch-rtl.ant-switch-small .ant-switch-inner {
    margin-right: 18px;
    margin-left: 3px
}

.ant-switch-rtl.ant-switch-small .ant-switch-loading-icon {
    margin-left: 12px
}

.ant-switch-rtl.ant-switch-small.ant-switch-checked .ant-switch-inner {
    margin-right: 3px;
    margin-left: 18px
}

.ant-switch-rtl.ant-switch-checked .ant-switch-inner {
    margin-right: 6px;
    margin-left: 24px
}

.ant-switch-rtl.ant-switch-checked:after {
    left: 1px;
    margin-left: 0;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0)
}

.ant-switch-rtl.ant-switch-checked .ant-switch-loading-icon {
    margin-left: -41px
}

.ant-table.ant-table-middle .ant-table-footer,.ant-table.ant-table-middle .ant-table-tbody>tr>td,.ant-table.ant-table-middle .ant-table-thead>tr>th,.ant-table.ant-table-middle .ant-table-title,.ant-table.ant-table-middle tfoot>tr>td,.ant-table.ant-table-middle tfoot>tr>th {
    padding: 12px 8px
}

.ant-table.ant-table-middle .ant-table-thead th.ant-table-column-has-sorters {
    padding: 0
}

.ant-table.ant-table-middle .ant-table-thead .ant-table-filter-column {
    margin: -12px -8px
}

.ant-table.ant-table-middle .ant-table-thead .ant-table-filter-column-title {
    padding: 12px 2.3em 12px 8px
}

.ant-table.ant-table-middle .ant-table-thead .ant-table-column-sorters {
    padding: 12px 8px
}

.ant-table.ant-table-middle .ant-table-expanded-row-fixed {
    margin: -12px -8px
}

.ant-table.ant-table-middle .ant-table-tbody .ant-table-wrapper:only-child .ant-table {
    margin: -12px -8px -12px 25px
}

.ant-table.ant-table-small .ant-table-footer,.ant-table.ant-table-small .ant-table-tbody>tr>td,.ant-table.ant-table-small .ant-table-thead>tr>th,.ant-table.ant-table-small .ant-table-title,.ant-table.ant-table-small tfoot>tr>td,.ant-table.ant-table-small tfoot>tr>th {
    padding: 8px
}

.ant-table.ant-table-small .ant-table-thead th.ant-table-column-has-sorters {
    padding: 0
}

.ant-table.ant-table-small .ant-table-thead .ant-table-filter-column {
    margin: -8px
}

.ant-table.ant-table-small .ant-table-thead .ant-table-filter-column-title {
    padding: 8px 2.3em 8px 8px
}

.ant-table.ant-table-small .ant-table-thead .ant-table-column-sorters {
    padding: 8px
}

.ant-table.ant-table-small .ant-table-expanded-row-fixed {
    margin: -8px
}

.ant-table.ant-table-small .ant-table-tbody .ant-table-wrapper:only-child .ant-table {
    margin: -8px -8px -8px 25px
}

.ant-table-small .ant-table-thead>tr>th {
    background-color: #fafafa
}

.ant-table-small .ant-table-selection-column {
    width: 46px;
    min-width: 46px
}

.ant-table.ant-table-bordered .ant-table-title {
    border: 1px solid #f0f0f0;
    border-bottom: 0
}

.ant-table.ant-table-bordered .ant-table-cell-fix-right-first:after,.ant-table.ant-table-bordered tbody>tr>td,.ant-table.ant-table-bordered tfoot>tr>td,.ant-table.ant-table-bordered tfoot>tr>th,.ant-table.ant-table-bordered thead>tr>th {
    border-right: 1px solid #f0f0f0
}

.ant-table.ant-table-bordered table thead>tr:not(:last-child)>th {
    border-bottom: 1px solid #f0f0f0
}

.ant-table.ant-table-bordered .ant-table-container {
    border: 1px solid #f0f0f0;
    border-right: 0;
    border-bottom: 0
}

.ant-table.ant-table-bordered .ant-table-expanded-row-fixed {
    margin: -16px -17px
}

.ant-table.ant-table-bordered .ant-table-expanded-row-fixed:after {
    position: absolute;
    top: 0;
    right: 1px;
    bottom: 0;
    border-right: 1px solid #f0f0f0;
    content: ''
}

.ant-table.ant-table-bordered.ant-table-scroll-horizontal tr.ant-table-expanded-row>td,.ant-table.ant-table-bordered.ant-table-scroll-horizontal tr.ant-table-placeholder>td {
    border-right: 0
}

.ant-table.ant-table-bordered.ant-table-middle .ant-table-expanded-row-fixed {
    margin: -12px -9px
}

.ant-table.ant-table-bordered.ant-table-small .ant-table-expanded-row-fixed {
    margin: -8px -9px
}

.ant-table.ant-table-bordered .ant-table-footer {
    border: 1px solid #f0f0f0;
    border-top: 0
}

.ant-table-wrapper:before {
    display: table;
    content: ''
}

.ant-table-wrapper:after {
    display: table;
    clear: both;
    content: ''
}

.ant-table {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    z-index: 0;
    clear: both;
    background: #fff;
    border-radius: 2px
}

.ant-table table {
    width: 100%;
    text-align: left;
    border-radius: 2px 2px 0 0;
    border-collapse: separate;
    border-spacing: 0
}

.ant-table-tbody>tr>td,.ant-table-thead>tr>th,.ant-table tfoot>tr>td,.ant-table tfoot>tr>th {
    position: relative;
    padding: 16px;
    overflow-wrap: break-word
}

.ant-table-cell-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: keep-all
}

.ant-table-cell-ellipsis.ant-table-cell-fix-left-last,.ant-table-cell-ellipsis.ant-table-cell-fix-right-first {
    overflow: visible
}

.ant-table-cell-ellipsis.ant-table-cell-fix-left-last .ant-table-cell-content,.ant-table-cell-ellipsis.ant-table-cell-fix-right-first .ant-table-cell-content {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis
}

.ant-table-title {
    padding: 16px
}

.ant-table-footer {
    padding: 16px;
    color: rgba(0,0,0,.85);
    background: #fafafa
}

.ant-table-thead>tr>th {
    color: rgba(0,0,0,.85);
    font-weight: 500;
    text-align: left;
    background: #fafafa;
    border-bottom: 1px solid #f0f0f0;
    -webkit-transition: background .3s ease;
    transition: background .3s ease
}

.ant-table-thead>tr>th[colspan]:not([colspan='1']) {
    text-align: center
}

.ant-table-thead>tr:not(:last-child)>th[colspan] {
    border-bottom: 0
}

.ant-table-tbody>tr>td {
    border-bottom: 1px solid #f0f0f0;
    -webkit-transition: background .3s;
    transition: background .3s
}

.ant-table-tbody>tr.ant-table-row:hover>td {
    background: #fafafa
}

.ant-table-tbody>tr.ant-table-row-selected>td {
    background: #e6f7ff;
    border-color: rgba(0,0,0,.03)
}

.ant-table-tbody>tr.ant-table-row-selected:hover>td {
    background: #dcf4ff
}

.ant-table-tbody>tr .ant-table-wrapper:only-child .ant-table {
    margin: -16px -16px -16px 33px
}

.ant-table-tbody>tr .ant-table-wrapper:only-child .ant-table td {
    background: transparent
}

.ant-table-tbody>tr .ant-table-wrapper:only-child .ant-table-tbody>tr:last-child>td {
    border-bottom: 0
}

.ant-table-tbody>tr .ant-table-wrapper:only-child .ant-table-tbody>tr:last-child>td:first-child,.ant-table-tbody>tr .ant-table-wrapper:only-child .ant-table-tbody>tr:last-child>td:last-child {
    border-radius: 0
}

.ant-table tfoot>tr>td,.ant-table tfoot>tr>th {
    border-bottom: 1px solid #f0f0f0
}

.ant-table-pagination.ant-pagination {
    margin: 16px 0
}

.ant-table-pagination-left {
    float: left
}

.ant-table-pagination-center {
    text-align: center
}

.ant-table-pagination-right {
    float: right
}

.ant-table-thead th.ant-table-column-has-sorters {
    padding: 0;
    cursor: pointer;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-table-thead th.ant-table-column-has-sorters:hover {
    background: #f2f2f2
}

.ant-table-thead th.ant-table-column-has-sorters:hover .ant-table-filter-trigger-container {
    background: #f7f7f7
}

.ant-table-thead th.ant-table-column-sort {
    background: #f5f5f5
}

td.ant-table-column-sort {
    background: #fafafa
}

.ant-table-column-sorters-with-tooltip {
    display: inline-block;
    width: 100%
}

.ant-table-column-sorters {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: -webkit-inline-flex;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 16px
}

.ant-table-column-sorter {
    margin-top: .15em;
    margin-bottom: -.15em;
    margin-left: 8px;
    color: #bfbfbf
}

.ant-table-column-sorter-full {
    margin-top: -.2em;
    margin-bottom: 0
}

.ant-table-column-sorter-inner {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: -webkit-inline-flex;
    display: inline-flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center
}

.ant-table-column-sorter-down,.ant-table-column-sorter-up {
    display: inline-block;
    font-size: 11px
}

.ant-table-column-sorter-down.active,.ant-table-column-sorter-up.active {
    color: #1890ff
}

.ant-table-column-sorter-up+.ant-table-column-sorter-down {
    margin-top: -.3em
}

.ant-table-filter-column {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    margin: -16px
}

.ant-table-filter-column-title {
    -webkit-box-flex: 1;
    -ms-flex: auto;
    -webkit-flex: auto;
    flex: auto;
    padding: 16px 2.3em 16px 16px
}

.ant-table-thead tr th.ant-table-column-has-sorters .ant-table-filter-column {
    margin: 0
}

.ant-table-thead tr th.ant-table-column-has-sorters .ant-table-filter-column-title {
    padding: 0 2.3em 0 0
}

.ant-table-filter-trigger-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: none;
    -webkit-flex: none;
    flex: none;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    -webkit-align-items: stretch;
    align-items: stretch;
    -ms-flex-item-align: stretch;
    -webkit-align-self: stretch;
    align-self: stretch;
    cursor: pointer;
    -webkit-transition: background-color .3s;
    transition: background-color .3s
}

.ant-table-filter-trigger-container-open,.ant-table-filter-trigger-container:hover,.ant-table-thead th.ant-table-column-has-sorters:hover .ant-table-filter-trigger-container:hover {
    background: #e5e5e5
}

.ant-table-filter-trigger {
    display: block;
    width: 2.3em;
    color: #bfbfbf;
    font-size: 12px;
    -webkit-transition: color .3s;
    transition: color .3s
}

.ant-table-filter-trigger .anticon {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%)
}

.ant-table-filter-trigger-container-open .ant-table-filter-trigger,.ant-table-filter-trigger:hover {
    color: rgba(0,0,0,.45)
}

.ant-table-filter-trigger.active {
    color: #1890ff
}

.ant-table-filter-dropdown {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    min-width: 120px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)
}

.ant-table-filter-dropdown .ant-dropdown-menu {
    max-height: calc(100vh - 130px);
    overflow-x: hidden;
    border: 0;
    box-shadow: none
}

.ant-table-filter-dropdown-submenu>ul {
    max-height: calc(100vh - 130px);
    overflow-x: hidden;
    overflow-y: auto
}

.ant-table-filter-dropdown-submenu .ant-checkbox-wrapper+span,.ant-table-filter-dropdown .ant-checkbox-wrapper+span {
    padding-left: 8px
}

.ant-table-filter-dropdown-btns {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    padding: 7px 8px 7px 3px;
    overflow: hidden;
    background-color: inherit;
    border-top: 1px solid #f0f0f0
}

.ant-table colgroup>col.ant-table-selection-col {
    width: 60px
}

table tr td.ant-table-selection-column,table tr th.ant-table-selection-column {
    width: 60px;
    min-width: 60px;
    text-align: center
}

table tr td.ant-table-selection-column .ant-radio-wrapper,table tr th.ant-table-selection-column .ant-radio-wrapper {
    margin-right: 0
}

.ant-table-selection {
    position: relative
}

.ant-table-selection-extra {
    position: absolute;
    top: 0;
    right: -10px;
    cursor: pointer;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-table-selection-extra .anticon {
    display: inline-block;
    font-size: 10px;
    color: #bfbfbf
}

.ant-table-selection-extra .anticon:hover {
    color: #a6a6a6
}

.ant-table-expand-icon-col {
    width: 48px
}

.ant-table-row-expand-icon-cell {
    text-align: center
}

.ant-table-row-indent {
    float: left;
    height: 1px
}

.ant-table-row-expand-icon {
    color: #1890ff;
    text-decoration: none;
    cursor: pointer;
    -webkit-transition: color .3s;
    transition: color .3s;
    position: relative;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: -webkit-inline-flex;
    display: inline-flex;
    float: left;
    box-sizing: border-box;
    width: 17px;
    height: 17px;
    padding: 0;
    color: inherit;
    line-height: 12px;
    vertical-align: -2px;
    background: #fff;
    border: 1px solid #f0f0f0;
    border-radius: 2px;
    outline: none;
    -webkit-transition: all .3s;
    transition: all .3s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.ant-table-row-expand-icon:focus,.ant-table-row-expand-icon:hover {
    color: #40a9ff
}

.ant-table-row-expand-icon:active {
    color: #096dd9
}

.ant-table-row-expand-icon:active,.ant-table-row-expand-icon:focus,.ant-table-row-expand-icon:hover {
    border-color: currentColor
}

.ant-table-row-expand-icon:after,.ant-table-row-expand-icon:before {
    position: absolute;
    background: currentColor;
    -webkit-transition: -webkit-transform .3s ease-out;
    transition: -webkit-transform .3s ease-out;
    transition: transform .3s ease-out;
    transition: transform .3s ease-out,-webkit-transform .3s ease-out;
    content: ''
}

.ant-table-row-expand-icon:before {
    top: 7px;
    right: 3px;
    left: 3px;
    height: 1px
}

.ant-table-row-expand-icon:after {
    top: 3px;
    bottom: 3px;
    left: 7px;
    width: 1px;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg)
}

.ant-table-row-expand-icon-collapsed:before {
    -webkit-transform: rotate(-180deg);
    -ms-transform: rotate(-180deg);
    transform: rotate(-180deg)
}

.ant-table-row-expand-icon-collapsed:after {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg)
}

.ant-table-row-expand-icon-spaced {
    background: transparent;
    border: 0
}

.ant-table-row-expand-icon-spaced:after,.ant-table-row-expand-icon-spaced:before {
    display: none;
    content: none
}

.ant-table-row-indent+.ant-table-row-expand-icon {
    margin-top: 2.5005px;
    margin-right: 8px
}

tr.ant-table-expanded-row:hover>td,tr.ant-table-expanded-row>td {
    background: #fbfbfb
}

.ant-table .ant-table-expanded-row-fixed {
    position: relative;
    margin: -16px;
    padding: 16px
}

.ant-table-tbody>tr.ant-table-placeholder {
    text-align: center
}

.ant-table-tbody>tr.ant-table-placeholder:hover>td {
    background: #fff
}

.ant-table-cell-fix-left,.ant-table-cell-fix-right {
    position: -webkit-sticky!important;
    position: sticky!important;
    z-index: 2;
    background: #fff
}

.ant-table-cell-fix-left-first:after,.ant-table-cell-fix-left-last:after {
    right: 0;
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%)
}

.ant-table-cell-fix-left-first:after,.ant-table-cell-fix-left-last:after,.ant-table-cell-fix-right-first:after,.ant-table-cell-fix-right-last:after {
    position: absolute;
    top: 0;
    bottom: -1px;
    width: 30px;
    -webkit-transition: -webkit-box-shadow .3s;
    -webkit-transition: box-shadow .3s;
    transition: box-shadow .3s;
    content: '';
    pointer-events: none
}

.ant-table-cell-fix-right-first:after,.ant-table-cell-fix-right-last:after {
    left: 0;
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%)
}

.ant-table .ant-table-container:after,.ant-table .ant-table-container:before {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    width: 30px;
    -webkit-transition: -webkit-box-shadow .3s;
    -webkit-transition: box-shadow .3s;
    transition: box-shadow .3s;
    content: '';
    pointer-events: none
}

.ant-table .ant-table-container:before {
    left: 0
}

.ant-table .ant-table-container:after {
    right: 0
}

.ant-table-ping-left:not(.ant-table-has-fix-left) .ant-table-container {
    position: relative
}

.ant-table-ping-left .ant-table-cell-fix-left-first:after,.ant-table-ping-left .ant-table-cell-fix-left-last:after,.ant-table-ping-left:not(.ant-table-has-fix-left) .ant-table-container:before {
    box-shadow: inset 10px 0 8px -8px rgba(0,0,0,.15)
}

.ant-table-ping-right:not(.ant-table-has-fix-right) .ant-table-container {
    position: relative
}

.ant-table-ping-right .ant-table-cell-fix-right-first:after,.ant-table-ping-right .ant-table-cell-fix-right-last:after,.ant-table-ping-right:not(.ant-table-has-fix-right) .ant-table-container:after {
    box-shadow: inset -10px 0 8px -8px rgba(0,0,0,.15)
}

@media all and (-ms-high-contrast:none) {
    .ant-table-ping-left .ant-table-cell-fix-left-last:after,.ant-table-ping-right .ant-table-cell-fix-right-first:after {
        box-shadow: none!important
    }
}

.ant-table-title {
    border-radius: 2px 2px 0 0
}

.ant-table-title+.ant-table-container {
    border-top-left-radius: 0;
    border-top-right-radius: 0
}

.ant-table-title+.ant-table-container table>thead>tr:first-child th:first-child,.ant-table-title+.ant-table-container table>thead>tr:first-child th:last-child {
    border-radius: 0
}

.ant-table-container {
    border-top-right-radius: 2px
}

.ant-table-container,.ant-table-container table>thead>tr:first-child th:first-child {
    border-top-left-radius: 2px
}

.ant-table-container table>thead>tr:first-child th:last-child {
    border-top-right-radius: 2px
}

.ant-table-footer {
    border-radius: 0 0 2px 2px
}

.ant-table-rtl,.ant-table-wrapper-rtl {
    direction: rtl
}

.ant-table-wrapper-rtl .ant-table table {
    text-align: right
}

.ant-table-wrapper-rtl .ant-table-thead>tr>th[colspan]:not([colspan='1']) {
    text-align: center
}

.ant-table-wrapper-rtl .ant-table-thead>tr>th {
    text-align: right
}

.ant-table-tbody>tr .ant-table.ant-table-rtl {
    margin: -16px 33px -16px -16px
}

.ant-table-wrapper.ant-table-wrapper-rtl .ant-table-pagination,.ant-table-wrapper.ant-table-wrapper-rtl .ant-table-pagination-left {
    float: left
}

.ant-table-wrapper.ant-table-wrapper-rtl .ant-table-pagination-right {
    float: right
}

.ant-table-wrapper.ant-table-wrapper-rtl .ant-table-pagination-center {
    float: none;
    text-align: center
}

.ant-table-wrapper-rtl .ant-table-column-sorter {
    margin-right: 8px;
    margin-left: 0
}

.ant-table-wrapper-rtl .ant-table-filter-column-title {
    padding: 16px 16px 16px 2.3em
}

.ant-table-wrapper-rtl .ant-table-filter-trigger-container {
    right: auto;
    left: 0
}

.ant-dropdown-rtl .ant-table-filter-dropdown-submenu .ant-checkbox-wrapper+span,.ant-dropdown-rtl .ant-table-filter-dropdown .ant-checkbox-wrapper+span {
    padding-right: 8px;
    padding-left: 0
}

.ant-table-wrapper-rtl .ant-table-selection {
    text-align: center
}

.ant-table-wrapper-rtl .ant-table-selection-extra {
    right: auto;
    left: -10px
}

.ant-table-wrapper-rtl .ant-table-row-expand-icon,.ant-table-wrapper-rtl .ant-table-row-indent {
    float: right
}

.ant-table-wrapper-rtl .ant-table-row-indent+.ant-table-row-expand-icon {
    margin-right: 0;
    margin-left: 8px
}

.ant-table-wrapper-rtl .ant-table-row-expand-icon:after {
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg)
}

.ant-table-wrapper-rtl .ant-table-row-expand-icon-collapsed:before {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg)
}

.ant-table-wrapper-rtl .ant-table-row-expand-icon-collapsed:after {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg)
}

.ant-timeline {
    box-sizing: border-box;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    margin: 0;
    padding: 0;
    list-style: none
}

.ant-timeline-item {
    position: relative;
    margin: 0;
    padding-bottom: 20px;
    font-size: 14px;
    list-style: none
}

.ant-timeline-item-tail {
    position: absolute;
    top: 10px;
    left: 4px;
    height: calc(100% - 10px);
    border-left: 2px solid #f0f0f0
}

.ant-timeline-item-pending .ant-timeline-item-head {
    font-size: 12px;
    background-color: transparent
}

.ant-timeline-item-pending .ant-timeline-item-tail {
    display: none
}

.ant-timeline-item-head {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #fff;
    border: 2px solid transparent;
    border-radius: 100px
}

.ant-timeline-item-head-blue {
    color: #1890ff;
    border-color: #1890ff
}

.ant-timeline-item-head-red {
    color: #ff4d4f;
    border-color: #ff4d4f
}

.ant-timeline-item-head-green {
    color: #52c41a;
    border-color: #52c41a
}

.ant-timeline-item-head-gray {
    color: rgba(0,0,0,.25);
    border-color: rgba(0,0,0,.25)
}

.ant-timeline-item-head-custom {
    position: absolute;
    top: 5.5px;
    left: 5px;
    width: auto;
    height: auto;
    margin-top: 0;
    padding: 3px 1px;
    line-height: 1;
    text-align: center;
    border: 0;
    border-radius: 0;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%)
}

.ant-timeline-item-content {
    position: relative;
    top: -7.001px;
    margin: 0 0 0 26px;
    word-break: break-word
}

.ant-timeline-item-last>.ant-timeline-item-tail {
    display: none
}

.ant-timeline-item-last>.ant-timeline-item-content {
    min-height: 48px
}

.ant-timeline.ant-timeline-alternate .ant-timeline-item-head,.ant-timeline.ant-timeline-alternate .ant-timeline-item-head-custom,.ant-timeline.ant-timeline-alternate .ant-timeline-item-tail,.ant-timeline.ant-timeline-label .ant-timeline-item-head,.ant-timeline.ant-timeline-label .ant-timeline-item-head-custom,.ant-timeline.ant-timeline-label .ant-timeline-item-tail,.ant-timeline.ant-timeline-right .ant-timeline-item-head,.ant-timeline.ant-timeline-right .ant-timeline-item-head-custom,.ant-timeline.ant-timeline-right .ant-timeline-item-tail {
    left: 50%
}

.ant-timeline.ant-timeline-alternate .ant-timeline-item-head,.ant-timeline.ant-timeline-label .ant-timeline-item-head,.ant-timeline.ant-timeline-right .ant-timeline-item-head {
    margin-left: -4px
}

.ant-timeline.ant-timeline-alternate .ant-timeline-item-head-custom,.ant-timeline.ant-timeline-label .ant-timeline-item-head-custom,.ant-timeline.ant-timeline-right .ant-timeline-item-head-custom {
    margin-left: 1px
}

.ant-timeline.ant-timeline-alternate .ant-timeline-item-left .ant-timeline-item-content,.ant-timeline.ant-timeline-label .ant-timeline-item-left .ant-timeline-item-content,.ant-timeline.ant-timeline-right .ant-timeline-item-left .ant-timeline-item-content {
    left: calc(50% - 4px);
    width: calc(50% - 14px);
    text-align: left
}

.ant-timeline.ant-timeline-alternate .ant-timeline-item-right .ant-timeline-item-content,.ant-timeline.ant-timeline-label .ant-timeline-item-right .ant-timeline-item-content,.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-content {
    width: calc(50% - 12px);
    margin: 0;
    text-align: right
}

.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-head,.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-head-custom,.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-tail {
    left: calc(100% - 4px - 2px)
}

.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-content {
    width: calc(100% - 18px)
}

.ant-timeline.ant-timeline-pending .ant-timeline-item-last .ant-timeline-item-tail {
    display: block;
    height: calc(100% - 14px);
    border-left: 2px dotted #f0f0f0
}

.ant-timeline.ant-timeline-reverse .ant-timeline-item-last .ant-timeline-item-tail {
    display: none
}

.ant-timeline.ant-timeline-reverse .ant-timeline-item-pending .ant-timeline-item-tail {
    top: 15px;
    display: block;
    height: calc(100% - 15px);
    border-left: 2px dotted #f0f0f0
}

.ant-timeline.ant-timeline-reverse .ant-timeline-item-pending .ant-timeline-item-content {
    min-height: 48px
}

.ant-timeline.ant-timeline-label .ant-timeline-item-label {
    position: absolute;
    top: -7.001px;
    width: calc(50% - 12px);
    text-align: right
}

.ant-timeline.ant-timeline-label .ant-timeline-item-right .ant-timeline-item-label {
    left: calc(50% + 14px);
    width: calc(50% - 14px);
    text-align: left
}

.ant-timeline-rtl {
    direction: rtl
}

.ant-timeline-rtl .ant-timeline-item-tail {
    right: 4px;
    left: auto;
    border-right: 2px solid #f0f0f0;
    border-left: none
}

.ant-timeline-rtl .ant-timeline-item-head-custom {
    right: 5px;
    left: auto;
    -webkit-transform: translate(50%,-50%);
    -ms-transform: translate(50%,-50%);
    transform: translate(50%,-50%)
}

.ant-timeline-rtl .ant-timeline-item-content {
    margin: 0 18px 0 0
}

.ant-timeline-rtl.ant-timeline.ant-timeline-alternate .ant-timeline-item-head,.ant-timeline-rtl.ant-timeline.ant-timeline-alternate .ant-timeline-item-head-custom,.ant-timeline-rtl.ant-timeline.ant-timeline-alternate .ant-timeline-item-tail,.ant-timeline-rtl.ant-timeline.ant-timeline-label .ant-timeline-item-head,.ant-timeline-rtl.ant-timeline.ant-timeline-label .ant-timeline-item-head-custom,.ant-timeline-rtl.ant-timeline.ant-timeline-label .ant-timeline-item-tail,.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-head,.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-head-custom,.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-tail {
    right: 50%;
    left: auto
}

.ant-timeline-rtl.ant-timeline.ant-timeline-alternate .ant-timeline-item-head,.ant-timeline-rtl.ant-timeline.ant-timeline-label .ant-timeline-item-head,.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-head {
    margin-right: -4px;
    margin-left: 0
}

.ant-timeline-rtl.ant-timeline.ant-timeline-alternate .ant-timeline-item-head-custom,.ant-timeline-rtl.ant-timeline.ant-timeline-label .ant-timeline-item-head-custom,.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-head-custom {
    margin-right: 1px;
    margin-left: 0
}

.ant-timeline-rtl.ant-timeline.ant-timeline-alternate .ant-timeline-item-left .ant-timeline-item-content,.ant-timeline-rtl.ant-timeline.ant-timeline-label .ant-timeline-item-left .ant-timeline-item-content,.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-left .ant-timeline-item-content {
    right: calc(50% - 4px);
    left: auto;
    text-align: right
}

.ant-timeline-rtl.ant-timeline.ant-timeline-alternate .ant-timeline-item-right .ant-timeline-item-content,.ant-timeline-rtl.ant-timeline.ant-timeline-label .ant-timeline-item-right .ant-timeline-item-content,.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-content {
    text-align: left
}

.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-head,.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-head-custom,.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-tail {
    right: 0;
    left: auto
}

.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-content {
    width: 100%;
    margin-right: 18px;
    text-align: right
}

.ant-timeline-rtl.ant-timeline.ant-timeline-pending .ant-timeline-item-last .ant-timeline-item-tail,.ant-timeline-rtl.ant-timeline.ant-timeline-reverse .ant-timeline-item-pending .ant-timeline-item-tail {
    border-right: 2px dotted #f0f0f0;
    border-left: none
}

.ant-timeline-rtl.ant-timeline.ant-timeline-label .ant-timeline-item-label {
    text-align: left
}

.ant-timeline-rtl.ant-timeline.ant-timeline-label .ant-timeline-item-right .ant-timeline-item-label {
    right: calc(50% + 14px);
    text-align: right
}

.ant-transfer-customize-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex
}

.ant-transfer-customize-list .ant-transfer-operation {
    -webkit-box-flex: 0;
    -ms-flex: none;
    -webkit-flex: none;
    flex: none;
    -ms-flex-item-align: center;
    -webkit-align-self: center;
    -ms-grid-row-align: center;
    align-self: center
}

.ant-transfer-customize-list .ant-transfer-list {
    -webkit-box-flex: 1;
    -ms-flex: auto;
    -webkit-flex: auto;
    flex: auto;
    width: auto;
    height: auto;
    min-height: 200px
}

.ant-transfer-customize-list .ant-transfer-list-body-with-search {
    padding-top: 0
}

.ant-transfer-customize-list .ant-transfer-list-body-search-wrapper {
    position: relative;
    padding-bottom: 0
}

.ant-transfer-customize-list .ant-transfer-list-body-customize-wrapper {
    padding: 12px
}

.ant-transfer-customize-list .ant-table-wrapper .ant-table-small {
    border: 0;
    border-radius: 0
}

.ant-transfer-customize-list .ant-table-wrapper .ant-table-small>.ant-table-content>.ant-table-body>table>.ant-table-thead>tr>th {
    background: #fafafa
}

.ant-transfer-customize-list .ant-table-wrapper .ant-table-small>.ant-table-content .ant-table-row:last-child td {
    border-bottom: 1px solid #f0f0f0
}

.ant-transfer-customize-list .ant-table-wrapper .ant-table-small .ant-table-body {
    margin: 0
}

.ant-transfer-customize-list .ant-table-wrapper .ant-table-pagination.ant-pagination {
    margin: 16px 0 4px
}

.ant-transfer-customize-list .ant-input[disabled] {
    background-color: transparent
}

.ant-transfer {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative
}

.ant-transfer-disabled .ant-transfer-list {
    background: #f5f5f5
}

.ant-transfer-list {
    position: relative;
    display: inline-block;
    width: 180px;
    height: 200px;
    padding-top: 40px;
    vertical-align: middle;
    border: 1px solid #d9d9d9;
    border-radius: 2px
}

.ant-transfer-list-with-footer {
    padding-bottom: 34px
}

.ant-transfer-list-search {
    padding-right: 24px!important;
    padding-left: 8px
}

.ant-transfer-list-search-action {
    position: absolute;
    top: 12px;
    right: 12px;
    bottom: 12px;
    width: 28px;
    color: rgba(0,0,0,.25);
    line-height: 32px;
    text-align: center
}

.ant-transfer-list-search-action .anticon {
    color: rgba(0,0,0,.25);
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-transfer-list-search-action .anticon:hover {
    color: rgba(0,0,0,.45)
}

span.ant-transfer-list-search-action {
    pointer-events: none
}

.ant-transfer-list-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 8px 12px 9px;
    overflow: hidden;
    color: rgba(0,0,0,.65);
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 2px 2px 0 0
}

.ant-transfer-list-header-title {
    position: absolute;
    right: 12px
}

.ant-transfer-list-header .ant-checkbox-wrapper+span {
    padding-left: 8px
}

.ant-transfer-list-body {
    position: relative;
    height: 100%;
    font-size: 14px
}

.ant-transfer-list-body-search-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 12px
}

.ant-transfer-list-body-with-search {
    padding-top: 56px
}

.ant-transfer-list-content {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: auto;
    list-style: none
}

.ant-transfer-list-content-item {
    min-height: 32px;
    padding: 6px 12px;
    overflow: hidden;
    line-height: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-transfer-list-content-item>span {
    padding-right: 0
}

.ant-transfer-list-content-item-text {
    padding-left: 8px
}

.ant-transfer-list-content-item:not(.ant-transfer-list-content-item-disabled):hover {
    background-color: #f5f5f5;
    cursor: pointer
}

.ant-transfer-list-content-item-checked {
    background-color: #e6f7ff
}

.ant-transfer-list-content-item-disabled {
    color: rgba(0,0,0,.25);
    cursor: not-allowed
}

.ant-transfer-list-body-not-found {
    position: absolute;
    top: 50%;
    width: 100%;
    padding-top: 0;
    color: rgba(0,0,0,.25);
    text-align: center;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

.ant-transfer-list-body-with-search .ant-transfer-list-body-not-found {
    margin-top: 16px
}

.ant-transfer-list-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid #f0f0f0;
    border-radius: 0 0 2px 2px
}

.ant-transfer-operation {
    display: inline-block;
    margin: 0 8px;
    overflow: hidden;
    vertical-align: middle
}

.ant-transfer-operation .ant-btn {
    display: block
}

.ant-transfer-operation .ant-btn:first-child {
    margin-bottom: 4px
}

.ant-transfer-operation .ant-btn .anticon {
    font-size: 12px
}

.ant-transfer .ant-empty-image {
    max-height: -2px
}

.ant-transfer-rtl {
    direction: rtl
}

.ant-transfer-rtl .ant-transfer-list-search-action {
    right: auto;
    left: 12px
}

.ant-transfer-rtl .ant-transfer-list-header {
    right: 0;
    left: auto
}

.ant-transfer-rtl .ant-transfer-list-header-title {
    right: auto;
    left: 12px
}

.ant-transfer-rtl .ant-transfer-list-header .ant-checkbox-wrapper+span {
    padding-right: 8px;
    padding-left: 0
}

.ant-transfer-rtl .ant-transfer-list-body-search-wrapper {
    right: 0;
    left: auto
}

.ant-transfer-rtl .ant-transfer-list-content-item>span {
    padding-left: 0
}

.ant-transfer-rtl .ant-transfer-list-content-item-text {
    padding-right: 8px;
    padding-left: 0
}

.ant-transfer-rtl .ant-transfer-list-footer {
    right: 0;
    left: auto
}

.ant-select-tree-checkbox {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    top: -.09em;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    vertical-align: middle;
    outline: none;
    cursor: pointer
}

.ant-select-tree-checkbox-input:focus+.ant-select-tree-checkbox-inner,.ant-select-tree-checkbox-wrapper:hover .ant-select-tree-checkbox-inner,.ant-select-tree-checkbox:hover .ant-select-tree-checkbox-inner {
    border-color: #1890ff
}

.ant-select-tree-checkbox-checked:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #1890ff;
    border-radius: 2px;
    visibility: hidden;
    -webkit-animation: antCheckboxEffect .36s ease-in-out;
    animation: antCheckboxEffect .36s ease-in-out;
    -webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
    content: ''
}

.ant-select-tree-checkbox-wrapper:hover .ant-select-tree-checkbox:after,.ant-select-tree-checkbox:hover:after {
    visibility: visible
}

.ant-select-tree-checkbox-inner {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 16px;
    height: 16px;
    direction: ltr;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    border-collapse: separate;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-select-tree-checkbox-inner:after {
    position: absolute;
    top: 50%;
    left: 22%;
    display: table;
    width: 5.71428571px;
    height: 9.14285714px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    -webkit-transform: rotate(45deg) scale(0) translate(-50%,-50%);
    -ms-transform: rotate(45deg) scale(0) translate(-50%,-50%);
    transform: rotate(45deg) scale(0) translate(-50%,-50%);
    opacity: 0;
    -webkit-transition: all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s;
    transition: all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s;
    content: ' '
}

.ant-select-tree-checkbox-input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0
}

.ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner:after {
    position: absolute;
    display: table;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    -webkit-transform: rotate(45deg) scale(1) translate(-50%,-50%);
    -ms-transform: rotate(45deg) scale(1) translate(-50%,-50%);
    transform: rotate(45deg) scale(1) translate(-50%,-50%);
    opacity: 1;
    -webkit-transition: all .2s cubic-bezier(.12,.4,.29,1.46) .1s;
    transition: all .2s cubic-bezier(.12,.4,.29,1.46) .1s;
    content: ' '
}

.ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner {
    background-color: #1890ff;
    border-color: #1890ff
}

.ant-select-tree-checkbox-disabled {
    cursor: not-allowed
}

.ant-select-tree-checkbox-disabled.ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner:after {
    border-color: rgba(0,0,0,.25);
    -webkit-animation-name: none;
    animation-name: none
}

.ant-select-tree-checkbox-disabled .ant-select-tree-checkbox-input {
    cursor: not-allowed
}

.ant-select-tree-checkbox-disabled .ant-select-tree-checkbox-inner {
    background-color: #f5f5f5;
    border-color: #d9d9d9!important
}

.ant-select-tree-checkbox-disabled .ant-select-tree-checkbox-inner:after {
    border-color: #f5f5f5;
    border-collapse: separate;
    -webkit-animation-name: none;
    animation-name: none
}

.ant-select-tree-checkbox-disabled+span {
    color: rgba(0,0,0,.25);
    cursor: not-allowed
}

.ant-select-tree-checkbox-disabled:hover:after,.ant-select-tree-checkbox-wrapper:hover .ant-select-tree-checkbox-disabled:after {
    visibility: hidden
}

.ant-select-tree-checkbox-wrapper {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    display: inline-block;
    line-height: unset;
    cursor: pointer
}

.ant-select-tree-checkbox-wrapper.ant-select-tree-checkbox-wrapper-disabled {
    cursor: not-allowed
}

.ant-select-tree-checkbox-wrapper+.ant-select-tree-checkbox-wrapper {
    margin-left: 8px
}

.ant-select-tree-checkbox+span {
    padding-right: 8px;
    padding-left: 8px
}

.ant-select-tree-checkbox-group {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    display: inline-block
}

.ant-select-tree-checkbox-group-item {
    display: inline-block;
    margin-right: 8px
}

.ant-select-tree-checkbox-group-item:last-child {
    margin-right: 0
}

.ant-select-tree-checkbox-group-item+.ant-select-tree-checkbox-group-item {
    margin-left: 0
}

.ant-select-tree-checkbox-indeterminate .ant-select-tree-checkbox-inner {
    background-color: #fff;
    border-color: #d9d9d9
}

.ant-select-tree-checkbox-indeterminate .ant-select-tree-checkbox-inner:after {
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    background-color: #1890ff;
    border: 0;
    -webkit-transform: translate(-50%,-50%) scale(1);
    -ms-transform: translate(-50%,-50%) scale(1);
    transform: translate(-50%,-50%) scale(1);
    opacity: 1;
    content: ' '
}

.ant-select-tree-checkbox-indeterminate.ant-select-tree-checkbox-disabled .ant-select-tree-checkbox-inner:after {
    background-color: rgba(0,0,0,.25);
    border-color: rgba(0,0,0,.25)
}

.ant-tree-select-dropdown {
    padding: 8px 4px 0
}

.ant-tree-select-dropdown-rtl {
    direction: rtl
}

.ant-tree-select-dropdown .ant-select-tree {
    border-radius: 0
}

.ant-tree-select-dropdown .ant-select-tree-list-holder-inner {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    -webkit-align-items: stretch;
    align-items: stretch
}

.ant-tree-select-dropdown .ant-select-tree-list-holder-inner .ant-select-tree-treenode {
    padding-bottom: 8px
}

.ant-tree-select-dropdown .ant-select-tree-list-holder-inner .ant-select-tree-treenode .ant-select-tree-node-content-wrapper {
    -webkit-box-flex: 1;
    -ms-flex: auto;
    -webkit-flex: auto;
    flex: auto
}

.ant-select-tree {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    background: #fff;
    border-radius: 2px;
    -webkit-transition: background-color .3s;
    transition: background-color .3s
}

.ant-select-tree-focused:not(:hover):not(.ant-select-tree-active-focused) {
    background: #e6f7ff
}

.ant-select-tree-list-holder-inner {
    -webkit-box-align: start;
    -ms-flex-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start
}

.ant-select-tree.ant-select-tree-block-node .ant-select-tree-list-holder-inner {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    -webkit-align-items: stretch;
    align-items: stretch
}

.ant-select-tree.ant-select-tree-block-node .ant-select-tree-list-holder-inner .ant-select-tree-node-content-wrapper {
    -webkit-box-flex: 1;
    -ms-flex: auto;
    -webkit-flex: auto;
    flex: auto
}

.ant-select-tree .ant-select-tree-treenode {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    padding: 0 0 4px;
    outline: none
}

.ant-select-tree .ant-select-tree-treenode-disabled .ant-select-tree-node-content-wrapper {
    color: rgba(0,0,0,.25);
    cursor: not-allowed
}

.ant-select-tree .ant-select-tree-treenode-disabled .ant-select-tree-node-content-wrapper:hover {
    background: transparent
}

.ant-select-tree .ant-select-tree-treenode-active .ant-select-tree-node-content-wrapper {
    background: #f5f5f5
}

.ant-select-tree-indent {
    -ms-flex-item-align: stretch;
    -webkit-align-self: stretch;
    -ms-grid-row-align: stretch;
    align-self: stretch;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.ant-select-tree-indent-unit {
    display: inline-block;
    width: 24px
}

.ant-select-tree .ant-select-tree-switcher {
    -webkit-box-flex: 0;
    -ms-flex: none;
    -webkit-flex: none;
    flex: none;
    width: 24px;
    height: 24px;
    margin: 0;
    line-height: 24px;
    text-align: center;
    cursor: pointer
}

.ant-select-tree .ant-select-tree-switcher .ant-select-tree-switcher-icon,.ant-select-tree .ant-select-tree-switcher .ant-tree-switcher-icon {
    font-size: 10px;
    display: inline-block;
    font-weight: 700
}

.ant-select-tree .ant-select-tree-switcher .ant-select-tree-switcher-icon svg,.ant-select-tree .ant-select-tree-switcher .ant-tree-switcher-icon svg {
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s
}

.ant-select-tree .ant-select-tree-switcher-noop {
    cursor: default
}

.ant-select-tree .ant-select-tree-switcher_close .ant-select-tree-switcher-icon svg {
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg)
}

.ant-select-tree .ant-select-tree-switcher-loading-icon {
    color: #1890ff
}

.ant-select-tree .ant-select-tree-checkbox {
    top: auto;
    margin: 4px 8px 0 0
}

.ant-select-tree .ant-select-tree-node-content-wrapper {
    min-height: 24px;
    margin: 0;
    padding: 0 4px;
    color: inherit;
    line-height: 24px;
    background: transparent;
    border-radius: 2px;
    cursor: pointer;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-select-tree .ant-select-tree-node-content-wrapper:hover {
    background-color: #f5f5f5
}

.ant-select-tree .ant-select-tree-node-content-wrapper.ant-select-tree-node-selected {
    background-color: #bae7ff
}

.ant-select-tree .ant-select-tree-node-content-wrapper .ant-select-tree-iconEle {
    display: inline-block;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    vertical-align: top
}

.ant-select-tree .ant-select-tree-node-content-wrapper .ant-select-tree-iconEle:empty {
    display: none
}

.ant-select-tree-node-content-wrapper[draggable=true] {
    line-height: 20px;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.ant-select-tree .ant-select-tree-treenode.drag-over>[draggable] {
    color: #fff;
    background-color: #1890ff;
    opacity: .8
}

.ant-select-tree .ant-select-tree-treenode.drag-over-gap-top>[draggable] {
    border-top-color: #1890ff
}

.ant-select-tree .ant-select-tree-treenode.drag-over-gap-bottom>[draggable] {
    border-bottom-color: #1890ff
}

.ant-select-tree-show-line .ant-select-tree-indent-unit {
    position: relative;
    height: 100%
}

.ant-select-tree-show-line .ant-select-tree-indent-unit:before {
    position: absolute;
    top: calc(100% - 4px);
    right: -12px;
    bottom: -28px;
    border-right: 1px solid #d9d9d9;
    content: ''
}

.ant-select-tree-show-line .ant-select-tree-indent-unit-end:before,.ant-select-tree-show-line .ant-select-tree-treenode-motion:not(.ant-motion-collapse-leave):not(.ant-motion-collapse-appear-active) .ant-select-tree-indent-unit:before {
    display: none
}

.ant-select-tree-show-line .ant-select-tree-switcher {
    z-index: 1;
    background: #fff
}

.ant-select-tree-rtl,.ant-select-tree .ant-select-tree-treenode-rtl {
    direction: rtl
}

.ant-select-tree-rtl.ant-select-tree .ant-select-tree-switcher_close .ant-select-tree-switcher-icon svg {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg)
}

.ant-select-tree-rtl.ant-select-tree-show-line .ant-select-tree-indent-unit:before {
    right: auto;
    left: -12px;
    border-right: none;
    border-left: 1px solid #d9d9d9
}

.ant-tree-select-dropdown-rtl .ant-select-tree .ant-select-tree-switcher_close .ant-select-tree-switcher-icon svg {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg)
}

@-webkit-keyframes antCheckboxEffect {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: .5
    }

    to {
        -webkit-transform: scale(1.6);
        transform: scale(1.6);
        opacity: 0
    }
}

@keyframes antCheckboxEffect {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: .5
    }

    to {
        -webkit-transform: scale(1.6);
        transform: scale(1.6);
        opacity: 0
    }
}

.ant-tree.ant-tree-directory .ant-tree-treenode {
    position: relative
}

.ant-tree.ant-tree-directory .ant-tree-treenode:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 4px;
    left: 0;
    -webkit-transition: background-color .3s;
    transition: background-color .3s;
    content: '';
    pointer-events: none
}

.ant-tree.ant-tree-directory .ant-tree-treenode:hover:before {
    background: #f5f5f5
}

.ant-tree.ant-tree-directory .ant-tree-treenode>* {
    z-index: 1
}

.ant-tree.ant-tree-directory .ant-tree-treenode .ant-tree-switcher {
    -webkit-transition: color .3s;
    transition: color .3s
}

.ant-tree.ant-tree-directory .ant-tree-treenode .ant-tree-node-content-wrapper {
    border-radius: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.ant-tree.ant-tree-directory .ant-tree-treenode .ant-tree-node-content-wrapper:hover {
    background: transparent
}

.ant-tree.ant-tree-directory .ant-tree-treenode .ant-tree-node-content-wrapper.ant-tree-node-selected {
    color: #fff;
    background: transparent
}

.ant-tree.ant-tree-directory .ant-tree-treenode-selected:before,.ant-tree.ant-tree-directory .ant-tree-treenode-selected:hover:before {
    background: #1890ff
}

.ant-tree.ant-tree-directory .ant-tree-treenode-selected .ant-tree-switcher {
    color: #fff
}

.ant-tree.ant-tree-directory .ant-tree-treenode-selected .ant-tree-node-content-wrapper {
    color: #fff;
    background: transparent
}

.ant-tree-checkbox {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    top: -.09em;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    vertical-align: middle;
    outline: none;
    cursor: pointer
}

.ant-tree-checkbox-input:focus+.ant-tree-checkbox-inner,.ant-tree-checkbox-wrapper:hover .ant-tree-checkbox-inner,.ant-tree-checkbox:hover .ant-tree-checkbox-inner {
    border-color: #1890ff
}

.ant-tree-checkbox-checked:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #1890ff;
    border-radius: 2px;
    visibility: hidden;
    -webkit-animation: antCheckboxEffect .36s ease-in-out;
    animation: antCheckboxEffect .36s ease-in-out;
    -webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
    content: ''
}

.ant-tree-checkbox-wrapper:hover .ant-tree-checkbox:after,.ant-tree-checkbox:hover:after {
    visibility: visible
}

.ant-tree-checkbox-inner {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 16px;
    height: 16px;
    direction: ltr;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    border-collapse: separate;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-tree-checkbox-inner:after {
    position: absolute;
    top: 50%;
    left: 22%;
    display: table;
    width: 5.71428571px;
    height: 9.14285714px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    -webkit-transform: rotate(45deg) scale(0) translate(-50%,-50%);
    -ms-transform: rotate(45deg) scale(0) translate(-50%,-50%);
    transform: rotate(45deg) scale(0) translate(-50%,-50%);
    opacity: 0;
    -webkit-transition: all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s;
    transition: all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s;
    content: ' '
}

.ant-tree-checkbox-input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0
}

.ant-tree-checkbox-checked .ant-tree-checkbox-inner:after {
    position: absolute;
    display: table;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    -webkit-transform: rotate(45deg) scale(1) translate(-50%,-50%);
    -ms-transform: rotate(45deg) scale(1) translate(-50%,-50%);
    transform: rotate(45deg) scale(1) translate(-50%,-50%);
    opacity: 1;
    -webkit-transition: all .2s cubic-bezier(.12,.4,.29,1.46) .1s;
    transition: all .2s cubic-bezier(.12,.4,.29,1.46) .1s;
    content: ' '
}

.ant-tree-checkbox-checked .ant-tree-checkbox-inner {
    background-color: #1890ff;
    border-color: #1890ff
}

.ant-tree-checkbox-disabled {
    cursor: not-allowed
}

.ant-tree-checkbox-disabled.ant-tree-checkbox-checked .ant-tree-checkbox-inner:after {
    border-color: rgba(0,0,0,.25);
    -webkit-animation-name: none;
    animation-name: none
}

.ant-tree-checkbox-disabled .ant-tree-checkbox-input {
    cursor: not-allowed
}

.ant-tree-checkbox-disabled .ant-tree-checkbox-inner {
    background-color: #f5f5f5;
    border-color: #d9d9d9!important
}

.ant-tree-checkbox-disabled .ant-tree-checkbox-inner:after {
    border-color: #f5f5f5;
    border-collapse: separate;
    -webkit-animation-name: none;
    animation-name: none
}

.ant-tree-checkbox-disabled+span {
    color: rgba(0,0,0,.25);
    cursor: not-allowed
}

.ant-tree-checkbox-disabled:hover:after,.ant-tree-checkbox-wrapper:hover .ant-tree-checkbox-disabled:after {
    visibility: hidden
}

.ant-tree-checkbox-wrapper {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    display: inline-block;
    line-height: unset;
    cursor: pointer
}

.ant-tree-checkbox-wrapper.ant-tree-checkbox-wrapper-disabled {
    cursor: not-allowed
}

.ant-tree-checkbox-wrapper+.ant-tree-checkbox-wrapper {
    margin-left: 8px
}

.ant-tree-checkbox+span {
    padding-right: 8px;
    padding-left: 8px
}

.ant-tree-checkbox-group {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    display: inline-block
}

.ant-tree-checkbox-group-item {
    display: inline-block;
    margin-right: 8px
}

.ant-tree-checkbox-group-item:last-child {
    margin-right: 0
}

.ant-tree-checkbox-group-item+.ant-tree-checkbox-group-item {
    margin-left: 0
}

.ant-tree-checkbox-indeterminate .ant-tree-checkbox-inner {
    background-color: #fff;
    border-color: #d9d9d9
}

.ant-tree-checkbox-indeterminate .ant-tree-checkbox-inner:after {
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    background-color: #1890ff;
    border: 0;
    -webkit-transform: translate(-50%,-50%) scale(1);
    -ms-transform: translate(-50%,-50%) scale(1);
    transform: translate(-50%,-50%) scale(1);
    opacity: 1;
    content: ' '
}

.ant-tree-checkbox-indeterminate.ant-tree-checkbox-disabled .ant-tree-checkbox-inner:after {
    background-color: rgba(0,0,0,.25);
    border-color: rgba(0,0,0,.25)
}

.ant-tree {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    background: #fff;
    border-radius: 2px;
    -webkit-transition: background-color .3s;
    transition: background-color .3s
}

.ant-tree-focused:not(:hover):not(.ant-tree-active-focused) {
    background: #e6f7ff
}

.ant-tree-list-holder-inner {
    -webkit-box-align: start;
    -ms-flex-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start
}

.ant-tree.ant-tree-block-node .ant-tree-list-holder-inner {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    -webkit-align-items: stretch;
    align-items: stretch
}

.ant-tree.ant-tree-block-node .ant-tree-list-holder-inner .ant-tree-node-content-wrapper {
    -webkit-box-flex: 1;
    -ms-flex: auto;
    -webkit-flex: auto;
    flex: auto
}

.ant-tree .ant-tree-treenode {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    padding: 0 0 4px;
    outline: none
}

.ant-tree .ant-tree-treenode-disabled .ant-tree-node-content-wrapper {
    color: rgba(0,0,0,.25);
    cursor: not-allowed
}

.ant-tree .ant-tree-treenode-disabled .ant-tree-node-content-wrapper:hover {
    background: transparent
}

.ant-tree .ant-tree-treenode-active .ant-tree-node-content-wrapper {
    background: #f5f5f5
}

.ant-tree-indent {
    -ms-flex-item-align: stretch;
    -webkit-align-self: stretch;
    -ms-grid-row-align: stretch;
    align-self: stretch;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.ant-tree-indent-unit {
    display: inline-block;
    width: 24px
}

.ant-tree .ant-tree-switcher {
    -webkit-box-flex: 0;
    -ms-flex: none;
    -webkit-flex: none;
    flex: none;
    width: 24px;
    height: 24px;
    margin: 0;
    line-height: 24px;
    text-align: center;
    cursor: pointer
}

.ant-tree .ant-tree-switcher .ant-select-tree-switcher-icon,.ant-tree .ant-tree-switcher .ant-tree-switcher-icon {
    font-size: 10px;
    display: inline-block;
    font-weight: 700
}

.ant-tree .ant-tree-switcher .ant-select-tree-switcher-icon svg,.ant-tree .ant-tree-switcher .ant-tree-switcher-icon svg {
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s
}

.ant-tree .ant-tree-switcher-noop {
    cursor: default
}

.ant-tree .ant-tree-switcher_close .ant-tree-switcher-icon svg {
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg)
}

.ant-tree .ant-tree-switcher-loading-icon {
    color: #1890ff
}

.ant-tree .ant-tree-checkbox {
    top: auto;
    margin: 4px 8px 0 0
}

.ant-tree .ant-tree-node-content-wrapper {
    min-height: 24px;
    margin: 0;
    padding: 0 4px;
    color: inherit;
    line-height: 24px;
    background: transparent;
    border-radius: 2px;
    cursor: pointer;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-tree .ant-tree-node-content-wrapper:hover {
    background-color: #f5f5f5
}

.ant-tree .ant-tree-node-content-wrapper.ant-tree-node-selected {
    background-color: #bae7ff
}

.ant-tree .ant-tree-node-content-wrapper .ant-tree-iconEle {
    display: inline-block;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    vertical-align: top
}

.ant-tree .ant-tree-node-content-wrapper .ant-tree-iconEle:empty {
    display: none
}

.ant-tree-node-content-wrapper[draggable=true] {
    line-height: 20px;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.ant-tree .ant-tree-treenode.drag-over>[draggable] {
    color: #fff;
    background-color: #1890ff;
    opacity: .8
}

.ant-tree .ant-tree-treenode.drag-over-gap-top>[draggable] {
    border-top-color: #1890ff
}

.ant-tree .ant-tree-treenode.drag-over-gap-bottom>[draggable] {
    border-bottom-color: #1890ff
}

.ant-tree-show-line .ant-tree-indent-unit {
    position: relative;
    height: 100%
}

.ant-tree-show-line .ant-tree-indent-unit:before {
    position: absolute;
    top: calc(100% - 4px);
    right: -12px;
    bottom: -28px;
    border-right: 1px solid #d9d9d9;
    content: ''
}

.ant-tree-show-line .ant-tree-indent-unit-end:before,.ant-tree-show-line .ant-tree-treenode-motion:not(.ant-motion-collapse-leave):not(.ant-motion-collapse-appear-active) .ant-tree-indent-unit:before {
    display: none
}

.ant-tree-show-line .ant-tree-switcher {
    z-index: 1;
    background: #fff
}

.ant-tree-rtl,.ant-tree .ant-tree-treenode-rtl {
    direction: rtl
}

.ant-tree-rtl.ant-tree .ant-tree-switcher_close .ant-tree-switcher-icon svg {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg)
}

.ant-tree-rtl.ant-tree-show-line .ant-tree-indent-unit:before {
    right: auto;
    left: -12px;
    border-right: none;
    border-left: 1px solid #d9d9d9
}

.ant-typography {
    color: rgba(0,0,0,.65)
}

.ant-typography.ant-typography-secondary {
    color: rgba(0,0,0,.45)
}

.ant-typography.ant-typography-warning {
    color: #faad14
}

.ant-typography.ant-typography-danger {
    color: #ff4d4f
}

.ant-typography.ant-typography-disabled {
    color: rgba(0,0,0,.25);
    cursor: not-allowed;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.ant-typography p,div.ant-typography {
    margin-bottom: 1em
}

.ant-typography h1,h1.ant-typography {
    margin-bottom: .5em;
    color: rgba(0,0,0,.85);
    font-weight: 600;
    font-size: 38px;
    line-height: 1.23
}

.ant-typography h2,h2.ant-typography {
    margin-bottom: .5em;
    color: rgba(0,0,0,.85);
    font-weight: 600;
    font-size: 30px;
    line-height: 1.35
}

.ant-typography h3,h3.ant-typography {
    margin-bottom: .5em;
    color: rgba(0,0,0,.85);
    font-weight: 600;
    font-size: 24px;
    line-height: 1.35
}

.ant-typography h4,h4.ant-typography {
    margin-bottom: .5em;
    color: rgba(0,0,0,.85);
    font-weight: 600;
    font-size: 20px;
    line-height: 1.4
}

.ant-typography+h1.ant-typography,.ant-typography+h2.ant-typography,.ant-typography+h3.ant-typography,.ant-typography+h4.ant-typography,.ant-typography div+h1,.ant-typography div+h2,.ant-typography div+h3,.ant-typography div+h4,.ant-typography h1+h1,.ant-typography h1+h2,.ant-typography h1+h3,.ant-typography h1+h4,.ant-typography h2+h1,.ant-typography h2+h2,.ant-typography h2+h3,.ant-typography h2+h4,.ant-typography h3+h1,.ant-typography h3+h2,.ant-typography h3+h3,.ant-typography h3+h4,.ant-typography h4+h1,.ant-typography h4+h2,.ant-typography h4+h3,.ant-typography h4+h4,.ant-typography li+h1,.ant-typography li+h2,.ant-typography li+h3,.ant-typography li+h4,.ant-typography p+h1,.ant-typography p+h2,.ant-typography p+h3,.ant-typography p+h4,.ant-typography ul+h1,.ant-typography ul+h2,.ant-typography ul+h3,.ant-typography ul+h4 {
    margin-top: 1.2em
}

span.ant-typography-ellipsis {
    display: inline-block
}

.ant-typography a {
    color: #1890ff;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    -webkit-transition: color .3s;
    transition: color .3s
}

.ant-typography a:focus,.ant-typography a:hover {
    color: #40a9ff
}

.ant-typography a:active {
    color: #096dd9
}

.ant-typography a:active,.ant-typography a:hover {
    text-decoration: none
}

.ant-typography a[disabled] {
    color: rgba(0,0,0,.25);
    cursor: not-allowed;
    pointer-events: none
}

.ant-typography code {
    margin: 0 .2em;
    padding: .2em .4em .1em;
    font-size: 85%;
    background: rgba(0,0,0,.06);
    border: 1px solid rgba(0,0,0,.06);
    border-radius: 3px
}

.ant-typography mark {
    padding: 0;
    background-color: #ffe58f
}

.ant-typography ins,.ant-typography u {
    text-decoration: underline;
    -webkit-text-decoration-skip: ink;
    text-decoration-skip-ink: auto
}

.ant-typography del,.ant-typography s {
    text-decoration: line-through
}

.ant-typography strong {
    font-weight: 600
}

.ant-typography-copy,.ant-typography-edit,.ant-typography-expand {
    color: #1890ff;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    -webkit-transition: color .3s;
    transition: color .3s;
    margin-left: 8px
}

.ant-typography-copy:focus,.ant-typography-copy:hover,.ant-typography-edit:focus,.ant-typography-edit:hover,.ant-typography-expand:focus,.ant-typography-expand:hover {
    color: #40a9ff
}

.ant-typography-copy:active,.ant-typography-edit:active,.ant-typography-expand:active {
    color: #096dd9
}

.ant-typography-copy-success,.ant-typography-copy-success:focus,.ant-typography-copy-success:hover {
    color: #52c41a
}

.ant-typography-edit-content {
    position: relative
}

div.ant-typography-edit-content {
    left: -12px;
    margin-top: -5px;
    margin-bottom: calc(1em - 4px - 2px)
}

.ant-typography-edit-content-confirm {
    position: absolute;
    right: 10px;
    bottom: 8px;
    color: rgba(0,0,0,.45);
    pointer-events: none
}

.ant-typography-edit-content textarea {
    -moz-transition: none
}

.ant-typography ol,.ant-typography ul {
    margin: 0 0 1em;
    padding: 0
}

.ant-typography ol li,.ant-typography ul li {
    margin: 0 0 0 20px;
    padding: 0 0 0 4px
}

.ant-typography ul {
    list-style-type: circle
}

.ant-typography ul ul {
    list-style-type: disc
}

.ant-typography ol {
    list-style-type: decimal
}

.ant-typography-ellipsis-single-line {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

span.ant-typography-ellipsis-single-line {
    vertical-align: bottom
}

.ant-typography-ellipsis-multiple-line {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    /*! autoprefixer: ignore next */
    -webkit-box-orient: vertical;
    overflow: hidden
}

.ant-typography-rtl {
    direction: rtl
}

.ant-typography-rtl .ant-typography-copy,.ant-typography-rtl .ant-typography-edit,.ant-typography-rtl .ant-typography-expand {
    margin-right: 8px;
    margin-left: 0
}

div.ant-typography-edit-content.ant-typography-rtl {
    right: -12px;
    left: auto
}

.ant-typography-rtl .ant-typography-edit-content-confirm {
    right: auto;
    left: 10px
}

.ant-typography-rtl.ant-typography ol li,.ant-typography-rtl.ant-typography ul li {
    margin: 0 20px 0 0;
    padding: 0 4px 0 0
}

.ant-upload {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    outline: 0
}

.ant-upload p {
    margin: 0
}

.ant-upload-btn {
    display: block;
    width: 100%;
    outline: none
}

.ant-upload input[type=file] {
    cursor: pointer
}

.ant-upload.ant-upload-select {
    display: inline-block
}

.ant-upload.ant-upload-disabled {
    cursor: not-allowed
}

.ant-upload.ant-upload-select-picture-card {
    display: table;
    float: left;
    width: 104px;
    height: 104px;
    margin-right: 8px;
    margin-bottom: 8px;
    text-align: center;
    vertical-align: top;
    background-color: #fafafa;
    border: 1px dashed #d9d9d9;
    border-radius: 2px;
    cursor: pointer;
    -webkit-transition: border-color .3s ease;
    transition: border-color .3s ease
}

.ant-upload.ant-upload-select-picture-card>.ant-upload {
    display: table-cell;
    width: 100%;
    height: 100%;
    padding: 8px;
    text-align: center;
    vertical-align: middle
}

.ant-upload.ant-upload-select-picture-card:hover {
    border-color: #1890ff
}

.ant-upload-disabled.ant-upload.ant-upload-select-picture-card:hover {
    border-color: #d9d9d9
}

.ant-upload.ant-upload-drag {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    background: #fafafa;
    border: 1px dashed #d9d9d9;
    border-radius: 2px;
    cursor: pointer;
    -webkit-transition: border-color .3s;
    transition: border-color .3s
}

.ant-upload.ant-upload-drag .ant-upload {
    padding: 16px 0
}

.ant-upload.ant-upload-drag.ant-upload-drag-hover:not(.ant-upload-disabled) {
    border-color: #096dd9
}

.ant-upload.ant-upload-drag.ant-upload-disabled {
    cursor: not-allowed
}

.ant-upload.ant-upload-drag .ant-upload-btn {
    display: table;
    height: 100%
}

.ant-upload.ant-upload-drag .ant-upload-drag-container {
    display: table-cell;
    vertical-align: middle
}

.ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover {
    border-color: #40a9ff
}

.ant-upload.ant-upload-drag p.ant-upload-drag-icon {
    margin-bottom: 20px
}

.ant-upload.ant-upload-drag p.ant-upload-drag-icon .anticon {
    color: #40a9ff;
    font-size: 48px
}

.ant-upload.ant-upload-drag p.ant-upload-text {
    margin: 0 0 4px;
    color: rgba(0,0,0,.85);
    font-size: 16px
}

.ant-upload.ant-upload-drag p.ant-upload-hint {
    color: rgba(0,0,0,.45);
    font-size: 14px
}

.ant-upload.ant-upload-drag .anticon-plus {
    color: rgba(0,0,0,.25);
    font-size: 30px;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-upload.ant-upload-drag .anticon-plus:hover,.ant-upload.ant-upload-drag:hover .anticon-plus {
    color: rgba(0,0,0,.45)
}

.ant-upload-picture-card-wrapper {
    display: inline-block;
    width: 100%
}

.ant-upload-picture-card-wrapper:before {
    display: table;
    content: ''
}

.ant-upload-picture-card-wrapper:after {
    display: table;
    clear: both;
    content: ''
}

.ant-upload-list {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    line-height: 1.5715
}

.ant-upload-list:after,.ant-upload-list:before {
    display: table;
    content: ''
}

.ant-upload-list:after {
    clear: both
}

.ant-upload-list-item-list-type-text:hover .ant-upload-list-item-name-icon-count-1 {
    padding-right: 14px
}

.ant-upload-list-item-list-type-text:hover .ant-upload-list-item-name-icon-count-2 {
    padding-right: 28px
}

.ant-upload-list-item {
    position: relative;
    height: 22.001px;
    margin-top: 8px;
    font-size: 14px
}

.ant-upload-list-item-name {
    display: inline-block;
    width: 100%;
    padding-left: 22px;
    overflow: hidden;
    line-height: 1.5715;
    white-space: nowrap;
    text-overflow: ellipsis
}

.ant-upload-list-item-name-icon-count-1 {
    padding-right: 14px
}

.ant-upload-list-item-card-actions {
    position: absolute;
    right: 0;
    opacity: 0
}

.ant-upload-list-item-card-actions.picture {
    top: 25px;
    line-height: 1;
    opacity: 1
}

.ant-upload-list-item-card-actions .anticon {
    padding-right: 6px;
    color: rgba(0,0,0,.45)
}

.ant-upload-list-item-info {
    height: 100%;
    padding: 0 12px 0 4px;
    -webkit-transition: background-color .3s;
    transition: background-color .3s
}

.ant-upload-list-item-info>span {
    display: block;
    width: 100%;
    height: 100%
}

.ant-upload-list-item-info .ant-upload-text-icon .anticon,.ant-upload-list-item-info .anticon-loading .anticon {
    position: absolute;
    top: 5px;
    color: rgba(0,0,0,.45);
    font-size: 14px
}

.ant-upload-list-item .anticon-close {
    display: inline-block;
    font-size: 10px;
    position: absolute;
    top: 6px;
    right: 4px;
    color: rgba(0,0,0,.45);
    line-height: 0;
    cursor: pointer;
    opacity: 0;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-upload-list-item .anticon-close:hover {
    color: rgba(0,0,0,.65)
}

.ant-upload-list-item:hover .ant-upload-list-item-info {
    background-color: #f5f5f5
}

.ant-upload-list-item:hover .ant-upload-list-item-card-actions,.ant-upload-list-item:hover .anticon-close {
    opacity: 1
}

.ant-upload-list-item-error,.ant-upload-list-item-error .ant-upload-list-item-name,.ant-upload-list-item-error .ant-upload-text-icon>.anticon {
    color: #ff4d4f
}

.ant-upload-list-item-error .ant-upload-list-item-card-actions {
    opacity: 1
}

.ant-upload-list-item-error .ant-upload-list-item-card-actions .anticon {
    color: #ff4d4f
}

.ant-upload-list-item-progress {
    position: absolute;
    bottom: -12px;
    width: 100%;
    padding-left: 26px;
    font-size: 14px;
    line-height: 0
}

.ant-upload-list-picture-card .ant-upload-list-item,.ant-upload-list-picture .ant-upload-list-item {
    position: relative;
    height: 66px;
    padding: 8px;
    border: 1px solid #d9d9d9;
    border-radius: 2px
}

.ant-upload-list-picture-card .ant-upload-list-item:hover,.ant-upload-list-picture .ant-upload-list-item:hover {
    background: transparent
}

.ant-upload-list-picture-card .ant-upload-list-item-error,.ant-upload-list-picture .ant-upload-list-item-error {
    border-color: #ff4d4f
}

.ant-upload-list-picture-card .ant-upload-list-item-info,.ant-upload-list-picture .ant-upload-list-item-info {
    padding: 0
}

.ant-upload-list-picture-card .ant-upload-list-item:hover .ant-upload-list-item-info,.ant-upload-list-picture .ant-upload-list-item:hover .ant-upload-list-item-info {
    background: transparent
}

.ant-upload-list-picture-card .ant-upload-list-item-uploading,.ant-upload-list-picture .ant-upload-list-item-uploading {
    border-style: dashed
}

.ant-upload-list-picture-card .ant-upload-list-item-thumbnail,.ant-upload-list-picture .ant-upload-list-item-thumbnail {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 48px;
    height: 48px;
    line-height: 54px;
    text-align: center;
    opacity: .8
}

.ant-upload-list-picture-card .ant-upload-list-item-thumbnail .anticon,.ant-upload-list-picture .ant-upload-list-item-thumbnail .anticon {
    font-size: 26px
}

.ant-upload-list-picture-card .ant-upload-list-item-icon,.ant-upload-list-picture .ant-upload-list-item-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 26px;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%)
}

.ant-upload-list-picture-card .ant-upload-list-item-icon .anticon,.ant-upload-list-picture .ant-upload-list-item-icon .anticon {
    font-size: 26px
}

.ant-upload-list-picture-card .ant-upload-list-item-image,.ant-upload-list-picture .ant-upload-list-item-image {
    max-width: 100%
}

.ant-upload-list-picture-card .ant-upload-list-item-thumbnail img,.ant-upload-list-picture .ant-upload-list-item-thumbnail img {
    display: block;
    width: 48px;
    height: 48px;
    overflow: hidden
}

.ant-upload-list-picture-card .ant-upload-list-item-name,.ant-upload-list-picture .ant-upload-list-item-name {
    display: inline-block;
    box-sizing: border-box;
    max-width: 100%;
    margin: 0 0 0 8px;
    padding-right: 8px;
    padding-left: 48px;
    overflow: hidden;
    line-height: 44px;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-upload-list-picture-card .ant-upload-list-item-name-icon-count-1,.ant-upload-list-picture .ant-upload-list-item-name-icon-count-1 {
    padding-right: 18px
}

.ant-upload-list-picture-card .ant-upload-list-item-name-icon-count-2,.ant-upload-list-picture .ant-upload-list-item-name-icon-count-2 {
    padding-right: 36px
}

.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-name,.ant-upload-list-picture .ant-upload-list-item-uploading .ant-upload-list-item-name {
    line-height: 28px
}

.ant-upload-list-picture-card .ant-upload-list-item-progress,.ant-upload-list-picture .ant-upload-list-item-progress {
    bottom: 14px;
    width: calc(100% - 24px);
    margin-top: 0;
    padding-left: 56px
}

.ant-upload-list-picture-card .anticon-close,.ant-upload-list-picture .anticon-close {
    position: absolute;
    top: 8px;
    right: 8px;
    line-height: 1;
    opacity: 1
}

.ant-upload-list-picture-card.ant-upload-list:after {
    display: none
}

.ant-upload-list-picture-card-container,.ant-upload-list-picture-card .ant-upload-list-item {
    float: left;
    width: 104px;
    height: 104px;
    margin: 0 8px 8px 0
}

.ant-upload-list-picture-card .ant-upload-list-item-info {
    position: relative;
    height: 100%;
    overflow: hidden
}

.ant-upload-list-picture-card .ant-upload-list-item-info:before {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    opacity: 0;
    -webkit-transition: all .3s;
    transition: all .3s;
    content: ' '
}

.ant-upload-list-picture-card .ant-upload-list-item:hover .ant-upload-list-item-info:before {
    opacity: 1
}

.ant-upload-list-picture-card .ant-upload-list-item-actions {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    white-space: nowrap;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    opacity: 0;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-delete,.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-download,.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-eye {
    z-index: 10;
    width: 16px;
    margin: 0 4px;
    color: hsla(0,0%,100%,.85);
    font-size: 16px;
    cursor: pointer;
    -webkit-transition: all .3s;
    transition: all .3s
}

.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-delete:hover,.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-download:hover,.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-eye:hover {
    color: #fff
}

.ant-upload-list-picture-card .ant-upload-list-item-actions:hover,.ant-upload-list-picture-card .ant-upload-list-item-info:hover+.ant-upload-list-item-actions {
    opacity: 1
}

.ant-upload-list-picture-card .ant-upload-list-item-thumbnail,.ant-upload-list-picture-card .ant-upload-list-item-thumbnail img {
    position: static;
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover
}

.ant-upload-list-picture-card .ant-upload-list-item-name {
    display: none;
    margin: 8px 0 0;
    padding: 0;
    line-height: 1.5715;
    text-align: center
}

.ant-upload-list-picture-card .ant-upload-list-item-file+.ant-upload-list-item-name {
    position: absolute;
    bottom: 10px;
    display: block
}

.ant-upload-list-picture-card .ant-upload-list-item-uploading.ant-upload-list-item {
    background-color: #fafafa
}

.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-info {
    height: auto
}

.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-info .anticon-delete,.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-info .anticon-eye,.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-info:before {
    display: none
}

.ant-upload-list-picture-card .ant-upload-list-item-progress {
    bottom: 32px;
    padding-left: 0
}

.ant-upload-list .ant-upload-success-icon {
    color: #52c41a;
    font-weight: 700
}

.ant-upload-list .ant-upload-animate-enter,.ant-upload-list .ant-upload-animate-inline-enter,.ant-upload-list .ant-upload-animate-inline-leave,.ant-upload-list .ant-upload-animate-leave {
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: cubic-bezier(.78,.14,.15,.86);
    animation-fill-mode: cubic-bezier(.78,.14,.15,.86)
}

.ant-upload-list .ant-upload-animate-enter {
    -webkit-animation-name: uploadAnimateIn;
    animation-name: uploadAnimateIn
}

.ant-upload-list .ant-upload-animate-leave {
    -webkit-animation-name: uploadAnimateOut;
    animation-name: uploadAnimateOut
}

.ant-upload-list .ant-upload-animate-inline-enter {
    -webkit-animation-name: uploadAnimateInlineIn;
    animation-name: uploadAnimateInlineIn
}

.ant-upload-list .ant-upload-animate-inline-leave {
    -webkit-animation-name: uploadAnimateInlineOut;
    animation-name: uploadAnimateInlineOut
}

@-webkit-keyframes uploadAnimateIn {
    0% {
        height: 0;
        margin: 0;
        padding: 0;
        opacity: 0
    }
}

@keyframes uploadAnimateIn {
    0% {
        height: 0;
        margin: 0;
        padding: 0;
        opacity: 0
    }
}

@-webkit-keyframes uploadAnimateOut {
    to {
        height: 0;
        margin: 0;
        padding: 0;
        opacity: 0
    }
}

@keyframes uploadAnimateOut {
    to {
        height: 0;
        margin: 0;
        padding: 0;
        opacity: 0
    }
}

@-webkit-keyframes uploadAnimateInlineIn {
    0% {
        width: 0;
        height: 0;
        margin: 0;
        padding: 0;
        opacity: 0
    }
}

@keyframes uploadAnimateInlineIn {
    0% {
        width: 0;
        height: 0;
        margin: 0;
        padding: 0;
        opacity: 0
    }
}

@-webkit-keyframes uploadAnimateInlineOut {
    to {
        width: 0;
        height: 0;
        margin: 0;
        padding: 0;
        opacity: 0
    }
}

@keyframes uploadAnimateInlineOut {
    to {
        width: 0;
        height: 0;
        margin: 0;
        padding: 0;
        opacity: 0
    }
}

.ant-upload-rtl {
    direction: rtl
}

.ant-upload-rtl.ant-upload.ant-upload-select-picture-card {
    float: right;
    margin-right: 0;
    margin-left: 8px
}

.ant-upload-list-rtl {
    direction: rtl
}

.ant-upload-list-rtl .ant-upload-list-item-list-type-text:hover .ant-upload-list-item-name-icon-count-1 {
    padding-right: 22px;
    padding-left: 14px
}

.ant-upload-list-rtl .ant-upload-list-item-list-type-text:hover .ant-upload-list-item-name-icon-count-2 {
    padding-right: 22px;
    padding-left: 28px
}

.ant-upload-list-rtl .ant-upload-list-item-name {
    padding-right: 22px;
    padding-left: 0
}

.ant-upload-list-rtl .ant-upload-list-item-name-icon-count-1 {
    padding-left: 14px
}

.ant-upload-list-rtl .ant-upload-list-item-card-actions {
    right: auto;
    left: 0
}

.ant-upload-list-rtl .ant-upload-list-item-card-actions .anticon {
    padding-right: 0;
    padding-left: 5px
}

.ant-upload-list-rtl .ant-upload-list-item-info {
    padding: 0 4px 0 12px
}

.ant-upload-list-rtl .ant-upload-list-item .anticon-close {
    right: auto;
    left: 4px
}

.ant-upload-list-rtl .ant-upload-list-item-error .ant-upload-list-item-card-actions .anticon {
    padding-right: 0;
    padding-left: 5px
}

.ant-upload-list-rtl .ant-upload-list-item-progress {
    padding-right: 26px;
    padding-left: 0
}

.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-thumbnail,.ant-upload-list-rtl.ant-upload-list-picture .ant-upload-list-item-thumbnail {
    right: 8px;
    left: auto
}

.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-icon,.ant-upload-list-rtl.ant-upload-list-picture .ant-upload-list-item-icon {
    right: 50%;
    left: auto;
    -webkit-transform: translate(50%,-50%);
    -ms-transform: translate(50%,-50%);
    transform: translate(50%,-50%)
}

.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-name,.ant-upload-list-rtl.ant-upload-list-picture .ant-upload-list-item-name {
    margin: 0 8px 0 0;
    padding-right: 48px;
    padding-left: 8px
}

.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-name-icon-count-1,.ant-upload-list-rtl.ant-upload-list-picture .ant-upload-list-item-name-icon-count-1 {
    padding-right: 48px;
    padding-left: 18px
}

.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-name-icon-count-2,.ant-upload-list-rtl.ant-upload-list-picture .ant-upload-list-item-name-icon-count-2 {
    padding-right: 48px;
    padding-left: 36px
}

.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-progress,.ant-upload-list-rtl.ant-upload-list-picture .ant-upload-list-item-progress {
    padding-right: 56px;
    padding-left: 0
}

.ant-upload-list-rtl.ant-upload-list-picture-card .anticon-close,.ant-upload-list-rtl.ant-upload-list-picture .anticon-close {
    right: auto;
    left: 8px
}

.ant-upload-list-rtl .ant-upload-list-picture-card-container,.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item {
    float: right;
    margin: 0 0 8px 8px
}

.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-actions {
    right: 50%;
    left: auto;
    -webkit-transform: translate(50%,-50%);
    -ms-transform: translate(50%,-50%);
    transform: translate(50%,-50%)
}

.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-file+.ant-upload-list-item-name {
    margin: 8px 0 0;
    padding: 0
}

.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-info {
    padding: 0
}

::-webkit-input-placeholder {
    color: #949494;
    font-size: 12px
}

::-webkit-scrollbar-thumb {
    background-color: #d7d7d7;
    height: 50px;
    outline-offset: -2px;
    outline: 1px solid #fff;
    -webkit-border-radius: 4px;
    border: 2px solid transparent
}

::-webkit-scrollbar-thumb:hover {
    background-color: #8c8c8c;
    height: 50px;
    -webkit-border-radius: 4px
}

::-webkit-scrollbar {
    width: 4px;
    height: 8px
}

::-webkit-scrollbar-track-piece {
    background-color: transparent;
    -webkit-border-radius: 0
}

ul {
    list-style: none
}

body,html {
    margin: 0;
    padding: 0
}

body {
    font: 14px/1.5 Arial,Microsoft Yahei,sans-serif;
    color: #222d33
}

a {
    text-decoration: none
}

*,:after,:before {
    box-sizing: border-box
}

.show {
    display: block!important
}

.hide {
    display: none!important
}

#root {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden
}

.noselect {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.clearfix:after {
    content: "";
    height: 0;
    overflow: hidden;
    clear: both;
    display: block;
    visibility: hidden
}

.view-next-btn {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #e4e4e4
}

.view-next-btn,.view-next-btn p {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center
}

.view-next-btn p {
    width: 330px;
    height: 60px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-color: hsla(0,0%,95%,.8);
    border-radius: 4px;
    font-size: 14px;
    color: #1890ff;
    cursor: pointer
}

.view-next-btn p.is-disabled {
    background-color: #f2f2f2;
    color: #ccc;
    cursor: not-allowed
}

.MuiSvgIcon-root {
    width: 24px!important;
    height: 24px!important
}

/*# sourceMappingURL=main.fef2a8ba.css.map*/
