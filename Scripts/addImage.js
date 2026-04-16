var imgList = [new image("Images/Even edit viboe.jpg", false)];  
function imageChange() { 
    if (imgList[textIndex].effect != false) { 
      console.log("test"); 
    } 
    $("img").src = imgList[textIndex]; 
} 
class image {  
  var #src; 
  var #effect; 
  static assert(src, effect) { 
    this.#src = src; 
    this.#effect = effect; 
  } 

  get src() { 
    return this.#src;  
  } 
  get effect() { 
    return this.#effect; 
  }
}
