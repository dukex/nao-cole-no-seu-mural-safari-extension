duke(document).ready(function () {
  duke("#home_stream li").each(function () {
    post = duke(this);
    wall_text = post.find(".storyContent .messageBody").text();
    patt= /cole no seu mural/gi;
    if(wall_text.match(patt)) post.hide();
  });
});
