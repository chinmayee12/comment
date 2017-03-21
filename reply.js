var mainLike=0;
var comment=[];
var cFlag=1;//to enable create new comment
var commentNumber=1;

var replyNumber=0;

var increaseLike=function () {
mainLike++;
 document.getElementById("number").value=mainLike;
}
function createLikeButton() {
	 var likeCount=0;
	this.increaseLike=function(e){
		likeCount++;
		console.log(likeCount);
		document.getElementById(e.target.id).innerHTML="like "+ likeCount;
	}
}
function createInputBox(inp){
	var inpElm=document.createElement("input");
		inpElm.type=inp.type;
		inpElm.id=inp.id;
		return inpElm;
}
function createButton(inp){
	var newButton=document.createElement("button");
		newButton.innerHTML=inp.innerHTML;
		newButton.id=inp.id;
		return newButton;
}
var deleteCommentBox=function(e){
	currentDiv=document.getElementById(e.target.parentElement.id);
	parentDiv=document.getElementById(e.target.parentElement.parentElement.id);
	parentDiv.removeChild(currentDiv);
	cFlag=1;
}

var postComment=function (e){
	var currentInpElm=document.getElementById(e.target.previousElementSibling.previousElementSibling.id);
	console.log(e);
	if (currentInpElm.value.length == 0){
		alert ('Write something to post...');
	}
	else {
		currentInpElm.disabled=true;
		currentDiv=document.getElementById(e.target.parentElement.id);
		currentDiv.removeChild(document.getElementById(e.target.id));
		//var likeButton = new createLikeButton("like"+commentNumber);
		var likeButton =new createButton({innerHTML: 'Like 0',id: "like"+commentNumber});
		likeButton.data=new createLikeButton();
		var replyButton =new createButton({innerHTML: 'Reply',id: "reply"+commentNumber});
		likeButton.onclick=likeButton.data.increaseLike;
		replyButton.onclick=createComment(currentDiv.id);
		currentDiv.appendChild(likeButton);
		currentDiv.appendChild(replyButton);
		cFlag=1;
		commentNumber++;
	}
		
	//parentDiv.removeChild(currentDiv);
}
function createPostButton(inp){
			var postButton=document.createElement("button");
			postButton.innerHTML=inp.innerHTML;
			postButton.onclick=inp.onclick;
			postButton.id=inp.id;
		}
function createComment(id) {
	return function() {		
		if(cFlag){
		cFlag=0;
		var commentBoxDiv=document.createElement("div");
		var inpElm= new createInputBox({type: 'textbox',id: "commentBox"+commentNumber });
		var cancelButton=new createButton({innerHTML: 'Cancel',id: "cancel"+commentNumber});
			cancelButton.onclick=deleteCommentBox;
		var postButton=new createButton({innerHTML: 'Post',id: "post"+commentNumber});
			postButton.onclick=postComment;
		

		var divArea=document.getElementById(id);

		commentBoxDiv.appendChild(inpElm);
		commentBoxDiv.appendChild(cancelButton);
		commentBoxDiv.appendChild(postButton);
		commentBoxDiv.id="comment"+commentNumber;
		if(id != 'comment')
			commentBoxDiv.style="margin-left: 20px";

		divArea.appendChild(commentBoxDiv);
		}
	}
}
function deleteCommentBox(){

}


function linkedList(){
		 var head;
		 var current
	this.setHead=function(n) {
		this.head=n;
		this.current=this.head;
	};

	this.addNode=function(n) {
		
		this.current.next=n;
		this.current=n;
		
	}
	this.dataRetrival=function(){
		var n=this.head
		while(n != null)
		{
			console.log(n.value);
			n=n.next;
		}
	}
}	

document.getElementById('likeButton').addEventListener('click', increaseLike);
document.getElementById('commentButton').addEventListener('click', createComment('comment'));
