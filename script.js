'use strict'
$(function(){

var cats = [{
  link : "http://cdn.mtlblog.com/uploads/2015/11/cute-cat1.jpg",
  name: "firstCat",
  clicked: 1,
  id: '#first'
}, {
  link : "http://www.medhatspca.ca/sites/default/files/news_photos/2014-Apr-15/node-147/cute-little-cat.jpg",
  name: 'secondCat',
  clicked: 1,
  id: '#second'
}]

var utilityInfoForCats = {
  classForNameRendering : '.cat-name',
  classForClicksRendering : '.number-of-clicks',
  classForClickButton : '.click-button',
  classForCatImage : '.img-cat'
}



for (let i = 0; i < cats.length; i++) {
  let catName = cats[i].id + ' ' + utilityInfoForCats.classForNameRendering
    // debugger
  $(catName).text(cats[i].name)
  let buttonForClicks = cats[i].id + ' ' + utilityInfoForCats.classForClickButton
  let clicksRendering = cats[i].id + ' ' + utilityInfoForCats.classForClicksRendering
  $(buttonForClicks).click(function() {
    $(clicksRendering).text(cats[i].clicked)
    cats[i].clicked++
  })
  let imageRendering = cats[i].id + ' ' + utilityInfoForCats.classForCatImage
  $(imageRendering).attr("src", cats[i].link)
}
})
