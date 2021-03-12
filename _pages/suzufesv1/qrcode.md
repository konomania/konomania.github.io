---
layout: page
title: QRコード
sort_order: 2
---
# {{ page.title }}
ARイラストを見たい方は、こちらを押してください。[「準備／閲覧」]({{ '/suzufesv1/howto' | absolute_url }})

閲覧したいQRコードを１つ選択してください。

<section class="tabbed-container">
<div class="tabs">
<ul>
  <li class="tab-item" data-id="all"><a href="#" onclick="switchTab('all')">全員</a></li>
  <li class="tab-item" data-id="konomi"><a href="#" onclick="switchTab('konomi')">鈴木このみ</a></li>
  <li class="tab-item" data-id="asca"><a href="#" onclick="switchTab('asca')">ASCA</a></li>
  <li class="tab-item" data-id="exina"><a href="#" onclick="switchTab('exina')">EXiNA</a></li>
  <li class="tab-item" data-id="asaka"><a href="#" onclick="switchTab('asaka')">亜咲花</a></li>
  <li class="tab-item" data-id="mythroid"><a href="#" onclick="switchTab('mythroid')">MYTH&ROID</a></li>
  <li class="tab-item" data-id="atsuko"><a href="#" onclick="switchTab('atsuko')">atsuko from angela</a></li>
</ul>
</div>

<div class="tab-contents">
  <div id="all" class="tab-content" markdown="1">
  ![QRコード]({{ 'assets/images/pattern-all.png' | absolute_url }}){:.qrcode}
  </div>
  <div id="asca" class="tab-content" markdown="1">
  ![QRコード]({{ 'assets/images/pattern-asca.png' | absolute_url }}){:.qrcode}
  </div>
  <div id="exina" class="tab-content" markdown="1">
  ![QRコード]({{ 'assets/images/pattern-exina.png' | absolute_url }}){:.qrcode}
  </div>
  <div id="konomi" class="tab-content" markdown="1">
  ![QRコード]({{ 'assets/images/pattern-konomi.png' | absolute_url }}){:.qrcode}
  </div>
  <div id="asaka" class="tab-content" markdown="1">
  ![QRコード]({{ 'assets/images/pattern-asaka.png' | absolute_url }}){:.qrcode}
  </div>
  <div id="mythroid" class="tab-content" markdown="1">
  ![QRコード]({{ 'assets/images/pattern-mythroid.png' | absolute_url }}){:.qrcode}
  </div>
  <div id="atsuko" class="tab-content" markdown="1">
  ![QRコード]({{ 'assets/images/pattern-atsuko.png' | absolute_url }}){:.qrcode}
  </div>
</div>
</section>

<script src="{{ 'assets/js/tabbedcontainer.js' | relative_url }}"></script>
