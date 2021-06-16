function App (name, licence, stars){
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}
App.prototype.isCCLicence = function(){
    if (this.licence.includes('CC')){
        return true;
    } else {
        return false;
    }
}
App.prototype.like = function(){
    return this.stars=this.stars+1;
}
App.prototype.showStars = function(){
    return console.log(this.stars);
}

function WebApp (name, licence, stars, url, technologies){
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}
WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;
WebApp.prototype.getData = function(){
    return console.log(this.name + ' ' + this.licence + ' ' + this.stars + ' ' + this.url + ' ' + this.technologies);   
}
WebApp.prototype.reactBased = function(){
    if (this.technologies.toLowerCase().includes('react')){
        return true;
    } else {
        return false;
    }
}

function MobileApp (name, licence, stars, platforms){
    App.call(this, name, licence, stars);
    this.platforms = platforms;
}
MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData = function(){
    return console.log(this.name+' '+this.licence+' '+this.stars+' '+this.platforms);
}
MobileApp.prototype.forAndroid = function (){
    if (this.platforms.toLowerCase().includes('android')){
        return true;
    } else {
        return false;
    }
}

var viber = new MobileApp('Viber', 'CC', 5, "Android, Mac, iOs");
viber.getData();
console.log(viber.forAndroid());
console.log(viber.isCCLicence());
viber.showStars();
viber.like();
viber.showStars();