export function addClass (el, className) {
  console.log(hasClass(el,className))
 if(hasClass(el,className)){
   return
 }

 let newClass=el.className.split(' ')
  newClass.push(className)
  el.className=newClass.join(' ')
  console.log('11')
}

export function hasClass (el, className) {
  let reg=new RegExp('(^|\\s)'+className+'(\\s|$)')
 console.log("22")
}

export function getData(el,name,val) {
 const prefix="data-"
  name=prefix+name
  if (val)
  {
    return el.setAttribute(name,val)
  }else
  {
    return  el.getAttribute(name)
  }
}
