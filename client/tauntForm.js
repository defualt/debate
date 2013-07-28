addTemplateHelper('tauntForm','rendered',function(e) {
  var self = this
  var $frame = $(self.lastNode);
  if(typeof this.alreadyRendered === 'undefined'){
    this.alreadyRendered = true;
    $frame.find('.tagsInput').tagsInput({width:'auto'});
  } 
})

setTemplateEvents('tauntForm',{ 
  "click button": function (e, tmpl, x) {
    console.log('asdfhfhfhfhfhfhf')
    var self = this;
    var tauntValue = $(e.target).closest('form').find('.tauntInput').val();
    var tagsArray = $(e.target).closest('form').find('.tagsInput').val().split(',');
    console.log(tagsArray)
    var newTaunt = {
      taunt:{
        bodyText:tauntValue,
        datePosted: new Date(),
        tags: tagsArray
      },
      responses:[],
      discussion:[],
      latestresponses:'zzz',
      latestdiscussion:'zzz'
    };
    console.log('insert')
    tauntColl.insert(newTaunt);

    return false

  },
  "keyup input": function(e){
    var listingFrame = $(e.target).closest('.chat').find('.listingFrame')
    var listingHeight = listingFrame.find('.listing').height()
    $(e.target).closest('.chat').find('.listingFrame').scrollTop(listingHeight)
  }
})