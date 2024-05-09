
export function triggerChooseimg() {

    function chooseimg() {
        console.log('ddd')
        // Get all elements with the class 'image-preview'
        const image_bx = document.querySelectorAll('.imageupload-bx');
        // Attach a click event listener to each element with the class 'image-preview'
        image_bx.forEach((imageElement) => {
            imageElement.addEventListener('click', () => {
                sessionStorage.setItem("imageId", imageElement.children[0].id);
                sessionStorage.setItem("imagevalueId", imageElement.children[1].id);
                chooseimg1();
            });
        });
    }
    chooseimg();

    function chooseimg1() {

        // Get all elements with the class 'image-preview'
        const imagePreviewElements = document.querySelectorAll('.getimg');
        if (imagePreviewElements) {
            // Attach a click event listener to each element with the class 'image-preview'
            imagePreviewElements.forEach((imageElement) => {
                imageElement.addEventListener('click', () => {
                    // Call the displayImageInfo function with the clicked image element
                    displayImageInfo(imageElement);
                });
                console.log('step2')
            });
        }
    }


    function displayImageInfo(imageElement) {
        const myimageId = sessionStorage.getItem("imageId");
        const imagevalueId = sessionStorage.getItem("imagevalueId");


        const previewImg = document.getElementById(myimageId);

        const inputElement = document.getElementById(imagevalueId);
        // Get the src attribute of the clicked image
        var src = imageElement.getAttribute("src");

        // Set the value of the input to the src attribute
        inputElement.value = src;
        console.log(src)
        previewImg.src = inputElement.value;


    }

}
