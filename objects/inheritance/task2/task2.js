
class App {
    constructor(name, licence, stars){
        this.name = name
        this.licence = licence
        this.stars = stars
    }
    isCCLicence(){
        return this.licence.toLowerCase().includes('cc')
    }
    like(){
        return this.stars += 1
    }
    showStars(){
        return console.log(this.stars)
    }
}

class WebApp extends App {
    constructor(name, licence, stars, url, technologies){
        super(name, licence, stars)
        this.url = url
        this.technologies = technologies
    }
    getData(){
        return console.log(this.name+' '+this.licence+' '+this.stars+' '+this.url+' '+this.technologies);
    }
    reactBased(){
        return this.technologies.toLowerCase().includes('react')
    }
}

class MobileApp extends App {
    constructor(name, licence, stars, platforms){
        super(name, licence, stars)
        this.platforms = platforms
    }
    getData(){
        return console.log(this.name+' '+this.licence+' '+this.stars+' '+this.platforms);
    }
    forAndroid(){
        return this.platforms.toString().toLowerCase().includes('android')
    }
}

var viber = new MobileApp('Viber', 'CC', 5, ['android', 'iOs', 'Mac']);
viber.getData();
console.log(viber.forAndroid());
console.log(viber.isCCLicence());
viber.showStars();
viber.like();
viber.showStars();
