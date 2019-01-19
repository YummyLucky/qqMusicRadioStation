// 解析json文件
var modleTitles = new Array;
for (let i = 0; i < activeCreateModeItems.radioStation.length; i++) {

  // 找到当前电台模块的分类
  let thisModle = activeCreateModeItems.radioStation[i]

  // 将当前分类的名字class存入数组modleTitles中
  modleTitles.push(thisModle.class);

  // 操作DOM元素
  // left
  var $leftLine = $('.left ul:first-child')
  if (i == 0) {
    $('<li></li><li></li>').appendTo($leftLine)
  } else if (i == activeCreateModeItems.radioStation.length - 1) {
    $('<li></li><li></li><li></li><li></li><li></li><li></li>').appendTo($leftLine)
  } else {
    $('<li></li><li></li><li></li><li></li>').appendTo($leftLine)
  }
  var $leftText = $('.left ul:last-child')
  $('<li><a href="#">' + thisModle.class + '</a></li>').appendTo($leftText)
  // right
  var $right = $('.right')
  $('<div class="modleTitle" id="modleTitle_'+i+'"><span>'+thisModle.class+'</span><span></span></div>')
  .appendTo($right)


  // 遍历模块里的每个电台
  for (let j = 0; j < thisModle.radios.length; j++) {

    // 找到当前电台
    let thisRadio = thisModle.radios[j]
    // console.log(thisRadio)

    // 操作DOM元素
    $('<div><a href="" music="'+thisRadio.music+'"><img src="'+thisRadio.img+'" alt=""><i></i></a><a href="" music="'+thisRadio.music+'">'+thisRadio.name+'</a><span>'+thisRadio.playCount+'</span></div>')
    .appendTo($right)
    // Todo 用jQuery添加伪类，宽不变，高为0，3个，占位，让每个电台分类最后的电台位置靠左展示




  }



}
console.log(activeCreateModeItems)
console.log(modleTitles)