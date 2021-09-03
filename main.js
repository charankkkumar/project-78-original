var images = ["https://images-na.ssl-images-amazon.com/images/I/91zbi9M+mKL.jpg","rama.jpg", "indhu.jpg" , "charan.jpg","kayal.jpg"];
var names = ["My family book","My dad-Rama", "My mom-Indhu", "Myself-Charan", "My sister-Kayal"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    
    //Debug the code to store list of names in updatedName. Use names[i]
    
 
    document.getElementById("family_member_image").src = images[i];
    document.getElementById("family_member_name").innerHTML = names[i];
}
