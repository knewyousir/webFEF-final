//Event Delegator

document.addEventListener('click', (e) => {
	if (e.target.id == "hambImg") {
        event.preventDefault();
		unfoldMenu(e.target)
	}
	else if ((e.target.id).slice(0,3) === "acc") {
        event.preventDefault();
        renderContent(jsonResponse[(e.target.id.slice(3,4))]);
        (document.querySelector('#nav')).removeAttribute('class', '.active');
    }
    else if (e.target.id === "refresh") {
        event.preventDefault();
        getData();
    }
}, false)

// Functions called elsewhere
var removeActiveClass = function (elements) {
	document.querySelectorAll(elements).forEach( (elem) => {
		elem.classList.remove('active')
	})
}

var addActiveClass = function (element) {
	element.classList.add('active')
}

// Hamburger menu unfold
var unfoldMenu = function (elem) {
	var menu = document.querySelector('#nav');
	if (menu.classList.contains('active')) {
		menu.classList.remove('active');
	} else {
		menu.classList.add('active');
	}
}

// AJAX

const nytapi = '6310a97dde7143a9b8b4fed9aa6b0f81';
const url = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=" + nytapi;
jsonResponse = {}

function renderContent(data) {
    data = data;
    var headingTitle = document.querySelector('#headingTitle');
    var author = document.querySelector('#author');
    var timestamp = document.querySelector('#timestamp');
    var shortDesc = document.querySelector('#shortDesc');
    var artclImg_img = document.querySelector('#artclImg-img');
    var artclImg_text = document.querySelector('#artclImg-text');
    var articleText = document.querySelector('#articleText');
    headingTitle.innerHTML = data.title;
    author.innerHTML = data.byline;
    timestamp.innerHTML = data.published_date.slice(0,10);
    shortDesc.innerHTML = data.abstract;
    // shortDesc.innerHTML = "";
    artclImg_img.src = data.multimedia[4].url;
    artclImg_text.innerHTML = data.multimedia[4].caption;
    articleText.innerHTML = loremCopy;
}

var addContent = function (stories) {
    stories = stories.results.slice(0,5);
    jsonResponse = stories;
    // set first item on page
    renderContent(stories[0]);
}

var getData = function () {
	fetch(url)
	.then(response => response.json())
	.then(json => addContent(json))
};

getData();

// Raw Data

const loremCopy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia quis vel eros. A scelerisque purus semper eget duis at tellus at urna. Vitae justo eget magna fermentum iaculis eu non diam. Ipsum faucibus vitae aliquet nec ullamcorper. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Viverra vitae congue eu consequat ac felis donec et. Fringilla urna porttitor rhoncus dolor purus non. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Mattis pellentesque id nibh tortor id aliquet lectus proin. Netus et malesuada fames ac turpis egestas. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Adipiscing enim eu turpis egestas pretium. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.<br><br>Quis enim lobortis scelerisque fermentum dui. Vitae justo eget magna fermentum iaculis eu non diam. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Natoque penatibus et magnis dis. Sit amet venenatis urna cursus eget. Massa placerat duis ultricies lacus sed turpis. Vulputate enim nulla aliquet porttitor lacus luctus. Viverra orci sagittis eu volutpat odio facilisis mauris sit. Fermentum leo vel orci porta non pulvinar neque. Dui accumsan sit amet nulla facilisi. Sodales ut etiam sit amet nisl purus in mollis nunc. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. In ornare quam viverra orci sagittis eu volutpat odio. Quam lacus suspendisse faucibus interdum posuere. Eget aliquet nibh praesent tristique magna sit. Leo duis ut diam quam nulla porttitor massa id. Etiam sit amet nisl purus in. Dui ut ornare lectus sit amet est placerat in. Cras ornare arcu dui vivamus arcu felis bibendum. Pellentesque adipiscing commodo elit at imperdiet.<br><br>Lacinia at quis risus sed vulputate odio ut enim. Arcu non sodales neque sodales. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Tortor at risus viverra adipiscing. Fringilla est ullamcorper eget nulla facilisi. Mattis enim ut tellus elementum sagittis vitae et leo duis. Ultrices eros in cursus turpis massa tincidunt dui ut. Ac turpis egestas integer eget aliquet nibh praesent. Eget arcu dictum varius duis at consectetur lorem donec massa. Iaculis urna id volutpat lacus laoreet non curabitur. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Mauris pellentesque pulvinar pellentesque habitant morbi. Ullamcorper malesuada proin libero nunc consequat interdum. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Lorem mollis aliquam ut porttitor leo a diam sollicitudin.<br><br>Ac odio tempor orci dapibus ultrices. Suspendisse sed nisi lacus sed viverra tellus in hac. Magna fringilla urna porttitor rhoncus dolor. Integer vitae justo eget magna fermentum. Et magnis dis parturient montes nascetur ridiculus mus mauris. Eu non diam phasellus vestibulum lorem. Diam maecenas sed enim ut. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Lacus luctus accumsan tortor posuere ac ut consequat. Venenatis cras sed felis eget velit aliquet sagittis id. Pellentesque habitant morbi tristique senectus et netus.<br><br>Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Faucibus a pellentesque sit amet porttitor eget. Adipiscing elit duis tristique sollicitudin nibh. Tincidunt eget nullam non nisi est sit amet facilisis. Arcu non odio euismod lacinia at quis risus sed. Viverra tellus in hac habitasse platea dictumst. Egestas sed sed risus pretium. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Euismod elementum nisi quis eleifend. Nibh praesent tristique magna sit amet purus gravida quis. Venenatis lectus magna fringilla urna porttitor rhoncus. Lacus sed turpis tincidunt id aliquet. Cras adipiscing enim eu turpis. Mauris nunc congue nisi vitae suscipit. Egestas integer eget aliquet nibh praesent tristique magna sit. Consequat ac felis donec et odio pellentesque diam volutpat commodo.";