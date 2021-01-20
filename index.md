---
layout: index
spotlights:
    - title: 企画の趣旨
      description: 企画説明（ARについてなど）
    - title: 最後に
      description: 有志の企画です。お問い合わせ先は
---

{% for spotlight in page.spotlights %}
{% include spotlight.html content = spotlight %}
{% endfor %}