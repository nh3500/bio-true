const NavTop = Vue.createApp({
  data() {
    return {

    }
  },
  template: `<nav class="navbar-inverse navbar-static-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <!--ul class="nav navbar-nav"-->
        <ul class="nav">
          <div class="pull-right" style="padding:15px">
            <!-- 語言 -->


           
            <font size='4' class="linklang">
              <a href='index.html'>繁體中文</a> &nbsp; | &nbsp;
              <a href='En_index.html'>English</a> </font>

          </div>
          <div class='shrink-logo' style='background-image: url(./images/logo_white.png);'>
            <!-- <img class='shrink-logo' style="width:242px"src="images/logo_white.png" alt=歡迎光臨新樂康有限公司> -->
          </div>

          <form id='searchform' name='searchform' method='post' action='search.html'>
            <div class="col-lg-3 pull-right ">
              <div class="input-group ">
              <input id='searchdata' name='searchdata' type="text" class="form-control"
              placeholder='找產品'>
            <span class="input-group-btn">
              <button class="btn btn-default" type="button" onclick="window.open('search.html', 'search','width='+(window.screen.availWidth-10)+',height='+(window.screen.availHeight-30)+ ',top=0,left=0');"><span
                  class="glyphicon glyphicon-search" aria-hidden="true"></span></button>

            </span>
              </div><!-- /input-group搜尋按鈕 -->
            </div><!-- /.col-lg-6 -->
          </form>

        </ul>
        <!--a class="navbar-toggle collapsed navbar-brand"  href="#"><span class="glyphicon glyphicon-user" aria-hidden="true"></span>登入< /a-->

        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
          aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>

        </button>




      </div>

      <!--div id="navbar" class="navbar-collapse collapse"-->


      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">

          <li><a href='index.html'>
              <font size='4'>首頁</font>
            </a></li>
          <li><a href='about.html'>
              <font size='4'>關於我們</font>
            </a></li>
          <li class='dropdown'>
            <a href='#' class='dropdown-toggle' data-toggle='dropdown'>
              <font size='4'>保健原料</font> <span class='caret'></span>
            </a>
            <ul class='dropdown-menu' role='menu'>
              <li><a href='product1.html'>
                  <font size='4'>原料類別</font>
                </a></li>
              <li><a href='product2.html'>
                  <font size='4'>特色原料</font>
                </a></li>
              <li><a href='product3.html'>
                  <font size='4'>功能性原料</font>
                </a></li>
              <li><a href='product3.html'>
                  <font size='4'>寵物原料</font>
                </a></li>
            </ul>
          </li>
          <li class='dropdown'>
            <a href='#' class='dropdown-toggle' data-toggle='dropdown'>
              <font size='4'>配方設計</font> <span class='caret'></span>
            </a>
            <ul class='dropdown-menu' role='menu'>
              <li><a href='mdesign.html'>
                  <font size='4'>ODM</font>
                </a></li>
              <li><a href='mdesign.html#section1'>
                  <font size='4'>劑型開發</font>
                </a></li>
            </ul>
          </li>
          <li><a href='#'>
              <font size='4'>健康資訊</font>
            </a></li>
          <li><a href='trading.html'>
              <font size='4'>最新消息</font>
            </a></li>
          <li><a href='contact.html'>
              <font size='4'>聯絡我們</font>
            </a></li>



        </ul>
      </div>
    </div>
  </nav>`,


})

NavTop.mount('#NavTop')


const Footer = Vue.createApp({
  data() {
    return {

    }
  },
  template: `  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-6 col-12">
          <div class="footer_blog_section">
            <img src="images/logo.png" alt="#" style="width: 198px;" />
            <p style="margin-top: 5px; font-size: 1rem;">新樂康是一家 以“創新 快樂
              健康”為宗旨的年輕有活力的公司，公司主要從事進出口保健食品原料、有機食品原料、化妝品原料及代工OEM、ODM等服務。<br><br>公司秉持著對客戶之誠信理念，提供最好品質的要求，在我們全方位的服務下，提供客戶完整的需求，給予技術研發及市場行銷等專業化服務，與客戶共同成長。<br><br>我們結合了國內外的先進的研發技術及經驗豐富專業研發人員與營養師，隨時為你提供最佳的服務品質，無論是原料、新產品研發、配方設計至產品代工，只要是您的需要即為我們的工作目標。我們也將繼續發揚此信念，不斷研發創新，以提供更好服務。
            </p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12">
          <div class="item">
            <h4 class="text-uppercase">聯絡資訊</h4>
            <p>E-mail: admin@bio-true.com.tw</p>
            <p><strong>台灣總公司：新樂康有限公司 </strong></p>
            <p><img src="" alt="" />地址：台中市太平區太順路329號 </p>
            <p> 電話：+886-4-23960263</p>
            <p><img src="" alt="" />傳真：+886-4-23960273</p>
            <p><strong>中國辦事處：杭州欣生喜生物技術有限公司</strong> </p>
            <p>地址：杭州市江干区秋涛北路332号4幢6层601室</p>

          </div>
        </div>
        <div class="col-lg-3 col-md-12 col-12">
          <div class="item">
            <h4 class="text-uppercase">台灣總公司</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.3522463772515!2d120.71673751430882!3d24.159376284389367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34691806bcc70fb5%3A0x4ec644dd5e0dc4d1!2zNDA25Y-w5Lit5biC5aSq5bmz5Y2A5aSq6aCG6LevMzI56Jmf!5e0!3m2!1szh-TW!2stw!4v1612751287467!5m2!1szh-TW!2stw"
              width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen=""></iframe>

          </div>
        </div>
      </div>
    </div>
    <div class="copyright text-center">
      <p>Copyright 2021 Design by <a href="#">新樂康有限公司</a></p>
    </div>
  </footer>`,


})

Footer.mount('#Footer')