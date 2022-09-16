export function search(numb) {
  if (/[()]/.test(numb)) {
    numb = numb.replace(/[()]/g, "");
  }
  if(/[ ]/.test(numb)) {
    numb = numb.replace(/ /g, "");
  }
  if(/[-]/.test(numb)) {
    numb = numb.replace(/-/g, "");    
  }
  if(!/^[+]/.test(numb)) {
    numb = numb.replace(/^/g, "+");    
  }  
  return numb
}