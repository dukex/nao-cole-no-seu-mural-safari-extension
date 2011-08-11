duke(document).ready(function () {
  setInterval(duke.removePost, 2000);
});

duke.removePost = function () {
  duke("#home_stream li").each(function () {
    post = duke(this);
    if(duke.isBadPost(post))
      duke.trash(post);
  });
}

duke.isBadPost = function (post) {
    wall_text = post.find(".storyContent .messageBody").text();
    pattern = /cole no seu mural|COLE ISSO NO SEU MURAL/gi;
    return wall_text.match(pattern);
}

duke.trash = function (item) {
  item.hide();
}
