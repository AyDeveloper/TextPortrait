const webshot = require("webshot");

webshot('https://amazon.com', 'portrait.png', function(err){
  if (!err) {
    console.log('screenshot taken');
  }
});

const mainForm = document.querySelector('.mainForm');
const display = document.querySelector('.display')
mainForm.addEventListener('submit', e => {
    e.preventDefault();
    display.style.display = "flex";
    let selectValue = mainForm.actionType.value;
    let imgvalue = mainForm.img.files;

    if (!imgvalue.length) {
        display.innerHTML = '<p>No files selected</p>'
    } else {
        display.innerHTML = "";
        const imgDiv = document.createElement("div");
        imgDiv.classList.add('imgDiv');
        imgDiv.setAttribute('id', "photo");
        display.appendChild(imgDiv);
        for (let i = 0; i < imgvalue.length; i++) {
            const pText = document.createElement("p");
            // pText.setAttribute('id', "photo");
            pText.innerHTML = "You were someone I don’t know before; you were someone I don’t expect I will get along with. But it turned out you have given me one of the best moment.  Maybe, I don’t really know you that well. I don’t know how you exactly act, but those things will not keep me away from you. Coz those are my reasons why I’m here… to know you much better. Maybe, I don’t really know you that well. I don’t know how you exactly act, but those things will not keep me away from you. Coz those are my reasons why I’m here… to know you much better.  An empty stomach needs food, an empty brain needs knowledge, an empty house needs a family, and an empty heart needs love. But then, an empty life needs a friend, thanks for filling in.  True bonding is not measured by the time spent together or the favors done for each other but by the comfort you find when you realized that you care for each other.God puts certain person in our lives for a reason, and whatever God had in mind for bringing you into mine, I don’t really mind. I’m just thankful He did! I’m proud of myself because I was given a chance to meet someone like you. Whatever happens, I’ll always treasure you because I know, I’ll never have another friend like you.  There is no such thing as coincidence! People met for a special reason. But whatever it is, I’m so glad I have you in my life! Clueless? Oh come on! Let’s just say that we are meant to befriend.  I don’t regret the things I have done and the thing I didn’t do, for somewhere along the way, I must have done something right because I ended up with a friend like you.  You were someone I don’t know before; you were someone I don’t expect I will get along with. But it turned out you have given me one of the best moment.  Maybe, I don’t really know you that well. I don’t know how you exactly act, but those things will not keep me away from you. Coz those are my reasons why I’m here… to know you much better. Maybe, I don’t really know you that well. I don’t know how you exactly act, but those things will not keep me away from you. Coz those are my reasons why I’m here… to know you much better.  An empty stomach needs food, an empty brain needs knowledge, an empty house needs a family, and an empty heart needs love. But then, an empty life needs a friend, thanks for filling in.  True bonding is not measured by the time spent together or the favors done for each other but by the comfort you find when you realized that you care for each other.God puts certain person in our lives for a reason, and whatever God had in mind for bringing you into mine, I don’t really mind. I’m just thankful He did! I’m proud of myself because I was given a chance to meet someone like you. Whatever happens, I’ll always treasure you because I know, I’ll never have another friend like you.  There is no such thing as coincidence! People met for a special reason. But whatever it is, I’m so glad I have you in my life! Clueless? Oh come on! Let’s just say that we are meant to befriend.  I don’t regret the things I have done and the thing I didn’t do, for somewhere along the way, I must have done something right because I ended up with a friend like you.  You were someone I don’t know before; you were someone I don’t expect I will get along with. But it turned out you have given me one of the best moment.  Maybe, I don’t really know you that well. I don’t know how you exactly act, but those things will not keep me away from you. Coz those are my reasons why I’m here… to know you much better. Maybe, I don’t really know you that well. I don’t know how you exactly act, but those things will not keep me away from you. Coz those are my reasons why I’m here… to know you much better.  An empty stomach needs food, an empty brain needs knowledge, an empty house needs a family, and an empty heart needs love. But then, an empty life needs a friend, thanks for filling in.  True bonding is not measured by the time spent together or the favors done for each other but by the comfort you find when you realized that you care for each other.God puts certain person in our lives for a reason, and whatever God had in mind for bringing you into mine, I don’t really mind. I’m just thankful He did! I’m proud of myself because I was given a chance to meet someone like you. Whatever happens, I’ll always treasure you because I know, I’ll never have another friend like you.  There is no such thing as coincidence! People met for a special reason. But whatever it is, I’m so glad I have you in my life! Clueless? Oh come on! Let’s just say that we are meant to befriend.  I don’t regret the things I have done and the thing I didn’t do, for somewhere along the way, I must have done something right because I ended up with a friend like you.";
            pText.classList.add('pText');
            let src = URL.createObjectURL(imgvalue[i]);
            pText.style.backgroundImage= `url(${src})`;
            pText.onload = function() {
              URL.revokeObjectURL(src);
            }
            imgDiv.appendChild(pText);

        }
    }


    mainForm.reset();

    takeScreenshot.style.display = 'block'
    
})


const takeScreenshot = document.querySelector('.takeScreenshot');
takeScreenshot.addEventListener('click', () => {
  // html2canvas(document.querySelector('#photo'), {
  //               onrendered: function(canvas) {
  //                   // document.body.appendChild(canvas);
  //                 return Canvas2Image.saveAsPNG(canvas);
  //               }
  //           });

  // webshot('https://amazon.com', 'portrait.png', function(err){
  //   if (!err) {
  //     console.log('screenshot taken');
  //   }
  // });        
})




  